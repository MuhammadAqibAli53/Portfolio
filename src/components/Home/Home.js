import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const heroStats = [
  { value: "3+", label: "Years building web products" },
  { value: "10+", label: "Stacks and tools in active use" },
  { value: "AI + Web", label: "Product thinking across both domains" },
];

const socialLinks = [
  {
    href: "https://github.com/MuhammadAqibAli53",
    label: "GitHub",
    icon: <AiFillGithub />,
  },
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: <AiOutlineTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-aqib-ali453",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div className="hero-blur hero-blur-one"></div>
        <div className="hero-blur hero-blur-two"></div>
        <Container className="home-content">
          <Row className="align-items-center hero-row">
            <Col lg={7} md={7} className="home-header">
              <div className="hero-badge">
                Available for full-stack and AI-driven product work
              </div>

              <h1 className="heading">
                Designing modern digital experiences that feel fast, vibrant,
                and memorable.
              </h1>

              <h2 className="heading-name">
                I&apos;m
                <strong className="main-name"> Muhammad Aqib Ali</strong>
              </h2>

              <p className="hero-summary">
                I build polished React frontends, scalable Node.js and Laravel
                backends, and intelligent AI/ML solutions that turn ideas into
                production-ready products.
              </p>

              <div className="hero-typewriter">
                <Type />
              </div>

              <div className="hero-actions">
                <a className="hero-action primary-action" href="/project">
                  View My Work
                </a>
                <a className="hero-action secondary-action" href="#about">
                  Explore About Me
                </a>
            </Col>

              <Row className="hero-stats">
                {heroStats.map((stat) => (
                  <Col md={4} sm={4} xs={12} key={stat.label} className="mb-3">
                    <div className="hero-stat-card">
                      <span className="hero-stat-value">{stat.value}</span>
                      <span className="hero-stat-label">{stat.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Col lg={5} md={5} className="hero-image-column">
              <div className="hero-image-shell">
                <div className="hero-orbit hero-orbit-one"></div>
                <div className="hero-orbit hero-orbit-two"></div>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid hero-image"
                />
              </div>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
      <Container className="home-social-section">
        <Row className="align-items-center social-strip">
          <Col lg={5} className="home-about-social">
            <div className="social-intro-card">
              <span className="section-chip">Let&apos;s Connect</span>
              <h1>Build something bold together.</h1>
              <p>
                Reach out for freelance work, product collaborations, or a
                quick conversation about full-stack engineering and AI systems.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <ul className="home-about-social-links">
              {socialLinks.map((link) => (
                <li className="social-icons" key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
        </Row>
      </Container>
    </section>
  );
  );
}

export default Home;
