import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY
      sections.forEach((section) => {
        const top = section.offsetTop - 120
        const height = section.offsetHeight
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (id) => {
    closeMenu()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          FB<span className="nav__logo-dot">.</span>
        </a>

        <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
          <ul className="nav__list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${activeSection === id ? 'nav__link--active' : ''}`}
                  onClick={(event) => {
                    event.preventDefault()
                    handleNavClick(id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav__close" onClick={closeMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="nav__actions">

          <button className="nav__toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
