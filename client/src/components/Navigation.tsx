import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-accent" data-testid="nav-logo">
            Jomar N. Abaten
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-muted-foreground hover:text-foreground"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-muted-foreground hover:text-foreground"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('certificates')} 
              className="nav-link text-muted-foreground hover:text-foreground"
              data-testid="nav-certificates"
            >
              Certificates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-muted-foreground hover:text-foreground"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-muted-foreground hover:text-foreground text-left"
                data-testid="nav-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-muted-foreground hover:text-foreground text-left"
                data-testid="nav-mobile-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('certificates')} 
                className="text-muted-foreground hover:text-foreground text-left"
                data-testid="nav-mobile-certificates"
              >
                Certificates
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-foreground text-left"
                data-testid="nav-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
