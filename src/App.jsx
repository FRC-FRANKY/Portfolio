import { useEffect, useMemo, useState } from 'react';
import React from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Timeline', 'Testimonials', 'Contact'];

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'FE',
    skills: [
      ['HTML', 92],
      ['CSS', 90],
      ['JavaScript', 70],
      ['React', 70]
    ]
  },
  {
    title: 'Backend Development',
    icon: 'BE',
    skills: [
      ['Node.js', 70],
      ['ASP.NET', 70],
      ['C#', 70]
    ]
  },
  {
    title: 'Mobile Development',
    icon: 'MD',
    skills: [
      ['Kotlin', 60],
      ['Android Studio', 60]
    ]
  },
  {
    title: 'Database',
    icon: 'DB',
    skills: [
      ['SQL Server', 85],
      ['MySQL', 84],
      ['Firebase', 87]
    ]
  },
  {
    title: 'Tools',
    icon: 'TL',
    skills: [
      ['Git', 75],
      ['GitHub', 86],
      ['VS Code', 92],
      ['Figma', 77]
    ]
  }
];

const projects = [
  {
    title: 'SafeCommute+',
    category: 'Web',
    description: 'AI-POWERED PUBLIC TRANSPORTRISK DETECTION WITH REAL-TIME CROWD ANALYTICS',
    tech: ['React', 'NodeJS', 'Firebase'],
    imageClass: 'project-safecommute',
    link: 'https://safe-commute-8rt8ecpu2-frankys-projects-15721699.vercel.app',
    linkLabel: 'View SafeCommute+'
  },
  {
    title: 'EventHub',
    category: 'Web',
    description: 'A React productivity app for managing event planning and scheduling for birthday party festival etc. .',
    tech: ['React', 'NodeJS'],
    imageClass: 'project-eventhub',
    link: 'https://gitbam.vercel.app/',
    linkLabel: 'View EventHub'
  },
  {
    title: 'Portfolio Website',
    category: 'Web',
    description: 'A responsive personal website with smooth animations, project filtering, and accessible contact flows.',
    tech: ['React', 'CSS', 'JavaScript'],
    imageClass: 'project-portfolio',
    link: 'https://portfolio-lovat-chi-18.vercel.app',
    linkLabel: 'View Portfolio'
  },
  {
    title: 'Admin System for Booking Appointments',
    category: 'Web',
    description: 'An administrative interface for managing appointment bookings, client information, and scheduling.',
    tech: ['Node.js', 'Firebase', 'React'],
    imageClass: 'project-admin-booking',
    link: 'https://el-ventures-booking-system-and-inve-sigma.vercel.app/',
    linkLabel: 'View Admin System'
  },
  
];

const timeline = [
  ['2026', 'Bachelor of Science in Information Technology', 'Currently building strong foundations in software developmentq, database systems, and IT project management.'],
];

const certificates = [
  {
    title: 'AI Evolution: Trends Shaping Tomorrow',
    issuer: 'Techonology Seminar',
    date: '2026',
    description: 'A seminar that explores the latest developments in artificial intelligence, emerging technologies, and their impact on the future of work, innovation, and everyday life.',
    imageUrl: '/Certificate/AI Evolution.png'
  },
  {
    title: 'Project Management and IT Interns Preparedness',
    issuer: 'Technology Seminar',
    date: '2026',
    description: 'A seminar that discusses essential project management skills and strategies to help IT interns become workplace-ready, improve teamwork, and successfully contribute to projects.',
    imageUrl: '/Certificate/Project Management.png'
  },
  {
    title: 'AI: Expectation vs Reality',
    issuer: 'Technology Seminar',
    date: '2026',
    description: 'A seminar that examines common perceptions about artificial intelligence, separates myths from facts, and discusses its real-world capabilities, limitations, and impact on society',
    imageUrl: '/Certificate/AI Expectation vs Reality.png'
  },
  {
    title: 'Human-AI Collaboration: Ethics and Balance in Workplace',
    issuer: 'Technology Seminar',
    date: '2026',
    description: 'A seminar that explores how humans and AI can work together effectively, emphasizing ethical considerations, responsible AI use, and maintaining a balanced and productive workplace.',
    imageUrl: '/Certificate/Human-AI Collaboration.png'
  }
];

