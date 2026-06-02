import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { P_DATA } from '../../data/portfolio';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Hello World, I am
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            {P_DATA.personal.name}
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto font-medium"
        >
          {P_DATA.personal.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-8 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:border-primary transition-colors flex items-center gap-2"
          >
            <FileText size={18} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;