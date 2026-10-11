import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Download,
  Mail,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  Linkedin,
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Printer,
  X,
  FileCheck,
  AlertCircle,
} from 'lucide-react';
import { resumeData, ResumeProject } from '../data/resumeData';

interface ResumePageProps {
  onBack: () => void;
  onNavigateProject?: (slug: string) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onBack, onNavigateProject }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim() || !userEmail.includes('@')) {
      setEmailStatus('error');
      return;
    }

    setEmailStatus('sending');
    setTimeout(() => {
      setEmailStatus('sent');
      // Store in localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('resume_email_requests') || '[]');
        existing.push({ email: userEmail, name: userName, timestamp: new Date().toISOString() });
        localStorage.setItem('resume_email_requests', JSON.stringify(existing));
      } catch {
        // ignore
      }
    }, 800);
  };

  const resetEmailModal = () => {
    setIsEmailModalOpen(false);
    setTimeout(() => {
      setEmailStatus('idle');
      setUserEmail('');
      setUserName('');
    }, 300);
  };

  return (
    <div className="min-h-screen text-[#faf8f3] selection:bg-[#e6c280] selection:text-[#182713] relative select-none">
      {/* Top Floating Sticky Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#121c0e]/90 border-b border-[#3e5630]/60 transition-all">
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
            <span className="text-[#a89060]">Curated Portfolio</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#ffd700] font-bold">Curriculum Vitae</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#fffff8] font-medium">{resumeData.name}</span>
          </div>

          {/* Action Buttons: Download Resume & Email Resume */}
          <div className="flex items-center gap-3">
            {/* Download Resume Button */}
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#380712]/90 via-[#4a0a18]/85 to-[#2a1a10]/90 border border-[#852238]/80 hover:border-[#ffd700] text-[#fffff8] font-sans font-medium text-xs sm:text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(56,7,18,0.5)] hover:shadow-[0_0_24px_rgba(133,34,56,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#e6c280]" />
              <span>Download Resume</span>
            </button>

            {/* Email Resume Button */}
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_4px_18px_rgba(230,194,128,0.45)] hover:shadow-[0_6px_28px_rgba(255,215,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Receive Resume by Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#1c0f08]" />
              <span>Email Resume</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-28">
        {/* Header Hero Section */}
        <section className="border-b border-[#3e5630]/60 pb-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div className="max-w-4xl">
              {/* Kicker Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280]">
                  Official Curriculum Vitae
                </span>
                <span className="text-[#5c3a25]">•</span>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[11px] font-mono tracking-wider uppercase text-[#fffff8] shadow-[0_2px_8px_rgba(56,7,18,0.4)] font-medium">
                  Candidate Profile 2024 — 2026
                </span>
                <span className="px-3 py-1 rounded-full bg-[#142210] border border-[#3e5630]/70 text-[11px] font-mono text-[#f5d77f] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
                  <span>Open for Working Student & Data/AI Roles</span>
                </span>
              </div>

              {/* Candidate Name */}
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal text-[#fffff8] leading-[0.98] tracking-tight mb-4 drop-shadow-[0_4px_24px_rgba(10,18,8,0.9)]">
                {resumeData.name}
              </h1>

              {/* Title & Headline */}
              <p className="font-editorial italic text-2xl sm:text-3xl text-[#f5d77f] font-light leading-snug max-w-3xl mb-4">
                {resumeData.title}
              </p>

              {/* Executive Summary */}
              <p className="font-sans text-base sm:text-lg text-[#f0ebd8] font-light leading-relaxed max-w-3xl">
                {resumeData.summary}
              </p>
            </div>

            {/* Quick Contact & Verification Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl tactile-card bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_15px_40px_rgba(10,18,8,0.7)] shrink-0 w-full lg:w-96 font-mono text-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#3e5630]/60">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span className="font-mono text-xs font-semibold text-[#faf8f3] uppercase tracking-wider">
                  Contact & Location
                </span>
              </div>
              <div className="space-y-3.5">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-2.5 text-[#f0ebd8] hover:text-[#ffd700] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ffd700] shrink-0" />
                  <span className="truncate">{resumeData.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-[#f0ebd8]">
                  <Phone className="w-4 h-4 text-[#f5d77f] shrink-0" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#f0ebd8]">
                  <MapPin className="w-4 h-4 text-[#e6c280] shrink-0" />
                  <span>{resumeData.location}</span>
                </div>
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#ffd700] hover:text-[#fffff8] transition-colors pt-2 border-t border-[#3e5630]/50"
                >
                  <Linkedin className="w-4 h-4 text-[#ffd700] shrink-0" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Luxury Grid for Work Experience & Education */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 border-b border-[#3e5630]/60 pb-4">
              <Briefcase className="w-5 h-5 text-[#ffd700]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              {resumeData.experiences.map((exp, idx) => (
                <div
                  key={exp.role + idx}
                  className="tactile-card p-7 rounded-3xl bg-[#142210]/90 hover:bg-[#1a2d15] border border-[#3e5630]/70 hover:border-[#ffd700]/70 transition-all duration-300 relative overflow-hidden group shadow-[0_12px_36px_rgba(10,18,8,0.7)]"
                >
                  {/* Walnut hover accent line */}
                  <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-editorial text-2xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-sm text-[#e6c280] font-medium mt-1">
                        {exp.company} <span className="text-[#852238]">•</span> {exp.location}
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#0e180b] border border-[#3e5630]/70 text-[#f5d77f] shrink-0 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 font-sans text-sm sm:text-[15px] text-[#f0ebd8]/90 font-light leading-relaxed">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Publications Column (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#3e5630]/60 pb-4">
                <GraduationCap className="w-5 h-5 text-[#ffd700]" />
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                  Education
                </h2>
              </div>

              <div className="space-y-5">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={edu.degree + idx}
                    className="tactile-card p-6 rounded-3xl bg-[#142210]/90 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)]"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-editorial text-xl text-[#fffff8] leading-snug">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#0e180b] border border-[#3e5630]/70 text-[#f5d77f] shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[#e6c280] font-medium mb-2">
                      {edu.institution} <span className="text-[#852238]">•</span> {edu.location}
                    </div>
                    {edu.details && (
                      <div className="font-sans text-xs text-[#f0ebd8]/80 italic">
                        {edu.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#3e5630]/60 pb-4">
                <BookOpen className="w-5 h-5 text-[#ffd700]" />
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                  Publications
                </h2>
              </div>

              <div className="space-y-4">
                {resumeData.publications.map((pub, idx) => (
                  <div
                    key={pub.title + idx}
                    className="tactile-card p-6 rounded-3xl bg-[#142210]/90 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)] group hover:border-[#ffd700]/70 transition-all"
                  >
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[#fffff8] font-medium inline-block mb-2">
                      Peer-Reviewed {pub.year}
                    </span>
                    <h3 className="font-editorial text-lg text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug mb-1">
                      {pub.title}
                    </h3>
                    <div className="font-mono text-xs text-[#e6c280]/90">
                      {pub.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies Matrix */}
        <section className="mb-20">
          <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-[#ffd700]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                Technical Skills & Competencies
              </h2>
            </div>
            <span className="font-mono text-xs text-[#e6c280] hidden sm:block">
              Engineered for Production & Scalability
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Data Modeling & Analytics */}
            <div className="tactile-card p-6 rounded-3xl bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#ffd700] font-bold uppercase tracking-wider block mb-3">
                  01 / Data Modeling & Analytics
                </span>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.dataModeling.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#0e180b] border border-[#3e5630]/60 font-mono text-xs text-[#f0ebd8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Generative AI & LLMs */}
            <div className="tactile-card p-6 rounded-3xl bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#ffd700] font-bold uppercase tracking-wider block mb-3">
                  02 / Generative AI & LLMs
                </span>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.generativeAI.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#0e180b] border border-[#3e5630]/60 font-mono text-xs text-[#f0ebd8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Platforms & DevOps */}
            <div className="tactile-card p-6 rounded-3xl bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#ffd700] font-bold uppercase tracking-wider block mb-3">
                  03 / Cloud Platforms & Infra
                </span>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.cloud.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#0e180b] border border-[#3e5630]/60 font-mono text-xs text-[#f0ebd8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Collaboration & Soft Skills */}
            <div className="tactile-card p-6 rounded-3xl bg-[#142210]/95 border border-[#3e5630]/70 shadow-[0_12px_36px_rgba(10,18,8,0.7)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#ffd700] font-bold uppercase tracking-wider block mb-3">
                  04 / Methods & Languages
                </span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {resumeData.skills.collaboration.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full bg-[#0e180b] border border-[#3e5630]/60 font-mono text-xs text-[#f0ebd8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="border-t border-[#3e5630]/50 pt-2.5 space-y-1 text-xs font-mono">
                  {resumeData.skills.languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between text-[#e6c280]">
                      <span>{lang.name}</span>
                      <span className="text-[#f5d77f] font-semibold">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Projects Experience Portfolio */}
        <section className="mb-20">
          <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#ffd700]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                Project Experience & Engineering Track Record
              </h2>
            </div>
            <span className="font-mono text-xs text-[#e6c280] hidden sm:block">
              10 Featured Implementations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((proj: ResumeProject, idx: number) => {
              const hasDetailPage = !!proj.projectSlug;
              return (
                <div
                  key={proj.title + idx}
                  className={`tactile-card p-7 rounded-3xl bg-[#142210]/90 border border-[#3e5630]/70 transition-all duration-300 relative flex flex-col justify-between shadow-[0_12px_36px_rgba(10,18,8,0.7)] ${
                    hasDetailPage
                      ? 'hover:border-[#ffd700]/70 hover:bg-[#1a2d15] cursor-pointer group'
                      : ''
                  }`}
                  onClick={() => {
                    if (hasDetailPage && proj.projectSlug && onNavigateProject) {
                      onNavigateProject(proj.projectSlug);
                    }
                  }}
                >
                  <div>
                    {/* Header: Title + Tech Stack */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      {hasDetailPage && (
                        <div className="w-8 h-8 rounded-full border border-[#e6c280]/40 bg-[#0e180b] flex items-center justify-center text-[#ffd700] shrink-0 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#ffd700] group-hover:text-[#1c0f08] transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {proj.techStack && (
                      <div className="font-mono text-xs text-[#e6c280] font-medium mb-4 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[#852238] font-bold">Stack:</span>
                        <span>{proj.techStack}</span>
                      </div>
                    )}

                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#f0ebd8]/85 font-light leading-relaxed">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {hasDetailPage && (
                    <div className="mt-5 pt-3 border-t border-[#3e5630]/50 flex items-center justify-between text-xs font-mono text-[#ffd700]">
                      <span>View Dedicated System Architecture</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Call to Action & Navigation */}
        <section className="border-t border-[#3e5630]/60 pt-12">
          <div className="tactile-card p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#142210]/95 via-[#1a2d15]/95 to-[#142210]/95 border border-[#ffd700]/40 shadow-[0_20px_50px_rgba(10,18,8,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#ffd700] uppercase font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Candidate Portfolio</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal leading-tight mb-2">
                Need a copy for hiring or internal review?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#f0ebd8] font-light max-w-xl">
                Download the resume directly or request an official PDF copy sent directly to your inbox.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#380712]/90 hover:bg-[#520c1c] border border-[#852238]/80 text-[#fffff8] font-sans font-semibold text-sm hover:border-[#ffd700] transition-all cursor-pointer shadow-[0_6px_20px_rgba(56,7,18,0.5)] flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#e6c280]" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-sm shadow-[0_4px_24px_rgba(230,194,128,0.5)] hover:shadow-[0_8px_32px_rgba(255,215,0,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#1c0f08]" />
                <span>Email Resume</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Email Resume Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={resetEmailModal}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-[#142210]/98 border border-[#e6c280]/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(10,18,8,0.95)] text-[#faf8f3] z-10 tactile-card overflow-hidden">
            {/* Ambient Accent Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ffd700]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#852238]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={resetEmailModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#380712]/70 border border-[#852238]/70 hover:border-[#ffd700]/70 hover:bg-[#5a1422] transition-colors text-[#fffff8] cursor-pointer"
              aria-label="Close email modal"
            >
              <X className="w-4 h-4" />
            </button>

            {emailStatus === 'sent' ? (
              /* Success View */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e6c280] text-[#1c0f08] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-editorial text-3xl text-[#fffff8]">
                  Resume Delivery Queued!
                </h3>
                <p className="font-sans text-sm text-[#f0ebd8] font-light max-w-md mx-auto leading-relaxed">
                  Thank you! An official PDF copy of <strong className="text-[#ffd700] font-medium">{resumeData.name}'s resume</strong> has been scheduled to be sent to:
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-[#0e180b] border border-[#ffd700]/60 font-mono text-sm text-[#ffd700]">
                  {userEmail}
                </div>
                <div className="pt-4 border-t border-[#3e5630]/60">
                  <p className="font-mono text-xs text-[#a89060] mb-4">
                    Need immediate access right away?
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        resetEmailModal();
                        setIsDownloadModalOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#380712]/80 hover:bg-[#520c1c] border border-[#852238] text-xs font-sans text-[#fffff8] flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#ffd700]" />
                      <span>Download Directly Instead</span>
                    </button>
                    <button
                      onClick={resetEmailModal}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e6c280] text-[#1c0f08] text-xs font-sans font-bold cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSendEmail} className="space-y-5">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/40 flex items-center justify-center text-[#ffd700]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#e6c280] font-semibold block">
                      Direct Dispatch
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] leading-tight">
                      Email Resume to Your Inbox
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#f0ebd8]/80 font-light leading-relaxed">
                  Enter your email address to receive an official PDF copy of Abhimanyu Kanase's verified resume and project references.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block font-mono text-xs text-[#e6c280] mb-1.5">
                      Your Name <span className="text-[#a89060] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Alex Morgan / Hiring Lead"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-sans text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#ffd700] mb-1.5 font-semibold">
                      Your Email Address <span className="text-[#ffd700]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-mono text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {emailStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-[#380712]/90 border border-[#852238] text-xs text-[#ffb4b4] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#ffd700] shrink-0" />
                    <span>Please enter a valid email address to receive the resume.</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={emailStatus === 'sending'}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-sm shadow-[0_4px_20px_rgba(230,194,128,0.45)] hover:shadow-[0_6px_28px_rgba(255,215,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {emailStatus === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#1c0f08] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Resume to My Email</span>
                      </>
                    )}
                  </button>

                  {/* Explicit Second Option as requested */}
                  <div className="text-center pt-2 border-t border-[#3e5630]/50">
                    <span className="font-mono text-xs text-[#a89060] block mb-2">
                      Prefer not to share your email?
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        resetEmailModal();
                        setIsDownloadModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#ffd700] hover:text-[#fffff8] underline underline-offset-4 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Resume can also be downloaded directly</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Interactive Download Resume Modal */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={() => setIsDownloadModalOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-[#142210]/98 border border-[#e6c280]/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(10,18,8,0.95)] text-[#faf8f3] z-10 tactile-card overflow-hidden">
            {/* Ambient Accent Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ffd700]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#852238]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#380712]/70 border border-[#852238]/70 hover:border-[#ffd700]/70 hover:bg-[#5a1422] transition-colors text-[#fffff8] cursor-pointer"
              aria-label="Close download modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/50 flex items-center justify-center text-[#ffd700]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#e6c280] font-semibold block">
                  Document Dispatch
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] leading-tight">
                  Download Official Resume
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-5 font-sans text-xs sm:text-sm text-[#f0ebd8]/85 font-light leading-relaxed">
              <p>
                You can save or print this formatted luxury profile immediately, or request an official PDF package sent directly to your email inbox.
              </p>
              <div className="p-4 rounded-2xl bg-[#0e180b]/90 border border-[#3e5630]/80 space-y-2 font-mono text-xs text-[#e6c280]">
                <div className="flex items-center gap-2 text-[#ffd700] font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Production PDF</span>
                </div>
                <p className="text-[#f0ebd8]/80 text-[11px] font-sans font-light">
                  A standalone official PDF file is currently being linked. In the meantime, you can print/save this styled view as a clean PDF or receive it by email.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Option 1: Print / Save to PDF */}
              <button
                type="button"
                onClick={() => {
                  window.print();
                  setIsDownloadModalOpen(false);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-sm shadow-[0_4px_20px_rgba(230,194,128,0.45)] hover:shadow-[0_6px_28px_rgba(255,215,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print or Save as PDF (Clean Layout)</span>
              </button>

              {/* Option 2: Request via Email */}
              <button
                type="button"
                onClick={() => {
                  setIsDownloadModalOpen(false);
                  setIsEmailModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#380712]/85 hover:bg-[#520c1c] border border-[#852238] text-xs font-sans text-[#fffff8] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>Or Have It Sent to Your Email Instead</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
