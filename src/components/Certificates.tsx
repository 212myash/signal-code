import {
  CERTIFICATES,
  CERTIFICATIONS,
} from "../data/portfolio";

export function Certificates() {
  return (
    <section className="section certificates-section">
      <div className="section-heading">
        <div>
          <span className="section-index">06</span>
          <span className="section-label">CERTIFICATES</span>
        </div>

        <span className="section-side">LEARNING / CREDENTIALS</span>
      </div>

      <div className="certificates-layout">
        <div className="certification-column">
          <p className="column-label">CERTIFICATIONS</p>

          {CERTIFICATIONS.map((item, index) => (
            <article className="certification-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>

              <time>{item.date}</time>
            </article>
          ))}
        </div>

        <div className="certificate-column">
          <p className="column-label">COURSES & CERTIFICATES</p>

          {CERTIFICATES.map((item, index) => (
            <article className="certificate-row" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>

              <span>↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}