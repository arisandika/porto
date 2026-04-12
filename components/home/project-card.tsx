"use client";

import { Project } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import TransitionLink from "../common/transition-link";

interface ProjectCardProps extends Omit<Project, "id"> {
  priority?: boolean;
}

const ProjectCard = ({
  title,
  category,
  year,
  height,
  width,
  href,
  thumbnailSrc,
  gradient,
  radial,
  priority = false,
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <article className="md:p-4">
      <TransitionLink
        href={href}
        target="_blank"
        className="relative flex flex-col gap-3 md:gap-4 group p-2 rounded-[24px] outline outline-1 outline-[#f2f2f226] bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f210,transparent)]"
      >
        <div className="glare-item-top outer-edge rounded-t-[24px] z-50"></div>

        <figure
          className="relative overflow-hidden transform-gpu rounded-[16px] ring-[1px] ring-[#3d3d3d] group-hover:ring-[#838383] transition-all duration-500 shadow-[inset_0_0_10px_#0000001a,0_0_12px_#0004] aspect-square md:[aspect-ratio:var(--card-ratio)]"
          style={
            {
              "--card-ratio": `${width} / ${height}`,
              maxWidth: `${width}px`,
            } as React.CSSProperties
          }
        >
          <div
            className={`absolute inset-0 z-0 bg-gradient-to-b ${isVideo ? "from-[#232323] from-[80%] via-[#141414] via-[#0e0e0e] via-[80%] to-[#151515]" : "from-[#232323] from-[0%] via-[#131313] via-[#151515] via-[40%] to-[#151515]"}`}
          />

          {!isVideo && (
            <div
              className="pointer-events-none absolute inset-0 z-[3] opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
              style={{
                background: `linear-gradient(to bottom, ${gradient || "transparent"}, #151515 98%)`,
              }}
            />
          )}

          {!isVideo && (
            <div
              className="pointer-events-none absolute inset-0 z-20 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 0, ${radial || "rgba(255, 255, 255, 0.25)"}, transparent 60%)`,
              }}
            />
          )}

          <div
            className="pointer-events-none absolute inset-0 z-30 opacity-100 transition-opacity duration-500 md:opacity-100 md:group-hover:opacity-0"
            style={{
              background: `radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.02), transparent 60%)`,
            }}
          />

          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-900 animate-pulse">
              <span className="text-xs font-light text-white uppercase opacity-40">
                Generating Content...
              </span>
            </div>
          )}

          {isVideo ? (
            <video
              ref={videoRef}
              src={thumbnailSrc}
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={() => setIsLoaded(true)}
              className={`relative z-10 w-full h-full transform-gpu object-contain md:object-cover transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-3 md:translate-y-8 md:group-hover:translate-y-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
          ) : (
            <Image
              src={thumbnailSrc}
              alt={title}
              fill
              quality={100}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setIsLoaded(true)}
              sizes="(max-width: 768px) 100vw, 896px"
              className={`z-20 transform-gpu object-contain md:object-cover transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-3 md:translate-y-8 md:group-hover:translate-y-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
          )}

          <div className="glare-item-top inner-edge z-50"></div>
        </figure>
      </TransitionLink>

      <div className="flex items-start justify-center gap-1 mt-3 text-sm">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-normal text-white">
            {title || "Untitled Project"}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
