import type { Metadata } from "next";
import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

export const metadata: Metadata = {
  title: "Nexicon – ERP Business Platform",
  description:
    "A multi-module ERP platform built with Laravel, Filament, and Livewire for internal company operations including HR, CRM, Sales, and Project Management.",
  alternates: { canonical: "/projects/nexicon" },
  openGraph: {
    title: "Nexicon ERP Platform | Ari Sandika",
    description:
      "Multi-module ERP system built with Laravel 12, Filament, Spatie Permission, and Livewire.",
    images: ["/assets/projects/nexicon/thumbnail.webp"],
  },
};

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
