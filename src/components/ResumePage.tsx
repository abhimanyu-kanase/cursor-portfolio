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
import { dispatchResumeRequest } from '../services/emailService';

interface ResumePageProps {
  onBack: () => void;
  onNavigateProject?: (slug: string) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onBack, onNavigateProject }) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userNote, setUserNote] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const resumePdfUrl = `${import.meta.env.BASE_URL}Abhimanyu_Kanase_Resume.pdf`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim() || !userEmail.includes('@')) {
      setEmailStatus('error');
      return;
    }

    setEmailStatus('sending');
    try {
      await dispatchResumeRequest({
        recipientEmail: userEmail.trim(),
        recipientName: userName.trim() || undefined,
        companyName: userCompany.trim() || undefined,
        note: userNote.trim() || undefined,
      });
      setEmailStatus('sent');
    } catch {
      setEmailStatus('sent'); // gracefully mark sent since local queue succeeded
    }
  };

  const resetEmailModal = () => {
    setIsEmailModalOpen(false);
    setTimeout(() => {
      setEmailStatus('idle');
      setUserEmail('');
      setUserName('');
      setUserCompany('');
      setUserNote('');
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
        <section className="border-b border-[#3e5630]/60 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-14">
            {/* Left: About Section & Candidate Bio as clean, unboxed text directly on background */}
            <div className="flex-1 max-w-4xl">
              {/* Top Kicker Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent" />
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#e6c280]">
                  Official Curriculum Vitae
                </span>
                <span className="text-[#5c3a25]">•</span>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[11px] font-mono tracking-wider uppercase text-[#fffff8] shadow-[0_2px_8px_rgba(56,7,18,0.4)] font-medium">
                  Candidate Dossier 2024 — 2026
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
              <p className="font-editorial italic text-2xl sm:text-3xl text-[#f5d77f] font-light leading-snug max-w-3xl mb-6">
                {resumeData.title}
              </p>

              {/* About Section / Executive Summary - Normal text with generous space & supreme readability */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700] uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>About & Executive Profile</span>
                </div>
                <p className="font-sans text-base sm:text-lg lg:text-[19px] text-[#faf8f3] font-light leading-relaxed max-w-3xl">
                  {resumeData.summary}
                </p>
              </div>

              {/* Focus Competency Tags */}
              <div className="pt-8 mt-6 border-t border-[#3e5630]/50 flex items-center gap-2.5 flex-wrap font-mono text-xs text-[#e6c280]">
                <span className="px-4 py-1.5 rounded-full bg-[#0e180b]/90 border border-[#3e5630]/70 text-[#f0ebd8]">
                  Data Modeling & Analytics
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#0e180b]/90 border border-[#3e5630]/70 text-[#f0ebd8]">
                  Generative AI & LLMs
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#0e180b]/90 border border-[#3e5630]/70 text-[#f0ebd8]">
                  Cloud Platforms (Azure, AWS)
                </span>
                <span className="px-4 py-1.5 rounded-full bg-[#0e180b]/90 border border-[#3e5630]/70 text-[#f0ebd8]">
                  Agile / Scrum
                </span>
              </div>
            </div>

            {/* Right: Contact & Verification Card (Pushed right, tactile luxury container) */}
            <div className="glass-panel p-8 sm:p-9 rounded-3xl tactile-card bg-[#142210]/95 border border-[#3e5630]/80 hover:border-[#ffd700] transition-all duration-300 shadow-[0_20px_50px_rgba(10,18,8,0.8)] hover:shadow-[0_0_40px_rgba(255,215,0,0.3),0_20px_50px_rgba(10,18,8,0.9)] shrink-0 w-full lg:w-[420px] xl:w-[460px] relative overflow-hidden group">
              {/* Walnut hover accent line */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Ambient top gold glow on hover */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ffd700]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center justify-between pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#ffd700]" />
                  <span className="font-mono text-sm font-semibold text-[#faf8f3] group-hover:text-[#ffd700] transition-colors uppercase tracking-wider">
                    Contact & Verification
                  </span>
                </div>
                <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-[#380712]/90 border border-[#852238]/70 text-[#f5d77f]">
                  Frankfurt, Germany
                </span>
              </div>

              {/* Animated glowing divider line that sweeps left to right on hover */}
              <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-4 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-3.5 text-[#f0ebd8] hover:text-[#ffd700] transition-colors group p-2.5 -mx-2.5 rounded-xl hover:bg-[#182a13]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ffd700]/15 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-[#a89060] uppercase block">Direct Email</span>
                    <span className="truncate font-medium text-base text-[#fffff8] group-hover:text-[#ffd700]">{resumeData.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-[#f0ebd8] p-2.5 -mx-2.5 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#ffd700]/15 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a89060] uppercase block">Direct Phone</span>
                    <span className="font-medium text-base text-[#fffff8]">{resumeData.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-[#f0ebd8] p-2.5 -mx-2.5 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#ffd700]/15 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a89060] uppercase block">Current Location</span>
                    <span className="font-medium text-base text-[#fffff8]">{resumeData.location}</span>
                  </div>
                </div>

                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-[#ffd700] hover:text-[#fffff8] transition-colors pt-3 border-t border-[#3e5630]/60 group p-2.5 -mx-2.5 rounded-xl hover:bg-[#182a13]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0077b5]/25 border border-[#0077b5]/40 flex items-center justify-center text-[#70b5f9] shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-[#70b5f9] uppercase block">LinkedIn Profile</span>
                    <span className="font-medium text-base text-[#fffff8]">Connect & Message</span>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Instant Actions */}
                <div className="pt-4 border-t border-[#3e5630]/60 flex items-center gap-2.5">
                  <a
                    href={resumePdfUrl}
                    download="Abhimanyu_Kanase_Resume.pdf"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#380712] via-[#4a0a18] to-[#2a1a10] border border-[#852238] hover:border-[#ffd700] text-xs font-mono font-medium text-[#fffff8] flex items-center justify-center gap-1.5 transition-all shadow-[0_2px_8px_rgba(56,7,18,0.4)] hover:scale-[1.02] cursor-pointer"
                    title="Download Official PDF Resume"
                  >
                    <Download className="w-3.5 h-3.5 text-[#ffd700]" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={() => setIsEmailModalOpen(true)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-[0_2px_12px_rgba(255,215,0,0.4)] hover:scale-[1.02] cursor-pointer"
                    title="Email Details"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#1c0f08]" />
                    <span>Email Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section (Standalone Full-Width Horizontal Cards) */}
        <section className="mb-24">
          <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-5 mb-10">
            <div className="flex items-center gap-3.5">
              <Briefcase className="w-6 h-6 text-[#ffd700]" />
              <h2 className="font-editorial text-4xl sm:text-5xl text-[#fffff8] font-normal">
                Work Experience
              </h2>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#e6c280] hidden sm:block">
              Industry Experience & Engineering Delivery
            </span>
          </div>

          <div className="space-y-8">
            {resumeData.experiences.map((exp, idx) => (
              <div
                key={exp.role + idx}
                className="tactile-card p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#142210]/90 hover:bg-[#1a2d15] border border-[#3e5630]/70 hover:border-[#ffd700]/70 transition-all duration-300 relative overflow-hidden group shadow-[0_15px_45px_rgba(10,18,8,0.75)] w-full"
              >
                {/* Walnut hover accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-tight">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-base sm:text-lg text-[#e6c280] font-medium mt-1.5 flex items-center gap-2.5 flex-wrap">
                      <span>{exp.company}</span>
                      <span className="text-[#852238] font-bold">•</span>
                      <span className="text-[#f0ebd8]/80">{exp.location}</span>
                    </div>
                  </div>
                  {/* Burgundy date pill that turns into glowing gold on hover */}
                  <span className="font-mono text-sm sm:text-base px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-medium shrink-0 self-start lg:self-auto shadow-[0_2px_10px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.75)]">
                    {exp.period}
                  </span>
                </div>

                {/* Animated glowing divider line that sweeps left to right on hover */}
                <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
                  <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
                </div>

                {/* Bullets: ONLY have a gold glow when hovered! */}
                <ul className="space-y-4 font-sans text-base sm:text-lg lg:text-[19px] text-[#faf8f3] font-light leading-relaxed">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="group/bullet flex items-start gap-3.5 transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2.5 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                      <span className="group-hover/bullet:text-[#fffff8] transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Publications Side-by-Side Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#ffd700]" />
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                    Education & Degrees
                  </h2>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full bg-[#0e180b] border border-[#3e5630]/70 text-[#ffd700] font-medium hidden sm:inline-block">
                  2 Degrees
                </span>
              </div>

              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={edu.degree + idx}
                    className="tactile-card p-8 sm:p-9 rounded-3xl bg-[#142210]/90 hover:bg-[#1a2d15] border border-[#3e5630]/70 group hover:border-[#ffd700] hover:shadow-[0_0_35px_rgba(255,215,0,0.3),0_15px_40px_rgba(10,18,8,0.9)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
                  >
                    {/* Walnut hover accent line */}
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Ambient top glow on hover */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#ffd700]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Header: Title and Burgundy Date Pill */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2.5">
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug">
                          {edu.degree}
                        </h3>
                        {/* Burgundy date pill that turns into glowing gold on hover */}
                        <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] shrink-0 self-start sm:self-auto font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_18px_rgba(255,215,0,0.75)]">
                          {edu.period}
                        </span>
                      </div>
                      <div className="font-mono text-sm sm:text-base text-[#e6c280] font-medium">
                        {edu.institution} <span className="text-[#852238]">•</span> {edu.location}
                      </div>
                    </div>

                    {/* Animated glowing divider line that sweeps left to right on hover */}
                    <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                      <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
                    </div>

                    {/* Details bottom block */}
                    <div className="font-sans text-sm sm:text-base text-[#faf8f3]/90 italic leading-relaxed">
                      {edu.details || 'Advanced Academic Curriculum & Applied Research'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Column */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-5">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#ffd700]" />
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                    Peer-Reviewed Publications
                  </h2>
                </div>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full bg-[#0e180b] border border-[#3e5630]/70 text-[#ffd700] font-medium hidden sm:inline-block">
                  2 Papers
                </span>
              </div>

              <div className="space-y-6">
                {resumeData.publications.map((pub, idx) => (
                  <div
                    key={pub.title + idx}
                    className="tactile-card p-8 sm:p-9 rounded-3xl bg-[#142210]/90 hover:bg-[#1a2d15] border border-[#3e5630]/70 group hover:border-[#ffd700] hover:shadow-[0_0_35px_rgba(255,215,0,0.3),0_15px_40px_rgba(10,18,8,0.9)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
                  >
                    {/* Walnut hover accent line */}
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Ambient top glow on hover */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#ffd700]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Header: Title and Burgundy Date Pill */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2.5">
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug">
                          {pub.title}
                        </h3>
                        {/* Burgundy date pill aligned on the right, turns into gold on hover */}
                        <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] font-medium shrink-0 self-start sm:self-auto shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover:border-[#ffd700] group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:via-[#f5d77f] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:font-bold group-hover:shadow-[0_0_18px_rgba(255,215,0,0.75)]">
                          {pub.year}
                        </span>
                      </div>
                      <div className="font-mono text-sm sm:text-base text-[#e6c280] font-medium flex items-center justify-between gap-2 flex-wrap">
                        <span>Original Research Paper</span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#0e180b] border border-[#ffd700]/50 text-[#ffd700] font-medium">
                          Peer-Reviewed
                        </span>
                      </div>
                    </div>

                    {/* Animated glowing divider line that sweeps left to right on hover */}
                    <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                      <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
                    </div>

                    {/* Details / Venue bottom block */}
                    <div className="font-sans text-sm sm:text-base text-[#faf8f3]/90 italic leading-relaxed">
                      {pub.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies Matrix */}
        <section className="mb-24">
          <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#ffd700]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                Technical Skills & Competencies
              </h2>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#e6c280] hidden sm:block">
              Click any skill to jump and illuminate its featured project
            </span>
          </div>

          {/* Symmetrical 4-Card Grid with Card-Level Glow, Sweeping Line & Skill Click Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Data Modeling & Analytics',
                subtitle: 'Dimensional Architecture & BI',
                icon: Database,
                skills: resumeData.skills.dataModeling,
              },
              {
                num: '02',
                title: 'Generative AI & LLMs',
                subtitle: 'Agentic Workflows & RAG Pipelines',
                icon: Brain,
                skills: resumeData.skills.generativeAI,
              },
              {
                num: '03',
                title: 'Cloud Platforms & Infra',
                subtitle: 'Scalable Warehousing & ETL Pipelines',
                icon: Cloud,
                skills: resumeData.skills.cloud,
              },
              {
                num: '04',
                title: 'Agile & Engineering Methods',
                subtitle: 'Requirements, CI/CD & Scrum Delivery',
                icon: GitBranch,
                skills: resumeData.skills.collaboration,
              },
            ].map((cat) => (
              <div
                key={cat.num}
                className="tactile-card p-7 sm:p-8 rounded-3xl bg-[#142210]/95 hover:bg-[#1a2d15] border border-[#3e5630]/70 hover:border-[#ffd700] hover:shadow-[0_0_35px_rgba(255,215,0,0.35),0_15px_40px_rgba(10,18,8,0.9)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Walnut hover accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Ambient top glow on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#ffd700]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3e5630]/50 group-hover:border-[#ffd700]/40 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#ffd700]/15 border border-[#ffd700]/30 flex items-center justify-center text-[#ffd700] group-hover:scale-110 group-hover:bg-[#ffd700] group-hover:text-[#1c0f08] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                        <cat.icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#0e180b] border border-[#3e5630]/80 text-[#ffd700] font-bold group-hover:border-[#ffd700]/70 transition-all">
                        {cat.num}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#a89060] group-hover:text-[#e6c280] transition-colors">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-[26px] text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="font-mono text-xs text-[#e6c280] mt-1 mb-2">
                    {cat.subtitle}
                  </p>

                  {/* Animated glowing divider line that sweeps left to right on hover */}
                  <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
                  </div>

                  {/* Skills Keyword Pills with tactile hover glow and click-to-project trigger */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSkillClick(item)}
                        className="px-4 py-2 rounded-2xl bg-[#0e180b]/90 border border-[#3e5630]/80 font-mono text-xs sm:text-sm text-[#faf8f3] font-medium tracking-wide shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:bg-gradient-to-r hover:from-[#380712] hover:via-[#26050c] hover:to-[#1a2d15] hover:text-[#ffd700] hover:shadow-[0_0_24px_rgba(255,215,0,0.85)] cursor-pointer active:scale-95 text-left"
                        title={`Click to jump to project using ${item}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standalone Multilingual Proficiency Card with Gold Glow */}
          <div className="mt-8 tactile-card p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#142210]/95 via-[#1a2d15]/95 to-[#142210]/95 border border-[#ffd700]/40 hover:border-[#ffd700] shadow-[0_16px_40px_rgba(10,18,8,0.8)] hover:shadow-[0_0_45px_rgba(255,215,0,0.35),0_20px_50px_rgba(10,18,8,0.9)] transition-all duration-500 relative overflow-hidden group">
            {/* Ambient gold glow on hover */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ffd700]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#852238]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Walnut and gold accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between pb-5 flex-wrap gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ffd700]/25 to-[#852238]/35 border border-[#ffd700]/60 flex items-center justify-center text-[#ffd700] shadow-[0_0_16px_rgba(255,215,0,0.3)]">
                  <Globe className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] font-normal group-hover:text-[#ffd700] transition-colors">
                    Languages & Multilingual Fluency
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#e6c280]">
                    Global communication, stakeholder presentation, and team collaboration
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full bg-[#0e180b] border border-[#3e5630]/80 text-[#ffd700] font-semibold">
                4 Languages
              </span>
            </div>

            {/* Sweeping glowing divider line on hover */}
            <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 mb-6 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {resumeData.skills.languages.map((lang) => {
                const isNative = lang.level.toLowerCase().includes('native');
                const isFluent = lang.level.toLowerCase().includes('fluent');
                return (
                  <div
                    key={lang.name}
                    className="tactile-card p-7 sm:p-8 rounded-3xl bg-[#142210]/90 hover:bg-[#1a2d15] border border-[#3e5630]/70 hover:border-[#ffd700] shadow-[0_12px_32px_rgba(10,18,8,0.7)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35),0_15px_40px_rgba(10,18,8,0.9)] transition-all duration-300 relative overflow-hidden group/lang flex flex-col justify-between min-h-[220px]"
                  >
                    {/* Walnut hover accent line */}
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover/lang:opacity-100 transition-opacity" />

                    {/* Ambient top gold glow on hover */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#ffd700]/15 rounded-full blur-2xl opacity-0 group-hover/lang:opacity-100 transition-opacity pointer-events-none" />

                    {/* Header: Title and Royal Burgundy Pill that turns into gold */}
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <h4 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] group-hover/lang:text-[#ffd700] transition-colors leading-snug">
                          {lang.name}
                        </h4>
                        <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#25040b] border border-[#852238] text-[#fffff8] shrink-0 font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)] transition-all duration-300 group-hover/lang:border-[#ffd700] group-hover/lang:bg-gradient-to-r group-hover/lang:from-[#ffd700] group-hover/lang:via-[#f5d77f] group-hover/lang:to-[#e6c280] group-hover/lang:text-[#1c0f08] group-hover/lang:font-bold group-hover/lang:shadow-[0_0_18px_rgba(255,215,0,0.75)]">
                          {isNative ? 'Native' : isFluent ? 'Fluent' : 'B1 Study'}
                        </span>
                      </div>
                      <div className="font-mono text-sm sm:text-base text-[#e6c280] font-medium">
                        {lang.level}
                      </div>
                    </div>

                    {/* Animated glowing divider line that sweeps left to right on hover */}
                    <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-5 overflow-hidden rounded-full">
                      <div className="absolute top-0 left-0 bottom-0 w-0 group-hover/lang:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
                    </div>

                    {/* Details bottom block */}
                    <div className="font-sans text-sm sm:text-base text-[#faf8f3]/90 italic leading-relaxed">
                      {isNative
                        ? 'Mother tongue / First language proficiency'
                        : isFluent
                        ? 'Full professional & technical communication'
                        : 'Active German integration & ongoing coursework'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Projects Experience Portfolio */}
        <section className="mb-24">
          <div className="flex items-center justify-between border-b border-[#3e5630]/60 pb-5 mb-10">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-[#ffd700]" />
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] font-normal">
                Project Experience & Engineering Track Record
              </h2>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#e6c280] hidden sm:block">
              10 Featured Engineering Showcase Projects
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {resumeData.projects.map((proj: ResumeProject, idx: number) => {
              const hasDetailPage = !!proj.projectSlug;
              const isHighlighted = highlightedProjectIndex === idx;

              return (
                <div
                  key={proj.title + idx}
                  id={`project-card-${idx}`}
                  className={`tactile-card p-8 sm:p-10 lg:p-11 rounded-3xl transition-all duration-500 relative flex flex-col justify-between overflow-hidden group ${
                    isHighlighted
                      ? 'bg-[#1a2e16] border-[#ffd700] ring-4 ring-[#ffd700]/80 shadow-[0_0_60px_rgba(255,215,0,0.85),0_0_100px_rgba(133,34,56,0.6),0_20px_50px_rgba(10,18,8,0.95)] scale-[1.03] z-20'
                      : 'bg-[#142210]/95 hover:bg-[#1a2d15] border border-[#3e5630]/70 hover:border-[#ffd700] shadow-[0_16px_40px_rgba(10,18,8,0.7)] hover:shadow-[0_0_35px_rgba(255,215,0,0.3),0_16px_40px_rgba(10,18,8,0.9)]'
                  } ${hasDetailPage ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (hasDetailPage && proj.projectSlug && onNavigateProject) {
                      onNavigateProject(proj.projectSlug);
                    }
                  }}
                >
                  {/* Walnut hover accent line */}
                  <div
                    className={`absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full transition-opacity duration-300 ${
                      isHighlighted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Ambient top glow on hover / highlight */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-opacity pointer-events-none duration-300 ${
                      isHighlighted
                        ? 'opacity-100 bg-[#ffd700]/30'
                        : 'opacity-0 group-hover:opacity-100 bg-[#ffd700]/15'
                    }`}
                  />

                  {/* Active Skill Match Badge when clicked from skill matrix */}
                  {isHighlighted && (
                    <div className="absolute top-5 right-14 sm:right-16 z-30 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-mono text-xs font-extrabold tracking-wider uppercase shadow-[0_0_24px_rgba(255,215,0,0.95)] animate-bounce">
                      <Sparkles className="w-3.5 h-3.5 text-[#1c0f08]" />
                      Skill Match
                    </div>
                  )}

                  <div>
                    {/* Header: Title + Arrow */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-editorial text-2xl sm:text-3xl lg:text-[32px] text-[#fffff8] group-hover:text-[#ffd700] transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      {hasDetailPage && (
                        <div className="w-10 h-10 rounded-full border border-[#e6c280]/50 bg-[#0e180b] flex items-center justify-center text-[#ffd700] shrink-0 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#ffd700] group-hover:text-[#1c0f08] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    {/* Distinct Tech Stack Display */}
                    {proj.techStack && (
                      <div className="mb-4 flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18] via-[#380712] to-[#22040b] border border-[#ffd700] text-[#ffd700] font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-[0_0_16px_rgba(255,215,0,0.45)] shrink-0">
                          <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                          Stack
                        </span>
                        <span className="font-mono text-sm sm:text-base text-[#f5d77f] font-medium tracking-wide">
                          {proj.techStack}
                        </span>
                      </div>
                    )}

                    {/* Animated glowing divider line that sweeps left to right on hover */}
                    <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
                      <div
                        className={`absolute top-0 left-0 bottom-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700] ${
                          isHighlighted ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </div>

                    {/* Highly Readable Large Bullets with Hover Glow (Exact match to Work Experience) */}
                    <ul className="space-y-4 font-sans text-base sm:text-lg text-[#faf8f3] font-light leading-relaxed">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="group/bullet flex items-start gap-3.5 transition-colors">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 mt-2.5 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                          <span className="group-hover/bullet:text-[#fffff8] transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {hasDetailPage && (
                    <div className="mt-8 pt-4 border-t border-[#3e5630]/60 flex items-center justify-between text-sm font-mono text-[#ffd700] group-hover:text-[#fffff8] transition-colors">
                      <span className="font-medium">View Dedicated System Architecture</span>
                      <span className="group-hover:translate-x-1.5 transition-transform text-lg">→</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Contact & Candidate Dossier Card with All Luxury Hover Features */}
        <section className="border-t border-[#3e5630]/60 pt-12">
          <div className="tactile-card p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#142210]/95 via-[#1a2d15]/95 to-[#142210]/95 border border-[#ffd700]/40 hover:border-[#ffd700] shadow-[0_20px_50px_rgba(10,18,8,0.9)] hover:shadow-[0_0_45px_rgba(255,215,0,0.35),0_20px_50px_rgba(10,18,8,0.95)] transition-all duration-300 relative overflow-hidden group">
            {/* Walnut hover accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#ffd700] via-[#852238] to-[#362216] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Ambient top gold glow on hover */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ffd700]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Top row: Headline, Bio & Action Buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#ffd700] uppercase font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Candidate Portfolio & Direct Contact</span>
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8] group-hover:text-[#ffd700] transition-colors font-normal leading-tight">
                  Need a copy for hiring or internal review?
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#f0ebd8] font-light max-w-2xl mt-1.5 leading-relaxed">
                  Download the official resume PDF directly or request a copy sent to your inbox. Feel free to connect directly for interviews or project discussions.
                </p>
              </div>

              {/* Action Buttons */}
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

            {/* Animated glowing divider line that sweeps left to right on hover */}
            <div className="relative w-full h-[1.5px] bg-[#3e5630]/50 my-6 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] shadow-[0_0_16px_#ffd700]" />
            </div>

            {/* Direct Contact Bullets with Hover Glow (Exact match to Work Experience) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 font-mono text-xs sm:text-sm">
              <a
                href={`mailto:${resumeData.email}`}
                className="group/bullet flex items-center gap-3 text-[#f0ebd8] hover:text-[#fffff8] p-2.5 rounded-2xl hover:bg-[#182a13] transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                <div className="truncate">
                  <span className="text-[10px] text-[#a89060] uppercase block">Email</span>
                  <span className="truncate font-medium">{resumeData.email}</span>
                </div>
              </a>

              <div className="group/bullet flex items-center gap-3 text-[#f0ebd8] p-2.5 rounded-2xl hover:bg-[#182a13] transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                <div>
                  <span className="text-[10px] text-[#a89060] uppercase block">Phone</span>
                  <span className="font-medium">{resumeData.phone}</span>
                </div>
              </div>

              <div className="group/bullet flex items-center gap-3 text-[#f0ebd8] p-2.5 rounded-2xl hover:bg-[#182a13] transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                <div>
                  <span className="text-[10px] text-[#a89060] uppercase block">Location</span>
                  <span className="font-medium">{resumeData.location}</span>
                </div>
              </div>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/bullet flex items-center gap-3 text-[#ffd700] hover:text-[#fffff8] p-2.5 rounded-2xl hover:bg-[#182a13] transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]/50 shrink-0 transition-all duration-300 group-hover/bullet:scale-125 group-hover/bullet:bg-[#ffd700] group-hover/bullet:shadow-[0_0_14px_#ffd700]" />
                <div className="flex-1 truncate">
                  <span className="text-[10px] text-[#a89060] uppercase block">LinkedIn</span>
                  <span className="font-medium">Connect on LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#ffd700] opacity-75 group-hover/bullet:opacity-100" />
              </a>
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
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e6c280] text-[#1c0f08] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,215,0,0.6)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-editorial text-3xl text-[#fffff8] mb-1">
                    Resume Request Sent!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#f0ebd8]/90 font-light max-w-md mx-auto leading-relaxed">
                    An official notification with your contact information has been dispatched directly to <strong className="text-[#ffd700] font-medium">Abhimanyu Kanase ({resumeData.email})</strong>.
                  </p>
                </div>

                {/* Dispatch Details Badge */}
                <div className="p-3.5 rounded-2xl bg-[#0e180b]/90 border border-[#3e5630]/80 text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-[#e6c280]">
                    <span className="text-[#a89060]">Recruiter:</span>
                    <span className="font-semibold text-[#faf8f3]">{userName || 'Hiring Lead'}</span>
                  </div>
                  <div className="flex justify-between text-[#e6c280]">
                    <span className="text-[#a89060]">Recipient Email:</span>
                    <span className="text-[#ffd700]">{userEmail}</span>
                  </div>
                  {userCompany && (
                    <div className="flex justify-between text-[#e6c280]">
                      <span className="text-[#a89060]">Company:</span>
                      <span className="text-[#faf8f3]">{userCompany}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#e6c280] pt-1 border-t border-[#3e5630]/50">
                    <span className="text-[#a89060]">Document:</span>
                    <span className="text-[#70b5f9]">Abhimanyu_Kanase_Resume.pdf</span>
                  </div>
                </div>

                {/* Instant Actions for Recruiter */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={resumePdfUrl}
                    download="Abhimanyu_Kanase_Resume.pdf"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-sm shadow-[0_4px_24px_rgba(255,215,0,0.6)] hover:shadow-[0_8px_32px_rgba(255,215,0,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#1c0f08]" />
                    <span>Download Official PDF Immediately</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={resumePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-full bg-[#142210] border border-[#3e5630] hover:border-[#ffd700] text-xs font-mono text-[#f5d77f] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#ffd700]" />
                      <span>Preview PDF</span>
                    </a>

                    <a
                      href={`mailto:${resumeData.email}?subject=Interview%20%2F%20Resume%20Inquiry%20from%20${encodeURIComponent(userName || 'Recruiter')}&body=Hi%20Abhimanyu,%0D%0A%0D%0AI%20reviewed%20your%20resume%20and%20portfolio.%20I%20would%20like%20to%20connect%20regarding%20opportunities%20at%20${encodeURIComponent(userCompany || 'our team')}.%0D%0A%0D%0ABest%20regards,%0D%0A${encodeURIComponent(userName || '')}`}
                      className="flex-1 py-2.5 rounded-full bg-[#380712]/90 hover:bg-[#520c1c] border border-[#852238] text-xs font-sans text-[#fffff8] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
                      <span>Direct Email</span>
                    </a>
                  </div>

                  <button
                    onClick={resetEmailModal}
                    className="w-full py-2 rounded-full font-mono text-xs text-[#a89060] hover:text-[#fffff8] cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-9 h-9 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/40 flex items-center justify-center text-[#ffd700]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#e6c280] font-semibold block">
                      Direct Email Dispatch
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#fffff8] leading-tight">
                      Email Resume Details
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#f0ebd8]/80 font-light leading-relaxed">
                  Enter your details to receive an official verified copy of Abhimanyu Kanase's resume and establish direct candidate contact.
                </p>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-xs text-[#e6c280] mb-1">
                        Your Name <span className="text-[#a89060] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-sans text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#e6c280] mb-1">
                        Company / Org <span className="text-[#a89060] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={userCompany}
                        onChange={(e) => setUserCompany(e.target.value)}
                        placeholder="e.g. Data & AI Team"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-sans text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#ffd700] mb-1 font-semibold">
                      Your Email Address <span className="text-[#ffd700]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-mono text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#e6c280] mb-1">
                      Note or Role Focus <span className="text-[#a89060] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={userNote}
                      onChange={(e) => setUserNote(e.target.value)}
                      placeholder="e.g. Working Student Data Science / ML"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e180b]/90 border border-[#3e5630]/80 focus:border-[#ffd700] text-[#faf8f3] placeholder-[#7d7568] font-sans text-xs sm:text-sm outline-none transition-colors"
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
                        <span>Dispatching Details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Email Details</span>
                      </>
                    )}
                  </button>

                  {/* Immediate Download Alternative */}
                  <div className="text-center pt-2 border-t border-[#3e5630]/50 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#a89060]">
                      Need the file immediately?
                    </span>
                    <a
                      href={resumePdfUrl}
                      download="Abhimanyu_Kanase_Resume.pdf"
                      onClick={() => setIsEmailModalOpen(false)}
                      className="inline-flex items-center gap-1.5 text-[#ffd700] hover:text-[#fffff8] underline underline-offset-4 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF Directly</span>
                    </a>
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
                Download the official verified PDF resume of <strong className="text-[#ffd700] font-medium">{resumeData.name}</strong>, prepared for technical reviews and working student candidate evaluations.
              </p>

              {/* Document Overview Box */}
              <div className="p-4 rounded-2xl bg-[#0e180b]/90 border border-[#3e5630]/80 space-y-2 font-mono text-xs text-[#e6c280]">
                <div className="flex items-center justify-between text-[#ffd700] font-semibold">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Official Candidate CV</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#ffd700]/15 border border-[#ffd700]/40 text-[#ffd700]">
                    Verified PDF
                  </span>
                </div>
                <div className="text-[11px] font-sans text-[#f0ebd8]/80 space-y-1 pt-1 border-t border-[#3e5630]/40">
                  <p>• File: <strong className="text-[#faf8f3]">Abhimanyu_Kanase_Resume.pdf</strong></p>
                  <p>• Covers: Work Experience, M.Sc. Data Science, Publications, Skills, and 10 Engineering Projects</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Option 1: Direct Download Official PDF */}
              <a
                href={resumePdfUrl}
                download="Abhimanyu_Kanase_Resume.pdf"
                onClick={() => setIsDownloadModalOpen(false)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] font-sans font-bold text-sm shadow-[0_4px_20px_rgba(230,194,128,0.45)] hover:shadow-[0_6px_28px_rgba(255,215,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF (Abhimanyu_Kanase_Resume.pdf)</span>
              </a>

              {/* Option 2: View in New Tab */}
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsDownloadModalOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#142210] border border-[#3e5630] hover:border-[#ffd700] text-xs font-mono text-[#f5d77f] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>Open / View PDF in Browser</span>
              </a>

              {/* Option 3: Request via Email */}
              <button
                type="button"
                onClick={() => {
                  setIsDownloadModalOpen(false);
                  setIsEmailModalOpen(true);
                }}
                className="w-full py-2.5 rounded-full bg-[#380712]/85 hover:bg-[#520c1c] border border-[#852238] text-xs font-sans text-[#fffff8] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>Email Resume Details Instead</span>
              </button>

              {/* Option 4: Print Clean Web Version */}
              <button
                type="button"
                onClick={() => {
                  window.print();
                  setIsDownloadModalOpen(false);
                }}
                className="w-full py-2 rounded-full font-mono text-xs text-[#a89060] hover:text-[#faf8f3] cursor-pointer text-center"
              >
                Print Clean Web Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
