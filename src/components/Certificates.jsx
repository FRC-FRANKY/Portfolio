import React from 'react';

export default function Certificates({ certificates, onOpen }) {
  return (
    <section id="certificates" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Certificates</p>
        <h2>Professional credentials</h2>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.title}>
            <button
              type="button"
              className="certificate-image-wrap"
              onClick={() => onOpen(certificate.imageUrl)}
              aria-label={`View ${certificate.title} full screen`}
            >
              <img src={certificate.imageUrl} alt={certificate.title} loading="lazy" />
            </button>
            <span className="certificate-year">{certificate.date}</span>
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            <div className="certificate-meta">{certificate.issuer}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
