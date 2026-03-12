"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  year: string;
  height: number;
  width: number;
  href: string;
  thumbnailSrc: string;
}

const ProjectCard = ({
  title,
  subtitle,
  year,
  height,
  width,
  href,
  thumbnailSrc,
}: ProjectCardProps) => {
  const [loading, setLoading] = useState(true);

  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);

  return (
    <Link
      href={href}
      aria-label={`View project ${title}`}
      className="flex flex-col gap-4"
    >
      <figure
        className={`relative overflow-hidden border bg-white/5 border-white/5 transition-opacity ${!isVideo ? "transition-opacity group hover:opacity-80" : ""}`}
        style={{
          maxWidth: `${width}px`,
          aspectRatio: `${width}/${height}`,
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-12 h-12 bg-white/10 animate-[spin_3s_linear_infinite]" />
          </div>
        )}

        {isVideo ? (
          <video
            src={thumbnailSrc}
            muted
            loop
            autoPlay
            playsInline
            preload="none"
            onLoadedData={() => setLoading(false)}
            className={`w-full h-full object-cover ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <Image
            src={thumbnailSrc}
            alt={title}
            width={width}
            height={height}
            quality={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            onLoad={() => setLoading(false)}
            className={`w-full h-full object-cover ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
      </figure>

      <div className="flex items-start justify-between text-sm">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-white">{title}</span>

          {subtitle && (
            <span className="font-light text-white/40">{subtitle}</span>
          )}
        </div>

        <span className="font-light text-white/40">{year}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
