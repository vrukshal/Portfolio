import { motion } from "framer-motion";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-tag flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <CheckCircledIcon className="h-4 w-4 mr-1 text-accent" />
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    languages: [
      "Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS", "C++", "C#", "CSS3"
    ],
    frameworks: [
      "Spring Boot", "React", "Node.js", "Express", "Next.js", "Django", "Flask", "FastAPI", "Redux"
    ],
    databases: [
      "PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Oracle", "Neo4j", "DynamoDB"
    ],
    devops: [
      "Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins", "GitHub Actions", "Azure", "GCP", "Redis"
    ],
    tools: [
      "Git", "Maven", "Gradle", "Kafka", "RabbitMQ", "Elasticsearch", "Nginx", "JUnit", "Selenium", "Version control", "Linux", "Unix", "Shell Scripting"
    ],
    bigData: [
      "Kafka", "Hadoop", "Spark"
    ]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Skills</h2>
            <div className="h-px bg-accent flex-grow ml-4 opacity-20"></div>
          </div>
        </motion.div>

        <p className="text-primary/80 dark:text-slate-light text-lg mb-12 max-w-3xl">
          I've developed expertise in a range of technologies, with a focus on backend development, 
          cloud services, and building scalable applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          <SkillCategory title="Databases & Storage" skills={skillsData.databases} />
          <SkillCategory title="DevOps & Cloud" skills={skillsData.devops} />
          <SkillCategory title="Tools & Services" skills={skillsData.tools} />
          <SkillCategory title="Big Data & Messaging" skills={skillsData.bigData} />
        </div>
        
        <motion.div 
          className="mt-16 p-6 border border-accent/20 rounded-lg bg-secondary/50 dark:bg-navy-light/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {["GraphQL", "Rust", "Machine Learning", "Terraform", "Blockchain"].map((skill, index) => (
              <span key={index} className="px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
