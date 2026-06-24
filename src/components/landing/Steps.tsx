import { motion } from "framer-motion";
import { Cloud, FileText, Users, Building2, Briefcase, FlaskConical, Scale } from "lucide-react";

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
/**
 * OneDrive — "Gravity well of personal files"
 * Meaning: scattered personal PowerPoints across folders get pulled
 * inward by Sanitana AI, orbit briefly, then become a unified, indexed
 * knowledge core. Personal → ingested → searchable.
 */
function OneDriveVisual() {
  const files = [
    { angle: 0,   r: 38, delay: 0.0, tint: "#60A5FA" },
    { angle: 55,  r: 42, delay: 0.3, tint: "#7DD3FC" },
    { angle: 110, r: 36, delay: 0.6, tint: "#A78BFA" },
    { angle: 165, r: 44, delay: 0.9, tint: "#5EEAD4" },
    { angle: 220, r: 38, delay: 1.2, tint: "#FDBA74" },
    { angle: 275, r: 42, delay: 1.5, tint: "#F472B6" },
    { angle: 320, r: 36, delay: 1.8, tint: "#38BDF8" },
  ];
  return (
    <div className="relative h-full w-full">
      {/* concentric pulse rings — the "pull" */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border border-teal/30"
          style={{ width: 120, height: 120, x: "-50%", y: "-50%" }}
          animate={{ scale: [0.4, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 1 }}
        />
      ))}

      {/* central cloud core */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], boxShadow: [
          "0 0 0 0 rgba(59,130,246,0.45)",
          "0 0 0 18px rgba(59,130,246,0)",
          "0 0 0 0 rgba(59,130,246,0)",
        ] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl shadow-xl"
        style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
      >
        <Cloud className="h-9 w-9 text-white" strokeWidth={2} />
      </motion.div>

      {/* files orbiting + getting sucked in */}
      {files.map((f, i) => {
        const rad = (f.angle * Math.PI) / 180;
        const startX = Math.cos(rad) * f.r * 2.4;
        const startY = Math.sin(rad) * f.r * 2.4;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            initial={{ x: startX, y: startY, opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{
              x: [startX, startX * 0.55, 0],
              y: [startY, startY * 0.55, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: f.delay,
              ease: "easeInOut",
              times: [0, 0.2, 0.85, 1],
            }}
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-1.5 shadow-md ring-1 ring-black/5"
              style={{ width: 28 }}
            >
              <FileText className="h-4 w-4" style={{ color: f.tint }} strokeWidth={2.2} />
            </div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft/60">
        Personal decks → indexed
      </div>
    </div>
  );
}

/**
 * SharePoint — "Breaking silos"
 * Meaning: separate department vaults are walled off. A pulse of light
 * travels between them through new bridges, walls dissolve, knowledge
 * flows across teams. Org-wide → connected → conversational.
 */
function SharePointVisual() {
  const sites = [
    { label: "Legal",    x: 18, y: 22, Icon: Scale },
    { label: "Finance",  x: 82, y: 22, Icon: Briefcase },
    { label: "HR",       x: 18, y: 78, Icon: Users },
    { label: "R&D",      x: 82, y: 78, Icon: FlaskConical },
    { label: "Strategy", x: 50, y: 50, Icon: Building2, center: true },
  ];
  // links between Strategy hub and each spoke
  const links = sites
    .filter((s) => !s.center)
    .map((s) => ({ from: { x: 50, y: 50 }, to: { x: s.x, y: s.y }, label: s.label }));

  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sp-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.78 0.12 195)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.78 0.14 195)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.78 0.12 195)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* dotted "walls" that dissolve, then solid bridges that connect */}
        {links.map((l, i) => (
          <g key={i}>
            <motion.line
              x1={l.from.x} y1={l.from.y} x2={l.to.x} y2={l.to.y}
              stroke="oklch(0.85 0.02 250)"
              strokeWidth="0.4"
              strokeDasharray="1.5 2"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 0.15, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.line
              x1={l.from.x} y1={l.from.y} x2={l.to.x} y2={l.to.y}
              stroke="oklch(0.7 0.13 195)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2, times: [0, 0.35, 0.75, 1] }}
            />
            {/* travelling pulse of knowledge */}
            <motion.circle
              r="1.1"
              fill="oklch(0.95 0.05 195)"
              initial={{ cx: l.from.x, cy: l.from.y, opacity: 0 }}
              animate={{
                cx: [l.from.x, l.to.x, l.from.x],
                cy: [l.from.y, l.to.y, l.from.y],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 + i * 0.35, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>

      {sites.map((s, i) => (
        <div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* aura ring when knowledge arrives */}
            {!s.center && (
              <motion.span
                className="absolute inset-0 rounded-2xl ring-2 ring-teal/40"
                animate={{ opacity: [0, 0.9, 0], scale: [0.9, 1.25, 1.4] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 + i * 0.35 }}
              />
            )}
            <motion.div
              animate={s.center ? { scale: [1, 1.06, 1] } : {}}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className={`relative mx-auto flex items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-teal/20 ${
                s.center ? "h-14 w-14" : "h-11 w-11"
              }`}
              style={
                s.center
                  ? { background: "linear-gradient(135deg, #ffffff, #E0F2FE)" }
                  : undefined
              }
            >
              <s.Icon
                className={s.center ? "h-6 w-6 text-teal" : "h-5 w-5 text-teal"}
                strokeWidth={2}
              />
            </motion.div>
          </motion.div>
          <div className={`mt-1.5 text-[10px] font-semibold uppercase tracking-wider ${s.center ? "text-teal" : "text-ink-soft"}`}>
            {s.label}
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft/60">
        Silos dissolve → knowledge flows
      </div>
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