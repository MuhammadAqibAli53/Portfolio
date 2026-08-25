import React from "react";
import { BsGithub } from "react-icons/bs";
import {
  CgWebsite,
  CgArrowRight,
  CgFormatLeft,
  CgFormatRight,
} from "react-icons/cg";
import { FaReact, FaNodeJs, FaPython, FaCloudDownloadAlt } from "react-icons/fa";
import { SiLaravel, SiMysql, SiPytorch, SiTensorflow } from "react-icons/si";

const techIcons = {
  React: <FaReact style={{ color: "#61dafb" }} />,
  "Node.js": <FaNodeJs style={{ color: "#8cc84b" }} />,
  Laravel: <SiLaravel style={{ color: "#ff2d20" }} />,
  MySQL: <SiMysql style={{ color: "#4479a1" }} />,
  Python: <FaPython style={{ color: "#3776ab" }} />,
  PyTorch: <SiPytorch style={{ color: "#ee4c2c" }} />,
  TensorFlow: <SiTensorflow style={{ color: "#ff6f00" }} />,
  "REST API": <FaCloudDownloadAlt style={{ color: "#22d3ee" }} />,
};

function ProjectCards({
  imgPath,
  isBlog = false,
  title,
  description,
  ghLink = "#",
  demoLink,
  tags = [],
  stack = [],
  reversed = false,
  index = 0,
  highlight,
}) {
  const alignIcon = reversed ? <CgFormatRight /> : <CgFormatLeft />;

  return (
    <article
      className={`h-project-card ${reversed ? "h-card-reversed" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="h-card-glow"></div>

      <div className="h-card-image-col">
        <div className="h-card-image-shell">
          <div className="h-card-image-overlay">
            <span className="h-card-badge">
              #{String(index + 1).padStart(2, "0")}
            </span>
            {highlight && (
              <span className="h-card-featured">
                ★ Featured
              </span>
            )}
          </div>
          <img
            src={imgPath}
            alt={`${title} screenshot`}
            className="h-card-image"
          />
          <div className="h-card-image-border"></div>
        </div>
      </div>

      <div className="h-card-content-col">
        <div className="h-card-topmeta">
          <span className="h-card-alignicon" aria-hidden="true">
            {alignIcon}
          </span>
          <span className="h-card-type">
            {isBlog ? "Case Study" : "Engineering Work"}
          </span>
          {tags.length > 0 && tags[0] && (
            <span className="h-card-category">{tags[0]}</span>
          )}
        </div>

        <h3 className="h-card-title">{title}</h3>

        <p className="h-card-description">{description}</p>

        {stack.length > 0 && (
          <div className="h-card-stack">
            <span className="h-card-stack-label">Stack</span>
            <div className="h-card-stack-row">
              {stack.map((tech) => (
                <span className="h-card-tech" key={tech} title={tech}>
                  <span className="h-card-tech-icon">
                    {techIcons[tech] || <FaReact style={{ color: "#22d3ee" }} />}
                  </span>
                  <span className="h-card-tech-name">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div className="h-card-tags">
            {tags.map((tag) => (
              <span className="h-card-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="h-card-actions">
          <a
            className="hero-action primary-action h-card-btn h-card-cta"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            aria-label={isBlog ? "Read Blog" : "View Source on GitHub"}
          >
            <BsGithub />
            &nbsp;{isBlog ? "Read Blog" : "View Source"}
          </a>
          {!isBlog && demoLink && (
            <a
              className="hero-action secondary-action h-card-btn h-card-live"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
            >
              <CgWebsite />
              &nbsp;Live Demo
              <CgArrowRight className="h-card-arrow" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
