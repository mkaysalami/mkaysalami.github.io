import "../styles/skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "SQL",  "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks/Libraries",
      skills: ["React", "Node.js", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Unreal Engine"]
    },
    {
      title: "Tools/Platforms",
      skills: ["GitHub", "JupyterLab", "Tableau", "MySQL", "PostgreSQL", "Microsoft Excel", "Google Workspace"]
    },
    {
      title: "Concepts",
      skills: [
        "Data Structures and Algorithms",
        "Statistical Analysis",
        "Object-Oriented Programming",
        "Database Systems",
        "Web Development",
        "Marketing Analysis",
        "Visual Computing and Games",
        "Data Analysis and Visualization"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Communication",
        "Time Management"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <h2>Skills</h2>
      </div>

      <div className="skills-wrapper">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;