
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-navy-light py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary/80 dark:text-slate-light text-sm">
              &copy; {currentYear} | Designed & Built with ❤️
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/70 dark:text-slate hover:text-accent dark:hover:text-accent transition-colors"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/70 dark:text-slate hover:text-accent dark:hover:text-accent transition-colors"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
            <a 
              href="mailto:email@example.com"
              className="text-primary/70 dark:text-slate hover:text-accent dark:hover:text-accent transition-colors"
            >
              <EnvelopeClosedIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
