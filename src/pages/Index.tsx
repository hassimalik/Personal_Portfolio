import { useEffect } from "react";
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
  useEffect(() => {
    // Animate each section wrapper for smooth reveal
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });

    // Animate children with class 'fade-in-child' (text/buttons)
    const children = document.querySelectorAll(".fade-in-child");
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: children,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Batch animations for grids / multiple items (Projects, Skills)
    const gridItems = document.querySelectorAll(".grid > div");
    ScrollTrigger.batch(gridItems, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        });
      },
      start: "top 90%",
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero section with particle sphere (Three.js) */}
        <Hero />

        {/* Sections */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;