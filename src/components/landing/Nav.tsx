import { motion } from "framer-motion";
import { Sparkles, ArrowRight, LogOut } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { signOut } from "@/lib/auth";

export function Nav() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate({ to: "/login" });
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="relative flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: "var(--gradient-aqua)" }}
          >
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40" />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
            Sanitana <span className="text-teal">AI</span>
          </span>
          <span className="ml-1 rounded-md bg-teal-soft/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
            Beta
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "How it works", "Features"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/chat"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5"
          >
            Open chat
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={handleSignOut}
            title="Sign out"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-white/50 hover:text-ink"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
