import type { SlideRef } from "@/lib/slideLibrary";

export type ChatMessage =
  | { id: string; role: "user"; text: string }
  | { id: string; role: "assistant"; text: string; slides: SlideRef[] };
