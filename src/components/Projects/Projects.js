import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const PROJECTS = [
  {
    imgPath: chatify,
    isBlog: false,
    title: "Decoupled E-Commerce & WaaS Platform",
    description:
      "Engineered a high-performance e-commerce architecture featuring a responsive React.js frontend SPA and a scalable Laravel PHP RESTful API backend. Integrated local market logistics, Cash-on-Delivery workflows, and automated WhatsApp Business order notifications.",
    tags: ["Full-Stack", "E-Commerce", "WaaS", "SaaS"],
    stack: ["React", "Laravel", "MySQL", "REST API", "Node.js"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
    highlight: true,
  },
  {
    imgPath: leaf,
    isBlog: false,
    title: "Deep Learning Image Classification Pipeline",
    description:
      "Architected and trained an end-to-end multi-class image classifier using PyTorch, TensorFlow, and OpenCV. Optimized inference latency and implemented secure software design principles to protect model endpoints against malformed inputs.",
    tags: ["AI/ML", "Computer Vision", "Deep Learning"],
    stack: ["Python", "PyTorch", "TensorFlow"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
    highlight: true,
  },
  {
    imgPath: editor,
    isBlog: false,
    title: "MT4/MT5 Algorithmic Trading Bot & Replicator",
    description:
      "Developed custom automated trading bots, indicators, and Expert Advisors (EAs) for MetaTrader 4 and 5 using MQL4/MQL5 and Python. Engineered low-latency master-to-slave trade replication logic across restricted broker environments.",
    tags: ["FinTech", "Algo Trading", "Automation"],
    stack: ["Python", "MQL5"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Custom Compiler Front-End & Syntax Parser",
    description:
      "Designed and implemented a functional compiler front-end with a custom lexical analyzer and syntax parser. Built automated AST (Abstract Syntax Tree) generation, syntax error recovery routines, and execution metric profiling.",
    tags: ["Systems", "Compilers", "C++"],
    stack: ["Python", "MySQL", "React"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: "Roman Urdu NLP & Social Outreach Bot",
    description:
      "Built an NLP text classification pipeline tailored for Roman Urdu regional dialects. Automates customer inquiry tagging and intelligent lead routing for Pakistani e-commerce brands via direct social media messaging integrations.",
    tags: ["NLP", "Automation", "Bots"],
    stack: ["Python", "TensorFlow", "MySQL"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
  },
  {
    imgPath: suicide,
    isBlog: false,
    title: "Background GPS Tracking Telemetry Demo",
    description:
      "Architected a persistent, low-power background geolocation telemetry service optimized for aggressive Android OEM battery restrictions (including ColorOS/OPPO). Uses multi-threading and live socket streaming for continuous location reporting.",
    tags: ["Android", "Telemetry", "Mobile"],
    stack: ["React", "Node.js", "MySQL", "REST API"],
    ghLink: "https://github.com",
    demoLink: "https://your-demo.com",
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
      Selected{" "}
      <strong className="purple">
        Projects &amp; Works
      </strong>
    </>
  );

  const sectionSubtitle = standalone
    ? "Production-grade full-stack architectures, AI/ML models, and algorithmic trading systems I have designed, built and shipped."
    : "A curated selection of the full-stack platforms, AI models, and automation systems I have engineered end-to-end.";

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
