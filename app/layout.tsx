import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ari Sandika – Fullstack Web Developer",
  description:
    "Ari Sandika is a fullstack web developer building scalable web applications and digital platforms using modern frameworks for ERP, recruitment, e-commerce, and business systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} font-mono bg-[#111111]  text-sm font-medium text-white selection:text-yellow-300 antialiased no-scrollbar`}
      >
        <div className="flex flex-col items-center border-b border-solid z-200 border-neutral-800">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
