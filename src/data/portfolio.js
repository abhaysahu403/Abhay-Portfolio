export const personalInfo = {
  name: "Abhay Sahu",
  title: "Backend Engineer & AI Systems Builder",
  tagline: "I design scalable microservices and build real-time intelligent systems.",
  location: "Bhopal, India",
  phone: "930-282-8547",
  email: "abhaysahucse@gmail.com",
  github: "https://github.com/abhaysahu-cse",
  linkedin: "https://www.linkedin.com/in/abhay-sahu-222226232/",
  leetcode: "https://leetcode.com/u/Abhay_Sahu_Cse/",
  twitter: "https://x.com/SahuAbhay93",
  resumeUrl: "/Abhay_Sahu_Resume.pdf",
};

export const projects = [
  {
    id: "securewealthai",
    title: "SecureWealth AI",
    subtitle: "Event-Driven Financial Fraud Detection Engine",
    tags: ["AI", "Backend", "Real-time"],
    tagStyle: "blue",
    stack: ["Python", "FastAPI", "Kafka", "Redis", "PostgreSQL", "XGBoost", "Docker"],
    highlight: "Sub-30ms fraud scoring with 1.0 AUC",
    description: "A production-grade, event-driven fraud detection microservice that scores financial transactions in real-time using machine learning.",
    status: "private",
    caseStudy: {
      problem: "Traditional fraud detection systems are batch-based and introduce 5–10 minute delays in flagging suspicious transactions — too slow for real-time financial systems where fraud happens in seconds.",
      solution: "Built a fully containerized microservice architecture where every transaction streams through Kafka, gets scored by an XGBoost ML model via FastAPI, and the result is cached in Redis — all within 30ms.",
      architecture: {
        components: [
          { id: "producer", label: "Transaction\nProducer", type: "source", x: 60, y: 120 },
          { id: "kafka", label: "Apache Kafka\n(Streaming)", type: "queue", x: 220, y: 120 },
          { id: "fastapi", label: "FastAPI\nML Service", type: "service", x: 380, y: 120 },
          { id: "xgboost", label: "XGBoost\nModel", type: "ml", x: 380, y: 240 },
          { id: "redis", label: "Redis\nCache", type: "cache", x: 540, y: 80 },
          { id: "postgres", label: "PostgreSQL\nStorage", type: "db", x: 540, y: 200 },
          { id: "shap", label: "SHAP\nExplainability", type: "ml", x: 540, y: 320 },
        ],
        connections: [
          { from: "producer", to: "kafka" },
          { from: "kafka", to: "fastapi" },
          { from: "fastapi", to: "xgboost" },
          { from: "fastapi", to: "redis" },
          { from: "fastapi", to: "postgres" },
          { from: "xgboost", to: "shap" },
        ]
      },
      keyFeatures: [
        { icon: "Zap", title: "Sub-30ms Latency", desc: "ML scoring pipeline optimized with Redis caching and async FastAPI endpoints" },
        { icon: "Brain", title: "Explainable AI", desc: "SHAP values generate human-readable fraud reasons — e.g. 'Device mismatch, off-hours activity'" },
        { icon: "Shield", title: "1.0 AUC Score", desc: "XGBoost model trained on synthetic fraud patterns with 100% test coverage via Pytest" },
        { icon: "GitBranch", title: "Event-Driven", desc: "Kafka decouples ingestion from scoring, enabling horizontal scaling without code changes" },
      ],
      results: [
        "Sub-30ms end-to-end transaction scoring latency",
        "1.0 AUC on validation set with zero false-negative critical fraud cases",
        "100% test coverage: data validation, model accuracy, endpoint health, latency SLAs",
        "Fully containerized — single `docker-compose up` spins the entire stack",
      ],
      techDeep: "The system uses Kafka consumer groups for fault-tolerant message processing. XGBoost's gradient boosted trees were chosen over neural networks for their interpretability with SHAP and low-latency inference (~2ms). Redis TTL caching prevents re-scoring identical transactions within a 5-minute window."
    }
  },
  {
    id: "safesphere",
    title: "SafeSphere",
    subtitle: "AI-Powered Disaster Preparedness Platform",
    tags: ["AI", "Full Stack", "Award Winner"],
    tagStyle: "cyan",
    stack: ["Django", "JavaScript", "Gemini API", "Mapbox", "Three.js"],
    highlight: "🥇 1st Prize — Anveshna National Hackathon, Delhi",
    description: "A national award-winning AI disaster response platform built for schools in disaster-prone regions, featuring real-time safe-route guidance and AI-orchestrated safety workflows.",
    status: "hackathon",
    caseStudy: {
      problem: "Schools in disaster-prone regions have no real-time, AI-assisted system to guide students during emergencies — existing solutions are static PDFs or manual protocols that fail under panic.",
      solution: "Built SafeSphere in 48 hours: a full-stack Django platform integrating Gemini AI for context-aware guidance, Mapbox for live safe-route visualization, and Three.js for immersive 3D safety drills.",
      architecture: {
        components: [
          { id: "user", label: "School\nStaff/Students", type: "source", x: 60, y: 200 },
          { id: "django", label: "Django\nBackend", type: "service", x: 220, y: 200 },
          { id: "gemini", label: "Gemini AI\nAPI", type: "ml", x: 380, y: 120 },
          { id: "mapbox", label: "Mapbox\nRouting", type: "service", x: 380, y: 200 },
          { id: "threejs", label: "Three.js\n3D Drills", type: "frontend", x: 380, y: 280 },
          { id: "sos", label: "SOS\nAlert System", type: "queue", x: 540, y: 200 },
        ],
        connections: [
          { from: "user", to: "django" },
          { from: "django", to: "gemini" },
          { from: "django", to: "mapbox" },
          { from: "django", to: "threejs" },
          { from: "django", to: "sos" },
        ]
      },
      keyFeatures: [
        { icon: "Map", title: "Live Safe Routes", desc: "Mapbox integration with real-time hazard overlays and nearest-exit pathfinding" },
        { icon: "Bot", title: "AI Safety Guidance", desc: "Gemini API with structured prompts delivers context-aware instructions based on disaster type" },
        { icon: "Box", title: "3D Safety Drills", desc: "Three.js immersive simulations train students in evacuation procedures interactively" },
        { icon: "AlertTriangle", title: "SOS Broadcasting", desc: "One-tap SOS alerts broadcast to authorities and parents with GPS coordinates" },
      ],
      results: [
        "Won 1st Prize at Anveshna National Hackathon (Delhi) competing against 200+ teams",
        "Built end-to-end in 48-hour hackathon sprint",
        "Designed for deployment across 500+ schools in disaster-prone regions",
        "AI guidance system reduces decision time during emergencies by providing instant structured protocols",
      ],
      techDeep: "Gemini API was orchestrated with rule-based context injection — disaster type, school layout, and affected zones were passed as structured context to ensure deterministic, safe AI outputs. Three.js scenes were pre-loaded and triggered dynamically based on drill type."
    }
  },
  {
    id: "bharatstudio",
    title: "BharatStudio",
    subtitle: "AI Content Generation Platform",
    tags: ["AI", "Generative", "Full Stack"],
    tagStyle: "blue",
    stack: ["Python", "Generative AI", "Full-Stack", "Media Orchestration"],
    highlight: "Hackathon-built AI content pipeline",
    description: "A collaborative AI-powered content generation platform built under high-pressure hackathon conditions for rapid media creation and orchestration.",
    status: "hackathon",
    caseStudy: {
      problem: "Content creators in emerging markets lack access to fast, AI-assisted tools for generating localized content — the gap between idea and publishable media is too wide for individual creators.",
      solution: "BharatStudio is a streamlined web platform where creators describe content in natural language and receive AI-generated media assets — scripts, visuals, and structured content — ready for publication.",
      architecture: {
        components: [
          { id: "user", label: "Content\nCreator", type: "source", x: 60, y: 200 },
          { id: "frontend", label: "Web\nFrontend", type: "frontend", x: 220, y: 200 },
          { id: "orchestrator", label: "AI\nOrchestrator", type: "service", x: 380, y: 200 },
          { id: "genai", label: "Generative\nAI Models", type: "ml", x: 540, y: 120 },
          { id: "media", label: "Media\nPipeline", type: "queue", x: 540, y: 280 },
        ],
        connections: [
          { from: "user", to: "frontend" },
          { from: "frontend", to: "orchestrator" },
          { from: "orchestrator", to: "genai" },
          { from: "orchestrator", to: "media" },
        ]
      },
      keyFeatures: [
        { icon: "Wand2", title: "AI Content Gen", desc: "Prompt-to-content pipeline generates scripts, copy, and media briefs in seconds" },
        { icon: "Globe", title: "Localization Focus", desc: "Built specifically for Indian content creators with regional context awareness" },
        { icon: "Layers", title: "Media Orchestration", desc: "Multi-modal output pipeline combining text, structure, and media asset generation" },
        { icon: "Users", title: "Collaborative Build", desc: "Built in team hackathon sprint under extreme time pressure with full deployment" },
      ],
      results: [
        "Delivered full working product in hackathon sprint",
        "End-to-end AI content pipeline from natural language prompt to publishable output",
        "Demonstrated viability for Indian market content creation at scale",
      ],
      techDeep: "The orchestrator uses a staged prompt pipeline — first extracting intent and content type, then routing to specialized generation sub-prompts. This avoids the common pitfall of single-prompt generation which yields generic outputs."
    }
  }
];

