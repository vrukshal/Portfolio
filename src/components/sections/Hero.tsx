
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-8 px-4 bg-gradient-to-b from-background to-secondary/30 dark:from-navy dark:to-navy-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.p 
              className="text-accent font-mono mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, my name is
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-primary dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              John Doe
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-6 text-primary/70 dark:text-slate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building high-performance systems, 
              <span className="text-accent"> one line at a time.</span>
            </motion.h2>
            
            <motion.p
              className="text-primary/80 dark:text-slate-light text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I'm a Master's student in Computer Science specializing in scalable systems, 
              cloud architecture, and full-stack development.
            </motion.p>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-accent text-navy font-medium rounded-md hover:bg-accent/90 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-accent text-accent hover:bg-accent/10 transition-colors rounded-md"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent/40 flex items-center justify-center text-white text-lg">
                  Your Photo
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 -m-3 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-primary/60 dark:text-slate-light text-sm mb-2">Scroll Down</p>
          <ArrowDownIcon className="h-5 w-5 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
