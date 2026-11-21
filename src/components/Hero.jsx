import { profile, marquee } from "../data.js";
import { useTyping } from "../hooks.js";

export default function Hero() {
  const typed = useTyping(profile.roles);
  const track = [...marquee, ...marquee]; // duplicated for a seamless loop

  return (
    <section id="home" className="hero">
      <div className="blob blob--a" />
      <div className="blob blob--b" />
      <div className="blob blob--c" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">
          <span className="pulse" /> Available for new opportunities
        </p>

        <h1 className="hero__title">
          <span className="line"><span>Hi, I'm</span></span>
          <span className="line">
            <span className="gradient-text">{profile.name}.C</span>
          </span>
        </h1>

        <p className="hero__role">
          {profile.title} &mdash; <span className="typed">{typed}</span>
          <span className="caret" aria-hidden="true" />
        </p>

        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {track.map((item, i) => (
            <span key={i} className="marquee__item">
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
