import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

const ProjectDimentional = () => {
  return (
    <ProjectLayout
      title="Dimensional Search Franchise"
      category="Corporate Website"
      thumbnailSrc="/assets/projects/dimentional/thumbnail.png"
      thumbnailAlt="Corporate franchise website for Dimensional Search executive recruitment network"
      desc1="A corporate website platform developed for Dimensional Search, an executive recruitment franchise network that helps professionals transition into business ownership through a structured executive search model."
      desc2="The project involved building a scalable multi-page architecture including dynamic franchise pages, informational sections, and marketing-focused content designed to highlight franchise opportunities, leadership expertise, and growth potential across the network."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="3 Weeks"
      tools={["Wordpress", "Avada Builder", "ACF"]}
      liveUrl="https://dimensionalsearch.com/franchise/"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/dimentional/video-1.mp4"
          type="video"
          poster="/assets/projects/dimentional/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Franchise landing page
        </p>

        <Media
          src="/assets/projects/dimentional/image-1.webp"
          alt="Images 1"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          About us page
        </p>

        <Media
          src="/assets/projects/dimentional/image-2.webp"
          alt="Images 2"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Why franchise page
        </p>
        
        <Media
          src="/assets/projects/dimentional/image-3.webp"
          alt="Images 3"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Business model page
        </p>
        
        <Media
          src="/assets/projects/dimentional/image-4.webp"
          alt="Images 4"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Discovery process page
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectDimentional;
