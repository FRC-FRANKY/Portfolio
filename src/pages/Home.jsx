import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import About from '../components/About.jsx';
import Education from '../components/Education.jsx';
import Skills from '../components/Skills.jsx';
import Certificates from '../components/Certificates.jsx';
import Projects from '../components/Projects.jsx';
import Experience from '../components/Experience.jsx';
import DesignProcess from '../components/DesignProcess.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import {
  navLinks,
  heroDetails,
  stats,
  aboutCopy,
  education,
  skillGroups,
  skillIcons,
  certificates,
  projects,
  timeline,
  testimonials,
  socialLinks,
  processSteps
} from '../data/portfolio.js';

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = React.useState(null);

  useScrollReveal();

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <Hero details={heroDetails} />
        <Stats stats={stats} />
        <About aboutCopy={aboutCopy} />
        <Education education={education} />
        <Skills skillGroups={skillGroups} skillIcons={skillIcons} />
        <Certificates certificates={certificates} onOpen={setLightboxSrc} />
        <Projects projects={projects} />
        <Experience timeline={timeline} />
        <DesignProcess steps={processSteps} />
        <Testimonials testimonials={testimonials} />
        <Contact socialLinks={socialLinks} />
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
              
            </button>
            <img src={lightboxSrc} alt="Certificate full screen" />
          </div>
        </div>
      )}

      <Footer socialLinks={socialLinks} />
      <BackToTop />
    </>
  );
}
