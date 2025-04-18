
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
    // Show success message
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Contact</h2>
            <div className="h-px bg-accent flex-grow ml-4 opacity-20"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-primary dark:text-white mb-4">
              Let's Connect
            </h3>
            
            <p className="text-primary/80 dark:text-slate-light mb-8">
              I'm currently open to new opportunities and collaborations. Whether you have a question, 
              want to discuss a project, or just want to say hello, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary dark:bg-navy-light rounded-full mr-4">
                  <EnvelopeClosedIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-white">Email</h4>
                  <a href="mailto:vrukshalusa@gmail.com" className="text-accent hover:underline">
                  vrukshalusa@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary dark:bg-navy-light rounded-full mr-4">
                  <GitHubLogoIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-white">GitHub</h4>
                  <a href="https://github.com/vrukshal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    github.com/vrukshal
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary dark:bg-navy-light rounded-full mr-4">
                  <LinkedInLogoIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-white">LinkedIn</h4>
                  <a href="https://linkedin.com/in/vrukshal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    linkedin.com/in/vrukshal
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary dark:text-white">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  className="bg-secondary/50 dark:bg-navy-light/50 border-accent/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary dark:text-white">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  required
                  className="bg-secondary/50 dark:bg-navy-light/50 border-accent/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary dark:text-white">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..." 
                  rows={6} 
                  required
                  className="bg-secondary/50 dark:bg-navy-light/50 border-accent/20 resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full bg-accent text-navy hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
