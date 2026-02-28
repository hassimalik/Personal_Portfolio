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
      
      // Animate only inner content, NOT entire sections
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 100,              // more distance
          duration: 1.4,       // smoother timing
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Batch grid/card animations
      ScrollTrigger.batch(".reveal-card", {
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 80,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
        start: "top 90%",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground"
    >
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        {/* Wrap inner content inside components with className="reveal" */}
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