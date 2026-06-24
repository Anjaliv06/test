import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "var(--gradient-aqua)" }}>
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="font-display text-sm font-semibold text-ink">Sanitana AI</span>
        </div>
        <div className="text-xs text-ink-soft">© 2025 Sanitana. Presentation intelligence for the enterprise.</div>
      </div>
    </footer>
  );
}