"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectLayoutProps {
  title: string;
  category: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  desc1: string;
  desc2: string;
  role: string;
  collaborators: string[];
  duration: string;
  tools: string[];
  liveUrl?: string;
  docUrl?: string;
  children: React.ReactNode;
}

const ProjectLayout = ({
  title,
  category,
  thumbnailSrc,
  thumbnailAlt,
  desc1,
  desc2,
  role,
  collaborators,
  duration,
  tools,
  liveUrl,
  docUrl,
  children,
}: ProjectLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(thumbnailSrc);

  return (
    <article className="flex flex-col w-full gap-6 md:gap-8">
      <header>
        <figure className="relative w-full overflow-hidden bg-neutral-900 h-[60vw] md:h-screen my-auto transform-gpu">
          {loading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-900 animate-pulse">
              <span className="text-xs font-light text-white/60 uppercase">
                Generating Content...
              </span>
            </div>
          )}

          {isVideo ? (
            <video
              src={thumbnailSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setLoading(false)}
              className={`w-full h-full object-cover transition-opacity duration-700 transform-gpu ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          ) : (
            <Image
              src={thumbnailSrc}
              alt={thumbnailAlt}
              fill
              priority
              quality={100}
              onLoad={() => setLoading(false)}
              sizes="(max-width:1872px) 100vw, (max-width:1872px) 100vw, 1872px"
              className={`object-cover h-full w-full transition-opacity duration-700 transform-gpu ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </figure>
      </header>

      <section className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-12">
        <aside className="flex flex-col gap-1 md:col-span-4 md:sticky md:top-8 h-fit">
          <h1 className="text-lg font-normal text-white">{title}</h1>

          <span className="text-xs font-light text-white/60 uppercase">
            {category}
          </span>
        </aside>

        <div className="flex flex-col gap-6 md:gap-8 md:col-span-8">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <p className="text-xs font-light leading-relaxed text-white">
              {desc1}
            </p>

            <p className="text-xs font-light leading-relaxed text-white">
              {desc2}
            </p>
          </section>

          <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light text-white/60 uppercase">
                Role
              </span>
              <span className="text-xs text-white">{role}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-light text-white/60 uppercase">
                Collaborators
              </span>

              <span className="text-xs text-white">
                {collaborators.join(", ")}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-light text-white/60 uppercase">
                Duration
              </span>
              <span className="text-xs text-white">{duration}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-light text-white/60 uppercase">
                Tools
              </span>

              <span className="text-xs text-white">{tools.join(", ")}</span>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live project ${title}`}
                className="flex items-center p-4 transition rounded-md bg-white/[.05] hover:bg-white/10"
              >
                <span className="text-white">View Live</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-auto stroke-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            )}

            {docUrl && (
              <Link
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View documentation for ${title}`}
                className="flex items-center p-4 transition rounded-md bg-white/[.05] hover:bg-white/10"
              >
                <span className="text-white">View Documentation</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-auto stroke-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            )}
          </section>

          <section className="w-full">{children}</section>
        </div>
      </section>
    </article>
  );
};

export default ProjectLayout;
