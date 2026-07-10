import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="font-mono text-2xl text-text sm:text-3xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            A few things I&apos;ve been building lately.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
