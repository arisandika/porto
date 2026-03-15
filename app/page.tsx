import Hero from '@/components/home/hero';
import ProjectsSection from '@/components/home/projects-section';

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-8 mx-auto max-w- md:gap-8">
      <Hero />
      <ProjectsSection />
    </div>
  );
}
