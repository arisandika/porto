import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/project/media";

const ProjectToondangan = () => {
  return (
    <ProjectLayout
      title="Toondangan Landing Page"
      category="Media Creative"
      thumbnailSrc="/assets/projects/toondangan/thumbnail.webp"
      thumbnailAlt="Landing page website for Toondangan animated digital wedding invitation service"
      desc1="A modern landing page built for Toondangan, a digital wedding invitation service that focuses on custom illustrations, animated storytelling, and interactive web experiences to capture each couple’s unique love story."
      desc2="The website highlights core features such as RSVP confirmation, digital envelopes, countdown timers, gallery sections, Google Maps integration, automatic WhatsApp sharing, and customizable background music to create a complete digital invitation ecosystem."
      role="Frontend Web Developer"
      collaborators={["Ari", "Rico", "Gaby"]}
      duration="2 Weeks"
      tools={["Next.js", "Tailwind CSS", "Framer Motion"]}
      liveUrl="https://toondangan.com/"
      docUrl="https://www.instagram.com/toondangan.art/"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
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
        </p>

        <Media
          src="/assets/projects/toondangan/image-1.webp"
          alt="Images 1"
          width={1608}
          height={973}
        />
      </div>
    </ProjectLayout>
  );
};

export default ProjectToondangan;
