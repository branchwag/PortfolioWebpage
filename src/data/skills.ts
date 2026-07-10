export type SkillGroup = {
  category: string;
  items: string[];
};

// Drafted from GitHub activity — flagged for review/edits.
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Rust", "Python", "TypeScript", "JavaScript", "C", "C++", "Go"],
  },
  {
    category: "Systems & AI",
    items: [
      "WebAssembly",
      "Local LLMs (Ollama)",
      "RAG / Vector Search (Qdrant)",
      "Machine Learning (burn, PyTorch)",
    ],
  },
  {
    category: "Web & Infra",
    items: ["Next.js", "React", "Leptos", "Flask", "Docker", "Node.js"],
  },
  {
    category: "Domain Experience",
    items: ["FIX Protocol / Fintech", "Orbital Mechanics & Aerospace Sims"],
  },
];
