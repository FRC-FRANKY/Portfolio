import React from 'react';

const getIconSVG = (iconKey) => {
  const icons = {
    frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
        <line x1="12" y1="12" x2="20" y2="7.5"></line>
        <line x1="12" y1="12" x2="12" y2="21"></line>
        <line x1="12" y1="12" x2="4" y2="7.5"></line>
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="12" y1="9" x2="12" y2="15"></line>
        <line x1="9" y1="12" x2="15" y2="12"></line>
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
        <path d="M3 12a9 3 0 0 0 18 0"></path>
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  };
  
  return icons[iconKey] || null;
};

export default function Skills({ skillGroups, skillIcons }) {
  return (
    <section id="skills" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical Toolkit</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-head">
              <span className="skill-icon">{getIconSVG(group.iconKey)}</span>
              <h3>{group.title}</h3>
            </div>
            {group.skills.map(([name, level]) => (
              <div className="skill-meter" key={name}>
                <div className="skill-meter-header">
                  <span className="skill-badge" aria-hidden="true">
                    <img src={`/Icon/${skillIcons[name]}`} alt={`${name} icon`} loading="lazy" />
                  </span>
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <progress value={level} max="100" aria-label={`${name} proficiency ${level}%`} />
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
