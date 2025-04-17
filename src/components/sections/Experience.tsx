
import { motion } from "framer-motion";
import { CalendarIcon, ArrowUpIcon } from "@radix-ui/react-icons";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  index: number;
}

const ExperienceItem = ({ title, company, duration, description, index }: ExperienceItemProps) => {
  return (
    <motion.div
      className="mb-12 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-center mb-2 space-y-2 md:space-y-0">
        <h3 className="text-xl font-semibold text-primary dark:text-white">{title}</h3>
        <div className="md:ml-4 md:pl-4 md:border-l border-accent/30 text-primary/70 dark:text-slate">
          @ {company}
        </div>
      </div>
      
      <div className="flex items-center text-sm text-primary/60 dark:text-slate/80 mb-4">
        <CalendarIcon className="h-4 w-4 mr-2" />
        {duration}
      </div>
      
      <ul className="space-y-2 pl-5 list-disc text-primary/80 dark:text-slate-light">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Co-Op",
      company: "Fortune Panel Systems",
      duration: "May 2023 - Present",
      description: [
        "Developed and maintained microservices for a scalable IoT platform using Spring Boot and AWS.",
        "Implemented event-driven architecture with Kafka for real-time data processing from IoT devices.",
        "Optimized database queries and implemented caching strategies, improving API response time by 40%.",
        "Participated in full SDLC from requirement gathering to deployment and maintenance."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Solution Analysts",
      duration: "May 2022 - August 2022",
      description: [
        "Built RESTful APIs using Java Spring Boot for a healthcare management system.",
        "Developed front-end components with React and integrated them with backend services.",
        "Collaborated with the QA team to perform unit and integration testing.",
        "Implemented CI/CD pipeline using Jenkins to automate build and deployment processes."
      ]
    },
    {
      title: "Research Assistant",
      company: "Arizona State University",
      duration: "January 2022 - May 2022",
      description: [
        "Contributed to a research project focused on optimizing distributed database systems.",
        "Implemented and evaluated different caching strategies for improving query performance.",
        "Analyzed and visualized performance metrics using Python and data visualization libraries.",
        "Co-authored a research paper on efficient data distribution in cloud environments."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30 dark:bg-navy/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Experience</h2>
            <div className="h-px bg-accent flex-grow ml-4 opacity-20"></div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/20"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full border-2 border-accent bg-background dark:bg-navy"></div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <ExperienceItem {...exp} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            id="resume"
            className="inline-flex items-center px-6 py-3 bg-accent text-navy font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            <ArrowUpIcon className="h-4 w-4 mr-2" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
