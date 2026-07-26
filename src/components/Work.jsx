import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Face Detection System",
    category: "Computer Vision · Deep Learning",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    href: "#",
    accent: "bg-retro-pink",
    summary: {
      goal: "Develop a real-time face detection system using deep learning with high accuracy and training efficiency.",
      problem: "Traditional face detection methods lack accuracy in varying lighting conditions and real-time performance.",
      solution: "Built a CNN-based system with VGG16 transfer learning, optimized using TensorFlow/Keras with backpropagation and Adam optimizer.",
      features: [
        "VGG16 transfer learning for improved accuracy",
        "Real-time webcam detection with OpenCV",
        "Data preprocessing, normalization & augmentation",
        "Accuracy & loss visualization (Matplotlib)",
      ],
      techStack: ["TensorFlow", "CNN", "VGG16", "OpenCV", "Matplotlib", "Python"],
      role: "AI / ML Developer",
      duration: "3 Weeks",
    },
  },
  {
    id: 2,
    title: "AI Chatbot with RAG — Zanzee Company",
    category: "Generative AI · Internship",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    href: "#",
    accent: "bg-retro-blue",
    summary: {
      goal: "Build a production-ready, context-aware AI chatbot for real-world enterprise business queries.",
      problem: "Generic LLM responses lacked grounding in company-specific knowledge and multi-turn context.",
      solution: "Architected a Retrieval-Augmented Generation (RAG) pipeline with LangChain, the OpenAI GPT API and a FAISS vector store, deployed as a Streamlit web app.",
      features: [
        "RAG pipeline with FAISS vector store & semantic embeddings",
        "Grounded answers from company knowledge bases",
        "Multi-turn conversational memory",
        "Deployed in a production-ready Streamlit app",
      ],
      techStack: ["LangChain", "OpenAI GPT API", "RAG", "FAISS", "Streamlit", "Python"],
      role: "AI Engineer Intern",
      duration: "Jan — Mar 2026",
    },
  },
  {
    id: 3,
    title: "Chat With PDF — GenAI Document Assistant",
    category: "Generative AI · LLM",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    href: "#",
    accent: "bg-retro-yellow",
    summary: {
      goal: "Deliver precise, context-aware question answering over any user-uploaded PDF document.",
      problem: "Reading long documents to find specific answers is slow, and raw LLMs hallucinate without source grounding.",
      solution: "Built a full RAG pipeline with PDF chunking (PyPDF2), a FAISS vector database and semantic embeddings, wrapped in an interactive Streamlit front-end.",
      features: [
        "PDF chunking & embedding with PyPDF2 + FAISS",
        "Grounded, source-accurate Q&A over documents",
        "Multi-turn conversational memory",
        "Real-time interactive Streamlit interface",
      ],
      techStack: ["Python", "LangChain", "FAISS", "RAG", "Streamlit", "PyPDF2"],
      role: "AI / ML Developer",
      duration: "Personal Project",
    },
  },
  {
    id: 4,
    title: "AI-Powered Social Media Automation",
    category: "Full-Stack · MERN + AI",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    href: "#",
    accent: "bg-retro-lime",
    summary: {
      goal: "Let users automate content creation and scheduling across multiple social platforms.",
      problem: "Manual content creation and cross-platform scheduling is repetitive and time-consuming.",
      solution: "Architected a full-stack MERN platform integrating the OpenAI GPT API for AI-driven post generation, with secure JWT auth and a responsive React dashboard.",
      features: [
        "AI post generation, captions & hashtag suggestions",
        "Secure JWT-based authentication & REST APIs",
        "Real-time post scheduling & analytics tracking",
        "Responsive React.js management dashboard",
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "OpenAI API"],
      role: "Full-Stack Developer",
      duration: "Personal Project",
    },
  },
];

export default function Work() {
  return (
    <section
      id="projects"
      className="bg-retro-soft py-24 md:py-32 px-5 md:px-10 border-y-2 border-retro-ink"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="retro-eyebrow mb-5 inline-block">{"// Featured work"}</span>
          <h2 className="retro-display text-4xl md:text-6xl leading-[1] mt-5">
            Featured <span className="retro-mark retro-mark--pink">projects</span>
          </h2>
          <p className="mt-5 text-retro-muted text-lg">
            Real-world applications built with deep learning, computer vision, and modern design.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image card */}
              <div className={`relative ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <div className={`absolute -top-3 -left-3 w-full h-full ${project.accent} border-2 border-retro-ink rounded-retro`} />
                <div className="relative bg-retro-card border-2 border-retro-ink rounded-retro overflow-hidden shadow-retro-lg">
                  <div className="flex items-center justify-between px-5 py-3 border-b-2 border-retro-ink bg-retro-yellow">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-retro-pink border-2 border-retro-ink" />
                      <span className="w-3 h-3 rounded-full bg-retro-card border-2 border-retro-ink" />
                      <span className="w-3 h-3 rounded-full bg-retro-lime border-2 border-retro-ink" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest">
                      project-{String(project.id).padStart(2, "0")}.jsx
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] md:h-[420px] object-cover"
                  />
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-11 h-11 bg-retro-card border-2 border-retro-ink  shadow-retro hover:-translate-x-[2px] hover:-translate-y-[2px] transition"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="retro-chip retro-chip--yellow">{project.category}</span>
                  <span className="retro-chip">{project.summary.duration}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  {project.title}
                </h3>

                <div className="retro-card p-5 space-y-3 text-sm">
                  <p>
                    <span className="font-display uppercase text-xs tracking-widest mr-2 bg-retro-yellow border-2 border-retro-ink px-2 py-[2px] rounded-md">
                      Goal
                    </span>
                    {project.summary.goal}
                  </p>
                  <p>
                    <span className="font-display uppercase text-xs tracking-widest mr-2 bg-retro-pink border-2 border-retro-ink px-2 py-[2px] rounded-md">
                      Problem
                    </span>
                    {project.summary.problem}
                  </p>
                  <p>
                    <span className="font-display uppercase text-xs tracking-widest mr-2 bg-retro-lime border-2 border-retro-ink px-2 py-[2px] rounded-md">
                      Solution
                    </span>
                    {project.summary.solution}
                  </p>
                </div>

                <div>
                  <p className="font-display uppercase text-xs tracking-widest mb-3">
                    Key features
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {project.summary.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-3 h-3 bg-retro-pink border-2 border-retro-ink  shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.summary.techStack.map((tech) => (
                    <span key={tech} className="retro-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-retro-pink border border-retro-ink" />
                    {project.summary.role}
                  </span>
                </div>

                <a
                  href={project.href}
                  className="retro-btn retro-btn--white w-fit mt-2"
                >
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
