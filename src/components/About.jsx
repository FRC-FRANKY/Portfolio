import React from 'react';

export default function About({ aboutCopy }) {
  return (
    <section id="about" className="section split reveal">
      <div>
        <p className="eyebrow">About Me</p>
        <h2>Practical developer eager to continue improving.</h2>
      </div>
      <div className="text-stack">
        {aboutCopy.map((copy, index) => (
          <p key={index}>{copy}</p>
        ))}
      </div>
    </section>
  );
}
