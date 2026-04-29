import aboutBuilding from './assets/about-building.png'
import program1 from './assets/program-1.png'
import program2 from './assets/program-2.png'
import program3 from './assets/program-3.png'
import program4 from './assets/program-4.png'
import ctaHuddle from './assets/cta-huddle.png'

const arrowIcon = (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 6h8m0 0L6.5 2.5M10 6L6.5 9.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#" className="logo">
            <svg className="logo-mark" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 4 L22 1 L42 4 V30 C42 40 33 48 22 51 C11 48 2 40 2 30 Z"
                fill="#1a1410"
                stroke="#ff6a1a"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="9" r="1" fill="#ff6a1a" />
              <circle cx="16" cy="8" r="1" fill="#ff6a1a" />
              <circle cx="22" cy="7.5" r="1" fill="#ff6a1a" />
              <circle cx="28" cy="8" r="1" fill="#ff6a1a" />
              <circle cx="34" cy="9" r="1" fill="#ff6a1a" />
              <text
                x="22"
                y="26"
                textAnchor="middle"
                fill="#fff"
                fontFamily="Barlow Condensed, sans-serif"
                fontWeight="900"
                fontSize="14"
                fontStyle="italic"
              >
                PSA
              </text>
              <line x1="8" y1="32" x2="36" y2="32" stroke="#ff6a1a" strokeWidth="0.8" />
              <path
                d="M14 36 v8 M18 35 v10 M22 34 v12 M26 35 v10 M30 36 v8"
                stroke="#ff6a1a"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <div className="logo-text">
              <div className="l1">PSA</div>
              <div className="l2">SPORTS ACADEMY</div>
            </div>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#coaches">Coaches</a>
            <a href="#facilities">Facilities</a>
            <a href="#stories">Success Stories</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#join" className="btn btn-primary">
              JOIN PSA
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>

        <div className="social-rail">
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 7c-.2-1.6-1-2.5-2.6-2.7C18.5 4 12 4 12 4s-6.5 0-8.4.3C2 4.5 1.2 5.4 1 7c-.3 2-.3 5 0 7 .2 1.6 1 2.5 2.6 2.7 1.9.3 8.4.3 8.4.3s6.5 0 8.4-.3c1.6-.2 2.4-1.1 2.6-2.7.3-2 .3-5 0-7zM10 14V8l5 3-5 3z" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5 6-5z" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4v16H4zM6 2a2 2 0 110 4 2 2 0 010-4zM10 8h4v2c.7-1.3 2.2-2.3 4-2.3 3.3 0 4 2.2 4 5V20h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6h-4V8z" />
            </svg>
          </a>
        </div>

        <div className="wrap hero-content">
          <div className="hero-left">
            <span className="eyebrow">
              <span className="dot"></span> ELITE TRAINING. REAL RESULTS.
            </span>
            <h1>
              <span>Develop today.</span>
              <span className="accent">Dominate tomorrow.</span>
            </h1>
            <p className="lead">
              PSA Sports Academy is where athletes are trained, champions are built, and futures are defined.
            </p>
            <div className="hero-cta">
              <a href="#join" className="btn btn-primary">
                JOIN NOW <span className="btn-arrow">{arrowIcon}</span>
              </a>
              <a href="#video" className="btn btn-ghost">
                <span className="play-btn">
                  <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                    <path d="M3 2v8l7-4-7-4z" fill="white" />
                  </svg>
                </span>{' '}
                WATCH VIDEO
              </a>
            </div>

            <div className="review-card">
              <svg className="review-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFC107"
                  d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-11.3 8 12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.6-.4-3.9z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2a12 12 0 0 1-7.2 2.4 12 12 0 0 1-11.3-8l-6.5 5A20 20 0 0 0 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6h.1l6.2 5.2c-.4.4 6.5-4.8 6.5-14.8 0-1.3-.1-2.6-.4-3.9z"
                />
              </svg>
              <div className="review-text">
                <div className="review-label">Google Reviews</div>
                <div className="review-rating">
                  <span className="review-score">4.7</span>
                  <span className="review-stars">
                    {[0, 1, 2, 3].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.9 7h7.1l-5.7 4.4L18.2 22 12 17.6 5.8 22l1.9-8.6L2 9h7.1z" />
                      </svg>
                    ))}
                    <svg viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="halfStar">
                          <stop offset="50%" stopColor="#ffb627" />
                          <stop offset="50%" stopColor="rgba(255,182,39,0.35)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2l2.9 7h7.1l-5.7 4.4L18.2 22 12 17.6 5.8 22l1.9-8.6L2 9h7.1z"
                        fill="url(#halfStar)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="review-sub">Based on 235 reviews</div>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <div className="stat-num">1,500+</div>
                  <div className="stat-label">Athletes Trained</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 4h12v4a6 6 0 01-12 0V4z" />
                    <path d="M6 6H3v2a3 3 0 003 3M18 6h3v2a3 3 0 01-3 3M9 16h6M10 20h4M12 11v5" />
                  </svg>
                </div>
                <div>
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Championships</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                  </svg>
                </div>
                <div>
                  <div className="stat-num">15+</div>
                  <div className="stat-label">Professional Placements</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l2.9 7h7.1l-5.7 4.4L18.2 22 12 17.6 5.8 22l1.9-8.6L2 9h7.1z" />
                  </svg>
                </div>
                <div>
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="panel">
            <div className="about-grid">
              <div>
                <span className="section-eyebrow">About PSA</span>
                <h2 className="section-title">
                  More than training.
                  <br />
                  It's a transformation.
                </h2>
                <p className="about-copy">
                  At PSA, we combine world-class coaching, modern facilities, and a performance-driven approach to
                  unlock every athlete's full potential.
                </p>
                <a href="#learn" className="btn btn-outline">
                  LEARN MORE <span className="btn-arrow">{arrowIcon}</span>
                </a>
              </div>
              <div
                className="about-image"
                style={{ backgroundImage: `url(${aboutBuilding})` }}
              ></div>
              <div className="achievements">
                <div className="ach-eyebrow">Achievements</div>
                <div className="ach-list">
                  <div className="ach-item">
                    <div className="ach-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 4h12v4a6 6 0 01-12 0V4zM10 14h4v6h-4z" />
                      </svg>
                    </div>
                    <div>
                      <div className="ach-title">National Champions</div>
                      <div className="ach-sub">U16, U18, U20</div>
                    </div>
                  </div>
                  <div className="ach-item">
                    <div className="ach-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
                      </svg>
                    </div>
                    <div>
                      <div className="ach-title">Top Ranked Academy</div>
                      <div className="ach-sub">For 3 Consecutive Years</div>
                    </div>
                  </div>
                  <div className="ach-item">
                    <div className="ach-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 9l9-5 9 5-9 5-9-5z" />
                        <path d="M7 11v5c0 1 2 3 5 3s5-2 5-3v-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="ach-title">College Scholarships</div>
                      <div className="ach-sub">200+ Athletes</div>
                    </div>
                  </div>
                  <div className="ach-item">
                    <div className="ach-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="ach-title">Pro Player Pathway</div>
                      <div className="ach-sub">15+ Signed Professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="programs">
        <div className="wrap">
          <div className="programs-head">
            <div>
              <span className="section-eyebrow">Our Programs</span>
              <h2 className="section-title">
                Programs for every
                <br />
                athlete's journey.
              </h2>
            </div>
            <a href="#all" className="view-all">
              VIEW ALL PROGRAMS{' '}
              <span className="btn-arrow" style={{ background: 'rgba(255,255,255,0.1)' }}>
                {arrowIcon}
              </span>
            </a>
          </div>
          <div className="program-grid">
            <div className="program-card">
              <div className="pc-image">
                <img className="pc-photo" src={program1} alt="" />
                <div className="pc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
                  </svg>
                </div>
              </div>
              <div className="pc-body">
                <h3 className="pc-title">
                  Youth Development<span className="pc-age">Ages 6–12</span>
                </h3>
                <p className="pc-desc">Build strong fundamentals through fun, discipline, and teamwork.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="pc-image">
                <img className="pc-photo" src={program2} alt="" />
                <div className="pc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" />
                    <path d="M3 21h18" />
                  </svg>
                </div>
              </div>
              <div className="pc-body">
                <h3 className="pc-title">
                  Junior Academy<span className="pc-age">Ages 13–16</span>
                </h3>
                <p className="pc-desc">Develop skills with advanced training and competitive matchplay.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="pc-image">
                <img className="pc-photo" src={program3} alt="" />
                <div className="pc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                </div>
              </div>
              <div className="pc-body">
                <h3 className="pc-title">
                  Elite Program<span className="pc-age">Ages 17–21</span>
                </h3>
                <p className="pc-desc">High-performance training for athletes pursuing excellence.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="pc-image">
                <img className="pc-photo" src={program4} alt="" />
                <div className="pc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l3-3h12l3 3v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
              </div>
              <div className="pc-body">
                <h3 className="pc-title">
                  Goalkeeper Development<span className="pc-age">All Ages</span>
                </h3>
                <p className="pc-desc">Specialized training to build elite goalkeepers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="panel" style={{ padding: 0 }}>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 7h6M9 11h6M9 15h4" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Expert Coaches</div>
                  <div className="feature-desc">Learn from the best in the game.</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">State-of-the-Art Facilities</div>
                  <div className="feature-desc">Train in world-class environments.</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Athlete Support</div>
                  <div className="feature-desc">Nutrition, recovery, and mental performance.</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 4l10 4-10 4-10-4 10-4z" />
                    <path d="M5 10v5c0 1 3 3 7 3s7-2 7-3v-5" />
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Future Pathways</div>
                  <div className="feature-desc">College, professional, and beyond.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="join">
        <div className="wrap">
          <div className="cta-strip">
            <div className="cta-left">
              <div className="cta-eyebrow">Ready to take the next step?</div>
              <h2 className="cta-title">Your journey starts here.</h2>
              <p className="cta-sub">Join PSA Sports Academy and become the best version of yourself.</p>
            </div>
            <div className="cta-right" style={{ backgroundImage: `url(${ctaHuddle})` }}>
              <a href="#join" className="btn btn-primary">
                JOIN NOW <span className="btn-arrow">{arrowIcon}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <div>© 2026 PSA Sports Academy. All rights reserved.</div>
          <div>Develop. Compete. Dominate.</div>
        </div>
      </footer>
    </>
  )
}
