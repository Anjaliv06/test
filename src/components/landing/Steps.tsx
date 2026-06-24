import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export function Steps() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="font-display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
        Your organization's knowledge,{" "}
        <span className="text-gradient-aqua">connected and conversational.</span>
      </h2>

      <div className="mt-20 space-y-32">
        <StepRow index="01" title="OneDrive Intelligence" body="Connect thousands of presentations stored across OneDrive — personal and shared. Permissions are respected, no folder is left behind." visual={<OneDriveVisual />} />
        <StepRow reverse index="02" title="SharePoint Knowledge" body="Break information silos. Search across organizational sites, libraries and team channels — the way you'd ask a colleague." visual={<SharePointVisual />} />
        <StepRow index="03" title="AI Understands Context" body="Slide relationships, narrative arcs and quarter-over-quarter trends — Sanitana AI reads presentations the way an analyst would." visual={<ContextVisual />} />
        <StepRow reverse index="04" title="Instant Answers" body='Ask "What were our supplier risks discussed in Q4?" — get a synthesized answer with rendered slides and clickable sources.' visual={<AnswerVisual />} />
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
      <span className="h-px w-8 bg-teal" />
      {children}
    </div>
  );
}

function StepRow({
  index,
  title,
  body,
  visual,
  reverse,
}: {
  index: string;
  title: string;
  body: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="glass-strong relative aspect-[4/3] overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="relative flex h-full items-center justify-center p-10">{visual}</div>
      </div>
      <div className="max-w-md">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft/60">
          Step {index}
        </div>
        <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{body}</p>
      </div>
    </motion.div>
  );
}

/* ---------- visuals ---------- */

function OneDriveVisual() {
  const cards = [
    { c: ["#7DD3FC", "#BAE6FD"], top: "5%", left: "55%" },
    { c: ["#FDBA74", "#FED7AA"], top: "5%", left: "85%" },
    { c: ["#A78BFA", "#DDD6FE"], top: "45%", left: "20%" },
    { c: ["#60A5FA", "#BFDBFE"], top: "45%", left: "85%" },
    { c: ["#94A3B8", "#CBD5E1"], top: "85%", left: "55%" },
    { c: ["#5EEAD4", "#A7F3D0"], top: "85%", left: "85%" },
  ];
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 flex h-24 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl shadow-lg"
        style={{ background: "linear-gradient(135deg, #3B82F6, #60A5FA)" }}
      >
        <Cloud className="h-10 w-10 text-white" strokeWidth={2} />
      </motion.div>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
          animate={{ y: [0, -6, 0] }}
          style={{ top: card.top, left: card.left }}
          className="absolute"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="w-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5"
          >
            <div className="mb-1 h-1 w-8 rounded-full" style={{ background: card.c[0] }} />
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded-md" style={{ background: card.c[1] }} />
              <div className="h-4 w-4 rounded-md" style={{ background: card.c[0] }} />
              <div className="h-4 w-4 rounded-md" style={{ background: card.c[1] }} />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function SharePointVisual() {
  const nodes = [
    { label: "Legal", x: 50, y: 12 },
    { label: "HR", x: 18, y: 32 },
    { label: "Finance", x: 82, y: 32 },
    { label: "Strategy", x: 50, y: 55, center: true },
    { label: "Ops", x: 18, y: 82 },
    { label: "R&D", x: 82, y: 82 },
  ];
  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.filter((n) => !n.center).map((n, i) => (
          <motion.line
            key={i}
            x1="50" y1="55"
            x2={n.x} y2={n.y}
            stroke="oklch(0.7 0.12 195)"
            strokeWidth="0.3"
            strokeDasharray="2 1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
          />
        ))}
      </svg>
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.div
            animate={{ scale: n.center ? [1, 1.08, 1] : [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className={`mx-auto flex items-center justify-center rounded-full bg-white shadow-md ring-1 ring-teal/20 ${n.center ? "h-14 w-14" : "h-11 w-11"}`}
          >
            <div className="flex gap-0.5">
              <div className="h-3 w-3 rounded-full bg-teal" />
              <div className="h-3 w-3 -ml-1.5 rounded-full bg-teal/70" />
            </div>
          </motion.div>
          <div className="mt-1.5 text-[11px] font-medium text-ink-soft">{n.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ContextVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="glass rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-teal">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal/15">✦</span>
          Sanitana AI
          <span className="ml-auto text-[10px] font-medium text-ink-soft/60">analyzing 247 slides</span>
        </div>
        <div className="space-y-2">
          {["Detected quarterly pattern across 3 decks", "Linked to Q3 strategy review", "Cross-referencing budget data"].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.5 }}
              className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 text-xs text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnswerVisual() {
  return (
    <div className="w-full max-w-md space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ml-auto w-fit max-w-xs rounded-2xl rounded-tr-sm bg-white px-4 py-2.5 text-sm text-ink shadow-md ring-1 ring-black/5"
      >
        What were our supplier risks discussed in Q4?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="glass-strong rounded-2xl rounded-tl-sm p-4"
      >
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-teal">
          <span>✦</span> Sanitana AI
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">
          Three themes dominated Q4 — geopolitical exposure, single-source dependencies, and FX volatility.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Slide 12", "Slide 27", "Slide 48"].map((s) => (
            <span key={s} className="rounded-full bg-teal/15 px-2.5 py-0.5 text-[11px] font-medium text-teal">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}