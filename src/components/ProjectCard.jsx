import { useState } from "react";

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <article
      className={`project-card ${isFlipped ? "is-flipped" : ""}`}
      tabIndex="0"
      aria-label={`Flip project card for ${project.title}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      <div className="project-card-inner">
        <div className="project-face project-front">
          <div className="project-front-content">
            <div className="project-front-top">
              <h3 className="project-title">{project.title}</h3>

              <div
                className="project-links"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  className="project-icon-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.79-4.57 5.05.36.32.69.95.69 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <p className="project-subtitle">{project.subtitle}</p>
            <span className="project-flip-hint">Flip me</span>
          </div>
        </div>

        <div className="project-face project-back">
          <div className="project-back-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <ul className="project-bullets">
              {project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;