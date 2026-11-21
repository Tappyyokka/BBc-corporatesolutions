import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FaArrowRight,
  FaBars,
  FaCheckCircle,
  FaEnvelope,
FaPhoneAlt,
FaMapMarkerAlt,
  FaGlobe,
  FaHandshake,
  FaTimes,
} from "react-icons/fa";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Financial Services",
    description:
      "Financial solutions and loan assistance to help individuals and businesses move forward.",
    items: [
      "Home Loan Assistance",
      "Business Loan Assistance",
      "Personal Loan Assistance",
      "Loan Against Property",
    ],
  },
  {
    number: "02",
    title: "Legal Services",
    description:
      "Professional assistance for registrations, documentation, and business compliance.",
    items: [
      "Company Registration",
      "GST Registration",
      "FSSAI Registration",
      "Legal Documentation",
    ],
  },
  {
    number: "03",
    title: "Media & Branding",
    description:
      "Promote your brand and connect with the right audience through media and publishing.",
    items: [
      "Business Promotion",
      "Media Publishing",
      "Branding Solutions",
      "Business Magazine Publishing",
    ],
  },
  {
    number: "04",
    title: "Jobs & Career",
    description:
      "Career guidance, recruitment, and placement assistance for job seekers and employers.",
    items: [
      "Job Consultancy",
      "Recruitment Services",
      "Job Placement Assistance",
      "Career Guidance",
    ],
  },
  {
    number: "05",
    title: "Business Development",
    description:
      "Business development and corporate advisory solutions to help your business grow.",
    items: [
      "Franchise Consulting",
      "Business Plan Preparation",
      "Startup Support",
      "Business Growth Consulting",
    ],
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 35 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-mark">BBC</span>
        <span className="brand-name">
          BBC CORPORATE
          <strong>SOLUTIONS</strong>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a
          href="#contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          Get in Touch <FaArrowRight />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="eyebrow-line" />
          ONE BRAND. MULTIPLE SOLUTIONS.
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Your Growth.
          <br />
          <span>Our Commitment.</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Connecting India. Empowering Businesses.
          <br />
          Corporate solutions for individuals, entrepreneurs,
          and growing businesses.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#services"
            className="button button-gold"
            whileHover={reduceMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Services <FaArrowRight />
          </motion.a>

          <motion.a
            href="#about"
            className="button button-outline"
            whileHover={reduceMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover BBC
          </motion.a>
        </motion.div>

        <Reveal delay={0.8}>
          <div className="hero-trust">
            <FaCheckCircle />
            A multi-service corporate solutions brand
          </div>
        </Reveal>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-image" />

        <div className="hero-image-caption">
          <span>Building opportunities</span>
          <strong>One connection at a time.</strong>
        </div>

        <motion.div
          className="hero-stamp"
          animate={reduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaGlobe />
          <span>Connecting India</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label">ABOUT BBC CORPORATE SOLUTIONS</div>

      <div className="about-grid">
        <Reveal>
          <h2>
            One trusted destination
            <br />
            for <span>multiple solutions.</span>
          </h2>
        </Reveal>
      <Reveal delay={0.15}>
        <div className="about-copy">
          <p>
            BBC Corporate Solutions brings together a range of
            corporate services under one brand. We help individuals
            and businesses connect with the right services,
            opportunities, and professional support.
          </p>
          <a href="#services" className="text-link">
            Explore what we do <FaArrowRight />
          </a>
        </div>
      </Reveal>
      </div>

      <div className="about-stats">
        <div>
          <span>01</span>
          <p>One unified brand</p>
        </div>
        <div>
          <span>05</span>
          <p>Core service categories</p>
        </div>
        <div>
          <span>∞</span>
          <p>Opportunities to grow</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <div>
          <div className="section-label">WHAT WE OFFER</div>
          <h2>Solutions for every step.</h2>
        </div>
        <p>
          From financial assistance to business development,
          discover the services that help you move forward.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <motion.article
  className="service-card"
  key={service.number}
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.7,
    delay: Number(service.number) * 0.08,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -8,
    scale: 1.015,
  }}
  whileTap={{ scale: 0.99 }}
>
            <div className="service-top">
              <span className="service-number">{service.number}</span>
              <span className="service-arrow">
                <FaArrowRight />
              </span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className="service-link"
              aria-label={`Enquire about ${service.title}`}
            >
              Explore services <FaArrowRight />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="why-content">
        <div className="section-label">WHY BBC CORPORATE SOLUTIONS</div>
        <h2>
          Your goals deserve
          <br />
          <span>the right support.</span>
        </h2>
        <p>
          We bring multiple service categories together to make
          finding the right corporate support simpler.
        </p>
        <a href="#contact" className="button button-gold">
          Let’s Connect <FaArrowRight />
        </a>
      </div>

      <div className="why-points">
        {[
          "Multiple services under one brand",
          "Solutions for individuals and businesses",
          "A focus on growth and opportunity",
          "Professional service facilitation",
        ].map((item) => (
          <div className="why-point" key={item}>
            <FaCheckCircle />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <div className="section-label">LET’S WORK TOGETHER</div>
          <h2>
            Your next opportunity
            <br />
            starts with a <span>conversation.</span>
          </h2>
          <p>
            Tell us what you need. Our team will help you find
            the right service.
          </p>
        </div>

        <a href="#contact" className="button button-gold">
          Submit an Enquiry <FaArrowRight />
        </a>
      </div>

      <div className="contact-note">
        <FaHandshake />
        <p>
          Looking for a business partnership?
          <br />
          <a href="mailto:">Connect with our team</a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand-section">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">BBC</span>

            <span className="brand-name">
              BBC CORPORATE
              <strong>SOLUTIONS</strong>
            </span>
          </a>

          <p>
            Connecting India. Empowering Businesses.
            <br />
            Your growth. Our commitment.
          </p>

          <a href="#contact" className="footer-connect">
            Let’s work together
            <FaArrowRight />
          </a>
        </div>

        {/* Contact information */}
        <div className="footer-contact-section">
          <div className="section-label">
            GET IN TOUCH
          </div>

          <h3>We’re here to help.</h3>

          <div className="footer-contact-grid">

            <a
              href="mailto:your-email@example.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <span>
                <small>Email us</small>
                <strong>your-email@example.com</strong>
              </span>

              <FaArrowRight className="footer-contact-arrow" />
            </a>

            <a
              href="tel:+910000000000"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                <small>Call us</small>
                <strong>+91 00000 00000</strong>
              </span>

              <FaArrowRight className="footer-contact-arrow" />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kozhikode+Kerala"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <span>
                <small>Our location</small>
                <strong>Your Office Address, India</strong>
              </span>

              <FaArrowRight className="footer-contact-arrow" />
            </a>

          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">

        <span>
          © {currentYear} BBC Corporate Solutions.
          All rights reserved.
        </span>

        <div className="footer-bottom-links">
          <a href="#contact">Contact</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Disclaimer</a>
        </div>

        <a href="#home" className="back-to-top">
          Back to top
          <span>↑</span>
        </a>

      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}