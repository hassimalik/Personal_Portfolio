import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-primary text-sm font-bold">{"<HA />"}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart size={12} className="text-primary" /> by Hassaan Aslam © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a href="mailto:hassaanaslam0321@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://wa.me/923246288562" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
