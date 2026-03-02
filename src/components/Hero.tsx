"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { ArrowDown, Download, MessageCircle, Linkedin, Youtube, Facebook, Github } from "lucide-react";
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
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }
      } else {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      const delay = deleting ? 50 : 120;
      timeout = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/hassaan-aslam-3b0798290/" },
    { icon: Youtube, href: "https://youtube.com/@codingthirst" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588569246765" },
    { icon: Github, href: "https://github.com/hassimalik" },
  ];

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

          <h1
            ref={typeRef}
            className="text-5xl md:text-7xl font-bold leading-tight gradient-text"
          >
            {displayText}
            <span className="border-r-2 border-primary animate-blink ml-1" />
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed fade-in-child">
            I craft high-performance, pixel-perfect web experiences with React & Next.js. 2+ years
            of turning complex designs into seamless, responsive interfaces.
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
              href="/resume-hassaan-aslam.pdf"
              download="Hassaan-Aslam-Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex flex-col gap-4 pt-4 text-sm fade-in-child">
            <span className="flex items-center gap-2 text-muted-foreground font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </span>

            {/* Social icons under "Available for work" */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-transform transition-colors duration-300 shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
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