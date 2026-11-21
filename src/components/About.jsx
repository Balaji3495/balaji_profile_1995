import { profile, stats, education } from "../data.js";
import { useCountUp, useInView } from "../hooks.js";
import Reveal from "./Reveal.jsx";

function Stat({ value, suffix, label, active }) {
  const n = useCountUp(value, active);
  return (
    <div className="stat">
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">01 — About</p>
          <h2 className="section__title">Building fast, tidy interfaces that last.</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text" delay={80}>
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="edu">
              <span className="edu__label">Education</span>
              <strong>{education.degree}</strong>
              <span>
                {education.school} · {education.period}
              </span>
            </div>
          </Reveal>

          <div className="stats" ref={ref}>
            {stats.map((s) => (
              <Reveal key={s.label} className="stat-wrap" delay={120}>
                <Stat {...s} active={visible} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
