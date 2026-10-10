import React, { useEffect } from 'react';
import {
  X,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Frosted Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#142210]/98 border border-[#e6c280]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(10,18,8,0.95)] text-[#faf8f3] overflow-hidden max-h-[92vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200 tactile-card">
        {/* Subtle Ambient Forest & Gold Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#27441d]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#e6c280]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#3e5630]/50 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[11px] font-mono tracking-wider uppercase text-[#fffff8] shadow-[0_2px_10px_rgba(56,7,18,0.5)] mb-2.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700]" />
              <span>Data & AI Working Student Candidate</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#fffff8] font-medium leading-tight">
              Abhimanyu Kanase
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#f0ebd8]/80 mt-1 font-light max-w-xl leading-relaxed">
              Data Modeling, Generative AI & Autonomous Systems. Experienced in cloud-based data models, LangGraph agent workflows, and translating technical data into business-ready insights.
            </p>

            {/* Quick Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-[#f0ebd8]/70">
              <a
                href="mailto:kanaseabhimanyu@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#ffd700] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>kanaseabhimanyu@gmail.com</span>
              </a>
              <span className="text-[#e6c280]/40">•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#f5d77f]" />
                <span>+49 155 10835844</span>
              </span>
              <span className="text-[#e6c280]/40">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e6c280]" />
                <span>Frankfurt, Germany</span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#380712]/70 border border-[#852238]/70 hover:border-[#ffd700]/70 hover:bg-[#5a1422] transition-colors text-[#fffff8] cursor-pointer ml-2"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="overflow-y-auto pr-2 mt-5 space-y-6 text-xs sm:text-sm font-sans font-light text-[#f0ebd8]/85">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#faf8f3] font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-4 h-4 text-[#ffd700]" />
              <span>Work Experience</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="tactile-card p-4 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <span className="font-semibold text-[#faf8f3] text-sm">ML and Data Engineering Intern</span>
                    <div className="text-[11px] text-[#ffd700] font-medium">Innovaters8teen • India</div>
                  </div>
                  <span className="text-[11px] text-[#e6c280]/70">10/2023 – 03/2024</span>
                </div>
                <ul className="font-sans text-xs text-[#f0ebd8]/80 mt-2.5 space-y-1.5 font-light list-disc list-inside">
                  <li>Maintained data integrity across 10,000+ labeled records by building automated categorisation and validation pipelines in Python.</li>
                  <li>Reduced manual process work by ~80% across 4+ recurring tasks by automating extraction workflows with Python and PowerShell.</li>
                  <li>Enabled continuous quality monitoring by maintaining a version-controlled codebase with CI/CD integration.</li>
                </ul>
              </div>

              <div className="tactile-card p-4 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <span className="font-semibold text-[#faf8f3] text-sm">Software Developer Intern (Python)</span>
                    <div className="text-[11px] text-[#ffd700] font-medium">Insculpt Technologies LLP • India</div>
                  </div>
                  <span className="text-[11px] text-[#e6c280]/70">02/2023 – 05/2023</span>
                </div>
                <ul className="font-sans text-xs text-[#f0ebd8]/80 mt-2.5 space-y-1.5 font-light list-disc list-inside">
                  <li>Maintained trustworthy reporting data across 50,000+ rows by cleaning and validating multi-source datasets with Python (Pandas) and SQL.</li>
                  <li>Enabled faster, more confident decisions across 3+ Power BI and Excel dashboards by translating raw data into stakeholder-ready visualisations.</li>
                  <li>Eliminated manual reporting effort by ~100% reduction in export time across 3+ recurring workflows via automated extraction scripts.</li>
                  <li>Maintained structured documentation of data workflows with consistent reproducibility via Git/GitHub.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#faf8f3] font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4 text-[#ffd700]" />
              <span>Education</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="tactile-card p-3.5 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#faf8f3]">Master of Science in Data Science</span>
                  <span className="text-[10px] text-[#ffd700] font-semibold">04/2025 – 2027</span>
                </div>
                <div className="text-[11px] text-[#e6c280]/80 mt-0.5">Hochschule Fulda (University of Applied Sciences)</div>
                <p className="font-sans text-xs text-[#f0ebd8]/70 mt-1 font-light">Germany • Expected Graduation: Late 2027</p>
              </div>

              <div className="tactile-card p-3.5 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#faf8f3]">B.Eng. in Electronics & Telecom</span>
                  <span className="text-[10px] text-[#e6c280]/70">06/2020 – 06/2024</span>
                </div>
                <div className="text-[11px] text-[#e6c280]/80 mt-0.5">PCCoE & Research</div>
                <p className="font-sans text-xs text-[#f0ebd8]/70 mt-1 font-light">India • Final Grade: 1.9 / 5.0 (German equivalent)</p>
              </div>
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#faf8f3] font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4 text-[#ffd700]" />
              <span>Peer-Reviewed Publications</span>
            </div>
            <div className="space-y-2.5 font-mono text-xs">
              <div className="tactile-card p-3.5 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#faf8f3]">Cotton Detection Using YOLOv5 for Agricultural Analysis</span>
                  <span className="text-[10px] text-[#ffd700] font-semibold">2024</span>
                </div>
                <div className="text-[11px] text-[#e6c280]/80 mt-0.5">IEEE • 5th International Conference on Emerging Technology (INCET 2024)</div>
                <p className="font-sans text-xs text-[#f0ebd8]/75 mt-1 font-light">
                  YOLOv5 ML model piloted on 10,000+ field images, achieving ~85% precision and 0.80+ mAP.
                </p>
              </div>

              <div className="tactile-card p-3.5 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#faf8f3]">Computer Vision-Based Weed Killing Rover</span>
                  <span className="text-[10px] text-[#ffd700] font-semibold">2024</span>
                </div>
                <div className="text-[11px] text-[#e6c280]/80 mt-0.5">Springer • ICICCD 2024, Lecture Notes in Networks and Systems</div>
                <p className="font-sans text-xs text-[#f0ebd8]/75 mt-1 font-light">
                  Autonomous computer vision rover for targeted agricultural intervention and yield optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#faf8f3] font-semibold uppercase tracking-wider mb-3">
              <Code2 className="w-4 h-4 text-[#ffd700]" />
              <span>Technical Skills & Arsenal</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="tactile-card p-3 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <span className="text-[#ffd700]/70 block text-[10px] uppercase font-semibold">Data Modeling & Analytics</span>
                <span className="font-medium text-[#faf8f3]/90 mt-1 block">
                  SQL, Python (Pandas, NumPy, Polars), Star/Snowflake Schemas, Power BI, Looker Studio
                </span>
              </div>
              <div className="tactile-card p-3 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <span className="text-[#ffd700]/70 block text-[10px] uppercase font-semibold">Generative AI & LLMs</span>
                <span className="font-medium text-[#faf8f3]/90 mt-1 block">
                  LangGraph, RAG Pipelines, Vector Embeddings, BERT fine-tuning, Prompt Engineering (ChatGPT, Claude)
                </span>
              </div>
              <div className="tactile-card p-3 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <span className="text-[#ffd700]/70 block text-[10px] uppercase font-semibold">Cloud & Data Platforms</span>
                <span className="font-medium text-[#faf8f3]/90 mt-1 block">
                  Azure (Data Factory, ADLS, Synapse), AWS (S3, Athena), Snowflake, Databricks, Apache Airflow, dbt
                </span>
              </div>
              <div className="tactile-card p-3 rounded-xl border border-[#3e5630]/60 bg-[#142210]/85">
                <span className="text-[#ffd700]/70 block text-[10px] uppercase font-semibold">Engineering & Languages</span>
                <span className="font-medium text-[#faf8f3]/90 mt-1 block">
                  FastAPI, Docker, Git/GitHub, CI/CD, Agile/Scrum, Jira, English (Fluent), German (B1)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="border-t border-[#3e5630]/50 pt-4 mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#f5d77f]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Available for Working Student Positions & Data/AI Roles</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                window.print();
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#f5d77f] to-[#e6c280] text-[#1c0f08] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all font-sans font-bold text-xs flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save CV</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-[#380712]/75 border border-[#852238]/70 hover:bg-[#5a1422] hover:border-[#ffd700]/60 transition-all font-sans text-xs text-[#fffff8] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
