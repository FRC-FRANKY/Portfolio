import React from 'react';

export default function Stats({ stats }) {
  return (
    <section className="stats section reveal" aria-label="Portfolio statistics">
      {stats.map(([value, label]) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}
