import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import cvPdf from "../../Assets/cv_aqib.pdf";
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

const heroStats = [
  { value: "3+", label: "Years Experience", icon: <AiFillStar /> },
  { value: "15+", label: "Projects Delivered", icon: <AiOutlineFundProjectionScreen /> },
  { value: "20+", label: "Technologies Mastered", icon: <FaCode /> },
];

const coreServices = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Modern, responsive web apps with React, Next.js & Laravel.",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    description: "Scalable REST APIs, microservices, and database architecture.",
  },
  {
    icon: <FaRobot />,
    title: "AI & ML Solutions",
    description: "Intelligent automation, predictive models, and deep learning systems.",
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
    href: "https://www.linkedin.com/in/muhammad-aqib-ali453?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/rana_aqib06?igsi=aDhwaWsxZ3p0MTcz",
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
        <Particle />
        <div className="hero-blur hero-blur-one"></div>
        <div className="hero-blur hero-blur-two"></div>
        <Container className="home-content">
          <Row className="align-items-center hero-row">
            <Col lg={7} md={7} className="home-header">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Available for new projects &amp; full-time roles
              </div>

              <h1 className="heading">
                Building Digital Products That{" "}
                <span className="purple">Drive Results.</span>
              </h1>

              <h2 className="heading-name">
                Hi, I&apos;m{" "}
                <strong className="main-name">Muhammad Aqib Ali</strong>
              </h2>

              <p className="hero-summary">
                Software Engineer specializing in full-stack web development and
                AI-powered solutions.Laravel backends and
                intelligent machine learning systems.
              </p>

              <div className="hero-typewriter">
                <Type />
              </div>

              <div className="hero-actions">
                <a
                  className="hero-action primary-action"
                  href="#projects"
                  onClick={scrollToSection("projects")}
                >
                  View My Work <AiOutlineArrowRight className="hero-action-icon" />
                </a>
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

              <Row className="hero-stats">
                {heroStats.map((stat) => (
                  <Col md={4} sm={4} xs={12} key={stat.label} className="mb-3">
                    <div className="hero-stat-card">
                      <span className="hero-stat-icon">{stat.icon}</span>
                      <span className="hero-stat-value">{stat.value}</span>
                      <span className="hero-stat-label">{stat.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={5} md={5} className="hero-image-column">
              <div className="hero-image-shell">
                <div className="hero-orbit hero-orbit-one"></div>
                <div className="hero-orbit hero-orbit-two"></div>
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
              End-to-End Solutions for{" "}
              <span className="purple">Modern Businesses</span>
            </h2>
            <p className="section-subtitle">
              From concept to deployment, I deliver high-quality engineering
              across the entire product stack.
            </p>
          </div>
          <Row className="services-grid">
            {coreServices.map((service, idx) => (
              <Col md={4} sm={6} xs={12} key={service.title} className="mb-4">
                <div
                  className="service-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
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
              <h1>Have a project in mind?</h1>
              <p>
                Whether you need a complete web application, API backend, or an
                AI-powered feature, I&apos;d love to hear about your goals.
                Let&apos;s build something exceptional together.
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
