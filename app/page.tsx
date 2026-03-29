import Hero from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import RecentProjectsSection from "@/components/home/recent-projects-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="relative z-10">
        <div className="h-[57vh] md:h-[75vh]" />

        {/* <section className="absolute inset-0 z-[30] flex items-center justify-center h-screen pointer-events-none">
          <Image
            src="/assets/images/a.png"
            alt="First image"
            width={500}
            height={500}
            priority
            className="h-auto w-[60vw] md:w-[34vw] object-contain"
          />
        </section> */}

        {/* <section className="relative flex items-center justify-center h-screen pointer-events-none">
          <Image
            src="/assets/images/ari.webp"
            alt="Second image"
            width={1400}
            height={1400}
            priority
            className="h-auto w-full md:w-[50vw] object-contain p-3"
          />
        </section> */}

        <AboutSection />

        <div className="h-[57vh] md:h-screen" />

        <RecentProjectsSection />
      </div>
    </main>
  );
}