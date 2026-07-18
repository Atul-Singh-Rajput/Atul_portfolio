// Portfolio data — update with real details as needed

export const personal = {
  name: "Atul Singh",
  title: "AI/GenAI Engineer",
  tagline: "Building intelligent systems at the frontier of AI",
  description:
    "AI/GenAI Engineer with hands-on experience developing and deploying Generative AI solutions using LLMs, building end-to-end RAG pipelines, prompt engineering workflows, and AI-powered applications.",
  location: "Noida, Delhi NCR",
  email: "atulsinghmysore@gmail.com",
  phone: "+91 9482138074",
  github: "https://github.com/Atul-Singh-Rajput",
  linkedin: "https://linkedin.com/in/atul-singh-rajput",
  resume: "/resume.pdf",
  photo: "/photo.jpg",
};

export const skills = {
  "Core Languages": ["Python", "SQL", "TypeScript"],
  "GenAI & LLMs": [
    "LangChain",
    "Prompt Engineering",
    "RAG Pipelines",
    "LLM Fine-tuning",
    "Agentic AI",
    "LangGraph",
    "LlamaIndex",
  ],
  "AI APIs & Models": [
    "Azure OpenAI (GPT-4o)",
    "OpenAI API",
    "HuggingFace",
    "Groq (Llama 3.1)",
    "BAAI/bge-small-en-v1.5",
  ],
  "NLP & ML": [
    "NLP",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Embeddings",
    "Semantic Search",
    "TensorFlow",
    "Keras",
  ],
  "Vector Databases": ["ChromaDB", "FAISS", "Azure AI Search"],
  "Backend & APIs": ["FastAPI", "REST APIs", "Docker", "Git", "GitHub"],
  "Cloud & DevOps": [
    "Microsoft Azure",
    "Azure Resource Management",
    "Railway",
    "Vercel",
  ],
  Visualization: ["Power BI", "Matplotlib", "Excel"],
};

export const experience = [
  {
    id: "ltim-swe",
    role: "Software Engineer",
    company: "LTIMindtree",
    location: "Noida, India",
    period: "Oct 2025 – Present",
    type: "Full-time",
    highlights: [
      "Develop and implement enterprise-grade Generative AI solutions using LLMs (Azure OpenAI GPT-4o, open-source models via HuggingFace and Groq).",
      "Build AI-powered applications including intelligent chatbots and multi-agent workflows using LangChain and FastAPI backends.",
      "Design and optimize prompt engineering strategies to improve LLM output accuracy, relevance, and latency.",
      "Integrate AI models using APIs into end-to-end GenAI pipelines with vector databases (ChromaDB, FAISS).",
      "Preprocess and manage unstructured text data for RAG applications; evaluate and monitor model performance.",
      "Collaborate with data engineers on AI use cases; deploy scalable backend APIs on Azure cloud infrastructure.",
    ],
  },
  {
    id: "ltim-get",
    role: "Graduate Engineer Trainee",
    company: "LTIMindtree",
    location: "Noida, India",
    period: "Jul 2025 – Oct 2025",
    type: "Training",
    highlights: [
      "Completed intensive training on Generative AI, LLMs, Agentic AI, LangChain, RAG architecture, vector databases, and NLP concepts.",
      "Built intelligent AI workflows using industry-standard frameworks; gained hands-on experience with REST APIs, JSON, and cloud-based model hosting.",
    ],
  },
];

