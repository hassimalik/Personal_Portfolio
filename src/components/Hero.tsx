"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Download,
  MessageCircle,
  Linkedin,
  Youtube,
  Facebook,
  Github,
} from "lucide-react";
import { gsap } from "gsap";
import ParticleSphere from "./ParticleSphere";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "Hi, I'm Hassaan Aslam",
    "I'm a Frontend Developer",
    "I create Smooth, Interactive UIs",
    "I build High-Performance Web Apps",
  ];

  /* =========================
     TYPEWRITER EFFECT
  ========================== */
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
          timeout = setTimeout(type, 1400);
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

      timeout = setTimeout(type, deleting ? 45 : 110);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  /* =========================
     CINEMATIC ENTRANCE
  ========================== */
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states immediately — prevents flash of unstyled content
      gsap.set(".hero-badge", { opacity: 0, y: 24 });
      gsap.set(".hero-title", { opacity: 0, y: 60, rotateX: 8 });
      gsap.set(".hero-desc", { opacity: 0, y: 28 });
      gsap.set(".hero-btn", { opacity: 0, y: 22 });
      gsap.set(".hero-social-icon", { opacity: 0, y: 18, scale: 0.85 });
      gsap.set(".hero-3d", { opacity: 0, x: 40 });
      gsap.set(".hero-scroll", { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.15 });

      // Badge — clean mono text reveal
      tl.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })

      // Title — perspective tilt drop, cinematic
      .to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "expo.out",
          transformOrigin: "top center",
        },
        "-=0.3"
      )

      // Description — smooth lag behind title
      .to(
        ".hero-desc",
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.6"
      )

      // Buttons — staggered, fast, no scale (prevents compositing lag)
      .to(
        ".hero-btn",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.14,
          ease: "power2.out",
        },
        "-=0.5"
      )

      // Social icons — elastic pop in, staggered
      .to(
        ".hero-social-icon",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "back.out(1.8)",
        },
        "-=0.3"
      )

      // 3D sphere — slides in from right, no scale
      .to(
        ".hero-3d",
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=1.1"
      )

      // Scroll arrow — fades in last
      .to(
        ".hero-scroll",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
        },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/hassaan-aslam-3b0798290/" },
    { icon: Youtube, href: "https://youtube.com/@codingthirst" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588569246765" },
    { icon: Github, href: "https://github.com/hassimalik" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
      id="hero"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">

          <p className="hero-badge font-mono text-primary text-sm tracking-widest uppercase">
            Frontend Developer
          </p>

          <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight gradient-text">
            {displayText}
            <span className="border-r-2 border-primary animate-blink ml-1" />
          </h1>

          <p className="hero-desc text-lg text-muted-foreground max-w-lg leading-relaxed">
            I craft high-performance, pixel-perfect web experiences with React & Next.js.
            Turning complex ideas into seamless, interactive interfaces.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="hero-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(175_80%_50%/0.5)]"
            >
              <MessageCircle size={18} />
              Let's Talk
            </a>

            <a
              href="/resume-hassaan-aslam.pdf"
              download="Hassaan-Aslam-Resume.pdf"
              className="hero-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex flex-col gap-4 pt-4 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </span>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon p-3 rounded-full bg-secondary border border-border text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-3d relative h-[400px] md:h-[550px]">
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
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
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
          .hero-btn,
          .hero-social-icon {
            will-change: transform, opacity;
            transform: translateZ(0);
          }
        `}
      </style>
    </section>
  );
};

export default Hero;