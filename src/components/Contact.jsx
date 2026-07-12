import React from 'react';

export default function Contact({ socialLinks }) {
  return (
    <section id="contact" className="section contact reveal">
      <div className="contact-panel">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something useful.</h2>
        <div className="contact-list">
          <a className="contact-email button primary" href="mailto:frankoliverbentoy23@gmail.com">
            frankoliverbentoy23@gmail.com
          </a>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
              >
                <img src={`/Icon/${link.icon}`} alt={link.label} loading="lazy" />
              </a>
            ))}
          </div>
          <span className="contact-location">Cebu City, Philippines</span>
        </div>
      </div>
    </section>
  );
}
