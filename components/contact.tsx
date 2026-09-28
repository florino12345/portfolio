"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icon";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Have a project in mind? Send a message and I&apos;ll get back to
            you soon.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.8fr]">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-accent" role="status">
                  Thanks — your message is on its way. I&apos;ll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-accent"
              >
                <Mail size={18} />
                {site.email}
              </a>
              <p className="mt-3 text-sm text-muted">{site.location}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-accent hover:text-accent"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
