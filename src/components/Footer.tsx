import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
