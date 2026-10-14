import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Zap, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";

const slides = [
  {
    title: "Quarterly Business Review",
    tag: "Q4 2025",
    colors: ["#7DD3FC", "#A5F3FC"],
    top: "8%",
    left: "4%",
    rotate: -8,
    depth: 0.3,
  },
  {
    title: "Healthcare Analytics",
    tag: "Strategy",
    colors: ["#5EEAD4", "#67E8F9"],
    top: "62%",
    left: "2%",
    rotate: 6,
    depth: 0.5,
  },
  {
    title: "Product Strategy 2026",
    tag: "Roadmap",
    colors: ["#A78BFA", "#C4B5FD"],
    top: "12%",
    left: "78%",
    rotate: 7,
    depth: 0.4,
  },
  {
    title: "Financial Forecast",
    tag: "Finance",
    colors: ["#FCA5A5", "#FDBA74"],
    top: "68%",
    left: "80%",
    rotate: -5,
    depth: 0.6,
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center pt-32 pb-24"
    >
      {/* light beams */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: "var(--gradient-aqua)" }}
        />
        <Particles />
      </div>

      {/* floating slides */}
      {slides.map((s, i) => (
        <FloatingSlide key={i} slide={s} index={i} scrollProgress={scrollYProgress} />
      ))}

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-teal"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
          AI KNOWLEDGE WORKSPACE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink"
        >
          Every Presentation. <br />
          <span className="text-gradient-aqua">One Conversation</span>{" "}
          <span className="text-ink-soft/70">away.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          Search, understand and interact with PowerPoint knowledge across OneDrive and SharePoint —
          instantly, through conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/chat"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-ink/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Explore intelligence
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#demo"
            className="glass group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Watch demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="glass mx-auto mt-14 flex w-fit items-center gap-3 rounded-2xl px-4 py-2.5 text-xs text-ink-soft"
        >
          <Zap className="h-3.5 w-3.5 text-teal" />
          <span className="text-ink-soft/70">Answered in</span>
          <span className="font-display text-sm font-semibold text-ink">0.8 seconds</span>
          <span className="mx-2 h-3 w-px bg-border" />
          <Sparkles className="h-3.5 w-3.5 text-teal" />
          <span>12 sources synthesized</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingSlide({
  slide,
  index,
  scrollProgress,
}: {
  slide: (typeof slides)[number];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollProgress, [0, 1], [0, -200 * slide.depth]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: slide.rotate - 5 }}
      animate={{ opacity: 1, y: 0, rotate: slide.rotate }}
      transition={{ delay: 0.4 + index * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ top: slide.top, left: slide.left, y }}
      className="pointer-events-none absolute hidden w-[260px] md:block"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong rounded-2xl p-4"
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>
        <div
          className="mb-3 h-24 rounded-lg"
          style={{ background: `linear-gradient(135deg, ${slide.colors[0]}, ${slide.colors[1]})` }}
        />
        <div className="space-y-1.5">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-teal">
            {slide.tag}
          </div>
          <div className="font-display text-sm font-semibold leading-tight text-ink">
            {slide.title}
          </div>
          <div className="flex gap-1.5 pt-1">
            <div className="h-1 w-8 rounded-full bg-ink/15" />
            <div className="h-1 w-12 rounded-full bg-ink/10" />
            <div className="h-1 w-6 rounded-full bg-ink/10" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <>
      {dots.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.5;
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-teal/40"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}
