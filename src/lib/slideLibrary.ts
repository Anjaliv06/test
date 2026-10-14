export interface SlideRef {
  path: string;
  deck: string;
  slideNumber: number;
}

/**
 * Point these at real exported slide images (png/jpg) on this machine.
 * The chat page reads each file from disk via slideImage.server.ts and
 * renders the actual slide — nothing here is a placeholder graphic.
 */
export const slideLibrary: SlideRef[] = [
  // { path: "D:\\sanitas-poc\\slides\\Q4-Strategy\\slide-12.png", deck: "Q4 Strategy Review", slideNumber: 12 },
];
