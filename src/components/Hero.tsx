import React, { useState } from 'react';
import { CharacterTrackerCanvas } from './CharacterTrackerCanvas';
import { ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onEyeContactChange?: (isEyeContact: boolean) => void;
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEyeContactChange, onOpenResume, onOpenContact }) => {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-screen h-screen min-h-screen overflow-hidden bg-transparent select-none"
    >
      {/* Full-Screen 60 FPS Cursor Tracking Canvas (100vw x 100vh, object-fit: cover) */}
      <CharacterTrackerCanvas
        isAuditOpen={isAuditOpen}
        onCloseAudit={() => setIsAuditOpen(false)}
        onTelemetryChange={(data) => {
          if (onEyeContactChange) {
            onEyeContactChange(data.isEyeContact);
          }
        }}
      />

      {/* Hero Typography Overlay (Left Side) */}
      <div className="absolute top-[252px] left-6 sm:top-[268px] sm:left-10 md:top-[284px] md:left-12 lg:top-[300px] lg:left-16 z-20 pointer-events-auto max-w-xl xl:max-w-2xl">
        {/* Kicker */}
        <span className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-[0.32em] uppercase text-[#e6c280] block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Hi, I'm
        </span>

        {/* Large editorial serif name */}
        <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] text-[#fffff8] drop-shadow-[0_8px_32px_rgba(230,194,128,0.28),0_12px_45px_rgba(10,18,8,0.9)] leading-[0.92] font-normal tracking-[-0.03em] mb-6 -ml-1">
          Abhimanyu
        </h1>

        {/* Short Profile / Bio */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#faf8f3] font-sans font-light leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(10,18,8,0.8)]">
          Data & AI Engineer specializing in multi-agent LLM systems, scalable cloud data architectures, and real-time interactive interfaces engineered to translate complex technical problems into business-ready intelligence.
        </p>

        {/* Action Buttons: Resume & Let's Talk */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* Resume */}
          <button
            onClick={() => {
              if (onOpenResume) {
                onOpenResume();
              } else {
                window.location.hash = '#/resume';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }
            }}
            className="group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] hover:to-[#ffd700] transition-all duration-200 font-sans font-bold text-sm sm:text-base md:text-lg shadow-[0_8px_32px_rgba(230,194,128,0.45)] flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_12px_40px_rgba(255,215,0,0.65)]"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1c0f08]" />
          </button>

          {/* Let's Talk */}
          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                window.location.hash = '#/contact';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }
            }}
            className="group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#380712]/92 via-[#4a0a18]/90 to-[#2a1a10]/92 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/80 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.6),0_0_16px_rgba(255,215,0,0.3)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
          >
            <span>Let's Talk</span>
          </button>
        </div>
      </div>

      {/* Hero Typography Overlay (Right Side) — Open Editorial Typography */}
      <div className="hidden lg:block absolute top-[252px] right-6 sm:top-[268px] sm:right-10 md:top-[284px] md:right-12 lg:top-[300px] lg:right-16 z-20 pointer-events-auto max-w-lg xl:max-w-xl text-left">
        {/* Kicker matching "Hi, I'm" */}
        <span className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-[0.32em] uppercase text-[#e6c280] block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Welcome to my
        </span>

        {/* Large, stately editorial title matching "Abhimanyu" */}
        <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.8rem] text-[#fffff8] drop-shadow-[0_8px_32px_rgba(230,194,128,0.28),0_12px_45px_rgba(10,18,8,0.9)] leading-[0.96] font-normal tracking-[-0.03em] mb-6">
          Life Portfolio
        </h2>

        {/* Explaining why the space exists */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#faf8f3] font-sans font-light leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(10,18,8,0.8)]">
          Designed as an interactive living exhibition rather than a static resume—bringing engineering craft to life so you can explore real systems, examine architectural thinking, and experience the journey firsthand.
        </p>

        {/* Action Button (Right Side) — Aligned and Symmetrical with Left Side */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <button
            onClick={() => setIsAuditOpen((prev) => !prev)}
            className="group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#380712]/92 via-[#4a0a18]/90 to-[#2a1a10]/92 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/80 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.6),0_0_16px_rgba(255,215,0,0.3)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
            title="Toggle Compass & Gaze Diagnostics"
          >
            <Compass className="w-5 h-5 text-[#ffd700] transition-transform group-hover:rotate-45" />
            <span>Audit</span>
          </button>
        </div>
      </div>
    </section>
  );
};
