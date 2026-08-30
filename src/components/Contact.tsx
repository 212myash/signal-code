import { PERSON } from "../data/portfolio";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />

      <div className="contact-inner">
        <div className="contact-label">
          <span>07</span>
          <small>CONTACT</small>
        </div>

        <div className="contact-content">
          <p>HAVE A PROJECT / OPPORTUNITY?</p>

          <h2>
            LET'S
            <br />
            <span>TALK.</span>
          </h2>

          <a className="email-link" href={`mailto:${PERSON.email}`}>
            {PERSON.email}
            <span>↗</span>
          </a>

          <div className="social-links">
            <a href={PERSON.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>

            <a href={PERSON.github} target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>

            <a href={`tel:${PERSON.phone}`}>
              {PERSON.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}