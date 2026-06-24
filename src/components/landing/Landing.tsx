import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Steps } from "./Steps";
import { Features } from "./Features";
import { ChatShowcase } from "./ChatShowcase";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";

export function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground bg-mesh">
      <CursorGlow />
      <Nav />
      <main className="relative">
        <Hero />
        <Steps />
        <Features />
        <ChatShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}