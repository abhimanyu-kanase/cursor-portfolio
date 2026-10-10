import os
import cv2
import numpy as np

def make_rgba(frame_bgr):
    """
    Key out the textured green wall background with clean anti-aliasing
    and edge despill for the character from character2.mp4.
    """
    hsv = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2HSV)
    h, s, v = hsv[:, :, 0], hsv[:, :, 1], hsv[:, :, 2]
    
    # Background has green hue [28, 90] with saturation and value > 18
    green_mask = (h >= 28) & (h <= 90) & (s >= 18) & (v >= 18)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask_closed = cv2.morphologyEx((green_mask * 255).astype(np.uint8), cv2.MORPH_CLOSE, kernel)
    
    person_mask = cv2.bitwise_not(mask_closed)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(person_mask)
    
    largest_label = 0
    largest_area = 0
    for i in range(1, num_labels):
        area = stats[i, cv2.CC_STAT_AREA]
        if area > largest_area:
            largest_area = area
            largest_label = i
            
    clean_mask = (labels == largest_label).astype(np.uint8) * 255
    clean_mask = cv2.morphologyEx(clean_mask, cv2.MORPH_CLOSE, kernel)
    
    # Edge despill: in edge boundary, neutralize green reflections on skin/hair
    edge_zone = cv2.dilate(clean_mask, kernel, iterations=2) - cv2.erode(clean_mask, kernel, iterations=2)
    rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB).astype(np.float32)
    max_rb = np.maximum(rgb[:, :, 0], rgb[:, :, 2])
    excess_g = np.maximum(0, rgb[:, :, 1] - max_rb)
    rgb[:, :, 1] = np.where(edge_zone > 0, rgb[:, :, 1] - excess_g * 0.8, rgb[:, :, 1])
    
    alpha = cv2.GaussianBlur(clean_mask.astype(np.float32) / 255.0, (5, 5), 0)
    alpha_u8 = (np.clip(alpha, 0.0, 1.0) * 255.0).astype(np.uint8)
    
    # OpenCV imwrite with 4 channels expects BGRA
    bgra = np.dstack([cv2.cvtColor(rgb.astype(np.uint8), cv2.COLOR_RGB2BGR), alpha_u8])
    return bgra

def extract():
    video_path = 'public/character2.mp4'
    frames_dir = 'public/frames'
    os.makedirs(frames_dir, exist_ok=True)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise RuntimeError(f"Could not open {video_path}")

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    print(f"Video Info: {width}x{height}, {fps} FPS, {total_frames} total frames")

    # Read all frames into memory
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()
    print(f"Loaded {len(frames)} frames into memory.")

    # Compass anchor frames verified for character2.mp4:
    # 0 deg (UP): 24
    # 45 deg (UP-RIGHT): 42
    # 90 deg (RIGHT): 58
    # 135 deg (DOWN-RIGHT): 86
    # 180 deg (DOWN): 114
    # 225 deg (DOWN-LEFT): 144
    # 270 deg (LEFT): 168
    # 315 deg (UP-LEFT): 183
    # 360 deg (UP closure): 200
    # Center neutral (Direct eye contact): 238
    anchors = [24, 42, 58, 86, 114, 144, 168, 183, 200]
    center_frame_idx = 238

    # Extract Center frame
    print("Processing center frame...")
    center_bgra = make_rgba(frames[center_frame_idx])
    cv2.imwrite('public/center.webp', center_bgra, [cv2.IMWRITE_WEBP_QUALITY, 92])
    cv2.imwrite(os.path.join(frames_dir, 'center.webp'), center_bgra, [cv2.IMWRITE_WEBP_QUALITY, 92])
    print("Saved center.webp")

    # Sectors 0 to 6 (frames 0..55, 0 deg to 315 deg)
    print("Processing sectors 0 to 6 (frames 0..55)...")
    for i in range(56):
        alpha = i / 64.0
        sector = int(alpha * 8)
        t = (alpha * 8) - sector
        vframe_idx = round(anchors[sector] + t * (anchors[sector + 1] - anchors[sector]))
        vframe = frames[vframe_idx]
        bgra = make_rgba(vframe)
        out_path = os.path.join(frames_dir, f"frame_{i}.webp")
        cv2.imwrite(out_path, bgra, [cv2.IMWRITE_WEBP_QUALITY, 92])
        if i % 10 == 0:
            print(f"Processed frame {i}/64")

    # Sector 7 (frames 56..63, 315 deg to 360 deg) with seamless loop closure
    print("Processing sector 7 with seamless loop closure...")
    f200 = frames[200]
    f24 = frames[24]
    
    # Intermediate frames in sector 7: from frame 183 to frame 200
    s7_indices = [
        183, # Frame 56 (315.0°)
        186, # Frame 57 (320.6°)
        189, # Frame 58 (326.3°)
        192, # Frame 59 (331.9°)
        195, # Frame 60 (337.5°)
        198, # Frame 61 (343.1°)
    ]
    
    for idx_offset, v_idx in enumerate(s7_indices):
        i = 56 + idx_offset
        bgra = make_rgba(frames[v_idx])
        out_path = os.path.join(frames_dir, f"frame_{i}.webp")
        cv2.imwrite(out_path, bgra, [cv2.IMWRITE_WEBP_QUALITY, 92])

    # Frames 62 and 63 blend into frame 24 for 100% seamless 360-degree loop closure
    f62 = (0.15 * f200.astype(float) + 0.85 * f24.astype(float)).astype(np.uint8)
    f63 = (0.05 * f200.astype(float) + 0.95 * f24.astype(float)).astype(np.uint8)
    
    cv2.imwrite(os.path.join(frames_dir, "frame_62.webp"), make_rgba(f62), [cv2.IMWRITE_WEBP_QUALITY, 92])
    cv2.imwrite(os.path.join(frames_dir, "frame_63.webp"), make_rgba(f63), [cv2.IMWRITE_WEBP_QUALITY, 92])

    print("Successfully extracted all 64 WebP frames and center.webp from character2.mp4!")

if __name__ == '__main__':
    extract()
