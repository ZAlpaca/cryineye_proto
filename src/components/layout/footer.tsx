import { Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Link href="#" className="group flex items-center gap-2">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-emerald-400">~/</span>Alpaca_CryinEye
          </span>
        </Link>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-emerald-400">$</span> built with next.js,
          react, tailwind — © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
