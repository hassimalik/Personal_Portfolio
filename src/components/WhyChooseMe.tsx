import { Shield, Zap, HeartHandshake, Clock } from "lucide-react";

const reasons = [
  { icon: Zap, title: "High Performance", description: "Optimized code ensuring fast load times and smooth interactions." },
  { icon: Shield, title: "Quality Guarantee", description: "100% satisfaction or revisions until you're happy with the result." },
  { icon: Clock, title: "On-Time Delivery", description: "Reliable timelines with clear communication at every milestone." },
  { icon: HeartHandshake, title: "Client-First Approach", description: "Your vision is my priority. Transparent, collaborative process." },
];

const WhyChooseMe = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Why Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="gradient-text">Choose Me</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          I don't just write code — I build digital experiences that convert visitors into clients.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="glass-panel-hover p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <r.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-panel p-8 text-center glow-border">
          <p className="text-lg font-semibold mb-2">🛡️ Trust Guarantee</p>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            I stand behind every line of code. If the final deliverable doesn't match the agreed scope,
            I'll revise it at no extra cost until it does. Your investment is protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
