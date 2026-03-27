import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let current = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) current = entry.target.id;
        });
        if (current) setActiveSection(current);
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
          />
          <label htmlFor="theme-switch" className="theme-switch-label">
            <span className="theme-switch-icon sun">☀</span>
            <span className="theme-switch-icon moon">🌙</span>
            <span className="theme-switch-knob"></span>
          </label>
        </div>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          "about",
          "experiences",
          "projects",
          "activities",
          "skills",
          "certifications",
          "contact",
        ].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;