import { Heart, Mail, Phone, Github, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-primary text-sm font-bold">{"<HA />"}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          All rights reserved © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/hassimalik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hassaan-aslam-3b0798290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61588569246765"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={18} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@codingthirst"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;