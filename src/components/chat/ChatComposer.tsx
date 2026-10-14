import { Send } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

export function ChatComposer({
  disabled,
  onSend,
}: {
  disabled: boolean;
  onSend: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  function submit() {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="mt-6 flex items-end gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm transition-shadow focus-within:border-teal/50 focus-within:shadow-md">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about presentations…"
        rows={1}
        className="max-h-40 flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none"
      />
      <button
        onClick={submit}
        disabled={disabled || !value.trim()}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-opacity disabled:opacity-40"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
