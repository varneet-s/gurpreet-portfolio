import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me & My Journey | Gurpreet Kaur Jodhka',
  description:
    'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
  openGraph: {
    title: 'About Me & My Journey | Gurpreet Kaur Jodhka',
    description:
      'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
    images: ['https://gurpreetjodhka.com/assets/og-preview.jpg'],
  },
  twitter: {
    title: 'About Me & My Journey | Gurpreet Kaur Jodhka',
    description:
      'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
    images: ['https://gurpreetjodhka.com/assets/og-preview.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="dh-page-wrapper">
      {/* 1. MONUMENTAL HERO SECTION (David Hellmann Style) */}
      <section className="dh-hero-wrapper" id="about-hero">
        <div
          className="dh-hero-bg"
          style={{ backgroundImage: `url('/guldasta.jpg')` }}
          aria-hidden="true"
        ></div>

        <div className="dh-hero-headline-wrap">
          <div className="dh-hero-subtag">
            <span>Identity &middot; Background &middot; Focus</span>
          </div>
          <h1 className="dh-hero-giant-title">
            About Me<br />&amp; My Journey.
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING EDITORIAL SHEET */}
      <section className="dh-sheet-container" id="about-intro">
        <div className="dh-sheet-inner">
          <h2 className="dh-editorial-heading">
            Hello, I&apos;m Gurpreet!<br />
            MBA, Business Analytics
          </h2>

          <div className="dh-editorial-cols">
            <div>
              <p>
                I grew up knowing I wanted to build something of my own. I studied
                marketing at S.A.C.C.M under Panjab University &mdash; a practical,
                commerce-first education that taught me to read markets, not just
                describe them.
              </p>
              <p>
                Before finishing my degree, I started questioning why special occasions should be marked with ordinary perishable bouquets that wither away in days. Searching deeper into alternative crafts, I discovered that everlasting flowers could be made with pipecleaners. With my brother{' '}
                <strong>Gursimran</strong>, we co-founded{' '}
                <Link href="/work/guldasta/" style={{ textDecoration: 'underline', color: 'var(--copper)' }}>
                  Guldasta
                </Link>
                . We sourced materials at wholesale rates, maintained 56&ndash;66% margins, sold 30+ custom bouquets and pots across India, and completely sold out our stall inventory at the 20,000-footfall Kala Gali exhibition in Ludhiana.
              </p>
            </div>
            <div>
              <p>
                When I had to relocate to Ahmedabad for my MBA at Deakin University, we decided to wrap up the venture &mdash; as I would no longer have Gursimran&apos;s on-ground sourcing partnership in the Punjab markets.
              </p>
              <p>
                Running Guldasta gave me definitive commercial proof: I loved understanding unit economics, customer demand, and operations. Now at Deakin University in GIFT City, Ahmedabad, I am building the quantitative analytics layer on top of that hands-on foundation.
              </p>
            </div>
          </div>

          {/* 3. SKILLS & TOOLS (Watracz Style Clean Layout) */}
          <div className="watracz-skills-clean" id="about-skills">
            <div className="watracz-skills-col">
              <div className="watracz-skills-kicker">COMMERCIAL &amp; ANALYTICAL SKILLS</div>
              <div className="watracz-skills-list">
                <span>Marketing Strategy</span>
                <span className="watracz-skills-slash">/</span>
                <span>Market Research</span>
                <span className="watracz-skills-slash">/</span>
                <span>D2C Brand Launch</span>
                <span className="watracz-skills-slash">/</span>
                <span>Consumer Behavior</span>
                <span className="watracz-skills-slash">/</span>
                <span>Event Operations</span>
                <span className="watracz-skills-slash">/</span>
                <span>Cash Flow Management</span>
                <span className="watracz-skills-slash">/</span>
                <span>Vendor Negotiation</span>
                <span className="watracz-skills-slash">/</span>
                <span>Stakeholder Coordination</span>
              </div>
            </div>

            <div className="watracz-skills-col">
              <div className="watracz-skills-kicker">TOOLS &amp; PLATFORMS</div>
              <div className="watracz-skills-list">
                <span>MS Excel</span>
                <span className="watracz-skills-slash">/</span>
                <span>Canva</span>
                <span className="watracz-skills-slash">/</span>
                <span>Meta Business Suite</span>
                <span className="watracz-skills-slash">/</span>
                <span>Google Analytics</span>
                <span className="watracz-skills-slash">/</span>
                <span>Event Flow Planning</span>
                <span className="watracz-skills-slash">/</span>
                <span>Instagram Business</span>
                <span className="watracz-skills-slash">/</span>
                <span>PowerPoint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED DARK SECTION: ANGLED PHOTO STRIP */}
      <section className="dh-dark-section" id="about-interests">
        <div className="dh-dark-container">
          <h2 className="dh-section-title-serif">
            Craft. Strategy. Events. Velvet Flowers. Community.
          </h2>
          <p className="dh-section-subtitle">
            Outside of academic lectures, I balance analytical rigor with handcrafted floral design, university event coordination, literature, and building memorable customer experiences.
          </p>

          <div className="dh-photo-tilted-strip">
            {/* 1. Guldasta Velvet Flowers */}
            <div className="dh-tilted-card dh-tilted-card--1">
              <img
                src="/guldasta.jpg"
                alt="Guldasta handcrafted velvet flower arrangement"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Handcrafted Floral Art</span>
                <span>Guldasta &middot; Velvet Petals</span>
              </div>
            </div>

            {/* 2. Portrait */}
            <div className="dh-tilted-card dh-tilted-card--2">
              <img
                src="/gurpreet.jpeg"
                alt="Gurpreet Kaur Jodhka"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Identity</span>
                <span>Gurpreet &middot; Ludhiana</span>
              </div>
            </div>

            {/* 3. Kala Gali Festival */}
            <div className="dh-tilted-card dh-tilted-card--3">
              <img
                src="/guldasta.jpg"
                alt="Kala Gali Ludhiana Art Festival Stall"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Festival Feature</span>
                <span>Kala Gali &middot; Ludhiana</span>
              </div>
            </div>

            {/* 4. Strategic Mindset */}
            <div className="dh-tilted-card dh-tilted-card--4">
              <img
                src="/gurpreet.jpeg"
                alt="Business and MBA focus"
                width={400}
                height={270}
                className="dh-tilted-img"
                loading="lazy"
              />
              <div className="dh-tilted-caption">
                <span>Academic Focus</span>
                <span>Deakin MBA &middot; Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
