import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { SocialIcon } from "@/components/social-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          &copy; {year} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} size={16} />
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/70 transition hover:text-accent"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
