import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guldasta Business Documentation — Gurpreet Kaur Jodhka',
  description:
    'A 5-month business documentation of Guldasta: pipecleaner handcrafted floral venture founded with brother Gursimran, ₹20k+ revenue, Kala Gali sell-out, 56-66% margins, and PAN-India delivery.',
  openGraph: {
    title: 'Guldasta Business Documentation — Gurpreet Kaur Jodhka',
    description:
      'The 5-month story of Guldasta: ₹20k+ revenue, 30+ custom bouquets & pots sold, Kala Gali exhibition sell-out, and PAN-India delivery.',
    images: ['https://gurpreetjodhka.com/assets/guldasta-preview.jpg'],
  },
  twitter: {
    title: 'Guldasta Business Documentation — Gurpreet Kaur Jodhka',
    description:
      'The 5-month story of Guldasta: ₹20k+ revenue, 30+ custom bouquets & pots sold, Kala Gali exhibition sell-out, and PAN-India delivery.',
    images: ['https://gurpreetjodhka.com/assets/guldasta-preview.jpg'],
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
            <span className="highlight">Guldasta: Handcrafted Pipecleaner Floral Venture</span>
          </h1>

          <p className="hero-subtitle cs-hero-subtitle">
            Started in January 2026 with my brother Gursimran &mdash; questioning why special occasions should be marked with ordinary perishable bouquets. Within 5 months: 30+ customized bouquets and flower pots sold, &#8377;20k+ revenue, 56&ndash;66% margins, a sell-out at the 20,000-footfall Kala Gali exhibition, and scaling to PAN-India delivery.
          </p>

          <div className="cs-meta-wrap">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Founders</span>
              <span className="cs-meta-val">Gurpreet Kaur &amp; Gursimran Singh (Brother)</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Duration &amp; Base</span>
              <span className="cs-meta-val">Jan 2026 &ndash; May 2026 &middot; Ludhiana, Punjab</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Craft &amp; Product Model</span>
              <div className="cs-meta-val cs-meta-tools-list">
                <span className="cs-meta-tool-tag">Pipecleaner Floral Craft</span>
                <span className="cs-meta-tool-tag">Bespoke Bouquets &amp; Pots</span>
                <span className="cs-meta-tool-tag">56&ndash;66% Margins</span>
                <span className="cs-meta-tool-tag">Wholesale Market Sourcing</span>
                <span className="cs-meta-tool-tag">PAN-India Delivery</span>
                <span className="cs-meta-tool-tag">Instagram Growth</span>
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
            <li className="cs-tldr-item"><strong>&#8377;20,000+ Revenue in 5 Months:</strong> Sold 30+ bespoke handcrafted bouquets and floral pots with healthy unit economics.</li>
            <li className="cs-tldr-item"><strong>56% &ndash; 66% Margins Per Order:</strong> Maintained high profitability despite raw materials not being cheap or easily accessible in the open market.</li>
            <li className="cs-tldr-item"><strong>Kala Gali Exhibition Sell-Out:</strong> Showcased at the premier young artists exhibition with ~20,000 footfall, completely selling out stall inventory.</li>
            <li className="cs-tldr-item"><strong>PAN-India Shipping by Month 3:</strong> Popularized the brand on Instagram and scaled delivery from local handovers to across India.</li>
            <li className="cs-tldr-item"><strong>Target Audience Resonance:</strong> High demand among young couples and Gen Z, alongside strong appreciation from parents.</li>
          </ul>
        </div>
      </div>

      {/* Main Case Study Body */}
      <section className="cs-body cs-section-padding">
        <div className="cs-container">
          {/* Section 1: The Genesis & Idea */}
          <div className="cs-section">
            <h2 className="cs-section-title">1. The Genesis: Questioning Ordinary Bouquets</h2>
            <p>
              In January 2026, I started Guldasta with a simple personal question: <em>why should someone gift an ordinary bouquet on special occasions that withers away in a few days?</em>
            </p>
            <p className="cs-mt-1-5">
              I started searching deeper into alternative floral art forms and discovered that everlasting, tactile flowers could be crafted by hand using pipecleaners. My brother, <strong>Gursimran</strong>, partnered with me to turn this creative idea into a functioning business.
            </p>
            <div className="cs-kpi-grid">
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">&#8377;20k+</div>
                <div className="cs-kpi-lbl">Total Gross Revenue</div>
              </div>
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">30+</div>
                <div className="cs-kpi-lbl">Custom Bouquets &amp; Pots Sold</div>
              </div>
              <div className="cs-kpi-card">
                <div className="cs-kpi-val">56&ndash;66%</div>
                <div className="cs-kpi-lbl">Profit Margin Per Order</div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Showcase */}
          <div className="cs-section">
            <h2 className="cs-section-title">2. Product Showcase &amp; Branding</h2>
            <p>
              Each floral arrangement was handcrafted using pipecleaners &mdash; carefully shaped into petals, buds, and leaves, and assembled into personalized bouquets and decorative ceramic flower pots.
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
                  alt="Guldasta handcrafted pipecleaner flower arrangement"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'relative', height: '280px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #0C0D0E' }}>
                <Image
                  src="/gurpreet.jpeg"
                  alt="Founder Gurpreet Kaur Jodhka"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Section 3: What Worked */}
          <div className="cs-section">
            <h2 className="cs-section-title">3. What Worked: Growth Drivers &amp; Achievements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '1rem' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  A. Sourcing Advantage: Wholesale Market Procurement
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  The quality pipecleaner raw material required for these floral stems was neither cheap nor easily available in the local market. My brother Gursimran played a crucial role here &mdash; navigating wholesale suppliers and negotiating low purchase rates that protected our 56% to 66% order margins from day one.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  B. Kala Gali Exhibition: 20,000 Footfall Sell-Out
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  We set up an exhibition stall at Kala Gali &mdash; a premier exhibition in Ludhiana curated especially for young artists. With an estimated footfall of around 20,000 visitors, the response was overwhelming: our entire stall inventory was completely sold out.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  C. Audience Resonance: Gen Z, Couples &amp; Parents
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  Our core customer base centered on young couples and Gen Z looking for aesthetic, thoughtful keepsakes. Unexpectedly, the tactile craftsmanship was also deeply appreciated by parents who bought decorative flower pots for living spaces.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid #0C0D0E', borderRadius: '8px', padding: '1.5rem', boxShadow: '3px 3px 0px #0C0D0E' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#E07A2C', marginBottom: '8px' }}>
                  D. Scaling to PAN-India Shipping by Month 3
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2D2F31' }}>
                  We focused our efforts on organic Instagram content (@guldasta.inn). As reels gained traction outside Punjab, we established packaging workflows and began fulfilling customized orders across India within three months of launch.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: What Did Not Work & Operational Realities */}
          <div className="cs-section">
            <h2 className="cs-section-title">4. Operational Challenges &amp; Scarcity</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '1rem' }}>
              <div style={{ background: '#FFFDF5', border: '1.5px solid #E07A2C', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '8px' }}>
                  1. Raw Material Scarcity &amp; Sourcing Dependency
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#505356' }}>
                  High-grade pipecleaners with the right wire gauge, plush density, and color pigments were not standard craft supplies in regular retail shops. Sourcing required continuous trips to specialty wholesale hubs, making supply heavily reliant on my brother Gursimran&apos;s on-ground market runs.
                </p>
              </div>

              <div style={{ background: '#FFFDF5', border: '1.5px solid #E07A2C', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C0D0E', marginBottom: '8px' }}>
                  2. High Time-Investment Per Custom Arrangement
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#505356' }}>
                  Because each bouquet was customized to buyer requests &mdash; unique color palettes, stem counts, pot shapes &mdash; handcrafting each piece took considerable time, limiting how many orders could be fulfilled each week alongside undergraduate studies.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Reason Behind Closing & Next Chapter */}
          <div className="cs-section">
            <h2 className="cs-section-title">5. Why We Closed Guldasta &amp; The MBA Transition</h2>
            <div style={{ background: '#FFFFFF', border: '2px solid #0C0D0E', borderRadius: '12px', padding: '2rem', boxShadow: '4px 4px 0px #0C0D0E', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', color: '#0C0D0E' }}>
                The Decision to Wrap Up
              </h3>
              <p style={{ color: '#2D2F31', lineHeight: 1.7, marginBottom: '1rem' }}>
                The reason behind closing Guldasta was practical: I had to relocate to <strong>Ahmedabad for my higher studies (MBA in Business Analytics at Deakin University)</strong>.
              </p>
              <p style={{ color: '#2D2F31', lineHeight: 1.7, margin: 0 }}>
                Operating from another state meant I would no longer have my brother Gursimran&apos;s direct operational partnership and wholesale sourcing support in the Punjab markets. Rather than compromise product quality or customer expectations, we concluded the 5-month run on a high note.
              </p>
            </div>

            <p>
              Running Guldasta proved that a creative insight &mdash; replacing ordinary bouquets with handcrafted pipecleaner flowers &mdash; could generate over &#8377;20,000 in revenue, strong 56&ndash;66% margins, and national reach.
            </p>
            <p>
              It gave me first-hand commercial intuition into pricing, raw material sourcing, and consumer demand that I now carry directly into my <strong>MBA in Business Analytics at Deakin University, Ahmedabad</strong>.
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
