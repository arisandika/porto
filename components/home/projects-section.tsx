import { projectsData } from "@/app/data/projects";
import ProjectList from "./project-list";

const ProjectsSection = () => {
  return (
    <section className="flex flex-col w-full mx-auto max-w-container -mt-24 md:-mt-20">
      <h2 className="sr-only">Projects</h2>
      <ProjectList projects={projectsData} />
    </section>
  );
};

export default ProjectsSection;