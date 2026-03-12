import ProjectCard from "./project-card";

const projects1 = [
  {
    id: 1,
    title: "INTERA-ERP",
    subtitle: "Business System",
    year: "2026",
    width: 1080,
    height: 740,
    href: "/projects/nexicon",
    thumbnailSrc: "/assets/projects/nexicon/card.webp",
  },
];

const projects2 = [
  {
    id: 1,
    title: "Taylor & Travis Animated Wedding Invitation",
    subtitle: "Digital Wedding Invitation",
    year: "2026",
    width: 1080,
    height: 1080,
    href: "/projects/taylor",
    thumbnailSrc: "/assets/projects/taylor/video-1.mp4",
  },
];

const projects3 = [
  {
    id: 1,
    title: "Toondangan Landing Page",
    subtitle: "Media Creative",
    year: "2026",
    width: 1080,
    height: 740,
    href: "/projects/toondangan",
    thumbnailSrc: "/assets/projects/toondangan/card.webp",
  },
];

const ProjectsSection = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center w-full pb-4 mb-0 md:mb-8 border-b border-white/10">
        <span className="text-xs font-light tracking-widest text-white uppercase opacity-40">
          Craft
        </span>
      </div>

      <div className="grid items-start grid-cols-1 gap-6 md:gap-3 md:grid-cols-3">
        <div className="flex flex-col gap-6 cols-span-1">
          {projects1.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex flex-col gap-6 cols-span-1">
          {projects2.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex flex-col gap-6 cols-span-1">
          {projects3.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
