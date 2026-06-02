import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { P_DATA } from '../../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
      />
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
               <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 font-medium">Email</p>
              <a href={`mailto:${P_DATA.personal.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                {P_DATA.personal.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
               <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 font-medium">Phone</p>
              <a href={`tel:${P_DATA.personal.phone}`} className="text-lg font-semibold hover:text-primary transition-colors">
                {P_DATA.personal.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
               <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/60 font-medium">Location</p>
              <p className="text-lg font-semibold">{P_DATA.personal.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <a href={`mailto:${P_DATA.personal.email}`} className="inline-block w-full text-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;