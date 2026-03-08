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

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {

      // ── NAVBAR — slides down on load ─────────────────────────
      const navbar = containerRef.current!.querySelector("nav, header");
      if (navbar) {
        gsap.set(navbar, { y: -60, opacity: 0 });
        gsap.to(navbar, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        });
      }

      // ── SCROLL SECTIONS (Hero is fully isolated) ─────────────
      const sections = gsap.utils.toArray<HTMLElement>(
        containerRef.current!.querySelectorAll("main > section:not(#hero)")
      );

      sections.forEach((section) => {

        // Section headings — perspective blur drop
        const headings = section.querySelectorAll("h2, h3");
        if (headings.length > 0) {
          gsap.set(headings, { opacity: 0, y: 40, filter: "blur(6px)" });
          gsap.to(headings, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 83%",
              once: true,
            },
          });
        }

        // Sub-headings h4, h5, h6
        const subHeadings = section.querySelectorAll("h4, h5, h6");
        if (subHeadings.length > 0) {
          gsap.set(subHeadings, { opacity: 0, y: 20 });
          gsap.to(subHeadings, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        }

        // Paragraphs & list items — clean fade up
        const bodyText = section.querySelectorAll("p, li");
        if (bodyText.length > 0) {
          gsap.set(bodyText, { opacity: 0, y: 22 });
          gsap.to(bodyText, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.055,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        }

        // Images — opacity + y only, zero blur/scale for GPU performance
        const images = section.querySelectorAll("img");
        if (images.length > 0) {
          gsap.set(images, { opacity: 0, y: 25 });
          gsap.to(images, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          });
        }

        // Buttons & links — snappy, zero blur/scale
        const ctas = section.querySelectorAll("button, a");
        if (ctas.length > 0) {
          gsap.set(ctas, { opacity: 0, y: 14 });
          gsap.to(ctas, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 76%",
              once: true,
            },
          });
        }

        // Cards — slight scale for depth, safe on div elements
        const cards = section.querySelectorAll(
          "[class*='card'], [class*='Card'], [class*='project'], [class*='skill'], [class*='service'], [class*='item']"
        );
        if (cards.length > 0) {
          gsap.set(cards, { opacity: 0, y: 45, scale: 0.96 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });
        }

        // SVG icons & decorative elements
        const svgs = section.querySelectorAll("svg:not([class*='icon'])");
        if (svgs.length > 0) {
          gsap.set(svgs, { opacity: 0, scale: 0.8 });
          gsap.to(svgs, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.07,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });
        }
      });

      // ── FOOTER — fade up ─────────────────────────────────────
      const footer = containerRef.current!.querySelector("footer");
      if (footer) {
        gsap.set(footer, { opacity: 0, y: 40 });
        gsap.to(footer, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            once: true,
          },
        });
      }

      ScrollTrigger.refresh();
    }, containerRef);

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