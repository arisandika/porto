import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

const ProjectVidaflo = () => {
  return (
    <ProjectLayout
      title="Vida-Flo IV Hydration Multi-Location Website"
      category="Healthcare & Wellness Platform"
      thumbnailSrc="/assets/projects/vidaflo/thumbnail.png"
      thumbnailAlt="Multi-location IV hydration wellness clinic website for Vida-Flo"
      desc1="A multi-location healthcare marketing platform developed for Vida-Flo, one of America’s original IV hydration wellness clinic networks. The website promotes IV hydration therapy, wellness treatments, and membership programs while supporting multiple clinic locations across the United States."
      desc2="The platform was designed with a scalable location-based architecture where each clinic has its own structured pages (e.g., /nashville/about). Built with WordPress using modular layouts and custom fields, the system enables flexible management of treatments, pricing, blog content, and location-specific information for each branch."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="6 Weeks"
      tools={["Wordpress", "Kadence Builder", "ACF"]}
      liveUrl="https://dimensionalsearch.com/franchise/"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/vidaflo/video-1.mp4"
          type="video"
          poster="/assets/projects/vidaflo/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Landing page
        </p>

        <Media
          src="/assets/projects/vidaflo/video-2.mp4"
          type="video"
          poster="/assets/projects/vidaflo/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          About us page
        </p>

        <Media
          src="/assets/projects/vidaflo/image-1.webp"
          alt="Images 1"
          width={1608}
          height={1004}
        />

        <Media
          src="/assets/projects/vidaflo/image-2.webp"
          alt="Images 2"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Location directory with map integration and booking links
        </p>

        <Media
          src="/assets/projects/vidaflo/image-3.webp"
          alt="Images 3"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Pricing and membership plans
        </p>

        <Media
          src="/assets/projects/vidaflo/video-3.mp4"
          type="video"
          poster="/assets/projects/vidaflo/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Franchise information pages
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectVidaflo;
