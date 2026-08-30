import { useState } from "react";
import { NAV_ITEMS } from "../data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#top" className="logo">
        VAISHNAVI<span>.</span>
      </a>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-talk">
        LET'S TALK <span>↗</span>
      </a>

      <button
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>
    </header>
  );
}