import { useState } from "react";
import { useActiveSection, useScrollProgress } from "../hooks.js";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ name }) {
  const active = useActiveSection(["home", ...links.map((l) => l.id)]);
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setOpen(false)}>
          {name}
          <span>.</span>C
        </a>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
