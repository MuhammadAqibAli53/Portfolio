import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineClockCircle,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineSend,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const CONTACT_EMAIL = "m.aqibali2005@gmail.com";
const CONTACT_PHONE = "+92 321 9052144";
const CONTACT_LOCATION = "Gujranwala, Pakistan";

const contactInfo = [
  {
    icon: <AiOutlineMail />,
    title: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    sub: "I typically respond within 1 hour",
    accent: "#22d3ee",
  },
  {
    icon: <AiOutlinePhone />,
    title: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
    sub: "Mon – Fri, 9 AM – 7 PM PKT",
    accent: "#8b5cf6",
  },
  {
    icon: <AiOutlineEnvironment />,
    title: "Location",
    value: CONTACT_LOCATION,
    href: "https://maps.google.com/?q=Gujranwala,Pakistan",
    sub: "Open to remote & hybrid worldwide",
    accent: "#34d399",
  },
  {
    icon: <AiOutlineClockCircle />,
    title: "Working Hours",
    value: "Mon – Sat",
    href: "#",
    sub: "9:00 AM – 8:00 PM PKT",
    accent: "#f59e0b",
  },
];

const inquiryTypes = [
  "Full-Time Role",
  "Freelance Project",
  "Consultation",
  "Collaboration",
  "Other",
];

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  inquiryType: "Freelance Project",
  message: "",
};

function Contact({ standalone = true }) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `[Portfolio] ${formState.inquiryType} — ${formState.subject}`;
    const body = `Name: ${formState.name}
Email: ${formState.email}
Inquiry Type: ${formState.inquiryType}
Subject: ${formState.subject}

Message:
${formState.message}`;
    
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const formClasses = standalone ? "contact-page-form" : "contact-home-form";
  const wrapperClasses = standalone ? "contact-page-wrapper" : "contact-home-wrapper";
  const sectionClass = standalone ? "contact-section" : "contact-home-section";

  return (
    <section>
      {standalone && <Particle />}
      <Container fluid className={sectionClass} id="contact">
        <Container className={standalone ? "pt-2" : ""}>
          {standalone ? (
            <div className="about-hero contact-hero">
              <span className="section-chip">Get in Touch</span>
              <h1 className="about-hero-title">
                Let&apos;s build something <span className="purple">exceptional together.</span>
              </h1>
              <p className="about-hero-subtitle">
                Have a project in mind, a role to discuss, or just want to say hi?
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <div className="section-header contact-header">
              <span className="section-chip">Contact Me</span>
              <h2 className="section-title">
                Ready to start a <span className="purple">project?</span>
              </h2>
              <p className="section-subtitle">
                Drop a message below and I will get back to you shortly.
              </p>
            </div>
          )}

          <div className={wrapperClasses}>
            <Row className="align-items-stretch contact-grid-row">
              <Col lg={5} md={5} className="contact-info-col">
                <div className="contact-info-shell">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <p className="contact-info-subtitle">
                    Prefer another channel? Reach out directly through any of these.
                  </p>

                  <div className="contact-info-list">
                    {contactInfo.map((item) => (
                      <a
                        href={item.href}
                        className="contact-info-item"
                        target="_blank"
                        rel="noreferrer"
                        key={item.title}
                      >
                        <span
                          className="contact-info-icon"
                          style={{ borderColor: `${item.accent}50` }}
                        >
                          <span style={{ color: item.accent }}>{item.icon}</span>
                        </span>
                        <div className="contact-info-text">
                          <span className="contact-info-label">{item.title}</span>
                          <span className="contact-info-value">{item.value}</span>
                          <span className="contact-info-sub">{item.sub}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="contact-social-card-divider"></div>

                  <div className="contact-social-connect">
                    <h4 className="contact-social-heading">Find me on social</h4>
                    <div className="contact-social-links">
                      <a
                        href="https://github.com/MuhammadAqibAli53"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-social-icon"
                        aria-label="GitHub"
                        title="GitHub"
                      >
                        <AiFillGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/muhammad-aqib-ali453?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-social-icon"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href="https://x.com/ranaaqib06"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-social-icon"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={7} md={7} className="contact-form-col">
                <div className={`contact-form-shell ${formClasses}`}>
                  <h3 className="contact-form-title">Send me a message</h3>
                  <p className="contact-form-subtitle">
                    I review every message personally. Expect a reply within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="contact-form-content">
                    <Row className="form-row">
                      <Col md={6} sm={12} className="form-col">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            <AiOutlineUser className="form-label-icon" /> Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control contact-input"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6} sm={12} className="form-col">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            <AiOutlineMail className="form-label-icon" /> Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control contact-input"
                            placeholder="you@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row className="form-row">
                      <Col md={6} sm={12} className="form-col">
                        <div className="form-group">
                          <label htmlFor="inquiryType" className="form-label">
                            Inquiry Type
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            className="form-control contact-input contact-select"
                            value={formState.inquiryType}
                            onChange={handleChange}
                          >
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Col>
                      <Col md={6} sm={12} className="form-col">
                        <div className="form-group">
                          <label htmlFor="subject" className="form-label">
                            <AiOutlineMessage className="form-label-icon" /> Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control contact-input"
                            placeholder="How can I help you?"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        <AiOutlineMessage className="form-label-icon" /> Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="form-control contact-input contact-textarea"
                        placeholder="Tell me about your project, timeline, budget..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="hero-action primary-action contact-submit-btn"
                    >
                      <AiOutlineSend className="hero-action-icon" /> Send Message
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;