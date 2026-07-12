import React from 'react';

export default function DesignProcess({ steps }) {
  return (
    <section className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Design Process</p>
        <h2>How I approach each project</h2>
      </div>
      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
