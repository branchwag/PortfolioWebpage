import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-mono text-2xl text-text sm:text-3xl">
          Skills &amp; Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          What I reach for most, grouped roughly by area.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <h3 className="font-mono text-sm text-accent">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-border px-3 py-1 text-sm text-text"
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
