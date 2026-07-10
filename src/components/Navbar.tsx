import Link from "next/link";
import { siteConfig } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#about"
          className="group flex items-center gap-2 text-sm tracking-[0.2em] text-accent nr-glow"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {siteConfig.name.toUpperCase()}
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-xs tracking-[0.18em]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="uppercase text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
