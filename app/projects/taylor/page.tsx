import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

const ProjectTaylor = () => {
  return (
    <ProjectLayout
      title="Taylor & Travis Animated Wedding Invitation"
      category="Digital Wedding Invitation"
      thumbnailSrc="/assets/projects/taylor/thumbnail.webp"
      thumbnailAlt="Animated wedding invitation concept for Taylor Swift and Travis Kelce with storytelling cartoon characters"
      desc1="A digital wedding invitation concept inspired by the Toondangan animation style, featuring cartoon-based storytelling that illustrates the romantic journey of Taylor Swift and Travis Kelce."
      desc2="The project focuses on interactive web experiences such as animated characters, scroll-based motion effects, background music, RSVP integration, and a digital guestbook to create a cinematic invitation experience."
      role="Frontend Web Developer"
      collaborators={["Ari", "Rico", "Gaby"]}
      duration="2 Weeks"
      tools={["Next.js", "Tailwind CSS", "Framer Motion"]}
      liveUrl="https://taylortravis.toondangan.com/"
      docUrl="https://www.instagram.com/toondangan.art/reel/DTKMfnmkYwZ/"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/taylor/video-1.mp4"
          type="video"
          poster="/assets/projects/taylor/thumbnail.webp"
          widthVideo="md:w-[65%] scale-130 aspect-[3/4] md:scale-100 md:aspect-auto"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Love story timeline animation
        </p>

        <Media
          src="/assets/projects/taylor/video-2.mp4"
          type="video"
          poster="/assets/projects/taylor/thumbnail.webp"
          widthVideo="md:w-[65%] scale-130 aspect-[3/4] md:scale-100 md:aspect-auto"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          RSVP form & digital guestbook
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectTaylor;
