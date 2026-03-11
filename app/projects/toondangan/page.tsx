import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/project/media";

const ProjectTaylor = () => {
  return (
    <ProjectLayout
      title="Toondangan Landing Page"
      category="Media Creative"
      thumbnailSrc="/assets/images/projects/toondangan/thumbnail-2.webp"
      thumbnailAlt="Landing page website for Toondangan animated digital wedding invitation service"
      desc1="A modern landing page built for Toondangan, a digital wedding invitation service that focuses on custom illustrations, animated storytelling, and interactive web experiences to capture each couple’s unique love story."
      desc2="The website highlights core features such as RSVP confirmation, digital envelopes, countdown timers, gallery sections, Google Maps integration, automatic WhatsApp sharing, and customizable background music to create a complete digital invitation ecosystem."
      role="Fullstack Web Developer"
      collaborators={["Ari Sandika", "Creative Team", "Illustration Team"]}
      duration="1 Month"
      tools={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
      liveUrl="#"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/videos/projects/toondangan/video-1.mp4"
          type="video"
          poster="/assets/images/projects/toondangan/thumbnail-2.webp"
          widthVideo="md:w-[100%] w-[100%]"
        />

        <p className="text-xs uppercase opacity-60">
          Business landing page
        </p>

        <Media
          src="/assets/videos/projects/toondangan/video-2.mp4"
          type="video"
          poster="/assets/images/projects/toondangan/thumbnail-2.webp"
        />

        <p className="text-xs uppercase opacity-60">
          Dynamic pricing list
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectTaylor;
