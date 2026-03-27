import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Get in Touch 😊</h2>
      </div>

      <div className="contact-cards">
        <a
          href="mailto:mkkaysalami@mun.ca"
          className="contact-card email"
        >
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
        </a>

        <a
          href="https://www.linkedin.com/in/motolani-kay-salami-1b7b51246/"
          target="_blank"
          rel="noreferrer"
          className="contact-card linkedin"
        >
          <div className="contact-icon">
            <i className="fab fa-linkedin"></i>
          </div>
          <h3>LinkedIn</h3>

        </a>

        <a
          href="https://github.com/mkaysalami"
          target="_blank"
          rel="noreferrer"
          className="contact-card github"
        >
          <div className="contact-icon">
            <i className="fab fa-github"></i>
          </div>
          <h3>GitHub</h3>
        </a>
      </div>
    </section>
  );
}

export default Contact;