const testimonials = [
  ['Reliable and curious', 'Frank turns requirements into clean screens quickly and explains technical decisions.'],
  ['Great team mindset', 'A thoughtful developer who asks useful questions, documents work, and keeps improving the user experience.'],
  ['Professional delivery', 'The project was responsive, organized, and polished enough to present to stakeholders.']
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [filter, setFilter] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Go to home">
          <span>FB</span>
          Frank Oliver Bentoy
        </a>
        <nav aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <button className="icon-button" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">
          {theme === 'dark' ? 'LT' : 'DK'}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="particles" aria-hidden="true">
            {Array.from({ length: 18. }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="hero-content reveal">
            <p className="eyebrow">Available for full-time junior roles</p>
            <h1>Frank Oliver Bentoy</h1>
            <h2>Frontend Developer</h2>
            <p>
              I build responsive web, mobile, and database-driven applications with a focus on practical workflows,
              clean interfaces, and maintainable code.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button ghost" href="#contact">Contact Me</a>
              <a className="button subtle" href="/Resume.pdf" download>Download Resume</a>
            </div>
          </div>
          <div className="profile-card reveal">
              <img
                src="/images/FRANK.jpg"
                alt="Frank Oliver Bentoy"
                className="profile-image"
              />
            <div className="profile-meta">
              <span>React</span>
              <span>ASP.NET</span>
              <span>C#</span>
            </div>
          </div>
        </section>

        <section className="stats section reveal" aria-label="Portfolio statistics">
          {[
            ['5+', 'Projects Built'],
            ['3', 'Core Tech Areas'],
            ['4+', 'Years Learning'],
            ['80%', 'Growth Mindset']
          ].map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section split reveal">
          <div>
            <p className="eyebrow">About Me</p>
            <h2>Practical developer eager to continue improving.</h2>
          </div>
          <div className="text-stack">
            <p>
              I am a recent graduate in information technology, 
              focused on developing software that enhances productivity and facilitates clear communication. My current experience involves working with frontend interfaces.
            </p>
            <p>
              My career aspiration is to become a full-stack software developer, contributing effectively to production teams, 
              thoughtfully supporting clients, and continually learning modern engineering practices. 
              I have a strong interest in web development, UI design, and to exploring how technology can address everyday challenges.
            </p>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technical Toolkit</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-head">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                {group.skills.map(([name, level]) => (
                  <div className="skill-meter" key={name}>
                    <div>
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

        <section id="certificates" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Certificates</p>
            <h2>Professional credentials</h2>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.title}>
                {certificate.imageUrl && (
                  <button
                    type="button"
                    className="certificate-image-wrap"
                    onClick={() => setLightboxSrc(certificate.imageUrl)}
                    aria-label={`View ${certificate.title} full screen`}
                  >
                    <img src={certificate.imageUrl} alt={certificate.title} loading="lazy" />
                  </button>
                )}
                <span className="certificate-year">{certificate.date}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <div className="certificate-meta">{certificate.issuer}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="filter-bar" aria-label="Project filters">
            <button
              type="button"
              className="button ghost"
              onClick={() => window.open('https://github.com/FRC-FRANKY', '_blank', 'noopener,noreferrer')}
              aria-label="Open GitHub profile"
            >
              GITHUB
            </button>
          </div>
          <p className="github-note">Want to see other projects? Click the GitHub button above to view more repositories.</p>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-image ${project.imageClass}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-body">
                  <p className="project-type">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
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

        <section id="timeline" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Experience & Education</p>
            <h2>Learning path</h2>
          </div>
          <div className="timeline">
            {timeline.map(([year, title, copy]) => (
              <article key={title}>
                <time>{year}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>How collaborators describe the work</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([title, quote]) => (
              <figure key={title}>
                <blockquote>{quote}</blockquote>
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Let's build something useful.</h2>
            <div className="contact-list">
              <a className="contact-email button primary" href="mailto:frankoliverbentoy23@gmail.com">frankoliverbentoy23@gmail.com</a>
              <div className="contact-links">
                <a className="contact-link" href="https://github.com/FRC-FRANKY" target="_blank" rel="noreferrer">GitHub</a>
                <a className="contact-link" href="https://www.linkedin.com/in/frank-oliver-bentoy-33b116238" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="contact-link" href="https://facebook.com/frankybentoy23" target="_blank" rel="noreferrer">Facebook</a>
              </div>
              <span className="contact-location">Cebu City, Philippines</span>
            </div>
          </div>
          
        </section>
      </main>

      {lightboxSrc && (
        <div className="image-modal" role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
          <div className="image-modal-backdrop" />
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="image-modal-close"
              type="button"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={lightboxSrc} alt="Certificate full screen" />
          </div>
        </div>
      )}

      <footer>
        <div className="footer-socials">
          <a href="https://github.com/FRC-FRANKY" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/frank-oliver-bentoy-33b116238" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://facebook.com/frankybentoy23" target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <p>Copyright 2026 Frank Oliver Bentoy. All rights reserved.</p>
        <a className="back-top" href="#home" aria-label="Back to top">Top</a>
      </footer>
    </div>
  );
}

export default App;
