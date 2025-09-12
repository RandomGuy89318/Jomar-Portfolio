import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-accent mb-2" data-testid="footer-name">Jomar N. Abaten</h3>
          <p className="text-muted-foreground" data-testid="footer-title">Back-End Developer & System Administrator</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:jomar.abaten@gmail.com" 
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="Email"
            data-testid="footer-email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/randomGuy89318" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
            data-testid="footer-github"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/jomarabaten" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p data-testid="footer-copyright">&copy; 2024 Jomar N. Abaten. All rights reserved.</p>
          <p className="mt-2" data-testid="footer-tagline">Built with passion for technology and continuous learning.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
