import React from 'react';

export default function Projects({ projects, categories, filter, setFilter }) {
  return (
    <section id="projects" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="filter-bar" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={filter === category ? 'button primary' : 'button ghost'}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className="project-image"
              style={{ backgroundImage: `url('/Projects/${project.imageFile}')` }}
              aria-hidden="true"
            />
            <div className="project-body">
              <p className="project-type">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer noopener">
                    {project.linkLabel ?? 'View Project'}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
