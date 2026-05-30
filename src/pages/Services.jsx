import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, Video, PlayCircle, Star, Sparkles, Calendar, Heart } from 'lucide-react';

const COURSE_DATA = {
  strength: {
    title: 'Daily Coached Batches',
    description: 'Access 11 flexible hourly batches daily, manage attendance logs, and track schedules.',
    lessons: [
      { id: 1, title: 'Attendance System Overview', duration: '8 mins', status: 'Completed', checkpoint: 'Verify your active batch registration card.' },
      { id: 2, title: 'One-Click Class Attendance', duration: '12 mins', status: 'In Progress', checkpoint: 'Press the green Check-In button on the gym floor.' },
      { id: 3, title: 'Hourly Batch Switching', duration: '10 mins', status: 'Locked', checkpoint: 'Select standard morning vs evening flex-slots.' },
    ],
    quiz: {
      question: 'What is the total number of coached group training batches available daily at Mallu Compass?',
      options: [
        { key: 'A', text: '3 Batches' },
        { key: 'B', text: '11 Coached Batches', correct: true },
        { key: 'C', text: '24 Batches' }
      ]
    }
  },
  nutrition: {
    title: 'Sat-Sun Yoga Recovery',
    description: 'Learn restorative alignment, active breathwork, and deep joint decompression.',
    lessons: [
      { id: 1, title: 'Vinyasa Breathwork Foundations', duration: '15 mins', status: 'Completed', checkpoint: 'Practice 4-second concentric inhales.' },
      { id: 2, title: 'Spinal Decompression Flow', duration: '20 mins', status: 'Locked', checkpoint: 'Decompress lumbar vertebrae under active extension.' },
      { id: 3, title: 'Myofascial Joint Release', duration: '14 mins', status: 'Locked', checkpoint: 'Break tissue trigger points on recovery mornings.' },
    ],
    quiz: {
      question: 'Which days are the restorative Vinyasa yoga sessions hosted at Mallu Compass?',
      options: [
        { key: 'A', text: 'Monday and Wednesday' },
        { key: 'B', text: 'Saturday and Sunday', correct: true },
        { key: 'C', text: 'Friday Nights Only' }
      ]
    }
  },
  mobility: {
    title: 'Zoom & LMS Integrations',
    description: 'Connect virtual classrooms, calibrate calorie benchmarks, and view form audits.',
    lessons: [
      { id: 1, title: 'Zoom Live Classroom Setup', duration: '10 mins', status: 'Completed', checkpoint: 'Sync your Zoom API credential for 1-click live streams.' },
      { id: 2, title: 'Caloric Calculator Calibration', duration: '15 mins', status: 'Locked', checkpoint: 'Input active weights to generate live dynamic macro splits.' },
      { id: 3, title: 'Remote Video Lift Form Audits', duration: '12 mins', status: 'Locked', checkpoint: 'Upload a 10s movement clip for automated joint markup.' },
    ],
    quiz: {
      question: 'What feature allows remote coaches to markup lifting biomechanics visually inside the LMS?',
      options: [
        { key: 'A', text: 'Automated Joint Form Audits & Video markups', correct: true },
        { key: 'B', text: 'Standard Text Messaging' },
        { key: 'C', text: 'Email Reports' }
      ]
    }
  }
};

