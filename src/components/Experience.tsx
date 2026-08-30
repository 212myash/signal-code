import { EXPERIENCE } from "../data/portfolio";

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <div>
          <span className="section-index">02</span>
          <span className="section-label">EXPERIENCE</span>
        </div>

        <span className="section-side">WORK / 2026</span>
      </div>

      <div className="experience-content">
        <div className="experience-title">
          <p>INTERNSHIP</p>

          <h2>
            {EXPERIENCE.role}
          </h2>

          <h3>{EXPERIENCE.company}</h3>
        </div>

        <div className="experience-info">
          <div>
            <span>PERIOD</span>
            <strong>{EXPERIENCE.period}</strong>
          </div>

          <div>
            <span>LOCATION</span>
            <strong>{EXPERIENCE.location}</strong>
          </div>
        </div>

        <div className="responsibility-list">
          {EXPERIENCE.responsibilities.map((item, index) => (
            <div className="responsibility" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}