import React from 'react';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  Database,
  Bot,
  Cloud,
  GitBranch,
  TrendingUp,
  CheckCircle2,
  Users,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

export const ArchitectureDeepDive: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#3e5630]/60 max-w-7xl mx-auto select-none">
      {/* 1. Profile & Academic Background */}
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Profile & Academic Background
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#faf8f3] leading-[1.06] tracking-tight">
              Engineering <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">Data, AI</span> & Scalable Systems
            </h2>
          </div>
          <div className="font-mono text-xs sm:text-sm text-[#f0ebd8] glass-pill px-5 py-2.5 rounded-full flex items-center gap-2.5 self-start lg:self-auto border border-[#e6c280]/40 shadow-[0_0_15px_rgba(230,194,128,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse shadow-[0_0_8px_#ffd700]" />
            <span>Open for Working Student Positions • Frankfurt / Remote</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
          {/* Bio Card */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)]">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#faf8f3] font-medium mb-3">
                Abhimanyu Kanase
              </h3>
              <p className="text-sm sm:text-base text-[#f0ebd8] font-light leading-relaxed mb-4">
                I am a Data & AI-focused engineer and Master of Science student in Data Science at <strong>Hochschule Fulda, Germany</strong>. My expertise centers on building robust cloud-based data models, enterprise dashboards, and custom Generative AI agent workflows with <strong>LangGraph & RAG</strong> to translate complex technical data into decision-ready business intelligence.
              </p>
              <p className="text-sm sm:text-base text-[#d6cdbe] font-light leading-relaxed">
                Prior to my Master’s, I earned my Bachelor of Engineering in Electronics & Telecommunication at PCCoE (final grade 1.9/5.0 German equivalent) and gained hands-on industry experience delivering automated extraction pipelines, data hygiene workflows, and stakeholder visualisations in Agile/Scrum environments.
              </p>
            </div>

            {/* Quick Metrics / Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#3e5630]/50 font-mono text-xs">
              <div>
                <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold">Education</span>
                <span className="font-semibold text-[#faf8f3] mt-0.5 block">M.Sc. Data Science</span>
                <span className="text-[11px] text-[#d6cdbe]">Hochschule Fulda</span>
              </div>
              <div>
                <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold">Location</span>
                <span className="font-semibold text-[#faf8f3] mt-0.5 block">Frankfurt</span>
                <span className="text-[11px] text-[#d6cdbe]">Germany</span>
              </div>
              <div>
                <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold">Publications</span>
                <span className="font-bold text-[#ffd700] mt-0.5 block text-sm">2 Papers</span>
                <span className="text-[11px] text-[#f7de9c]">IEEE & Springer</span>
              </div>
              <div>
                <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold">Languages</span>
                <span className="font-semibold text-[#faf8f3] mt-0.5 block">English & German</span>
                <span className="text-[11px] text-[#d6cdbe]">Fluent / B1</span>
              </div>
            </div>
          </div>

          {/* Academic Publications Card */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ffd700] tracking-wider uppercase mb-4 font-semibold">
                <BookOpen className="w-4 h-4 text-[#ffd700]" />
                <span>Peer-Reviewed Research</span>
              </div>

              <div className="space-y-5 font-mono text-xs">
                <div className="border-l-2 border-[#852238] pl-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18] to-[#380712] border border-[#852238]/70 text-[10px] text-[#fffff8] uppercase font-bold tracking-wider inline-block shadow-[0_2px_8px_rgba(56,7,18,0.5)]">
                    IEEE INCET 2024
                  </span>
                  <div className="font-semibold text-[#fffff8] mt-1.5 text-xs">
                    Cotton Detection Using YOLOv5 for Agricultural Analysis
                  </div>
                  <p className="font-sans text-[11px] text-[#f0ebd8] mt-1 font-light">
                    Piloted on 10,000+ field images, achieving ~85% precision and 0.80+ mAP to automate agricultural operations.
                  </p>
                </div>

                <div className="border-l-2 border-[#852238] pl-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18] to-[#380712] border border-[#852238]/70 text-[10px] text-[#fffff8] uppercase font-bold tracking-wider inline-block shadow-[0_2px_8px_rgba(56,7,18,0.5)]">
                    Springer ICICCD 2024
                  </span>
                  <div className="font-semibold text-[#fffff8] mt-1.5 text-xs">
                    Computer Vision-Based Weed Killing Rover
                  </div>
                  <p className="font-sans text-[11px] text-[#f0ebd8] mt-1 font-light">
                    Published in Lecture Notes in Networks and Systems. Real-time vision rover for targeted agricultural robotics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 flex items-center justify-between text-[11px] font-mono text-[#d6cdbe]">
              <span>Scientific Rigor</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#380712]/85 border border-[#852238]/70 text-[#fffff8] font-bold text-[10px] shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
                Peer Reviewed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Professional Work Experience & Measured Impact */}
      <div className="mb-20">
        <div className="mb-12">
          <div className="flex items-center gap-3.5 mb-3.5">
            <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Work Experience & Proven Track Record
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Industry Experience & <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">Measured Impact</span>
          </h3>
          <p className="font-sans text-base sm:text-lg text-[#f0ebd8] max-w-2xl font-light mt-3 leading-relaxed">
            Delivering business value through automated data pipelines, continuous validation, and stakeholder-ready dashboards across fast-paced Agile teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
          {/* Experience Card 1: Innovaters8teen */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#3e5630]/50 pb-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-[10px] font-semibold uppercase tracking-wider mb-2 shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
                    <TrendingUp className="w-3 h-3 text-[#fceab8]" /> <span className="text-[#fffff8]">Machine Learning & Data</span>
                  </div>
                  <h4 className="font-editorial text-xl sm:text-2xl text-[#fffff8] font-medium">
                    Innovaters8teen
                  </h4>
                  <div className="text-[11px] text-[#e6c280]/90 mt-0.5">
                    ML & Data Engineering Intern • India
                  </div>
                </div>
                <span className="text-[11px] text-[#d6cdbe]">10/2023 – 03/2024</span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-[10px]">
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Data Records</span>
                  <span className="font-bold text-[#ffd700] text-sm mt-0.5 block">10,000+ Labeled</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Manual Process Work</span>
                  <span className="font-bold text-[#f5d77f] text-sm mt-0.5 block">~80% Reduced</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="font-sans text-xs text-[#f0ebd8] space-y-2.5 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Maintained data integrity across <strong>10,000+ labeled records</strong> by building automated categorisation and validation pipelines in Python.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Reduced manual process work by <strong>~80% across 4+ recurring tasks</strong> by automating extraction workflows with Python and PowerShell.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Enabled continuous quality monitoring with consistent automated test pass rates via version-controlled CI/CD pipelines.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 flex items-center justify-between text-[11px] text-[#d6cdbe]">
              <span>Stack: Python, PowerShell, CI/CD</span>
              <span className="text-[#ffd700] font-bold">Validation: 100% Pass</span>
            </div>
          </div>

          {/* Experience Card 2: Insculpt Technologies */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#3e5630]/50 pb-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-[10px] font-semibold uppercase tracking-wider mb-2 shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
                    <Database className="w-3 h-3 text-[#fceab8]" /> <span className="text-[#fffff8]">Data Modeling & BI</span>
                  </div>
                  <h4 className="font-editorial text-xl sm:text-2xl text-[#fffff8] font-medium">
                    Insculpt Technologies
                  </h4>
                  <div className="text-[11px] text-[#e6c280]/90 mt-0.5">
                    Software Developer Intern (Python) • India
                  </div>
                </div>
                <span className="text-[11px] text-[#d6cdbe]">02/2023 – 05/2023</span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-[10px]">
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Rows Processed</span>
                  <span className="font-bold text-[#ffd700] text-sm mt-0.5 block">50,000+ Cleaned</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Export Time</span>
                  <span className="font-bold text-[#f5d77f] text-sm mt-0.5 block">~100% Eliminated</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="font-sans text-xs text-[#f0ebd8] space-y-2.5 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Maintained trustworthy reporting data across <strong>50,000+ rows</strong> with <strong>zero downstream escalations</strong>, cleaning multi-source datasets with Pandas & SQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Enabled faster business decisions adopted across <strong>3+ Power BI and Excel dashboards</strong>, translating raw data into stakeholder-ready visualisations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Eliminated manual reporting effort with <strong>~100% reduction in export time</strong> across 3+ recurring workflows via automated extraction scripts.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 flex items-center justify-between text-[11px] text-[#d6cdbe]">
              <span>Stack: Pandas, SQL, Power BI, Git</span>
              <span className="text-[#ffd700] font-bold">Escalations: 0</span>
            </div>
          </div>

          {/* Experience Card 3: Project Leadership */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#3e5630]/50 pb-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18]/90 via-[#380712]/90 to-[#142210]/90 border border-[#852238]/70 text-[#fffff8] text-[10px] font-semibold uppercase tracking-wider mb-2 shadow-[0_2px_8px_rgba(56,7,18,0.4)]">
                    <Users className="w-3 h-3 text-[#fceab8]" /> <span className="text-[#fffff8]">Agile Leadership</span>
                  </div>
                  <h4 className="font-editorial text-xl sm:text-2xl text-[#fffff8] font-medium">
                    Sensor Optimization
                  </h4>
                  <div className="text-[11px] text-[#e6c280]/90 mt-0.5">
                    Engineering Project Lead • 5-Member Team
                  </div>
                </div>
                <span className="text-[11px] text-[#d6cdbe]">7 Phases</span>
              </div>

              {/* Impact Badges */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-[10px]">
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Team Delivery</span>
                  <span className="font-bold text-[#ffd700] text-sm mt-0.5 block">100% On-Time</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e180b]/85 border border-[#3e5630]/60">
                  <span className="text-[#d6cdbe] block">Production Coverage</span>
                  <span className="font-bold text-[#f5d77f] text-sm mt-0.5 block">98.3% Orders</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="font-sans text-xs text-[#f0ebd8] space-y-2.5 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Served as <strong>project lead for a 5-member team</strong>, ensuring on-time delivery across all 7 phases by coordinating tasks and Agile workflows in Jira.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Reduced production error rates through <strong>forward and reverse physics modeling</strong>, lowering rework costs and boosting product quality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] mt-0.5 shrink-0" />
                  <span>Delivered a cost-relevant pipeline with <strong>98.3% coverage of production orders</strong>, outperforming baseline models in 6 of 9 cells.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 flex items-center justify-between text-[11px] text-[#d6cdbe]">
              <span>Process: Jira, Agile/Scrum, Modeling</span>
              <span className="text-[#ffd700] font-bold">Coverage: 98.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Competencies & Technical Arsenal Matrix */}
      <div>
        <div className="mb-12">
          <div className="flex items-center gap-3.5 mb-3.5">
            <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Technical Arsenal & Core Stack
            </span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#faf8f3] leading-[1.08] tracking-tight">
            Competencies & <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,215,0,0.35)]">Skill Matrix</span>
          </h3>
          <p className="font-sans text-base sm:text-lg text-[#f0ebd8] max-w-2xl font-light mt-3 leading-relaxed">
            Hands-on technical proficiency across cloud data architectures, generative AI orchestrations, and production data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {/* Skill Pillar 1 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-4 shadow-[0_0_15px_rgba(230,194,128,0.15)]">
                <Database className="w-5 h-5 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-xl sm:text-[22px] text-[#faf8f3] font-medium mb-2">
                Data Modeling & Analytics
              </h4>
              <p className="font-sans text-xs text-[#f0ebd8] leading-relaxed font-light mb-4">
                Dimensional star & snowflake schema design, multi-table analytics, high-efficiency data cleaning, and KPI reporting.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">SQL</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Python (Pandas, Polars, NumPy)</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Star Schema</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Power BI</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Looker Studio</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 text-[10px] text-[#ffd700] font-bold">
              50,000+ Row Validations
            </div>
          </div>

          {/* Skill Pillar 2 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-4 shadow-[0_0_15px_rgba(230,194,128,0.15)]">
                <Bot className="w-5 h-5 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-xl sm:text-[22px] text-[#faf8f3] font-medium mb-2">
                Generative AI & LLMs
              </h4>
              <p className="font-sans text-xs text-[#f0ebd8] leading-relaxed font-light mb-4">
                Multi-agent workflow orchestration, vector search RAG systems, model fine-tuning, and conversational state persistence.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">LangGraph</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">RAG Pipelines</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Vector DBs (Postgres)</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">BERT Fine-Tuning</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Claude & ChatGPT</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 text-[10px] text-[#ffd700] font-bold">
              Multi-Step Reasoning Agents
            </div>
          </div>

          {/* Skill Pillar 3 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-4 shadow-[0_0_15px_rgba(230,194,128,0.15)]">
                <Cloud className="w-5 h-5 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-xl sm:text-[22px] text-[#faf8f3] font-medium mb-2">
                Cloud & Warehouses
              </h4>
              <p className="font-sans text-xs text-[#f0ebd8] leading-relaxed font-light mb-4">
                Building cloud ETL pipelines, data lakehouse architectures, and scalable analytics query layers.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Azure Data Factory</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">ADLS & Synapse</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Databricks</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">AWS (S3, Athena)</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Snowflake</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 text-[10px] text-[#ffd700] font-bold">
              Cloud Lakehouse & Star Schemas
            </div>
          </div>

          {/* Skill Pillar 4 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between tactile-card bg-[#142210]/85 border-[#3e5630]/60 hover:border-[#ffd700]/60 shadow-[0_15px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_20px_50px_rgba(10,18,8,0.85),0_0_25px_rgba(230,194,128,0.2)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0e180b] border border-[#e6c280]/40 flex items-center justify-center text-[#ffd700] mb-4 shadow-[0_0_15px_rgba(230,194,128,0.15)]">
                <GitBranch className="w-5 h-5 text-[#ffd700]" />
              </div>
              <h4 className="font-editorial text-xl sm:text-[22px] text-[#faf8f3] font-medium mb-2">
                Production & Agile
              </h4>
              <p className="font-sans text-xs text-[#f0ebd8] leading-relaxed font-light mb-4">
                Modern orchestration pipelines, microservices, containerization, sprint delivery, and reproducible codebases.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">FastAPI & Pydantic</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Docker & Compose</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Apache Airflow</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">dbt</span>
                <span className="px-2 py-0.5 rounded bg-[#0e180b]/90 border border-[#3e5630]/60 text-[#f0ebd8]">Jira & Agile/Scrum</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3e5630]/50 text-[10px] text-[#ffd700] font-bold">
              CI/CD & Reproducible Stacks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
