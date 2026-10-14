import { Sparkles } from "lucide-react";
import { SlideGrid } from "./SlideGrid";
import type { ChatMessage } from "./types";

export function MessageBubble({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return (
      <div className="ml-auto w-fit max-w-md rounded-2xl rounded-tr-md bg-ink px-4 py-2.5 text-sm text-white shadow-md">
        {message.text}
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-teal">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal/15">
          <Sparkles className="h-3 w-3" />
        </span>
        Sanitana AI
        {message.slides.length > 0 && (
          <span className="ml-auto text-[10px] font-medium text-ink-soft/60">
            {message.slides.length} slide{message.slides.length === 1 ? "" : "s"}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{message.text}</p>
      <SlideGrid slides={message.slides} />
    </div>
  );
}
