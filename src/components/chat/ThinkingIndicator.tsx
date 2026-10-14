import { Sparkles } from "lucide-react";

export function ThinkingIndicator() {
  return (
    <div className="max-w-xl">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-teal">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal/15">
          <Sparkles className="h-3 w-3" />
        </span>
        Sanitana AI
        <span className="ml-auto text-[10px] font-medium text-ink-soft/60">searching slides…</span>
      </div>
      <div className="space-y-2">
        <div className="shimmer-line h-3 w-[92%] rounded-full" />
        <div className="shimmer-line h-3 w-[78%] rounded-full" />
        <div className="shimmer-line h-3 w-[85%] rounded-full" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="shimmer-line aspect-[4/3] rounded-lg" />
        ))}
      </div>
    </div>
  );
}
