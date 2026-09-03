"use client";

import Image from "next/image";
import ScrollFadeUp from "@/components/ScrollFadeUp";
import Postmark from "@/components/illustrations/Postmark";
import { LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px 100px",
        minHeight: "calc(100dvh - 160px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left — contact content */}
        <div>
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
              Contact
            </p>
            <h1
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Want to know more?
              <br />
              Reach out.
            </h1>
          </ScrollFadeUp>

          {/* Postmark illustration */}
          <ScrollFadeUp delay={60}>
            <div style={{ marginBottom: "40px" }}>
              <Postmark color="#C6396B" size={52} />
            </div>
          </ScrollFadeUp>

          {/* Email */}
          <ScrollFadeUp delay={80}>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "28px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  opacity: 0.45,
                  marginBottom: "10px",
                }}
              >
                Email
              </p>
              <a
                href="mailto:gurpreet@gurpreetjodhka.com"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 500,
                  color: "var(--ink)",
                  borderBottom: "1.5px solid var(--marigold)",
                  paddingBottom: "2px",
                  transition: "color 150ms ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--marigold)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--ink)")
                }
              >
                gurpreet@gurpreetjodhka.com
              </a>
            </div>
          </ScrollFadeUp>

          {/* Socials */}
          <ScrollFadeUp delay={100}>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  opacity: 0.45,
                  marginBottom: "16px",
                }}
              >
                Socials
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a
                  href="https://www.linkedin.com/in/gurpreet-kaur-168303215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gurpreet on LinkedIn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                    opacity: 0.75,
                    transition: "opacity 150ms ease",
                    border: "1.5px solid var(--border)",
                    padding: "10px 18px",
                    borderRadius: "3px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.75")
                  }
                >
                  <LinkedinLogo size={18} weight="regular" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/guldasta.inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Guldasta on Instagram"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                    opacity: 0.75,
                    transition: "opacity 150ms ease",
                    border: "1.5px solid var(--border)",
                    padding: "10px 18px",
                    borderRadius: "3px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.75")
                  }
                >
                  <InstagramLogo size={18} weight="regular" />
                  Guldasta.inn
                </a>
              </div>
            </div>
          </ScrollFadeUp>
        </div>

        {/* Right — portrait photo */}
        <ScrollFadeUp delay={120}>
          <div
            style={{
              background: "#fff",
              padding: "10px 10px 28px",
              boxShadow: "0 4px 24px rgba(36,28,20,0.1)",
              transform: "rotate(1.5deg)",
              maxWidth: "280px",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
              <Image
                src="https://picsum.photos/seed/gurpreet-contact/480/600"
                alt="Gurpreet Kaur Jodhka — contact portrait"
                fill
                sizes="280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-caveat), cursive",
              fontSize: "0.9rem",
              color: "var(--ink)",
              opacity: 0.45,
              marginTop: "10px",
              transform: "rotate(1deg)",
              display: "block",
              textAlign: "center",
              maxWidth: "280px",
            }}
          >
            say hello
          </p>
        </ScrollFadeUp>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
