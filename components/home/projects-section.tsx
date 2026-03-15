import ProjectCard from "./project-card";

const projects1 = [
  {
    id: 1,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/interaerp",
    thumbnailSrc: "/assets/projects/interaerp/card.webp",
    gradient: "#014880",
    radial: "",
  },
  {
    id: 2,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/vidaflo",
    thumbnailSrc: "/assets/projects/vidaflo/card.webp",
    gradient: "#002759",
    radial: "",
  },
  {
    id: 3,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/smalltowntnchristmas",
    thumbnailSrc: "/assets/projects/smalltowntnchristmas/card.webp",
    gradient: "#5f131d",
    radial: "",
  },
  {
    id: 4,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/thproofing",
    thumbnailSrc: "/assets/projects/thproofing/card.webp",
    gradient: "#005d7d",
    radial: "#014880",
  },
  {
    id: 5,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/taylor",
    thumbnailSrc: "/assets/projects/taylor/card.webp",
    gradient: "#7b3d10",
    radial: "",
  },
  {
    id: 6,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/toondangan",
    thumbnailSrc: "/assets/projects/toondangan/card.mp4",
    gradient: "",
    radial: "",
  },
  {
    id: 7,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/perthamboy",
    thumbnailSrc: "/assets/projects/perthamboy/card.webp",
    gradient: "#351d3f",
    radial: "#41348c",
  },
  {
    id: 8,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/maconcounty",
    thumbnailSrc: "/assets/projects/maconcounty/card.webp",
    gradient: "#3D543A",
    radial: "#26371660",
  },
  {
    id: 9,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/decatur",
    thumbnailSrc: "/assets/projects/decatur/card.webp",
    gradient: "#323323",
    radial: "#31331c",
  },
  {
    id: 10,
    title: "",
    category: "",
    year: "",
    width: 1608,
    height: 1090,
    href: "/projects/dimensional",
    thumbnailSrc: "/assets/projects/dimensional/card.webp",
    gradient: "#111a39",
    radial: "#45446d",
  },
];

const ProjectsSection = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center w-full pb-4 mb-6 border-b md:mb-8 border-white/10">
        <span className="text-xs font-light tracking-widest text-white uppercase opacity-40">
          Craft
        </span>
      </div>

      <div className="grid items-start w-full gap-6 mx-auto md:grid-cols-2 md:gap-8">
        {projects1.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
            priority={index === 0} 
          />
        ))}
      </div>
    </section>
  );
};


export default ProjectsSection;
