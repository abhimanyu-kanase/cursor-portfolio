import React, { useState } from 'react';
import { CharacterTrackerCanvas } from './CharacterTrackerCanvas';
import { ArrowUpRight } from 'lucide-react';
import { ResumeModal } from './ResumeModal';

interface HeroProps {
  onEyeContactChange?: (isEyeContact: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({ onEyeContactChange }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-screen h-screen min-h-screen overflow-hidden bg-transparent select-none"
    >
      {/* Full-Screen 60 FPS Cursor Tracking Canvas (100vw x 100vh, object-fit: cover) */}
      <CharacterTrackerCanvas
        onTelemetryChange={(data) => {
          if (onEyeContactChange) {
            onEyeContactChange(data.isEyeContact);
          }
        }}
      />

      {/* Hero Typography Overlay (Top-Left) */}
      <div className="absolute top-20 left-6 sm:top-24 sm:left-10 md:top-28 md:left-14 lg:top-32 lg:left-16 z-20 pointer-events-auto max-w-4xl">
        {/* Clean, spaced modern sans-serif */}
        <span className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-[0.32em] uppercase text-[#e6c280] block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Hi, I'm
        </span>

        {/* Large, stately editorial serif title in luminous pure Ivory with gold & forest shadow */}
        <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11.5rem] text-[#fffff8] drop-shadow-[0_8px_32px_rgba(230,194,128,0.28),0_12px_45px_rgba(10,18,8,0.9)] leading-[0.92] font-normal tracking-[-0.03em] mb-6 -ml-1">
          Abhimanyu
        </h1>

        {/* Description with elevated size, pristine Ivory text and high legibility */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#faf8f3] font-sans font-light leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(10,18,8,0.8)]">
          Data & AI Engineer crafting agentic LLM systems, scalable cloud data models, and intelligent real-time interactive interfaces.
        </p>

        {/* Two prominent luxury pill buttons: Radiant Gold and Royal Burgundy */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Resume: Radiant Gold with dark walnut typography */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] hover:to-[#ffd700] transition-all duration-200 font-sans font-bold text-sm sm:text-base md:text-lg shadow-[0_8px_32px_rgba(230,194,128,0.45)] flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_12px_40px_rgba(255,215,0,0.65)]"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1c0f08]" />
          </button>

          {/* Let's Talk: Royal Burgundy Velvet Glass with Burgundy Border & Pure Ivory Text */}
          <a
            href="#contact"
            className="group px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#380712]/92 via-[#4a0a18]/90 to-[#2a1a10]/92 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/80 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.6),0_0_16px_rgba(255,215,0,0.3)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
          >
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
