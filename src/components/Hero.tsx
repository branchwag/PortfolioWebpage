import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="nr-eyebrow mb-5">{"// system online"}</span>
          <h1 className="text-3xl text-text nr-glow sm:text-4xl">
            <span className="text-accent">&gt;</span> Hi, I&apos;m LeAnne.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-text-muted">
            I&apos;m a software engineer and master&apos;s student who used to
            work on order flow for fintech companies as a FIX integration
            engineer before moving into web and systems development. These days
            I spend most of my time in Rust, exploring everything from
            local-first AI systems to orbital mechanics simulations. Feel free
            to look around or get in touch below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="border border-accent px-6 py-2 text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="border border-border px-6 py-2 text-xs uppercase tracking-[0.18em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              See my work
            </a>
          </div>
        </div>
        <div className="group relative shrink-0">
          <div className="pointer-events-none absolute -inset-2 rounded-full bg-accent/15 opacity-65 blur-2xl transition-opacity duration-200 group-hover:opacity-100" />
          <Image
            src="/images/profile/profilepic2.jpg"
            alt={`Portrait of ${siteConfig.name}`}
            width={256}
            height={256}
            priority
            className="relative h-64 w-64 rounded-full border border-border-strong object-cover shadow-[0_0_28px_-7px_rgba(79,195,247,0.5)] transition duration-200 group-hover:shadow-[0_0_34px_-6px_rgba(79,195,247,0.65)]"
          />
        </div>
      </div>
    </section>
  );
}
