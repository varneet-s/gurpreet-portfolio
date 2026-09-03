"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollFadeUp from "@/components/ScrollFadeUp";
import SprigLeaf from "@/components/illustrations/SprigLeaf";
import { ArrowRight } from "@phosphor-icons/react";



export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100dvh - 60px)",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          alignItems: "center",
          gap: "48px",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "20px",
            }}
          >
            Gurpreet Kaur Jodhka
          </h1>

          {/* Tagline with sprig */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--ink)",
                opacity: 0.7,
              }}
            >
              Business Woman
            </p>
            <SprigLeaf color="#241C14" size={36} />
          </div>

          {/* Glimpse strip */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--ink)",
              opacity: 0.75,
              maxWidth: "480px",
              borderLeft: "2px solid var(--marigold)",
              paddingLeft: "18px",
            }}
          >
            Marketing grad who built a small business before business school —
            now an MBA candidate at Deakin, Ahmedabad.
          </p>
        </div>

        {/* Right — portrait */}
        <div
          className="hero-portrait"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "340px",
            justifySelf: "center",
          }}
        >
          {/* Polaroid-style portrait */}
          <div
            style={{
              background: "#fff",
              padding: "10px 10px 32px",
              boxShadow: "0 4px 24px rgba(36,28,20,0.14)",
              transform: "rotate(-1.5deg)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="/gurpreet.jpeg"
                alt="Gurpreet Kaur Jodhka — portrait"
                fill
                sizes="(max-width: 768px) 90vw, 340px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          {/* Caveat caption on polaroid */}
          <p
            style={{
              fontFamily: "var(--font-caveat), cursive",
              fontSize: "0.95rem",
              color: "var(--ink)",
              opacity: 0.5,
              textAlign: "center",
              marginTop: "10px",
              transform: "rotate(-1deg)",
            }}
          >
            Founder, Guldasta — 2026
          </p>
        </div>
      </section>

      {/* ── WORK TEASER ──────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <ScrollFadeUp>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--marigold)",
              marginBottom: "24px",
            }}
          >
            Featured Work
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
            }}
            className="work-teaser-grid"
          >
            {/* Photo */}
            <div
              style={{
                background: "#fff",
                padding: "8px 8px 24px",
                boxShadow: "0 2px 16px rgba(36,28,20,0.1)",
                transform: "rotate(1.5deg)",
                transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "rotate(1.5deg) scale(1.02)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "rotate(1.5deg)")
              }
            >
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src="/guldasta.jpg"
                  alt="Guldasta — handcrafted velvet flower arrangement in marigold and pink"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                Guldasta
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-caveat), cursive",
                  fontSize: "1rem",
                  color: "var(--marigold)",
                  marginBottom: "16px",
                }}
              >
                a 6-month experiment
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  opacity: 0.75,
                  marginBottom: "24px",
                  maxWidth: "380px",
                }}
              >
                A self-funded handcrafted flower startup — 100+ orders,
                ₹10k+ revenue, and a festival feature at Kala Gali, Ludhiana.
              </p>
              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  borderBottom: "1.5px solid var(--marigold)",
                  paddingBottom: "2px",
                  transition: "color 150ms ease",
                }}
              >
                See the full story <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </ScrollFadeUp>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "48px",
          alignItems: "center",
          borderTop: "1px solid var(--border)",
          paddingTop: "60px",
        }}
        className="about-teaser-grid"
      >
        <ScrollFadeUp delay={50}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--forest)",
              marginBottom: "16px",
            }}
          >
            About
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--ink)",
              opacity: 0.8,
              maxWidth: "520px",
              marginBottom: "28px",
            }}
          >
            I studied marketing at S.A.C.C.M under Panjab University, then
            co-founded Guldasta — a handcrafted velvet flower brand — before
            moving into an MBA at Deakin, Ahmedabad. The business taught me
            more than any classroom did.
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "var(--ink)",
              borderBottom: "1.5px solid var(--forest)",
              paddingBottom: "2px",
            }}
          >
            Read more <ArrowRight size={14} weight="bold" />
          </Link>
        </ScrollFadeUp>

        {/* Thumbnail */}
        <ScrollFadeUp delay={100}>
          <div
            style={{
              background: "#fff",
              padding: "8px 8px 20px",
              boxShadow: "0 2px 12px rgba(36,28,20,0.1)",
              transform: "rotate(-2deg)",
              maxWidth: "200px",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
              <Image
                src="/gurpreet.jpeg"
                alt="Gurpreet Kaur Jodhka"
                fill
                sizes="200px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </ScrollFadeUp>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--ink)",
          color: "var(--bg)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <ScrollFadeUp>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              opacity: 0.5,
              marginBottom: "16px",
              color: "var(--bg)",
            }}
          >
            Let&apos;s connect
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "var(--bg)",
              lineHeight: 1.2,
              marginBottom: "28px",
            }}
          >
            Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "var(--marigold)",
              border: "1.5px solid var(--marigold)",
              padding: "12px 28px",
              borderRadius: "3px",
              letterSpacing: "0.04em",
              transition: "background-color 150ms ease, color 150ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--marigold)";
              el.style.color = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "var(--marigold)";
            }}
          >
            Get in touch <ArrowRight size={14} weight="bold" />
          </Link>
        </ScrollFadeUp>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            min-height: unset !important;
            text-align: center;
          }
          .hero-portrait {
            justify-self: center !important;
            max-width: 260px !important;
          }
          .work-teaser-grid {
            grid-template-columns: 1fr !important;
          }
          .about-teaser-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
