import React from 'react';

export default function Hero({ details }) {
  return (
    <section id="home" className="hero section">
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="hero-content reveal">
        <p className="eyebrow">Available for full-time junior roles</p>
        <h1>{details.name}</h1>
        <h2>{details.role}</h2>
        <p>{details.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects</a>
          <a className="button ghost" href="#contact">Contact Me</a>
          <a className="button subtle" href={details.resume} download>Download Resume</a>
        </div>
      </div>
      <div className="profile-card reveal">
        <img src={details.image} alt={details.name} className="profile-image" />
        <div className="profile-meta">
          {details.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
