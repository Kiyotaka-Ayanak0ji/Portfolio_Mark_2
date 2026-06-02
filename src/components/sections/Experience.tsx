import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { P_DATA } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeading title="Work Experience" />
      
      <div className="space-y-8">
        {P_DATA.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line for md screens and up */}
            <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-border" />
            
            <div className="md:flex gap-8 items-start relative">
              {/* Date / Marker */}
              <div className="md:w-32 flex-shrink-0 flex items-center md:justify-end gap-3 mb-4 md:mb-0">
                <span className="text-sm font-semibold text-primary">{exp.duration}</span>
                <div className="hidden md:flex absolute left-[8rem] w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />
                <Briefcase size={20} className="md:hidden text-primary" />
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-3">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start text-foreground/70 text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;