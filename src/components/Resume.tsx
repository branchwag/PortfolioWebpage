import { siteConfig } from "@/data/site";

export default function Resume() {
  return (
    <section id="resume" className="border-y border-border bg-surface/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <span className="nr-eyebrow mb-4">{"// credentials"}</span>
        <h2 className="text-2xl text-text nr-glow sm:text-3xl">Resume</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Download a copy of my resume for more detail on my background and
          experience.
        </p>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-accent px-6 py-2 text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
