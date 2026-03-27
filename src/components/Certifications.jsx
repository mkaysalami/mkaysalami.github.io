import "../styles/certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-heading">
        <h2>Certifications</h2>
      </div>

      <div className="certifications-underline"></div>

      <div className="certifications-card-wrapper">
        <a
          href="https://www.linkedin.com/in/motolani-kay-salami-1b7b51246/"
          target="_blank"
          rel="noreferrer"
          className="certifications-card"
        >
          <div className="certifications-icon">✦</div>

          <p>
            View all certifications on <span>LinkedIn</span>
          </p>
        </a>
      </div>
    </section>
  );
}

export default Certifications;