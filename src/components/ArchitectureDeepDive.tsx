import React from 'react';
import {
  Database,
  Bot,
  Cloud,
  GitBranch,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

interface ArchitectureDeepDiveProps {
  highlightTarget?: string | null;
}

export const ArchitectureDeepDive: React.FC<ArchitectureDeepDiveProps> = ({ highlightTarget }) => {
  return (
    <section
      id="architecture"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 xl:px-14 border-t border-[#3e5630]/60 max-w-[min(94vw,1760px)] w-full mx-auto select-none space-y-24 sm:space-y-28"
    >
      {/* 1. Professional Work Experience & Measured Impact */}
      <div>
        <div className="mb-14 border-b border-[#3e5630]/50 pb-8">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Work Experience & Proven Track Record
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-[clamp(2.5rem,4.2vw,4.75rem)] font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Industry Experience &{' '}
            <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">
              Measured Impact
            </span>
          </h3>
          <p className="font-outfit text-base sm:text-lg md:text-[clamp(1.05rem,1.2vw,1.35rem)] text-[#f0ebd8] max-w-3xl font-light mt-4 leading-relaxed">
            Delivering tangible business value through automated data pipelines, continuous validation, and stakeholder-ready dashboards across fast-paced Agile teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Card 1: Innovaters8teen */}
          <div className="group relative tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)] overflow-hidden">
            {/* Walnut Left Accent Bar */}
            <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-20" />

            {/* Ambient Top Gold Glow */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-10" />

            <div className="relative z-10">
              <div className="flex items-start justify-between border-b border-[#3e5630]/50 pb-5 mb-5 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:shadow-[0_0_12px_rgba(255,215,0,0.5)]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#fceab8]" />
                    <span>Machine Learning & Data</span>
                  </div>
                  <h4 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium">
                    Innovaters8teen
                  </h4>
                  <div className="font-mono text-xs sm:text-sm text-[#e6c280] mt-1">
                    ML & Data Engineering Intern • India
                  </div>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)] shrink-0">
                  10/2023 – 03/2024
                </span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Data Records</span>
                  <span className="font-bold text-[#ffd700] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    10,000+ Labeled
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Manual Process Work</span>
                  <span className="font-bold text-[#f5d77f] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    ~80% Reduced
                  </span>
                </div>
              </div>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
              </div>

              {/* Bullet Points with Gold Glow on Hover */}
              <ul className="font-outfit text-sm sm:text-base lg:text-[17px] text-[#f0ebd8] space-y-3.5 font-light leading-relaxed">
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Maintained data integrity across <strong className="text-[#ffd700] font-semibold">10,000+ labeled records</strong> by building automated categorisation and validation pipelines in Python.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Reduced manual process work by <strong className="text-[#ffd700] font-semibold">~80% across 4+ recurring tasks</strong> by automating extraction workflows with Python and PowerShell.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Enabled continuous quality monitoring with consistent automated test pass rates via version-controlled CI/CD pipelines.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm text-[#d6cdbe] relative z-10 group-hover:border-[#3e5630]/80 transition-colors font-mono">
              <span>Stack: Python, PowerShell, CI/CD</span>
              <span className="text-[#ffd700] font-bold">Validation: 100% Pass</span>
            </div>
          </div>

          {/* Experience Card 2: Insculpt Technologies */}
          <div className="group relative tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)] overflow-hidden">
            {/* Walnut Left Accent Bar */}
            <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-20" />

            {/* Ambient Top Gold Glow */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-10" />

            <div className="relative z-10">
              <div className="flex items-start justify-between border-b border-[#3e5630]/50 pb-5 mb-5 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:shadow-[0_0_12px_rgba(255,215,0,0.5)]">
                    <Database className="w-3.5 h-3.5 text-[#fceab8]" />
                    <span>Data Modeling & BI</span>
                  </div>
                  <h4 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium">
                    Insculpt Technologies
                  </h4>
                  <div className="font-mono text-xs sm:text-sm text-[#e6c280] mt-1">
                    Software Developer Intern (Python) • India
                  </div>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)] shrink-0">
                  02/2023 – 05/2023
                </span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Rows Processed</span>
                  <span className="font-bold text-[#ffd700] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    50,000+ Cleaned
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Export Time</span>
                  <span className="font-bold text-[#f5d77f] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    ~100% Eliminated
                  </span>
                </div>
              </div>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
              </div>

              {/* Bullet Points with Gold Glow on Hover */}
              <ul className="font-outfit text-sm sm:text-base lg:text-[17px] text-[#f0ebd8] space-y-3.5 font-light leading-relaxed">
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Maintained trustworthy reporting data across <strong className="text-[#ffd700] font-semibold">50,000+ rows</strong> with <strong className="text-[#ffd700] font-semibold">zero downstream escalations</strong>, cleaning multi-source datasets with Pandas & SQL.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Enabled faster business decisions adopted across <strong className="text-[#ffd700] font-semibold">3+ Power BI and Excel dashboards</strong>, translating raw data into stakeholder-ready visualisations.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Eliminated manual reporting effort with <strong className="text-[#ffd700] font-semibold">~100% reduction in export time</strong> across 3+ recurring workflows via automated extraction scripts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm text-[#d6cdbe] relative z-10 group-hover:border-[#3e5630]/80 transition-colors font-mono">
              <span>Stack: Pandas, SQL, Power BI, Git</span>
              <span className="text-[#ffd700] font-bold">Escalations: 0</span>
            </div>
          </div>

          {/* Experience Card 3: Project Leadership */}
          <div className="group relative tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)] overflow-hidden">
            {/* Walnut Left Accent Bar */}
            <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-20" />

            {/* Ambient Top Gold Glow */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 z-10" />

            <div className="relative z-10">
              <div className="flex items-start justify-between border-b border-[#3e5630]/50 pb-5 mb-5 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:shadow-[0_0_12px_rgba(255,215,0,0.5)]">
                    <Users className="w-3.5 h-3.5 text-[#fceab8]" />
                    <span>Agile Leadership</span>
                  </div>
                  <h4 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium">
                    Sensor Optimization
                  </h4>
                  <div className="font-mono text-xs sm:text-sm text-[#e6c280] mt-1">
                    Engineering Project Lead • 5-Member Team
                  </div>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)] shrink-0">
                  7 Phases
                </span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Team Delivery</span>
                  <span className="font-bold text-[#ffd700] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    100% On-Time
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 sm:p-4 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 hover:bg-[#1a2d15] hover:shadow-[0_0_14px_rgba(255,215,0,0.25)] relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Production Coverage</span>
                  <span className="font-bold text-[#f5d77f] text-base sm:text-lg mt-0.5 block font-mono relative z-10">
                    98.3% Orders
                  </span>
                </div>
              </div>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
              </div>

              {/* Bullet Points with Gold Glow on Hover */}
              <ul className="font-outfit text-sm sm:text-base lg:text-[17px] text-[#f0ebd8] space-y-3.5 font-light leading-relaxed">
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Served as <strong className="text-[#ffd700] font-semibold">project lead for a 5-member team</strong>, ensuring on-time delivery across all 7 phases by coordinating tasks and Agile workflows in Jira.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Reduced production error rates through <strong className="text-[#ffd700] font-semibold">forward and reverse physics modeling</strong>, lowering rework costs and boosting product quality.
                  </span>
                </li>
                <li className="group/bullet flex items-start gap-3 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                  <span className="group-hover/bullet:text-[#fffff8] transition-colors leading-relaxed">
                    Delivered a cost-relevant pipeline with <strong className="text-[#ffd700] font-semibold">98.3% coverage of production orders</strong>, outperforming baseline models in 6 of 9 cells.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm text-[#d6cdbe] relative z-10 group-hover:border-[#3e5630]/80 transition-colors font-mono">
              <span>Process: Jira, Agile/Scrum, Modeling</span>
              <span className="text-[#ffd700] font-bold">Coverage: 98.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Higher Education & Academic Degrees (Symmetrical to Peer Review) */}
      <div id="education" className="scroll-mt-24">
        <div className="mb-14 border-b border-[#3e5630]/50 pb-8">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Academic Background & Degrees
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-[clamp(2.5rem,4.2vw,4.75rem)] font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Higher Education &{' '}
            <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">
              Qualifications
            </span>
          </h3>
          <p className="font-outfit text-base sm:text-lg md:text-[clamp(1.05rem,1.2vw,1.35rem)] text-[#f0ebd8] max-w-3xl font-light mt-4 leading-relaxed">
            Rigorous technical training combining advanced data science, artificial intelligence research, and core engineering fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree 1: M.Sc. Data Science */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'education'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'education' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'education' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#ffd700] tracking-wider uppercase font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#ffd700] group-hover:scale-110 transition-transform" />
                  <span>Postgraduate Degree</span>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)]">
                  10/2024 – Present
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium leading-snug mb-2">
                Master of Science in Data Science
              </h4>
              <div className="font-mono text-sm sm:text-base text-[#e6c280] mb-4">
                Hochschule Fulda - University of Applied Sciences • Germany
              </div>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'education' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <p className="font-outfit text-base sm:text-lg text-[#f0ebd8] font-light leading-relaxed mb-6">
                Specializing in distributed data lakehouses, Generative AI agentic workflows (LangGraph & RAG), continuous automated validation, and enterprise business intelligence architectures.
              </p>

              {/* Educational Metric Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Location & Status</span>
                  <span className="font-bold text-[#ffd700] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    Germany • Enrolled
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Expected Completion</span>
                  <span className="font-bold text-[#f5d77f] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    Late 2027
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm font-mono text-[#d6cdbe] relative z-10">
              <span>Focus: Generative AI, Cloud Lakehouses, Analytics</span>
              <span className="px-3 py-1 rounded-full bg-[#380712]/85 border border-[#852238]/70 text-[#fffff8] font-bold text-xs shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:shadow-[0_0_14px_rgba(255,215,0,0.6)]">
                Master's Degree
              </span>
            </div>
          </div>

          {/* Degree 2: B.E. Electronics & Telecommunication */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'education'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'education' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'education' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#ffd700] tracking-wider uppercase font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#ffd700] group-hover:scale-110 transition-transform" />
                  <span>Bachelor's Degree</span>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:shadow-[0_0_16px_rgba(255,215,0,0.75)]">
                  06/2020 – 06/2024
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium leading-snug mb-2">
                B.E. in Electronics & Telecommunication
              </h4>
              <div className="font-mono text-sm sm:text-base text-[#e6c280] mb-4">
                Pimpri Chinchwad College of Engineering (PCCoE) • Pune, India
              </div>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'education' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <p className="font-outfit text-base sm:text-lg text-[#f0ebd8] font-light leading-relaxed mb-6">
                Graduated with First Class with Distinction (<strong className="text-[#ffd700] font-semibold">1.9/5.0 German equivalent</strong>). Completed capstone engineering systems in computer vision, robotics, and statistical signal modeling.
              </p>

              {/* Educational Metric Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Academic Standing</span>
                  <span className="font-bold text-[#ffd700] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    1.9 German Equivalent
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Honors Award</span>
                  <span className="font-bold text-[#f5d77f] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    First Class Distinction
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm font-mono text-[#d6cdbe] relative z-10">
              <span>Focus: Computer Vision, Embedded Robotics, Math</span>
              <span className="px-3 py-1 rounded-full bg-[#380712]/85 border border-[#852238]/70 text-[#fffff8] font-bold text-xs shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:shadow-[0_0_14px_rgba(255,215,0,0.6)]">
                Bachelor of Engineering
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Peer-Reviewed Scientific Research & Publications */}
      <div id="peer-review" className="scroll-mt-24">
        <div className="mb-14 border-b border-[#3e5630]/50 pb-8">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Scientific Rigor & Publications
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-[clamp(2.5rem,4.2vw,4.75rem)] font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Peer-Reviewed{' '}
            <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">
              Academic Research
            </span>
          </h3>
          <p className="font-outfit text-base sm:text-lg md:text-[clamp(1.05rem,1.2vw,1.35rem)] text-[#f0ebd8] max-w-3xl font-light mt-4 leading-relaxed">
            Published contributions demonstrating computer vision modeling, edge robotics, and scientific rigor across international IEEE and Springer conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Research Paper 1: IEEE INCET */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'peer-review'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'peer-review' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'peer-review' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#ffd700] tracking-wider uppercase font-semibold">
                  <BookOpen className="w-4 h-4 text-[#ffd700] group-hover:scale-110 transition-transform" />
                  <span>IEEE INCET 2024</span>
                </div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/10592884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#ffd700] hover:via-[#f5d77f] hover:to-[#e6c280] hover:text-[#1c0f08] hover:shadow-[0_0_16px_rgba(255,215,0,0.75)] hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>IEEE Xplore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium leading-snug mb-3">
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/10592884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-[#ffd700]/70 underline-offset-4 inline-flex items-baseline gap-2 group/title"
                >
                  <span>Cotton Detection Using YOLOv5 for Agricultural Analysis</span>
                  <ArrowUpRight className="w-5 h-5 text-[#ffd700]/60 group-hover/title:text-[#ffd700] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all inline self-center shrink-0" />
                </a>
              </h4>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'peer-review' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <p className="font-outfit text-base sm:text-lg text-[#f0ebd8] font-light leading-relaxed mb-6">
                Piloted on <strong className="text-[#ffd700] font-semibold">10,000+ field images</strong>, achieving <strong className="text-[#ffd700] font-semibold">~85% precision and 0.80+ mAP</strong> to automate agricultural yield estimation and operational efficiency with state-of-the-art YOLOv5 deep learning architecture.
              </p>

              {/* Research Metric Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Dataset Scale</span>
                  <span className="font-bold text-[#ffd700] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    10,000+ Field Images
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Detection Metric</span>
                  <span className="font-bold text-[#f5d77f] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    ~85% Precision / 0.80+ mAP
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm font-mono text-[#d6cdbe] relative z-10 flex-wrap gap-3">
              <span>Stack: Python, YOLOv5, PyTorch, OpenCV</span>
              <a
                href="https://ieeexplore.ieee.org/abstract/document/10592884"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#380712]/90 border border-[#852238]/80 text-[#fffff8] font-bold text-xs shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#ffd700] hover:via-[#f5d77f] hover:to-[#e6c280] hover:text-[#1c0f08] hover:shadow-[0_0_14px_rgba(255,215,0,0.7)] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Paper on IEEE Xplore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Research Paper 2: Springer ICICCD */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'peer-review'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'peer-review' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'peer-review' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#ffd700] tracking-wider uppercase font-semibold">
                  <Award className="w-4 h-4 text-[#ffd700] group-hover:scale-110 transition-transform" />
                  <span>Springer ICICCD 2024</span>
                </div>
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-8329-8_55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#ffd700] hover:via-[#f5d77f] hover:to-[#e6c280] hover:text-[#1c0f08] hover:shadow-[0_0_16px_rgba(255,215,0,0.75)] hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Springer LNNS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-medium leading-snug mb-3">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-8329-8_55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-[#ffd700]/70 underline-offset-4 inline-flex items-baseline gap-2 group/title"
                >
                  <span>Computer Vision-Based Weed Killing Rover</span>
                  <ArrowUpRight className="w-5 h-5 text-[#ffd700]/60 group-hover/title:text-[#ffd700] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all inline self-center shrink-0" />
                </a>
              </h4>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'peer-review' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <p className="font-outfit text-base sm:text-lg text-[#f0ebd8] font-light leading-relaxed mb-6">
                Published in <strong className="text-[#ffd700] font-semibold">Lecture Notes in Networks and Systems</strong>. Engineered a real-time autonomous edge vision rover for precision weed detection and targeted eradication in agricultural robotics.
              </p>

              {/* Research Metric Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-outfit">
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Publisher Series</span>
                  <span className="font-bold text-[#ffd700] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    Springer LNNS Series
                  </span>
                </div>
                <div className="tactile-card backdrop-blur-md p-3.5 rounded-xl bg-[#142210]/80 border border-[#3e5630]/60 transition-all duration-300 hover:border-[#ffd700]/60 relative overflow-hidden">
                  <span className="text-[#d6cdbe] block text-xs sm:text-sm relative z-10">Architecture</span>
                  <span className="font-bold text-[#f5d77f] text-sm sm:text-base mt-0.5 block font-mono relative z-10">
                    Real-Time Edge Vision
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#3e5630]/50 flex items-center justify-between text-xs sm:text-sm font-mono text-[#d6cdbe] relative z-10 flex-wrap gap-3">
              <span>Stack: Python, Embedded Vision, Robotics, Edge AI</span>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-97-8329-8_55"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#380712]/90 border border-[#852238]/80 text-[#fffff8] font-bold text-xs shadow-[0_2px_8px_rgba(56,7,18,0.4)] transition-all duration-300 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#ffd700] hover:via-[#f5d77f] hover:to-[#e6c280] hover:text-[#1c0f08] hover:shadow-[0_0_14px_rgba(255,215,0,0.7)] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Paper on Springer Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Core Competencies & Technical Arsenal Matrix */}
      <div id="skills" className="scroll-mt-24">
        <div className="mb-14 border-b border-[#3e5630]/50 pb-8">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Technical Arsenal & Core Stack
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-[clamp(2.5rem,4.2vw,4.75rem)] font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Competencies &{' '}
            <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">
              Skill Matrix
            </span>
          </h3>
          <p className="font-outfit text-base sm:text-lg md:text-[clamp(1.05rem,1.2vw,1.35rem)] text-[#f0ebd8] max-w-3xl font-light mt-4 leading-relaxed">
            Hands-on technical proficiency across cloud data architectures, generative AI orchestrations, and production data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skill Pillar 1 */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'skills'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'skills' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'skills' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-5 shadow-[0_0_15px_rgba(230,194,128,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffd700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <Database className="w-6 h-6 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-2xl sm:text-3xl text-[#faf8f3] group-hover:text-[#ffd700] font-medium mb-3 transition-colors">
                Data Modeling & Analytics
              </h4>
              <p className="font-outfit text-sm sm:text-base text-[#f0ebd8] leading-relaxed font-light mb-5">
                Dimensional star & snowflake schema design, multi-table analytics, high-efficiency data cleaning, and KPI reporting.
              </p>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">SQL</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Python (Pandas, Polars, NumPy)</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Star Schema</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Power BI</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Looker Studio</span>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 text-xs font-mono text-[#ffd700] font-bold relative z-10 group-hover:text-[#fffff8] group-hover:drop-shadow-[0_0_8px_#ffd700] transition-colors">
              50,000+ Row Validations
            </div>
          </div>

          {/* Skill Pillar 2 */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'skills'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'skills' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'skills' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-5 shadow-[0_0_15px_rgba(230,194,128,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffd700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <Bot className="w-6 h-6 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-2xl sm:text-3xl text-[#faf8f3] group-hover:text-[#ffd700] font-medium mb-3 transition-colors">
                Generative AI & LLMs
              </h4>
              <p className="font-outfit text-sm sm:text-base text-[#f0ebd8] leading-relaxed font-light mb-5">
                Multi-agent workflow orchestration, vector search RAG systems, model fine-tuning, and conversational state persistence.
              </p>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">LangGraph</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">RAG Pipelines</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Vector DBs (Postgres)</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">BERT Fine-Tuning</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Claude & ChatGPT</span>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 text-xs font-mono text-[#ffd700] font-bold relative z-10 group-hover:text-[#fffff8] group-hover:drop-shadow-[0_0_8px_#ffd700] transition-colors">
              Multi-Step Reasoning Agents
            </div>
          </div>

          {/* Skill Pillar 3 */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'skills'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'skills' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'skills' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-5 shadow-[0_0_15px_rgba(230,194,128,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffd700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <Cloud className="w-6 h-6 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-2xl sm:text-3xl text-[#faf8f3] group-hover:text-[#ffd700] font-medium mb-3 transition-colors">
                Cloud & Warehouses
              </h4>
              <p className="font-outfit text-sm sm:text-base text-[#f0ebd8] leading-relaxed font-light mb-5">
                Building cloud ETL pipelines, data lakehouse architectures, and scalable analytics query layers.
              </p>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Azure Data Factory</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">ADLS & Synapse</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Databricks</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">AWS (S3, Athena)</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Snowflake</span>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 text-xs font-mono text-[#ffd700] font-bold relative z-10 group-hover:text-[#fffff8] group-hover:drop-shadow-[0_0_8px_#ffd700] transition-colors">
              Cloud Lakehouse & Star Schemas
            </div>
          </div>

          {/* Skill Pillar 4 */}
          <div
            className={`group relative tactile-card backdrop-blur-md p-6 sm:p-7 lg:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 overflow-hidden ${
              highlightTarget === 'skills'
                ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.02] z-20'
                : 'bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,18,8,0.95),0_0_40px_rgba(255,215,0,0.35)]'
            }`}
          >
            {/* Walnut Left Accent Bar */}
            <div
              className={`absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 pointer-events-none z-20 ${
                highlightTarget === 'skills' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Ambient Top Gold Glow */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl transition-opacity pointer-events-none duration-300 z-10 ${
                highlightTarget === 'skills' ? 'opacity-100 bg-[#ffd700]/25' : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
              }`}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-5 shadow-[0_0_15px_rgba(230,194,128,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffd700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <GitBranch className="w-6 h-6 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-2xl sm:text-3xl text-[#faf8f3] group-hover:text-[#ffd700] font-medium mb-3 transition-colors">
                Production & Agile
              </h4>
              <p className="font-outfit text-sm sm:text-base text-[#f0ebd8] leading-relaxed font-light mb-5">
                Modern orchestration pipelines, microservices, containerization, sprint delivery, and reproducible codebases.
              </p>

              {/* Sweeping Gold Divider Line */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                    highlightTarget === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">FastAPI & Pydantic</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Docker & Compose</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Apache Airflow</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">dbt</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8] transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_16px_rgba(255,215,0,0.8)] cursor-default select-none">Jira & Agile/Scrum</span>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-[#3e5630]/50 text-xs font-mono text-[#ffd700] font-bold relative z-10 group-hover:text-[#fffff8] group-hover:drop-shadow-[0_0_8px_#ffd700] transition-colors">
              CI/CD & Reproducible Stacks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
