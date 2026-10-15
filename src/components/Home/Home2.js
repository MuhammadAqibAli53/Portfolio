import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

const coreStack = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Laravel/PHP", icon: <FaPhp /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL/NoSQL", icon: <FaDatabase /> },
  { name: "AI/ML", icon: <FaBrain /> },
];

const strengths = [
  {
    title: "Frontend Architecture",
    text: "React interfaces, reusable components, and practical UI patterns.",
  },
  {
    title: "Backend Systems",
    text: "Backend services, database design, and application integrations.",
  },
  {
    title: "AI Integration",
    text: "Applied ML, retrieval-augmented generation, and tool-using agent experiments.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={8} className="home-about-description">
            <span className="section-chip">About Me</span>
            <h2 className="home-about-title">
              Software Developer.{" "}
              <span className="purple">Problem Solver.</span>
            </h2>

            <p className="home-about-body">
              I&apos;m a developer based in Gujranwala, Pakistan, exploring the
              intersection of applied artificial intelligence and software engineering.
              My work includes research experiments, learning projects, and functional
              prototypes built to solve focused problems.
            </p>

            <p className="home-about-body secondary-copy">
              My technical toolkit spans{" "}
              <span className="purple">
                React.js, Next.js, Node.js, Laravel PHP, TypeScript, Python,
                C++ , C# and Desktop apps
              </span>{" "}
              — allowing me to move fluidly between frontend UX, backend
              architecture, database design, and machine learning pipelines.
            </p>

            <div className="tech-stack-row">
              <span className="stack-label">Core Stack</span>
              <div className="tech-stack-icons">
                {coreStack.map((tech) => (
                  <div
                    className="stack-icon-wrapper"
                    key={tech.name}
                    title={tech.name}
                  >
                    <span className="stack-icon">{tech.icon}</span>
                  </div>
                ))}
              </div>
            </div>

            <Row className="strength-grid">
              {strengths.map((item) => (
                <Col md={4} sm={6} xs={12} key={item.title} className="mb-3">
                  <div className="strength-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={5} md={4} className="myAvtar">
              <div className="avatar-card">
                <img src={myImg} className="img-fluid" alt="Muhammad Aqib Ali" />
              </div>
            <div className="avatar-highlights">
              <div className="avatar-highlight-item">
                <span className="highlight-dot"></span>
                <span>Based in Gujranwala, Pakistan</span>
              </div>
              <div className="avatar-highlight-item">
                <span className="highlight-dot"></span>
                <span>Open to Remote & Hybrid Roles</span>
              </div>
              <div className="avatar-highlight-item">
                <span className="highlight-dot"></span>
                <span>Fluent in English & Urdu</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
