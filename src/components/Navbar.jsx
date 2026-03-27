import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let currentSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.id;
          }
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">MKAY</div>

        <div className="theme-switch-wrap">
          <input
            type="checkbox"
            id="theme-switch"
            className="theme-switch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          />
          <label htmlFor="theme-switch" className="theme-switch-label">
            <span className="theme-switch-icon sun" aria-hidden="true">
              ☀
            </span>
            <span className="theme-switch-icon moon" aria-hidden="true">
              🌙
            </span>
            <span className="theme-switch-knob" aria-hidden="true"></span>
          </label>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#experiences"
            className={`nav-link ${activeSection === "experiences" ? "active" : ""}`}
          >
            Experiences
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#activities"
            className={`nav-link ${activeSection === "activities" ? "active" : ""}`}
          >
            Activities
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className={`nav-link ${activeSection === "certifications" ? "active" : ""}`}
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;