export const skills = [
  {
    category: "Backend Systems",
    icon: "Server",
    color: "blue",
    items: [
      { name: "Spring Boot", level: 90 },
      { name: "FastAPI", level: 92 },
      { name: "Django", level: 85 },
      { name: "REST Architecture", level: 95 },
      { name: "Microservices", level: 88 },
    ]
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "cyan",
    items: [
      { name: "XGBoost", level: 88 },
      { name: "SHAP (XAI)", level: 85 },
      { name: "Gemini API", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "RAG Concepts", level: 80 },
    ]
  },
  {
    category: "Infrastructure",
    icon: "Database",
    color: "purple",
    items: [
      { name: "Apache Kafka", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Redis", level: 87 },
      { name: "PostgreSQL", level: 90 },
      { name: "Oracle Cloud (OCI)", level: 82 },
    ]
  },
  {
    category: "Languages",
    icon: "Code2",
    color: "green",
    items: [
      { name: "Python", level: 92 },
      { name: "Java (Core & Adv.)", level: 90 },
      { name: "SQL", level: 88 },
      { name: "JavaScript", level: 80 },
    ]
  },
];

export const achievements = [
  {
    icon: "Trophy",
    title: "Anveshna Hackathon",
    subtitle: "1st Prize — National Level, Delhi",
    detail: "Beat 200+ teams with SafeSphere AI platform",
    color: "gold",
  },
  {
    icon: "Medal",
    title: "DSA Champion",
    subtitle: "1st Rank — College Level",
    detail: "Data Structures & Algorithms Competition",
    color: "blue",
  },
  {
    icon: "Code2",
    title: "250+ Problems Solved",
    subtitle: "LeetCode + GeeksforGeeks",
    detail: "150+ LeetCode · 100+ GFG",
    color: "cyan",
  },
  {
    icon: "Cloud",
    title: "Oracle Cloud Certified",
    subtitle: "OCI Developer + GenAI Pro",
    detail: "2025 Professional Certifications",
    color: "red",
  },
  {
    icon: "Award",
    title: "NPTEL Elite",
    subtitle: "Java + Machine Learning",
    detail: "Elite badge — top 5% nationally",
    color: "green",
  },
  {
    icon: "Users",
    title: "Tech Community Leader",
    subtitle: "Entrepreneurship Coordinator",
    detail: "Driving technical initiatives college-wide",
    color: "purple",
  },
];

export const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "MySQL HeatWave Implementation Certified Associate",
  "NPTEL – Java Programming (Elite)",
  "NPTEL – Machine Learning",
];

