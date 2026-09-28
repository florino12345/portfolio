import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            A few things I&apos;ve built recently, from client work to my own
            products.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-accent/60">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 text-sm font-medium">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent transition hover:opacity-80"
                      >
                        Live <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-foreground/70 transition hover:text-foreground"
                      >
                        Code <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
