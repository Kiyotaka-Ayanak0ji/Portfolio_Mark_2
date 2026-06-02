import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { P_DATA } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto bg-card/30 rounded-3xl">
      <SectionHeading 
        title="Technical Arsenal"
        subtitle="Languages, frameworks, and concepts I utilize to build secure and scalable solutions."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {P_DATA.skills.map((category, idx) => (
          <motion.div
            key={idx}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card border border-border p-6 rounded-2xl flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-primary pb-2 border-b border-border/50">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  variants={itemVariants}
                  className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;