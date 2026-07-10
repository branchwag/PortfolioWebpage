import { skillGroups } from "@/data/skills";

const accents = [
  "text-nr-cyan",
  "text-nr-purple",
  "text-nr-green",
  "text-nr-amber",
] as const;

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="nr-eyebrow mb-4">{"// tech stack"}</span>
        <h2 className="text-2xl text-text nr-glow sm:text-3xl">
          Skills &amp; Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          What I reach for most, grouped roughly by area.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={group.category} className="nr-panel nr-panel-hover p-6">
            <h3
              className={`text-sm uppercase tracking-[0.18em] ${accents[i % accents.length]}`}
            >
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-border px-3 py-1 text-sm text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
