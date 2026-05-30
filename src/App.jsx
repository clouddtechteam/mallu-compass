import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <header className={`header ${isHeaderScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo-container" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Mallu Compass Logo" className="logo-img" />
        </Link>

        {/* Desktop & Mobile Drawer Menu */}
        <nav>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Services & LMS
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="mobile-only-cta" style={{ width: '100%', display: 'none' }}>
              <Link to="/contact" className="nav-cta" style={{ display: 'block', textAlign: 'center' }} onClick={closeMobileMenu}>
                Join Academy
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/contact" className="nav-cta" style={{ display: 'inline-block' }}>
            Join Academy
          </Link>

          {/* Hamburger Trigger for Mobile */}
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo-container">
              <img src="/logo.png" alt="Mallu Compass Logo" className="logo-img" />
              <span className="logo-text">MALLU<span>COMPASS</span></span>
            </Link>
            <p className="text-muted" style={{ marginTop: '10px' }}>
              The premium hybrid physical training studio and custom Learning Management System (LMS) designed to build robust movement mechanics and body conditioning.
            </p>
            <div className="contact-social-icons">
              <a href="https://instagram.com" className="contact-social-icon" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com" className="contact-social-icon" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://twitter.com" className="contact-social-icon" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://facebook.com" className="contact-social-icon" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home Portal</Link></li>
              <li><Link to="/about" className="footer-link">About The Coach</Link></li>
              <li><Link to="/services" className="footer-link">Services & Programs</Link></li>
              <li><Link to="/contact" className="footer-link">Admissions Contact</Link></li>
            </ul>
          </div>



          <div className="footer-newsletter">
            <h4>Academy Newsletter</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Get weekly scientific articles on muscle recruitment and metabolic triggers.
            </p>
            {newsletterSubmitted ? (
              <span style={{ color: 'var(--primary-yellow)', fontWeight: '500', fontSize: '0.9rem' }}>
                ✓ Subscribed Successfully! Check your inbox.
              </span>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="Enter email address" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn-icon-only" aria-label="Subscribe">
                  <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mallu Compass. All rights reserved. Built for LMS-Portfolio.</p>
          <div className="footer-legal-links">
            <a href="#/" className="footer-legal-link">Privacy Policy</a>
            <a href="#/" className="footer-legal-link">Terms of Service</a>
            <a href="#/" className="footer-legal-link">LMS Portal Access</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
