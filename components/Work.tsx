'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectBlogItem {
  id: string;
  fromMonthYear: string;
  toMonthYear: string;
  client: string;
  role: string;
  category: string;
  title: string;
  dek: string;
  tools: string[];
  href: string;
  previewImg?: string;
  isComingSoon?: boolean;
}

const projects: ProjectBlogItem[] = [
  {
    id: 'guldasta',
    fromMonthYear: 'Jan 2026',
    toMonthYear: 'May 2026',
    client: 'GULDASTA',
    role: 'Co-Founder & Operations',
    category: 'D2C VENTURE',
    title: 'Bootstrapping a Handcrafted Pipecleaner Floral Venture',
    dek: 'Started with my brother Gursimran in January 2026 crafting everlasting flowers using pipecleaners. Within 5 months: 30+ bespoke bouquets and flower pots sold, ₹20k+ revenue, 56–66% margins, a sell-out at the 20,000-footfall Kala Gali exhibition, and scaling to PAN-India delivery.',
    tools: ['PIPECLEANER CRAFT', '56-66% MARGINS', 'PAN-INDIA SHIPPING', 'KALA GALI EXHIBITION'],
    href: '/work/guldasta/',
    previewImg: '/guldasta.jpg',
    isComingSoon: false,
  },
  {
    id: 'market-research',
    fromMonthYear: '2026',
    toMonthYear: 'In Progress',
    client: 'DEAKIN BUSINESS LAB',
    role: 'MBA Researcher',
    category: 'MARKET RESEARCH',
    title: 'Consumer Purchase Drivers in Boutique Retail',
    dek: 'Case study coming soon: An empirical study on multi-channel consumer decision drivers across boutique and craft brands, analyzing pricing sensitivity and repeat purchase retention.',
    tools: ['EXCEL', 'MARKET RESEARCH', 'CONSUMER SURVEYS'],
    href: '#',
    isComingSoon: true,
  },
  {
    id: 'event-operations',
    fromMonthYear: '2026',
    toMonthYear: 'Not Built Yet',
    client: 'S.A.C.C.M METTLE',
    role: 'Operations Coordinator',
    category: 'EVENT OPERATIONS',
    title: 'Inter-College Operations & Participant Flow Architecture',
    dek: 'Case study coming soon: Process mapping and crowd flow coordination for a 1,000+ attendee college flagship festival and convocation ceremony, eliminating registration choke-points.',
    tools: ['LOGISTICS', 'PROCESS FLOW', 'TEAM COORDINATION'],
    href: '#',
    isComingSoon: true,
  },
];

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  href: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'guldasta',
    company: 'Guldasta (Handcrafted Floral Venture)',
    role: 'Co-Founder & Operations Lead',
    dates: 'January 2026 — May 2026',
    href: '/work/guldasta/',
  },
  {
    id: 'convocation',
    company: 'Convocation Ceremony Committee, S.A.C.C.M',
    role: 'Operations & Guest Logistics',
    dates: '2026',
    href: '/about/',
  },
  {
    id: 'mettle',
    company: 'Organising Committee — Mettle',
    role: 'Inter-College Outreach & Participant Flow',
    dates: '2026',
    href: '/about/',
  },
  {
    id: 'nss',
    company: 'NSS Core Committee & Marketing Club, S.A.C.C.M',
    role: 'Social Welfare & Marketing Event Manager',
    dates: '2023 — 2026',
    href: '/about/',
  },
];

interface MetricStat {
  value: string;
  label: string;
}

const metrics: MetricStat[] = [
  {
    value: '₹20k+',
    label: 'Gross revenue generated within 5-month bootstrap run',
  },
  {
    value: '30+',
    label: 'Customised bouquets & flower pots handcrafted and sold',
  },
  {
    value: '56–66%',
    label: 'Profit margin maintained per order across PAN-India deliveries',
  },
  {
    value: '20,000',
    label: 'Visitor footfall at Kala Gali exhibition where stall sold out',
  },
];

