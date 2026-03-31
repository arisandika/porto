import Hero from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import RecentProjectsSection from "@/components/home/recent-projects-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <RecentProjectsSection />
    </main>
  );
}
