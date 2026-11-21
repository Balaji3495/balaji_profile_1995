import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 — Experience</p>
          <h2 className="section__title">Where I've worked.</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} className="timeline__item" delay={i * 90}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="chip chip--mono">{job.period}</span>
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
