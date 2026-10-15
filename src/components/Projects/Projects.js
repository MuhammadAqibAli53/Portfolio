import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



export const PROJECTS = [
  {
    title: "Student RAG System",
    slug: "student-rag-system",
    imgPath: "/project-covers/student-rag-system.webp",
    description: "A document-grounded question-answering prototype with PDF/TXT extraction, overlapping text chunks, MiniLM embeddings, and FAISS retrieval.",
    tags: ["GenAI / RAG", "Document Intelligence"],
    stack: ["Python", "FAISS", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/student-rag-system",
    featured: true,
    status: "Prototype",
  },
  {
    title: "AI Agent Development",
    slug: "ai-agent-development",
    imgPath: "/project-covers/ai-agent-development.webp",
    description: "A collection of tool-using agents and multi-agent research workflows, including internship skill matching, web search, citations, and critique.",
    tags: ["AI Agents", "Automation"],
    stack: ["Python", "LangChain", "Streamlit"],
    ghLink: "https://github.com/MuhammadAqibAli53/Agent_development",
    featured: true,
    status: "Educational projects",
  },
  {
    title: "TaskMaster — Offline-first Task Manager",
    slug: "taskmaster",
    imgPath: "/project-covers/taskmaster.webp",
    description: "An interactive Kanban and list-view task manager using IndexedDB, Web Workers, and locally queued changes; server synchronization is simulated.",
    tags: ["Web Development", "JavaScript"],
    stack: ["JavaScript", "IndexedDB", "HTML/CSS"],
    ghLink: "https://github.com/MuhammadAqibAli53/Task-Manager-Project",
    featured: true,
    status: "Prototype",
  },
  {
    title: "Potato Leaf Disease Classification",
    slug: "potato-leaf-classification",
    description: "A TensorFlow/Keras inference interface classifying potato leaves as Early Blight, Late Blight, or Healthy using a saved model and Gradio.",
    tags: ["AI / ML", "Computer Vision"],
    stack: ["Python", "TensorFlow", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/Potato_Disease_classification",
    imgPath: "/project-covers/potato-disease.webp",
    featured: true,
    status: "Prototype",
  },
  {
    title: "Tourist Guide Bot",
    slug: "tourist-guide-bot",
    imgPath: "/project-covers/tourist-guide.webp",
    description: "Multilingual tourism assistant prototype combining retrieval, translation, optional LLM providers, and speech-related components.",
    tags: ["GenAI / RAG", "NLP"],
    stack: ["Python", "FAISS", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/Tourist_Guide_Bot",
    featured: true,
    status: "Prototype",
  },
  {
    title: "Parkinson's Disease Classification Research",
    slug: "parkinsons-classification-research",
    description: "Medical-imaging model comparison and experimentation. View the associated Kaggle notebook for implementation and reported results.",
    tags: ["Research", "AI / ML"],
    stack: ["Python", "TensorFlow"],
    ghLink: "https://www.kaggle.com/code/muhammadaqibali/ppmi-pd-classification-ml-dl-transformer",
    imgPath: "/project-covers/parkinsons-research.webp",
    featured: true,
    status: "Research",
  },
  {
    title: "Developer Portfolio",
    slug: "developer-portfolio",
    imgPath: "/project-covers/developer-portfolio.webp",
    description: "React website with component-based pages, routing, responsive Bootstrap layouts, and an engineering project showcase.",
    tags: ["Web Development", "React"],
    stack: ["React", "JavaScript", "Bootstrap"],
    ghLink: "https://github.com/MuhammadAqibAli53/Portfolio",
    status: "Active",
  },
  {
    title: "Web Development Exercises",
    slug: "web-development-exercises",
    imgPath: "/project-covers/web-development-exercises.webp",
    description: "A collection of website exercises covering foundational HTML, CSS, responsive layouts, and Bootstrap.",
    tags: ["Web Development", "Coursework"],
    stack: ["HTML/CSS", "Bootstrap"],
    ghLink: "https://github.com/MuhammadAqibAli53/web_development_tasks",
    status: "Coursework",
  },
  {
    title: "CS Department Portal",
    slug: "cs-department-portal",
    imgPath: "/project-covers/cs-department-portal.webp",
    description: "A multi-page computer science department website with HTML pages, styling, and static assets.",
    tags: ["Web Development", "Frontend"],
    stack: ["HTML/CSS", "JavaScript"],
    ghLink: "https://github.com/MuhammadAqibAli53/cs-dept-portal",
    status: "Prototype",
  },
  {
    title: "C++ Programming Exercises",
    slug: "c-programming-exercises",
    imgPath: "/project-covers/cpp-exercises.webp",
    description: "Programming exercises including a CGPA calculator and login examples.",
    tags: ["Software Engineering", "Coursework"],
    stack: ["C++"],
    ghLink: "https://github.com/MuhammadAqibAli53/codealpha_tasks",
    status: "Coursework",
  },
  {
    title: "Instant Prompt",
    slug: "instant-prompt",
    imgPath: "/project-covers/instant-prompt.webp",
    description: "A React/TypeScript prompt template builder demonstrating UI state, structured prompts, and simulated model responses (no live AI backend).",
    tags: ["Web Development", "GenAI / RAG"],
    stack: ["React", "TypeScript"],
    ghLink: "https://github.com/MuhammadAqibAli53/instant-prompt",
    status: "UI prototype",
  },
  {
    title: "OurDesk Server",
    slug: "ourdesk-server",
    imgPath: "/project-covers/ourdesk-server.webp",
    description: "A .NET server and shared protocol repository for a remote-desktop research/development project.",
    tags: ["Software Engineering", "Backend"],
    stack: [".NET", "C#"],
    status: "Private repository",
  },
  {
    title: "NeuroNest VR",
    slug: "neuronest-vr",
    imgPath: "/project-covers/neuronest-vr.webp",
    description: "Unity-based research prototype exploring interactive activities and clinician-supervised session workflows.",
    tags: ["Research", "VR"],
    stack: ["Unity", "C#"],
    status: "Private FYP prototype",
  },
  {
    title: "Green Heaven",
    slug: "green-heaven",
    imgPath: "/project-covers/green-heaven.webp",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Virtual Try-On",
    slug: "virtual-try-on",
    imgPath: "/project-covers/virtual-try-on.webp",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Voice Emotion",
    slug: "voice-emotion",
    imgPath: "/project-covers/voice-emotion.webp",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "UI Code Generator",
    slug: "ui-code-generator",
    imgPath: "/project-covers/ui-code-generator.webp",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Career Advisor",
    slug: "career-advisor",
    imgPath: "/project-covers/career-advisor.webp",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Vehicular Trust Research",
    slug: "vehicular-trust-research",
    imgPath: "/project-covers/vehicular-trust-research.webp",
    description: "Research project listed in my CV. Methodology, implementation, and evaluation details require additional verification.",
    tags: ["Research", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Gradio AI Suite",
    slug: "gradio-ai-suite",
    imgPath: "/project-covers/gradio-ai-suite.webp",
    description: "Application collection listed in my CV. Public implementation details have not been independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "E-Commerce & WaaS Platform",
    slug: "e-commerce-waas-platform",
    imgPath: "/project-covers/ecommerce-waas.webp",
    description: "Project described in the earlier portfolio. The source repository and implementation claims are not yet verified.",
    tags: ["Additional Work", "Portfolio-documented"],
    stack: [],
    status: "Needs verification",
  },
  {
    title: "Compiler Front-End & Syntax Parser",
    slug: "compiler-front-end-syntax-parser",
    imgPath: "/project-covers/compiler-front-end.webp",
    description: "Compiler project referenced in the earlier portfolio. Source code and features are not yet publicly verified.",
    tags: ["Software Engineering", "Portfolio-documented"],
    stack: [],
    status: "Needs verification",
  },
  {
    title: "Roman Urdu NLP Bot",
    slug: "roman-urdu-nlp-bot",
    imgPath: "/project-covers/roman-urdu-nlp-bot.webp",
    description: "NLP project referenced in the earlier portfolio. Model, deployment and integration claims are not independently verified.",
    tags: ["AI / ML", "Portfolio-documented"],
    stack: [],
    status: "Needs verification",
  },
  {
    title: "Android GPS Telemetry Prototype",
    slug: "android-gps-telemetry-prototype",
    imgPath: "/project-covers/android-gps-telemetry.webp",
    description: "Mobile telemetry concept documented in the earlier portfolio; public code and reported characteristics are not verified.",
    tags: ["Additional Work", "Portfolio-documented"],
    stack: [],
    status: "Needs verification",
  },
  {
    title: "MetaTrader Expert Advisors",
    slug: "metatrader-expert-advisors",
    imgPath: "/project-covers/metatrader-expert-advisors.webp",
    description: "Algorithmic trading project referenced in the earlier portfolio; its previous source link was unavailable at audit time.",
    tags: ["Software Engineering", "Portfolio-documented"],
    stack: [],
    status: "Needs verification",
  },
];

function Projects({ standalone = true }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const categories = ["All", ...new Set(PROJECTS.flatMap((project) => project.tags.slice(0, 1)))];
  const visibleProjects = (standalone ? PROJECTS : PROJECTS.filter((project) => project.featured)).filter((project) => {
    const categoryMatches = activeCategory === "All" || project.tags[0] === activeCategory;
    const query = search.trim().toLowerCase();
    return categoryMatches && (!query || [project.title, project.description, ...project.tags, ...project.stack].join(" ").toLowerCase().includes(query));
  });
  const sectionTitle = standalone ? (
    <>
      My{" "}
      <strong className="purple">
        Engineering Portfolio
      </strong>
    </>
  ) : (
    <>
     
      <strong className="purple">
        Projects &amp; Works
      </strong>
    </>
  );

  const sectionSubtitle = standalone
    ? "Selected software, AI research, and prototype projects spanning front-end engineering, machine learning, and automation."
    : "Selected software projects, AI experiments, and engineering prototypes.";

  return (
    <Container
      fluid={standalone ? "project-section" : "project-home-section"}
      id={standalone ? undefined : undefined}
    >
      {standalone && <Particle />}
      <Container className={standalone ? "pt-2 project-page-inner" : "project-home-inner"}>
        <div className="section-header project-section-header">
          <span className="section-chip">Portfolio</span>
          <h1 className="project-heading">{sectionTitle}</h1>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        {standalone && <div className="project-discovery" style={{maxWidth:"1080px",margin:"24px auto"}}>
          <label htmlFor="project-search" className="visually-hidden">Search projects</label>
          <input id="project-search" className="form-control" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects, technologies, or skills..." style={{background:"#161b2c",color:"#f5f5ff",border:"1px solid #4c4269",padding:"14px 18px"}} />
          <div role="group" aria-label="Filter projects" style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"14px"}}>
            {categories.map((category) => <button key={category} type="button" className={`btn btn-sm ${activeCategory===category?"btn-light":"btn-outline-light"}`} onClick={()=>setActiveCategory(category)} aria-pressed={activeCategory===category}>{category}</button>)}
          </div>
          <p style={{color:"#bec4d4",marginTop:"12px"}}>{visibleProjects.length} projects shown · Public, private, and CV-documented work are labeled separately.</p>
        </div>}
        <div className="horizontal-projects-list">
          {visibleProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              index={idx}
              reversed={idx % 2 === 1}
              imgPath={project.imgPath}
              status={project.status}
              isBlog={project.isBlog}
              title={project.title}
              slug={project.slug}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              tags={project.tags}
              stack={project.stack}
              highlight={project.featured}
            />
          ))}
        </div>
        {!standalone && <div style={{textAlign:"center",padding:"24px 0 12px"}}><Link to="/project" className="hero-action primary-action" style={{display:"inline-flex"}}>Explore all {PROJECTS.length} projects →</Link></div>}
      </Container>
    </Container>
  );
}

export default Projects;
