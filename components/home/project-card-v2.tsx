"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
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
    <Link
      href={href}
      className="relative rounded-[24px] flex flex-col gap-3 p-2 md:gap-4 group"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[90%] w-px z-20 bg-gradient-to-b from-transparent via-[#f2f2f212] to-transparent transition-colors duration-500"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-[90%] w-px z-20 bg-gradient-to-b from-transparent via-[#f2f2f212] to-transparent transition-colors duration-500"></div>
      <div className="pointer-events-none absolute top-0 left-[4%] w-[92%] h-px z-10 bg-gradient-to-r from-transparent via-[#f8f8f853] to-transparent transition-colors duration-500"></div>

      <figure
        className="relative rounded-[16px] overflow-hidden transform-gpu"
        style={{
          maxWidth: `${width}px`,
          aspectRatio: `${width}/${height}`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#252525] from-[1%] via-[#282828] via-[#191919] via-[5%] to-[#111]" />

        {!isVideo && (
          <div
            className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to bottom, ${gradient || "transparent"}, #111 80%)`,
            }}
          />
        )}

        <div className="pointer-events-none absolute left-0 top-0 h-[95%] w-px z-20 bg-gradient-to-b from-transparent via-[#3d3d3d] group-hover:via-[#5f5f5f] to-transparent transition-colors duration-500"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-[95%] w-px z-20 bg-gradient-to-b from-transparent via-[#3d3d3d] group-hover:via-[#5f5f5f] to-transparent transition-colors duration-500"></div>
        <div className="pointer-events-none absolute top-0 left-0 w-full h-px z-20 bg-gradient-to-r from-transparent via-[#888] to-transparent transition-colors duration-500"></div>

        {!isVideo && (
          <div
            className="absolute inset-0 z-20 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 0, ${radial || "rgba(255, 255, 255, 0.25)"}, transparent 60%)`,
            }}
          />
        )}

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
            className={`relative z-10 w-full h-full object-cover transform-gpu
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            translate-y-4 group-hover:translate-y-0
            ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        ) : (
          <Image
            src={thumbnailSrc}
            alt={title}
            width={width}
            height={height}
            quality={100}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 896px) 100vw, 896px"
            className={`relative z-20 w-full h-full object-cover transform-gpu
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            translate-y-4 group-hover:translate-y-0
            ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </figure>

      <div className="flex items-start justify-between text-sm">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-white transition-colors duration-500 group-hover/card:text-gray-300">
            {title || "Untitled Project"}
          </span>
          <span className="text-xs font-light text-white uppercase opacity-40">
            {category || "Category"}
          </span>
        </div>
        <span className="text-xs font-light text-white uppercase opacity-40">
          {year || 2026}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
