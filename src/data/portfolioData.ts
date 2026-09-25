export interface PersonalInfo {
  name: string;
  title: string;
  role: string;
  tagline: string;
  institution: string;
  degree: string;
  cgpa: string;
  researchYears: string;
  collaborators: {
    professors: number;
    seniors: number;
    batchmates: number;
  };
  socials: {
    linkedin: string;
    github: string;
    googleScholar: string;
    orcid: string;
    email: string;
  };
  resumePdf: string;
  profilePhoto: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gokul Ram Kannan",
  title: "AI/ML Researcher & Engineer",
  role: "Undergraduate Researcher (B.Tech CSE - AI & ML)",
  tagline: "Researching intelligent systems that learn, align, and explain.",
  institution: "Vellore Institute of Technology (VIT), Chennai",
  degree: "B.Tech in Computer Science & Engineering (Spec. in AI & ML)",
  cgpa: "8.80",
  researchYears: "3+ Years",
  collaborators: {
    professors: 9,
    seniors: 4,
    batchmates: 3,
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/gokul-ram-k-277a6a308/",
    github: "https://github.com/GOKULRAM-K",
    googleScholar: "https://scholar.google.com/citations?user=zw6MtC0AAAAJ&hl=en",
    orcid: "https://orcid.org/my-orcid?orcid=0009-0008-7632-1675",
    email: "mailto:gokulram.k2023@vitchennai.ac.in",
  },
  resumePdf: "/assets/docs/Gokul Ram Kannan (Resume).pdf",
  profilePhoto: "/assets/images/profile/Profile.png",
};

export interface Publication {
  id: string;
  title: string;
  status: "PUBLISHED" | "ACCEPTED" | "UNDER_REVIEW" | "IN_DEVELOPMENT";
  type: "Journal" | "Conference" | "Book Chapter" | "Manuscript";
  year: string;
  venue: string;
  publisher?: string;
  impactFactor?: string;
  citations?: number;
  link?: string;
  citationsLink?: string;
  area: string;
  description: string;
  collaboration?: string;
  collabLogos?: { name: string; path: string }[];
  highlights?: string[];
  supervision?: string;
  isCapstone?: boolean;
}

