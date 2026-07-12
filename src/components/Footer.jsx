import React from 'react';

export default function Footer({ socialLinks }) {
  return (
    <footer>
      <div className="footer-socials">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
          >
            <img src={`/Icon/${link.icon}`} alt={link.label} loading="lazy" />
          </a>
        ))}
      </div>
      <p>Copyright@2026 Frank Oliver Bentoy. All rights reserved.</p>
      <a className="back-top" href="#home" aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </footer>
  );
}
