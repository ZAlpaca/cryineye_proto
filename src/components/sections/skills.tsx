"use client";

import { Reveal } from "@/components/motion/reveal";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Go",
  "Redis",
  "Tailwind CSS",
  "Prisma",
  "tRPC",
  "Kubernetes",
  "Terraform",
  "Vercel",
  "Git",
  "Linux",
  "Vite",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max">
      {doubled.map((skill, i) => (
        <span
          key={`${skill}-${i}`}
          className="mx-3 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-card/60 px-5 py-3 font-mono text-sm text-muted-foreground transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
        >
          <span className="text-emerald-400/60">{"<"}</span>
          {skill}
          <span className="text-emerald-400/60">{"/>"}</span>
        </span>
      ))}
    </div>
  );
}

export function Skills() {
  const row1 = skills.slice(0, 10);
  const row2 = skills.slice(10);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-border py-24 sm:py-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />

      <div className="relative z-10">
        <Reveal>
          <div className="mx-auto mb-12 flex max-w-6xl items-center gap-3 px-4 sm:px-6">
            <span className="font-mono text-sm text-emerald-400">04.</span>
            <h2 className="font-mono text-2xl font-semibold sm:text-3xl">
              skills<span className="text-emerald-400"> --list</span>
            </h2>
            <div className="ml-4 h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-6xl px-4 text-muted-foreground sm:px-6">
            <span className="font-mono text-emerald-400">$</span> Technologies I
            reach for when shipping production software.
          </p>
        </Reveal>

        {/* Marquee rows */}
        <div className="marquee-pause space-y-4">
          <div className="overflow-hidden">
            <div className="animate-marquee">
              <MarqueeRow items={row1} />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee-reverse">
              <MarqueeRow items={row2} reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
