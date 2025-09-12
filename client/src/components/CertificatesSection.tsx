import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiFreecodecamp, SiGoogle, SiCss3, SiLinux } from "react-icons/si";
import { FaServer, FaNetworkWired, FaDesktop, FaTools, FaChalkboardTeacher } from "react-icons/fa";

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
      certificateId: "fcc9c62aa-97f8-4076-beb8-4076eda41006",
    },
    {
      id: "2", 
      title: "Navigating Google Workspace",
      issuer: "DICT Philippines",
      date: "October 18, 2022",
      category: "Professional Certificate",
      description: "Professional Certificate",
      icon: SiGoogle,
      certificateId: "57d5e758371f4437840dad8f2c5f1412",
    },
    {
      id: "3",
      title: "Designing Presentation Slides", 
      issuer: "DICT Philippines",
      date: "October 18, 2022",
      category: "Professional Certificate",
      description: "Professional Certificate",
      icon: FaChalkboardTeacher,
      certificateId: "e14866f818494efd8ecb4fc9706f6dd4",
    },
    {
      id: "4",
      title: "Installing and Configuring Computer Systems",
      issuer: "Technical Certification",
      date: "September 9, 2025",
      category: "System Administration",
      description: "System Administration",
      icon: FaDesktop,
      certificateId: "m0Ib0GlGZr",
    },
    {
      id: "5",
      title: "Introduction to CSS",
      issuer: "Web Development Course", 
      date: "September 9, 2025",
      category: "Frontend Development",
      description: "Frontend Development",
      icon: SiCss3,
      certificateId: "5WNDExb2kZ",
    },
    {
      id: "6",
      title: "Setting Up Computer Networks",
      issuer: "Network Administration",
      date: "September 10, 2025", 
      category: "Network Engineering",
      description: "Network Engineering",
      icon: FaNetworkWired,
      certificateId: "Lt2N5Tzz4q",
    },
    {
      id: "7",
      title: "Setting Up Computer Servers",
      issuer: "Server Administration",
      date: "September 10, 2025",
      category: "Server Management", 
      description: "Server Management",
      icon: FaServer,
      certificateId: "NQxMyTIVP1",
    },
    {
      id: "8",
      title: "Maintaining Computer Systems and Networks",
      issuer: "System Maintenance",
      date: "September 10, 2025",
      category: "System Support",
      description: "System Support", 
      icon: FaTools,
      certificateId: "VgUyfaZ2dj",
    },
  ];

  const handleViewCertificate = (certificate: typeof certificates[0]) => {
    // For the freeCodeCamp certificate, we can construct the verification URL
    if (certificate.issuer === "freeCodeCamp" && certificate.certificateId) {
      window.open(`https://freecodecamp.org/certification/fcc${certificate.certificateId}/responsive-web-design`, '_blank');
    } else {
      // For other certificates, we could implement a modal or handle differently
      console.log(`Viewing certificate: ${certificate.title}`);
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
