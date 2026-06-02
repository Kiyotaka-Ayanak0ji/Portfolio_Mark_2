import { Github, Linkedin, Mail } from 'lucide-react';
import { P_DATA } from '../../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} {P_DATA.personal.name}. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href={P_DATA.personal.github} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={P_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${P_DATA.personal.email}`} className="text-foreground/60 hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;