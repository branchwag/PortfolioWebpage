import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="nr-panel nr-panel-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        {project.media?.type === "image" ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : project.media?.type === "video" ? (
          <video
            src={project.media.src}
            aria-label={project.media.alt}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-b border-dashed border-border p-6 text-center">
            <span className="font-mono text-xs text-text-muted">
              $ screenshot --pending
            </span>
            <span className="text-xs text-text-muted">
              No visual yet — see the repo for details
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg text-text transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-text-muted">
          {project.pitch}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2 py-1 text-xs uppercase tracking-wider text-accent/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
