import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Cpu, Flame } from 'lucide-react';
import Services from './Services';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-video-section">
        <video 
          src="/hero.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="bg-video"
        />
        <div className="bg-video-overlay"></div>

        <div className="hero-video-content">
          <div className="hero-subtitle animated-subtitle">Mallu Compass</div>
          <h1 className="animated-title">
            Navigate your <span className="yellow-highlight">Strength</span><br />
            Define your <span className="yellow-highlight">Future</span>
          </h1>
          <p className="hero-description text-muted animated-desc">
            Welcome to the Mallu Compass physical training and interactive LMS learning portal. 
            We combine high-performance mechanical coaching with digital curricula to track, 
            educate, and rebuild your kinetic chain.
          </p>
          <div className="cta-group animated-ctas">
            <Link to="/services" className="btn btn-primary">
              Explore LMS Portal <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ paddingTop: '0px', paddingBottom: '40px' }}>
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Hours Coached</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">LMS Modules</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Active Athletes</div>
          </div>
        </div>
      </section>

      {/* Decorative Angular Break */}
      <div className="custom-divider-yellow"></div>

      {/* Philosophy Section */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="accent-title" style={{ display: 'inline-block' }}>
            The Mallu Compass <span className="yellow-highlight">Methodology</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0 auto' }}>
            We bridge the gap between heavy gym sessions and rigorous educational tracking. 
            True fitness requires understanding the mechanics of your own body.
          </p>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="philosophy-icon">
              <Dumbbell size={24} />
            </div>
            <h3>Precision Lifting</h3>
            <p>
              Custom-tailored resistance programs based on your structural biomechanics. No guesswork, just progressive overload designed to build lean density.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="philosophy-icon">
              <Cpu size={24} />
            </div>
            <h3>LMS Guided Learning</h3>
            <p>
              Gain access to custom course modules in movement patterns, sleep optimization, and active recovery. Train smart by learning the science.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="philosophy-icon">
              <Flame size={24} />
            </div>
            <h3>Metabolic Control</h3>
            <p>
              Interactive nutrition trackers integrated into your coaching dashboard. Learn to control insulin, optimize protein synthesis, and burn fat.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="custom-divider-yellow"></div>

      {/* Reused Services & Programs Section */}
      <Services hideHero={true} />

      {/* Decorative Divider */}
      <div className="custom-divider-yellow"></div>

      {/* Reused Admissions & Inquiry Section */}
      <Contact hideHero={true} />
    </div>
  );
}
