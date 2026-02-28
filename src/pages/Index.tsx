"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseMe from "@/components/WhyChooseMe";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const st = (trigger: Element, start = "top 88%"): gsap.TweenVars => ({
  scrollTrigger: {
    trigger,
    start,
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  },
});

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {

      // ─────────────────────────────────────────────────
      // 1. NAVBAR
      // ─────────────────────────────────────────────────
      const navbar = document.querySelector<HTMLElement>("nav, header");
      if (navbar) {
        gsap.from(navbar, {
          y: -60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });

        // 🔥 FIX: Animate header buttons instantly (no lag)
        const headerButtons = navbar.querySelectorAll<HTMLElement>(
          "a, button"
        );

        if (headerButtons.length) {
          gsap.from(headerButtons, {
            opacity: 0,
            y: -12,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.25,
            clearProps: "transform,opacity",
          });
        }

        let prevY = 0;
        ScrollTrigger.create({
          onUpdate() {
            const curY = window.scrollY;
            const goingDown = curY > prevY && curY > 100;
            gsap.to(navbar, {
              y: goingDown ? -(navbar.offsetHeight + 4) : 0,
              duration: 0.35,
              ease: goingDown ? "power2.in" : "power3.out",
              overwrite: "auto",
            });
            prevY = curY;
          },
        });
      }

      // ─────────────────────────────────────────────────
      // 2. HERO (excluding header buttons now)
      // ─────────────────────────────────────────────────
      const hero = document.querySelector<HTMLElement>(
        "main section:first-of-type, #hero, [data-section='hero']"
      );

      if (hero) {
        const els = Array.from(
          hero.querySelectorAll<HTMLElement>("h1, h2, p, img, video")
        );

        if (els.length) {
          gsap.set(els, { opacity: 0, y: 45 });

          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
            delay: 0.4,
            clearProps: "transform,opacity",
          });
        }
      }

      // ─────────────────────────────────────────────────
      // 3. SECTION WRAPPERS
      // ─────────────────────────────────────────────────
      const sections = gsap.utils.toArray<HTMLElement>("main section");

      sections.forEach((section, i) => {
        if (i === 0) return;

        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          ...st(section, "top 86%"),
        });
      });

      // ─────────────────────────────────────────────────
      // 4. HEADINGS
      // ─────────────────────────────────────────────────
      gsap.utils
        .toArray<HTMLElement>("main section h2, main section h3")
        .forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
            ...st(el, "top 91%"),
          });
        });

      // ─────────────────────────────────────────────────
      // 5. PARAGRAPHS
      // ─────────────────────────────────────────────────
      gsap.utils
        .toArray<HTMLElement>("main section p")
        .forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 22,
            duration: 0.75,
            ease: "power2.out",
            ...st(el, "top 93%"),
          });
        });

      // ─────────────────────────────────────────────────
      // 6. CARDS
      // ─────────────────────────────────────────────────
      const CARD_SELECTORS = [
        "main article",
        "main li",
        "main [class*='card']",
        "main [class*='item']",
        "main [class*='project']",
        "main [class*='service']",
        "main [class*='skill']",
        "main [class*='testimonial']",
        "main [class*='step']",
        "main [class*='faq']",
        "main [class*='feature']",
        "main [class*='why']",
        "main [class*='reason']",
        "main [class*='process']",
      ].join(", ");

      const allMatches = gsap.utils.toArray<HTMLElement>(CARD_SELECTORS);

      const cards = allMatches.filter(
        (el) => !allMatches.some((other) => other !== el && other.contains(el))
      );

      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 45 });

        ScrollTrigger.batch(cards, {
          start: "top 91%",
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }),
        });

        cards.forEach((card) => {
          card.addEventListener("mouseenter", () =>
            gsap.to(card, { y: -6, duration: 0.25, ease: "power2.out" })
          );
          card.addEventListener("mouseleave", () =>
            gsap.to(card, { y: 0, duration: 0.4, ease: "power3.out" })
          );
        });
      }

      // ─────────────────────────────────────────────────
      // 7. FOOTER
      // ─────────────────────────────────────────────────
      const footer = document.querySelector<HTMLElement>("footer");
      if (footer) {
        gsap.from(footer, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          ...st(footer, "top 96%"),
        });
      }

      setTimeout(() => ScrollTrigger.refresh(), 500);

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Services />
        <Testimonials />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;