export default function Work() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tim-work-layout">
      {/* ── 1. PROJECTS STREAM (Using Blog Card Style Architecture) ── */}
      <section className="project-blog-stream" aria-label="Featured Projects">
        {projects.map((proj) => {
          const CardContent = (
            <>
              {/* Topbar: Category Pill on left, Timeline Bar on right */}
              <div className="project-blog-topbar">
                <div className="project-blog-meta-left">
                  <span className="project-blog-pill">{proj.category}</span>
                  <div className="project-blog-timeline-bar">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="project-blog-timeline-svg"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>
                      {proj.isComingSoon
                        ? `${proj.fromMonthYear} · ${proj.toMonthYear}`
                        : `From ${proj.fromMonthYear} to ${proj.toMonthYear}`}
                    </span>
                  </div>
                </div>
                {proj.isComingSoon ? (
                  <span
                    style={{
                      background: 'rgba(224, 122, 44, 0.12)',
                      color: '#E07A2C',
                      border: '1.5px solid #E07A2C',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Coming Soon
                  </span>
                ) : (
                  <span
                    style={{
                      background: 'rgba(2, 245, 164, 0.15)',
                      color: '#0C0D0E',
                      border: '1.5px solid #0C0D0E',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Content Dek & Metadata */}
              <div className="project-blog-content">
                <div className="project-blog-client-line">
                  {proj.client} &middot; {proj.role}
                </div>
                <h2 className="project-blog-title">{proj.title}</h2>
                <p className="project-blog-dek">{proj.dek}</p>

                {proj.previewImg && (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
                      maxHeight: '320px',
                      overflow: 'hidden',
                      borderRadius: '6px',
                      border: '1.5px solid #0C0D0E',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Image
                      src={proj.previewImg}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}

                <div className="project-blog-tools-row">
                  {proj.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="project-blog-tool-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="project-blog-cta">
                  {proj.isComingSoon ? (
                    <span style={{ opacity: 0.6, fontStyle: 'italic' }}>
                      Case study not built yet &middot; Coming soon
                    </span>
                  ) : (
                    <span>View Project Story &rarr;</span>
                  )}
                </div>
              </div>
            </>
          );

          if (proj.isComingSoon) {
            return (
              <div
                key={proj.id}
                className="project-blog-card"
                id={`project-${proj.id}`}
                style={{ opacity: 0.9, cursor: 'default' }}
              >
                {CardContent}
              </div>
            );
          }

          return (
            <Link
              key={proj.id}
              href={proj.href}
              className="project-blog-card"
              id={`project-${proj.id}`}
            >
              {CardContent}
            </Link>
          );
        })}
      </section>

      {/* ── 2. EXPERIENCE SECTION (Damian Watracz Style) ── */}
      <section className="watracz-exp-section" id="experience" aria-label="Work Experience">
        <div className="watracz-kicker">EXPERIENCE &amp; INVOLVEMENT</div>
        <h2 className="watracz-heading">Hands-on leadership &amp; execution</h2>
        <p className="watracz-intro">
          From bootstrapping a handcrafted floral startup to directing logistics for 1,000+ attendee university events, I believe customer trust and operational excellence are earned on the ground. For full history, visit my{' '}
          <a
            href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
          .
        </p>

        {/* Clickable Experience List Rows */}
        <div className="watracz-exp-list">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={exp.href}
              className="watracz-exp-row"
              id={`exp-${exp.id}`}
            >
              <div className="watracz-company">{exp.company}</div>
              <div className="watracz-role">{exp.role}</div>
              <div className="watracz-dates">{exp.dates}</div>
              <div className="watracz-arrow">&rarr;</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. IMPACT METRICS ── */}
      <section className="watracz-metrics-section" aria-label="Impact Metrics">
        <div className="watracz-kicker">OPERATIONAL METRICS</div>
        <div className="watracz-metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="watracz-metric-card">
              <div className="watracz-metric-badge" aria-hidden="true" />
              <div className="watracz-metric-value">{m.value}</div>
              <div className="watracz-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. ACADEMIC CREDENTIALS SECTION ── */}
      <section className="tim-certs-section" id="work-certs">
        <div className="tim-certs-card">
          <div className="tim-cert-logo-box">
            <Image
              src="/assets/logos/deakin-logo.svg"
              alt="Deakin University Logo"
              width={56}
              height={56}
              className="tim-cert-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="tim-cert-details">
            <span className="tim-cert-badge">CURRENT ACADEMIC DEGREE &middot; 2026&ndash;PRESENT</span>
            <h2 className="tim-cert-title">Master of Business Administration (MBA) &mdash; Business Analytics</h2>
            <div className="tim-cert-meta">
              <span>Deakin University, GIFT City Ahmedabad</span>
              <span>/</span>
              <span>Commenced: 2026</span>
              <span>/</span>
              <span>Focus: Data Analytics &amp; Strategic Marketing</span>
            </div>
            <p className="tim-cert-desc">
              Building quantitative frameworks, strategic operations, and market intelligence on top of practical commercial background.
            </p>
          </div>
        </div>

        <div className="tim-certs-card" style={{ marginTop: '24px' }}>
          <div className="tim-cert-logo-box">
            <Image
              src="/assets/logos/saccm-logo.svg"
              alt="S.A.C.C.M / Panjab University Logo"
              width={56}
              height={56}
              className="tim-cert-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="tim-cert-details">
            <span className="tim-cert-badge">COMPLETED DEGREE &middot; 2023&ndash;2026</span>
            <h2 className="tim-cert-title">Bachelor of Commerce (Hons) &mdash; Marketing</h2>
            <div className="tim-cert-meta">
              <span>S.A.C.C.M &middot; Panjab University</span>
              <span>/</span>
              <span>Graduated: 2026</span>
              <span>/</span>
              <span>Ludhiana, Punjab</span>
            </div>
            <p className="tim-cert-desc">
              Commerce and marketing fundamentals covering market research, consumer behavior, financial accounting, and managerial economics.
            </p>
          </div>
        </div>
      </section>

      {/* ── FLOATING SCROLL-TO-TOP BUTTON ── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="tim-floating-top-btn"
          aria-label="Scroll to top of work page"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
