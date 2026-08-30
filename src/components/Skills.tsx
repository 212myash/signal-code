import { SKILLS } from "../data/portfolio";

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <div>
          <span className="section-index">04</span>
          <span className="section-label">TECHNICAL SYSTEM</span>
        </div>

        <span className="section-side">CAPABILITIES</span>
      </div>

      <div className="skills-list">
        {SKILLS.map((skill, index) => (
          <div className="skill-row" key={skill.category}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{skill.category}</h3>

            <div className="skill-items">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}