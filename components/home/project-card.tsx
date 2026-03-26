"use client";

import { useVideoAutoplay } from "@/app/hooks/use-video-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ProjectCardProps {
  id: number;
  title: string;
  category?: string;
  year: string;
  height: number;
  width: number;
  href: string;
  thumbnailSrc: string;
  gradient: string;
  radial: string;
  priority?: boolean;
}

const ProjectCard = ({
  title,
  width,
  href,
  thumbnailSrc,
  gradient,
  radial,
  priority = false,
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);
  const videoRef = useVideoAutoplay(isVideo);

  // Extracted shared classes to adhere to DRY Principle
  const mediaClasses = `relative z-20 h-full w-full -translate-y-2 transform-gpu object-contain transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4 ${
    isLoaded ? "opacity-100" : "opacity-0"
  }`;

  return (
    <Link href={href} className="group relative flex flex-col gap-3">
      <figure
        className="relative aspect-square overflow-hidden transform-gpu"
        style={{ maxWidth: `${width}px` }}
      >
        {/* Base Background Gradient */}
        <div
          className={`absolute inset-0 z-0 bg-gradient-to-b ${
            isVideo
              ? "from-[#232323] from-[80%] via-[#141414] via-[#0e0e0e] via-[80%] to-[#151515]"
              : "from-[#232323] from-[0%] via-[#131313] via-[#151515] via-[40%] to-[#151515]"
          }`}
        />

        {/* Hover Linear Gradient Overlay */}
        {!isVideo && (
          <div
            className="pointer-events-none absolute inset-0 z-[3] opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
            style={{
              background: `linear-gradient(to bottom, ${gradient || "transparent"}, #151515 80%)`,
            }}
          />
        )}

        {/* Hover Radial Gradient Overlay */}
        {!isVideo && (
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 0, ${radial || "rgba(255, 255, 255, 0.25)"}, transparent 60%)`,
            }}
          />
        )}

        {/* Static Subtle Radial Overlay (Disappears on hover) */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-100 transition-opacity duration-500 md:opacity-100 md:group-hover:opacity-0"
          style={{
            background: `radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.02), transparent 60%)`,
          }}
        />

        {/* Loading State Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900 animate-pulse">
            <span className="text-xs font-light uppercase text-white/60">
              Generating Content...
            </span>
          </div>
        )}

        {/* Media Render */}
        {isVideo ? (
          <video
            ref={videoRef}
            src={thumbnailSrc}
            muted
            loop
            playsInline
            preload="none"
            onLoadedData={() => setIsLoaded(true)}
            className={mediaClasses}
          />
        ) : (
          <Image
            src={thumbnailSrc}
            alt={title || "Project Thumbnail"}
            fill
            quality={100}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 896px) 100vw, 896px"
            className={mediaClasses}
          />
        )}
      </figure>

      {/* Title Details */}
      <div className="flex items-start justify-center gap-1 text-xs">
        <div className="flex flex-col gap-0.5">
          <span className="font-normal text-white transition-colors duration-500 group-hover:text-gray-300">
            {title || "Untitled Project"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;