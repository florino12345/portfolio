import { Check } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            How I can help, freelance — pick a starting point and we&apos;ll
            scope the details together.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted">
                  Starting from{" "}
                  <span className="font-semibold text-foreground">
                    {service.startingFrom}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
