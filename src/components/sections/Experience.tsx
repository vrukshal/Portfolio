
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
      title: "Software Engineer Co-op",
      company: "Fortune Panel Systems",
      duration: "January 2022 - December 2022",
      description: [
        "Developed a full-stack IoT-based data streaming system using WebSocket and Java, securely transmitting machine data from 1000+ construction machines to a PostgreSQL database on AWS.",
        "Contributed to the full SDLC, designing scalable API services using Spring Boot, Maven, and MVC architecture.",
        "Built a dynamic front-end dashboard using TypeScript and Angular, automating report generation and saving 20+ hours per month.",
        "Containerized the system with Docker and deployed on AWS EC2, utilizing Amazon RDS and CloudWatch for system performance monitoring."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Solution Analysts",
      duration: "May 2022 - August 2022",
      description: [
        "Developed 40+ RESTful APIs using FastAPI and Python, supporting a WhatsApp marketing system for 1 million customers.",
        "Integrated Meta Business APIs into an MVC application, improving WhatsApp message delivery speed by 40%.",
        "Implemented event-driven architecture using AWS Lambda and EventBridge for faster message processing, reducing latency by 25ms.",
        "Optimized SQL queries, redesigning the database schema to improve performance, cutting query time by 40%."
      ]
    },
    {
      title: "Technical Assistant",
      company: "Arizona State University",
      duration: "Dec 2023 - Present",
      description: [
        "Provided deskside support for 200+ VIP staff across 20+ departments, in both in-person and virtual roles, including on-call support.",
        "Managed IT service requests and incidents using ServiceNow, Workday, and Salesforce, ensuring end-to-end troubleshooting, compliance, and problem resolution.",
        "Led a team of 4 student workers to handle computer imaging and deployment for new users on Windows and Mac, while optimizing asset management for 1,000+ devices to improve resource tracking.",
        "Developed systemized training materials and documentation, streamlining onboarding and research processes to enhance efficiency."
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
