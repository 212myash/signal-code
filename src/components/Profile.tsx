import { DOMAINS, PERSON } from "../data/portfolio";

export function Profile() {
  return (
    <section className="section profile-section" id="about">
      <div className="section-number">
        <span>01</span>
        <small>PROFILE</small>
      </div>

      <div className="profile-main">
        <h2>
          COMPUTER SCIENCE
          <br />
          <span>MEETS REAL-WORLD</span>
          <br />
          <strong>TECHNOLOGY.</strong>
        </h2>

        <div className="profile-description">
          <p>
            {PERSON.name} is a Computer Science Engineering student focused on
            Data Science, Analytics and technology.
          </p>

          <p>
            Her work combines programming, data analysis and practical
            technology — turning raw information into meaningful insights and
            real-world solutions.
          </p>
        </div>

        <div className="domain-grid">
          {DOMAINS.map((domain) => (
            <article className="domain-card" key={domain.number}>
              <div className="domain-top">
                <span>{domain.number}</span>
                <span>→</span>
              </div>

              <h3>{domain.title}</h3>

              <div className="tag-list">
                {domain.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <p>{domain.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}