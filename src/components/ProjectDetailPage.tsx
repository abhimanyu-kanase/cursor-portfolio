import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Calendar,
  Building2,
  Compass,
} from 'lucide-react';
import { ProjectDetail, projectsData } from '../data/projectsData';

interface ProjectDetailPageProps {
  slug: string;
  onBack: () => void;
  onNavigateProject: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onBack,
  onNavigateProject,
}) => {
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex] || projectsData[0];

  const prevProject =
    projectIndex > 0
      ? projectsData[projectIndex - 1]
      : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : projectsData[0];

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveTab(0);
  }, [slug]);

  return (
    <div className="min-h-screen text-[#faf8f3] selection:bg-[#e6c280] selection:text-[#182713] relative select-none">
      {/* Top Floating Luxury Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#121c0e]/85 border-b border-[#3e5630]/60 transition-all">
        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#142210]/90 hover:bg-[#1f3518] border border-[#3e5630]/70 hover:border-[#ffd700]/70 text-[#faf8f3] hover:text-[#fffff8] font-mono text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(10,18,8,0.6)] active:scale-95"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-4 h-4 text-[#ffd700] transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          {/* Breadcrumb Index */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-[#e6c280]">
            <span className="text-[#a89060]">Curated Works</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#ffd700] font-bold">Project {project.number}</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#fffff8] font-medium truncate max-w-xs">{project.title}</span>
          </div>

          {/* Direct External Action Buttons */}
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_4px_18px_rgba(230,194,128,0.4)] hover:shadow-[0_6px_24px_rgba(255,215,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>{project.slug === 'cotton-detection-harvest-vision' ? 'IEEE Publication' : 'Live Demo'}</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1c0f08]" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#380712]/90 via-[#4a0a18]/85 to-[#2a1a10]/90 border border-[#852238]/80 hover:border-[#ffd700] text-[#fffff8] font-sans font-medium text-xs sm:text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(56,7,18,0.5)] hover:shadow-[0_0_24px_rgba(133,34,56,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-[#e6c280]" />
                <span className="hidden sm:inline">Repository</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-28">
        {/* Project Hero Header */}
        <div className="border-b border-[#3e5630]/60 pb-12 sm:pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div className="max-w-4xl">
              {/* Kicker with Category Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280]">
                  Project {project.number}
                </span>
                <span className="text-[#5c3a25]">•</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[11px] font-mono tracking-wider uppercase text-[#fffff8] shadow-[0_2px_8px_rgba(56,7,18,0.4)] font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#142210] border border-[#3e5630]/70 text-[11px] font-mono text-[#f5d77f]">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#fffff8] leading-[1.05] tracking-tight mb-4 drop-shadow-[0_4px_24px_rgba(10,18,8,0.9)]">
                {project.title}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xl sm:text-2xl text-[#f0ebd8] font-light leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Context Summary Grid */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl tactile-card bg-[#142210]/90 border-[#3e5630]/70 shadow-[0_15px_40px_rgba(10,18,8,0.7)] shrink-0 w-full lg:w-80 font-mono text-xs">
              <div className="space-y-4">
                <div>
                  <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold flex items-center gap-1.5 mb-1">
                    <Building2 className="w-3 h-3 text-[#ffd700]" /> Client / Context
                  </span>
                  <span className="font-semibold text-[#fffff8] block">{project.client}</span>
                </div>
                <div className="border-t border-[#3e5630]/50 pt-3">
                  <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3 h-3 text-[#ffd700]" /> Year & Timeline
                  </span>
                  <span className="font-semibold text-[#fffff8] block">{project.year} • Completed</span>
                </div>
                <div className="border-t border-[#3e5630]/50 pt-3">
                  <span className="text-[#e6c280]/80 block text-[10px] uppercase font-semibold flex items-center gap-1.5 mb-1">
                    <Compass className="w-3 h-3 text-[#ffd700]" /> Domain Focus
                  </span>
                  <span className="font-semibold text-[#f7de9c] block">{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Tags Ribbon */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-[#0e180b]/90 border border-[#3e5630]/70 text-[#faf8f3] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Showcase / Blueprint Mockup Frame */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] font-medium">
                System Visuals & Architectural Blueprint
              </h2>
            </div>
            <span className="font-mono text-xs text-[#e6c280] hidden sm:block">
              Interactive Preview Deck
            </span>
          </div>

          {/* Main Showcase Panel */}
          <div className="tactile-card p-6 sm:p-10 rounded-3xl bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_20px_50px_rgba(10,18,8,0.95)] overflow-hidden relative">
            {/* Ambient Radial Backlighting */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ffd700]/10 via-[#380712]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Showcase Tab Selector */}
            <div className="flex flex-wrap gap-2.5 mb-8 border-b border-[#3e5630]/50 pb-5">
              {project.gallery.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeTab === idx
                      ? 'bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                      : 'bg-[#0e180b]/80 hover:bg-[#182713] border border-[#3e5630]/70 text-[#f0ebd8]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{item.tag}</span>
                </button>
              ))}
            </div>

            {/* Active Display Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Graphic Blueprint Simulation Frame */}
              <div className="lg:col-span-8 bg-[#0a1207] border border-[#3e5630]/70 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-between shadow-inner">
                {/* Fine Grid Background */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#ffd700 1px, transparent 1px), radial-gradient(#852238 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                {/* Top Blueprint Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#3e5630]/50 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#e6c280]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#852238]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27441d]" />
                    <span className="ml-2 text-[#faf8f3] font-semibold">
                      {project.gallery[activeTab]?.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#a89060]">
                    SYS-DIAG-0{project.number} • VER 1.0.0
                  </span>
                </div>

                {/* Graphic Core Simulation */}
                <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#380712] via-[#142210] to-[#0a1207] border border-[#ffd700]/50 flex items-center justify-center text-[#ffd700] mb-5 shadow-[0_0_30px_rgba(255,215,0,0.25)]">
                    {activeTab === 0 ? (
                      <Cpu className="w-10 h-10 text-[#ffd700]" />
                    ) : activeTab === 1 ? (
                      <Layers className="w-10 h-10 text-[#ffd700]" />
                    ) : (
                      <BarChart3 className="w-10 h-10 text-[#ffd700]" />
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] font-medium max-w-lg mb-2">
                    {project.gallery[activeTab]?.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#e6c280] max-w-md">
                    {project.gallery[activeTab]?.subtitle}
                  </p>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#3e5630]/50 pt-4 font-mono text-[11px] text-[#f0ebd8]">
                  <span>Telemetry: Nominal • Low Latency Execution</span>
                  <span className="text-[#ffd700] font-bold">Encrypted & Validated</span>
                </div>
              </div>

              {/* Explanatory Sidebar */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#ffd700] font-bold tracking-widest uppercase block mb-2">
                    Overview Note
                  </span>
                  <h4 className="font-editorial text-2xl text-[#fffff8] font-medium mb-3">
                    {project.gallery[activeTab]?.title}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#f0ebd8] font-light leading-relaxed mb-6">
                    {project.gallery[activeTab]?.description}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0e180b]/90 border border-[#3e5630]/60 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#faf8f3]">
                    <span>Target Outcome:</span>
                    <span className="text-[#ffd700] font-bold">{project.keyOutcomes[0]?.metric}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#faf8f3]">
                    <span>Primary Stack:</span>
                    <span className="text-[#e6c280]">{project.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#faf8f3]">
                    <span>Validation Status:</span>
                    <span className="text-[#fffff8] font-semibold">100% Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Outcomes & Key Impact Metrics */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-xs text-[#e6c280] tracking-widest uppercase font-medium">
              Proven Delivery & Impact
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#fffff8] font-normal mt-2 leading-tight">
              Measurable Outcomes & <span className="italic bg-gradient-to-r from-[#ffd700] via-[#fceab8] to-[#e6c280] bg-clip-text text-transparent">Engineering Benchmarks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {project.keyOutcomes.map((item) => (
              <div
                key={item.label}
                className="tactile-card p-6 sm:p-7 rounded-2xl bg-[#142210]/90 border border-[#3e5630]/60 hover:border-[#ffd700]/70 transition-all duration-300 shadow-[0_12px_32px_rgba(10,18,8,0.7)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#ffd700] block mb-2 drop-shadow-[0_2px_14px_rgba(255,215,0,0.4)]">
                    {item.metric}
                  </span>
                  <h3 className="font-sans text-base font-semibold text-[#fffff8] mb-2">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-[#f0ebd8] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#3e5630]/50 text-[10px] text-[#e6c280] font-bold uppercase tracking-wider">
                  Verified Metric
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep-Dive Architecture Breakdown */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Detailed Overview & Objectives */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#e6c280] tracking-widest uppercase font-medium">
                  Challenge & Solution
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal mt-2 leading-tight">
                  Architectural Foundation
                </h2>
              </div>

              <div className="space-y-4 font-sans text-base text-[#f0ebd8] font-light leading-relaxed">
                {project.overview.map((para, i) => (
                  <p key={i} className="p-4 rounded-xl bg-[#0e180b]/60 border border-[#3e5630]/40">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Technical Highlights Grid */}
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs text-[#ffd700] font-bold tracking-widest uppercase block mb-1">
                Engineering Highlights
              </span>
              <div className="space-y-4">
                {project.architectureHighlights.map((hi, i) => (
                  <div
                    key={hi.title}
                    className="tactile-card p-6 sm:p-7 rounded-2xl bg-[#142210]/90 border border-[#3e5630]/60 hover:border-[#ffd700]/60 transition-all shadow-[0_12px_32px_rgba(10,18,8,0.7)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#380712]/90 border border-[#852238]/80 text-[#ffd700] font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(56,7,18,0.5)]">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-editorial text-xl sm:text-2xl text-[#fffff8] font-medium mb-2">
                          {hi.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-[#f0ebd8] font-light leading-relaxed">
                          {hi.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Project-to-Project Navigation */}
        <section className="border-t border-[#3e5630]/60 pt-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            {/* Previous Project Button */}
            <button
              onClick={() => onNavigateProject(prevProject.slug)}
              className="group text-left p-6 rounded-2xl tactile-card bg-[#142210]/85 hover:bg-[#1a2d15] border border-[#3e5630]/60 hover:border-[#ffd700]/70 transition-all flex items-center gap-4 cursor-pointer flex-1"
            >
              <div className="w-12 h-12 rounded-full border border-[#e6c280]/40 bg-[#0e180b] flex items-center justify-center text-[#ffd700] shrink-0 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#a89060] uppercase block">
                  Previous • 0{prevProject.number}
                </span>
                <span className="font-editorial text-lg sm:text-xl text-[#fffff8] font-medium group-hover:text-[#ffd700] transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </button>

            {/* Central Back Button */}
            <button
              onClick={onBack}
              className="px-6 py-4 rounded-full bg-[#380712]/85 hover:bg-[#520c1c] border border-[#852238]/80 text-[#fffff8] font-mono text-xs uppercase tracking-widest font-semibold hover:border-[#ffd700] transition-all cursor-pointer shadow-[0_6px_20px_rgba(56,7,18,0.5)] shrink-0 self-center"
            >
              All Projects
            </button>

            {/* Next Project Button */}
            <button
              onClick={() => onNavigateProject(nextProject.slug)}
              className="group text-right p-6 rounded-2xl tactile-card bg-[#142210]/85 hover:bg-[#1a2d15] border border-[#3e5630]/60 hover:border-[#ffd700]/70 transition-all flex items-center justify-end gap-4 cursor-pointer flex-1"
            >
              <div>
                <span className="font-mono text-xs text-[#a89060] uppercase block">
                  Next • 0{nextProject.number}
                </span>
                <span className="font-editorial text-lg sm:text-xl text-[#fffff8] font-medium group-hover:text-[#ffd700] transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-[#e6c280]/40 bg-[#0e180b] flex items-center justify-center text-[#ffd700] shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
