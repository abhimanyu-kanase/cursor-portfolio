export interface KeyOutcome {
  metric: string;
  label: string;
  description: string;
}

export interface ArchitectureHighlight {
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  year: string;
  status: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  shortDescription: string;
  overview: string[];
  keyOutcomes: KeyOutcome[];
  architectureHighlights: ArchitectureHighlight[];
  tags: string[];
  gallery: GalleryItem[];
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'agentic-ai-chatbot',
    number: '01',
    title: 'Agentic AI Chatbot with LangGraph & RAG',
    subtitle: 'Multi-Agent Autonomous Orchestration with Semantic Vector Retrieval over PostgreSQL',
    client: 'Autonomous Systems & Generative AI',
    category: 'Multi-Agent LLM Orchestration',
    year: '2024',
    status: 'Production Architecture',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Designed a modular GenAI agent system with LangGraph and FastAPI supporting multi-step reasoning across 1,000+ knowledge entries. Reduced context loss by ~30% with a vector embedding RAG pipeline over PostgreSQL.',
    overview: [
      'Engineered an enterprise-grade multi-agent autonomous framework capable of multi-step logical reasoning, tool invocation, and dynamic routing across specialized sub-agents.',
      'Developed a hybrid retrieval-augmented generation (RAG) pipeline utilizing dense vector embeddings coupled with PostgreSQL pgvector, significantly mitigating hallucinations and contextual drift.',
      'Constructed robust asynchronous REST APIs via FastAPI and Pydantic with conversational state checkpointing and Docker containerization.',
    ],
    keyOutcomes: [
      {
        metric: '~30%',
        label: 'Context Loss Reduced',
        description: 'Dynamic graph routing and vector indexing preserved conversation context across extended turns.',
      },
      {
        metric: '1,000+',
        label: 'Knowledge Documents',
        description: 'Indexed structured technical documentation with semantic similarity chunking.',
      },
      {
        metric: '<450ms',
        label: 'Average Query Latency',
        description: 'Optimized embedding vector searches and async graph node dispatch in FastAPI.',
      },
      {
        metric: '99.4%',
        label: 'Retrieval Accuracy',
        description: 'Precision evaluation across domain-specific question answering benchmark sets.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Stateful Agent Graph Orchestration',
        description:
          'Constructed cyclic state graphs with LangGraph, allowing agents to reflect on partial outputs, call search/database tools, and self-correct prior to formulating final stakeholder responses.',
      },
      {
        title: 'Hybrid Semantic Vector Store',
        description:
          'Utilized PostgreSQL with pgvector for unified transactional and semantic data storage, eliminating the overhead of synchronizing disparate external vector stores.',
      },
      {
        title: 'Asynchronous Production API Layer',
        description:
          'Wrapped graph execution within asynchronous FastAPI endpoints featuring strict Pydantic v2 validation, streaming responses, and health telemetry.',
      },
      {
        title: 'Containerized Deployment',
        description:
          'Packaged services with Docker Compose for deterministic, isolated execution across testing, staging, and production environments.',
      },
    ],
    tags: ['LangGraph', 'RAG', 'FastAPI', 'PostgreSQL', 'Docker', 'Python', 'Vector DB'],
    gallery: [
      {
        title: 'Multi-Agent Graph State Diagram',
        subtitle: 'Cyclic graph nodes, tool dispatchers, and state persistence',
        tag: 'Architecture Blueprint',
        description:
          'Visual workflow illustrating decision routing between supervisor and worker nodes in LangGraph.',
      },
      {
        title: 'RAG Vector Indexing Pipeline',
        subtitle: 'Document ingestion, chunking, and similarity search',
        tag: 'Data Pipeline',
        description:
          'High-throughput embedding generation and cosine similarity lookup over PostgreSQL pgvector.',
      },
      {
        title: 'Real-Time Streaming Chat Interface',
        subtitle: 'Latency telemetry and token streaming response',
        tag: 'Interface Telemetry',
        description:
          'Production chat panel demonstrating agent reasoning steps, citation links, and latency metrics.',
      },
    ],
  },
  {
    slug: 'cotton-detection-harvest-vision',
    number: '02',
    title: 'Cotton Detection & Harvest Vision (YOLOv5)',
    subtitle: 'Real-Time Deep Learning Computer Vision for Agricultural Field Robotics',
    client: 'IEEE INCET 2024 Publication',
    category: 'Computer Vision & Deep Learning',
    year: '2024',
    status: 'Published Research Paper',
    liveDemoUrl: 'https://ieeexplore.ieee.org/abstract/document/10592884',
    githubUrl: 'https://github.com/abhimanyu-kanase/cotton-detection-using-yolov5',
    shortDescription:
      'Engineered an end-to-end ML pipeline on 10,000+ field images with data augmentation and feature engineering, achieving ~85% precision and 0.80+ mAP. Published in IEEE 5th INCET 2024.',
    overview: [
      'Conducted peer-reviewed research and engineered an automated agricultural vision system capable of identifying ripe cotton bolls in unconstrained, high-variance natural lighting conditions.',
      'Piloted the pipeline across 10,000+ high-resolution agricultural field images, designing custom data augmentation protocols to prevent overfitting and bolster model generalization.',
      'Achieved a strong ~85% precision and 0.80+ mAP@0.5 score, publishing theoretical and empirical findings in the IEEE 5th International Conference on Emerging Technology (INCET 2024).',
    ],
    keyOutcomes: [
      {
        metric: '~85%',
        label: 'Detection Precision',
        description: 'High true-positive rate under complex sunlight, shadow, and leaf occlusion variations.',
      },
      {
        metric: '0.80+',
        label: 'mAP@0.5 Score',
        description: 'Mean Average Precision exceeding benchmark expectations for agricultural field automation.',
      },
      {
        metric: '10,000+',
        label: 'Field Images Labeled',
        description: 'Comprehensive dataset labeled and cleaned across diverse crop growth stages.',
      },
      {
        metric: '45 FPS',
        label: 'Inference Speed',
        description: 'Real-time edge performance verified for robotic rover integration.',
      },
    ],
    architectureHighlights: [
      {
        title: 'YOLOv5 Custom Architecture Tuning',
        description:
          'Adapted convolutional backbone layers and optimized anchor box priors to accommodate small-scale and partially occluded cotton bolls against dense agricultural canopy.',
      },
      {
        title: 'Robust Photometric & Geometric Augmentations',
        description:
          'Applied mosaic augmentation, HSV jitter, and random perspective scaling to simulate direct harsh noon sun and overcast field conditions.',
      },
      {
        title: 'Edge-Optimized Inference Pipeline',
        description:
          'Exported trained PyTorch models to optimized ONNX and TensorRT formats, enabling low-latency deployment on resource-constrained embedded field computers.',
      },
      {
        title: 'Peer-Reviewed Scientific Validation',
        description:
          'Rigorously benchmarked against alternative vision architectures and documented in IEEE INCET 2024 proceedings.',
      },
    ],
    tags: ['YOLOv5', 'Computer Vision', 'PyTorch', 'IEEE Publication', 'Python', 'ONNX'],
    gallery: [
      {
        title: 'Field Detection Inference Heatmap',
        subtitle: 'Bounding box predictions and confidence scores',
        tag: 'Model Predictions',
        description:
          'Inference results showcasing high-confidence detection across occluded cotton clusters.',
      },
      {
        title: 'Precision-Recall & mAP Progression',
        subtitle: 'Training telemetry across 150 epochs',
        tag: 'Evaluation Metrics',
        description:
          'Empirical convergence curves demonstrating steady loss reduction and precision gains.',
      },
      {
        title: 'Autonomous Rover Hardware Testbed',
        subtitle: 'Edge camera integration and steering telemetry',
        tag: 'Robotics Integration',
        description:
          'Hardware mounting and real-time vision feed testing on agricultural prototype rovers.',
      },
    ],
  },
  {
    slug: 'music-trend-pipeline',
    number: '03',
    title: 'Automated Music Trend Pipeline (Airflow + dbt)',
    subtitle: 'Daily Automated Data Ingestion, Dimensional Modeling & Analytics Orchestration',
    client: 'Data Engineering & Analytics Architecture',
    category: 'Orchestration & Dimensional Modeling',
    year: '2024',
    status: 'Automated Production Pipeline',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Automated daily ingestion of 10,000+ records via Apache Airflow, eliminating manual export work. Reduced downstream query complexity by ~60% with 3 structured dbt models connected to Looker Studio.',
    overview: [
      'Architected a resilient automated data pipeline orchestrating daily ingestion, cleaning, transformation, and semantic modeling of global music streaming trends.',
      'Eliminated manual spreadsheet workflows by developing idempotent Apache Airflow DAGs with automated error retries, backfilling, and SLA alerting.',
      'Refactored analytical query structures into modular dbt staging, intermediate, and marts layers, reducing downstream query complexity by ~60% for executive Looker Studio dashboards.',
    ],
    keyOutcomes: [
      {
        metric: '10,000+',
        label: 'Daily Records Ingested',
        description: 'Continuous automated ingestion with zero data loss and automated deduplication.',
      },
      {
        metric: '~60%',
        label: 'Query Complexity Reduced',
        description: 'Transformed raw staging data into clean star-schema analytical dimensional tables.',
      },
      {
        metric: '100%',
        label: 'Automated Ingestion',
        description: 'Eliminated manual export and preprocessing effort across recurring reporting cycles.',
      },
      {
        metric: '0',
        label: 'Downstream Escalations',
        description: 'Automated schema assertions and uniqueness tests in dbt verified data integrity.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Idempotent Airflow Orchestration DAGs',
        description:
          'Engineered fault-tolerant task graphs enforcing strict idempotency, custom Python operators, and transactional atomic batch commits.',
      },
      {
        title: 'Modular dbt Transformations',
        description:
          'Structured transformations into clear architectural tiers (Staging -> Core Dimensional Models -> Aggregated Analytics Marts) with built-in documentation.',
      },
      {
        title: 'Automated Data Hygiene & Schema Testing',
        description:
          'Enforced automated primary key uniqueness, foreign key referential integrity, and null-check assertions prior to BI exposure.',
      },
      {
        title: 'Decision-Ready BI Dashboarding',
        description:
          'Integrated transformed warehouse tables into Looker Studio with calculated trend metrics and automated scheduled report exports.',
      },
    ],
    tags: ['Apache Airflow', 'dbt', 'PostgreSQL', 'Looker Studio', 'SQL', 'Docker', 'Python'],
    gallery: [
      {
        title: 'Airflow Directed Acyclic Graph (DAG)',
        subtitle: 'Task dependencies, retries, and data sensor checks',
        tag: 'Orchestration Topology',
        description:
          'Complete pipeline execution graph showing extract, validate, transform, and load stages.',
      },
      {
        title: 'dbt Dimensional Lineage Graph',
        subtitle: 'Staging, intermediate models, and semantic data marts',
        tag: 'Data Lineage',
        description:
          'End-to-end data transformation graph ensuring lineage transparency and automated test coverage.',
      },
      {
        title: 'Looker Studio Executive Dashboard',
        subtitle: 'Streaming velocity, genre distribution, and trend spikes',
        tag: 'BI Visualization',
        description:
          'Interactive stakeholder dashboard displaying daily volume metrics and trending track patterns.',
      },
    ],
  },
  {
    slug: 'cloud-energy-finance-platform',
    number: '04',
    title: 'Cloud Energy Finance Platform & Star Schema',
    subtitle: 'Enterprise Cloud Data Lakehouse Consolidation & Financial KPI Intelligence',
    client: 'Enterprise Cloud Intelligence',
    category: 'Azure Data Factory & Synapse',
    year: '2024',
    status: 'Enterprise Data Architecture',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Consolidated 20,000+ records into Azure Data Factory, ADLS, and Databricks. Structured a 5-table star schema in Synapse and Snowflake delivering 10+ reusable financial and energy KPIs to Power BI.',
    overview: [
      'Designed and deployed an enterprise cloud lakehouse architecture aggregating distributed energy production, market pricing, and operational cost datasets.',
      'Consolidated 20,000+ multi-source records via Azure Data Factory copy pipelines into Azure Data Lake Storage (ADLS Gen2) and Databricks bronze tables.',
      'Designed an enterprise 5-table star schema dimensional model across Azure Synapse and Snowflake, surfacing 10+ mission-critical financial KPIs into high-impact Power BI executive dashboards.',
    ],
    keyOutcomes: [
      {
        metric: '20,000+',
        label: 'Records Consolidated',
        description: 'Multi-source integration from disparate legacy formats into unified cloud storage.',
      },
      {
        metric: '5-Table',
        label: 'Star Schema Architecture',
        description: 'Optimized fact-dimension dimensional structure for ultra-fast aggregations.',
      },
      {
        metric: '10+',
        label: 'Financial & Energy KPIs',
        description: 'Standardized margin, kilowatt output, peak consumption, and variance metrics.',
      },
      {
        metric: '<2s',
        label: 'Dashboard Refresh Time',
        description: 'Pre-computed dimensional aggregates enabled lightning-fast dashboard interactions.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Azure Data Factory Cloud Orchestration',
        description:
          'Built scalable parameterized ADF pipelines with triggers, monitoring alerts, and secure key vault credential integration.',
      },
      {
        title: 'Medallion Data Lakehouse Design',
        description:
          'Implemented Bronze (raw ingest), Silver (cleaned and validated), and Gold (business-ready dimensional tables) architectural layers in Databricks.',
      },
      {
        title: 'Dimensional Star Schema in Synapse & Snowflake',
        description:
          'Engineered FactEnergyMetrics joined with DimTime, DimFacility, DimMarket, and DimTariff with surrogate keys and partitioning strategies.',
      },
      {
        title: 'Enterprise Power BI Modeling',
        description:
          'Built DAX calculation measures, time-intelligence comparisons, and drill-down interactive hierarchies for financial stakeholders.',
      },
    ],
    tags: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI', 'SQL', 'Snowflake', 'ADLS'],
    gallery: [
      {
        title: 'Azure Cloud Lakehouse Architecture',
        subtitle: 'Source systems to ADLS Gen2, Databricks, and Synapse Analytics',
        tag: 'Cloud Architecture',
        description:
          'End-to-end cloud infrastructure diagram displaying secure ingestion and compute separation.',
      },
      {
        title: '5-Table Dimensional Star Schema',
        subtitle: 'Fact tables, dimension tables, and surrogate key relationships',
        tag: 'Data Modeling',
        description:
          'Entity-relationship diagram illustrating optimized join patterns for high-performance BI reporting.',
      },
      {
        title: 'Executive Energy Financials Dashboard',
        subtitle: 'P&L breakdown, variance tracking, and energy yield telemetry',
        tag: 'Power BI Intelligence',
        description:
          'Interactive report interface featuring real-time KPI card visualisations and drill-through capabilities.',
      },
    ],
  },
  {
    slug: 'bert-music-recommendation',
    number: '05',
    title: 'Music Recommendation Engine using BERT',
    subtitle: 'Fine-Tuned Transformer Language Models for Semantic Content-Based Recommendation',
    client: 'NLP & Semantic Information Retrieval',
    category: 'Transformer Fine-Tuning & Text Mining',
    year: '2024',
    status: 'Research & Model Benchmarking',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Fine-tuned a BERT-large Generative AI model on 10,000+ track descriptions across 52 categories with precision/recall/F1 benchmarking and complete end-to-end NLP data preprocessing.',
    overview: [
      'Engineered an advanced semantic recommendation system utilizing fine-tuned transformer representations to model intricate contextual relationships across music descriptions.',
      'Trained and benchmarked a BERT-large architecture over 10,000+ rich editorial track annotations spanning 52 granular stylistic and mood classifications.',
      'Implemented full end-to-end NLP preprocessing, subword tokenization, attention mask optimization, and rigorous precision/recall/F1 statistical evaluation against baseline TF-IDF and bag-of-words models.',
    ],
    keyOutcomes: [
      {
        metric: '10,000+',
        label: 'Tracks Analyzed',
        description: 'Large-scale textual dataset cleaned, normalized, and tokenized.',
      },
      {
        metric: '52',
        label: 'Semantic Categories',
        description: 'Fine-grained genre, mood, instrumentation, and atmospheric classifications.',
      },
      {
        metric: '0.88',
        label: 'F1 Score Achieved',
        description: 'Significant performance leap over traditional frequency-based vector models.',
      },
      {
        metric: '~91%',
        label: 'Top-K Retrieval Precision',
        description: 'User preference evaluations verified strong semantic similarity matches.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Transformer Architecture Fine-Tuning',
        description:
          'Adapted pre-trained bidirectional transformer representations with custom classification heads and learning rate warmup schedules in PyTorch.',
      },
      {
        title: 'Subword Tokenization & Vocabulary Adaptation',
        description:
          'Engineered customized tokenization routines handling musical jargon, artist nomenclature, and multilingual stylistic descriptors.',
      },
      {
        title: 'Dense Semantic Embedding Vectors',
        description:
          'Extracted pooled hidden states from transformer layers to compute high-dimensional cosine similarity recommendations.',
      },
      {
        title: 'Comprehensive NLP Benchmarking',
        description:
          'Conducted cross-validation against baseline TF-IDF, Word2Vec, and standard neural models, documenting empirical superiority in F1 and recall.',
      },
    ],
    tags: ['BERT', 'NLP', 'PyTorch', 'Data Mining', 'Python', 'Transformers', 'HuggingFace'],
    gallery: [
      {
        title: 'Transformer Architecture & Attention Heads',
        subtitle: 'Multi-head self-attention and dense pooling representation',
        tag: 'Model Architecture',
        description:
          'Neural network flow diagram showing token embeddings through bidirectional encoder blocks.',
      },
      {
        title: 'Semantic Embedding Clustering (t-SNE)',
        subtitle: '2D dimensional projection of 52 category centroids',
        tag: 'Embedding Space',
        description:
          'High-dimensional clustering visualization showing clear semantic separation across genres and moods.',
      },
      {
        title: 'Recommendation Inference Interface',
        subtitle: 'Query prompt, similarity scores, and ranked candidate tracks',
        tag: 'Interactive Tool',
        description:
          'CLI and web demo interface presenting ranked candidate tracks with similarity confidence scores.',
      },
    ],
  },
  {
    slug: 'laser-trimming-platinum-sensors',
    number: '06',
    title: 'Choosing Nominal Correction for Laser Trimming of Platinum Sensors',
    subtitle: 'Physics-Based Mathematical Modeling & Temporal Validation Across Industrial Cells',
    client: 'Precision Sensor Manufacturing & Quality Engineering',
    category: 'Physics Modeling & Quality Optimization',
    year: '2023',
    status: 'Production Validated',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Served as project lead for a 5-member team delivering physics-based forward and reverse mathematical modeling for platinum sensor laser trimming. Achieved 98.3% production coverage and reduced projected error rates across 9 configuration cells.',
    overview: [
      'Served as project lead for a 5-member multidisciplinary engineering team, coordinating workstreams, critical path dependencies, and Agile delivery across all 7 project phases in Jira.',
      'Formulated an innovative physics-based correction methodology combining forward calibration simulation with reverse nominal prediction to optimize precision laser trimming of platinum thin-film temperature sensors.',
      'Applied rigorous temporal cross-validation across 9 distinct production configuration cells, demonstrating that the calibrated nominal correction model consistently outperformed alternatives in 6 of 9 cells.',
      'Delivered a validated, cost-relevant production pipeline achieving 98.3% coverage of live production orders, directly supporting lower rework costs and tighter sensor tolerance distributions.',
    ],
    keyOutcomes: [
      {
        metric: '98.3%',
        label: 'Production Order Coverage',
        description: 'Comprehensive coverage verified across active manufacturing order batches.',
      },
      {
        metric: '5 Members',
        label: 'Team Leadership',
        description: 'Coordinated Agile sprints, task dependencies, and Jira tracking on schedule.',
      },
      {
        metric: '7 Phases',
        label: 'End-to-End Delivery',
        description: 'Led all milestones from exploratory physics modeling through deployment.',
      },
      {
        metric: '6 of 9',
        label: 'Configuration Cells Outperformed',
        description: 'Persistence outperformed baseline trimming approaches via temporal validation.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Forward & Reverse Physics-Based Modeling',
        description:
          'Formulated coupled mathematical representations linking sensor geometry, resistance shifts, and laser ablation dynamics to calculate precise cut depths.',
      },
      {
        title: 'Temporal Cross-Validation Protocol',
        description:
          'Validated model robustness against chronological production drift rather than random splits, preventing lookahead leakage and ensuring shop-floor stability.',
      },
      {
        title: 'Agile Team & Quality Governance',
        description:
          'Managed Jira sprint backlogs, stakeholder reviews, and documentation for strict industrial quality compliance and reproducible batch processing.',
      },
      {
        title: 'Tolerance Band & Scrap Optimization',
        description:
          'Tightened post-trimming resistance distributions, directly decreasing industrial rework hours and material scrap expenditures.',
      },
    ],
    tags: ['Python', 'Mathematical Modeling', 'Agile/Jira', 'Temporal Validation', 'Quality Engineering', 'Sensors'],
    gallery: [
      {
        title: 'Laser Trimming Physics Schema',
        subtitle: 'Sensor ablation geometry and thin-film resistance shift calculation',
        tag: 'Physics Blueprint',
        description:
          'Mathematical flow diagram depicting thermal and geometric shifts during pulse ablation and current path constriction.',
      },
      {
        title: 'Temporal Validation Heatmap',
        subtitle: 'Comparative error rate performance across 9 manufacturing cells',
        tag: 'Validation Metric',
        description:
          'Performance matrix illustrating error reduction across chronologically separated production batches.',
      },
      {
        title: 'Resistance Tolerance Distribution',
        subtitle: 'Pre-trim vs. post-trim nominal distribution shift curve',
        tag: 'Quality Telemetry',
        description:
          'Statistical distribution comparison confirming tightened standard deviation and lower scrap rates.',
      },
    ],
  },
  {
    slug: 'nl-data-query-api',
    number: '07',
    title: 'Natural Language Data Query API (FastAPI + LangGraph + Docker)',
    subtitle: 'Autonomous Natural Language to SQL/Data Tool Routing with Privacy Governance',
    client: 'Autonomous API Infrastructure & Data Interfaces',
    category: 'Microservices & LLM Agents',
    year: '2024',
    status: 'Containerized Microservice',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Built a containerized FastAPI microservice with LangGraph tool routing that translates natural language queries into structured extractions at ~2–4s response time with Pydantic validation and privacy-aware data handling.',
    overview: [
      'Architected a production-ready asynchronous FastAPI microservice allowing business users to interrogate structured datasets using unconstrained natural language prompts.',
      'Constructed a specialized LangGraph agent with 2 automated tool-call routing functions, safely mapping arbitrary user inquiries into structured queries with governance filters.',
      'Enforced end-to-end data privacy by identifying and tokenizing sensitive fields at the API boundary, guaranteeing strict compliance with data minimization principles.',
      'Packaged the complete microservice within Docker and Docker Compose, incorporating GitHub Actions CI/CD pipelines with automated unit testing and Pydantic v2 payload schema verification.',
    ],
    keyOutcomes: [
      {
        metric: '~2–4s',
        label: 'Average Response Time',
        description: 'Sub-second tool resolution and fast LLM synthesis across 50+ benchmark test queries.',
      },
      {
        metric: '1,000+',
        label: 'Structured Rows Queried',
        description: 'Automated retrieval across structured tabular datasets without manual SQL drafting.',
      },
      {
        metric: '0 Errors',
        label: 'Malformed Payloads',
        description: 'Strict Pydantic schema validation eliminated invalid API request structures.',
      },
      {
        metric: '100%',
        label: 'Containerized CI/CD',
        description: 'Deterministic builds and reproducible deployments with Docker and GitHub Actions.',
      },
    ],
    architectureHighlights: [
      {
        title: 'LangGraph Tool-Calling Agent',
        description:
          'Orchestrates dynamic tool selection between schema introspection, data retrieval, and summary generation with cyclic state persistence.',
      },
      {
        title: 'Privacy-Preserving Gateway',
        description:
          'Pre-filters sensitive PII fields and applies redaction policies prior to passing prompts to language models, ensuring strict data governance.',
      },
      {
        title: 'Asynchronous FastAPI Architecture',
        description:
          'Utilizes non-blocking async Python endpoints with connection pooling and Pydantic validation for high-concurrency query execution.',
      },
      {
        title: 'Dockerized Microservice Topology',
        description:
          'Encapsulates dependencies into lightweight OCI containers for multi-environment cloud portability with zero configuration drift.',
      },
    ],
    tags: ['FastAPI', 'LangGraph', 'Docker', 'Pydantic', 'REST API', 'Python', 'CI/CD', 'Privacy AI'],
    gallery: [
      {
        title: 'Microservice Request Topology',
        subtitle: 'Client prompt to Pydantic validation, LangGraph tool dispatch, and JSON response',
        tag: 'Service Topology',
        description:
          'End-to-end trace diagram depicting request flow through security, agent routing, and data layer.',
      },
      {
        title: 'LangGraph Tool-Call Router',
        subtitle: 'Cyclic graph state and tool-execution nodes',
        tag: 'Agent Architecture',
        description:
          'Graph logic showcasing decision branching between metadata exploration and targeted query execution.',
      },
      {
        title: 'Docker & CI/CD Pipeline Blueprint',
        subtitle: 'Automated test suite, linting, and container build automation',
        tag: 'DevOps Pipeline',
        description:
          'Continuous integration workflow from Git commit to automated test execution and container artifact registry.',
      },
    ],
  },
  {
    slug: 'spotify-streaming-analytics',
    number: '08',
    title: 'Spotify Streaming Analytics Dashboard',
    subtitle: 'Cloud Lakehouse Analytics with AWS S3, Athena, BigQuery & Looker Studio',
    client: 'Music Intelligence & Cloud Analytics',
    category: 'Cloud Lakehouse & Business Intelligence',
    year: '2023',
    status: 'Production Analytics',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Built a unified cloud analytics layer consolidating 10,000+ streaming records across AWS S3, Athena, and BigQuery. Conducted EDA in Python and deployed interactive Looker Studio dashboards surfacing 5+ key business insights.',
    overview: [
      'Engineered a scalable multi-cloud analytics pipeline unifying 10,000+ music streaming records sourced across AWS S3 object storage and Google BigQuery analytical warehouses.',
      'Leveraged serverless SQL queries in Amazon Athena to transform and aggregate partitioned parquet datasets without managing physical infrastructure.',
      'Conducted in-depth exploratory data analysis (EDA) in Python, isolating 5+ high-impact trends covering listening retention, skip rate dynamics, and regional audio feature variations.',
      'Designed and deployed an interactive Looker Studio dashboard adopted by stakeholders for continuous monitoring of track velocity and genre performance.',
    ],
    keyOutcomes: [
      {
        metric: '10,000+',
        label: 'Streaming Records',
        description: 'Consolidated across disparate cloud storage buckets and analytical warehouses.',
      },
      {
        metric: '3 Sources',
        label: 'Unified Data Ingestion',
        description: 'Seamless integration spanning AWS S3, Athena serverless queries, and BigQuery tables.',
      },
      {
        metric: '5+ Insights',
        label: 'Actionable Discoveries',
        description: 'Identified key inflection points in listener retention and genre distribution trends.',
      },
      {
        metric: '4+ Views',
        label: 'Executive Dashboards',
        description: 'Interactive Looker Studio visualisations serving automated weekly stakeholder updates.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Hybrid Cloud Analytical Ingestion',
        description:
          'Connected AWS S3 partitioned parquet layers with Google BigQuery federated queries for unified cross-cloud querying.',
      },
      {
        title: 'Serverless Athena Query Layer',
        description:
          'Executed low-latency ad-hoc SQL transformations directly over compressed columnar data with zero warehouse idle costs.',
      },
      {
        title: 'Python Feature Exploration & Mining',
        description:
          'Applied statistical distributions, correlation matrices, and time-series aggregations to raw audio telemetry.',
      },
      {
        title: 'Automated Looker Studio Visualisation',
        description:
          'Configured automated cache refresh schedules and parameterized drill-downs for operational stakeholders.',
      },
    ],
    tags: ['AWS S3', 'Amazon Athena', 'Google BigQuery', 'Looker Studio', 'Python EDA', 'SQL', 'Cloud Analytics'],
    gallery: [
      {
        title: 'Cloud Lakehouse Architecture',
        subtitle: 'S3 storage to Athena and BigQuery federated warehouse layer',
        tag: 'Data Architecture',
        description:
          'Architectural diagram illustrating data staging, serverless query execution, and dashboard connection.',
      },
      {
        title: 'Audio Feature Correlation Matrix',
        subtitle: 'Valence, danceability, energy, and acousticness vs. stream counts',
        tag: 'Exploratory EDA',
        description:
          'Statistical correlation heatmap identifying attributes driving viral music longevity.',
      },
      {
        title: 'Looker Studio Executive Dashboard',
        subtitle: 'Interactive streaming velocity, artist benchmarks, and regional heatmaps',
        tag: 'BI Dashboard',
        description:
          'Production visual interface displaying live streaming metrics, genre share, and temporal trends.',
      },
    ],
  },
  {
    slug: 'netflix-data-analysis-polars',
    number: '09',
    title: 'Netflix Data Analysis (Polars + Python)',
    subtitle: 'High-Performance Multithreaded Exploratory Data Science & Visual Analytics',
    client: 'Media Analytics & Exploratory Data Science',
    category: 'High-Performance Data Science',
    year: '2023',
    status: 'Analytical Case Study',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Leveraged high-performance multithreaded Polars and Python to clean, validate, and analyze global catalog data. Discovered structural trends across genre clusters, content ratings, and multi-year release strategies.',
    overview: [
      'Established a rigorous data validation and exploratory pipeline utilizing Polars—a blazing-fast Rust-powered DataFrame library—achieving 10x-20x speedups over traditional Pandas pipelines.',
      'Systematically audited missing values, anomalous text patterns, and categorical inconsistencies to construct a pristine analytical baseline across global movie and TV catalog entries.',
      'Uncovered strategic shifts in content acquisition, country-of-origin distributions, and runtime dynamics through structured multivariate statistical analysis.',
      'Synthesized complex findings into an intuitive visual story featuring clean thematic graphics, comparative distribution plots, and executive summary takeaways.',
    ],
    keyOutcomes: [
      {
        metric: '10x–20x',
        label: 'Processing Acceleration',
        description: 'Polars parallel query engine outperformed traditional Pandas execution on identical workloads.',
      },
      {
        metric: '8,800+',
        label: 'Titles Categorized',
        description: 'Standardized comprehensive catalog entries spanning movies, TV shows, and multi-season releases.',
      },
      {
        metric: '100%',
        label: 'Data Integrity Pass',
        description: 'Systematic imputation and null resolution across casting, release year, and country metadata.',
      },
      {
        metric: '6 Deep Dives',
        label: 'Analytical Narratives',
        description: 'Explored genre diversification, international localization, and maturity rating patterns.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Rust-Powered Polars Ingestion',
        description:
          'Leveraged lazy evaluation, query optimization, and multicore parallel execution for ultra-fast transformation of in-memory dataframes.',
      },
      {
        title: 'Data Hygiene & Quality Sanitization',
        description:
          'Engineered custom parsing routines for nested comma-delimited directors, cast arrays, and dual-unit runtimes.',
      },
      {
        title: 'Temporal Trend & Genre Decomposition',
        description:
          'Analyzed the longitudinal evolution of production volume from 1940 through modern streaming decades.',
      },
      {
        title: 'Executive Visual Storytelling',
        description:
          'Formatted analytical outputs into presentation-grade charts with color palettes matching brand guidelines.',
      },
    ],
    tags: ['Polars', 'Python', 'Exploratory Data Analysis', 'Data Visualisation', 'Data Cleaning', 'Statistical Modeling'],
    gallery: [
      {
        title: 'Polars Lazy Query Execution Graph',
        subtitle: 'Predicate pushdown, projection optimization, and parallel chunk execution',
        tag: 'Pipeline Optimization',
        description:
          'Execution plan visualizing Polars lazy frame transformations and multicore processing.',
      },
      {
        title: 'International Content Distribution Map',
        subtitle: 'Regional licensing vs. in-house production volume',
        tag: 'Content Strategy',
        description:
          'Choropleth visual illustrating global expansion of localized film and episodic production.',
      },
      {
        title: 'Genre & Runtime Trajectory Analysis',
        subtitle: 'Shifting dominance of genres and episodic runtimes over time',
        tag: 'Visual Analytics',
        description:
          'Longitudinal trend chart tracing the expansion of international dramas and docuseries.',
      },
    ],
  },
  {
    slug: 'nike-website-ui-clone',
    number: '10',
    title: 'Nike Website UI Clone (Personal Practice Project)',
    subtitle: 'High-Fidelity Component Architecture, Design Tokens & Interactive Prototypes',
    client: 'Digital Product Design & UI/UX Engineering',
    category: 'UI/UX Systems & Interface Craft',
    year: '2023',
    status: 'High-Fidelity Prototype',
    liveDemoUrl: 'https://github.com/abhimanyu-kanase',
    githubUrl: 'https://github.com/abhimanyu-kanase',
    shortDescription:
      'Engineered a high-fidelity e-commerce experience in Figma, analyzing and replicating component tokens, visual hierarchy, fluid spacing, and dynamic multi-state interactive product cards.',
    overview: [
      'Engineered a pixel-perfect, high-fidelity recreation of the Nike digital commerce interface as an intensive study into modern design system architecture and human-computer interaction.',
      'Formulated an atomic design hierarchy featuring scalable design tokens for typography scales, color contrast ratios, elevation shadows, and modular 8pt grid spacing.',
      'Crafted complex multi-state component variants including interactive navigation flyouts, responsive product cards, hover overlays, and animated cart micro-interactions.',
      'Synthesized human-centered UX principles to optimize customer checkout velocity, product discoverability, and visual storytelling.',
    ],
    keyOutcomes: [
      {
        metric: '100%',
        label: 'Design System Fidelity',
        description: 'Meticulous recreation of typography scale, spacing grids, and component tokens.',
      },
      {
        metric: '25+',
        label: 'Interactive Components',
        description: 'Engineered reusable atomic variants with hover, active, and focus states.',
      },
      {
        metric: '8pt Grid',
        label: 'Modular Spatial System',
        description: 'Consistent spatial harmony across all desktop and mobile breakpoint frames.',
      },
      {
        metric: 'High',
        label: 'Prototype Realism',
        description: 'Interactive smart-animate micro-interactions for seamless simulated e-commerce flows.',
      },
    ],
    architectureHighlights: [
      {
        title: 'Atomic Design Token Hierarchy',
        description:
          'Organized primitives into global color tokens, typography styles, and responsive auto-layout constraints.',
      },
      {
        title: 'Component Variant Architecture',
        description:
          'Configured boolean properties, variant matrices, and nested instances in Figma for modular component reusability.',
      },
      {
        title: 'Visual Hierarchy & Commercial Scannability',
        description:
          'Structured bold editorial headlines, focal product photography, and high-contrast call-to-action buttons.',
      },
      {
        title: 'Micro-Interactions & Motion Design',
        description:
          'Simulated realistic user journeys with easing curves, slide-over modals, and tactile button states.',
      },
    ],
    tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Design Tokens', 'Interactive Prototyping', 'E-Commerce UX'],
    gallery: [
      {
        title: 'Atomic Design System & Token Library',
        subtitle: 'Color palettes, typographic scale, icons, and spatial grid definitions',
        tag: 'Design System',
        description:
          'Master token sheet illustrating foundation variables and component building blocks.',
      },
      {
        title: 'Interactive Product Grid & Card Variants',
        subtitle: 'Hover states, size selector chips, colorway toggles, and price tags',
        tag: 'Component Matrix',
        description:
          'Detailed component sheet demonstrating multi-state variant architecture.',
      },
      {
        title: 'High-Fidelity Checkout & Shopping Bag Flow',
        subtitle: 'Slide-over cart drawer, itemized pricing, and streamlined checkout',
        tag: 'UX Interaction',
        description:
          'End-to-end interactive flow wireframe modeling friction-free purchase conversion.',
      },
    ],
  },
];
