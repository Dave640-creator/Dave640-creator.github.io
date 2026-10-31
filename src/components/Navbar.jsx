import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { NAV_LINKS, PROJECT_MENU, CONNECT_MENU } from '../data/site';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'projects' | 'connect' | null

  // Darker navbar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close any open dropdown when clicking outside of it
  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest('.dropdown')) setOpenDropdown(null);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (name) => setOpenDropdown((cur) => (cur === name ? null : name));

  return (
    <nav className={`navbar navbar-expand-lg fixed-top${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#hero" onClick={closeAll}>
          <span className="brand-dot"></span>Dave<span className="brand-accent">.</span>
        </a>

        <div className="d-flex align-items-center gap-3 ms-auto">
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className={`navbar-toggler${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse${menuOpen ? ' open' : ''}`} id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {NAV_LINKS.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href} onClick={closeAll}>{l.label}</a>
              </li>
            ))}
            <li className="nav-item">
              <Dropdown
                id="dropdown" label="Projects" items={PROJECT_MENU}
                open={openDropdown === 'projects'}
                onToggle={() => toggleDropdown('projects')}
                onNavigate={closeAll}
              />
            </li>
            <li className="nav-item">
              <Dropdown
                id="connectDropdown" label="Connect" items={CONNECT_MENU}
                open={openDropdown === 'connect'}
                onToggle={() => toggleDropdown('connect')}
                onNavigate={closeAll}
              />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeAll}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
