import React from 'react';
import { Terminal, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-[#3e5630]/60 max-w-[1720px] 2xl:max-w-[1780px] w-full mx-auto font-outfit text-sm text-[#f0ebd8] select-none"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <div className="flex items-center gap-3 text-[#fffff8] font-editorial text-2xl sm:text-3xl tracking-wide">
            <span className="font-medium">Abhimanyu Kanase</span>
            <span className="text-[#852238]">•</span>
            <span className="text-xs sm:text-sm font-mono text-[#fffff8] px-3 py-1 rounded-full bg-[#380712]/80 border border-[#852238]/60 shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
              Data & AI Engineer
            </span>
          </div>
          <p className="font-outfit text-sm sm:text-base text-[#faf8f3] mt-2.5 max-w-md font-light leading-relaxed">
            M.Sc. Data Science candidate at Hochschule Fulda. Specializing in Generative AI, LangGraph, cloud data modeling, and 60 FPS interactive systems.
          </p>
          <div className="flex items-center gap-4 mt-4 text-xs sm:text-sm text-[#f0ebd8]/90 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e6c280]" /> Frankfurt, Germany
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#ffd700]" /> +49 155 10835844
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[#f0ebd8] font-mono text-xs sm:text-sm">
          <a
            href="mailto:kanaseabhimanyu@gmail.com"
            className="hover:text-white transition-all text-[#ffd700] underline underline-offset-4 flex items-center gap-2 font-medium drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] hover:scale-105"
          >
            <Mail className="w-4 h-4 text-[#ffd700]" />
            <span>kanaseabhimanyu@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd700] transition-all flex items-center gap-1.5 hover:scale-105"
          >
            <Linkedin className="w-4 h-4 text-[#e6c280]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd700] transition-all flex items-center gap-1.5 hover:scale-105"
          >
            <Github className="w-4 h-4 text-[#e6c280]" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-[#3e5630]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#c4baaa]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#e6c280]" />
          <span>Canvas 2D • 64 WebP Frames • Forest Green, Walnut, Ivory & Burgundy Palette</span>
        </div>
        <div>
          © 2026 Abhimanyu Kanase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