export default function Services({ hideHero = false }) {
  const [activeCourseKey, setActiveCourseKey] = useState('strength');
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(null); // 'correct' or 'incorrect'

  const activeCourse = COURSE_DATA[activeCourseKey];
  const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

  // Reset quiz states when swapping courses
  const handleCourseSwap = (key) => {
    setActiveCourseKey(key);
    setActiveLessonId(1);
    setSelectedQuizOption(null);
    setShowQuizResult(null);
  };

  const handleQuizAnswer = (option) => {
    setSelectedQuizOption(option.key);
    if (option.correct) {
      setShowQuizResult('correct');
    } else {
      setShowQuizResult('incorrect');
    }
  };

  // Calculate simulated progress bar percentage based on completed lessons
  const totalLessons = activeCourse.lessons.length;
  const completedLessons = activeCourse.lessons.filter(l => l.status === 'Completed').length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="fade-in">
      {/* Subpage Header Hero */}
      {!hideHero && (
        <section className="subpage-hero" style={{ backgroundImage: 'url("/hero2.jpg")' }}>
          <div className="subpage-hero-content">
            <div className="hero-subtitle">Academy Programs</div>
            <h1 className="accent-title">Services & <span className="yellow-highlight">LMS Suite</span></h1>
          </div>
        </section>
      )}

      {/* Services Grid Section */}
      <section className="section">
        <div className="services-intro">
          <div className="hero-subtitle">Our Capabilities</div>
          <h2 className="accent-title" style={{ display: 'inline-block' }}>
            Hybrid Coaching <span className="yellow-highlight">Programs</span>
          </h2>
          <p>
            Choose how you build your body. We offer three tiers of advanced athletic programming, 
            each including full access to our customized LMS Course Suite.
          </p>
        </div>

        {/* LMS & Academy Platform Features */}
        <div className="lms-features-section">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="hero-subtitle">All-In-One Hub</div>
            <h3 className="accent-title" style={{ fontSize: '1.8rem', display: 'inline-block' }}>
              Academy Features & <span className="yellow-highlight">LMS Integrations</span>
            </h3>
          </div>
          
          <div className="lms-features-grid">
            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <Calendar size={20} />
              </div>
              <h4>Daily 11 Batches</h4>
              <p>Maximum calendar flexibility. 11 hourly coached group batches run daily from 6:00 AM to 9:00 PM.</p>
            </div>

            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <Heart size={20} />
              </div>
              <h4>Sat-Sun Yoga</h4>
              <p>Weekend kinetic recovery. Restorative flexibility, breathwork, and alignment flows every Sat & Sun.</p>
            </div>

            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <CheckCircle size={20} />
              </div>
              <h4>Easy Class Attend</h4>
              <p>Frictionless logs. Check in on-site or track completed online modules with single-tap updates.</p>
            </div>

            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <Video size={20} />
              </div>
              <h4>Zoom Integrated</h4>
              <p>Interactive virtual class structures. Launch live coaching, lift form reviews, and Q&A slots.</p>
            </div>

            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <BookOpen size={20} />
              </div>
              <h4>LMS Course Suites</h4>
              <p>Premium online classrooms with lesson outlines, physical guides, and baseline knowledge checkpoints.</p>
            </div>

            <div className="feature-card-compact">
              <div className="feature-icon-wrapper">
                <Sparkles size={20} />
              </div>
              <h4>Macro Dashboards</h4>
              <p>Self-paced calorie metrics, BMR calculators, and nutritional recovery templates.</p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/images/services.png" alt="Strength & Conditioning" className="service-img" />
            </div>
            <div className="service-card-content">
              <div className="service-badge">HYBRID PREMIUM</div>
              <h3>1-on-1 Elite Strength</h3>
              <p>For individuals seeking absolute physical peak performance with fully individualized movement templates.</p>
              <ul className="service-features-list">
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> 3x Custom Gym Templates</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Weekly Video Movement Audits</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Full LMS Classroom Access</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/images/hero.png" alt="Nutrition Coaching" className="service-img" />
            </div>
            <div className="service-card-content">
              <div className="service-badge">ACADEMY ONLY</div>
              <h3>Metabolic Education</h3>
              <p>Self-paced, science-heavy nutritional curricula for athletes looking to master energy cycles.</p>
              <ul className="service-features-list">
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> 12 Interactive Diet Modules</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Custom Macro & Calorie Calculator</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Bi-Weekly Q&A webinars</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="/assets/images/about.png" alt="Active Mobility Program" className="service-img" />
            </div>
            <div className="service-card-content">
              <div className="service-badge">CONNECTIVE FOCUS</div>
              <h3>Joint Resilience Hub</h3>
              <p>Structured joint restoration routines designed to eradicate persistent aches and kinetic limitations.</p>
              <ul className="service-features-list">
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Daily 15-Min Mobility Routines</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Neuromuscular release courses</li>
                <li className="service-feature"><CheckCircle size={16} className="yellow-highlight" /> Progressive load joint templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Angular Break */}
      <div className="custom-divider-yellow"></div>

      {/* Interactive LMS Preview Widget */}
      <section className="section" style={{ paddingTop: '0px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="accent-title" style={{ display: 'inline-block' }}>
            Interactive LMS <span className="yellow-highlight">Classroom Preview</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0 auto' }}>
            Experience our premium learning panel first-hand. Switch courses, select lessons, 
            and complete the checkpoint quizzes below to test your baseline knowledge!
          </p>
        </div>

        <div className="lms-preview-container">
          <div className="lms-preview-header">
            <div className="lms-title-area">
              <div className="lms-pulse-indicator"></div>
              <h3>Mallu Compass LMS v2.4</h3>
            </div>
            
            <div className="lms-tab-selector">
              <button 
                className={`lms-tab ${activeCourseKey === 'strength' ? 'active' : ''}`}
                onClick={() => handleCourseSwap('strength')}
              >
                Daily Batches
              </button>
              <button 
                className={`lms-tab ${activeCourseKey === 'nutrition' ? 'active' : ''}`}
                onClick={() => handleCourseSwap('nutrition')}
              >
                Sat-Sun Yoga
              </button>
              <button 
                className={`lms-tab ${activeCourseKey === 'mobility' ? 'active' : ''}`}
                onClick={() => handleCourseSwap('mobility')}
              >
                LMS Integrations
              </button>
            </div>
          </div>

          <div className="lms-preview-body">
            {/* Left: Lessons List */}
            <div className="lms-lessons-list">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-muted)' }}>Course Outline</h4>
              {activeCourse.lessons.map(lesson => (
                <div 
                  key={lesson.id}
                  className={`lms-lesson-item ${activeLessonId === lesson.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLessonId(lesson.id);
                    setSelectedQuizOption(null);
                    setShowQuizResult(null);
                  }}
                >
                  <div className="lms-lesson-info">
                    <span className="lms-lesson-number">0{lesson.id}</span>
                    <div>
                      <div className="lms-lesson-title">{lesson.title}</div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lesson.duration}</span>
                    </div>
                  </div>
                  <span className="lms-lesson-status" style={{ color: lesson.status === 'Completed' ? '#00e676' : 'var(--text-muted)' }}>
                    {lesson.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Active Lesson View & Quiz */}
            <div className="lms-content-viewer">
              <div className="lms-viewer-meta">
                <span className="lms-viewer-badge">{activeCourse.title}</span>
                

              </div>

              <div className="lms-viewer-content">
                <h4>Lesson {activeLesson.id}: {activeLesson.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  This interactive lesson details structural loads. Make sure you fully master the biomechanical guidelines below before checking your progress.
                </p>
                
                <div className="lms-checkpoints">
                  <div className="lms-checkpoint">
                    <Sparkles size={16} className="yellow-highlight" />
                    <span><strong>Checkpoint:</strong> {activeLesson.checkpoint}</span>
                  </div>
                </div>
              </div>

              {/* Quiz Module */}
              <div className="lms-quiz-box">
                <div className="lms-quiz-question">
                  <BookOpen size={18} className="yellow-highlight" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  <span>Module Checkpoint Quiz: {activeCourse.quiz.question}</span>
                </div>

                <div className="lms-quiz-options">
                  {activeCourse.quiz.options.map(option => (
                    <div 
                      key={option.key}
                      className={`lms-quiz-option ${selectedQuizOption === option.key ? 'selected' : ''}`}
                      onClick={() => handleQuizAnswer(option)}
                    >
                      <span>{option.key}. {option.text}</span>
                    </div>
                  ))}
                </div>

                {showQuizResult && (
                  <div className={`lms-quiz-result ${showQuizResult === 'correct' ? 'correct' : 'incorrect'}`}>
                    {showQuizResult === 'correct' ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Correct! You have successfully mastered this checkpoint!</span>
                      </>
                    ) : (
                      <>
                        <span style={{ fontWeight: 'bold' }}>✗</span>
                        <span>Incorrect. Review your biomechanic checkpoints and try again!</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
