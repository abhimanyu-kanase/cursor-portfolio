import React from 'react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav className="glass-nav-pill px-6 py-2.5 rounded-full flex items-center gap-6 sm:gap-8 font-mono text-xs tracking-wider text-[#faf8f3] border border-[#852238]/35 bg-[#121c0e]/92 shadow-[0_10px_35px_rgba(10,18,8,0.75),0_0_20px_rgba(56,7,18,0.25)]">
        <a
          href="#about"
          className="hover:text-[#fffff8] transition-all duration-200 tracking-widest flex items-center gap-1 group"
        >
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">[</span>
          <span className="group-hover:text-[#ffd700] transition-colors">ABOUT</span>
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">]</span>
        </a>

        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#852238] to-[#5a1422] border border-[#d85d76]/40 shadow-[0_0_8px_rgba(133,34,56,0.7)]" />

        <a
          href="#works"
          className="hover:text-[#fffff8] transition-all duration-200 tracking-widest flex items-center gap-1 group"
        >
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">[</span>
          <span className="group-hover:text-[#ffd700] transition-colors">WORK</span>
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">]</span>
        </a>

        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#852238] to-[#5a1422] border border-[#d85d76]/40 shadow-[0_0_8px_rgba(133,34,56,0.7)]" />

        <a
          href="#/contact"
          onClick={(e) => {
            if (onOpenContact) {
              e.preventDefault();
              onOpenContact();
            }
          }}
          className="hover:text-[#fffff8] transition-all duration-200 tracking-widest flex items-center gap-1 group cursor-pointer"
        >
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">[</span>
          <span className="group-hover:text-[#ffd700] transition-colors">CONTACT</span>
          <span className="text-[#e6c280]/60 group-hover:text-[#ffd700] transition-colors">]</span>
        </a>
      </nav>
    </header>
  );
};
