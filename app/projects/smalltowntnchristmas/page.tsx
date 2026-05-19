import type { Metadata } from "next";
import ProjectLayout from "@/components/layouts/project-layout";
import Media from "@/components/ui/media";

export const metadata: Metadata = {
  title: "12 Days of Christmas Giveaway Campaign Website",
  description:
    "An event campaign website for Upper Cumberland Tourism promoting the 12 Days of Christmas Giveaway with prize showcases and registration system.",
  alternates: { canonical: "/projects/smalltowntnchristmas" },
  openGraph: {
    title: "12 Days of Christmas Giveaway | Ari Sandika",
    description:
      "Holiday event campaign website built with WordPress, Kadence Builder, and WP Event Calendar.",
    images: ["/assets/projects/smalltowntnchristmas/card.webp"],
  },
};

const ProjectSmalltown = () => {
  return (
    <ProjectLayout
      title="12 Days of Christmas Giveaway"
      category="Event Campaign Website"
      thumbnailSrc="/assets/projects/smalltowntnchristmas/thumbnail.png"
      thumbnailAlt="12 Days of Christmas Giveaway event campaign website for Upper Cumberland Tourism"
      desc1="An event campaign website developed for Upper Cumberland Tourism to promote the '12 Days of Christmas Giveaway', a regional holiday promotion highlighting local businesses, travel experiences, and artisan products across Tennessee’s Upper Cumberland."
      desc2="The platform integrates dynamic event sections, prize showcases, and a centralized registration system allowing visitors to enter once and participate in all giveaway drawings. Built with a flexible Wordpress architecture using custom fields, calendar-based scheduling, and modular page components to support seasonal marketing campaigns."
      role="Frontend Web Developer"
      collaborators={["Agency Development Team", "UI/UX Design Team"]}
      duration="1 Week"
      tools={[
        "Wordpress",
        "Kadence Builder",
        "ACF",
        "WP Event Calendar",
      ]}
      liveUrl="https://smalltowntnchristmas.com/12-days-of-christmas-giveaway/"
      docUrl="#"
    >
      <div className="flex flex-col w-full gap-4">
        <Media
          src="/assets/projects/smalltowntnchristmas/video-1.mp4"
          type="video"
          poster="/assets/projects/smalltowntnchristmas/thumbnail.webp"
          widthVideo="w-[100%]"
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Event landing page
        </p>

        <Media
          src="/assets/projects/smalltowntnchristmas/image-1.webp"
          alt="Images 1"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          About the giveaway page
        </p>
        
        <Media
          src="/assets/projects/smalltowntnchristmas/image-2.webp"
          alt="Images 2"
          width={1608}
          height={1004}
        />
        
        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Event and regional tourism information
        </p>

        <Media
          src="/assets/projects/smalltowntnchristmas/image-3.webp"
          alt="Images 3"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          Detail event
        </p>

        <Media
          src="/assets/projects/smalltowntnchristmas/image-4.webp"
          alt="Images 4"
          width={1608}
          height={1004}
        />

        <p className="text-xs font-light tracking-widest text-white uppercase opacity-60">
          CTA Register to Win
        </p>
      </div>
    </ProjectLayout>
  );
};

export default ProjectSmalltown;
