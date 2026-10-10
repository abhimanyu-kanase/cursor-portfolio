import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Eye, Compass, Activity, Zap, CheckCircle2 } from 'lucide-react';

interface CharacterTrackerCanvasProps {
  onTelemetryChange?: (data: {
    angleDeg: number;
    frameIndex: number;
    isEyeContact: boolean;
    fps: number;
    distance: number;
    directionName: string;
  }) => void;
}

const TOTAL_FRAMES = 64;
const BG_HEX = '#182713'; // Rich Deep Forest Green background matching character2.mp4
const LERP_FACTOR = 0.26; // Fast response factor for ~35ms zero-lag response

// Normalize angle to [-PI, PI]
function normalizeAngle(rad: number): number {
  let a = rad;
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
}

// Shortest-path angular lerp
function lerpAngle(current: number, target: number, factor: number): number {
  const diff = normalizeAngle(target - current);
  return normalizeAngle(current + diff * factor);
}

// Convert angle to compass direction string
function getDirectionName(deg: number, isEyeContact: boolean): string {
  if (isEyeContact) return 'DIRECT EYE CONTACT';
  const d = (deg + 360) % 360;
  if (d >= 337.5 || d < 22.5) return 'NORTH (UP)';
  if (d >= 22.5 && d < 67.5) return 'NORTH-EAST (UP-RIGHT)';
  if (d >= 67.5 && d < 112.5) return 'EAST (RIGHT)';
  if (d >= 112.5 && d < 157.5) return 'SOUTH-EAST (DOWN-RIGHT)';
  if (d >= 157.5 && d < 202.5) return 'SOUTH (DOWN)';
  if (d >= 202.5 && d < 247.5) return 'SOUTH-WEST (DOWN-LEFT)';
  if (d >= 247.5 && d < 292.5) return 'WEST (LEFT)';
  return 'NORTH-WEST (UP-LEFT)';
}

