import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Contact({ hideHero = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message field cannot be empty';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'Do I need prior gym experience to start the courses?',
      a: 'Absolutely not! Our biomechanics courses start from skeletal structure basics. Whether you are a beginner or a veteran bodybuilder, our structured modules are designed to build your physical and intellectual strength from the ground up.'
    },
    {
      q: 'Can I access the LMS modules on my mobile phone?',
      a: 'Yes, our entire LMS platform is designed to be fully mobile-friendly. You can easily read movements guides, review active progress calculators, and take quizzes directly from your smartphone on the gym floor.'
    },
    {
      q: 'How does remote movement analysis work?',
      a: 'You simply upload a 10-second clip of your compound lift (squat, bench, or deadlift) inside your coaching dashboard. Our head coach Marcus Vance will physically markup the video with joint angles and feedback, mapping it directly to your LMS lesson schedule.'
    },
    {
      q: 'Are custom meal templates included in all tiers?',
      a: 'All hybrid tiers include complete access to our Metabolic Mastery curriculum. Active 1-on-1 coaching plans receive fully bespoke meal blueprints tailored to your BMR, metabolic profile, and body composition goals.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Subpage Header Hero */}
      {!hideHero && (
        <section className="subpage-hero" style={{ backgroundImage: 'url("/hero2.jpg")' }}>
          <div className="subpage-hero-content">
            <div className="hero-subtitle">Enroll Today</div>
            <h1 className="accent-title">Admissions & <span className="yellow-highlight">Support</span></h1>
          </div>
        </section>
      )}

      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="hero-subtitle">Get In Touch</div>
          <h2 className="accent-title" style={{ display: 'inline-block' }}>
            Begin Your <span className="yellow-highlight">Transformation</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '15px auto 0 auto' }}>
            Have questions about our physical academy or the online LMS curricula? Drop us a line below, 
            and our admissions team will get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact details */}
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-details">
                <h3>Email Us</h3>
                <a href="mailto:admissions@mallucompass.com">admissions@mallucompass.com</a>
                <p style={{ fontSize: '0.85rem', marginTop: '3px' }}>Direct Support Line</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info-details">
                <h3>Call Our Academy</h3>
                <a href="tel:+12065550198">+1 (206) 555-0198</a>
                <p style={{ fontSize: '0.85rem', marginTop: '3px' }}>Mon - Fri, 8 AM - 6 PM PST</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-info-details">
                <h3>Our HQ Studio</h3>
                <p>1402 Strength Blvd, Suite 100</p>
                <p>Seattle, WA 98101</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success-box">
                <div className="form-success-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, <strong>{formData.name}</strong>. Coach Marcus and the team will review your fitness goals and contact you via <strong>{formData.email}</strong> shortly.</p>
                <button className="btn btn-primary" style={{ marginTop: '10px' }} onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="e.g. (206) 555-0100"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Fitness Goals</label>
                  <textarea 
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Describe your current lifting plateau or athletic goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Decorative Angular Break */}
      <div className="custom-divider-yellow"></div>

      {/* Accordion FAQ Section */}
      <section className="section faq-section">
        <div className="faq-title">
          <HelpCircle size={32} className="yellow-highlight" style={{ marginBottom: '10px' }} />
          <h2 className="accent-title">Frequently Asked <span className="yellow-highlight">Questions</span></h2>
          <p>Get answers to common inquiries about our hybrid education methodology.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question-btn"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <h3>{faq.q}</h3>
                <ChevronDown size={20} className="faq-icon-chevron" />
              </button>
              <div className="faq-answer-panel">
                <div className="faq-answer-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
