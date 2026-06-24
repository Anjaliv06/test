import { motion } from "framer-motion";
import { Send, Sparkles, Maximize2, ZoomIn } from "lucide-react";

export function ChatShowcase() {
  return (
    <section id="product" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
        <span className="h-px w-8 bg-teal" /> The workspace
      </div>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
          A Claude-class chat that{" "}
          <span className="text-gradient-aqua">renders your slides.</span>
        </h2>
        <p className="max-w-md text-ink-soft">
          Spacious. Quiet. Every citation opens the exact slide on the right, highlighted in place.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative mt-14 overflow-hidden rounded-3xl"
      >
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[220px_1fr_320px]">
          <aside className="hidden border-r border-white/40 p-5 lg:block">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/60">Recent</div>
            <div className="space-y-1">
              {["Q4 supplier risks", "Healthcare KPIs", "Pricing alignment", "Roadmap 2026", "Hiring plan"].map((t, i) => (
                <div key={t} className={`cursor-pointer rounded-lg px-3 py-2 text-xs transition-colors ${i === 0 ? "bg-white/70 text-ink shadow-sm" : "text-ink-soft hover:bg-white/50"}`}>
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-6 mb-3 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/60">Collections</div>
            <div className="space-y-1 text-xs text-ink-soft">
              <div className="rounded-lg px-3 py-2 hover:bg-white/50">📊 Board decks</div>
              <div className="rounded-lg px-3 py-2 hover:bg-white/50">🧪 Clinical reviews</div>
            </div>
          </aside>

          <div className="flex min-h-[520px] flex-col p-6 sm:p-8">
            <div className="flex-1 space-y-6">
              <div className="ml-auto w-fit max-w-md rounded-2xl rounded-tr-md bg-white px-4 py-2.5 text-sm text-ink shadow-md ring-1 ring-black/5">
                Show me all discussions around customer retention in 2025.
              </div>
              <div className="max-w-xl">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-teal">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal/15"><Sparkles className="h-3 w-3" /></span>
                  Sanitana AI
                  <span className="ml-auto text-[10px] font-medium text-ink-soft/60">8 sources</span>
                </div>
                <Block title="Summary">
                  Retention surfaced in 12 decks this year. The dominant narrative shifted from churn reduction in H1 to expansion revenue in H2, anchored by the new onboarding redesign.
                </Block>
                <Block title="Key findings">
                  <ul className="space-y-1.5">
                    <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-teal" />Net retention improved from 104% to 118%</li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-teal" />Enterprise cohort retains 8 pts higher than mid-market</li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-teal" />Top driver: integration depth, not pricing</li>
                  </ul>
                </Block>
                <Block title="Referenced slides">
                  <div className="flex flex-wrap gap-1.5">
                    {["QBR Q2 · 14", "Strategy '25 · 27", "Customer Health · 9", "Board Nov · 31"].map((s) => (
                      <span key={s} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-teal ring-1 ring-teal/20">{s}</span>
                    ))}
                  </div>
                </Block>
              </div>
              <ThinkingDots />
            </div>
            <div className="glass mt-6 flex items-center gap-3 rounded-2xl px-4 py-3">
              <input className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none" placeholder="Ask about presentations…" readOnly />
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <aside className="hidden border-l border-white/40 p-5 lg:block">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-ink-soft/60">
              <span>Slide 27</span>
              <div className="flex gap-1.5">
                <button className="rounded-md p-1 hover:bg-white/60"><ZoomIn className="h-3 w-3" /></button>
                <button className="rounded-md p-1 hover:bg-white/60"><Maximize2 className="h-3 w-3" /></button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
              <div className="aspect-[4/3] p-3.5">
                <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-teal">Strategy '25</div>
                <div className="font-display text-[13px] font-semibold leading-tight text-ink">Retention drivers by cohort</div>
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {[40, 65, 80, 95, 70, 55].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 3 ? "linear-gradient(180deg,#5EEAD4,#7DD3FC)" : "oklch(0.92 0.02 230)" }} />
                  ))}
                </div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity }} className="mt-3 rounded-md bg-teal/15 px-2 py-1 text-[10px] text-teal">
                  Enterprise: +118% NRR
                </motion.div>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-ink-soft/70">Highlighted by AI · click to open in PowerPoint</div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-soft/60">{title}</div>
      <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

function ThinkingDots() {
  return (
    <div className="flex items-center gap-2 text-xs text-ink-soft/70">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-teal" animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }} />
        ))}
      </div>
      Synthesizing slides…
    </div>
  );
}