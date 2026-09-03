"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollFadeUp from "@/components/ScrollFadeUp";
import { DownloadSimple } from "@phosphor-icons/react";

const education = [
  { course: "BCOM (Hons), Marketing", institute: "S.A.C.C.M, Panjab University", year: "2026" },
  { course: "XII — Commerce", institute: "BCM Arya Model, C.B.S.E.", year: "2023" },
  { course: "X — General", institute: "BCM Arya Model, C.B.S.E.", year: "2021" },
];

const skills = ["MS Excel", "Canva", "Market Research", "Social Media Marketing", "Event Management"];
const languages = ["English", "Hindi", "Punjabi"];

export default function About() {
  return (
    <article
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "72px 24px 96px",
      }}
    >
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
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
          About
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "48px",
            maxWidth: "640px",
          }}
        >
          The person behind the work
        </h1>
      </ScrollFadeUp>

      {/* ── BIO + PORTRAIT ───────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "56px",
          alignItems: "start",
          marginBottom: "72px",
          borderTop: "1px solid var(--border)",
          paddingTop: "48px",
        }}
        className="bio-grid"
      >
        <ScrollFadeUp>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink)",
                opacity: 0.85,
                marginBottom: "22px",
                maxWidth: "600px",
              }}
            >
              I grew up knowing I wanted to build something of my own. I studied
              marketing at S.A.C.C.M under Panjab University — a practical,
              commerce-first education that taught me to read markets, not just
              describe them. Before finishing my degree, I co-founded{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontStyle: "italic",
                }}
              >
                Guldasta
                <svg
                  style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "8px" }}
                  viewBox="0 0 80 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6 C12 2, 22 7, 32 5 C42 3, 52 7, 62 4 C68 2, 74 6, 78 4"
                    stroke="#C6396B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              , a handcrafted velvet flower brand with my sister. We ran it
              lean, made it work, and sold out at our first public market.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink)",
                opacity: 0.85,
                maxWidth: "600px",
              }}
            >
              When she moved for college, we closed the chapter. But the business
              had already answered my question: I wanted to understand how
              organisations grow, not just what products they sell. That&apos;s
              why I&apos;m now pursuing an MBA at Deakin, Ahmedabad — building
              the strategic layer on top of the operational one I already have.
            </p>

            {/* Tag row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "28px",
              }}
            >
              {[
                "MBA Candidate, Deakin Ahmedabad",
                "BCOM (Hons), Marketing",
                "Founder, Guldasta",
              ].map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollFadeUp>

        {/* Portrait */}
        <ScrollFadeUp delay={80}>
          <div
            style={{
              background: "#fff",
              padding: "10px 10px 30px",
              boxShadow: "0 4px 24px rgba(36,28,20,0.12)",
              transform: "rotate(2deg)",
              maxWidth: "280px",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="https://picsum.photos/seed/gurpreet-about-full/600/800"
                alt="Gurpreet Kaur Jodhka — about portrait"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </ScrollFadeUp>
      </div>

      {/* ── EDUCATION ────────────────────────────────────────── */}
      <ScrollFadeUp delay={60}>
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              marginBottom: "24px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Education
          </h2>
          <table
            style={{
              width: "100%",
              maxWidth: "680px",
              borderCollapse: "collapse",
              fontFamily: "var(--font-body)",
              fontSize: "0.92rem",
            }}
          >
            <thead>
              <tr>
                {["Course", "Institute", "Year"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "0 0 12px",
                      fontWeight: 500,
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      color: "var(--ink)",
                      opacity: 0.45,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {education.map(({ course, institute, year }) => (
                <tr key={course}>
                  <td style={{ padding: "16px 0", color: "var(--ink)", fontWeight: 500 }}>
                    {course}
                  </td>
                  <td style={{ padding: "16px 0", color: "var(--ink)", opacity: 0.65 }}>
                    {institute}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      color: "var(--marigold)",
                      fontFamily: "var(--font-caveat), cursive",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </ScrollFadeUp>

      {/* ── SKILLS & LANGUAGES ───────────────────────────────── */}
      <ScrollFadeUp delay={80}>
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Skills &amp; Languages
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {skills.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {languages.map((l) => (
              <span
                key={l}
                className="pill"
                style={{ borderColor: "var(--forest)", color: "var(--forest)" }}
              >
                {l}
              </span>
            ))}
          </div>
        </section>
      </ScrollFadeUp>

      {/* ── DOWNLOAD RESUME ──────────────────────────────────── */}
      <ScrollFadeUp delay={100}>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
          <DownloadSimple size={16} weight="regular" />
          Download Resume
        </Link>
      </ScrollFadeUp>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .bio-grid {
            grid-template-columns: 1fr !important;
          }
        }
        tr + tr td {
          border-top: 1px solid var(--border);
        }
      `}</style>
    </article>
  );
}
