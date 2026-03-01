import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$200",
    description: "Perfect for small businesses needing a web presence.",
    features: [
      "Single-page responsive website",
      "Mobile-optimized design",
      "Contact form integration",
      "Basic SEO setup",
      "2 revision rounds",
      "Estimated delivery: 5-7 days"
    ],
  },
  {
    name: "Professional",
    price: "$400",
    description: "For businesses needing a polished, multi-page site.",
    features: [
      "Up to 5 pages",
      "Custom animations (GSAP)",
      "CMS integration ready",
      "Advanced SEO & performance",
      "Responsive across all devices",
      "5 revision rounds",
      "Extra Pages: $75/page",
      "Extra Revisions: $25/revision",
      "Additional GSAP animations: $50",
      "Estimated delivery: 10-14 days"
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale web applications and complex projects.",
    features: [
      "Unlimited pages & features",
      "Complex UI/UX development",
      "API integrations",
      "E-commerce / dashboards",
      "Performance optimization",
      "Ongoing support & maintenance",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Transparent pricing for quality work. Every project gets my full attention and expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass-panel-hover p-8 flex flex-col ${
                pkg.popular ? "border-primary/40 animate-pulse-glow" : ""
              }`}
            >
              {pkg.popular && (
                <span className="self-start px-3 py-1 rounded-full text-xs bg-primary/20 text-primary font-mono mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-3xl font-bold gradient-text mt-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-6">{pkg.description}</p>
              <ul className="space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(175_80%_50%/0.4)]"
                    : "border border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
