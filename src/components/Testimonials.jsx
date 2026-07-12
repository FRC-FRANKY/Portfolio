import React from 'react';

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>How collaborators describe the work</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.title}>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>{testimonial.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
