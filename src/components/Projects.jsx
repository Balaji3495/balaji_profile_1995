import { useState } from "react";
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

function ProjectCard({ project, index }) {
  // Pointer-follow spotlight + subtle tilt, driven by CSS variables.
  const onMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--rx", `${((y / rect.height) - 0.5) * -6}deg`);
    el.style.setProperty("--ry", `${((x / rect.width) - 0.5) * 6}deg`);
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      className="project"
      style={{ "--delay": `${index * 70}ms` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="project__top">
        <span className={`badge badge--${project.type}`}>{project.type}</span>
        <span className="project__period">{project.period}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project__meta">
        {project.role} · {project.client}
      </p>
      <p className="project__desc">{project.description}</p>
      <ul className="project__tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 — Projects</p>
          <h2 className="section__title">Selected work.</h2>
        </Reveal>

        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "is-active" : ""}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* key on filter re-mounts the grid so the entrance animation replays */}
        <div className="projects" key={filter}>
          {visible.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
