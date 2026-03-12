import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/project/media";

const ProjectDimentional = () => {
  return (
    <ProjectLayout
      title="Dimensional Search Franchise Landing Page"
      category="Corporate Landing Page"
      thumbnailSrc="/assets/projects/dimentional/thumbnail.png"
      thumbnailAlt="Corporate landing page for Dimensional Search executive recruitment franchise platform"
      desc1="A corporate landing page developed for Dimensional Search, an executive recruitment franchise platform that helps professionals transition into business ownership in the executive search industry."
      desc2="The website focuses on communicating franchise opportunities, leadership credibility, and growth potential through structured sections such as business model explanation, market expansion, ownership process, FAQs, blog insights, and integrated contact funnels."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="3 Weeks"
      tools={["Wordpress", "Avada Builder", "ACF"]}
      liveUrl="https://dimensionalsearch.com/franchise/"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        {/* <Media
          src="/assets/projects/toondangan/video-1.mp4"
          type="video"
          poster="/assets/projects/toondangan/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Business landing page
        </p>

        <Media
          src="/assets/projects/toondangan/video-2.mp4"
          type="video"
          poster="/assets/projects/toondangan/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Dynamic pricing list
        </p> */}
      </div>
    </ProjectLayout>
  );
};

export default ProjectDimentional;
