import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript ES6+", level: 95 },
      { name: "HTML5 / JSX / TSX", level: 98 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux / Redux Toolkit", level: 85 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "GSAP / Framer Motion", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "RESTful APIs / Axios", level: 90 },
      { name: "Figma to Code", level: 88 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "AI Tools (ChatGPT, Cursor)", level: 88 },
      { name: "SEO / Accessibility", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(bar, { width: "0%" }, { width: `${level}%`, duration: 1.2, ease: "power3.out" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-panel p-6 space-y-5">
              <h3 className="text-lg font-semibold text-primary font-mono">{category.title}</h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
