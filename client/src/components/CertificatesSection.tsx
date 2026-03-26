import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiFreecodecamp, SiGoogle, SiCss3, SiLinux } from "react-icons/si";
import { FaServer, FaNetworkWired, FaDesktop, FaTools, FaChalkboardTeacher, FaDatabase } from "react-icons/fa";

const CertificatesSection = () => {
  const certificates = [
    {
      id: "1",
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "April 25, 2024",
      category: "Developer Certification",
      description: "300 Hours • Developer Certification",
      icon: SiFreecodecamp,
      certificateUrl: "/certificates/freecodecamp certificate_1757638706886.png",
    },
    {
      id: "2", 
      title: "Navigating Google Workspace",
      issuer: "DICT Philippines",
      date: "October 18, 2022",
      category: "Professional Certificate",
      description: "Professional Certificate",
      icon: SiGoogle,
      certificateUrl: "/certificates/Department of Information and Communications Technology DICT-DLS002 Certificate _ Coursebank_1757638702396.pdf",
    },
    {
      id: "3",
      title: "Designing Presentation Slides", 
      issuer: "DICT Philippines",
      date: "October 18, 2022",
      category: "Professional Certificate",
      description: "Professional Certificate",
      icon: FaChalkboardTeacher,
      certificateUrl: "/certificates/Department of Information and Communications Technology DICT-DLS005 Certificate _ Coursebank_1757638704474.pdf",
    },
    {
      id: "4",
      title: "Installing and Configuring Computer Systems",
      issuer: "Technical Certification",
      date: "September 9, 2025",
      category: "System Administration",
      description: "System Administration",
      icon: FaDesktop,
      certificateUrl: "/certificates/Certificate_of_Completion-Installing and Configuring Computer Systems_1757638715337.pdf",
    },
    {
      id: "5",
      title: "Introduction to CSS",
      issuer: "Web Development Course", 
      date: "September 9, 2025",
      category: "Frontend Development",
      description: "Frontend Development",
      icon: SiCss3,
      certificateUrl: "/certificates/Certificate_of_Completion-Introduction to CSS_1757638718841.pdf",
    },
    {
      id: "6",
      title: "Setting Up Computer Networks",
      issuer: "Network Administration",
      date: "September 10, 2025", 
      category: "Network Engineering",
      description: "Network Engineering",
      icon: FaNetworkWired,
      certificateUrl: "/certificates/Certificate_of_Completion-Setting Up Computer Networks_1757638723891.pdf",
    },
    {
      id: "7",
      title: "Setting Up Computer Servers",
      issuer: "Server Administration",
      date: "September 10, 2025",
      category: "Server Management", 
      description: "Server Management",
      icon: FaServer,
      certificateUrl: "/certificates/Certificate_of_Completion-Setting Up Computer Servers_1757638731145.pdf",
    },
    {
      id: "8",
      title: "Maintaining Computer Systems and Networks",
      issuer: "System Maintenance",
      date: "September 10, 2025",
      category: "System Support",
      description: "System Support", 
      icon: FaTools,
      certificateUrl: "/certificates/Certificate_of_Completion-Maintaining Computer System and Networks_1757638721410.pdf",
    },
    {
      id: "9",
      title: "Database Fundamentals",
      issuer: "Certiport",
      date: "February 28, 2026",
      category: "Database Certification",
      description: "Database Certification",
      icon: FaDatabase,
      certificateUrl: "/certificates/Databases-cert.pdf",
    },
    {
      id: "10",
      title: "HTML and CSS",
      issuer: "Certiport",
      date: "February 28, 2026",
      category: "Web Development",
      description: "Web Development Certification",
      icon: SiCss3,
      certificateUrl: "/certificates/HTML and CSS-cert.pdf",
    },
  ];

  const handleViewCertificate = (certificate: typeof certificates[0]) => {
    if (certificate.certificateUrl) {
      window.open(certificate.certificateUrl, '_blank');
    }
  };

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6" data-testid="certificates-title">Professional Certificates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="certificates-description">
            My continuous learning journey in technology and development, 
            validated through industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="certificate-card bg-card border border-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`certificate-${certificate.id}`}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <certificate.icon className="text-2xl text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2" data-testid={`certificate-title-${certificate.id}`}>
                {certificate.title}
              </h3>
              
              <p className="text-muted-foreground mb-3" data-testid={`certificate-issuer-${certificate.id}`}>
                {certificate.issuer}
              </p>
              
              <p className="text-sm text-muted-foreground mb-4" data-testid={`certificate-date-${certificate.id}`}>
                {certificate.date}
              </p>
              
              <div className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mb-4">
                {certificate.description}
              </div>
              
              <button 
                onClick={() => handleViewCertificate(certificate)}
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 py-2 rounded-lg transition-all duration-300"
                data-testid={`button-view-certificate-${certificate.id}`}
              >
                <ExternalLink className="inline mr-2 h-4 w-4" />
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
