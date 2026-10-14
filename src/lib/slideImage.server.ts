import { createServerFn } from "@tanstack/react-start";
import { readFile, stat } from "node:fs/promises";
import { extname } from "node:path";

const MIME_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
};

export const getSlideImage = createServerFn({ method: "GET" })
  .validator((path: unknown) => {
    if (typeof path !== "string" || path.trim().length === 0) {
      throw new Error("A slide image path is required.");
    }
    return path;
  })
  .handler(async ({ data: filePath }) => {
    const ext = extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext];
    if (!mime) {
      throw new Error(`Unsupported slide image type: "${ext || filePath}"`);
    }

    let info;
    try {
      info = await stat(filePath);
    } catch {
      throw new Error(`Slide image not found on disk: ${filePath}`);
    }
    if (!info.isFile()) {
      throw new Error(`Slide image path is not a file: ${filePath}`);
    }

    const buffer = await readFile(filePath);
    return { dataUrl: `data:${mime};base64,${buffer.toString("base64")}` };
  });
