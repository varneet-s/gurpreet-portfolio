import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/lib/data/writing';

export const metadata: Metadata = {
  title: 'Blog & Articles | Gurpreet Kaur Jodhka',
  description:
    'Reflections on bootstrapping Guldasta, marketing frameworks, event management, and business analytics by Gurpreet Kaur Jodhka.',
  openGraph: {
    title: 'Blog & Articles | Gurpreet Kaur Jodhka',
    description:
      'Writing about startup execution, commercial marketing, and business strategy.',
    images: ['/gurpreet.jpeg'],
  },
  twitter: {
    title: 'Blog & Articles | Gurpreet Kaur Jodhka',
    description:
      'Writing about startup execution, commercial marketing, and business strategy.',
    images: ['/gurpreet.jpeg'],
  },
};

export default function WritingPage() {
  return (
    <main className="dh-page-wrapper">
      {/* 1. MONUMENTAL HERO SECTION (David Hellmann Style) */}
      <section className="dh-hero-wrapper" id="blog-hero">
        <div
          className="dh-hero-bg"
          style={{ backgroundImage: `url('/guldasta.jpg')` }}
          aria-hidden="true"
        ></div>

        <div className="dh-hero-headline-wrap">
          <div className="dh-hero-subtag">
            <span>Blog &middot; Reflections &middot; Market Insights</span>
          </div>
          <h1 className="dh-hero-giant-title dh-hero-giant-title--blog">
            Blog &amp;<br />Articles.
          </h1>
        </div>
      </section>

      {/* 2. OVERLAPPING SHEET WITH EDITORIAL INTRO & ARTICLE LIST */}
      <section className="dh-sheet-container" id="blog-listing">
        <div className="dh-sheet-inner">
          <h2 className="dh-editorial-heading">
            &hellip;things I think about &mdash;<br />
            stories from building a startup, commercial marketing, and business analytics.
          </h2>

          <div className="dh-blog-list">
            {articles.map((art) => (
              <Link
                key={art.slug}
                href={`/writing/${art.slug}/`}
                className="dh-blog-card"
                id={`article-${art.slug}`}
              >
                <div className="dh-blog-meta">
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#E07A2C',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontWeight: 800,
                    }}
                  >
                    {art.type}
                  </span>
                  <span>{art.date}</span>
                  <span>&middot;</span>
                  <span>{art.source}</span>
                </div>
                <h3 className="dh-blog-title">{art.title}</h3>
                <p className="dh-blog-dek">{art.description}</p>
                <div
                  style={{
                    marginTop: '1.25rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#E07A2C',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Read Full Essay &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
