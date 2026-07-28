"use client";

import { Reveal } from "@/components/motion/reveal";

const infoPanel: { key: string; value: string }[] = [
  { key: "name", value: "Alpaca Cryineye" },
  { key: "role", value: "Full-Stack Developer" },
  { key: "location", value: "Vologda, VO (very wants to emigrate)" },
  { key: "experience", value: "6+ years" },
  { key: "focus", value: "web · api · cloud" },
  { key: "languages", value: "TS, Python, Go" },
  { key: "status", value: "available_for_work" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      {/* Section header */}
      <Reveal>
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-emerald-400">02.</span>
          <h2 className="font-mono text-2xl font-semibold sm:text-3xl">
            about<span className="text-emerald-400">()</span>
          </h2>
          <div className="ml-4 h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Bio text */}
        <Reveal delay={0.1}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-mono text-emerald-400">{"// "}</span>
              Hi, I&apos;m Alpaca — a full-stack developer who loves shipping
              software that actually works.
            </p>
            <p>
              I specialize in building{" "}
              <span className="text-foreground">web applications</span>,{" "}
              <span className="text-foreground">APIs</span>, and{" "}
              <span className="text-foreground">cloud infrastructure</span>{" "}
              that scale. My toolkit centers around TypeScript, React, and
              Node.js on the front, with Python and Go powering the back.
            </p>
            <p>
              Over the past six years I&apos;ve worked with startups and
              established teams to take products from{" "}
              <span className="font-mono text-emerald-400">idea</span> →{" "}
              <span className="font-mono text-emerald-400">production</span>,
              focusing on developer experience, performance, and clean
              architecture.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to open
              source, writing about systems design, or tweaking my Neovim
              config for the hundredth time.
            </p>
          </div>
        </Reveal>

        {/* Code-style info panel */}
        <Reveal delay={0.2}>
          <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-xl">
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                profile.json
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted-foreground">{"const "}</span>
                <span className="text-emerald-400">developer</span>
                <span className="text-muted-foreground"> = {"{"}</span>
                {"\n"}
                {infoPanel.map((item, i) => (
                  <span key={item.key}>
                    {"  "}
                    <span className="text-teal-400">{item.key}</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-green-400">&quot;{item.value}&quot;</span>
                    {i < infoPanel.length - 1 ? (
                      <span className="text-muted-foreground">,</span>
                    ) : null}
                    {"\n"}
                  </span>
                ))}
                <span className="text-muted-foreground">{"}"}</span>
                <span className="text-muted-foreground">;</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
