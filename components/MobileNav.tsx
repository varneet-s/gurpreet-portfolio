'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('data-nav-open', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.removeAttribute('data-nav-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      id="mobile-nav"
      className={`mobile-nav ${isOpen ? 'active' : ''}`}
      data-state={isOpen ? 'open' : 'closed'}
      aria-hidden={!isOpen}
    >
      <div className="mobile-nav-header">
        <button
          className="mobile-nav-close"
          id="mobile-menu-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          BACK
        </button>
      </div>
      <div className="mobile-nav-links">
        <Link href="/work/" className="mobile-nav-card" onClick={onClose}>
          WORK
        </Link>
        <Link href="/blog/" className="mobile-nav-card" onClick={onClose}>
          BLOG
        </Link>
        <Link href="/about/" className="mobile-nav-card" onClick={onClose}>
          ABOUT
        </Link>
        <button
          type="button"
          className="mobile-nav-card"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          LET&apos;S TALK &rarr;
        </button>
      </div>
      <div className="mobile-nav-footer">
        <div className="mobile-nav-col mobile-nav-col-left">
          <a
            href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/guldasta.inn"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="mobile-nav-col mobile-nav-col-right">
          <a
            href="mailto:gurpreet@gurpreetjodhka.com"
            className="mobile-nav-badge"
          >
            EMAIL
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-badge"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
