"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/brand-icons";

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/ZAlpaca" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "www.linkedin.com/in/ilya-tolstikov-6139663ab" },
  { label: "Email", icon: Mail, href: "mailto:alpaca@cryineye.space" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-card/60 p-8 text-center sm:p-16">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

          <div className="relative z-10">
            <span className="font-mono text-sm text-emerald-400">05.</span>
            <h2 className="mt-4 font-mono text-3xl font-bold sm:text-5xl">
              <span className="text-emerald-400">$</span> Let&apos;s build{" "}
              <span className="gradient-text">something</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              <span className="font-mono text-emerald-400">{"// "}</span>
              I&apos;m currently available for freelance projects and full-time
              roles. If you have an idea, a product, or just want to talk shop,
              my inbox is open.
            </p>

            <motion.a
              href="mailto:alpaca@cryineye.space"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-8 py-4 font-mono text-base font-medium text-emerald-400 transition-all hover:bg-emerald-400/20 hover:shadow-[0_0_32px_-4px] hover:shadow-emerald-400/50"
            >
              <Mail className="h-5 w-5" />
              alpaca@cryineye.space
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>

            {/* Social links */}
            <div className="mt-10 flex items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-emerald-400"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
