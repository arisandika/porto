import type { Metadata } from "next";
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
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // SEO OPTIMIZATION: Open Graph & Twitter
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.role}`,
    description: siteConfig.description,
  },
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
    sameAs: [
      siteConfig.socialLinks.find((link) => link.label === "Linkedin")?.href,
      siteConfig.socialLinks.find((link) => link.label === "Github")?.href,
    ].filter(Boolean),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
