// All editable site content lives here. Update this file to change what
// appears on the site — no need to touch any component.

export type NavLink = {
  label: string;
  href: string;
};

export type TechItem = {
  name: string;
  slug: string; // simpleicons.org slug, e.g. "react"
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export type Service = {
  title: string;
  description: string;
  startingFrom: string;
  features: string[];
};

export type Product = {
  title: string;
  description: string;
  price: string;
  image: string;
  buyUrl: string;
};

export type Social = {
  label: string;
  href: string;
  icon: "github" | "instagram" | "tiktok" | "youtube" | "x";
};

export const site = {
  // Update once you have a domain — used for metadata, OG tags, and sitemap.ts.
  url: "https://example.com",
  name: "Alex Rivera",
  role: "Freelance Web Developer",
  headline: "I build fast, modern web apps with React & Supabase",
  subtext:
    "Freelance developer helping startups and small teams ship polished products — plus the person behind Go2plughub, a tech gadget content brand.",
  bio: [
    "I'm a freelance web developer specializing in React, Next.js, and Supabase. I work with founders and small teams to design, build, and ship products that feel fast and look sharp — from marketing sites to full-stack apps with real auth, databases, and payments.",
    "Outside of client work, I run Go2plughub, a content brand covering tech gadgets and reviews. That side of things keeps me close to what makes products feel good to use, which shapes how I build software.",
    "I care about clean code, tight feedback loops, and shipping things that actually work in production — not just in a demo.",
  ],
  location: "San Francisco, CA (Pacific Time)",
  email: "hello@example.com",
  availability: "Currently available for new freelance projects",
  logoText: "AR",
  // Swap for "/profile.jpg" once you've added your own photo to /public.
  avatar: "/profile.svg",
  stats: [
    { label: "Years of experience", value: 5, suffix: "+" },
    { label: "Projects shipped", value: 40, suffix: "+" },
    { label: "Happy clients", value: 25, suffix: "+" },
  ] satisfies Stat[],
  navLinks: [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Store", href: "#store" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
    { label: "Instagram", href: "https://instagram.com/yourusername", icon: "instagram" },
    { label: "TikTok", href: "https://tiktok.com/@yourusername", icon: "tiktok" },
    { label: "YouTube", href: "https://youtube.com/@yourusername", icon: "youtube" },
    { label: "X", href: "https://x.com/yourusername", icon: "x" },
  ] satisfies Social[],
  techStack: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Supabase", slug: "supabase" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Vercel", slug: "vercel" },
  ] satisfies TechItem[],
  projects: [
    {
      title: "Broker App Redesign",
      description:
        "A ground-up redesign of a brokerage trading app with a Robinhood-style UI — real-time price charts, watchlists, and order flow built for clarity on mobile and desktop.",
      image: "/projects/broker-app.svg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourusername/broker-app-redesign",
    },
    {
      title: "React + Supabase Auth Template",
      description:
        "A production-ready starter template with email/password and OAuth auth, protected routes, and a Postgres schema wired up through Supabase — the base I reuse for client projects.",
      image: "/projects/auth-template.svg",
      tags: ["React", "Supabase", "PostgreSQL"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourusername/react-supabase-auth-template",
    },
    {
      title: "Go2plughub",
      description:
        "The site for my gadget content brand — reviews, roundups, and video content for a growing tech audience, built for speed and easy content updates.",
      image: "/projects/go2plughub.svg",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://go2plughub.com",
    },
  ] satisfies Project[],
  services: [
    {
      title: "Landing Pages",
      description:
        "A fast, conversion-focused landing page for your product or launch — designed, built, and deployed.",
      startingFrom: "$600",
      features: ["Custom design", "Mobile-first & responsive", "SEO basics included"],
    },
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end product builds with a React/Next.js frontend and a proper backend — database, auth, and business logic included.",
      startingFrom: "$2,500",
      features: ["Next.js + TypeScript", "Database schema & API", "Deployed to Vercel"],
    },
    {
      title: "Supabase Auth & Backend Setup",
      description:
        "Get authentication, database, and storage wired up correctly on Supabase so you can focus on building features.",
      startingFrom: "$450",
      features: ["Auth & row-level security", "Schema design", "Storage & edge functions"],
    },
    {
      title: "Website Fixes",
      description:
        "Bug fixes, performance tuning, and small feature additions for an existing site or app.",
      startingFrom: "$120",
      features: ["Bug fixes", "Performance audits", "Quick turnaround"],
    },
  ] satisfies Service[],
  products: [
    {
      title: "React + Supabase Auth Template",
      description:
        "The same auth template I use in client work — email/password + OAuth, protected routes, and a ready-to-extend Postgres schema. Save the setup time.",
      price: "$29",
      image: "/projects/auth-template.svg",
      buyUrl: "https://gumroad.com/l/your-product",
    },
  ] satisfies Product[],
} as const;
