import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures",
    text: "Hassaan delivered an exceptional website that exceeded our expectations. His attention to detail and commitment to performance optimization resulted in a 40% improvement in load times.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Founder, StartupHub",
    text: "Working with Hassaan was a seamless experience. He transformed our complex Figma designs into a pixel-perfect, responsive application. Highly recommend for any frontend work.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "Product Manager, DigitalFirst",
    text: "Hassaan's expertise in React and animations brought our product vision to life. Professional communication, on-time delivery, and outstanding code quality.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary  text-sm tracking-widest uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl  font-bold mb-10">
          What <span className="gradient-text">People Say about my Work</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-panel-hover p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
