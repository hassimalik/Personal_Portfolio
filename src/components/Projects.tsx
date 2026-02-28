import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NDQ Web3 Blockchain",
    description: "A blockchain-powered Web3 platform with responsive UI, built from Figma conversion. Features modern layout, wallet integration UI, and optimized performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Web3"],
    image: "",
    liveUrl: "#",
    metrics: "Figma → Code conversion with 100% design fidelity",
  },
  {
    title: "Hash Store E-Commerce",
    description: "Full-featured e-commerce platform with product catalog, cart functionality, GSAP animations, and optimized checkout flow. Mobile-first responsive design.",
    tech: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    image: "",
    liveUrl: "#",
    metrics: "Smooth animations & optimized UX for higher conversions",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Selected projects showcasing my expertise in building performant, beautiful web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-panel-hover group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                  {project.title.split(" ")[0]}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <p className="text-xs font-mono text-primary/70">{project.metrics}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
