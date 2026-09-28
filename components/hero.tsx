"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {site.availability}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {site.headline}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted text-pretty">
            {site.subtext}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Hire me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-accent/25 blur-2xl" />
          <div className="relative size-full overflow-hidden rounded-[2rem] border border-border">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
