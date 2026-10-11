export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface ResumePublication {
  title: string;
  venue: string;
  year: string;
}

export interface ResumeProject {
  title: string;
  techStack?: string;
  projectSlug?: string; // if matches one of the 5 curated projects
  bullets: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  experiences: ResumeExperience[];
  education: ResumeEducation[];
  publications: ResumePublication[];
  skills: {
    dataModeling: string[];
    generativeAI: string[];
    cloud: string[];
    collaboration: string[];
    softSkills: string[];
    languages: { name: string; level: string }[];
    interests: string[];
  };
  projects: ResumeProject[];
}

export const resumeData: ResumeData = {
  name: 'Abhimanyu Kanase',
  title: 'Data & AI-Focused Working Student Candidate',
  email: 'kanaseabhimanyu@gmail.com',
  phone: '+49 155 10835844',
  location: 'Frankfurt, Germany',
  linkedin: 'https://linkedin.com/in/abhimanyukanase',
  summary:
    'Experienced in building cloud-based data models and dashboards within Agile/Scrum teams, using Generative AI tools such as ChatGPT and Claude alongside custom LLM systems to translate technical work into business-ready insights. Foundational knowledge of requirements engineering and cross-functional collaboration.',
  experiences: [
    {
      role: 'ML and Data Engineering Intern',
      company: 'Innovaters8teen',
      location: 'India',
      period: '10/2023 – 03/2024',
      highlights: [
        'Maintained data integrity across 10,000+ labeled records, measured by consistent validation pass rates, by building automated categorisation and validation pipelines in Python.',
        'Reduced manual process work by ~80% across 4+ recurring tasks, measured by hands-on time saved, by automating extraction workflows with Python and PowerShell.',
        'Enabled continuous quality monitoring, measured by consistent automated test pass rates, by maintaining a version-controlled codebase with CI/CD integration.',
      ],
    },
    {
      role: 'Software Developer Intern (Python)',
      company: 'Insculpt Technologies LLP',
      location: 'India',
      period: '02/2023 – 05/2023',
      highlights: [
        'Maintained trustworthy reporting data across 50,000+ rows, measured by zero downstream data-quality escalations, by cleaning and validating multi-source datasets with Python (Pandas) and SQL.',
        'Enabled faster, more confident business decisions, measured by adoption across 3+ Power BI and Excel dashboards, by translating raw data into clear stakeholder-ready visualisations.',
        'Eliminated manual reporting effort, measured by ~100% reduction in export time across 3+ recurring workflows, by automating data-extraction and report-generation scripts.',
        'Maintained structured, organized documentation of data workflows, measured by consistent reproducibility across reporting outputs, via Git/GitHub.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Hochschule Fulda - University of Applied Sciences',
      location: 'Germany',
      period: '04/2025',
      details: 'Expected graduation: Late 2027',
    },
    {
      degree: 'Bachelor of Engineering in Electronics & Telecommunication',
      institution: 'Pimpri Chinchwad College of Engineering and Research',
      location: 'India',
      period: '06/2020 – 06/2024',
      details: 'Final Grade: 1.9/5.0 (German grading equivalent)',
    },
  ],
  publications: [
    {
      title: 'Cotton Detection Using YOLOv5 for Agricultural Analysis',
      venue: 'IEEE, 5th International Conference on Emerging Technology (INCET 2024)',
      year: '2024',
    },
    {
      title: 'Computer Vision-Based Weed Killing Rover',
      venue: 'Springer, ICICCD 2024, Lecture Notes in Networks and Systems',
      year: '2024',
    },
  ],
  skills: {
    dataModeling: [
      'SQL',
      'Python (Pandas, NumPy)',
      'Dimensional / Star-Schema Modeling',
      'Power BI',
      'Looker Studio',
    ],
    generativeAI: [
      'LangGraph',
      'RAG Pipelines',
      'BERT Fine-Tuning',
      'ChatGPT & Claude Productivity Workflows',
      'Vector Embeddings (pgvector)',
    ],
    cloud: [
      'Microsoft Azure (Data Factory, ADLS, Synapse)',
      'AWS (S3, Athena)',
      'Snowflake',
      'Databricks',
      'Docker / Containerization',
    ],
    collaboration: [
      'Jira',
      'Agile / Scrum',
      'Figma (UI/UX basics)',
      'Requirements Engineering',
      'Git / GitHub & CI/CD',
    ],
    softSkills: [
      'Analytical Thinking',
      'Statistical Problem-Solving',
      'Attention to Detail',
      'Cross-functional Collaboration',
      'Presenting Findings to Stakeholders',
      'Independent Working Style',
    ],
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'German', level: 'B1 (Currently Learning)' },
    ],
    interests: ['Photography', 'Video Editing', 'AI Architecture', 'Open Source'],
  },
  projects: [
    {
      title: 'Agentic AI Chatbot with LangGraph & RAG',
      techStack: 'LangGraph, FastAPI, PostgreSQL (pgvector), Docker',
      projectSlug: 'agentic-ai-chatbot',
      bullets: [
        'Designed a modular Generative AI agent system with LangGraph and FastAPI to support multi-step reasoning across 1,000+ knowledge entries, with persistent conversation state maintained across sessions.',
        'Reduced context loss by ~30% by building a Retrieval-Augmented Generation (RAG) pipeline using vector embeddings and PostgreSQL, improving response coherence across retrieved context.',
        'Enforced consistent data standards at the system boundary through Pydantic-validated RESTful endpoints, achieving zero malformed request errors during testing.',
        'Used ChatGPT and Claude regularly for research, debugging, and analytical workflows, combining AI-assisted problem-solving with custom-built LLM systems to accelerate development and iteration.',
      ],
    },
    {
      title: 'Automated Music Trend Pipeline (Airflow + dbt + PostgreSQL)',
      techStack: 'Apache Airflow, dbt, PostgreSQL, Looker Studio',
      projectSlug: 'automated-music-trend-pipeline',
      bullets: [
        'Replaced manual data handling entirely, measured by ~100% reduction in manual export work, by automating daily ingestion of 10,000+ records via Apache Airflow.',
        'Reduced downstream query complexity by ~60%, measured by simplified, consistent query logic, by building 3 dbt transformation models (genre_summary, artist_trends, decade_analysis).',
        'Established a self-monitoring data foundation, measured by consistent, validated pipeline outputs, by applying structured data modeling practices across ingestion and transformation stages.',
        'Enabled continuous stakeholder access to fresh data, measured by automated dashboard refresh cycles, by connecting pipeline output to Looker Studio.',
      ],
    },
    {
      title: 'Cotton Detection & Harvesting Analysis (Computer Vision)',
      techStack: 'YOLOv5, PyTorch, Computer Vision, IEEE INCET 2024',
      projectSlug: 'cotton-detection-harvest-vision',
      bullets: [
        'Prepared, validated and piloted a YOLOv5-based ML model on 10,000+ large-scale field images, applying data augmentation and statistical feature engineering techniques to improve prediction accuracy by 15–20% — contributing to automated decision-making in agricultural operations.',
        'Conducted exploratory data analysis and model evaluation over 50+ training epochs using precision, recall and F1-score as statistical metrics, achieving ~85% precision and 0.80+ mAP — presenting findings and progress throughout development.',
        'Constructed a scalable, reproducible end-to-end ML pipeline in Python from large-scale data ingestion through preprocessing, model training, validation and deployment — documenting all development decisions independently.',
      ],
    },
    {
      title: 'Energy Finance Data Engineering & Analytics Platform',
      techStack: 'Azure Data Factory, ADLS, Databricks, Synapse SQL, Power BI',
      projectSlug: 'cloud-energy-finance-platform',
      bullets: [
        'Consolidated 20,000+ energy and financial records from 4 source datasets, measured by successful automated ingestion and cleansing, by building a cloud ETL pipeline with Azure Data Factory, ADLS, and Databricks (Python/SQL).',
        'Collaborated in an Agile/Scrum team structure, measured by consistent sprint delivery across the project timeline, by participating in sprint planning, standups, and iterative development cycles.',
        'Structured a 5-table star schema (2 fact, 3 dimension tables), measured by query-ready analytical structure, by applying dimensional data modelling and loading curated data into Azure Synapse SQL Pool.',
        'Delivered 10+ reusable financial and energy KPIs, measured by production, revenue, cost, budget, and variance analysis coverage, by writing SQL queries against the Synapse and Snowflake warehouse layer.',
        'Enabled decision-ready reporting, measured by 10+ KPIs visualized for actual-vs-budget and plant performance tracking, by connecting the warehouse to interactive Power BI dashboards.',
      ],
    },
    {
      title: 'Music Recommendation Engine using BERT (NLP / Music AI)',
      techStack: 'BERT, HuggingFace, PyTorch, Python, Data Mining',
      projectSlug: 'music-recommendation-engine-bert',
      bullets: [
        'Automated genre prediction across 52 categories, measured by precision/recall/F1 benchmarking, by fine-tuning a BERT-large Generative AI model on 10,000+ track descriptions.',
        'Delivered clear, decision-ready findings, measured by consistent evaluation metrics presented across development milestones, by building structured analyses and progress presentations.',
        'Built a full NLP pipeline, measured by successful end-to-end runs from raw text to trained model, by implementing cleaning, feature extraction, and training stages.',
      ],
    },
    {
      title: 'Choosing Nominal Correction for Laser Trimming of Platinum Sensors',
      techStack: 'Agile/Jira, Python Modeling, Temporal Validation, Quality Engineering',
      bullets: [
        'Served as project lead for a 5-member team, measured by on-time delivery across all 7 project phases, by coordinating tasks, dependencies, and Agile workflows in Jira.',
        'Reduced projected production error rates, measured by validated performance across iterative test cycles, by defining a final physics-based correction method through forward and reverse modelling — directly supporting lower rework costs and improved product quality.',
        'Selected the most reliable model-selection approach across 9 configuration cells, measured by persistence outperforming alternatives in 6 of 9 cells, by applying temporal validation.',
        'Delivered a reproducible, cost-relevant production pipeline, measured by 98.3% coverage of production orders, by streamlining Agile collaboration across data, modelling, and deployment workstreams.',
      ],
    },
    {
      title: 'Natural Language Data Query API (FastAPI Microservice + LangGraph + Docker)',
      techStack: 'FastAPI, LangGraph, Docker, Pydantic, REST API',
      bullets: [
        'Built a FastAPI microservice with Pydantic-validated endpoints processing 50+ test queries at ~2–4 second average response time, automating natural language data extraction from a 1,000+ row structured dataset.',
        'Implemented a LangGraph agent with 2 automated tool-call routing functions, replacing manual query handling with a fully automated, governance-aware data retrieval workflow.',
        'Containerised the full application using Docker and docker-compose, enabling reproducible deployment and consistent environment management across development and production.',
        'Incorporated privacy-aware data handling practices throughout API design, ensuring sensitive data fields were correctly identified, categorised, and handled in line with data protection principles.',
        'Maintained full codebase under Git/GitHub with CI/CD integration, supporting automated validation checks and continuous compliance across all pipeline components.',
      ],
    },
    {
      title: 'Spotify Streaming Analytics Dashboard',
      techStack: 'AWS S3, Athena, BigQuery, Looker Studio, Python EDA',
      bullets: [
        'Built a unified analytics layer for business decision-making, measured by successful consolidation of 10,000+ records across 3 sources, by integrating AWS S3, Athena, and BigQuery.',
        'Surfaced actionable business insights, measured by 5+ documented findings on audience and genre trends, by conducting structured EDA in Python.',
        'Delivered stakeholder-ready reporting, measured by adoption of 4+ dashboard visualisations, by developing and maintaining a Looker Studio dashboard.',
      ],
    },
    {
      title: 'Netflix Data Analysis (Polars + Python)',
      techStack: 'Polars, Python, Exploratory Data Analysis, Data Visualisation',
      bullets: [
        'Established a reliable analytical foundation by cleaning and validating the dataset, identifying and resolving missing values and data quality issues with Polars and Python.',
        'Applied structured data science analysis techniques to identify actionable content trends across genre distribution, content ratings, and release-year data.',
        'Translated raw data into an accessible analytical narrative through a set of visualisations that clearly surfaced key findings and insights.',
        'Maintained a rigorous, quality-driven analytical process by applying consistent methodology from data ingestion through final output, with a detail-oriented focus on reliable results.',
      ],
    },
    {
      title: 'Nike Website UI Clone (Personal Practice Project)',
      techStack: 'Figma, High-Fidelity UI/UX, Design Systems, Component Hierarchy',
      bullets: [
        'Recreated the Nike website interface in Figma as a personal UI/UX practice project by analyzing and replicating its component structure, spacing, visual hierarchy, and page layout for a high-fidelity design.',
      ],
    },
  ],
};
