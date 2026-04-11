import ProjectsSection from "@/components/home/projects-section";

export default function RecentProjectsSection() {
  return (
    <section className="relative overflow-hidden text-white pt-8 pb-[180px] px-3">

      {/* Main Content */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-3 gap-y-8">
          <aside className="flex flex-col md:col-span-4">
            <span className="text-xs font-medium text-white">02/</span>
          </aside>

          <div className="flex flex-col md:col-span-8">
            {/* Inner Grid - Consistent with About */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                Recent Projects
              </p>
              <p className="text-xs font-normal uppercase tracking-widest text-white/60">
                A selection of projects I’ve worked on, ranging from internal
                business systems to customer-facing platforms. Each project
                focuses on scalability, performance, and real-world usability.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:col-span-12">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
