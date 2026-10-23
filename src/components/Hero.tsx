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
      <div className="hero-left-box pointer-events-auto">
        {/* Kicker */}
        <span className="hero-kicker drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Hi, I'm
        </span>

        {/* Large editorial serif name */}
        <div className="hero-heading-slot -ml-1">
          <h1 className="hero-name-heading drop-shadow-[0_8px_32px_rgba(230,194,128,0.28),0_12px_45px_rgba(10,18,8,0.9)] font-normal">
            Abhimanyu
          </h1>
        </div>

        {/* Short Profile / Bio */}
        <div className="hero-bio-slot">
          <p className="hero-bio-copy font-sans font-light drop-shadow-[0_2px_10px_rgba(10,18,8,0.8)]">
            Data & AI Engineer specializing in multi-agent LLM systems, scalable cloud data architectures, and real-time interactive interfaces engineered to translate complex technical problems into business-ready intelligence.
          </p>
        </div>

        {/* Action Buttons: Resume & Let's Talk — Just on Top of Character Shoulder */}
        <div className="hero-button-slot flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5">
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
            className="group px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] hover:to-[#ffd700] transition-all duration-200 font-sans font-bold text-xs sm:text-sm md:text-base shadow-[0_8px_32px_rgba(230,194,128,0.45)] flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_12px_40px_rgba(255,215,0,0.65)]"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1c0f08]" />
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
            className="group px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-[#380712]/92 via-[#4a0a18]/90 to-[#2a1a10]/92 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/80 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.6),0_0_16px_rgba(255,215,0,0.3)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-xs sm:text-sm md:text-base flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
          >
            <span>Let's Talk</span>
          </button>
        </div>
      </div>

      {/* Hero Typography Overlay (Right Side) — Open Editorial Typography */}
      <div className="hidden lg:flex hero-right-box pointer-events-auto text-left">
        {/* Kicker matching "Hi, I'm" */}
        <span className="hero-kicker drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Welcome to my
        </span>

        {/* Large, stately editorial title matching "Abhimanyu" */}
        <div className="hero-heading-slot">
          <h2 className="hero-portfolio-heading drop-shadow-[0_8px_32px_rgba(230,194,128,0.28),0_12px_45px_rgba(10,18,8,0.9)] font-normal">
            Life Portfolio
          </h2>
        </div>

        {/* Explaining why the space exists */}
        <div className="hero-bio-slot">
          <p className="hero-bio-copy font-sans font-light drop-shadow-[0_2px_10px_rgba(10,18,8,0.8)]">
            Designed as an interactive living exhibition rather than a static resume—bringing engineering craft to life so you can explore real systems, examine architectural thinking, and experience the journey firsthand.
          </p>
        </div>

        {/* Action Button (Right Side) — Aligned and Symmetrical with Left Side */}
        <div className="hero-button-slot flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5">
          <button
            onClick={() => setIsAuditOpen((prev) => !prev)}
            className="group px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-[#380712]/92 via-[#4a0a18]/90 to-[#2a1a10]/92 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/80 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.6),0_0_16px_rgba(255,215,0,0.3)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-xs sm:text-sm md:text-base flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
            title="Toggle Compass & Gaze Diagnostics"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd700] transition-transform group-hover:rotate-45" />
            <span>Audit</span>
          </button>
        </div>
      </div>
    </section>
  );
};
