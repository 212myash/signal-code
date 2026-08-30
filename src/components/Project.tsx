import { PROJECT } from "../data/portfolio";

export function Project() {
  return (
    <section className="section project-section" id="projects">
      <div className="section-heading">
        <div>
          <span className="section-index">03</span>
          <span className="section-label">SELECTED PROJECT</span>
        </div>

        <span className="section-side">SYSTEM / 01</span>
      </div>

      <div className="project-layout">
        <div className="project-title">
          <p>01 / ENGINEERING PROJECT</p>

          <h2>
            {PROJECT.title}
            <span>{PROJECT.subtitle}</span>
          </h2>

          <div className="project-tech">
            {PROJECT.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-visual">
          <div className="signal-ring ring-one" />
          <div className="signal-ring ring-two" />
          <div className="signal-ring ring-three" />

          <div className="signal-core">
            <span>RF</span>
            <small>SIGNAL</small>
          </div>

          <div className="signal-line line-one" />
          <div className="signal-line line-two" />
          <div className="signal-line line-three" />
        </div>
      </div>

      <div className="project-details">
        {PROJECT.points.map((point, index) => (
          <div className="project-point" key={point}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}