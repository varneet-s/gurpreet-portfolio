import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/lib/data/writing';

export const metadata: Metadata = {
  title: 'Gurpreet Kaur Jodhka — MBA Candidate & Marketer',
  description:
    'Marketing graduate and former founder of Guldasta, now pursuing an MBA at Deakin University, Ahmedabad. Specialized in brand building, event operations, and business analytics.',
  openGraph: {
    title: 'Gurpreet Kaur Jodhka — MBA Candidate & Marketer',
    description:
      'Marketing graduate and former founder of Guldasta, now pursuing an MBA at Deakin University, Ahmedabad. Specialized in brand building, event operations, and business analytics.',
    images: ['https://gurpreetjodhka.com/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'Gurpreet Kaur Jodhka — MBA Candidate & Marketer',
    description:
      'Marketing graduate and former founder of Guldasta, now pursuing an MBA at Deakin University, Ahmedabad. Specialized in brand building, event operations, and business analytics.',
    images: ['https://gurpreetjodhka.com/assets/og-preview.jpg'],
  },
};

export default function HomePage() {
  const featuredArticles = articles.slice(0, 2);

  return (
    <main>
      {/* Eyebrow Tag Strip */}
      <div className="tag-strip">
        <span>Ludhiana, IN</span>
        <span>MBA Candidate &middot; Deakin University, Ahmedabad</span>
        <span>Open to Opportunities</span>
      </div>

      {/* HERO SECTION */}
      <section className="hero" id="hero-section">
        <div className="hero-inner">
          <h1 className="hero-headline" id="hero-heading">
            <span className="line"><span className="kern-data">PROOF</span> OVER</span>
            <span className="line">PROMISE.</span>
            <span className="line highlight">BUILDING BEFORE BUSINESS SCHOOL.</span>
          </h1>

          <p className="sub">
            Marketing graduate who bootstrapped Guldasta with her brother Gursimran &mdash; crafting pipecleaner flowers to &#8377;20k+ revenue before moving to Ahmedabad for an MBA at Deakin University.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/work/">
              View Work
            </Link>
            <button type="button" className="btn btn-outline">
              Let&apos;s Talk &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="projects-section selected-work-section" id="projects-section">
        <div className="container">
          <div className="selected-work-header-row">
            <h2 className="selected-work-display-title">SELECTED WORK</h2>
            <span className="selected-work-badge">01 live &middot; 02 coming soon</span>
          </div>

          <div className="selected-work-list">
            {/* Project 01 - Live */}
            <Link href="/work/guldasta/" className="work-list-row">
              <div className="work-list-num">01</div>
              <div className="work-list-content">
                <h3 className="work-list-title">Guldasta Pipecleaner Floral Venture</h3>
                <div className="work-list-tags">PIPECLEANER CRAFT &middot; &#8377;20K+ REVENUE &middot; KALA GALI SELL-OUT</div>
              </div>
            </Link>

            {/* Project 02 - Coming Soon */}
            <div className="work-list-row" style={{ cursor: 'default', opacity: 0.85 }}>
              <div className="work-list-num">02</div>
              <div className="work-list-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="work-list-title">Market Research &amp; Consumer Insights</h3>
                  <span
                    style={{
                      background: 'rgba(224, 122, 44, 0.12)',
                      color: '#E07A2C',
                      border: '1px solid #E07A2C',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
                <div className="work-list-tags">CONSUMER BEHAVIOR &middot; SURVEY MODEL &middot; IN PROGRESS</div>
              </div>
            </div>

            {/* Project 03 - Not Built Yet */}
            <div className="work-list-row" style={{ cursor: 'default', opacity: 0.85 }}>
              <div className="work-list-num">03</div>
              <div className="work-list-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="work-list-title">Campus Operations &amp; Event Logistics</h3>
                  <span
                    style={{
                      background: 'rgba(12, 13, 14, 0.08)',
                      color: '#505356',
                      border: '1px solid #0C0D0E',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Not Built Yet
                  </span>
                </div>
                <div className="work-list-tags">METTLE FESTIVAL &middot; 1000+ ATTENDEES &middot; FLOW PLANNING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES I PROVIDE SECTION */}
      <section className="what-i-do what-i-do-section services-section" id="services-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title section-title--large">What I bring to teams</h2>
            <p className="section-intro-bold">
              I combine entrepreneurial execution with commercial marketing and structured business analytics.
            </p>
          </div>

          <div className="what-i-do-grid">
            {/* Service 1 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <div className="feature-title">1. Brand Strategy &amp; D2C Launch</div>
              <p className="feature-desc">
                From 0 to 1 consumer validation: pricing unit economics, custom packaging, visual identity, and social community engagement built through self-funded grit.
              </p>
              <Link href="/work/guldasta/" className="service-case-link">
                View Guldasta Story &rarr;
              </Link>
            </div>

            {/* Service 2 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="feature-title">2. Event Operations &amp; Flow</div>
              <p className="feature-desc">
                Coordinating on-ground logistics, inter-college outreach, and crowd flow for 1,000+ attendee university ceremonies and flagship competitions without friction.
              </p>
              <Link href="/about/" className="service-case-link">
                View Leadership Experience &rarr;
              </Link>
            </div>

            {/* Service 3 */}
            <div className="feature-item">
              <div className="service-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div className="feature-title">3. Market Research &amp; Analytics</div>
              <p className="feature-desc">
                Synthesizing qualitative customer feedback with Excel data models and market sizing to uncover genuine buyer motivation and product-market fit.
              </p>
              <Link href="/about/" className="service-case-link">
                View Skills &amp; Academic Focus &rarr;
              </Link>
            </div>
          </div>

          <div className="services-cta-wrap">
            <button type="button" className="btn btn-primary services-hover-btn" id="services-cta-btn">
              <span className="btn-text-default">Let&apos;s talk about collaboration &rarr;</span>
              <span className="btn-text-hover">Get in Touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* BLOG / LATEST ARTICLES SECTION */}
      <section className="writing-section" id="writing-preview-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title section-title--large">Blog &amp; Articles</h2>
            <p className="section-intro-bold">
              Lessons from bootstrapping a startup, commercial marketing, and business analytics.
            </p>
          </div>

          <div className="pudding-grid">
            {featuredArticles.map((art) => (
              <Link
                key={art.slug}
                href={`/writing/${art.slug}/`}
                className="pudding-card pudding-card-link"
              >
                <div className="pudding-meta">
                  <span className="pudding-pill">{art.num}</span>
                  <span className="pudding-date">{art.date}</span>
                </div>
                <div className={`pudding-frame pudding-frame--${art.frameColor}`}>
                  <div className="pudding-inner-graphic">
                    <div className="pudding-card-type">{art.type}</div>
                    <div className="pudding-card-source">{art.source}</div>
                  </div>
                </div>
                <h3 className="pudding-title">{art.title}</h3>
                <p className="pudding-desc">{art.description}</p>
                <span className="read-post-tag">Read Full Post &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
