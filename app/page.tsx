import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects-section";
import { projectsData } from "./data/projects";
import { siteConfig } from "./config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // SEO OPTIMIZATION: JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        genre: project.category,
        dateCreated: project.year,
        url: project.href.startsWith("http")
          ? project.href
          : `${siteConfig.url}${project.href}`,
      },
    })),
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProjectsSection />
    </div>
  );
}
