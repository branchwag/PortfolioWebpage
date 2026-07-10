import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const links = [
  {
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    Icon: MailIcon,
  },
  {
    href: siteConfig.githubUrl,
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: siteConfig.linkedinUrl,
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="font-mono text-2xl text-text sm:text-3xl">Contact</h2>
      <p className="mx-auto mt-4 max-w-xl text-text-muted">
        The best ways to reach me — feel free to say hello.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded border border-border px-5 py-3 text-text transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-5 w-5" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
