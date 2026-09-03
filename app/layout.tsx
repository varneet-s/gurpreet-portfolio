import type { Metadata } from "next";
import { Fraunces, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gurpreet Kaur Jodhka | Business Woman",
    template: "%s — Gurpreet Kaur Jodhka",
  },
  description:
    "Marketing grad and MBA candidate at Deakin, Ahmedabad — founder of Guldasta, a handcrafted velvet flower brand.",
  metadataBase: new URL("https://gurpreetjodhka.com"),
  openGraph: {
    type: "website",
    siteName: "Gurpreet Kaur Jodhka",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} ${caveat.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F6F1E4" />
        {/* Anti-flash: apply theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&p)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body style={{ transition: "background-color 200ms ease, color 200ms ease" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
