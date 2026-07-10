import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-mono text-3xl font-medium text-text sm:text-4xl">
            Hi, I&apos;m LeAnne.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-text-muted">
            I&apos;m a software engineer and master&apos;s student who used to
            work on order flow for fintech companies as a FIX integration
            engineer before moving into web and systems development. These
            days I spend most of my time in Rust, exploring everything from
            local-first AI systems to orbital mechanics simulations. Feel free
            to look around or get in touch below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded border border-accent px-6 py-2 text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded border border-border px-6 py-2 text-text transition-colors hover:border-accent hover:text-accent"
            >
              See my work
            </a>
          </div>
        </div>
        <Image
          src="/images/profile/profilepic2.jpg"
          alt={`Portrait of ${siteConfig.name}`}
          width={256}
          height={256}
          priority
          className="h-64 w-64 shrink-0 rounded-full border border-border object-cover"
        />
      </div>
    </section>
  );
}
