import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, TypeScript, Tailwind CSS, GSAP, and modern frontend tools. I build responsive, high-performance web applications optimized for SEO and accessibility.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by complexity. A single-page site takes 1-2 weeks, multi-page sites 2-4 weeks, and complex web apps 4-8 weeks. I provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! I offer maintenance packages for bug fixes, performance updates, and feature additions. This ensures your site stays fast, secure, and up-to-date.",
  },
  {
    question: "Can you convert Figma designs to code?",
    answer: "Absolutely. Figma-to-code conversion is one of my core strengths. I ensure pixel-perfect accuracy, responsive behavior, and clean, maintainable code.",
  },
  {
    question: "What is your revision policy?",
    answer: "Each package includes a set number of revision rounds. Additional revisions can be arranged at a fair hourly rate. I work closely with you to minimize back-and-forth.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I regularly work with clients worldwide. I'm flexible with time zones and communicate primarily in English. Remote collaboration is seamless through tools like Slack, Zoom, and GitHub.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-panel px-6 border-border/50"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
