import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { icon: Mail, label: "Email", value: "amlsankar008@gmail.com", href: "mailto:amlsankar008@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/amal-sankar", href: "https://www.linkedin.com/in/amal-sankar" },
  { icon: Github, label: "GitHub", value: "github.com/Imamals", href: "https://github.com/Imamals" },
];

const ContactSection = () => (
  <SectionWrapper id="contact" title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a friendly chat." gradient>
    <div className="max-w-xl mx-auto space-y-4">
      {contacts.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 bg-card rounded-xl p-4 card-shadow hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <span className="text-sm font-medium hover:text-primary transition-colors">{c.value}</span>
            </div>
          </motion.a>
        );
      })}
    </div>
  </SectionWrapper>
);

export default ContactSection;
