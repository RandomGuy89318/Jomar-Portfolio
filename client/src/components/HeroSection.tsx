import { motion } from "framer-motion";
import { FileCheck, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="hero-name"
          >
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Jomar N. Abaten
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            Back-End Developer
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-description"
          >
            Passionate about building robust server-side applications and database systems. 
            Experienced in modern back-end technologies with a focus on scalable solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection('certificates')} 
              className="contact-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center"
              data-testid="button-view-certificates"
            >
              <FileCheck className="mr-2 h-5 w-5" />
              View Certificates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="contact-btn border border-border hover:bg-muted text-foreground px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center"
              data-testid="button-get-in-touch"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
