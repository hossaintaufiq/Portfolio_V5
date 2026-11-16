import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hossain Ahmmed Taufiq — Software Engineer · Backend & AI Systems",
  description:
    "Software Engineer building scalable backend services and AI-powered products. Backend AI Engineer at Edumax Labs and Founder of Softlligence Technologies.",
  keywords: [
    "Hossain Ahmmed Taufiq",
    "Software Engineer",
    "Backend Engineer",
    "AI/ML Systems",
    "Multimodal RAG",
    "Softlligence Technologies",
    "Full-Stack Developer",
    "North South University",
  ],
  openGraph: {
    title: "HOSSAIN AHMMED TAUFIQ | Software Engineer · Backend · AI/ML Systems",
    description:
      "Software Engineer building scalable backend services and AI-powered products. Backend AI Engineer at Edumax Labs and Founder of Softlligence Technologies.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossain Ahmmed Taufiq — Software Engineer · Backend & AI Systems",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#EDEFF2",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Backend AI Engineer",
  worksFor: { "@type": "Organization", name: "Edumax Labs" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "North South University" },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: [PORTFOLIO_DATA.identity.links.linkedin, PORTFOLIO_DATA.identity.links.github],
  knowsAbout: [
    "Backend engineering",
    "Retrieval-augmented generation",
    "Multi-tenant SaaS",
    "Machine learning",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSerif.variable} ${plexSans.variable}`}>
      <body className="min-h-screen bg-paper text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personLd).replace(/</g, String.fromCharCode(92) + "u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
