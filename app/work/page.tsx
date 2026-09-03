"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollFadeUp from "@/components/ScrollFadeUp";
import SquiggleLine from "@/components/illustrations/SquiggleLine";
import { ArrowSquareOut } from "@phosphor-icons/react";

const stats = [
  { number: "100+", label: "Customised orders" },
  { number: "₹10k+", label: "Revenue generated" },
  { number: "200+", label: "Customers reached" },
  { number: "1", label: "Festival feature" },
];

const timeline = [
  {
    role: "Marketing Club Member",
    org: "S.A.C.C.M",
    years: "2023–2026",
    description:
      "Managed and executed marketing events, competitions, and alumni guest lectures across the undergraduate programme.",
  },
  {
    role: "NSS Core Committee",
    org: "National Service Scheme",
    years: "2024–2026",
    description:
      "Planned social welfare activities; participated in awareness campaigns, cleanliness drives, and blood donation camps.",
  },
  {
    role: "Organising Committee — Mettle",
    org: "College Flagship Event",
    years: "2026",
    description:
      "Coordinated on-ground logistics, led inter-college outreach, managed registrations and participant flow.",
  },
  {
    role: "Convocation Ceremony Committee",
    org: "S.A.C.C.M",
    years: "2026",
    description:
      "Coordinated logistics for a 1000+ attendee ceremony — guest registration, venue operations, and participant scheduling.",
  },
];

// Guldasta photo grid
const photos = [
  {
    src: "/guldasta.jpg",
    alt: "Guldasta — close-up of handcrafted velvet flower bouquet in marigold and pink",
    polaroid: true,
    tilt: "neg" as const,
  },
  {
    src: "/guldasta.jpg",
    alt: "Kala Gali Ludhiana Art Festival — Guldasta stall with velvet flower arrangements",
    polaroid: false,
    tilt: "none" as const,
  },
  {
    src: "/guldasta.jpg",
    alt: "Customer selecting a handcrafted Guldasta bouquet at the market stall",
    polaroid: false,
    tilt: "none" as const,
  },
  {
    src: "/guldasta.jpg",
    alt: "Guldasta founders outdoors with velvet flower arrangements — candid shot",
    polaroid: true,
    tilt: "pos" as const,
  },
];

export default function Work() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 0",
        }}
      >
        <ScrollFadeUp>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--marigold)",
              marginBottom: "12px",
            }}
          >
            Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "48px",
              maxWidth: "560px",
            }}
          >
            Proof over promise
          </h1>
        </ScrollFadeUp>
      </section>

      {/* ── GULDASTA CASE STUDY ───────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          borderTop: "1px solid var(--border)",
          paddingTop: "56px",
        }}
      >
        {/* Pull-quote intro */}
        <ScrollFadeUp>
          <div style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.3,
                maxWidth: "680px",
                color: "var(--ink)",
                marginBottom: "10px",
              }}
            >
              &ldquo;Guldasta was a 6-month experiment in building something
              real before knowing all the rules.&rdquo;
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--ink)",
                opacity: 0.5,
                letterSpacing: "0.02em",
              }}
            >
              Self-funded startup · January 2026 – June 2026 · Punjab, India
            </p>
          </div>
        </ScrollFadeUp>

        {/* 2×2 Photo Grid */}
        <ScrollFadeUp delay={60}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginBottom: "56px",
            }}
            className="photo-grid"
          >
            {photos.map(({ src, alt, polaroid, tilt }) => (
              <div
                key={src}
                style={{
                  ...(polaroid
                    ? {
                        background: "#fff",
                        padding: "8px 8px 24px",
                        boxShadow: "0 2px 16px rgba(36,28,20,0.1)",
                        transform:
                          tilt === "neg"
                            ? "rotate(-2deg)"
                            : tilt === "pos"
                            ? "rotate(1.5deg)"
                            : "none",
                        transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
                      }
                    : {
                        overflow: "hidden",
                        transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
                      }),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  const base = polaroid
                    ? tilt === "neg"
                      ? "rotate(-2deg)"
                      : "rotate(1.5deg)"
                    : "none";
                  el.style.transform = `${base} scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = polaroid
                    ? tilt === "neg"
                      ? "rotate(-2deg)"
                      : "rotate(1.5deg)"
                    : "none";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: src.includes("bouquet") ? "3/4" : "4/3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeUp>

        {/* Stat chips */}
        <ScrollFadeUp delay={80}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginBottom: "48px",
            }}
            className="stat-grid"
          >
            {stats.map(({ number, label }) => (
              <div key={label} className="stat-chip">
                {/* Stamp doodle */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  style={{ position: "absolute", top: "10px", right: "12px" }}
                >
                  <circle cx="9" cy="9" r="7" stroke="#241C14" strokeWidth="1" fill="none" strokeDasharray="2 1.5" />
                  <circle cx="9" cy="9" r="3" stroke="#E07A2C" strokeWidth="1" fill="none" />
                </svg>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </ScrollFadeUp>

        {/* Reflection */}
        <ScrollFadeUp delay={100}>
          <div style={{ maxWidth: "600px", marginBottom: "36px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--ink)",
                opacity: 0.8,
              }}
            >
              No ads. No hype. Just real people choosing our work — and nearly
              selling out inventory at the first public market we entered. What
              Guldasta gave me wasn&apos;t just a number. It was proof that
              customer trust is earned in execution, not in planning.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/guldasta.inn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "var(--berry)",
              borderBottom: "1.5px solid var(--berry)",
              paddingBottom: "2px",
              transition: "opacity 150ms ease",
            }}
          >
            See Guldasta on Instagram <ArrowSquareOut size={14} weight="bold" />
          </Link>
        </ScrollFadeUp>
      </section>

      {/* ── SQUIGGLE DIVIDER ─────────────────────────────────── */}
      <div style={{ padding: "0 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <SquiggleLine color="#D8B98C" />
      </div>

      {/* ── LEADERSHIP — INVERTED SECTION ───────────────────── */}
      <section className="section-inverted" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollFadeUp>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--marigold)",
                marginBottom: "12px",
                opacity: 1,
              }}
            >
              Involvement
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: "56px",
                color: "var(--bg)",
              }}
            >
              Leadership &amp; Involvement
            </h2>
          </ScrollFadeUp>

          {/* Vertical timeline */}
          <div style={{ maxWidth: "640px" }}>
            {timeline.map(({ role, org, years, description }, i) => (
              <ScrollFadeUp key={role} delay={i * 80}>
                <div className="timeline-entry" style={{ paddingLeft: "28px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "14px",
                      flexWrap: "wrap",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "var(--bg)",
                        lineHeight: 1.2,
                      }}
                    >
                      {role}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-caveat), cursive",
                        fontSize: "0.95rem",
                        color: "var(--marigold)",
                        fontWeight: 400,
                      }}
                    >
                      {years}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "var(--bg)",
                      opacity: 0.65,
                      maxWidth: "540px",
                    }}
                  >
                    {org} — {description}
                  </p>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          .photo-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .timeline-entry::before {
          background-color: var(--marigold) !important;
        }
        .section-inverted .timeline-entry::after {
          background-color: rgba(246,241,228,0.2) !important;
        }
      `}</style>
    </>
  );
}
