import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", description: "Understanding your goals, target audience, and project requirements." },
  { icon: Palette, title: "Design", description: "Wireframing and prototyping the optimal user experience." },
  { icon: Code, title: "Develop", description: "Building with clean code, responsive design, and smooth animations." },
  { icon: Rocket, title: "Deploy", description: "Testing, optimizing, and launching your project to the world." },
];

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Process</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          How I <span className="gradient-text">Work</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="glass-panel-hover p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <step.icon size={24} className="text-primary" />
              </div>
              <div className="font-mono text-xs text-primary/60">0{i + 1}</div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
