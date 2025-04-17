
import { motion } from "framer-motion";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, github, live, index }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border border-border dark:border-navy-light card-hover h-full flex flex-col bg-white/50 dark:bg-navy/50 backdrop-blur-sm">
        <div className="h-48 overflow-hidden bg-secondary dark:bg-navy-light">
          <div 
            className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <span className="text-primary/30 dark:text-white/20 text-xl font-medium">{title}</span>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl text-primary dark:text-white flex items-center justify-between">
            {title}
            <div className="flex space-x-2">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary/70 dark:text-slate hover:text-accent dark:hover:text-accent">
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="text-primary/70 dark:text-slate hover:text-accent dark:hover:text-accent">
                  <ExternalLinkIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-primary/80 dark:text-slate-light">
            {description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-2 pt-2 pb-4">
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-secondary/80 dark:bg-navy-light text-primary/80 dark:text-slate-light border-accent/20">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Secure Messaging Platform",
      description: "A microservices-based chat system with robust security features using JWT authentication, Kafka for message streaming, and WebSocket for real-time communication.",
      image: "",
      tags: ["Microservices", "Kafka", "WebSocket", "JWT", "React", "ShadCN"],
      github: "#",
      live: "#"
    },
    {
      title: "JobSuccess.AI",
      description: "A modern job platform built with Firebase for backend services, React for frontend, and Gemini API integration for intelligent resume parsing and job matching.",
      image: "",
      tags: ["Firebase", "React", "Gemini API", "AI", "Authentication"],
      github: "#",
      live: "#"
    },
    {
      title: "Itinerary Sharing Platform",
      description: "A collaborative travel itinerary planning and sharing platform built with Spring Boot microservices and React, deployed with Kubernetes for scalability.",
      image: "",
      tags: ["Spring Boot", "React", "Kubernetes", "Docker", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30 dark:bg-navy/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Projects</h2>
            <div className="h-px bg-accent flex-grow ml-4 opacity-20"></div>
          </div>
        </motion.div>

        <p className="text-primary/80 dark:text-slate-light text-lg mb-12 max-w-3xl">
          Here are some of my recent projects that showcase my skills in building scalable, 
          robust applications with modern technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-primary/70 dark:text-slate mb-4">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-accent/20 text-accent hover:bg-accent/30 transition-colors rounded-md"
          >
            <GitHubLogoIcon className="h-5 w-5 mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