export const CharacterTrackerCanvas: React.FC<CharacterTrackerCanvasProps> = ({
  onTelemetryChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Preloaded image references
  const framesRef = useRef<HTMLImageElement[]>([]);
  const centerFrameRef = useRef<HTMLImageElement | null>(null);
  const textureImgRef = useRef<HTMLImageElement | null>(null);

  // Loading state
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Live telemetry state
  const [telemetry, setTelemetry] = useState({
    angleDeg: 0,
    frameIndex: 238,
    isEyeContact: true,
    fps: 60,
    directionName: 'DIRECT EYE CONTACT',
  });
  const [showAuditPanel, setShowAuditPanel] = useState<boolean>(false);

  // Tracking animation refs
  const hasUserMovedRef = useRef<boolean>(false);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentAngleRef = useRef<number>(0); // 0 is UP
  const targetAngleRef = useRef<number>(0);
  const isEyeContactRef = useRef<boolean>(true);
  const animationFrameIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);
  const fpsRef = useRef<number>(60);

  // Preload all 64 frames + center.webp + green-texture.webp
  useEffect(() => {
    let mounted = true;
    let loaded = 0;
    const totalToLoad = TOTAL_FRAMES + 2; // 64 directional + 1 center + 1 background texture

    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageLoaded = () => {
      if (!mounted) return;
      loaded++;
      setLoadedCount(loaded);
      if (loaded >= totalToLoad) {
        setIsReady(true);
      }
    };

    // Preload green background texture from photo
    const textureImg = new Image();
    textureImg.src = `${import.meta.env.BASE_URL}green-texture.webp`;
    textureImg.onload = onImageLoaded;
    textureImg.onerror = () => {
      console.warn('Failed to load green-texture.webp, proceeding with solid fill fallback');
      onImageLoaded();
    };
    textureImgRef.current = textureImg;

    // Preload center frame
    const centerImg = new Image();
    centerImg.src = `${import.meta.env.BASE_URL}frames/center.webp`;
    centerImg.onload = onImageLoaded;
    centerImg.onerror = () => {
      centerImg.src = `${import.meta.env.BASE_URL}center.webp`;
      centerImg.onload = onImageLoaded;
    };
    centerFrameRef.current = centerImg;

    // Preload 64 directional frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${import.meta.env.BASE_URL}frames/frame_${i}.webp`;
      img.onload = onImageLoaded;
      img.onerror = () => {
        console.warn(`Failed to load frame_${i}.webp`);
        onImageLoaded();
      };
      images[i] = img;
    }
    framesRef.current = images;

    return () => {
      mounted = false;
    };
  }, []);

  // Pointer move handler (mouse, trackpad, and touch)
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      hasUserMovedRef.current = true;
      mousePosRef.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  // 60 FPS Canvas Render Loop
  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let lastTelemetryTime = 0;

    const renderLoop = (time: number) => {
      // FPS calculation
      frameCountRef.current++;
      if (time - lastTimeRef.current >= 1000) {
        fpsRef.current = Math.round(
          (frameCountRef.current * 1000) / (time - lastTimeRef.current)
        );
        frameCountRef.current = 0;
        lastTimeRef.current = time;
      }

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Adjust canvas resolution for sharp retina rendering
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      // Character size reduced by 25% (0.75 scale factor)
      const imageAspect = 1920 / 1080;
      const canvasAspect = canvas.width / canvas.height;
      const SCALE = 0.75;
      let drawW = canvas.width * SCALE;
      let drawH = canvas.height * SCALE;

      if (canvasAspect > imageAspect) {
        // Viewport is wider than 16:9
        drawW = canvas.width * SCALE;
        drawH = (canvas.width / imageAspect) * SCALE;
      } else {
        // Viewport is taller than 16:9
        drawH = canvas.height * SCALE;
        drawW = (canvas.height * imageAspect) * SCALE;
      }

      const drawX = (canvas.width - drawW) / 2;
      const drawY =
        canvas.height >= drawH ? canvas.height - drawH : (canvas.height - drawH) / 2;

      // Compute exact face center in screen viewport coordinates
      // In source frame: Face X = 47.7%, Face Y = 31.5%
      const faceScreenX = rect.left + (drawX / dpr) + (drawW / dpr) * 0.477;
      const faceScreenY = rect.top + (drawY / dpr) + (drawH / dpr) * 0.315;

      // If user hasn't moved mouse yet, center coordinates on face for eye contact
      if (!hasUserMovedRef.current) {
        mousePosRef.current = { x: faceScreenX, y: faceScreenY };
      }

      const dx = mousePosRef.current.x - faceScreenX;
      const dy = mousePosRef.current.y - faceScreenY;
      const distance = Math.hypot(dx, dy);

      // Deadzone calculation with hysteresis to completely eliminate edge jitter
      const minScreenDim = Math.min(window.innerWidth, window.innerHeight);
      const deadzoneRadius = minScreenDim * 0.12;
      const enterThreshold = deadzoneRadius * 0.88;
      const exitThreshold = deadzoneRadius * 1.12;

      let isEyeContact = isEyeContactRef.current;
      if (isEyeContact) {
        if (distance > exitThreshold) {
          isEyeContact = false;
        }
      } else {
        if (distance < enterThreshold) {
          isEyeContact = true;
        }
      }
      isEyeContactRef.current = isEyeContact;

      // Prevent angle jumping when distance is very small (sub-pixel noise near face origin)
      if (distance > 15) {
        // Calculate target angle from UP (0 rad is UP, PI/2 is RIGHT, PI is DOWN, -PI/2 is LEFT)
        const rawAtan = Math.atan2(dy, dx);
        const targetAngle = normalizeAngle(rawAtan + Math.PI / 2);
        targetAngleRef.current = targetAngle;

        // Circular shortest-path lerp (LERP_FACTOR ~ 0.26 for ~35ms response)
        currentAngleRef.current = lerpAngle(
          currentAngleRef.current,
          targetAngle,
          LERP_FACTOR
        );
      }

      // Convert angle to [0, 2*PI)
      let angleFromUp =
        ((currentAngleRef.current % (2 * Math.PI)) + 2 * Math.PI) %
        (2 * Math.PI);

      // Map to nearest frame index 0..63 with safe circular modular arithmetic
      const frameIndex =
        (Math.floor((angleFromUp / (2 * Math.PI)) * TOTAL_FRAMES + 0.5) %
          TOTAL_FRAMES +
          TOTAL_FRAMES) %
        TOTAL_FRAMES;

      // Select EXACTLY ONE crisp frame at 100% opacity (ZERO GHOSTING)
      const activeImage = isEyeContact
        ? centerFrameRef.current
        : framesRef.current[frameIndex];

      // Draw background: Authentic Green Textured Plaster matching character photo
      let bgDrawn = false;
      if (
        textureImgRef.current &&
        textureImgRef.current.complete &&
        textureImgRef.current.naturalWidth > 0
      ) {
        try {
          const pattern = ctx.createPattern(textureImgRef.current, 'repeat');
          if (pattern) {
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            bgDrawn = true;
          }
        } catch {
          bgDrawn = false;
        }
      }

      if (!bgDrawn) {
        ctx.fillStyle = BG_HEX;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Studio vignette & spotlight matching character lighting in photo
      const spotlight = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.35,
        canvas.width * 0.05,
        canvas.width * 0.5,
        canvas.height * 0.42,
        Math.max(canvas.width, canvas.height) * 0.82
      );
      spotlight.addColorStop(0, 'rgba(68, 102, 50, 0.32)');
      spotlight.addColorStop(0.5, 'rgba(24, 39, 19, 0.45)');
      spotlight.addColorStop(1, 'rgba(10, 18, 8, 0.88)');
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (activeImage && activeImage.complete && activeImage.naturalWidth > 0) {
        ctx.globalAlpha = 1.0;
        ctx.drawImage(activeImage, drawX, drawY, drawW, drawH);
      }

      // Update telemetry throttled to ~10 FPS
      if (time - lastTelemetryTime > 80) {
        lastTelemetryTime = time;
        const rawDeg = Math.round((angleFromUp * 180) / Math.PI);
        const deg = rawDeg === 360 && angleFromUp < Math.PI ? 0 : rawDeg;
        const dirName = getDirectionName(deg, isEyeContact);

        setTelemetry({
          angleDeg: deg,
          frameIndex: isEyeContact ? 238 : frameIndex,
          isEyeContact,
          fps: fpsRef.current,
          directionName: dirName,
        });

        if (onTelemetryChange) {
          onTelemetryChange({
            angleDeg: deg,
            frameIndex: isEyeContact ? 238 : frameIndex,
            isEyeContact,
            fps: fpsRef.current,
            distance: Math.round(distance),
            directionName: dirName,
          });
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [isReady, onTelemetryChange]);

  // Programmatic test helper to guide cursor towards an exact compass angle
  const triggerDirection = useCallback((angleDeg: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const imageAspect = 1920 / 1080;
    const canvasAspect = (rect.width * dpr) / (rect.height * dpr);
    const SCALE = 0.75;
    let drawW = rect.width * dpr * SCALE;
    let drawH = rect.height * dpr * SCALE;

    if (canvasAspect > imageAspect) {
      drawW = rect.width * dpr * SCALE;
      drawH = ((rect.width * dpr) / imageAspect) * SCALE;
    } else {
      drawH = rect.height * dpr * SCALE;
      drawW = (rect.height * dpr * imageAspect) * SCALE;
    }

    const drawX = (rect.width * dpr - drawW) / 2;
    const drawY =
      rect.height * dpr >= drawH
        ? rect.height * dpr - drawH
        : (rect.height * dpr - drawH) / 2;

    const faceScreenX = rect.left + (drawX / dpr) + (drawW / dpr) * 0.477;
    const faceScreenY = rect.top + (drawY / dpr) + (drawH / dpr) * 0.315;

    hasUserMovedRef.current = true;
    const rad = (angleDeg * Math.PI) / 180;
    const dist = Math.min(window.innerWidth, window.innerHeight) * 0.35;
    const targetX = faceScreenX + dist * Math.sin(rad);
    const targetY = faceScreenY - dist * Math.cos(rad);
    mousePosRef.current = { x: targetX, y: targetY };
  }, []);

  const triggerCenter = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const imageAspect = 1920 / 1080;
    const canvasAspect = (rect.width * dpr) / (rect.height * dpr);
    const SCALE = 0.75;
    let drawW = rect.width * dpr * SCALE;
    let drawH = rect.height * dpr * SCALE;

    if (canvasAspect > imageAspect) {
      drawW = rect.width * dpr * SCALE;
      drawH = ((rect.width * dpr) / imageAspect) * SCALE;
    } else {
      drawH = rect.height * dpr * SCALE;
      drawW = (rect.height * dpr * imageAspect) * SCALE;
    }

    const drawX = (rect.width * dpr - drawW) / 2;
    const drawY =
      rect.height * dpr >= drawH
        ? rect.height * dpr - drawH
        : (rect.height * dpr - drawH) / 2;

    const faceScreenX = rect.left + (drawX / dpr) + (drawW / dpr) * 0.477;
    const faceScreenY = rect.top + (drawY / dpr) + (drawH / dpr) * 0.315;
    hasUserMovedRef.current = true;
    mousePosRef.current = { x: faceScreenX, y: faceScreenY };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none"
    >
      {/* Loading Overlay */}
      {!isReady && (
        <div
          className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#182713]"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}green-texture.webp')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '512px 512px',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded-full bg-[#ffd700] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#faf8f3]">
              Initializing 64-Frame Neural Engine...
            </span>
          </div>
          <div className="w-64 h-1 bg-[#0c160a] rounded-full overflow-hidden border border-[#e6c280]/40">
            <div
              className="h-full bg-gradient-to-r from-[#e6c280] via-[#ffd700] to-[#faf8f3] transition-all duration-150 ease-out"
              style={{ width: `${(loadedCount / (TOTAL_FRAMES + 2)) * 100}%` }}
            />
          </div>
          <div className="font-mono text-[11px] text-[#f5d77f] mt-2">
            Loaded {loadedCount} / {TOTAL_FRAMES + 2} WebP Assets ({Math.round((loadedCount / (TOTAL_FRAMES + 2)) * 100)}%)
          </div>
        </div>
      )}

      {/* Full-Screen Canvas (100% ROCK SOLID MOTIONLESS: NO 3D PERSPECTIVE/ROTATEX/Y) */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          backgroundColor: BG_HEX,
          backgroundImage: `url('${import.meta.env.BASE_URL}green-texture.webp')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px',
        }}
      />

      {/* Floating Telemetry & Audit HUD in Bottom-Right */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30 flex flex-col items-end gap-2 pointer-events-auto">
        {showAuditPanel && (
          <div className="tactile-card p-4 rounded-2xl max-w-sm w-full flex flex-col gap-3 font-mono text-xs shadow-2xl backdrop-blur-xl border border-[#3e5630]/80 bg-[#142210]/95 text-[#faf8f3]">
            <div className="flex items-center justify-between border-b border-[#5c3a25]/50 pb-2">
              <span className="font-semibold text-[#faf8f3] tracking-wider uppercase text-[11px] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#ffd700]" /> Live Diagnostics
              </span>
              <span className="text-[11px] text-[#e6c280]/70">FRAME #{telemetry.frameIndex}</span>
            </div>

            {/* Compass Gaze */}
            <div>
              <div className="text-[10px] uppercase text-[#e6c280]/70 tracking-wider mb-1.5">
                Compass Gaze Test:
              </div>
              <div className="grid grid-cols-4 gap-1 text-[11px]">
                <button
                  onClick={() => triggerDirection(0)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ▲ N (0°)
                </button>
                <button
                  onClick={() => triggerDirection(45)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ↗ NE (45°)
                </button>
                <button
                  onClick={() => triggerDirection(90)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ▶ E (90°)
                </button>
                <button
                  onClick={() => triggerDirection(135)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ↘ SE (135°)
                </button>
                <button
                  onClick={() => triggerDirection(180)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ▼ S (180°)
                </button>
                <button
                  onClick={() => triggerDirection(225)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ↙ SW (225°)
                </button>
                <button
                  onClick={() => triggerDirection(270)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ◀ W (270°)
                </button>
                <button
                  onClick={() => triggerDirection(315)}
                  className="px-2 py-1 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 hover:border-[#ffd700]/50 transition text-[#f0ebd8] text-center cursor-pointer"
                >
                  ↖ NW (315°)
                </button>
              </div>
              <button
                onClick={triggerCenter}
                className="w-full mt-1.5 px-2 py-1 rounded bg-[#362216]/80 hover:bg-[#5c3a25] border border-[#e6c280]/40 transition text-[#faf8f3] text-center flex items-center justify-center gap-1.5 cursor-pointer text-[11px]"
              >
                <Eye className="w-3 h-3 text-[#ffd700]" /> Center Eye Contact (Deadzone)
              </button>
            </div>

            {/* 355° - 360° Loop Closure Audit */}
            <div className="pt-2 border-t border-[#5c3a25]/50">
              <div className="text-[10px] uppercase text-[#ffd700] tracking-wider mb-1.5 flex items-center gap-1 font-semibold">
                <Zap className="w-3 h-3 text-[#ffd700]" /> Loop Closure Audit (355°–360°):
              </div>
              <div className="flex flex-wrap gap-1 text-[11px]">
                <button
                  onClick={() => triggerDirection(355)}
                  className="px-2 py-0.5 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 transition text-[#f0ebd8] cursor-pointer"
                >
                  355°
                </button>
                <button
                  onClick={() => triggerDirection(357)}
                  className="px-2 py-0.5 rounded bg-[#ffd700]/15 border border-[#ffd700]/50 hover:bg-[#ffd700]/30 text-[#ffd700] transition font-semibold cursor-pointer"
                >
                  357°
                </button>
                <button
                  onClick={() => triggerDirection(358)}
                  className="px-2 py-0.5 rounded bg-[#ffd700]/15 border border-[#ffd700]/50 hover:bg-[#ffd700]/30 text-[#ffd700] transition font-semibold cursor-pointer"
                >
                  358°
                </button>
                <button
                  onClick={() => triggerDirection(359)}
                  className="px-2 py-0.5 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 transition text-[#f0ebd8] cursor-pointer"
                >
                  359°
                </button>
                <button
                  onClick={() => triggerDirection(360)}
                  className="px-2 py-0.5 rounded bg-[#ffd700]/15 border border-[#ffd700]/50 hover:bg-[#ffd700]/30 text-[#ffd700] transition font-semibold cursor-pointer"
                >
                  360°
                </button>
                <button
                  onClick={() => triggerDirection(2)}
                  className="px-2 py-0.5 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 transition text-[#f0ebd8] cursor-pointer"
                >
                  2°
                </button>
                <button
                  onClick={() => triggerDirection(5)}
                  className="px-2 py-0.5 rounded bg-[#362216]/60 hover:bg-[#5c3a25] border border-[#5c3a25]/50 transition text-[#f0ebd8] cursor-pointer"
                >
                  5°
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowAuditPanel((prev) => !prev)}
          className="px-8 sm:px-10 py-4 sm:py-4.5 bg-[#23150e]/85 hover:bg-[#321e14]/90 border border-[#5c3a25]/75 hover:border-[#ffd700] rounded-full text-sm sm:text-base md:text-lg font-mono font-semibold text-[#faf8f3] hover:text-[#ffd700] transition-all flex items-center gap-2.5 cursor-pointer shadow-[0_8px_30px_rgba(28,15,8,0.7)] backdrop-blur-md hover:scale-105 active:scale-95 hover:shadow-[0_0_28px_rgba(230,194,128,0.35)]"
          title="Toggle Compass & 355°–360° Loop Closure Audit"
        >
          <Compass className="w-5 h-5 text-[#ffd700]" />
          <span>{showAuditPanel ? 'Close Audit' : 'Audit'}</span>
        </button>
      </div>
    </div>
  );
};
