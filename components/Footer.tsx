"use client";

import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Left — wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "var(--ink)",
          }}
        >
          Gurpreet Kaur Jodhka
        </Link>

        {/* Center — nav repeat */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            listStyle: "none",
            flexWrap: "wrap",
          }}
        >
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--ink)",
                opacity: 0.6,
                transition: "opacity 150ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.6")
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right — credit */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "var(--ink)",
            opacity: 0.4,
          }}
        >
          &copy; 2026 Gurpreet Kaur Jodhka
        </p>
      </div>
    </footer>
  );
}