export const publications: Publication[] = [
  // Published Papers (6)
  {
    id: "pub-01",
    title: "Ensemble deep learning model for protein secondary structure prediction using NLP metrics and explainable AI",
    status: "PUBLISHED",
    type: "Journal",
    year: "2024",
    venue: "Results in Engineering",
    publisher: "Elsevier / ScienceDirect",
    impactFactor: "9.4",
    citations: 25,
    link: "https://www.sciencedirect.com/science/article/pii/S2590123024016876",
    citationsLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=15598493744748835136&as_sdt=5",
    area: "Bioinformatics · Deep Learning · XAI · NLP",
    description: "An ensemble deep-learning architecture for protein secondary structure prediction incorporating NLP-inspired sequence metrics and gradient-based explainable AI.",
    highlights: ["IF: 9.4 (Elsevier)", "25+ Google Scholar Citations", "NLP Metrics Integration"],
  },
  {
    id: "pub-02",
    title: "Enhancing sentiment analysis of customer reviews using deep learning, data augmentation and explainable AI",
    status: "PUBLISHED",
    type: "Conference",
    year: "2024",
    venue: "4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)",
    publisher: "IEEE",
    citations: 7,
    link: "https://ieeexplore.ieee.org/abstract/document/10866623/",
    citationsLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3763317727047869893&as_sdt=5",
    area: "NLP · Sentiment Analysis · XAI · Data Augmentation",
    description: "A robust deep learning and explainability framework combining text augmentation and post-hoc interpretability for high-precision sentiment analysis on noisy customer reviews.",
    highlights: ["IEEE Xplore Indexed", "7+ Citations", "SHAP & LIME Integration"],
  },
  {
    id: "pub-03",
    title: "Innovative Feature Fusion and XAI Framework for Robust Tamil Speech Emotion Recognition",
    status: "PUBLISHED",
    type: "Conference",
    year: "2026",
    venue: "7th International Conference on Inventive Research in Computing Applications (ICIRCA)",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/11570588/",
    area: "Speech Processing · Feature Fusion · XAI · Dravidian Languages",
    description: "Introduces a novel feature fusion pipeline uniting acoustic spectrogram representations and prosodic descriptors with XAI explanations for low-resource Tamil speech emotion recognition.",
    highlights: ["IEEE Xplore Indexed", "Low-Resource Dravidian Speech", "Explainable Acoustic Models"],
  },
  {
    id: "pub-04",
    title: "Data analysis of female education in the age of COVID-19: A comprehensive review",
    status: "PUBLISHED",
    type: "Book Chapter",
    year: "2025",
    venue: "Progressive Computational Intelligence, Information Technology and Networking",
    publisher: "Google Books / Academic Press",
    citations: 1,
    link: "https://books.google.com/books?hl=en&lr=&id=mhReEQAAQBAJ&oi=fnd&pg=PA385&dq=info:pZd3aBvZu1kJ:scholar.google.com&ots=4ut-4ujJud&sig=4yVOAGINQ6rV5gIYTkxfrVV_Cug",
    citationsLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=6466000401760491429&as_sdt=5",
    area: "Data Analytics · Social Impact · Educational Data Mining",
    description: "A comprehensive analytical study investigating systemic impacts and demographic shifts in female education metrics across global datasets during pandemic disruptions.",
    highlights: ["Book Chapter", "Demographic Analytics", "Socio-Technical Research"],
  },
  {
    id: "pub-05",
    title: "Optimizing Resource Management With Edge and Network Processing for Disaster Response Using Insect Robot Swarms",
    status: "PUBLISHED",
    type: "Book Chapter",
    year: "2025",
    venue: "Exploring the Micro World of Robotics Through Insect Robots (pp. 39-60)",
    publisher: "IGI Global",
    link: "https://www.igi-global.com/viewtitle.aspx?titleid=359271",
    area: "Swarm Robotics · Edge Computing · Disaster Response",
    description: "Formulates network processing and resource allocation algorithms for swarm robotics deployed in search-and-rescue operations over constrained edge networks.",
    highlights: ["IGI Global Publication", "Swarm Intelligence", "Edge Energy Optimization"],
  },
  {
    id: "pub-06",
    title: "Optimization of Cloud based Monitoring Application in Software Engineering",
    status: "PUBLISHED",
    type: "Conference",
    year: "2024",
    venue: "3rd International Conference on Automation, Computing and Renewable Systems (ICACRS)",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/10841613/",
    area: "Cloud Systems · Software Engineering · System Optimization",
    description: "Presents performance optimization, telemetry latency reduction, and load distribution strategies for cloud-hosted software monitoring infrastructure.",
    highlights: ["IEEE Xplore Indexed", "Cloud Systems Optimization"],
  },

  // Accepted Papers (3)
  {
    id: "pub-07",
    title: "An explainable multimodal data fusion framework for compatibility reasoning in heterogeneous decision systems",
    status: "ACCEPTED",
    type: "Journal",
    year: "2026",
    venue: "Array (Accepted Sept 18, 2026)",
    publisher: "Elsevier",
    impactFactor: "5.3",
    area: "Multimodal Learning · Data Fusion · Heterogeneous Reasoning · XAI",
    description: "A framework for compatibility reasoning across non-homogeneous decision modalities, introducing derived feature spaces and interpretable score decomposition.",
    collaboration: "International Collaboration with Prof. Abdulkareem Sh. Mahdi Al-Obaidi (Taylor's University, Malaysia)",
    highlights: ["IF: 5.3 (Elsevier)", "International Collaboration (Malaysia)", "Accepted Sept 2026"],
  },
  {
    id: "pub-08",
    title: "Multi-Corpus Speech Emotion Recognition Framework with Cross-Corpus Generalization and Noise Robustness",
    status: "ACCEPTED",
    type: "Conference",
    year: "2026",
    venue: "5th International Conference on Robotics, Intelligent Automation, and Control Technologies (RIACT 2026)",
    publisher: "Partnered with Teesside University (UK) & Hochschule Bochum (Germany)",
    area: "Speech Emotion Recognition · Domain Generalization · 1D-CNN",
    description: "Harmonizes 48,648 augmented samples across RAVDESS, CREMA-D, TESS, and SAVEE with a 7.19M-parameter 1D-CNN achieving 98.03% accuracy and +5.05 pp transfer learning boost.",
    collaboration: "Partnered Conference with Teesside University (UK) & Hochschule Bochum (Germany)",
    collabLogos: [
      { name: "Teesside University (UK)", path: "/assets/images/logos/Teesside-University-logo.jpg" },
      { name: "Hochschule Bochum (Germany)", path: "/assets/images/logos/hochschule-bochum-logo.png" },
    ],
    highlights: ["RIACT 2026 Accepted", "Teesside Univ (UK) & Hochschule Bochum Partnered", "98.03% Accuracy"],
  },
  {
    id: "pub-12",
    title: "An Explainable Machine Learning Approach to Keystroke-Based User Identification",
    status: "ACCEPTED",
    type: "Conference",
    year: "2026",
    venue: "IEEE Conference (Accepted Sept 2026)",
    publisher: "IEEE",
    area: "Biometrics · Keystroke Dynamics · Cybersecurity · XAI",
    description: "Analyzes typing cadences and temporal dwell/flight times for non-intrusive continuous user authentication supported by feature importance explanations.",
    highlights: ["Accepted at IEEE Conference", "Behavioral Biometrics & Security", "Accepted Sept 2026"],
  },

  // Under Review Papers (3)
  {
    id: "pub-09",
    title: "RandFusion: A Machine Learning Framework for Cryptographic Token Randomness Evaluation",
    status: "UNDER_REVIEW",
    type: "Conference",
    year: "2026",
    venue: "IEEE Conference (Under Peer Review)",
    area: "Applied ML · Cryptography · Randomness Verification",
    description: "Proposes an ML-based statistical randomness testing pipeline for evaluating entropy, bit-distribution, and cryptographic token predictability.",
    highlights: ["Under Peer Review @ IEEE", "Cryptographic Machine Learning"],
  },
  {
    id: "pub-10",
    title: "Optimized Autonomous Lunar Landing with Experience Replay and Target Networks",
    status: "UNDER_REVIEW",
    type: "Journal",
    year: "2026",
    venue: "Scientific Reports (Nature Publishing Group - Under Review)",
    area: "Deep Reinforcement Learning · Autonomous Systems · Aerospace Control",
    description: "Reinforcement learning framework for continuous-space autonomous lunar touchdown optimization using stabilized target networks and dynamic experience prioritization.",
    highlights: ["Under Peer Review @ Nature Scientific Reports", "Deep Reinforcement Learning"],
  },
  {
    id: "pub-11",
    title: "A Hybrid LSTM–Random Forest Framework for Intelligent Stock Market Prediction with Adaptive Pricing",
    status: "UNDER_REVIEW",
    type: "Book Chapter",
    year: "2026",
    venue: "IGI Global Book Chapter (Under Review)",
    area: "Financial AI · Hybrid Ensembles · Time-Series Forecasting",
    description: "Combines temporal sequence representations from LSTMs with non-linear tree splits from Random Forests for resilient multi-horizon financial indicator prediction.",
    highlights: ["Under Peer Review @ IGI Global", "Hybrid Sequence-Tree Ensembles"],
  },

  // In-Development / Drafting Manuscripts (3)
  {
    id: "pub-13",
    title: "FBFRCSF: An Efficient Sequence Clustering Algorithm for Microbial Pattern Finding",
    status: "IN_DEVELOPMENT",
    type: "Manuscript",
    year: "2026",
    venue: "Manuscript in Preparation",
    supervision: "Supervised by Dr. Parvathi R (Centre for Advanced Data Science, VIT Chennai) & Dr. Vignesh U (SCOPE, VIT Chennai)",
    area: "Computational Biology · Microbial Pattern Clustering · Sequence Mining",
    description: "Algorithmic framework designed for fast pattern discovery and cluster isolation across massive microbial genomic sequence repositories.",
    highlights: ["Drafting Stage", "Supervised by Dr. Parvathi R & Dr. Vignesh U"],
  },
  {
    id: "pub-14",
    title: "Cognitive Grammar Learning for Subject-Independent Cognitive Workload Assessment from Physiological Signals",
    status: "IN_DEVELOPMENT",
    type: "Manuscript",
    year: "2026",
    venue: "Manuscript in Preparation",
    supervision: "Under guidance of Dr. Sridevi S (Centre for Neuroinformatics, VIT Chennai)",
    area: "Neuroinformatics · Physiological Signal Processing · Grammatical Learning",
    description: "Converts multimodal ECG and EDA streams into a 5-state symbolic vocabulary via GMM/BIC to induce formal cognitive grammars via BiGRU sequence models.",
    highlights: ["CNI Research Project", "Guided by Dr. Sridevi S"],
  },
  {
    id: "pub-15",
    title: "HEDER-Net: Hierarchical Representation Disentanglement for Speaker-Invariant Speech Emotion Recognition",
    status: "IN_DEVELOPMENT",
    type: "Manuscript",
    year: "2026",
    venue: "B.Tech Capstone Project",
    supervision: "Supervised by Dr. Vignesh U (Associate Professor, SCOPE, VIT Chennai)",
    isCapstone: true,
    area: "Disentangled Representation Learning · Speech Emotion Recognition · VAEs",
    description: "Hierarchical neural architecture decoupling emotion features from speaker traits and acoustic background noise using orthogonal latent spaces and adversarial gradient reversal.",
    highlights: ["B.Tech Capstone Project", "Supervised by Dr. Vignesh U", "Latent Disentanglement"],
  },
];

