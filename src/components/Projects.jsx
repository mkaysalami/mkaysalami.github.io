import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      title: "CloneStrike",
      subtitle: "December 2025 | Academic",
      github: "https://github.com/mkaysalami/CloneStrike",
      description:
        "A project-based application built to strengthen front-end development and component structuring skills.",
      bullets: [
        "Built a project interface with a clean and organized layout.",
        "Focused on reusable UI structure and front-end responsiveness.",
        "Strengthened practical React development skills through project building."
      ],
      tags: ["Unreal Engine", "Frontend", "UI"]
    },
    {
      title: "Crypto Dash",
      subtitle: "November 2025 | Academic",
      github: "https://github.com/mkaysalami/crypto-dash",
      description:
        "A React-based cryptocurrency dashboard that displays real-time cryptocurrency data.",
      bullets: [
        "Built a dashboard layout for exploring fast-changing crypto information.",
        "Focused on clear presentation of live or dynamic financial data.",
        "Improved React state and UI organization for dashboard-style apps."
      ],
      tags: ["React", "Dashboard", "API"]
    },
    {
      title: "Notes App",
      subtitle: "November 2025 | Academic",
      github:
        "https://github.com/mkaysalami/Modern-React-Mini-Projects/tree/main/notes-app",
      description:
        "A simple and responsive note-taking app designed for quick capture and organization.",
      bullets: [
        "Created an interface for writing, saving, and managing notes efficiently.",
        "Focused on usability and lightweight interaction patterns.",
        "Improved front-end structure for practical day-to-day tools."
      ],
      tags: ["JavaScript", "UI", "Productivity"]
    },
    {
      title: "Rating UI",
      subtitle: "November 2025 | Academic",
      github:
        "https://github.com/mkaysalami/Modern-React-Mini-Projects/tree/main/rating-ui",
      description:
        "A user rating interface focused on simple interaction and clean visual feedback.",
      bullets: [
        "Designed a compact and intuitive rating experience.",
        "Focused on interaction states and polished visual presentation.",
        "Strengthened UI development and responsive styling skills."
      ],
      tags: ["HTML", "CSS", "UI Design"]
    },
    {
      title: "Pontoon Game",
      subtitle: "September 2025 | Academic",
      github: "https://github.com/mkaysalami/pontoon-game",
      description:
        "A digital version of the classic pontoon card game with interactive gameplay logic.",
      bullets: [
        "Implemented game flow, rules, and user interaction patterns.",
        "Focused on logic handling and enjoyable play experience.",
        "Built confidence in structuring interactive game projects."
      ],
      tags: ["JavaScript", "Game Logic", "Interactive"]
    },
    {
      title: "Predicting Precipitation",
      subtitle: "September 2024 | Academic",
      github: "https://github.com/mkaysalami/predicting-precipitation",
      description:
        "A predictive modeling project focused on estimating precipitation from weather data.",
      bullets: [
        "Explored weather data to build predictive insights.",
        "Applied data cleaning and modeling workflows.",
        "Strengthened practical data analysis and machine learning skills."
      ],
      tags: ["Python", "Data Science", "ML", "R Studio"]
    },

    {
      title: "Portfolio Website",
      subtitle: "December 2025 | Personal",
      github: "https://github.com/mkaysalami/mkaysalami.github.io",
      description:
        "A modern, sophisticated React portfolio website with smooth animations, responsive design, and elegant UI. Built with React, Vite, and modern CSS. Features component-based architecture, intersection observer animations, and a professional design.",
      bullets: [
        "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, and experience.",
        "Built interactive front-end components to improve nagivation, usability, and presentation.",
        "Applied modern, mobile-friendly design principles to create a clean professional user experience"
      ],
      tags: ["React", "CSS", "Vite", "HTML"]
    },

    {
      title: "Hospital Data Analysis",
      subtitle: "January 2026 | Personal",
      github: "https://github.com/mkaysalami/predicting-precipitation",
      description:
        "A data analysis project using SQL on Hosiptal Data.",
      bullets: [
        "Conducted data cleaning, exploration, and business analysis using SQL on hospital data.",
        "Wrote advanced SQL queries using CTEs and window functions to identify trends and compare key metrics.",
        "Transformed raw data into structures, analysis-ready datasets to support deeper analysis and insight generation."
      ],
      tags: ["SQL"]
    },

    


  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;