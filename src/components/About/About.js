import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const professionalHighlights = [
  {
    number: "3+",
    label: "Years Professional Experience",
  },
  {
    number: "15+",
    label: "Production Projects Delivered",
  },
  {
    number: "20+",
    label: "Technologies & Tools",
  },
  {
    number: "99%",
    label: "On-Time Delivery Rate",
  },
];

const coreCompetencies = [
  {
    title: "Frontend Engineering",
    items: [
      "React.js & Next.js Applications",
      "TypeScript / JavaScript",
      "State Management (Redux, Context)",
      "Responsive & Accessible UI",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Node.js / Express.js APIs",
      "Laravel PHP Development",
      "Python flask",
      "RESTful API Design & Security",
      "Database Design (SQL & NoSQL)",
      "Microservices & Scaling",
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Deep Learning (TensorFlow, PyTorch, CNNs, ANNs, RNNs)",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Predictive Analytics & Modeling",
      "Model Deployment & Pipelines",
    ],
  },
  {
    title: "DevOps & Tooling",
    items: [
      "Docker Containerization",
      "CI/CD Pipelines",
      "Version Control (Git/GitHub)",
      "Testing & Code Quality",
      "Cloud Infrastructure",
    ],
  },
];

const focusAreas = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Laravel PHP",
  "TypeScript",
  "JavaScript",
  "Python",
  "MySQL",
  "MongoDB",
  "TensorFlow",
  "PyTorch",
  "Machine Learning",
  "Deep Learning",
  "Model training",
  "Docker",
];

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <div className="about-hero">
            <span className="section-chip">About Me</span>
            <h1 className="about-hero-title">
              A closer look at my{" "}
              <span className="purple">journey &amp; expertise</span>
            </h1>
            <p className="about-hero-subtitle">
              A software engineer dedicated to turning ambitious ideas into
              reliable, production-ready systems that deliver real value.
            </p>
          </div>

          <Row className="about-highlights-row">
            {professionalHighlights.map((item) => (
              <Col md={3} sm={6} xs={12} key={item.label} className="mb-4">
                <div className="about-highlight-card">
                  <span className="about-highlight-number">
                    {item.number}
                  </span>
                  <span className="about-highlight-label">{item.label}</span>
                </div>
              </Col>
            ))}
          </Row>

          <Row
            style={{ justifyContent: "center", padding: "10px 0 30px" }}
          >
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Aboutcard />
              <div className="about-highlight-tags">
                {focusAreas.map((item) => (
                  <span className="about-highlight-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "60px", paddingBottom: "50px" }}
              className="about-img about-img-wrapper"
            >
              <img
                src={laptopImg}
                alt="Software engineering workspace"
                className="img-fluid about-image-main"
              />
            </Col>
          </Row>

          <div className="competencies-section">
            <div className="section-header text-center pb-4">
              <span className="section-chip">Core Competencies</span>
              <h2 className="section-title">
                What I bring to <span className="purple">every project</span>
              </h2>
            </div>
            <Row className="competencies-grid">
              {coreCompetencies.map((category, idx) => (
                <Col
                  md={6}
                  sm={12}
                  xs={12}
                  key={category.title}
                  className="mb-4"
                >
                  <div
                    className="competency-card"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <h3 className="competency-title">{category.title}</h3>
                    <ul className="competency-list">
                      {category.items.map((competency) => (
                        <li key={competency}>{competency}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <p className="section-description text-center">
            Technologies and frameworks I use daily to deliver production-grade solutions.
          </p>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <p className="section-description text-center">
            The development environment and tooling for efficient, high-quality work.
          </p>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
