import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import cvPdf from "../Assets/cv_aqib.pdf";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname, location.hash]);

  const go = (event, section) => {
    event.preventDefault();
    setExpanded(false);
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element && location.hash === `#${section}`) element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location.hash !== `#${section}`) navigate(`/#${section}`, { replace: true });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <Navbar expanded={expanded} fixed="top" expand="lg" className={scrolled ? "sticky portfolio-nav" : "navbar portfolio-nav"}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex brand-mark" onClick={() => setExpanded(false)}>MA.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" onClick={() => setExpanded(!expanded)}>
          <span></span><span></span><span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="/#home" onClick={(e) => go(e, "home")}><AiOutlineHome /> Home</Nav.Link>
            <Nav.Link href="/#about-anchor" onClick={(e) => go(e, "about-anchor")}><AiOutlineUser /> About</Nav.Link>
            <Nav.Link as={Link} to="/project" onClick={() => setExpanded(false)}><AiOutlineFundProjectionScreen /> Projects</Nav.Link>
            <Nav.Link href="/#contact" onClick={(e) => go(e, "contact")}><AiOutlineMail /> Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}><CgFileDocument /> Resume</Nav.Link>
            <Nav.Item><Button href={cvPdf} target="_blank" rel="noopener noreferrer" className="fork-btn-inner fork-btn-cv-inner" aria-label="Open CV"><AiOutlineDownload /> CV</Button></Nav.Item>
            <Nav.Item><Button href="https://github.com/MuhammadAqibAli53/Portfolio" target="_blank" rel="noopener noreferrer" className="fork-btn-inner" aria-label="View portfolio source on GitHub">GitHub</Button></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
