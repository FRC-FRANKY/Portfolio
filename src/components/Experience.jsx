import React from 'react';



export default function Experience({ timeline }) {
  return (
    <section id="experience" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Experience & Education</p>
        <h2>Learning path</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
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
