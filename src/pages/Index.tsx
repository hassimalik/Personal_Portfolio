"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ────────────────────────────────────────────────
      // 1. Classic smooth fade + rise for text / content blocks
      // ────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".gs_reveal").forEach((el) => {
        // You can also split per child if you want more control inside component
        gsap.from(el, {
          opacity: 0,
          y: 90,                    // modern distance
          scale: 0.98,              // very subtle scale-in
          duration: 1.6,
          ease: "power4.out",       // premium smooth easing
          scrollTrigger: {
            trigger: el,
            start: "top 82%",       // bit earlier than 85%
            end: "bottom 20%",      // helps with longer sections
            toggleActions: "play none none reverse",
            // markers: process.env.NODE_ENV === "development", // useful during dev
          },
        });
      });

      // ────────────────────────────────────────────────
      // 2. Batch animation for cards / grid items (very performant)
      // ────────────────────────────────────────────────
      ScrollTrigger.batch(".gs_reveal-card", {
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 70,
            scale: 0.96,
            duration: 1.4,
            stagger: {
              each: 0.18,           // smooth cascade
              from: "start",        // or "center", "random"
            },
            ease: "power4.out",
          });
        },
        // onLeaveBack helps when scrolling up (modern feel)
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 40,
            scale: 0.97,
            duration: 0.9,
            overwrite: "auto",
          });
        },
        start: "top 88%",
        once: false,                // false = reversible on scroll up
      });

      // ────────────────────────────────────────────────
      // 3. Optional: stagger children inside a container (e.g. skill icons, project cards)
      //    → put this inside the component if more specific control needed
      // ────────────────────────────────────────────────
      // Example (uncomment & adapt):
      /*
      gsap.utils.toArray(".gs_stagger-container").forEach((container) => {
        gsap.from(container.querySelectorAll(".gs_stagger-item"), {
          opacity: 0,
          y: 60,
          duration: 1.3,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
      */

      // Optional refresh on resize (sometimes needed with dynamic content)
      ScrollTrigger.refresh();

    }, containerRef.current ?? undefined); // safer context scoping

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill()); // extra safety
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <CustomCursor />

      <Navbar />

      <main>
        {/* Hero usually has its own entrance animation — leave it out of batch */}
        <Hero />

        {/* 
          Inside each component below you should wrap main content like this:
          
          <div className="gs_reveal">     ← whole section content
            <h2>...</h2>
            <p>...</p>
          </div>

          Or for grids/lists:

          <div className="grid ...">
            {items.map(item => (
              <article className="gs_reveal-card">...</article>
            ))}
          </div>
        */}

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