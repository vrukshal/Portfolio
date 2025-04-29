
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">About Me</h2>
            <div className="h-px bg-accent flex-grow ml-4 opacity-20"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-primary/80 dark:text-slate-light mb-4 text-lg">
              Hello! I'm a Master's student in Computer Science at Arizona State University with a passion for 
              building efficient, scalable systems that solve real-world problems.
            </p>
            
            <p className="text-primary/80 dark:text-slate-light mb-4">
              My journey in tech started with a curiosity about how systems work under the hood. That curiosity 
              led me to specialize in backend development and distributed systems, where I've gained significant 
              experience working with microservices, cloud platforms, and high-performance applications.
            </p>
            
            <p className="text-primary/80 dark:text-slate-light mb-4">
              I thrive in environments that challenge me to think critically and solve complex technical problems. 
              Whether it's optimizing database queries, designing event-driven architectures, or implementing 
              efficient algorithms, I'm committed to writing clean, maintainable code that performs at scale.
            </p>

            <p className="text-primary/80 dark:text-slate-light">
              When I'm not coding, you can find me playing badminton or Valorant, or reading books or articles to continuously expanding my knowledge in the ever-evolving world.
            </p>
          </motion.div>
          
          <motion.div
            className="flex justify-center items-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full max-w-xs rounded-md overflow-hidden border-2 border-accent bg-secondary dark:bg-navy-light p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">Education</h3>
                
                <div className="mb-4">
                  <p className="font-medium text-primary dark:text-white">Arizona State University</p>
                  <p className="text-sm text-primary/70 dark:text-slate">Master's in Computer Science</p>
                  <p className="text-xs text-primary/60 dark:text-slate/80 mt-1">Aug 2023 - May 2025</p>
                </div>
                
                <div>
                  <p className="font-medium text-primary dark:text-white">Previous University</p>
                  <p className="text-sm text-primary/70 dark:text-slate">Bachelor's in Computer Science</p>
                  <p className="text-xs text-primary/60 dark:text-slate/80 mt-1">June 2019 - June 2023</p>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-accent -m-2 z-[-1] rounded-md"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
