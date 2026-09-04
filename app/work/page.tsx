import React from 'react';
import type { Metadata } from 'next';
import Work from '@/components/Work';

export const metadata: Metadata = {
  title: 'Work & Projects | Gurpreet Kaur Jodhka',
  description:
    'Featured startup ventures, commercial operations, and leadership case studies by Gurpreet Kaur Jodhka.',
  openGraph: {
    title: 'Work & Projects | Gurpreet Kaur Jodhka',
    description:
      'Featured startup ventures, commercial operations, and leadership case studies by Gurpreet Kaur Jodhka.',
    images: ['/gurpreet.jpeg'],
  },
  twitter: {
    title: 'Work & Projects | Gurpreet Kaur Jodhka',
    description:
      'Featured startup ventures, commercial operations, and leadership case studies by Gurpreet Kaur Jodhka.',
    images: ['/gurpreet.jpeg'],
  },
};

export default function WorkPage() {
  return (
    <main className="tim-work-page-canvas">
      {/* ── HEADER SECTION: "Projects." ── */}
      <section className="tim-work-header">
        <div className="tim-work-container">
          <h1 className="tim-work-hero-title">Projects.</h1>
          <p className="tim-work-hero-dek">
            Commercial ventures, event operations, and analytical case studies built to turn creative ideas into real customer trust.
          </p>
        </div>
      </section>

      {/* ── WORK BODY: Blog-Style Project Cards, Watracz Experience, Metrics & Academics ── */}
      <section className="tim-work-body">
        <div className="tim-work-container">
          <Work />
        </div>
      </section>
    </main>
  );
}
