import { slideLibrary, type SlideRef } from "@/lib/slideLibrary";

export interface ChatAnswer {
  text: string;
  slides: SlideRef[];
}

export async function askSanitana(question: string): Promise<ChatAnswer> {
  await new Promise((r) => setTimeout(r, 1200 + Math.random() * 900));

  const slides = slideLibrary.slice(0, 4);

  return {
    text:
      slides.length > 0
        ? `Here's what I found across your presentations related to "${question}". The most relevant slides are shown below.`
        : `I'd answer "${question}" using slides from OneDrive and SharePoint, but no slide paths are configured yet. Add real file paths to src/lib/slideLibrary.ts to see them rendered here.`,
    slides,
  };
}
