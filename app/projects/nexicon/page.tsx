import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/project/media";

const ProjectNexicon = () => {
  return (
    <ProjectLayout
      title=""
      category=""
      thumbnailSrc="/assets/projects/nexicon/thumbnail.webp"
      thumbnailAlt=""
      desc1=""
      desc2=""
      role="Fullstack Web Developer"
      collaborators={["Ari", "Nurul", "Ikhsan"]}
      duration="6 Months"
      tools={["Laravel 12", "Filament", "Spatie", "Livewire", "Tailwind CSS"]}
      liveUrl="https://toondangan.com/"
      docUrl="https://www.instagram.com/toondangan.art/"
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

export default ProjectNexicon;
