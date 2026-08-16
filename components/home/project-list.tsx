"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard from "./project-card";
import { Project } from "@/app/data/projects";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [visibleCount, setVisibleCount] = useState(4); // Mulai dari 4
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          // Simulasi loading selama 1.2 detik untuk memunculkan efek titik-titik (300ms)
          setTimeout(() => {
            setVisibleCount((prevCount) => prevCount + 4);
            setIsLoading(false);
          }, 800);
        }
      },
      { rootMargin: "100px" }
    );

    const currentTarget = observerRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <div className="relative flex flex-col w-full">
      <div className="grid items-start w-full gap-15 md:grid-cols-1 md:gap-12">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={project.id} {...project} priority={index === 0} />
        ))}
      </div>

      {hasMore && (
        <div ref={observerRef} className="mt-16 flex justify-center w-full pointer-events-auto">
          <div className="flex items-center justify-center h-[44px] gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white/80 rounded-full loading-dot"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* SEO: Noscript fallback — ensures Googlebot can discover ALL project links
          even when JS-based "Load More" hasn't been triggered */}
      <noscript>
        <nav aria-label="All projects" className="mt-8">
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {projects.slice(visibleCount).map((project) => (
              <li key={project.id}>
                <a
                  href={project.href}
                  className="underline"
                >
                  {project.title} — {project.category} ({project.year})
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </noscript>
    </div>
  );
}
