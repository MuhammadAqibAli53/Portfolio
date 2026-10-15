import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "./Projects";
import { CASE_STUDIES } from "./caseStudies";
import "./case-study.css";

function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.slug === slug);
  const study = CASE_STUDIES[slug];
  if (!project || !study) {
    return <main className="case-study-page"><div className="case-study-container"><h1>Case study not found</h1><p>This project does not have a published case study.</p><Link to="/project">← Back to all projects</Link></div></main>;
  }
  return (
    <main className="case-study-page">
      <div className="case-study-container">
        <Link to="/project" className="case-study-back">← All projects</Link>
        <header className="case-study-header">
          <span className="case-study-eyebrow">{project.tags[0]} · {project.status}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="case-study-tools">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </header>
        {project.imgPath && <figure className="case-study-visual"><img src={project.imgPath} alt={project.title + " illustrative project cover"} /><figcaption>Concept cover artwork — not a verified screenshot of the running application.</figcaption></figure>}
        <div className="case-study-columns">
          <section><h2>The problem</h2><p>{study.problem}</p><h2>Implementation approach</h2><ol>{study.approach.map((step) => <li key={step}>{step}</li>)}</ol></section>
          <aside><h2>Technical workflow</h2><ol className="case-study-flow">{study.architecture.map((step) => <li key={step}>{step}</li>)}</ol></aside>
        </div>
        <section className="case-study-note"><h2>Scope and verification</h2><p>{study.notes}</p><p>{study.contribution}</p></section>
        <div className="case-study-bottom"><Link to="/project">← Browse all projects</Link>{project.ghLink && <a href={project.ghLink} target="_blank" rel="noopener noreferrer">{project.ghLink.includes("kaggle.com") ? "View Research Notebook ↗" : "View Source ↗"}</a>}</div>
      </div>
    </main>
  );
}
export default CaseStudy;