export const projects = [
  {
    id: "codebase-qa-bot",
    title: "Codebase Q&A Bot",
    description:
      "Production-grade AI-powered chatbot that answers natural language questions about any Python codebase — returns exact file names, function names, and line numbers.",
    longDescription:
      "Built AST-based chunking pipeline ensuring retrieved chunks are complete logical units (functions/classes), not arbitrary token splits. Integrated BAAI/bge-small-en-v1.5 (HuggingFace) embeddings with ChromaDB for semantic code search; LangChain RAG chain with Groq as free LLM backend. Engineered structured prompts that enforce consistent output format.",
    tech: [
      "LangChain",
      "Groq (Llama 3.1)",
      "HuggingFace Embeddings",
      "ChromaDB",
      "FastAPI",
      "React",
      "Docker",
    ],
    live: "https://codebase-qa-bot.vercel.app",
    github: "https://github.com/Atul-Singh-Rajput/codebase-qa-bot",
    featured: true,
    accent: "#7c6af7",
  },
  {
    id: "AI-SDLC-Engineer",
    title: "AI SDLC Engineer",
    description:
      "AI SDLC Engineer using a multi-agent architecture that automatically transforms natural language requirements into production-ready software projects.",
    longDescription:
      "Designed and developed an AI-powered SDLC Engineer that automates the end-to-end software development lifecycle from natural language requirements to production-ready code using a multi-agent architecture. Built specialized AI agents for requirement analysis, software architecture generation, project specification, source code generation, automated code repair, and project validation. Leveraged Python, FastAPI, LLMs, and agent orchestration frameworks to generate scalable and maintainable application structures.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Streamlit",
      "Groq LLM",
      "Pydantic"
    ],
    live: null,
    github: "https://github.com/Atul-Singh-Rajput/ai-sdlc-engineer", 
    featured: true,
    accent: "#06b6d4",
  },
  {
    id: "multi-agent-travel",
    title: "Multi-Agent Travel Planner",
    description:
      "9-agent AI system that orchestrates specialized agents (Transport, Lodging, Cultural, Food) in parallel, reducing planning time by 33%.",
    longDescription:
      "Implemented Human-in-the-Loop (HITL) approval stage between pipeline phases, demonstrating enterprise-grade control over high-stakes AI decisions. Built shared workflow state management across all agents using WorkflowContext with structured TripProfile and TravelPlan data models. Delivered fully interactive Streamlit UI with real-time agent progress monitoring and HTML/PDF itinerary export.",
    tech: [
      "Microsoft Agent Framework",
      "Azure OpenAI GPT-4o",
      "LangGraph",
      "Streamlit",
      "Python",
    ],
    live: null,
    github: null,
    featured: true,
    accent: "#06b6d4",
  },
  {
    id: "chest-cancer-detection",
    title: "Chest Cancer Detection",
    description:
      "CNN model classifying lung cancer histopathology images with 92.7% accuracy across Adenocarcinoma, Large Cell Carcinoma, and Squamous Cell Carcinoma.",
    longDescription:
      "Designed and trained a deep learning model using TensorFlow and Keras, leveraging train-validation-test data splits to improve model generalization. Performed image preprocessing and normalization on medical image datasets. Evaluated model performance using Accuracy, Confusion Matrix, and training/validation learning curves.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
    live: null,
    github: null,
    featured: true,
    accent: "#10b981",
  },

];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    icon: "azure",
  },
  {
    title: "GH-300: GitHub Copilot Certification",
    issuer: "GitHub",
    icon: "github",
  },
  {
    title: "Azure AI Engineer: Developing ML Pipelines in Microsoft Azure",
    issuer: "Pluralsight",
    icon: "azure",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    icon: "ibm",
  },
  {
    title: "Data Science Fundamentals",
    issuer: "University of California, Irvine (Coursera)",
    icon: "coursera",
  },
  {
    title: "Azure Machine Learning & MLOps: Beginner to Advance",
    issuer: "Udemy",
    icon: "udemy",
  },
];

export const education = [
  {
    degree: "MCA — Artificial Intelligence & Data Science",
    institution: "Amrita Vishwa Vidyapeetham, Mysore",
    period: "May 2025",
    score: "CGPA: 9.2 · 6th Rank",
    highlight: "6th University Rank",
  },
  {
    degree: "B.Sc (PMCs) — Gold Medalist 🥇",
    institution: "SBRR Mahajana First Grade College, Mysore",
    period: "Sept 2022",
    score: "CGPA: 9.39 · Gold Medal",
    highlight: "Gold Medal",
  },
  {
    degree: "12th Standard (PCMB)",
    institution: "DMS RIE Mysore",
    period: "May 2019",
    score: "70%",
    highlight: "",
  },
  {
    degree: "10th Standard",
    institution: "Divine Sainik School, Varanasi",
    period: "April 2017",
    score: "CGPA: 9.6",
    highlight: "",
  },
];

export const stats = [
  { value: "1+", label: "year at LTIMindtree" },
  { value: "3+", label: "Production AI Projects" },
  { value: "9.2", label: "MCA CGPA" },
  { value: "6+", label: "Certifications" },
];
