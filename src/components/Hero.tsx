import { Suspense } from "react";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import ParticleSphere from "./ParticleSphere";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28" id="hero">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">
          <p className="font-mono text-primary text-sm tracking-widest uppercase">
            Frontend Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Hassaan</span>
            <br />
            <span className="gradient-text">Aslam</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I craft high-performance, pixel-perfect web experiences with React & Next.js.
            2+ years of turning complex designs into seamless, responsive interfaces.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(175_80%_50%/0.4)] transition-all duration-300"
            >
              <MessageCircle size={18} />
              Let's Talk
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-muted-foreground text-sm font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </span>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[550px]">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Loading 3D...
              </div>
            }
          >
            <ParticleSphere />
          </Suspense>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
