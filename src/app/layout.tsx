import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOSSAIN AHMMED TAUFIQ — Software Engineer · Backend · AI/ML Systems",
  description:
    "Software Engineer with experience building scalable full-stack web applications, backend services, and AI-powered products. Founder of Softlligence Technologies.",
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
  authors: [{ name: "Hossain Ahmmed Taufiq" }],
  openGraph: {
    title: "HOSSAIN AHMMED TAUFIQ | Software Engineer · Backend · AI/ML Systems",
    description:
      "Software Engineer with experience building scalable full-stack web applications, backend services, and AI-powered products. Founder of Softlligence Technologies.",
    url: "https://taufiq.dev",
    siteName: "Hossain Ahmmed Taufiq Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF5500",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F4F4F0] text-[#111111] font-sans selection:bg-[#FF5500] selection:text-white dark:bg-[#0C0D0E] dark:text-[#F0F0EB]">
        {children}
      </body>
    </html>
  );
}
