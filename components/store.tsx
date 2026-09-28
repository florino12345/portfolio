import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function Store() {
  return (
    <section id="store" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Store
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Digital products I&apos;ve built and use myself.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold">{product.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
