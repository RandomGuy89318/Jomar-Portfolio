import { motion } from "framer-motion";
import { Mail, Github, Send, Download } from "lucide-react";

const ContactSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6" data-testid="contact-title">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="contact-description">
            I'm always interested in discussing new opportunities, 
            collaborating on projects, or sharing knowledge about back-end development.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.a 
              href="mailto:jomar.abaten@gmail.com" 
              className="contact-btn bg-card border border-border hover:border-primary group p-8 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="contact-email"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">jomar.abaten@gmail.com</p>
            </motion.a>

            <motion.a 
              href="https://github.com/randomGuy89318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn bg-card border border-border hover:border-primary group p-8 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="contact-github"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">@randomGuy89318</p>
            </motion.a>
          </div>

          <motion.div 
            className="mt-12 p-8 bg-card border border-border rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            data-testid="contact-cta"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need help with server setup, database optimization, 
              or building scalable back-end systems, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:jomar.abaten@gmail.com" 
                className="contact-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center"
                data-testid="button-send-message"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </a>
              <button 
                onClick={() => scrollToSection('certificates')} 
                className="contact-btn border border-border hover:bg-muted text-foreground px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-5 w-5" />
                View Certificates
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
