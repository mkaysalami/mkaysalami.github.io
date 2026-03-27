import image from "../assets/image.jpg";
import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="about-header">
        <img
          src={image}
          alt="Profile"
          className="profile-pic"
        />

        <div className="about-header-text">
          <p className="intro-text">Hello and Welcome!</p>
          <h1 className="fade-in-delay-1">My name is Motolani</h1>
          <h2 className="fade-in-delay-2">Pronounced "Mo-toh-la-knee"</h2>

          <div className="about-me">
            <p>
              I’m a third-year Computer Science student with a minor in
              Mathematics at{" "}
              <a
                href="https://www.mun.ca/main/become-a-student/"
                target="_blank"
                rel="noreferrer"
              >
                Memorial University of Newfoundland
              </a>
              . I’m passionate about Data Science, with hands-on experience in
              data visualization and analysis through projects that transform
              complex data into clear, actionable insights.
            </p>

            <p>
              I also enjoy building apps and websites, blending functionality
              with an engaging user experience, and I have some experience in
              Game Development. My toolkit includes HTML, CSS, JavaScript,
              React, Python, JupyterLab, Unreal Engine, and SQL for databases.
            </p>

            <p>
              I thrive on tackling challenging problems and turning ideas into
              tangible projects. Outside of coding, I enjoy watching movies,
              sleeping, and volunteering. I’m always eager to learn new
              technologies and collaborate on projects that make a meaningful
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;