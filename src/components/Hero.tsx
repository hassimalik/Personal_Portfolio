"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import ParticleSphere from "./ParticleSphere";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const typeRef = useRef<HTMLHeadingElement>(null);

  const phrases = [
    "Hi, I'm Hassaan Aslam",
    "I'm Frontend Developer",
    "I create Smooth, Interactive UIs",
    "I build Interactive Web Applications",
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!deleting) {
        // Typing
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          deleting = true;
          timeout = setTimeout(type, 1500); // pause at full text
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      const delay = deleting ? 50 : 120; // faster delete, slower type
      timeout = setTimeout(type, delay);
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center section-padding pt-28"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">
          <p className="font-mono text-primary text-sm tracking-widest uppercase fade-in-child">
            Frontend Developer
          </p>

          {/* Typewriter / Typing Animation */}
          <h1
            ref={typeRef}
            className="text-5xl md:text-7xl font-bold leading-tight gradient-text"
          >
            {displayText}
            <span className="border-r-2 border-primary animate-blink ml-1" />
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed fade-in-child">
            I craft high-performance, pixel-perfect web experiences with React &
            Next.js. 2+ years of turning complex designs into seamless,
            responsive interfaces.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 fade-in-child">
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

          <div className="flex items-center gap-6 pt-4 text-muted-foreground text-sm font-mono fade-in-child">
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

      {/* Tailwind blink animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;