import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function TechStack() {
  return (
    <section className="border-y border-border bg-card/40 py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted">
            Tools &amp; technologies I work with
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {site.techStack.map((tech, i) => (
            <Reveal key={tech.slug} delay={i * 0.04}>
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:-translate-y-0.5 hover:border-accent hover:text-foreground">
                <Image
                  src={`https://cdn.simpleicons.org/${tech.slug}/94a3b8`}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                />
                {tech.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
