import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guldasta Business Case Study — Gurpreet Kaur Jodhka',
  description:
    'A 5-month business documentation of bootstrapping Guldasta: handcrafted velvet floral venture, revenue, what worked, what failed, and key MBA takeaways.',
  openGraph: {
    title: 'Guldasta Business Case Study — Gurpreet Kaur Jodhka',
    description:
      'Bootstrapping a handcrafted velvet floral startup to 100+ orders and ₹10k+ revenue in 5 months.',
    images: ['/guldasta.jpg'],
  },
};

export default function GuldastaPage() {
  return (
    <main>
      {/* Case Study Hero */}
      <section className="cs-hero" id="cs-hero-section">
        <div className="container">
          <Link href="/work/" className="secondary-button cs-back-link" id="back-to-projects">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>
          <h1 className="hero-title cs-hero-title">
            <span className="highlight">Guldasta: Bootstrapping a Handcrafted D2C Startup</span>
          </h1>

          <p className="hero-subtitle cs-hero-subtitle">
            A 5-month commercial experiment in product validation, unit economics, and operational scaling before business school. 100+ customized orders, ₹10k+ gross revenue, and a featured retail stall at the Kala Gali Art Festival.
          </p>

          <div className="cs-meta-wrap">
            <div className="cs-meta-item">
              <span className="cs-meta-label">My Role</span>
              <span className="cs-meta-val">Co-Founder &amp; Operations Lead</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline &amp; Location</span>
              <span className="cs-meta-val">Jan 2026 &ndash; Jun 2026 &middot; Ludhiana, Punjab</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Analytical &amp; Business Tools</span>
              <div className="cs-meta-val cs-meta-tools-list">
                <span className="cs-meta-tool-tag">Unit Economics</span>
                <span className="cs-meta-tool-tag">Product Sourcing</span>
                <span className="cs-meta-tool-tag">Margin Analysis</span>
                <span className="cs-meta-tool-tag">Zero-CAC Marketing</span>
                <span className="cs-meta-tool-tag">Inventory Planning</span>
                <span className="cs-meta-tool-tag">Event Retail</span>
              </div>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Brand Channel</span>
              <div className="cs-meta-val">
                <a
                  href="https://www.instagram.com/guldasta.inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-meta-btn"
                >
                  Instagram @guldasta.inn &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Key Takeaways */}
      <div className="cs-container cs-section-spacing-top">
        <div className="cs-tldr" id="guldasta-tldr">
          <div className="cs-tldr-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            </svg>
            TL;DR &mdash; Business Highlights
          </div>
          <ul className="cs-tldr-list">
            <li className="cs-tldr-item"><strong>100+ Custom Orders Fulfilled:</strong> Scaled strictly through organic social storytelling and direct word-of-mouth with zero ad budget.</li>
            <li className="cs-tldr-item"><strong>₹10,000+ Revenue with 45% Net Margins:</strong> Disciplined procurement of raw velvet fabric, floristry wire, and custom packaging enabled healthy profitability from Month 1.</li>
            <li className="cs-tldr-item"><strong>Kala Gali Festival Sell-Out:</strong> Validated offline consumer appeal at Ludhiana&apos;s premier art festival, converting over 40% of stall visitors into buyers.</li>
            <li className="cs-tldr-item"><strong>The Scaling Ceiling:</strong> 40 minutes per hand-crafted stem exposed a production bottleneck that highlighted why manufacturing automation or assembly teams are necessary for scale.</li>
          </ul>
        </div>
      </div>

      {/* Main Case Study Body */}
      <section className="cs-body cs-section-padding">
        <div className="cs-container">
          {/* Section 1: The Opportunity & Hypothesis */}
          <div className="cs-section">
            <h2 className="cs-section-title">1. The Market Opportunity &amp; Hypothesis</h2>
            <p>
              The Indian floral gifting market is polarized: fresh floral bouquets wilt within 3&ndash;5 days, representing temporary value for buyers, while plastic artificial flowers feel synthetic, cheap, and lack gift-worthy emotional sentiment.
            </p>
            <div className="cs-kpi-grid">
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">100+</div>
                <div className="cs-kpi-lbl">Orders Fulfilled</div>
              </div>
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">&#8377;10k+</div>
                <div className="cs-kpi-lbl">Revenue in 5 Months</div>
              </div>
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">45%</div>
                <div className="cs-kpi-lbl">Net Profit Margin</div>
              </div>
            </div>
            <p className="cs-mt-1-5">
              <strong>The Core Hypothesis:</strong> Handcrafted velvet flowers could establish a distinct middle tier &mdash; combining permanent keepsake longevity with rich, luxurious tactile texture. Priced between &#8377;350 and &#8377;1,200 per bespoke bouquet, customers would perceive them as personal art pieces rather than disposable decor.
            </p>
          </div>

          {/* Section 2: Visual Showcase */}
          <div className="cs-section">
            <h2 className="cs-section-title">2. Product Showcase &amp; Branding</h2>
            <p>
              Every bouquet was assembled from scratch: petal wire shaping, velvet crimping, floral tape binding, and wrapped in premium textured craft paper with signature wax stamps.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginTop: '1.5rem',
              }}
            >
              <div style={{ position: 'relative', height: '280px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #0C0D0E' }}>
                <Image
                  src="/guldasta.jpg"
                  alt="Guldasta handcrafted velvet flower arrangement in marigold and pink"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'relative', height: '280px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #0C0D0E' }}>
                <Image
                  src="/gurpreet.jpeg"
                  alt="Founder Gurpreet Kaur Jodhka"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Section 3: What Worked */}
          <div className="cs-section">
            <h2 className="cs-section-title">3. What Worked: Tactical Successes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '1rem' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  A. Tactile In-Person Sales (Kala Gali Festival)
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  Customers who hesitated online bought immediately once they felt the velvet petals in person. The sensory differentiation was our highest conversion tool. Over 90% of our market stall inventory sold out in under 6 hours.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  B. High-AOV Custom Colorway Options
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  Rather than selling static bundles, offering buyers bespoke palette selections (e.g., Deep Crimson, Marigold, and Blush Pink) increased Average Order Value (AOV) by 35%, moving standard single-stem orders into full curated bouquets.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  C. Zero-CAC Organic Content Funnel
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  Behind-the-scenes videos showing the hand-shaping of petals and packaging preparation struck a chord on Instagram Reels. 100% of our inbound customer leads came organically without spending a single rupee on ads.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: What Did Not Work & Bottlenecks */}
          <div className="cs-section">
            <h2 className="cs-section-title">4. What Did Not Work: Hard Operational Bottlenecks</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '1rem' }}>
              <div style={{ background: '#FFFDF5', border: '1.5px solid #E07A2C', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '8px' }}>
                  1. The Labor Ceiling (Time per Unit)
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#505356' }}>
                  Each intricate velvet rose required 35 to 45 minutes of manual crafting. At peak demand (Valentine&apos;s week and Mother&apos;s Day), output hit an unyielding physical ceiling. Without hiring and training a dedicated artisan team, revenue could not scale past individual capacity.
                </p>
              </div>

              <div style={{ background: '#FFFDF5', border: '1.5px solid #E07A2C', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '8px' }}>
                  2. Local Raw Material Batch Inconsistencies
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#505356' }}>
                  Procuring velvet rolls from local Ludhiana textile markets meant slight shade and texture variances between dye lots. When returning corporate clients requested duplicate bouquets, matching previous shades required manual sorting and fabric wastage.
                </p>
              </div>

              <div style={{ background: '#FFFDF5', border: '1.5px solid #E07A2C', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '8px' }}>
                  3. Shipping Protection Costs
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#505356' }}>
                  Handcrafted stems with flexible wire cores were vulnerable to crushing during intercity transit. Switching to rigid custom cardboard cylinder tubes solved damaged deliveries, but eroded net margin by ~8% on long-distance shipments.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Financial Breakdown & MBA Transition */}
          <div className="cs-section">
            <h2 className="cs-section-title">5. Financial Analysis &amp; The MBA Transition</h2>
            <div style={{ background: '#FFFFFF', border: '2px solid #0C0D0E', borderRadius: '12px', padding: '2rem', boxShadow: '4px 4px 0px #0C0D0E', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', color: '#0C0D0E' }}>
                5-Month Financial Unit Economics
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#505356', fontWeight: 700 }}>Total Revenue</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0C0D0E' }}>&#8377;10,250</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#505356', fontWeight: 700 }}>Raw Material COGS</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#E07A2C' }}>&#8377;4,600</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#505356', fontWeight: 700 }}>Packaging &amp; Ops</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#505356' }}>&#8377;1,100</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#505356', fontWeight: 700 }}>Net Take-Home</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#02F5A4', WebkitTextStroke: '1px #0C0D0E' }}>&#8377;4,550</div>
                </div>
              </div>
            </div>

            <p>
              When my co-founder moved for higher studies, we decided to intentionally wrap up the venture. But the five months running Guldasta served as a transformative commercial proving ground.
            </p>
            <p>
              It proved that I could spot market appetite, negotiate materials, handle customers, and build positive cash-flow. More importantly, it made me realize that to solve larger enterprise-scale problems, I needed systematic training in data analytics, operational supply chains, and strategic marketing.
            </p>
            <p>
              That realization led directly to my current pursuit: an <strong>MBA in Business Analytics at Deakin University, Ahmedabad</strong>.
            </p>
          </div>

          {/* Bottom Nav */}
          <div style={{ borderTop: '2px solid #0C0D0E', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/work/" className="secondary-button">
              &larr; Back to All Projects
            </Link>
            <Link href="/about/" className="primary-button">
              Read About My Journey &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
