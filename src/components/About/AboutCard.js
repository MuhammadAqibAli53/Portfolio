import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I am <span className="purple">Muhammad Aqib Ali</span>{" "}
            from <span className="purple">Gujranwala, Pakistan</span>.
            <br />
            I am a Software Engineer and Computer Science student specializing in{" "}
            <span className="purple">Full-Stack Web Development</span> and{" "}
            <span className="purple">Artificial Intelligence / Machine Learning</span>.
            <br />
            I build modern, decoupled web applications using <span className="purple">React.js</span> on the frontend and robust RESTful APIs with <span className="purple">Laravel PHP</span> and <span className="purple">Node.js</span>.
            <br />
            <br />
            Beyond standard web development, I actively work on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Deep Learning & Machine Learning Model Engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Algorithmic Trading Bots & Expert Advisors
            </li>
            <li className="about-activity">
              <ImPointRight /> Systems Programming & Compiler Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to engineer intelligent systems that solve real-world problems!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Aqib Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;