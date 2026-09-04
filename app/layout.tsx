import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://gurpreetjodhka.com'),
  title: {
    default: 'Gurpreet Kaur Jodhka — MBA & Marketing',
    template: '%s | Gurpreet Kaur Jodhka',
  },
  description:
    'Gurpreet Kaur Jodhka — MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
  icons: {
    icon: '/assets/logo-wordmark.svg',
  },
  openGraph: {
    title: 'Gurpreet Kaur Jodhka — MBA & Marketing',
    description:
      'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
    url: 'https://gurpreetjodhka.com',
    siteName: 'Gurpreet Kaur Jodhka Portfolio',
    images: [
      {
        url: '/gurpreet.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gurpreet Kaur Jodhka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurpreet Kaur Jodhka — MBA & Marketing',
    description:
      'MBA Candidate at Deakin University, Ahmedabad. Former founder of Guldasta, marketing graduate from S.A.C.C.M, Panjab University.',
    images: ['/gurpreet.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-body">
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
