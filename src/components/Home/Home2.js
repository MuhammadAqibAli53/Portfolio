import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Software Engineer who bridges the gap between scalable full-stack web architectures and intelligent AI/ML systems.
              <br />
              <br />
              I am fluent in core languages and technologies including
              <i>
                <b className="purple">
                  {" "}
                  JavaScript/TypeScript, PHP, Python, and C++{" "}
                </b>
              </i>
              — allowing me to build across the entire stack.
              <br />
              <br />
              My key areas of expertise include developing decoupled
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications (React.js & Laravel PHP),{" "}
                </b>
              </i>
              designing custom
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning & Deep Learning models,{" "}
                </b>
              </i>
              and building algorithmic automation tools.
              <br />
              <br />
              Whenever possible, I apply my passion for clean architecture by developing modern SPAs with
              <b className="purple"> React.js </b> and robust REST APIs using{" "}
              <i>
                <b className="purple">Laravel PHP</b> and the{" "}
                <b className="purple">MERN Stack</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;