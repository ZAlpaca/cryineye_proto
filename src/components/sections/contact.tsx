"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { DiscordIcon, GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons/brand-icons";

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/ZAlpaca" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/ilya-tolstikov-6139663ab" },
  { label: "Discord", icon: DiscordIcon, copyText: "alpacarx" },
  { label: "Telegram", icon: TelegramIcon, href: "https://t.me/alpacarx" },
  { label: "Email", icon: Mail, href: "mailto:alpaca@cryineye.space" },
];

export function Contact() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyDiscord = async () => {
    await navigator.clipboard.writeText("alpacarx");
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

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
                <motion.div
                  key={s.label}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.label === "Discord" ? (
                    <>
                      <button
                        onClick={handleCopyDiscord}
                        aria-label="Discord"
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-emerald-400"
                      >
                        <s.icon className="h-5 w-5" />
                      </button>

                      {/* Toast notification - только для Discord */}
                      {copiedDiscord && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full mb-2 bg-green-500 text-white px-3 py-2 rounded text-sm whitespace-nowrap flex items-center gap-2"
                        >
                          <Check className="h-4 w-4" />
                          Discord скопирован!
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-emerald-400/40 hover:text-emerald-400"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