export interface Patent {
  id: string;
  number: string;
  title: string;
  inventors: string;
  status: "PUBLISHED" | "LEGAL_PROCESSING";
  date: string;
  applicationNo?: string;
  area: string;
  description: string;
  details?: string;
}

export const patents: Patent[] = [
  // 5 Published Patents
  {
    id: "pat-01",
    number: "202641002703",
    title: "EDGE-OPTIMIZED SMART IRRIGATION SYSTEM AND METHOD THEREOF",
    inventors: "Gokul Ram K, Dr. Vignesh",
    status: "PUBLISHED",
    date: "Published 30th Jan, 2026",
    applicationNo: "Indian Patent Application No. 202641002703",
    area: "Edge AI · IoT · Precision Agriculture",
    description: "An edge-optimized smart irrigation architecture incorporating distributed Raspberry Pi units, multi-channel sensing, and low-latency micro-controller execution for autonomous precision water delivery.",
  },
  {
    id: "pat-02",
    number: "202541133694",
    title: "INTELLIGENT PLANT IRRIGATION SYSTEM",
    inventors: "Dr. Vignesh, Dr. Monica, Gokul Ram K",
    status: "PUBLISHED",
    date: "Published 9th Jan, 2026",
    applicationNo: "Indian Patent Application No. 202541133694",
    area: "Intelligent Systems · IoT · Soil Hydrology",
    description: "A machine learning and rule-augmented plant irrigation system dynamically adjusting watering intervals based on real-time soil moisture gradient feedback and environmental forecasts.",
  },
  {
    id: "pat-03",
    number: "202541096667",
    title: "SYSTEM AND METHOD FOR EXECUTION OF IRRIGATION",
    inventors: "Dr. Vignesh, Dr. Monica, Gokul Ram K",
    status: "PUBLISHED",
    date: "Published 14th November, 2025",
    applicationNo: "Indian Patent Application No. 202541096667",
    area: "Automated Control Systems · Cloud Telemetry",
    description: "Methodology and execution pipeline governing automated valve sequencing, hydraulic flow balance, and failsafe cloud override logic across large-scale agricultural plots.",
  },
  {
    id: "pat-04",
    number: "202541038729",
    title: "ARTIFICIAL INTELLIGENCE (AI) BASED SMART IRRIGATION CONTROLLER SYSTEM AND METHOD",
    inventors: "Dr. Vignesh, Gokul Ram K",
    status: "PUBLISHED",
    date: "Published 16th May, 2025",
    applicationNo: "Indian Patent Application No. 202541038729",
    area: "AI Controllers · Predictive Hydrology",
    description: "AI-driven controller mechanism leveraging temporal forecasting models to continuously optimize moisture thresholds and reduce water consumption in agricultural zones.",
  },
  {
    id: "pat-05",
    number: "202441052499",
    title: "A SYSTEM AND METHOD FOR EMOTIONS READING PROVIDING PATH FOR SELF-CARE",
    inventors: "Dr. Vignesh, Gokul Ram K",
    status: "PUBLISHED",
    date: "Published 9th July, 2024",
    applicationNo: "Indian Patent Application No. 202441052499",
    area: "Affective Computing · Biosignals · Healthcare AI",
    description: "Affective computing system capturing multimodal emotional metrics to formulate personalized self-care interventions and stress alleviation routines.",
  },

  // 3 Submitted / Legal Processing Patents
  {
    id: "pat-06",
    number: "REG-2026-RAIL",
    title: "System and Method for AI-IoT-Based Automated Railway Track Fault Detection, Localization, and Real-Time Monitoring",
    inventors: "Gokul Ram K et al.",
    status: "LEGAL_PROCESSING",
    date: "Submitted July 2026 (Worked since Sep 2025)",
    area: "AI-IoT · Computer Vision · Infrastructure Safety",
    description: "An automated track monitoring system employing edge sensors, high-speed acoustic diagnostics, and GPS fault-localization algorithms for continuous railway safety inspection.",
  },
  {
    id: "pat-07",
    number: "REG-2026-GRID",
    title: "Hybrid Hierarchical IoT System for Secure Distributed Energy Control and Dynamic Phase Balancing",
    inventors: "Gokul Ram K, SIH 2025 Team",
    status: "LEGAL_PROCESSING",
    date: "Submitted July 2026 (Worked since Feb 2026)",
    area: "Smart Grid · Distributed Energy · LoRa / Edge",
    description: "Engineered during the Smart India Hackathon (SIH 2025) National Finals (Top 30 Hardware Teams nationwide for KSEB). Features LoRa edge decision nodes, Kafka data streams, and encrypted power grid phase balancing.",
  },
  {
    id: "pat-08",
    number: "REG-2026-MED",
    title: "Portable Spectacle Medication Management Device with App-Controlled Reminder and Storage System",
    inventors: "Gokul Ram K et al.",
    status: "LEGAL_PROCESSING",
    date: "Submitted September 2026 (Worked since Mar 2026)",
    area: "Wearable Health Devices · Embedded Systems · Mobile Healthcare",
    description: "A wearable smart spectacle attachment featuring micro-compartment storage, bluetooth app synchronization, and auditory-visual medication schedule compliance reminders.",
  },
];

