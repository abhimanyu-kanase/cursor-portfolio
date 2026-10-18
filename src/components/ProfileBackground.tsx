import React from 'react';
import { Sparkles, MapPin, GraduationCap, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProfileBackgroundProps {
  onOpenContact?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const ProfileBackground: React.FC<ProfileBackgroundProps> = ({
  onOpenContact,
  onNavigateToSection,
  onOpenResume,
}) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-[#3e5630]/60 max-w-[1720px] 2xl:max-w-[1780px] w-full mx-auto select-none"
    >
      {/* Section Header with Regal Architectural Spread */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-[#3e5630]/50 pb-8">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Profile & Academic Background
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#faf8f3] leading-[1.06] tracking-tight">
            Engineering <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">Data, AI</span> & Scalable Systems
          </h2>
        </div>

        <div className="font-mono text-xs sm:text-sm md:text-base text-[#f0ebd8] glass-pill px-6 py-3 rounded-full flex items-center gap-3 self-start lg:self-auto border border-[#e6c280]/40 shadow-[0_0_20px_rgba(230,194,128,0.2)] shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse shadow-[0_0_10px_#ffd700]" />
          <span className="font-medium">Open for Working Student Positions • Frankfurt / Remote</span>
        </div>
      </div>

      {/* Full-Width Grand Executive Candidate Dossier Card */}
      <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)] relative overflow-hidden group transition-all duration-300 w-full">
        {/* Walnut Left Accent Bar */}
        <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-20" />

        {/* Ambient Top Gold Glow Sphere */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-10" />

        <div className="relative z-10">
          {/* Header Row inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#ffd700] tracking-wider uppercase mb-2 font-semibold">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span>Candidate Profile & Executive Summary</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#fffff8] group-hover:text-[#ffd700] font-medium tracking-tight transition-colors">
                Abhimanyu Kanase
              </h3>
            </div>
            <span className="font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-semibold self-start md:self-auto shadow-[0_2px_10px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.75)]">
              M.Sc. Data Science Candidate
            </span>
          </div>

          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#f5d77f] font-light leading-snug max-w-4xl mb-8">
            Data & AI-focused engineer translating intricate technical systems into high-impact, decision-ready intelligence.
          </p>

          {/* Narrative Body Text with Supreme Readability and Outfit Typography */}
          <div className="space-y-5 font-outfit text-base sm:text-lg md:text-xl lg:text-[21px] text-[#faf8f3] font-light leading-[1.85] max-w-6xl">
            <p>
              I am currently pursuing my Master of Science in Data Science at{' '}
              <strong className="text-[#ffd700] font-semibold">Hochschule Fulda, Germany</strong>. My technical architecture centers on engineering resilient cloud-based data models, interactive enterprise business intelligence dashboards, and custom multi-agent Generative AI workflows with{' '}
              <strong className="text-[#ffd700] font-semibold">LangGraph & Retrieval-Augmented Generation (RAG)</strong>.
            </p>
            <p className="text-[#f0ebd8]">
              Prior to my Master’s, I graduated with a Bachelor of Engineering in Electronics & Telecommunication at PCCoE (final grade{' '}
              <strong className="text-[#ffd700] font-semibold">1.9/5.0 German equivalent</strong>) and gained proven hands-on industry experience building automated extraction pipelines, data hygiene workflows, and stakeholder visualisations in fast-paced Agile/Scrum environments.
            </p>
          </div>
        </div>

        {/* Sweeping Gold Divider Line */}
        <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-10 overflow-hidden rounded-full z-10">
          <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_20px_#ffd700]" />
        </div>

        {/* Quick Key Metrics / Credentials Spread Across 4 Interactive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-outfit relative z-10">
          {/* Card 1: Education */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection('education');
              } else {
                const el = document.getElementById('education');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateToSection ? onNavigateToSection('education') : document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#0e180b]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700] hover:bg-[#1a2d15] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:-translate-y-1 cursor-pointer group/metric flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-mono text-xs sm:text-sm text-[#e6c280] uppercase tracking-wider font-semibold">
                    Education
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e6c280]/60 group-hover/metric:text-[#ffd700] group-hover/metric:translate-x-0.5 group-hover/metric:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-semibold text-lg sm:text-xl text-[#faf8f3] group-hover/metric:text-[#ffd700] transition-colors block">
                M.Sc. Data Science
              </span>
              <span className="text-sm sm:text-base text-[#d6cdbe] block mt-1">
                Hochschule Fulda, Germany
              </span>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#3e5630]/40 flex items-center justify-between text-xs font-mono text-[#e6c280]/80 group-hover/metric:text-[#ffd700] transition-colors">
              <span>View Degrees</span>
              <span>↓</span>
            </div>
          </div>

          {/* Card 2: Location & Relocation */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                window.location.hash = '#/contact';
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenContact ? onOpenContact() : (window.location.hash = '#/contact');
              }
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#0e180b]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700] hover:bg-[#1a2d15] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:-translate-y-1 cursor-pointer group/metric flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-mono text-xs sm:text-sm text-[#e6c280] uppercase tracking-wider font-semibold">
                    Location & Relocation
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e6c280]/60 group-hover/metric:text-[#ffd700] group-hover/metric:translate-x-0.5 group-hover/metric:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-semibold text-lg sm:text-xl text-[#faf8f3] group-hover/metric:text-[#ffd700] transition-colors block">
                Frankfurt am Main
              </span>
              <span className="text-sm sm:text-base text-[#d6cdbe] block mt-1">
                Germany • Open to Remote & On-Site
              </span>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#3e5630]/40 flex items-center justify-between text-xs font-mono text-[#e6c280]/80 group-hover/metric:text-[#ffd700] transition-colors">
              <span>Contact Page</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: Scientific Publications */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection('peer-review');
              } else {
                const el = document.getElementById('peer-review');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateToSection ? onNavigateToSection('peer-review') : document.getElementById('peer-review')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#0e180b]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700] hover:bg-[#1a2d15] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:-translate-y-1 cursor-pointer group/metric flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-mono text-xs sm:text-sm text-[#e6c280] uppercase tracking-wider font-semibold">
                    Scientific Publications
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e6c280]/60 group-hover/metric:text-[#ffd700] group-hover/metric:translate-x-0.5 group-hover/metric:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-semibold text-lg sm:text-xl text-[#faf8f3] group-hover/metric:text-[#ffd700] transition-colors block">
                2 Peer-Reviewed Papers
              </span>
              <span className="text-sm sm:text-base text-[#d6cdbe] block mt-1">
                IEEE INCET & Springer ICICCD 2024
              </span>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#3e5630]/40 flex items-center justify-between text-xs font-mono text-[#e6c280]/80 group-hover/metric:text-[#ffd700] transition-colors">
              <span>View Research</span>
              <span>↓</span>
            </div>
          </div>

          {/* Card 4: Availability & Languages */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection('skills');
              } else {
                const el = document.getElementById('skills');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigateToSection ? onNavigateToSection('skills') : document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#0e180b]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700] hover:bg-[#1a2d15] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:-translate-y-1 cursor-pointer group/metric flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-mono text-xs sm:text-sm text-[#e6c280] uppercase tracking-wider font-semibold">
                    Availability & Languages
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e6c280]/60 group-hover/metric:text-[#ffd700] group-hover/metric:translate-x-0.5 group-hover/metric:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-semibold text-lg sm:text-xl text-[#faf8f3] group-hover/metric:text-[#ffd700] transition-colors block">
                English (Fluent) • German (B1)
              </span>
              <span className="text-sm sm:text-base text-[#d6cdbe] block mt-1">
                Immediate Working Student / Intern
              </span>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#3e5630]/40 flex items-center justify-between text-xs font-mono text-[#e6c280]/80 group-hover/metric:text-[#ffd700] transition-colors">
              <span>View Skills</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
