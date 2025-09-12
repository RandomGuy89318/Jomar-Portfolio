import { motion } from "framer-motion";
import { Server, Database, Network, Code } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Server, name: "Server Management", level: 83 },
    { icon: Network, name: "Network Setup", level: 83 },
    { icon: Code, name: "Web Technologies", level: 83 },
    { icon: Database, name: "System Maintenance", level: 83 },
  ];

  const expertiseAreas = [
    { icon: Server, name: "Server Management" },
    { icon: Database, name: "Database Design" },
    { icon: Network, name: "Network Systems" },
    { icon: Code, name: "Web Development" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6" data-testid="about-title">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-description">
            I'm a dedicated back-end developer with expertise in server-side programming, 
            database management, and system administration. My technical journey includes 
            certifications in web development, computer systems, and various programming technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6" data-testid="expertise-title">Technical Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={area.name}
                  className="skill-badge bg-card border border-border p-4 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`skill-${area.name.toLowerCase().replace(' ', '-')}`}
                >
                  <area.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="font-medium">{area.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6" data-testid="competencies-title">Core Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`competency-${skill.name.toLowerCase().replace(' ', '-')}`}
                >
                  <span>{skill.name}</span>
                  <div className="w-2/3 bg-border rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
