import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import cvPdf from "../../Assets/cv_aqib.pdf";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiFillStar,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaLinkedinIn, FaCode, FaRobot, FaServer } from "react-icons/fa";

const coreServices = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Responsive applications, component-based interfaces, and accessible user experiences.",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    description: "REST APIs, database-backed features, and integrations for practical applications.",
  },
  {
    icon: <FaRobot />,
    title: "AI & ML Solutions",
    description: "Retrieval systems, agents, and ML prototypes designed around real use cases.",
  },
];

const socialLinks = [
  {
    href: "https://github.com/MuhammadAqibAli53",
    label: "GitHub",
    icon: <AiFillGithub />,
  },
  {
    href: "https://x.com/ranaaqib06",
    label: "Twitter",
    icon: <AiOutlineTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-aqib-ali453",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/rana_aqib06",
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
];

const scrollToSection = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function Home() {
  return (
    <section>
      {/* HOME HERO */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center hero-row">
            <Col lg={7} md={7} className="home-header">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Software engineering · Applied AI
              </div>

              <h1 className="heading">
                Building Intelligent{" "}
                <span className="purple">Software Experiences.</span>
              </h1>

              <h2 className="heading-name">
                Hi, I&apos;m{" "}
                <strong className="main-name">Muhammad Aqib Ali</strong>
              </h2>

              <p className="hero-summary">
                Computer Science developer building practical AI agents, machine learning
                applications, retrieval systems, and modern web interfaces. Explore
                real code, research prototypes, and documented engineering work.
              </p>


              <div className="hero-actions">
                <Link className="hero-action primary-action" to="/project">Explore Projects <AiOutlineArrowRight className="hero-action-icon" /></Link>
                <a
                  className="hero-action secondary-action"
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineDownload className="hero-action-icon" /> Download CV
                </a>
                <a
                  className="hero-action tertiary-action"
                  href="#contact"
                  onClick={scrollToSection("contact")}
                >
                  Get In Touch
                </a>
              </div>
            </Col>

            <Col lg={5} md={5} className="hero-image-column">
              <div className="hero-image-shell">
                <div className="hero-tech-badge tech-badge-1">
                  <FaCode /> React
                </div>
                <div className="hero-tech-badge tech-badge-2">
                  <FaServer /> Node.js
                </div>
                <div className="hero-tech-badge tech-badge-3">
                  <FaRobot /> Python/ML
                </div>
                <img
                  src={homeLogo}
                  alt="Full Stack Developer illustration"
                  className="img-fluid hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* SERVICES */}
      <Container className="services-section" fluid id="services">
        <Container>
          <div className="section-header">
            <span className="section-chip">What I Do</span>
            <h2 className="section-title">
              Areas of{" "}
              <span className="purple">Engineering Focus</span>
            </h2>
            <p className="section-subtitle">
              Selected disciplines represented by my code, research, and prototype projects.
            </p>
          </div>
          <Row className="services-grid">
            {coreServices.map((service) => (
              <Col md={4} sm={6} xs={12} key={service.title} className="mb-4">
                <div
                  className="service-card"
                  
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* ABOUT PREVIEW */}
      <div id="about-anchor">
        <Home2 />
      </div>

      {/* PROJECTS */}
      <div id="projects">
        <Projects standalone={false} />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact standalone={false} />
      </div>

      {/* SOCIAL CTA (final section) */}
      <Container className="home-social-section">
        <Row className="align-items-center social-strip">
          <Col lg={5} className="home-about-social">
            <div className="social-intro-card">
              <span className="section-chip">Let&apos;s Collaborate</span>
              <h2>Have a project in mind?</h2>
              <p>
                Interested in collaborating on applied AI, a software prototype, or a
                web application? Share your idea and we can explore it together.
              </p>
              <div className="hero-actions mt-3">
                <a
                  className="hero-action primary-action"
                  href="#contact"
                  onClick={scrollToSection("contact")}
                >
                  <AiOutlineArrowRight className="hero-action-icon" /> Contact Me
                </a>
                <a
                  className="hero-action secondary-action"
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineDownload className="hero-action-icon" /> Download CV
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <h3 className="social-heading">Find me on</h3>
            <ul className="home-about-social-links">
              {socialLinks.map((link) => (
                <li className="social-icons" key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
