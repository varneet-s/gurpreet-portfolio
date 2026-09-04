import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Talk | Gurpreet Kaur Jodhka",
  description:
    'Get in touch with Gurpreet Kaur Jodhka — MBA Candidate at Deakin University, Ahmedabad. Open for marketing collaborations, retail brand discussions, and opportunities.',
  openGraph: {
    title: "Let's Talk | Gurpreet Kaur Jodhka",
    description:
      'Get in touch with Gurpreet Kaur Jodhka — MBA Candidate at Deakin University, Ahmedabad.',
    images: ['/gurpreet.jpeg'],
  },
  twitter: {
    title: "Let's Talk | Gurpreet Kaur Jodhka",
    description:
      'Get in touch with Gurpreet Kaur Jodhka — MBA Candidate at Deakin University, Ahmedabad.',
    images: ['/gurpreet.jpeg'],
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Simple Headline Header */}
      <section className="simple-page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="underline-green">Let&apos;s Talk</span>
          </h1>
          <p className="hero-subtitle">
            Open for marketing and business analytics roles, D2C retail collaborations, or a conversation about brand building.
          </p>
          <div className="contact-info-row">
            <a
              href="mailto:gurpreet@gurpreetjodhka.com"
              className="footer-social-link"
              id="footer-social-gmail"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-social-linkedin"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/guldasta.inn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-social-instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <span className="contact-info-item">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Ludhiana, Punjab
            </span>
          </div>
        </div>
      </section>

      {/* Side-by-Side Layout: Collaboration Areas + Contact Card */}
      <section className="contact-form-section">
        <div className="contact-grid-wrapper">
          {/* Collaboration Areas Box */}
          <div className="contact-free-box-pop">
            <h2 className="contact-free-title">How We Can Collaborate</h2>
            <p className="contact-free-desc">
              Whether you are looking to launch an innovative consumer product, optimize operational logistics, or discuss marketing opportunities &mdash; I bring energy and bootstrapper focus.
            </p>

            <ul className="contact-services-pop-list">
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">
                    Brand Strategy &amp; D2C Validation
                  </strong>{' '}
                  &mdash; Hands-on product prototyping, unit margins, and direct sales testing
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">Event Operations &amp; Flow</strong>{' '}
                  &mdash; Eliminating bottleneck friction in large crowd logistics and registration
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">
                    Market Research &amp; Analytics
                  </strong>{' '}
                  &mdash; Data-backed customer surveys and quantitative market models
                </div>
              </li>
              <li>
                <span className="arrow">&rarr;</span>
                <div>
                  <strong className="list-strong-white">Creative Brand Identity</strong>{' '}
                  &mdash; Tactile packaging design, aesthetic presentation, and community engagement
                </div>
              </li>
            </ul>

            <a
              href="mailto:gurpreet@gurpreetjodhka.com?subject=Hello%20Gurpreet%20-%20Let's%20Connect"
              className="cta-button cta-button--green"
            >
              Email Me Directly &rarr;
            </a>
          </div>

          {/* Quick Direct Connect Card */}
          <div className="contact-form-box-side" style={{ background: '#FFFFFF', border: '2px solid #0C0D0E', borderRadius: '12px', padding: '2rem', boxShadow: '4px 4px 0px #0C0D0E' }}>
            <h2 className="contact-form-title" style={{ color: '#0C0D0E', marginBottom: '1rem' }}>Direct Reach</h2>
            <p style={{ color: '#505356', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Feel free to connect directly via email or professional socials. I usually respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="mailto:gurpreet@gurpreetjodhka.com"
                className="btn btn-primary"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                gurpreet@gurpreetjodhka.com
              </a>

              <a
                href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                Connect on LinkedIn &rarr;
              </a>

              <a
                href="https://www.instagram.com/guldasta.inn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                Follow Guldasta on Instagram &rarr;
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                Download Resume PDF &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
