import { useEffect, useState } from "react";
import { getSlideImage } from "@/lib/slideImage.server";

type SlideImageState =
  | { status: "loading" }
  | { status: "ready"; src: string }
  | { status: "error"; message: string };

export function useSlideImage(path: string): SlideImageState {
  const [state, setState] = useState<SlideImageState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    getSlideImage({ data: path })
      .then((res) => {
        if (!cancelled) setState({ status: "ready", src: res.dataUrl });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({
            status: "error",
            message: err instanceof Error ? err.message : "Failed to load slide.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return state;
}
