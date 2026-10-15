import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import CaseStudy from "./components/Projects/CaseStudy";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageMetadata from "./components/Projects/PageMetadata";
import "./style.css";
import "./App.css";
import "./portfolio-refinements.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <ScrollToTop />
        <PageMetadata />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
