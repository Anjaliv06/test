import type { SlideRef } from "@/lib/slideLibrary";
import { SlideCard } from "./SlideCard";

export function SlideGrid({ slides }: { slides: SlideRef[] }) {
  if (slides.length === 0) return null;

  return (
    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {slides.map((slide) => (
        <SlideCard key={slide.path} slide={slide} />
      ))}
    </div>
  );
}
