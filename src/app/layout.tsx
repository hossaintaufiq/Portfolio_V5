import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://taufiq.dev"),
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "HOSSAIN AHMMED TAUFIQ | Software Engineer · Backend · AI/ML Systems",
    description:
      "Software Engineer building scalable backend services and AI-powered products. Backend AI Engineer at Edumax Labs and Founder of Softlligence Technologies.",
    url: "https://taufiq.dev",
    siteName: "Hossain Ahmmed Taufiq Portfolio",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSerif.variable} ${plexSans.variable}`}>
      <body className="min-h-screen bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
