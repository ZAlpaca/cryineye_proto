"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

type Line = {
  prompt: string;
  output: string;
  color?: string;
};

const terminalLines: Line[] = [
  { prompt: "whoami", output: "CryinEye — full-stack developer", color: "text-emerald-400" },
  { prompt: "cat role.txt", output: "building fast, reliable web apps", color: "text-teal-400" },
  { prompt: "ls skills/", output: "next.js  react  typescript  node  python  aws  docker  postgres 3d_blender_aftereffects ai_ml", color: "text-foreground" },
  { prompt: "cat mission.txt", output: "I turn ideas into production-ready software.", color: "text-green-400" },
  { prompt: "echo $AVAILABILITY", output: "open to freelance & full-time roles", color: "text-emerald-400" },
];

export function Hero() {
  const [renderedLines, setRenderedLines] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    if (lineIdx >= terminalLines.length) {
      setDone(true);
      return;
    }
    const line = terminalLines[lineIdx];
    const fullText = line.output;
    if (charIdx <= fullText.length) {
      const t = setTimeout(() => {
        setCurrentLine(fullText.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 35);
      return () => clearTimeout(t);
    } else {
      // commit line, move to next
      const t = setTimeout(() => {
        setRenderedLines((prev) => [...prev, lineIdx]);
        setCurrentLine("");
        setCharIdx(0);
        setLineIdx((i) => i + 1);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentLine, renderedLines]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:px-6">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-teal-500/8 blur-[100px]" />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur-sm glow-emerald"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              alpaca@cryineye:~/portfolio — zsh
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="h-[280px] overflow-y-auto p-5 font-mono text-sm leading-relaxed sm:h-[260px]"
          >
            {renderedLines.map((idx) => {
              const line = terminalLines[idx];
              return (
                <div key={idx} className="mb-2">
                  <span className="text-emerald-400">alpaca@cryineye</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-teal-400">~/portfolio</span>
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-foreground">{line.prompt}</span>
                  <div className={line.color || "text-foreground"}>
                    {line.output}
                  </div>
                </div>
              );
            })}

            {/* Currently typing line */}
            {lineIdx < terminalLines.length && (
              <div className="mb-2">
                <span className="text-emerald-400">alpaca@cryineye</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-teal-400">~/portfolio</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">
                  {terminalLines[lineIdx].prompt}
                </span>
                <div className={terminalLines[lineIdx].color || "text-foreground"}>
                  {currentLine}
                  {!done && (
                    <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-emerald-400 align-middle" />
                  )}
                </div>
              </div>
            )}

            {/* Final prompt with cursor */}
            {done && (
              <div className="mt-1">
                <span className="text-emerald-400">alpaca@cryineye</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-teal-400">~/portfolio</span>
                <span className="text-muted-foreground">$ </span>
                <span className="cursor-blink inline-block h-4 w-2 bg-emerald-400 align-middle" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Name + role + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="gradient-text text-glow">ALPACA CRYINEYE</span>
          </h1>
          <p className="mt-3 font-mono text-base text-muted-foreground sm:text-lg">
            <span className="text-emerald-400">{"// "}</span>
            Full-Stack Developer & Systems Builder
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-mono text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-400/20 hover:shadow-[0_0_24px_-4px] hover:shadow-emerald-400/40"
            >
              <span className="text-emerald-400">$</span> view_projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> get_in_touch
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/ZAlpaca"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-emerald-400"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilya-tolstikov-6139663ab/"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-emerald-400"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:alpaca@cryineye.space"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-emerald-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-emerald-400">
          <span className="font-mono text-xs">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
