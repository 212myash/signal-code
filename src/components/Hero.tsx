import { PERSON } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-meta">
          <span>PORTFOLIO / 2026</span>
          <span>{PERSON.field}</span>
        </div>

        <div className="hero-heading">
          <p className="eyebrow">DATA · CODE · SYSTEMS</p>

          <h1>
            <span>VAISHNAVI</span>
            <span className="orange">SONAWANE</span>
          </h1>
        </div>

        <div className="hero-footer">
          <p>
            Computer Science Engineering student focused on{" "}
            <strong>Data Science, Analytics & Technology.</strong>
          </p>

          <a href="#about" className="scroll-link">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}