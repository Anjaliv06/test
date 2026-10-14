import { Maximize2, ImageOff } from "lucide-react";
import { useState } from "react";
import { useSlideImage } from "./useSlideImage";
import type { SlideRef } from "@/lib/slideLibrary";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function SlideCard({ slide }: { slide: SlideRef }) {
  const image = useSlideImage(slide.path);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => image.status === "ready" && setOpen(true)}
        className="group relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
      >
        {image.status === "loading" && <div className="shimmer-line h-full w-full" />}
        {image.status === "error" && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-muted p-3 text-center">
            <ImageOff className="h-5 w-5 text-muted-foreground" />
            <span className="text-[10px] leading-tight text-muted-foreground">{image.message}</span>
          </div>
        )}
        {image.status === "ready" && (
          <>
            <img
              src={image.src}
              alt={`${slide.deck} — slide ${slide.slideNumber}`}
              className="h-full w-full object-cover"
            />
            <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-md bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3 w-3" />
            </span>
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1.5 text-left">
          <div className="truncate text-[10px] font-medium text-white">{slide.deck}</div>
          <div className="text-[9px] text-white/70">Slide {slide.slideNumber}</div>
        </div>
      </button>

      {image.status === "ready" && (
        <DialogContent className="max-w-3xl bg-transparent border-none shadow-none p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>
              {slide.deck} — Slide {slide.slideNumber}
            </DialogTitle>
            <DialogDescription>Full-size view of the referenced slide.</DialogDescription>
          </DialogHeader>
          <img
            src={image.src}
            alt={`${slide.deck} — slide ${slide.slideNumber}`}
            className="w-full rounded-2xl shadow-2xl"
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
