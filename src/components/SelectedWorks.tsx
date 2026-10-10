import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Agentic AI Chatbot with LangGraph & RAG',
    client: 'Autonomous Systems & Generative AI',
    category: 'Multi-Agent LLM Orchestration',
    year: '2024',
    description:
      'Designed a modular GenAI agent system with LangGraph and FastAPI supporting multi-step reasoning across 1,000+ knowledge entries. Reduced context loss by ~30% with a vector embedding RAG pipeline over PostgreSQL.',
    tags: ['LangGraph', 'RAG', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    number: '02',
    title: 'Cotton Detection & Harvest Vision (YOLOv5)',
    client: 'IEEE INCET 2024 Publication',
    category: 'Computer Vision & Deep Learning',
    year: '2024',
    description:
      'Engineered an end-to-end ML pipeline on 10,000+ field images with data augmentation and feature engineering, achieving ~85% precision and 0.80+ mAP. Published in IEEE 5th INCET 2024.',
    tags: ['YOLOv5', 'Computer Vision', 'PyTorch', 'IEEE Publication'],
  },
  {
    number: '03',
    title: 'Automated Music Trend Pipeline (Airflow + dbt)',
    client: 'Data Engineering & Analytics Architecture',
    category: 'Orchestration & Dimensional Modeling',
    year: '2024',
    description:
      'Automated daily ingestion of 10,000+ records via Apache Airflow, eliminating manual export work. Reduced downstream query complexity by ~60% with 3 structured dbt models connected to Looker Studio.',
    tags: ['Apache Airflow', 'dbt', 'PostgreSQL', 'Looker Studio'],
  },
  {
    number: '04',
    title: 'Cloud Energy Finance Platform & Star Schema',
    client: 'Enterprise Cloud Intelligence',
    category: 'Azure Data Factory & Synapse',
    year: '2024',
    description:
      'Consolidated 20,000+ records into Azure Data Factory, ADLS, and Databricks. Structured a 5-table star schema in Synapse and Snowflake delivering 10+ reusable financial and energy KPIs to Power BI.',
    tags: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI', 'SQL'],
  },
  {
    number: '05',
    title: 'Music Recommendation Engine using BERT',
    client: 'NLP & Semantic Information Retrieval',
    category: 'Transformer Fine-Tuning & Text Mining',
    year: '2024',
    description:
      'Fine-tuned a BERT-large Generative AI model on 10,000+ track descriptions across 52 categories with precision/recall/F1 benchmarking and complete end-to-end NLP data preprocessing.',
    tags: ['BERT', 'NLP', 'PyTorch', 'Data Mining', 'Python'],
  },
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="works" className="py-28 px-6 sm:px-10 lg:px-16 border-t border-[#3e5630]/60 max-w-[1480px] mx-auto select-none">
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
        <p className="font-sans text-[20px] sm:text-[22px] text-[#f0ebd8] max-w-2xl font-light leading-relaxed">
          Hands-on architectural takeaways, engineering breakthroughs, and measurable outcomes from the autonomous AI systems, cloud data pipelines, and vision models I have created.
        </p>
      </div>

      {/* Projects List with Horizontal Spread & Distinctive Hover Interaction */}
      <div className="space-y-6 sm:space-y-8">
        {projects.map((proj) => (
          <div
            key={proj.number}
            className="group relative tactile-card bg-[#142210]/85 hover:bg-[#1a2d15]/95 border border-[#3e5630]/60 hover:border-[#ffd700]/70 backdrop-blur-md p-7 sm:p-10 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,18,8,0.9),0_0_35px_rgba(230,194,128,0.32)] cursor-pointer overflow-hidden before:absolute before:left-0 before:top-6 before:bottom-6 before:w-1.5 before:bg-gradient-to-b before:from-[#ffd700] before:via-[#852238] before:to-[#362216] before:rounded-r-full before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
          >
            {/* Top Bar: Number + Title + Category + Distinctive Action Button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#3e5630]/50 group-hover:border-[#e6c280]/40 pb-6 mb-6 transition-colors">
              <div className="flex items-center gap-5 sm:gap-7">
                <span className="font-mono text-lg sm:text-xl font-bold text-[#b38a3e] group-hover:text-[#ffd700] group-hover:scale-110 group-hover:drop-shadow-[0_2px_14px_rgba(255,215,0,0.85)] transition-all">
                  {proj.number}
                </span>
                <h3 className="font-editorial text-[30px] sm:text-[38px] lg:text-[44px] text-[#faf8f3] group-hover:text-[#fffff8] group-hover:drop-shadow-[0_4px_24px_rgba(230,194,128,0.45),0_8px_30px_rgba(10,18,8,0.95)] transition-all duration-300 leading-snug">
                  {proj.title}
                </h3>
              </div>

              <div className="flex items-center gap-5 self-start lg:self-auto shrink-0">
                <div className="text-left lg:text-right hidden sm:block">
                  <div className="font-mono text-[15px] sm:text-[17px] text-[#faf8f3] font-medium group-hover:text-[#ffd700] group-hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all">
                    {proj.client}
                  </div>
                  <div className="font-mono text-[13px] sm:text-[14px] text-[#d6cdbe] group-hover:text-[#f7de9c] group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all mt-0.5 flex items-center justify-end gap-1.5">
                    <span>{proj.category}</span>
                    <span className="text-[#852238]">•</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#4a0a18]/90 to-[#380712]/90 border border-[#852238]/70 text-[11px] text-[#fffff8] font-mono font-medium shadow-[0_2px_8px_rgba(56,7,18,0.5)]">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Distinctive Hover Action Button: Pops in radiant Gold with dark walnut icon */}
                <div className="w-12 h-12 rounded-full border border-[#e6c280]/40 bg-[#0e180b]/80 group-hover:bg-gradient-to-r group-hover:from-[#ffd700] group-hover:to-[#e6c280] group-hover:text-[#1c0f08] group-hover:border-[#ffd700] group-hover:scale-110 group-hover:rotate-45 group-hover:shadow-[0_0_28px_rgba(255,215,0,0.85)] flex items-center justify-center text-[#e6c280] transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Bottom Row: Full Horizontal Spread of Description + Tags */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              {/* Distinctive Animated Description Wrapper: Walnut-to-Green plaster transition triggers on hover */}
              <div className="relative group/desc max-w-5xl cursor-pointer p-4 -mx-4 rounded-2xl transition-all duration-300 overflow-hidden border border-transparent group-hover:border-[#5c3a25]/75 hover:!border-[#ffd700]/70 hover:shadow-[0_12px_32px_rgba(10,18,8,0.7),0_0_24px_rgba(77,50,33,0.45)]">
                {/* Walnut-to-Green Textured Background (Active ONLY on Hover) */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  {/* Green plaster texture base matching the background */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(20, 34, 16, 0.92)',
                      backgroundImage: "url('/green-texture.webp')",
                      backgroundRepeat: 'repeat',
                      backgroundSize: '512px 512px',
                    }}
                  />

                  {/* Walnut plaster texture overlay on the left fading into the green texture on the right */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: "url('/walnut-texture.webp')",
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

                <p className="relative z-10 font-sans text-[18px] sm:text-[20px] text-[#faf8f3] group-hover:text-[#fffff8] group-hover:drop-shadow-[0_2px_12px_rgba(230,194,128,0.35)] leading-relaxed font-light transition-all duration-300 group-hover/desc:drop-shadow-[0_2px_14px_rgba(230,194,128,0.55)]">
                  {proj.description}
                </p>
                {/* Luminous Light-Beam Sweep Line in Radiant Gold */}
                <div className="relative z-10 h-[2px] w-0 group-hover/desc:w-full bg-gradient-to-r from-[#ffd700] via-[#f7de9c] to-transparent transition-all duration-500 ease-out mt-3 rounded-full opacity-0 group-hover/desc:opacity-100 shadow-[0_0_12px_#ffd700]" />
              </div>

              {/* Distinctive Kinetic Animated Keywords / Tags that Pop in Radiant Gold */}
              <div className="flex flex-wrap gap-2.5 shrink-0">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="group/tag inline-flex items-center px-4 py-1.5 rounded-full bg-[#0e180b]/85 group-hover:bg-[#142210] border border-[#3e5630]/60 font-mono text-[14px] sm:text-[15px] text-[#faf8f3] font-medium transition-all duration-200 ease-out cursor-pointer hover:scale-110 hover:-translate-y-1.5 hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#e6c280] hover:text-[#1c0f08] hover:font-bold hover:border-[#ffd700] hover:shadow-[0_0_25px_rgba(255,215,0,0.85),0_8px_20px_rgba(10,18,8,0.7)] active:scale-95"
                  >
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
