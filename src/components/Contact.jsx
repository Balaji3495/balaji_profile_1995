import { useState } from "react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">05 — Contact</p>
          <h2 className="section__title contact__title">
            Let's build something <span className="gradient-text">great</span> together.
          </h2>
        </Reveal>

        <Reveal delay={100} className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button className="btn btn--ghost" onClick={copyEmail}>
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={160}>
          <ul className="contact__list">
            <li>
              <span>Phone</span>
              <a href="tel:+919042611793">{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <b>{profile.location}</b>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
