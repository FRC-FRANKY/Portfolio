import React from 'react';
import { socialLinks } from '../data/portfolio';

export default function Projects({ projects }) {
  const githubUrl = socialLinks.find((link) => link.label === 'GitHub')?.href || 'https://github.com/FRC-FRANKY';

  return (
    <section id="projects" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
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
      <div className="github-note">
        <p>Want to see more projects? Just click GitHub.</p>
        <a className="button primary" href={socialLinks.find((link) => link.label === 'GitHub')?.href || 'https://github.com/FRC-FRANKY'} target="_blank" rel="noreferrer noopener">
          Visit GitHub
        </a>
      </div>
    </section>
  );
}
