"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "var(--bg)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "border-color 200ms ease, background-color 200ms ease",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            GJ
          </Link>

          {/* Desktop: nav links + theme toggle — hidden on mobile */}
          <div className="nav-desktop">
            <ul style={{ display: "flex", gap: "36px", listStyle: "none", alignItems: "center" }}>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={`nav-link${pathname === href ? " active" : ""}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger — hidden on desktop */}
          <div className="nav-mobile">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--ink)",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            backgroundColor: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "2.5rem",
                fontWeight: 500,
                color: pathname === href ? "var(--marigold)" : "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-mobile {
          display: none;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .nav-desktop { display: none; }
          .nav-mobile  { display: flex; }
        }
      `}</style>
    </>
  );
}
