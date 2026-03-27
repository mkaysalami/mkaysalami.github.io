import "../styles/experience.css";

function Experience() {
  return (
    <section id="experiences">
      <h2>Experience</h2>

      <div className="experience-list">
        <article className="exp-card">
          <div className="exp-summary">
            <div className="exp-left">
              <span className="exp-role">
                Data Science and Artificial Intelligence Intern
              </span>
              <span className="exp-org">
                Dataset Nexus Tech · 📍United Arab Emirates (Remote)
              </span>
            </div>
            <div className="exp-right">
              <span className="exp-date">Jan 2022 – Jun 2022</span>
            </div>
          </div>

          <div className="exp-body">
            <ul className="exp-bullets">
              <li>
                Contributed to the development and improvement of algorithms used in existingnmodels.
              </li>
              <li>
                Introduced statistical tools and technical methods to improve team workflows and analytical capabilities.
              </li>
              <li>
                Collaborated across teams to support the development, management, and delivery of data models.
              </li>
              <li>
                Conducted analysis to identify trends or patterns in datasets.
              </li>
              <li>
                Generated reports presenting results in an easy-to-understand manner.
              </li>
              <li>
                Cleaned and manipulated raw data using statistical software.
              </li>
              <li>
                Processed large datasets using statistical tools.
              </li>
              <li>
                Also, worked as a Data Science Instructor during the course of internship.
              </li>
            </ul>
          </div>
        </article>

        <article className="exp-card">
          <div className="exp-summary">
            <div className="exp-left">
              <span className="exp-role">Data Engineer</span>
              <span className="exp-org">
                Dataset Nexus Tech · 📍United Arab Emirates (Remote)
              </span>
            </div>
            <div className="exp-right">
              <span className="exp-date">Jun 2022 – Feb 2023</span>
            </div>
          </div>

          <div className="exp-body">
            <ul className="exp-bullets">
              <li>
                Queried, transformed and prepared data from source to deliver production-ready datasets for users.
              </li>
              <li>
                Built conceptual, logical, and physical data models for different business areas.
              </li>
              <li>
                Supported data modelling efforts by aligning technical structure with business requirements and reporting needs.
              </li>
              <li>
                Extracted and processed data using Python, MySQL, and PostgreSQL.
              </li>
            </ul>
          </div>
        </article>

        <article className="exp-card">
          <div className="exp-summary">
            <div className="exp-left">
              <span className="exp-role">Part-Time Sales Associate</span>
              <span className="exp-org">
                Canadian Tire Corporation · 📍St. John’s, NL
              </span>
            </div>
            <div className="exp-right">
              <span className="exp-date">Aug 2023 – Present</span>
            </div>
          </div>

          <div className="exp-body">
            <ul className="exp-bullets">
              <li>
                Delivered friendly customer service by assisting customers with product questions and recommendations.
              </li>
              <li>
                Helped maintain an organized sales floor through restocking and merchandise arrangement.
              </li>
              <li>
                Strengthened communication, teamwork and problem-solving skills in a fast-paced environment.
              </li>
            </ul>
          </div>
        </article>

        <article className="exp-card">
          <div className="exp-summary">
            <div className="exp-left">
              <span className="exp-role">Peer Learning Coach</span>
              <span className="exp-org">
                Memorial University · 📍St. John’s, NL
              </span>
            </div>

            <div className="exp-right">
              <span className="exp-date">May 2024 – Sep 2025</span>
            </div>
          </div>

          <div className="exp-body">
            <ul className="exp-bullets">
              <li>
                Tutored students in Mathematics, supporting strong homework completion rates.
              </li>
              <li>
                Applied critical thinking and tailored support strategies to address student learning challenges and progress.
              </li>
              <li>
                Mentored 4–5 students with proactive outreach, progress tracking and individualized assistance.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;