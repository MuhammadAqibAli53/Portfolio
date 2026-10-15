import React from "react";
import pdf from "../../Assets/cv_aqib.pdf";
import "./resume-clean.css";

function ResumeNew() {
  return <main className="resume-clean">
    <div className="resume-clean-head">
      <span className="resume-clean-label">Resume</span>
      <h1>Experience, skills and selected work</h1>
      <p>View the CV below or open the full document in your PDF reader. The attached CV was last updated in June 2026; individual project pages may contain more recent information.</p>
      <div className="resume-clean-actions">
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="hero-action primary-action">View Full CV ↗</a>
        <a href={pdf} download="Muhammad-Aqib-Ali-CV.pdf" className="hero-action secondary-action">Download PDF ↓</a>
      </div>
    </div>
    <div className="resume-clean-frame">
      <object data={pdf + "#toolbar=1&navpanes=0"} type="application/pdf" aria-label="Resume PDF preview">
        <p>PDF preview is not supported in this browser. <a href={pdf} target="_blank" rel="noopener noreferrer">Open the CV</a>.</p>
      </object>
    </div>
  </main>;
}
export default ResumeNew;
