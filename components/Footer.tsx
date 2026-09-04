'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="main-footer" className="site-footer">
      <div className="local-footer-banner">
        <div className="local-footer-bg-title">GURPREET</div>

        <div className="local-footer-content">
          <div className="local-footer-avatar-wrap">
            <img
              src="/gurpreet.jpeg"
              alt="Gurpreet Kaur Jodhka, Portrait"
              className="local-footer-avatar-img"
              width={140}
              height={140}
              style={{ objectFit: 'cover' }}
            />
            <button
              type="button"
              className="local-footer-email-badge"
              onClick={(e) => e.preventDefault()}
            >
              LET&apos;S TALK &rarr;
            </button>
          </div>

          <div className="local-footer-bottom-bar">
            <a
              href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.instagram.com/guldasta.inn"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              INSTAGRAM
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="local-footer-pill"
            >
              RESUME
            </a>
            <a
              href="mailto:gurpreet@gurpreetjodhka.com"
              className="local-footer-pill"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