export interface InternshipExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: "INDUSTRY" | "RESEARCH";
  logos?: { name: string; path: string }[];
  highlights: string[];
  techStack: string[];
}

export const industryExperiences: InternshipExperience[] = [
  {
    id: "ind-01",
    role: "AI Engineer Intern",
    company: "Perartral Technologies India Pvt. Ltd.",
    location: "Chennai, TN (On-site)",
    period: "May 2026 – Present",
    category: "INDUSTRY",
    logos: [
      { name: "Perartral Technologies", path: "/assets/images/logos/perartral_company_logo.jpg" }
    ],
    highlights: [
      "Engineered a Computer Vision + Multimodal LLM architectural floor-plan pipeline using EasyOCR, OpenCV, YOLO, Hough Transform, and Gemini to extract structural geometry into a validated Building Semantic Model supporting 8 engineering-agent contexts.",
      "Built the HVAC intelligence layer by modeling thermal zones, walls, geometry, and airflow topology, transforming raw floor plans into structured context for AI reasoning.",
      "Architected a schema-aware NL-to-SQL WMS assistant using FastAPI, LlamaIndex, BGE-small, and Llama-3-8B across an 11-module pipeline (intent classification, entity resolution, RAG, SQL generation & validation, session state).",
      "Engineered the React/TypeScript + Supabase/PostgreSQL stack following Repository–Service–Hook–Component design with Row-Level Security (RLS), protected routes, and signed-URL storage.",
    ],
    techStack: ["OpenCV", "YOLO", "EasyOCR", "Gemini LLM", "LlamaIndex", "Llama-3-8B", "FastAPI", "React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    id: "ind-02",
    role: "Python Developer Intern",
    company: "KRG Technologies Inc.",
    location: "Chennai, TN (On-site)",
    period: "Jun 2025 – Jul 2025",
    category: "INDUSTRY",
    logos: [
      { name: "KRG Technologies", path: "/assets/images/logos/krg_technologies_logo.jpg" }
    ],
    highlights: [
      "Engineered an AI resume-intelligence pipeline validated on 2,000+ resumes across 7+ formats, achieving 95–99% core-field extraction accuracy and 95%+ OCR precision.",
      "Architected 25-field LLM extraction using Gemini, strict JSON/schema validation, entity normalization, and Flask microservices, integrating Mammoth, Anti-Word, and Affinda for 50 ms – 1 s document parsing.",
      "Developed interactive React + Flask workflows for bulk ZIP candidate ingestion and recruiter search across 20+ attributes, reducing manual screening time by 85–90% with <200ms API latency.",
    ],
    techStack: ["Python", "Flask", "Gemini API", "React.js", "OCR", "JSON Schema", "Affinda", "Mammoth"],
  },
  {
    id: "ind-03",
    role: "Machine Learning Intern",
    company: "MEDxAI Innovations Private Limited",
    location: "Chennai, TN (Hybrid)",
    period: "May 2025 – Aug 2025 (4 mos)",
    category: "INDUSTRY",
    logos: [
      { name: "MEDxAI Innovations", path: "/assets/images/logos/medxai_logo.jpg" }
    ],
    highlights: [
      "Engineered an end-to-end pharmacogenomics AI/ML pipeline integrating PharmGKB clinical annotations, variant–drug associations, phenotype records, drug labels, and CPIC guidelines to analyze gene–variant–drug interactions.",
      "Developed a hybrid pharmacogenomic decision framework combining evidence-based knowledge retrieval with ML inference for both annotated and novel variant interactions.",
      "Built a drug-dosage intelligence engine transforming raw FDA labels and CPIC guidelines into machine-readable dosage recommendations and probabilistic risk categories.",
      "Constructed modular prediction and reporting micro-modules for phenotype classification, clinical evidence retrieval, and personalized outcome scoring.",
    ],
    techStack: ["Pharmacogenomics", "PharmGKB API", "Python", "Scikit-learn", "CPIC Guidelines", "ML Decision Engine", "REST APIs"],
  },
];

export const researchExperiences: InternshipExperience[] = [
  {
    id: "res-01",
    role: "Research Engineer Intern",
    company: "Centre for Neuroinformatics (CNI), VIT Chennai",
    location: "CNI – QNeuro – SUNY Binghamton Program",
    period: "May 2026 – Jul 2026",
    category: "RESEARCH",
    logos: [
      { name: "SUNY Binghamton", path: "/assets/images/logos/binghamon-university-logo.png" },
      { name: "VIT Chennai", path: "/assets/images/logos/vitchennai_logo.jpg" },
      { name: "QNeuro", path: "/assets/images/logos/qneuro_logo.jpg" },
    ],
    highlights: [
      "Developed a Cognitive Grammar Learning Framework converting multimodal ECG + EDA physiological signals into a 5-state symbolic vocabulary via GMM/BIC, modeling temporal transitions with a BiGRU across 637 synchronized 10-second windows and 629 validated samples.",
      "Engineered signal normalization, latent-state discovery, grammar induction, and sequence-learning pipelines, evaluating 34 participants via Leave-One-Subject-Out (LOSO) and cross-dataset transfer.",
      "Built statistical validation & explainability suites using Gradient Saliency, Integrated Gradients, Expected Calibration Error (ECE), PCA, BCa bootstrap, Shapiro–Wilk, and jackknife metrics.",
    ],
    techStack: ["ECG / EDA Biosignals", "GMM / BIC", "BiGRU", "Grammar Induction", "Integrated Gradients", "LOSO Evaluation", "PyTorch"],
  },
  {
    id: "res-02",
    role: "Research Intern",
    company: "School of Computer Science & Engineering (SCOPE), VIT Chennai",
    location: "SCOPE, VIT Chennai",
    period: "May 2025 – Jul 2025",
    category: "RESEARCH",
    logos: [
      { name: "VIT Chennai", path: "/assets/images/logos/vitchennai_logo.jpg" },
    ],
    highlights: [
      "Developed a multi-corpus Speech Emotion Recognition framework harmonizing utterances across RAVDESS, CREMA-D, TESS, and SAVEE, expanding training to 48,648 samples via noise and pitch augmentation.",
      "Engineered a lightweight 1D-CNN with 7.19M parameters over MFCC, ZCR, and RMSE feature spaces, achieving 98.03% accuracy / 0.980 Macro-F1 with Leave-One-Dataset-Out (LODO) transfer evaluation.",
      "Demonstrated cross-corpus generalization via ablation analysis: transfer learning improved performance by +5.05 pp (p < 0.001), while BatchNorm removal led to a 79.84 pp drop.",
      "Paper accepted at the 5th International Conference on Robotics, Intelligent Automation, and Control Technologies (RIACT 2026).",
    ],
    techStack: ["Speech Audio", "1D-CNN", "MFCC / ZCR / RMSE", "Data Augmentation", "LODO Cross-Corpus Transfer", "PyTorch"],
  },
];

export interface ProjectHighlight {
  id: string;
  title: string;
  role: string;
  period: string;
  organization: string;
  summary: string;
  metrics: string[];
  stack: string[];
  details: string[];
  patentConnected?: string;
  badge?: string;
}

export const featuredProjects: ProjectHighlight[] = [
  {
    id: "proj-01",
    title: "Next-Gen Irrigation: Leveraging Machine Learning for Precision Water Delivery at VIT",
    role: "Funded Field Project Lead",
    period: "Aug 2025 – Present",
    organization: "VIT Chennai (On-Site Funded Field Project)",
    summary: "Led a 14-member multidisciplinary team across 8 workstreams to deploy an end-to-end intelligent IoT & AI precision agriculture infrastructure at VIT Chennai campus.",
    metrics: [
      "14 Multidisciplinary Team Members",
      "10 Raspberry Pi IoT Deployments",
      "604,800 Observations over 90 Days",
      "4 Published Indian Patents",
    ],
    stack: ["Raspberry Pi", "MQTT", "AWS IoT Core", "AWS EC2", "AWS RDS / S3", "Flask APIs", "JWT", "CloudWatch", "PyTorch"],
    details: [
      "Engineered 3D-printed weather-proof sensor enclosures housing 7 sensing channels with 15-minute telemetry intervals over MQTT/JSON.",
      "Constructed AWS IoT Core -> EC2 -> RDS/S3 cloud ingestion pipeline secured with JWT authentication and Lambda trigger automations.",
      "Benchmarked deep-learning models for multi-day soil moisture forecasting and automated valve actuation, contributing to 4 Indian patent publications.",
    ],
    patentConnected: "Connected to 4 Published Indian Patents (202641002703, 202541133694, 202541096667, 202541038729)",
  },
  {
    id: "proj-02",
    title: "Smart Phase Balancing & Hybrid IoT Power Distribution System",
    role: "Team Lead / Hardware Architect — SIH 2025 National Finalist",
    period: "SIH 2025 (KSEB Problem Statement 25064)",
    organization: "Smart India Hackathon 2025 (Representing VIT Chennai)",
    summary: "Selected among the Top 30 Hardware Teams nationwide out of 850+ campus entries to build an edge-driven autonomous power grid phase balancing system for KSEB.",
    metrics: [
      "Top 30 Hardware Teams in India",
      "Selected from 850+ Campus Teams",
      "1 Patent Under Legal Process",
      "End-to-End Hardware Prototype",
    ],
    stack: ["Raspberry Pi", "LoRa Modules", "Apache Kafka", "End-to-End Encryption", "Edge Computing", "Smart Grid Hardware"],
    details: [
      "Designed edge Raspberry Pi + LoRa communication nodes for sub-second autonomous phase switching decisions.",
      "Implemented real-time Apache Kafka event streaming for central utility grid analytics.",
      "Enforced hardware-level end-to-end encryption for resilience against cyber-physical grid attacks. Resulted in Patent REG-2026-GRID.",
    ],
    patentConnected: "Patent under legal processing (Hybrid Hierarchical IoT System for Dynamic Phase Balancing)",
  },
  {
    id: "proj-03",
    title: "GirlScript Summer of Code (GSSoC) 2026 — Open Source Excellence",
    role: "Global Rank #80 Contributor (Top 1%)",
    period: "GSSoC 2026",
    organization: "GirlScript Foundation",
    summary: "Ranked #80 globally out of 43,587 international contributors and 2nd at VIT Chennai, merging 179 PRs across 7 production AI & developer-tool repositories.",
    metrics: [
      "Ranked #80 Globally",
      "Top 1% of 43,587 Contributors",
      "179 Merged Pull Requests",
      "7 Repositories Contributed",
    ],
    stack: ["Next.js", "Python", "FastAPI", "Node.js", "RAG Systems", "AI Agents", "SSE", "TypeScript"],
    details: [
      "Contributed to production LLM, RAG, and AI agent systems implementing AI orchestration, structured output validation, persistence, and SSE endpoints.",
      "Hardened backend APIs through auth, rate limiting, concurrency control, cache consistency, and unified error handling across server actions.",
    ],
    badge: "/assets/images/badges/gssoc-badge-gssoc_champion.png",
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  highlights: string[];
  logo?: string;
}

export const educationList: Education[] = [
  {
    institution: "Vellore Institute of Technology (VIT), Chennai",
    degree: "B.Tech in Computer Science and Engineering (Specialization in AI & ML)",
    period: "2023 — 2027",
    grade: "CGPA: 8.80 / 10.0",
    location: "Chennai, Tamil Nadu, India",
    logo: "/assets/images/logos/vitchennai_logo.jpg",
    highlights: [
      "3+ years of active undergraduate research starting from Year 1.",
      "Collaborated with 9 professors, 4 seniors, and 3 batchmates across domestic & international projects.",
      "5 Published Indian Patents + 3 Patents under Legal Processing.",
      "6 Published Papers + 3 Accepted Papers + 3 Under Review Papers + 3 In-Development Manuscripts.",
      "Funded Field Project Lead (14 members) & SIH 2025 National Hardware Finalist (Top 30 Teams).",
    ],
  },
  {
    institution: "CS Academy",
    degree: "Higher Secondary Education (Class XI - XII, Science & Engineering Stream)",
    period: "May 2021 – Feb 2023",
    grade: "94.6%",
    location: "Tamil Nadu, India",
    highlights: [
      "Conducted and led a technical Machine Learning seminar for 120 Class 12 students covering fundamental algorithms, math, and real-world applications.",
      "Delivered a technical seminar on Sorting Algorithms for 120 Class 11 students explaining time complexity and algorithmic trade-offs.",
    ],
  },
  {
    institution: "The BVB",
    degree: "Secondary Education (Class X CBSE Board)",
    period: "2019 – 2021",
    grade: "97.2%",
    location: "Tamil Nadu, India",
    highlights: [
      "Secured 100% (100/100) in Mathematics in the Class 10 CBSE Board Examination — Ranked 1st in Mathematics at the school level.",
      "Ranked among the Top 5 students overall in the Class 10 school cohort.",
      "Represented Cambodia in the United Nations Development Programme (UNDP) at the Coimbatore Model United Nations Conference, participating in diplomatic policy debate.",
    ],
  },
];

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    skills: ["Python", "C++", "Java", "SQL", "TypeScript", "JavaScript", "C", "HTML5/CSS3"],
  },
  {
    title: "AI, ML & Deep Learning",
    iconName: "BrainCircuit",
    skills: [
      "Deep Learning", "Machine Learning", "NLP", "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)", "Speech Emotion Recognition (SER)",
      "Computer Vision", "Explainable AI (XAI)", "Multimodal Data Fusion",
      "Disentangled Representation Learning", "Time-Series Forecasting",
    ],
  },
  {
    title: "Methods & Paradigms",
    iconName: "Cpu",
    skills: [
      "Self-Supervised Learning", "Transfer Learning", "Domain Generalization",
      "Ablation Analysis", "Feature Fusion", "Sequence Modeling",
      "Grammar Induction", "Temporal SMOTE", "Syntactic & Semantic Segmentation",
    ],
  },
  {
    title: "Architectures & Models",
    iconName: "Network",
    skills: [
      "1D/2D CNNs", "BiLSTM", "BiGRU", "Transformers", "Autoencoders / VAEs",
      "Graph Neural Networks (GNNs)", "Random Forests", "XGBoost", "CatBoost", "LightGBM",
    ],
  },
  {
    title: "Explainability & Statistics",
    iconName: "Eye",
    skills: [
      "SHAP", "LIME", "Integrated Gradients", "Gradient Saliency",
      "Expected Calibration Error (ECE)", "PCA", "t-SNE", "BCa Bootstrap",
      "Shapiro–Wilk", "Jackknife Evaluation", "LOSO / LODO Cross-Validation",
    ],
  },
  {
    title: "Frameworks & Systems",
    iconName: "Server",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI", "Flask",
      "LlamaIndex", "LangChain", "OpenCV", "YOLO", "EasyOCR",
      "AWS (IoT Core, EC2, RDS, S3, Lambda)", "PostgreSQL", "Supabase", "Apache Kafka", "MQTT", "React.js", "Next.js",
    ],
  },
];
