import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  isEyeContact?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ isEyeContact = false }) => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer');
        setIsHovered(Boolean(isClickable));
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animId = 0;
    const updateLoop = () => {
      // Direct instant follow for inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp follow for outer ring
      const factor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Glowing Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full transition-transform duration-75 will-change-transform ${
          isEyeContact
            ? 'bg-[#ffd700] shadow-[0_0_14px_#ffd700,0_0_28px_rgba(255,215,0,0.95)]'
            : 'bg-[#faf8f3] shadow-[0_0_10px_#ffd700,0_0_20px_rgba(230,194,128,0.75)]'
        }`}
      />

      {/* Outer Smooth Trailing Aura Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border will-change-transform flex items-center justify-center transition-all duration-200 ease-out ${
          isEyeContact
            ? 'w-16 h-16 -ml-8 -mt-8 border-[#ffd700] bg-[#ffd700]/15 shadow-[0_0_30px_rgba(255,215,0,0.45)]'
            : isHovered
            ? 'w-16 h-16 -ml-8 -mt-8 border-[#ffd700]/95 bg-[#ffd700]/20 shadow-[0_0_25px_rgba(255,215,0,0.5)] backdrop-blur-[2px]'
            : 'w-10 h-10 -ml-5 -mt-5 border-[#e6c280]/45 bg-[#e6c280]/[0.06] shadow-[0_0_14px_rgba(230,194,128,0.2)]'
        }`}
      >
        {isEyeContact && (
          <span className="font-mono text-[9px] font-bold text-[#ffd700] tracking-wider uppercase select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            FOCUS
          </span>
        )}
      </div>
    </div>
  );
};
