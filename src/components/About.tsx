import { MapPin, Mail, Phone, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Turning Ideas Into <span className="gradient-text">Digital Reality</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Frontend Developer with 2+ years of experience building
              high-performance, responsive web applications. With Expertise in React, Next.js,
              and modern UI frameworks, I transform complex Figma designs into pixel-perfect,
              accessible interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans JavaScript ES6+, TypeScript, Redux, RESTful APIs, GSAP animations,
              and Tailwind CSS. I'm driven by clean code, smooth UX, and delivering results that
              exceed client expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: Mail, label: "hassaanaslam.dev@gmail.com" },
                { icon: Phone, label: "+923246288562" },
                { icon: MapPin, label: "Lahore, Punjab, Pakistan" },
                { icon: Briefcase, label: "2+ Years Experience" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon size={16} className="text-primary shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-6 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Briefcase size={18} className="text-primary" /> Work Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Frontend React JS Developer</h4>
                  <p className="text-sm text-primary font-mono">Global Tech Services</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Built responsive UIs, integrated APIs, optimized performance.
                  </p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Web Developer Intern</h4>
                  <p className="text-sm text-primary font-mono">DySofTech (Remote)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Developed components, collaborated on projects, learned best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" /> Education
              </h3>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-medium">BS-IT</h4>
                <p className="text-sm text-muted-foreground">Govt. S.E College, Bahawalpur</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-medium">Web Development Diploma</h4>
                <p className="text-sm text-muted-foreground">IUB Skills & Career Dev. Society</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
