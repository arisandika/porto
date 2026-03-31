import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

const ProjectTHPRoofing = () => {
  return (
    <ProjectLayout
      title="THP Roofing of Knoxville"
      category="Local Business Website"
      thumbnailSrc="/assets/projects/thp-roofing/thumbnail.png"
      thumbnailAlt="Corporate roofing company website for THP Roofing of Knoxville"
      desc1="A full corporate website developed for THP Roofing of Knoxville, a residential and commercial roofing company serving East Tennessee. The site highlights the company's commitment to transparency, modern roofing technology, and a customer-first service approach."
      desc2="The project included building a scalable multi-page structure covering services, service areas, company background, and lead-generation contact flows. The website emphasizes clear service explanations, trust-building content, and conversion-focused sections such as free inspection requests and service coverage pages."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="3 Weeks"
      tools={["Wordpress", "Kadence Builder", "ACF"]}
      liveUrl="#"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/thp-roofing/video-1.mp4"
          type="video"
          poster="/assets/projects/thp-roofing/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Landing page
        </p>

        <Media
          src="/assets/projects/thp-roofing/video-2.mp4"
          type="video"
          poster="/assets/projects/thp-roofing/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Areas Served (regional service locations)
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectTHPRoofing;
