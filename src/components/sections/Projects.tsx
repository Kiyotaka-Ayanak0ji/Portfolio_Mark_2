import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { P_DATA } from '../../data/portfolio';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading 
        title="Featured Projects"
        subtitle="A selection of my technical work in full-stack dev and secure systems."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {P_DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-primary/20 group-hover:bg-primary transition-colors" />
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-foreground/50 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-foreground/50 hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <ul className="space-y-2 mb-6 flex-1">
                {project.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-sm text-foreground/70 leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold px-2 py-1 bg-background border border-border rounded-md text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;