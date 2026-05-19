import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Gloock } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layouts/main-layout";
import { siteConfig } from "./config/site";
import { LoadingProvider } from "./context/loading-context";

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const NeueHaas = localFont({
  src: [
    {
      path: "./fonts/NeueHaasUnica-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasUnica-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasUnica-Medium.woff",
      weight: "500",
      style: "normal",
    },
    { path: "./fonts/NeueHaasUnica-Bold.woff", weight: "700", style: "normal" },
    {
      path: "./fonts/NeueHaasUnica-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasUnica-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue-haas",
});

const RuderPlakat = localFont({
  src: [
    {
      path: "./fonts/RuderPlakatLLVIPTrial.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ruder-plakat",
});

const gloock = Gloock({
  variable: "--font-gloock",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// SEO: Viewport export (Next.js 14+ best practice)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0e",
};

export const metadata: Metadata = {
  // SEO CRITICAL: metadataBase resolves all relative OG/canonical URLs
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // SEO: Canonical URL for the root
  alternates: {
    canonical: "/",
  },
  // SEO: Indexing directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // SEO OPTIMIZATION: Open Graph & Twitter
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – ${siteConfig.role} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  // SEO: Additional metadata
  keywords: [
    "Ari Sandika",
    "Fullstack Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "Portfolio",
    "Web Developer Indonesia",
    "ERP Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // SEO OPTIMIZATION: Structured Data JSON-LD untuk Portfolio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/assets/images/ari.webp`,
    sameAs: [
      siteConfig.socialLinks.find((link) => link.label === "Linkedin")?.href,
      siteConfig.socialLinks.find((link) => link.label === "Github")?.href,
    ].filter(Boolean),
    knowsAbout: [
      "Laravel",
      "Next.js",
      "React",
      "WordPress",
      "TypeScript",
      "PHP",
      "REST API",
      "ERP Systems",
    ],
  };

  // SEO: WebSite schema for sitelinks search box
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${NeueHaas.variable} ${RuderPlakat.variable} ${GeistMono.variable} ${gloock.variable} overflow-x-hidden bg-[#0e0e0e] font-neue text-xs font-normal text-white antialiased selection:text-yellow-300`}
      >
        <LoadingProvider>
          <MainLayout>{children}</MainLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
