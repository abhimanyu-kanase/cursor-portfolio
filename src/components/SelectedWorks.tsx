import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface SelectedWorksProps {
  onSelectProject?: (slug: string) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  return (
    <section id="works" className="py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-[#3e5630]/60 max-w-[1720px] 2xl:max-w-[1780px] w-full mx-auto select-none">
      {/* Section Header with Horizontal Spread */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-[#3e5630]/60 pb-10">
        <div>
          <div className="flex items-center gap-3.5 mb-3.5">
            <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Curated Portfolio <span className="text-[#ffd700]/60 mx-1.5 font-light">/</span> 2023 — 2026
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#faf8f3] leading-[1.06] tracking-tight">
            Experiences From <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">Projects I've Built</span>
          </h2>
        </div>
        <p className="font-outfit text-lg sm:text-xl md:text-2xl text-[#f0ebd8] max-w-3xl font-light leading-relaxed">
          Hands-on architectural takeaways, engineering breakthroughs, and measurable outcomes from the autonomous AI systems, cloud data pipelines, and vision models I have created.
        </p>
      </div>

      {/* Projects List with Horizontal Spread & Distinctive Hover Interaction */}
      <div className="space-y-8 sm:space-y-10">
        {projectsData.map((proj) => (
          <div
            key={proj.number}
            onClick={() => onSelectProject?.(proj.slug)}
            className="group relative tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] backdrop-blur-md p-8 sm:p-12 lg:p-14 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)] cursor-pointer overflow-hidden"
          >
            {/* Walnut hover accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-20" />

            {/* Ambient top gold glow sphere */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-10" />

            {/* Top Bar: Number + Title + Category + Distinctive Action Button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-3 transition-colors relative z-10">
              <div className="flex items-center gap-5 sm:gap-8">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#b38a3e] group-hover:text-[#ffd700] group-hover:scale-110 group-hover:drop-shadow-[0_2px_14px_rgba(255,215,0,0.85)] transition-all">
                  {proj.number}
                </span>
                <h3 className="font-editorial text-[30px] sm:text-[38px] lg:text-[44px] text-[#faf8f3] group-hover:text-[#ffd700] group-hover:drop-shadow-[0_4px_24px_rgba(230,194,128,0.45),0_8px_30px_rgba(10,18,8,0.95)] transition-all duration-300 leading-snug font-medium">
                  {proj.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto shrink-0">
                <div className="text-left lg:text-right hidden sm:block">
                  <div className="font-mono text-base sm:text-lg lg:text-xl text-[#faf8f3] font-medium group-hover:text-[#ffd700] group-hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all">
                    {proj.client}
                  </div>
                  <div className="font-mono text-xs sm:text-sm md:text-base text-[#d6cdbe] group-hover:text-[#f7de9c] group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all mt-1.5 flex items-center justify-end gap-2.5">
                    <span>{proj.category}</span>
                    <span className="text-[#852238] font-bold">•</span>
                    {/* Royal burgundy pill turning to glowing gold on hover */}
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-xs sm:text-sm text-[#fffff8] font-mono font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)]">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Distinctive Action Button: Active and navigates to the detailed project page */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject?.(proj.slug);
                  }}
                  className="w-14 h-14 rounded-full border border-[#e6c280]/40 bg-[#0e180b]/80 group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:border-[#ffd700] group-hover:scale-110 group-hover:rotate-45 group-hover:shadow-[0_0_28px_rgba(255,215,0,0.85)] active:scale-95 flex items-center justify-center text-[#e6c280] transition-all duration-300 shrink-0 cursor-pointer"
                  aria-label={`View full project details for ${proj.title}`}
                  title="View full project details"
                >
                  <ArrowUpRight className="w-6 h-6 transition-transform" />
                </button>
              </div>
            </div>

            {/* Animated glowing divider line that sweeps left to right on hover */}
            <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-8 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
            </div>

            {/* Full Horizontal Spread of Description */}
            <div className="relative group/desc w-full cursor-pointer p-4 -mx-4 sm:p-6 sm:-mx-6 rounded-2xl transition-all duration-300 overflow-hidden border border-transparent group-hover:border-[#5c3a25]/75 hover:!border-[#ffd700]/70 hover:shadow-[0_12px_32px_rgba(10,18,8,0.7),0_0_24px_rgba(77,50,33,0.45)]">
              {/* Walnut-to-Green Textured Background (Active ONLY on Hover across full card width) */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              >
                {/* Green plaster texture base matching the background */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(20, 34, 16, 0.92)',
                    backgroundImage: `url('${import.meta.env.BASE_URL}green-texture.webp')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '512px 512px',
                  }}
                />

                {/* Walnut plaster texture overlay on the left fading into the green texture on the right */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `url('${import.meta.env.BASE_URL}walnut-texture.webp')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '512px 512px',
                    WebkitMaskImage:
                      'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 15%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 90%)',
                    maskImage:
                      'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 15%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 90%)',
                  }}
                />

                {/* Ambient warm atmospheric walnut glow on the left of the description */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(77, 50, 33, 0.55) 0%, rgba(54, 34, 22, 0.28) 28%, transparent 62%)',
                  }}
                />
              </div>

              <p className="relative z-10 font-outfit text-xl sm:text-2xl lg:text-[25px] text-[#faf8f3] group-hover:text-[#fffff8] group-hover:drop-shadow-[0_2px_12px_rgba(230,194,128,0.35)] leading-[1.7] font-light transition-all duration-300 group-hover/desc:drop-shadow-[0_2px_14px_rgba(230,194,128,0.55)]">
                {proj.shortDescription}
              </p>
              {/* Luminous Light-Beam Sweep Line in Radiant Gold */}
              <div className="relative z-10 h-[2px] w-0 group-hover/desc:w-full bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent transition-all duration-500 ease-out mt-4 rounded-full opacity-0 group-hover/desc:opacity-100 shadow-[0_0_12px_#ffd700]" />
            </div>

            {/* Bottom Stacked Keywords Strip */}
            <div className="mt-8 pt-6 border-t border-[#3e5630]/50 group-hover:border-[#e6c280]/30 transition-colors flex flex-wrap items-center justify-between gap-5 relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#e6c280]/90 mr-1 hidden sm:inline-flex items-center gap-1.5 font-semibold">
                  Stack & Methods:
                </span>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="group/tag inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-[#0e180b]/85 border border-[#3e5630]/60 font-mono text-xs sm:text-sm md:text-base text-[#faf8f3] font-medium transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:-translate-y-0.5 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_24px_rgba(255,215,0,0.85)] active:scale-95"
                  >
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Distinctive Detail Link Cue */}
              <div className="hidden lg:flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#e6c280] group-hover:text-[#ffd700] transition-colors">
                <span className="tracking-wider uppercase text-xs font-semibold">System Blueprint</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#ffd700]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
