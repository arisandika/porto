import { projectsData } from "@/app/data/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col w-full mx-auto max-w-container -mt-24 md:-mt-20">
      <div className="grid items-start w-full gap-15 md:grid-cols-1 md:gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
