import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
              {site.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="mt-1 text-3xl font-bold tracking-tight text-accent">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
