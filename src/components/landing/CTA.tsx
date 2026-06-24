import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="login" className="relative mx-auto max-w-7xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-20 text-center sm:px-16"
      >
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-mesh)" }} />
        <div className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-aqua)" }} />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Unlock your organization's{" "}
            <span className="text-gradient-aqua">presentation intelligence.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            Sign in with Microsoft. We respect every permission across OneDrive and SharePoint.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#" className="group relative inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-4 text-sm font-medium text-white shadow-2xl shadow-ink/30 transition-all hover:-translate-y-0.5">
              <MsLogo />
              Sign in with Microsoft
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-60" style={{ background: "var(--gradient-aqua)" }} />
            </a>
          </div>
          <div className="mt-4 text-xs text-ink-soft/70">Access OneDrive & SharePoint · Permissions respected</div>
        </div>
      </motion.div>
    </section>
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