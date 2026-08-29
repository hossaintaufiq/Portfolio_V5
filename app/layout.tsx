import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono } from "next/font/google";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full bg-background antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": siteConfig.name,
                "jobTitle": "Software Engineer",
                "knowsAbout": [
                  "Software Engineering",
                  "Full-Stack Engineering",
                  "Backend Systems",
                  "System Architecture",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Mobile Applications (Android, Kotlin)"
                ],
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "North South University"
                },
                "email": siteConfig.email,
                "telephone": siteConfig.phone,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dhaka",
                  "addressCountry": "Bangladesh"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/hossain-ahmmed-129b29253",
                  "https://github.com/hossaintaufiq"
                ]
              }
            }),
          }}
        />
        <ScrollProgress />
        <PremiumCursor />
        {children}
      </body>
    </html>
  );
}
