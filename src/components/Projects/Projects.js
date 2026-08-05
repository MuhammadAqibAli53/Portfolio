import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder images - replace with your real screenshots later!
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Engineering Works</strong>
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "1.1rem", paddingBottom: "20px" }}>
          A selection of my production-grade full-stack architectures, AI/ML models, and algorithmic trading systems.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Decoupled E-Commerce & WaaS Platform"
              description="Engineered a high-performance e-commerce architecture featuring a responsive React.js frontend SPA and a scalable Laravel PHP RESTful API backend. Integrated local market logistics, Cash-on-Delivery workflows, and automated WhatsApp Business order notifications."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Deep Learning Image Classification Pipeline"
              description="Architected and trained an end-to-end multi-class image classifier using PyTorch, TensorFlow, and OpenCV. Optimized inference latency and implemented secure software design principles to protect model endpoints against malformed inputs."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MT4/MT5 Algorithmic Trading Bot & Replicator"
              description="Developed custom automated trading bots, indicators, and Expert Advisors (EAs) for MetaTrader 4 and 5 using MQL4/MQL5 and Python. Engineered low-latency master-to-slave trade replication logic across restricted broker environments."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Custom Compiler Front-End & Syntax Parser"
              description="Designed and implemented a functional compiler front-end with a custom lexical analyzer and syntax parser. Built automated AST (Abstract Syntax Tree) generation, syntax error recovery routines, and execution metric profiling."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Roman Urdu NLP & Social Outreach Bot"
              description="Built an NLP text classification pipeline tailored for Roman Urdu regional dialects. Automates customer inquiry tagging and intelligent lead routing for Pakistani e-commerce brands via direct social media messaging integrations."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Background GPS Tracking Telemetry Demo"
              description="Architected a persistent, low-power background geolocation telemetry service optimized for aggressive Android OEM battery restrictions (including ColorOS/OPPO). Uses multi-threading and live socket streaming for continuous location reporting."
              ghLink="https://github.com"
              demoLink="https://your-demo.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;