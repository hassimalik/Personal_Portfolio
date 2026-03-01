// Projects.tsx
import { ExternalLink } from "lucide-react";
import ndqImg from "../assets/ndq.jpg";
import hashstoreImg from "../assets/img.jpg";
import studentlms from "../assets/slms.jpg";

const projects = [
  {
    title: "NDQ Web3 Blockchain",
    description:
      "A blockchain-powered Web3 platform with responsive UI, built from Figma conversion. Features modern layout, wallet integration UI, and optimized performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Web3"],
    image: ndqImg,
    liveUrl: "https://ndq-web3-blockchain-frontend-gpy3.vercel.app/",
    metrics: "Figma → Code conversion with 100% design fidelity",
  },
  {
    title: "Hash Store E-Commerce",
    description:
      "Full-featured e-commerce platform with product catalog, cart functionality, GSAP animations, and optimized checkout flow. Mobile-first responsive design.",
    tech: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    image: hashstoreImg,
    liveUrl: "https://hashstore-ecommercepp.vercel.app/",
    metrics: "Smooth animations & optimized UX for higher conversions",
  },
  {
    title: "Student LMS",
    description:
      "A structured learning management system designed to transform scattered YouTube tutorials into an organized, trackable learning journey. Users can add courses, monitor progress, manage lessons, and stay consistent with clear visual progress indicators.",
    tech: ["React", "GSAP", "Tailwind CSS", "JavaScript", "AntDesign"],
    image: studentlms,
    liveUrl: "https://student-lms-by-h-developer.vercel.app/",
    metrics: "YouTube Learning Course Tracker",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Selected projects showcasing my expertise in building performant, beautiful web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col w-full"
            >
              {/* === Image Header === */}
              <div className="relative w-full flex justify-center items-center bg-gradient-to-br from-primary/5 to-accent/5">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto max-h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* === Content === */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug mt-1">
                    {project.description}
                  </p>
                  <p className="text-xs font-mono text-primary/70 italic mt-2">
                    {project.metrics}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/70 text-secondary-foreground font-mono border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-primary hover:text-accent transition-colors font-medium"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;