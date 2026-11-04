
import React, { useState } from "react";
import "./App.css";
import profileImage from "./assets/dharshan.jpg";

const promotions = [
  {
    title: "Promotion Video 01",
    category: "BRAND PROMOTION",
    video: "https://res.cloudinary.com/ber0rlsa/video/upload/v1793777063/promotion1.mov"
  },
  {
    title: "Promotion Video 02",
    category: "BRAND PROMOTION",
    video: "https://res.cloudinary.com/ber0rlsa/video/upload/v1793777169/promotion2.mov",
  },
   {
    title: "Promotion Video 03",
    category: "BRAND PROMOTION",
    video: "https://res.cloudinary.com/ber0rlsa/video/upload/v1793777295/promotion3.mov",
  },
  {
    title: "Promotion Video 04",
    category: "BRAND PROMOTION",
    video: "https://res.cloudinary.com/ber0rlsa/video/upload/v1793777299/promotion4.mov",
  },
]

const reels = [
  {
    title: "Instagram Reel 01",
    video: "/videos/reels/reel1.mp4",
  },
  {
    title: "Instagram Reel 02",
    video: "/videos/reels/reel2.mp4",
  },
  {
    title: "Instagram Reel 03",
    video: "/videos/reels/reel3.mp4",
  },
   {
    title: "Instagram Reel 04",
    video: "/videos/reels/reel4.mp4",
  },
];

