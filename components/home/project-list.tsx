"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import Button from "@/components/ui/button";
import { Project } from "@/app/data/projects";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [visibleCount, setVisibleCount] = useState(4); // Mulai dari 4
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulasi loading selama 1.2 detik untuk memunculkan efek titik-titik
    setTimeout(() => {
      setIsLoading(false);
      // Tambahkan 4 dari jumlah yang sedang tampil saat ini
      setVisibleCount((prevCount) => prevCount + 4);
    }, 1200);
  };

  const hasMore = visibleCount < projects.length;

  return (
    <div className="relative flex flex-col w-full">
      <div className="grid items-start w-full gap-15 md:grid-cols-1 md:gap-12">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={project.id} {...project} priority={index === 0} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-16">
          <div className="flex justify-center w-full pointer-events-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-[44px] gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-white/80 rounded-full loading-dot"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            ) : (
              <Button onClick={handleLoadMore} active={true}>
                View More Projects
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
