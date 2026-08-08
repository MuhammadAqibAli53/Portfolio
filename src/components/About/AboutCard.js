import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaCheckCircle, FaAward, FaLightbulb, FaHandshake } from "react-icons/fa";

const principles = [
  {
    icon: <FaCheckCircle />,
    title: "Quality First",
    description: "Clean, tested, maintainable code on every deliverable.",
  },
  {
    icon: <FaLightbulb />,
    title: "User-Centric",
    description: "Every engineering decision starts with the end user in mind.",
  },
  {
    icon: <FaAward />,
    title: "Performance Minded",
    description: "Fast, optimized, and scalable solutions built for growth.",
  },
  {
    icon: <FaHandshake />,
    title: "Clear Communication",
    description: "Transparent updates, realistic timelines, and true partnership.",
  },
];

function AboutCard() {
  return (
    <div className="about-story-wrapper">
      <Card className="quote-card-view about-story-card">
        <Card.Body>
          <div className="about-story-header">
            <span className="section-chip">My Story</span>
            <h2>
              Crafting Software That{" "}
              <span className="purple">Makes an Impact</span>
            </h2>
          </div>

          <p className="about-card-copy">
            I&apos;m <span className="purple">Muhammad Aqib Ali</span>, a
            Software Engineer based in{" "}
            <span className="purple">Gujranwala, Pakistan</span>, with over 3
            years of hands-on experience building production-grade digital
            products.
          </p>

          <p className="about-card-copy">
            My journey in tech started with a curiosity for how things work
            under the hood — which quickly grew into a passion for architecting
            complete, end-to-end systems. Today I specialize in{" "}
            <span className="purple">Full-Stack Web Development</span> and{" "}
            <span className="purple">AI / Machine Learning</span>, building
            modern applications with{" "}
            <span className="purple">React.js, Node.js, Laravel PHP</span>, and
            the Python data ecosystem.
          </p>

          <p className="about-card-copy">
            Whether I&apos;m designing a clean React interface, engineering a
            robust backend API, or training a deep learning model, I believe
            the best software is built at the intersection of solid engineering
            and thoughtful user experience.
          </p>

          <div className="about-card-divider"></div>

          <h4 className="about-activity-heading">
            Areas I&apos;m currently focused on:
          </h4>
          <ul className="about-activity-list">
            <li className="about-activity">
              <ImPointRight /> Designing &amp; building scalable SaaS platforms
              with React, Node.js, and Laravel
            </li>
            <li className="about-activity">
              <ImPointRight /> Deep Learning &amp; ML engineering — from NLP and
              computer vision to predictive analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> Automation tools, trading systems, and custom
              internal workflow tooling
            </li>
            <li className="about-activity">
              <ImPointRight /> Systems programming, performance optimization,
              and complex algorithmic problem solving
            </li>
          </ul>

          <blockquote className="about-quote">
            <p>
              &ldquo;Strive not only to write code that works, but to engineer
              intelligent systems that truly solve real-world problems.&rdquo;
            </p>
            <footer className="blockquote-footer">Muhammad Aqib Ali</footer>
          </blockquote>
        </Card.Body>
      </Card>

      <div className="principles-section">
        <h3 className="principles-heading">
          How I <span className="purple">Approach</span> Every Project
        </h3>
        <div className="principles-grid">
          {principles.map((principle, idx) => (
            <div
              className="principle-card"
              key={principle.title}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="principle-icon">{principle.icon}</div>
              <h4>{principle.title}</h4>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
