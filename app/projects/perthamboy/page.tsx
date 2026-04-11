import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

const ProjectPerthAmboy = () => {
  return (
    <ProjectLayout
      title="Visit Perth Amboy Tourism Website"
      category="Tourism & Destination Website"
      thumbnailSrc="/assets/projects/perthamboy/thumbnail.webp"
      thumbnailAlt="Tourism destination website for Visit Perth Amboy waterfront city guide"
      desc1="A tourism and destination platform developed for Visit Perth Amboy, designed to promote the city's historic waterfront, multicultural community, and local experiences across New Jersey’s Raritan Bay region."
      desc2="The website features a structured content system highlighting attractions, local businesses, events, dining, and travel planning resources. Built with a flexible WordPress architecture to support event listings, editorial stories, visitor guides, and dynamic content management for tourism marketing."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="3 Weeks"
      tools={["Wordpress", "Kadence Builder", "ACF"]}
      liveUrl="https://dimensionalsearch.com/franchise/"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/perthamboy/video-1.mp4"
          type="video"
          poster="/assets/projects/perthamboy/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Landing page
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectPerthAmboy;
