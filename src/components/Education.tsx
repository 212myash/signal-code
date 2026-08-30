import { EDUCATION } from "../data/portfolio";

export function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-heading">
        <div>
          <span className="section-index">05</span>
          <span className="section-label">EDUCATION</span>
        </div>

        <span className="section-side">ACADEMIC PATH</span>
      </div>

      <div className="education-list">
        {EDUCATION.map((item, index) => (
          <article className="education-card" key={item.school}>
            <div className="education-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="education-main">
              <span>{item.period}</span>

              <h2>{item.degree}</h2>

              <h3>{item.school}</h3>

              <p>{item.place}</p>
            </div>

            <div className="education-score">
              <span>RESULT</span>
              <strong>{item.score}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}