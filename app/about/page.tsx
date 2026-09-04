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
    images: ['/gurpreet.jpeg'],
  },
  twitter: {
    title: 'About Me & My Journey | Gurpreet Kaur Jodhka',
    description:
      'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
    images: ['/gurpreet.jpeg'],
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
                Before finishing my degree, I co-founded{' '}
                <Link href="/work/guldasta/" style={{ textDecoration: 'underline', color: 'var(--copper)' }}>
                  Guldasta
                </Link>
                , a handcrafted velvet flower brand with my sister. We ran it lean,
                handled all packaging and direct consumer sales, and nearly sold out
                our entire inventory at our first public exhibition at Kala Gali, Ludhiana.
              </p>
            </div>
            <div>
              <p>
                When my sister moved for college, we closed that chapter. But the
                venture had already answered my fundamental question: I wanted to
                understand how organisations grow, not just what products they sell.
              </p>
              <p>
                That is why I&apos;m currently pursuing an MBA at Deakin University in
                GIFT City, Ahmedabad &mdash; building the quantitative and strategic
                layer on top of the operational foundation I already created.
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
