import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, LogOut, Plus } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { signOut } from "@/lib/auth";
import { askSanitana } from "@/lib/mockChat";
import { MessageBubble } from "./MessageBubble";
import { ThinkingIndicator } from "./ThinkingIndicator";
import { ChatComposer } from "./ChatComposer";
import type { ChatMessage } from "./types";

const RECENT = [
  "Q4 supplier risks",
  "Healthcare KPIs",
  "Pricing alignment",
  "Roadmap 2026",
  "Hiring plan",
];

const SUGGESTIONS = [
  "What were our supplier risks discussed in Q4?",
  "Summarize the healthcare KPI decks from this year",
  "Where does pricing come up across recent board decks?",
];

export function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  async function handleSend(text: string) {
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setPending(true);

    try {
      const answer = await askSanitana(text);
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", text: answer.text, slides: answer.slides },
      ]);
    } finally {
      setPending(false);
    }
  }

  function handleNewChat() {
    if (pending) return;
    setMessages([]);
  }

  function handleSignOut() {
    signOut();
    navigate({ to: "/login" });
  }

  return (
    <div className="flex min-h-screen bg-white">
      <aside
        className="hidden w-64 shrink-0 flex-col p-4 text-white lg:flex"
        style={{ background: "var(--gradient-ink)" }}
      >
        <Link to="/" className="mb-6 flex items-center gap-2.5 px-1.5 py-1">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-xl"
            style={{ background: "var(--gradient-aqua)" }}
          >
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Sanitana <span className="text-teal-soft">AI</span>
          </span>
        </Link>

        <button
          onClick={handleNewChat}
          className="mb-6 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
        >
          <Plus className="h-4 w-4" />
          New chat
        </button>

        <div className="mb-3 px-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
          Recent
        </div>
        <div className="flex-1 space-y-1">
          {RECENT.map((t, i) => (
            <div
              key={t}
              className={`cursor-pointer truncate rounded-lg px-3 py-2 text-sm transition-colors ${
                i === 0
                  ? "bg-white/15 text-white"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-white/10 pt-4">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border px-6 py-4 lg:hidden">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-muted hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
              Sanitana <span className="text-teal">AI</span>
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-ink-soft transition-colors hover:bg-muted hover:text-ink"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </header>

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col p-6 sm:p-8">
          <div ref={scrollRef} className="flex-1 space-y-6 overflow-y-auto">
            {messages.length === 0 && !pending && <EmptyState onPick={(q) => handleSend(q)} />}
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <MessageBubble message={m} />
              </motion.div>
            ))}
            {pending && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <ThinkingIndicator />
              </motion.div>
            )}
          </div>
          <ChatComposer disabled={pending} onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (question: string) => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
        style={{ background: "var(--gradient-aqua)" }}
      >
        <Sparkles className="h-5 w-5 text-white" />
      </span>
      <h2 className="font-display text-xl font-semibold text-ink">Ask about any presentation</h2>
      <p className="max-w-sm text-sm text-ink-soft">
        Sanitana AI searches every PowerPoint across OneDrive and SharePoint and answers with the
        exact slides behind it.
      </p>
      <div className="mt-4 flex w-full max-w-lg flex-col gap-2">
        {SUGGESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onPick(q)}
            className="rounded-xl border border-border bg-white px-4 py-3 text-left text-sm text-ink-soft shadow-sm transition-colors hover:border-teal/40 hover:bg-teal-soft/20 hover:text-ink"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
