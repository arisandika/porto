import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Gloock } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layouts/main-layout";

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
  title: "Ari Sandika – Fullstack Web Developer",
  description:
    "I'm a fullstack web developer with a focus on building software for real business operations. Includes systems for ERP, recruitment, e-commerce, project management, and other internal business platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
        ${NeueHaas.variable} 
        ${RuderPlakat.variable} 
        ${GeistMono.variable}
        ${gloock.variable}
        bg-[#0e0e0e] text-xs font-normal text-white selection:text-yellow-300 antialiased overflow-x-hidden min-h-screen font-neue
      `}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