export const aiChatContext = `You are Abhay Sahu's portfolio AI assistant. You help visitors learn about Abhay's work and skills.

About Abhay:
- Backend Engineer & AI Systems Builder, CSE undergraduate (2027) from Sagar Institute of Research & Technology, Bhopal
- CGPA: 7.7/10
- Specializes in: scalable microservices, real-time ML systems, event-driven architectures

Key Projects:
1. SecureWealth AI: Real-time fraud detection with FastAPI + Kafka + XGBoost. Sub-30ms latency, 1.0 AUC score, SHAP explainability
2. SafeSphere: National hackathon winner (1st prize, Anveshna, Delhi). AI disaster preparedness platform with Gemini API + Mapbox
3. BharatStudio: AI content generation platform, built in hackathon sprint

Skills: Python, Java, Spring Boot, FastAPI, Django, Docker, Kafka, Redis, PostgreSQL, XGBoost, SHAP, Gemini API
Certifications: Oracle Cloud OCI Developer Pro, OCI GenAI Pro, MySQL HeatWave, NPTEL Java (Elite), NPTEL ML
Achievements: National hackathon winner, 250+ DSA problems, college DSA champion

Contact: abhaysahucse@gmail.com
GitHub: https://github.com/abhaysahu-cse
LinkedIn: https://www.linkedin.com/in/abhay-sahu-222226232/

Keep responses concise (2-4 sentences), friendly, and technically accurate. If asked about code, say it's available upon request. Focus on system design thinking and impact.`;
