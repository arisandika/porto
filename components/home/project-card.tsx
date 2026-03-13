"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category?: string;
  year: string;
  height: number;
  width: number;
  href: string;
  thumbnailSrc: string;
}

const ProjectCard = ({
  title,
  category,
  year,
  height,
  width,
  href,
  thumbnailSrc,
}: ProjectCardProps) => {
  const [loading, setLoading] = useState(true);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);

  return (
  <Link href={href} className="flex flex-col gap-3 md:gap-4 group">
      <figure
        className={`relative overflow-hidden border bg-neutral-900 border-white/5 transform-gpu ${!isVideo ? "transition-opacity group hover:opacity-80" : ""}`}
        style={{
          maxWidth: `${width}px`,
          aspectRatio: `${width}/${height}`,
        }}
      >
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-900 animate-pulse">
            <span className="text-xs font-light tracking-widest text-white uppercase opacity-40">
              Generating Content...
            </span>
          </div>
        )}

        {isVideo ? (
          <video
            src={thumbnailSrc}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            onLoadedData={() => setLoading(false)}
            className={`w-full h-full object-cover transform-gpu transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <Image
            src={thumbnailSrc}
            alt={title}
            width={width}
            height={height}
            quality={90}
            loading="lazy"
            onLoad={() => setLoading(false)}
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`w-full h-full object-cover transform-gpu transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
      </figure>

      <div className="flex items-start justify-between text-sm">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-white">{title}</span>

          {category && (
            <span className="text-xs font-light tracking-widest text-white uppercase opacity-40">{category}</span>
          )}
        </div>

        <span className="text-xs font-light tracking-widest text-white uppercase opacity-40">{year}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
