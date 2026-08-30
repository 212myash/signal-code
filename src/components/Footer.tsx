import { PERSON } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{PERSON.name}</strong>
        <span> / COMPUTER SCIENCE ENGINEERING</span>
      </div>

      <div>
        <span>© 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}