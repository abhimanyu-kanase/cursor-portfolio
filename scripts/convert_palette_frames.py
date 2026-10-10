import os
import glob
from PIL import Image
import numpy as np

def convert_frame(in_path, out_path):
    img = Image.open(in_path).convert('RGB')
    arr = np.array(img, dtype=np.float32)

    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    bg_color = np.array([239.0, 10.0, 6.0])
    dist = np.sqrt((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2)

    # Smooth, crisp transition
    alpha = np.clip((dist - 35) / 55.0, 0.0, 1.0)
    
    # Edge despill: neutralize bright red reflections on hair/skin boundary
    edge_mask = (alpha < 0.98) & (alpha > 0.05)
    max_gb = np.maximum(g, b)
    excess_r = np.maximum(0, r - max_gb)

    arr_despill = arr.copy()
    arr_despill[:, :, 0] = np.where(edge_mask, r - excess_r * 0.85, r)

    rgba = np.dstack([arr_despill.astype(np.uint8), (alpha * 255).astype(np.uint8)])
    rgba_img = Image.fromarray(rgba, 'RGBA')
    rgba_img.save(out_path, 'WEBP', quality=90)

def main():
    frames_dir = 'public/frames'
    print("Converting center frame...")
    convert_frame('public/center.webp', 'public/center.webp')
    convert_frame('public/frames/center.webp', 'public/frames/center.webp')

    print("Converting 64 directional frames...")
    for i in range(64):
        fpath = os.path.join(frames_dir, f"frame_{i}.webp")
        if os.path.exists(fpath):
            convert_frame(fpath, fpath)
            if i % 10 == 0:
                print(f"Processed frame {i}/64")

    print("Successfully converted all frames to transparent RGBA WebP with despill!")

if __name__ == '__main__':
    main()
