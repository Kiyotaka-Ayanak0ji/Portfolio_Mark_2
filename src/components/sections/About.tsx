import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { P_DATA } from '../../data/portfolio';
import { GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading title="About Me" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {P_DATA.personal.summary}
          </p>
          <div className="flex items-center gap-2 text-foreground/60">
            <MapPin size={18} className="text-primary" />
            <span>{P_DATA.personal.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-card border border-border p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          
          <div className="space-y-6">
            {P_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative pl-4 border-l-2 border-border">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <h4 className="font-bold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-foreground/70 mt-1">{edu.institution}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-primary font-medium">
                  <span>{edu.duration}</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;