const services = [
  {
    number: "01",
    title: "Instagram Reels",
    description:
      "Creative and engaging short-form videos for social media platforms.",
  },
  {
    number: "02",
    title: "Business Promotion",
    description:
      "Promotional videos that help businesses present their products and services.",
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Professional cuts, transitions, effects and storytelling.",
  },
  {
    number: "04",
    title: "Color Grading",
    description:
      "Beautiful colors and cinematic looks to improve your videos.",
  },
  {
    number: "05",
    title: "Social Media Content",
    description:
      "Creative video content for brands, creators and businesses.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          DHARSHAN<span>.S</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#work" onClick={closeMenu}>My Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section" id="home">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot"></span>
                AVAILABLE FOR PROJECTS
              </div>

              <p className="hero-intro">HELLO, I'M DHARSHAN</p>

              <h1>
               MY EDIT
                <br />
            CAPTURING YOUR
               STORIES
                <br />
                <span>
                CREATING
               AN IMPACT
</span>
              </h1>

              <p className="hero-description">
                Video Editor specializing in creative storytelling,
                cinematic visuals and engaging social media content.
              </p>

              <div className="hero-buttons">
                <a href="#work" className="primary-button">
                  EXPLORE MY WORK <span>↗</span>
                </a>

                <a href="#contact" className="secondary-button">
                  CONTACT ME
                </a>
              </div>

              <div className="hero-tools">
                <span>CAPCUT</span>
                <span className="tool-divider">/</span>
                <span>ADOBE PREMIERE PRO</span>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo-glow"></div>

              <div className="hero-photo-frame">
                <img
                  src={profileImage}
                  alt="Darshan - Video Editor"
                  className="hero-photo"
                />
              </div>

              <div className="hero-photo-caption">
                <span className="status-dot"></span>
                VIDEO EDITOR
              </div>

              <span className="photo-star">✳</span>
              <span className="photo-tag">
                CAPCUT × PREMIERE PRO
              </span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>CREATIVE VIDEO EDITOR</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* WORK SECTION */}
        <section className="work-section section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">PORTFOLIO / 01</p>
              <h2>SELECTED <span>WORK</span></h2>
            </div>

            <p className="section-description">
              A collection of videos created with creativity,
              detail and storytelling.
            </p>
          </div>

          {/* PROMOTIONAL VIDEOS */}
          <div className="sub-heading">
            <h3>Promotional Videos</h3>
            <span>01 — 02</span>
          </div>

          <div className="promotion-grid">
            {promotions.map((item, index) => (
              <article className="video-card promotion-card" key={item.title}>
                <div className="video-wrapper promotion-video">
                <video
                src={item.video}
                autoPlay
                muted
                loop
                controls
                playsInline 
                preload="auto"
/>
                </div>

                <div className="video-info">
                  <div>
                    <p className="video-category">{item.category}</p>
                    <h4>{item.title}</h4>
                  </div>

                  <span className="video-number">
                    0{index + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* INSTAGRAM REELS */}
          <div className="sub-heading reels-heading">
            <h3>Instagram Reels</h3>
            <span>01-04</span>
          </div>

          <div className="reels-grid">
            {reels.map((item) => (
              <article className="video-card reel-card" key={item.title}>
                <div className="video-wrapper reel-video">
                  <video autoPlay muted loop playsInline controls>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                <div className="video-info">
                  <h4>{item.title}</h4>
                </div>
              </article>
            ))}
          </div>

          <div className="instagram-link">
            <a
              href="https://www.instagram.com/dharshan01/"
              target="_blank"
              rel="noreferrer"
            >
              VIEW MY INSTAGRAM <span>↗</span>
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section section" id="about">
          <div className="section-heading">
            <div>
              <p className="section-label">A LITTLE ABOUT ME / 02</p>
              <h2>BEHIND THE <span>EDITS</span></h2>
            </div>
          </div>

          <div className="about-layout">
            <div className="about-monogram">
              <span>DS</span>
              <div className="monogram-caption">CREATIVE MIND</div>
            </div>

            <div className="about-content">
              <p className="about-highlight">
                I believe every video has a story worth telling.
              </p>

              <p>
                I'm Dharshan, a creative video editor passionate about
                transforming ordinary footage into engaging visual stories.
                I enjoy creating promotional videos, Instagram Reels and
                social media content.
              </p>

              <p>
                My focus is on clean editing, smooth transitions,
                creative storytelling and cinematic visuals.
              </p>

              <div className="about-details">
                <div>
                  <span>NAME</span>
                  <strong>Dharshan</strong>
                </div>

                <div>
                  <span>ROLE</span>
                  <strong>Video Editor</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Creative Editing</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOFTWARE SECTION */}
        <section className="software-section section">
          <p className="section-label">MY CREATIVE TOOLKIT / 03</p>
          <h2>TOOLS I <span>USE.</span></h2>

          <div className="software-grid">
            <div className="software-card">
              <div className="software-icon">C</div>
              <h3>CapCut</h3>
              <p>Video Editing</p>
            </div>

            <div className="software-card">
              <div className="software-icon">Pr</div>
              <h3>Adobe Premiere Pro</h3>
              <p>Professional Editing</p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section section" id="services">
          <div className="section-heading">
            <div>
              <p className="section-label">WHAT I CAN DO / 04</p>
              <h2>MY <span>SERVICES</span></h2>
            </div>

            <p className="section-description">
              Creative solutions to make your content stand out
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <div className="service-item" key={service.number}>
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section" id="contact">
          <p className="section-label">HAVE A PROJECT IN MIND? / 05</p>

          <h2>
            LET'S CREATE
            <br />
            SOMETHING <span>MEMORABLE</span>
          </h2>

          <p className="contact-description">
            Have an idea or a project? Let's work together
            and turn your vision into reality.
          </p>

          <a
            href="https://www.instagram.com/dharshan01/"
            target="_blank"
            rel="noreferrer"
            className="primary-button contact-button"
          >
            CONTACT ME ON INSTAGRAM <span>↗</span>
          </a>

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/dharshan01/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        {/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/919751975902"
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with me on WhatsApp"
>
  <span>☏</span>
  WhatsApp
</a>
        <a href="#home" className="logo">
          DHARSHAN<span>.S</span>
        </a>

        <p>© {new Date().getFullYear()} DHARSHAN.S — ALL RIGHTS RESERVED</p>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
