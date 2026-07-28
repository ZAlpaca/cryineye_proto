"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  category: "web" | "mobile" | "api";
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Nebula Dashboard",
    description:
      "Real-time analytics dashboard with WebSocket-driven charts, role-based access, and a customizable widget grid.",
    category: "web",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Pulse API Gateway",
    description:
      "High-throughput API gateway with rate limiting, auth, and observability — handling 10k req/s in production.",
    category: "api",
    tags: ["Go", "Redis", "Docker", "gRPC"],
    link: "#",
  },
  {
    title: "Quill Note Taker",
    description:
      "Cross-platform mobile note app with offline-first sync, Markdown support, and end-to-end encryption.",
    category: "mobile",
    tags: ["React Native", "Expo", "SQLite", "Crypto"],
    link: "#",
  },
  {
    title: "Orbit CMS",
    description:
      "Headless CMS with a plugin architecture, visual editor, and one-click deploy to the edge.",
    category: "web",
    tags: ["Next.js", "tRPC", "Prisma", "AWS"],
    link: "#",
  },
  {
    title: "Forge Auth Service",
    description:
      "Identity-as-a-service with OAuth2, SSO, magic links, and a clean admin console for user management.",
    category: "api",
    tags: ["Node.js", "JWT", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    title: "Drift Fitness Tracker",
    description:
      "Mobile fitness companion with workout tracking, social challenges, and Apple Health integration.",
    category: "mobile",
    tags: ["React Native", "Swift", "HealthKit", "Firebase"],
    link: "#",
  },
];

const filters = [
  { label: "all", value: "all" as const },
  { label: "web", value: "web" as const },
  { label: "mobile", value: "mobile" as const },
  { label: "api", value: "api" as const },
];

export function Projects() {
  const [active, setActive] = useState<"all" | "web" | "mobile" | "api">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-emerald-400">03.</span>
          <h2 className="font-mono text-2xl font-semibold sm:text-3xl">
            projects<span className="text-emerald-400">.filter()</span>
          </h2>
          <div className="ml-4 h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          <span className="font-mono text-emerald-400">$</span> A selection of
          things I&apos;ve built. Filter by category to narrow things down.
        </p>
      </Reveal>

      {/* Filter tabs */}
      <Reveal delay={0.15}>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "relative rounded-lg border px-4 py-2 font-mono text-sm transition-all",
                active === f.value
                  ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-400"
                  : "border-border text-muted-foreground hover:border-emerald-400/30 hover:text-foreground"
              )}
            >
              <span className="text-emerald-400/60">./</span>
              {f.label}
              {active === f.value && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute -bottom-px left-0 h-px w-full bg-emerald-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Project grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.a
              layout
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/80 p-6 transition-colors hover:border-emerald-400/40"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 font-mono text-sm text-emerald-400">
                  View project <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              {/* Category badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-xs text-muted-foreground">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-emerald-400/60">
                  #{(projects.indexOf(project) + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-2 font-mono text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-xs text-emerald-400/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
