import React from "react";
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
    imgPath: chatify,
    isBlog: false,
    title: "Decoupled E-Commerce & WaaS Platform",
    description:
      "Engineered a high-performance e-commerce architecture featuring a responsive React.js frontend SPA and a scalable Laravel PHP RESTful API backend. Integrated local market logistics, Cash-on-Delivery workflows, and automated WhatsApp Business order notifications.",
    tags: ["Full-Stack", "E-Commerce", "WaaS", "SaaS"],
    stack: ["React", "Laravel", "MySQL", "REST API", "Node.js"],
    ghLink: null,
    demoLink: null,
    highlight: true,
  },
   {
  imgPath: parkinsons_disease_ai,
  isBlog: false,
  title: "Parkinson's Disease Classification from MRI",
  description: "Conducted an end-to-end comparative study of eleven classification models—spanning classical machine learning, deep learning, and transformer-based architectures—to distinguish Parkinson's Disease patients from healthy controls. Built a robust preprocessing pipeline to unify 3,630 raw structural MRI and DaTscan images. Utilized SHAP and LIME to provide explainability for the textural features and spatial regions driving individual predictions.",
  tags: ["Machine Learning", "Deep Learning", "Transformers", "Medical Imaging"],
  stack: ["Python", "Keras", "XGBoost", "Hugging Face"],
  ghLink: "https://www.kaggle.com/code/muhammadaqibali/ppmi-pd-classification-ml-dl-transformer",
  demoLink: "https://www.kaggle.com/code/muhammadaqibali/ppmi-pd-classification-ml-dl-transformer",
},
  {
    imgPath: leaf,
    isBlog: false,
    title: "Potato Leaf Disease Classification",
    description:
      "Built a TensorFlow/Keras inference interface for three-class potato leaf classification, including image preprocessing, model loading, confidence display, and Gradio integration.",
    tags: ["AI/ML", "Computer Vision", "Deep Learning"],
    stack: ["Python", "TensorFlow"],
    ghLink: "https://github.com/MuhammadAqibAli53/Potato_Disease_classification",
    demoLink: null,
    highlight: true,
  },
  {
  imgPath: metatrader,
  isBlog: false,
  title: "MT4 & MT5 Algorithmic Trading Expert Advisors",
  description: "Developed and optimized automated trading bots (Expert Advisors) and custom indicators for both MetaTrader 4 and MetaTrader 5 platforms. Engineered robust risk management features, dynamic position sizing, and algorithmic order execution pipelines based on strict technical criteria. Conducted extensive strategy backtesting and structural bug fixing for legacy MQL4/MQL5 scripts to ensure high-frequency trading stability and capital preservation.",
  tags: ["Algorithmic Trading", "MetaTrader", "Expert Advisors", "Quantitative Finance"],
  stack: ["MQL4", "MQL5", "C++", "Financial APIs"],
  ghLink: "https://github.com/muhammadaqibali/metatrader-expert-advisors",
  demoLink: "https://github.com/muhammadaqibali/metatrader-expert-advisors",
},
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Custom Compiler Front-End & Syntax Parser",
    description:
      "Designed and implemented a functional compiler front-end with a custom lexical analyzer and syntax parser. Built automated AST (Abstract Syntax Tree) generation, syntax error recovery routines, and execution metric profiling.",
    tags: ["Systems", "Compilers", "C++"],
    stack: ["Python", "MySQL", "React"],
    ghLink: null,
    demoLink: null,
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: "Roman Urdu NLP & Social Outreach Bot",
    description:
      "Built an NLP text classification pipeline tailored for Roman Urdu regional dialects. Automates customer inquiry tagging and intelligent lead routing for Pakistani e-commerce brands via direct social media messaging integrations.",
    tags: ["NLP", "Automation", "Bots"],
    stack: ["Python", "TensorFlow", "MySQL"],
    ghLink: null,
    demoLink: null,
  },
  {
    imgPath: suicide,
    isBlog: false,
    title: "Background GPS Tracking Telemetry Demo",
    description:
      "Architected a persistent, low-power background geolocation telemetry service optimized for aggressive Android OEM battery restrictions (including ColorOS/OPPO). Uses multi-threading and live socket streaming for continuous location reporting.",
    tags: ["Android", "Telemetry", "Mobile"],
    stack: ["React", "Node.js", "MySQL", "REST API"],
    ghLink: null,
    demoLink: null,
  },
 
];

function Projects({ standalone = true }) {
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
              imgPath={project.imgPath}
              isBlog={project.isBlog}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              tags={project.tags}
              stack={project.stack}
              highlight={project.highlight}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
