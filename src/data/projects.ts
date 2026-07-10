export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  tech: string[];
  repoUrl: string;
  media?: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "dndrag",
    title: "dndrag",
    pitch: "A fully local RAG pipeline for querying your own D&D lore.",
    tech: ["Rust", "Ollama", "Qdrant", "RAG", "Docker"],
    repoUrl: "https://github.com/branchwag/dndrag",
    media: {
      type: "video",
      src: "/images/projects/dndrag-final.mp4",
      alt: "Demo of the dndrag browser interface answering a D&D lore question",
    },
  },
  {
    slug: "orbitalElements",
    title: "orbitalElements",
    pitch:
      "An interactive WASM visualizer for orbital mechanics — orbit shape, inclination, and RAAN in real time.",
    tech: ["Rust", "WASM", "three-d"],
    repoUrl: "https://github.com/branchwag/orbitalElements",
    media: {
      type: "video",
      src: "/images/projects/orbitalElements-orbitaldemo.mp4",
      alt: "Demo of the orbitalElements visualizer rendering a satellite orbit around a wireframe Earth",
    },
  },
  {
    slug: "asteroidtracker",
    title: "asteroidtracker",
    pitch:
      "A full-stack near-Earth object tracker pulling live data from NASA, with a custom WebGL2 starfield.",
    tech: ["Rust", "Leptos", "WASM", "WebGL2", "Docker"],
    repoUrl: "https://github.com/branchwag/asteroidtracker",
    media: {
      type: "image",
      src: "/images/projects/asteroidtracker-demo.gif",
      alt: "Demo of the asteroidtracker app showing a sortable table of near-Earth objects over a starfield",
    },
  },
  {
    slug: "CNN",
    title: "CNN",
    pitch:
      "A convolutional neural network built from scratch in Rust with the burn framework, trained on FashionMNIST.",
    tech: ["Rust", "burn", "Machine Learning"],
    repoUrl: "https://github.com/branchwag/CNN",
  },
  {
    slug: "pj",
    title: "pj",
    pitch:
      "A fully offline, local-first AI chat app — talk to a self-hosted model via Ollama from your browser or the command line.",
    tech: ["Rust", "Actix Web", "Ollama", "Streaming"],
    repoUrl: "https://github.com/branchwag/pj",
    media: {
      type: "image",
      src: "/images/projects/pj-demo.png",
      alt: "The pj chat interface answering the question 'What is your favorite color?' with a model response",
    },
  },
  {
    slug: "meteorite_impactsite_calc",
    title: "Meteorite Impact Site Calculator",
    pitch:
      "Back-calculates meteorite type, mass, and likely impact search area from radar returns and wind-corrected descent.",
    tech: ["Python", "Flask", "Physics"],
    repoUrl: "https://github.com/branchwag/meteorite_impactsite_calc",
  },
];
