import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-20 text-center sm:px-16"
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-mesh)" }}
        />
        <div
          className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-aqua)" }}
        />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Unlock your organization's{" "}
            <span className="text-gradient-aqua">presentation intelligence.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            You're signed in. Start a conversation and Sanitana AI will search every presentation
            across OneDrive and SharePoint for you.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/chat"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-4 text-sm font-medium text-white shadow-2xl shadow-ink/30 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-60"
                style={{ background: "var(--gradient-aqua)" }}
              />
            </Link>
          </div>
          <div className="mt-4 text-xs text-ink-soft/70">
            Access OneDrive & SharePoint · Permissions respected
          </div>
        </div>
      </motion.div>
    </section>
  );
}
