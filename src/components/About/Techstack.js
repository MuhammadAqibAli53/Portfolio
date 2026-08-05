import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiReact,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiTailwindcss
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact fontSize={"28px"} />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel fontSize={"28px"} />
        <div className="tech-icons-text">Laravel PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp fontSize={"28px"} />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"28px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize={"28px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch fontSize={"28px"} />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs fontSize={"28px"} />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"28px"} />
        <div className="tech-icons-text">Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript fontSize={"28px"} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript fontSize={"28px"} />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus fontSize={"28px"} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"28px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"28px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"28px"} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss fontSize={"28px"} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"28px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"28px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>
    </Row>
  );
}

export default Techstack;