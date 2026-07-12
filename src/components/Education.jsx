import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Experience & Education</p>
        <h2>Learning path</h2>
      </div>
      <div className="timeline">
        {education.map((item) => (
          <article key={item.title}>
            <time>{item.year}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
