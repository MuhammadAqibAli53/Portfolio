import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import parkinsons_disease_ai from "../../Assets/Projects/Gemini_Generated_Image_m3ax8tm3ax8tm3ax.jpg";
import metatrader from "../../Assets/Projects/meta.png";


const PROJECTS = [
  {
    title: "Student RAG System",
    description: "A document-grounded question-answering prototype with PDF/TXT extraction, overlapping text chunks, MiniLM embeddings, and FAISS retrieval.",
    tags: ["GenAI / RAG", "Document Intelligence"],
    stack: ["Python", "FAISS", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/student-rag-system",
    featured: true,
    status: "Prototype",
  },
  {
    title: "AI Agent Development",
    description: "A collection of tool-using agents and multi-agent research workflows, including internship skill matching, web search, citations, and critique.",
    tags: ["AI Agents", "Automation"],
    stack: ["Python", "LangChain", "Streamlit"],
    ghLink: "https://github.com/MuhammadAqibAli53/Agent_development",
    featured: true,
    status: "Educational projects",
  },
  {
    title: "TaskMaster — Offline-first Task Manager",
    description: "An interactive Kanban and list-view task manager using IndexedDB, Web Workers, and locally queued changes; server synchronization is simulated.",
    tags: ["Web Development", "JavaScript"],
    stack: ["JavaScript", "IndexedDB", "HTML/CSS"],
    ghLink: "https://github.com/MuhammadAqibAli53/Task-Manager-Project",
    featured: true,
    status: "Prototype",
  },
  {
    title: "Potato Leaf Disease Classification",
    description: "A TensorFlow/Keras inference interface classifying potato leaves as Early Blight, Late Blight, or Healthy using a saved model and Gradio.",
    tags: ["AI / ML", "Computer Vision"],
    stack: ["Python", "TensorFlow", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/Potato_Disease_classification",
    imgPath: leaf,
    featured: true,
    status: "Prototype",
  },
  {
    title: "Tourist Guide Bot",
    description: "Multilingual tourism assistant prototype combining retrieval, translation, optional LLM providers, and speech-related components.",
    tags: ["GenAI / RAG", "NLP"],
    stack: ["Python", "FAISS", "Gradio"],
    ghLink: "https://github.com/MuhammadAqibAli53/Tourist_Guide_Bot",
    featured: true,
    status: "Prototype",
  },
  {
    title: "Parkinson's Disease Classification Research",
    description: "Medical-imaging model comparison and experimentation. View the associated Kaggle notebook for implementation and reported results.",
    tags: ["Research", "AI / ML"],
    stack: ["Python", "TensorFlow"],
    ghLink: "https://www.kaggle.com/code/muhammadaqibali/ppmi-pd-classification-ml-dl-transformer",
    imgPath: parkinsons_disease_ai,
    featured: true,
    status: "Research",
  },
  {
    title: "Developer Portfolio",
    description: "React website with component-based pages, routing, responsive Bootstrap layouts, and an engineering project showcase.",
    tags: ["Web Development", "React"],
    stack: ["React", "JavaScript", "Bootstrap"],
    ghLink: "https://github.com/MuhammadAqibAli53/Portfolio",
    status: "Active",
  },
  {
    title: "Web Development Exercises",
    description: "A collection of website exercises covering foundational HTML, CSS, responsive layouts, and Bootstrap.",
    tags: ["Web Development", "Coursework"],
    stack: ["HTML/CSS", "Bootstrap"],
    ghLink: "https://github.com/MuhammadAqibAli53/web_development_tasks",
    status: "Coursework",
  },
  {
    title: "CS Department Portal",
    description: "A multi-page computer science department website with HTML pages, styling, and static assets.",
    tags: ["Web Development", "Frontend"],
    stack: ["HTML/CSS", "JavaScript"],
    ghLink: "https://github.com/MuhammadAqibAli53/cs-dept-portal",
    status: "Prototype",
  },
  {
    title: "C++ Programming Exercises",
    description: "Programming exercises including a CGPA calculator and login examples.",
    tags: ["Software Engineering", "Coursework"],
    stack: ["C++"],
    ghLink: "https://github.com/MuhammadAqibAli53/codealpha_tasks",
    status: "Coursework",
  },
  {
    title: "Instant Prompt",
    description: "A React/TypeScript prompt template builder demonstrating UI state, structured prompts, and simulated model responses (no live AI backend).",
    tags: ["Web Development", "GenAI / RAG"],
    stack: ["React", "TypeScript"],
    ghLink: "https://github.com/MuhammadAqibAli53/instant-prompt",
    status: "UI prototype",
  },
  {
    title: "OurDesk Server",
    description: "A .NET server and shared protocol repository for a remote-desktop research/development project.",
    tags: ["Software Engineering", "Backend"],
    stack: [".NET", "C#"],
    status: "Private repository",
  },
  {
    title: "NeuroNest VR",
    description: "Unity-based research prototype exploring interactive activities and clinician-supervised session workflows.",
    tags: ["Research", "VR"],
    stack: ["Unity", "C#"],
    status: "Private FYP prototype",
  },
  {
    title: "Green Heaven",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Virtual Try-On",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Voice Emotion",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "UI Code Generator",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
  {
    title: "Career Advisor",
    description: "Additional project listed in my CV. Public implementation and feature details are not independently verified.",
    tags: ["Additional Work", "CV-documented"],
    stack: [],
    status: "CV-documented",
  },
];

function Projects({ standalone = true }) {\n  const [activeCategory, setActiveCategory] = useState("All");\n  const [search, setSearch] = useState("");\n  const categories = ["All", ...new Set(PROJECTS.flatMap((project) => project.tags.slice(0, 1)))];\n  const visibleProjects = (standalone ? PROJECTS : PROJECTS.filter((project) => project.featured)).filter((project) => {\n    const categoryMatches = activeCategory === "All" || project.tags[0] === activeCategory;\n    const query = search.trim().toLowerCase();\n    return categoryMatches && (!query || [project.title, project.description, ...project.tags, ...project.stack].join(" ").toLowerCase().includes(query));\n  });
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

        <div className="horizontal-projects-list">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.title}
              index={idx}
              reversed={idx % 2 === 1}
              imgPath={project.imgPath}\n              status={project.status}
              isBlog={project.isBlog}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              tags={project.tags}
              stack={project.stack}
              highlight={project.featured}
            />
          ))}
        </div>
        {!standalone && <div style={{textAlign:"center",padding:"24px 0 12px"}}><a href="/project" className="hero-action primary-action" style={{display:"inline-flex"}}>Explore all {PROJECTS.length} projects →</a></div>}
      </Container>
    </Container>
  );
}

export default Projects;
