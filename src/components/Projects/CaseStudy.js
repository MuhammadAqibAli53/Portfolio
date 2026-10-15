import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "./Projects";
import { CASE_STUDIES } from "./caseStudies";
import "./case-study.css";

function CaseStudy() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((item) => item.slug === slug);
  const project = PROJECTS[index];
  const study = CASE_STUDIES[slug];
  if (!project) {
    return <main className="case-study-page"><div className="case-study-container"><h1>Project not found</h1><p>That project isn't in the current portfolio catalog.</p><Link to="/project">← Browse projects</Link></div></main>;
  }
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const documentedOnly = !study;
  return (
    <main className="case-study-page">
      <div className="case-study-container">
        <Link to="/project" className="case-study-back">← All projects</Link>
        <header className="case-study-header">
          <span className="case-study-eyebrow">{project.tags[0]} · {project.status}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="case-study-tools">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          {documentedOnly && <p className="case-study-disclosure">Project overview · A detailed technical implementation has not been independently verified.</p>}
        </header>
        {project.imgPath && <figure className="case-study-visual"><img src={project.imgPath} alt={"Illustrative cover for " + project.title} loading="lazy" /><figcaption>Concept illustration — not a verified screenshot of the running application.</figcaption></figure>}
        {study ? <>
          <div className="case-study-columns">
            <section><h2>The problem</h2><p>{study.problem}</p><h2>Implementation approach</h2><ol>{study.approach.map(step => <li key={step}>{step}</li>)}</ol></section>
            <aside><h2>Technical workflow</h2><div className="case-study-flow-diagram" role="list" aria-label="Technical workflow steps">{study.architecture.map((step, i) => <div className="case-study-flow-step" role="listitem" key={step}><span className="case-study-flow-number">{String(i + 1).padStart(2, "0")}</span><span>{step}</span></div>)}</div><p className="case-study-caption">Sequence summarizes the documented implementation; it is not an infrastructure deployment diagram.</p></aside>
          </div>
          <div className="case-study-columns case-study-detail-columns">
            <section><h2>Technical decisions</h2><ul>{(study.decisions || []).map(item => <li key={item}>{item}</li>)}</ul></section>
            <aside><h2>Challenges and open questions</h2><ul>{(study.challenges || []).map(item => <li key={item}>{item}</li>)}</ul></aside>
          </div>
          <section className="case-study-note"><h2>Scope and verification</h2><p>{study.notes}</p><p>{study.contribution}</p></section>
        </> : <section className="case-study-note">
          <h2>Project overview</h2>
          <p>This work is included in the portfolio as <strong>{project.status}</strong>. The description above reflects available repository, CV, or earlier portfolio information; technical features and outcomes should not be treated as independently verified.</p>
          <p>Further implementation details, challenges, and results will be added when supporting project evidence is available.</p>
          {project.ghLink && <p>The linked source is available for visitors who want to examine the project directly.</p>}
        </section>}
        <nav className="case-study-related" aria-label="Browse projects">
          <Link to={`/project/${previous.slug}`} className="case-study-related-card"><span>← Previous project</span><strong>{previous.title}</strong></Link>
          <Link to={`/project/${next.slug}`} className="case-study-related-card"><span>Next project →</span><strong>{next.title}</strong></Link>
        </nav>
        <div className="case-study-bottom"><Link to="/project">← Browse all projects</Link>{project.ghLink && <a href={project.ghLink} target="_blank" rel="noopener noreferrer">{project.ghLink.includes("kaggle.com") ? "View Research Notebook ↗" : "View Source ↗"}</a>}</div>
      </div>
    </main>
  );
}
export default CaseStudy;
