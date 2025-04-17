
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary dark:text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-primary/70 dark:text-slate mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-accent text-navy hover:bg-accent/90">
            <a href="/">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
