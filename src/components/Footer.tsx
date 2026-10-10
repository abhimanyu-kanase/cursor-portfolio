import React from 'react';
import { Terminal, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-[#3e5630]/60 max-w-7xl mx-auto font-mono text-xs text-[#f0ebd8] select-none">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5 text-[#fffff8] font-editorial text-xl tracking-wide">
            <span>Abhimanyu Kanase</span>
            <span className="text-[#852238]">•</span>
            <span className="text-xs font-mono text-[#fffff8] px-2.5 py-0.5 rounded-full bg-[#380712]/80 border border-[#852238]/60 shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
              Data & AI Engineer
            </span>
          </div>
          <p className="font-sans text-xs text-[#faf8f3] mt-2 max-w-sm font-light leading-relaxed">
            M.Sc. Data Science candidate at Hochschule Fulda. Specializing in Generative AI, LangGraph, cloud data modeling, and 60 FPS interactive systems.
          </p>
          <div className="flex items-center gap-3 mt-3 text-[11px] text-[#f0ebd8]/80">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#e6c280]" /> Frankfurt, Germany
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#ffd700]" /> +49 155 10835844
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-[#f0ebd8]">
          <a
            href="mailto:kanaseabhimanyu@gmail.com"
            className="hover:text-white transition text-[#ffd700] underline underline-offset-4 flex items-center gap-1.5 font-medium drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
          >
            <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>kanaseabhimanyu@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd700] transition flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#e6c280]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd700] transition flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5 text-[#e6c280]" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[#3e5630]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#c4baaa]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#e6c280]" />
          <span>Canvas 2D • 64 WebP Frames • Forest Green, Walnut, Ivory & Burgundy Palette</span>
        </div>
        <div>
          © 2026 Abhimanyu Kanase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
