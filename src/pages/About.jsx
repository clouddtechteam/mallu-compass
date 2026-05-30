import React from 'react';
import { Award, CheckCircle, Calendar, ShieldCheck, Heart } from 'lucide-react';

export default function About({ hideHero = false }) {
  return (
    <div className="fade-in">
      {/* Subpage Header Hero */}
      {!hideHero && (
        <section className="subpage-hero" style={{ backgroundImage: 'url("/hero2.jpg")' }}>
          <div className="subpage-hero-content">
            <div className="hero-subtitle">Meet The Instructor</div>
            <h1 className="accent-title">About <span className="yellow-highlight">Mallu Compass</span></h1>
          </div>
        </section>
      )}

      <section className="section">
        <div className="about-grid">
          <div className="about-img-container">
            <div className="about-img-wrapper">
              <img 
                src="/assets/images/about.png" 
                alt="Head Coach Marcus" 
                className="about-img" 
              />
              <div className="about-experience-badge">
                12+<span>Years Exp</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="hero-subtitle">Meet The Master Instructor</div>
            <h2 className="accent-title">Marcus <span className="yellow-highlight">Vance</span></h2>
            <p className="about-quote">
              "True strength is forged when muscular capability aligns perfectly with mental discipline. Physical growth is the simple byproduct of strict education."
            </p>
            <p>
              Marcus Vance founded Mallu Compass after serving 6 years as a physical fitness advisor for tactical teams and competitive bodybuilders. Holding dual degrees in Kinesiology and Nutritional Sciences, Marcus pioneered the "LMS-Coaching integration," allowing students to study muscle recruitment systems on a tablet before performing them on the platform.
            </p>
            <p>
              Through this multi-dimensional approach, Marcus has guided hundreds of amateurs and professionals to physical peaks while building a lasting foundation of anatomical knowledge.
            </p>

            <div className="certifications-list">
              <div className="cert-item">
                <Award className="cert-icon" size={20} />
                <span>B.S. Kinesiology & Biomechanics</span>
              </div>
              <div className="cert-item">
                <Award className="cert-icon" size={20} />
                <span>ISSA Certified Master Trainer</span>
              </div>
              <div className="cert-item">
                <Award className="cert-icon" size={20} />
                <span>Precision Nutrition Level 2 Coach</span>
              </div>
              <div className="cert-item">
                <Award className="cert-icon" size={20} />
                <span>Tactical Conditioning Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Angular Break */}
      <div className="custom-divider-yellow"></div>

      {/* Timeline of Achievements */}
      <section className="section timeline-section">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="accent-title" style={{ display: 'inline-block' }}>
            Our Evolution & <span className="yellow-highlight">Milestones</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '15px auto 0 auto' }}>
            A legacy of structural transformation, physical science, and educational excellence.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-container timeline-left">
            <div className="timeline-content">
              <div className="timeline-date">2014 - 2016</div>
              <h3>Tactical Athletics</h3>
              <p>Developed custom strength templates for athletic preparedness programs and sports clubs.</p>
            </div>
          </div>

          <div className="timeline-container timeline-right">
            <div className="timeline-content">
              <div className="timeline-date">2017 - 2019</div>
              <h3>Mallu Compass Launch</h3>
              <p>Opened our physical premium studio in Seattle, establishing our signature physical methodology.</p>
            </div>
          </div>

          <div className="timeline-container timeline-left">
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2022</div>
              <h3>Pioneering the LMS</h3>
              <p>Launched the first custom Learning Management System (LMS) to offer digital muscle bio-mechanic courses to our local gym members.</p>
            </div>
          </div>

          <div className="timeline-container timeline-right">
            <div className="timeline-content">
              <div className="timeline-date">2023 - PRESENT</div>
              <h3>Mallu Compass Evolution</h3>
              <p>Scaling global remote coaching integrated with video courses, live progress charts, and macro-tracking modules.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
