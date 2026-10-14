import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Check, Cloud, Users } from "lucide-react";
import { useState } from "react";
import { signIn } from "@/lib/auth";
import { CursorGlow } from "@/components/landing/CursorGlow";

type Status = "idle" | "connecting" | "success";

export function EntraLogin() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSignIn() {
    if (status !== "idle") return;
    setStatus("connecting");
    await new Promise((r) => setTimeout(r, 1600));
    signIn();
    setStatus("success");
    await new Promise((r) => setTimeout(r, 550));
    navigate({ to: "/" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div
        className="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex"
        style={{ background: "var(--gradient-ink)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-aqua)" }}
        />

        <div className="relative flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: "var(--gradient-aqua)" }}
          >
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Sanitana <span className="text-teal-soft">AI</span>
          </span>
          <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-soft">
            Beta
          </span>
        </div>

        <div className="relative">
          <h1 className="font-display max-w-md text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            Every deck your team has ever made.{" "}
            <span className="text-teal-soft">One conversation away.</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Sign in with your organization's Microsoft account to search, understand and cite every
            PowerPoint across OneDrive and SharePoint.
          </p>

          <SlidePreviewStack />
        </div>

        <div className="relative flex items-center gap-5 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Cloud className="h-3.5 w-3.5 text-teal-soft" />
            OneDrive & SharePoint
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-soft" />
            Permissions respected
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-teal-soft" />
            Enterprise SSO
          </span>
        </div>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden bg-background bg-mesh px-4 py-16">
        <CursorGlow />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong relative w-full max-w-md rounded-3xl p-9 text-center sm:p-10"
        >
          <div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg lg:hidden"
            style={{ background: "var(--gradient-aqua)" }}
          >
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>

          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Sign in to Sanitana AI
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Use your organization's Microsoft account to continue. We respect every permission
            across OneDrive and SharePoint.
          </p>

          <button
            onClick={handleSignIn}
            disabled={status !== "idle"}
            className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-ink px-6 py-4 text-sm font-medium text-white shadow-xl shadow-ink/25 transition-all hover:-translate-y-0.5 disabled:cursor-default disabled:hover:translate-y-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <MsLogo />
                  Sign in with Microsoft
                </motion.span>
              )}
              {status === "connecting" && (
                <motion.span
                  key=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Connecting to Microsoft Entra ID…
                </motion.span>
              )}
              {status === "success" && (
                <motion.span
                  key=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <Check className="h-4 w-4" />
                  Signed in — redirecting…
                </motion.span>
              )}
            </AnimatePresence>
            <span
              aria-hidden
              className="absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity group-hover:opacity-60"
              style={{ background: "var(--gradient-aqua)" }}
            />
          </button>

          <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/40">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--gradient-aqua)" }}
              initial={{ width: "0%" }}
              animate={{ width: status === "idle" ? "0%" : "100%" }}
              transition={{ duration: status === "connecting" ? 1.6 : 0.3, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-ink-soft/70">
            <ShieldCheck className="h-3.5 w-3.5 text-teal" />
            Protected by Microsoft Entra ID · Organizational SSO
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SlidePreviewStack() {
  const cards = [
    { rotate: -7, top: 64, left: 0, tag: "Strategy '25", title: "Retention drivers by cohort" },
    { rotate: 4, top: 24, left: 100, tag: "Q4 2025", title: "Supplier risk exposure" },
    { rotate: -3, top: 0, left: 210, tag: "Roadmap", title: "2026 platform bets" },
  ];

  return (
    <div className="relative mt-12 h-44 w-full max-w-md">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 16, rotate: c.rotate - 4 }}
          animate={{ opacity: 1, y: [0, -5, 0], rotate: c.rotate }}
          transition={{
            opacity: { delay: 0.3 + i * 0.12, duration: 0.6 },
            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
            rotate: { delay: 0.3 + i * 0.12, duration: 0.6 },
          }}
          className="absolute w-40 rounded-xl bg-white/95 p-3 shadow-xl ring-1 ring-white/20"
          style={{ top: c.top, left: c.left, zIndex: i }}
        >
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-teal">
            {c.tag}
          </div>
          <div className="font-display text-[11px] font-semibold leading-tight text-ink">
            {c.title}
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-1 w-6 rounded-full bg-ink/15" />
            <div className="h-1 w-8 rounded-full bg-ink/10" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MsLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 23 23" aria-hidden>
      <rect width="10" height="10" fill="#F25022" />
      <rect x="12" width="10" height="10" fill="#7FBA00" />
      <rect y="12" width="10" height="10" fill="#00A4EF" />
      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}
