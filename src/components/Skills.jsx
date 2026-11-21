import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 — Skills</p>
          <h2 className="section__title">The toolbox.</h2>
        </Reveal>

        <div className="skills">
          {skills.map((group, gi) => (
            <Reveal key={group.group} className="skill-group" delay={gi * 70}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item, i) => (
                  <li key={item} style={{ "--i": i }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
