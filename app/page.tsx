import Hero from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <div className="relative z-10">
        <section className="h-[100vh]" />

        <section className="absolute inset-0 h-[100vh] flex items-center justify-center">
          <div className="absolute-center-box">
            <Image
              src="/assets/images/a.png"
              alt="Center floating element"
              width={500}
              height={500}
              priority
              className="img-fluid-half"
            />
          </div>
        </section>

        <section className="bg-[#0e0e0e] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="bg-glow-overlay-bottom" />
            <div className="bg-noise-overlay" />
          </div>

          <div className="flex px-3 py-8 h-screen items-center md:items-stretch md:justify-between section-hero-bottom">
            <div className="grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-12">
              <aside className="flex flex-col gap-1 md:col-span-4 md:sticky md:top-8 h-fit">
                <span className="text-xs font-medium text-white">01/</span>
              </aside>

              <div className="flex flex-col md:col-span-8 h-fit">
                <section className="grid grid-cols-1 gap-12 md:gap-3 md:grid-cols-2">
                  <p className="text-xs font-normal tracking-widest text-white uppercase opacity-40">
                    About
                  </p>

                  <p className="text-xs font-normal tracking-widest text-white uppercase opacity-40">
                    I’m a fullstack web developer with a focus on building
                    software for real business operations. My work includes
                    systems for ERP, recruitment, e-commerce, project
                    management, and other internal business platforms.
                    Previously, I collaborated with teams at Nexicon, RHP Cipta
                    Digital, Toffeedev, and 1011 Group.
                  </p>
                </section>
              </div>

              <div className="flex flex-col gap-12 md:gap-8 md:col-span-12">
                <div className="hero-text-content">
                  <div className="text-hero">
                    I build scalable products, seamless interactions, and
                    end-to-end digital{" "}
                    <span className="text-hero-serif">experiences.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center"></section>

        <section className="bg-[#111] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="bg-glow-overlay-linear" />
            <div className="bg-noise-overlay" />
          </div>

          <div className="px-3 py-8 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-12 relative z-10 section-hero-linear">
            <aside className="flex flex-col gap-1 md:col-span-4 md:sticky md:top-8 h-fit">
              <span className="text-xs font-medium text-white">02/</span>
            </aside>

            <div className="flex flex-col gap-6 md:gap-8 md:col-span-8 h-fit">
              <section className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-2">
                <p className="text-xs font-normal tracking-widest text-white uppercase opacity-40">
                  Recent Projects
                </p>

                <p className="text-xs font-normal tracking-widest text-white uppercase opacity-40">
                  A selection of projects I’ve worked on, ranging from internal
                  business systems to customer-facing platforms. Each project
                  focuses on scalability, performance, and real-world usability.
                </p>
              </section>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 md:col-span-12">
              <ProjectsSection />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
