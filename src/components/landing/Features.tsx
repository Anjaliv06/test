import { motion } from "framer-motion";
import { Search, Brain, LayoutGrid, Zap, ShieldCheck, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const items: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Search, title: "Unified Search", body: "Search across every PowerPoint in SharePoint and OneDrive — in one place." },
  { icon: Brain, title: "Context Aware", body: "Sanitana understands slide relationships and presentation context." },
  { icon: LayoutGrid, title: "Slide-Level Intelligence", body: "Answers are grounded directly in the slides that contain them." },
  { icon: Zap, title: "Instant Retrieval", body: "Find answers in seconds instead of hours of scrolling through decks." },
  { icon: ShieldCheck, title: "Source Transparency", body: "Every answer references the exact slide and presentation." },
  { icon: Target, title: "Executive Insights", body: "Summaries, trends and strategic takeaways across thousands of decks." },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
        <span className="h-px w-8 bg-teal" /> Features
      </div>
      <h2 className="font-display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
        An intelligence layer{" "}
        <span className="text-gradient-aqua">on top of your decks.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <FeatureCard key={it.title} {...it} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-shadow duration-500 hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", transition: "transform .25s ease" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), oklch(0.85 0.12 195 / 0.18), transparent 60%)",
          }}
        />
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ background: "var(--gradient-aqua)" }}
        >
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
      </div>
    </motion.div>
  );
}