import SectionWrapper from "./SectionWrapper";
import { Lightbulb, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  { title: "IEDC Co-Lead", org: "IEDC SNMIMT", period: "2025 – Present", icon: Lightbulb },
  { title: "First Year Student Coordinator", org: "TinkerHub SNMIMT", period: "2025 – Present", icon: Lightbulb },
  { title: "NSS Volunteer Leader", org: "SNMHSS Moothakunnam", period: "2022 – 2024", icon: Heart },
  { title: "Student Police Cadet", org: "GHSS Pullut", period: "", icon: ShieldCheck },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience & Leadership">
    <motion.div
      className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {experiences.map((exp, i) => {
        const Icon = exp.icon;
        return (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -6, boxShadow: "0 8px 30px hsl(220 20% 10% / 0.08)" }}
            className="bg-card rounded-xl p-6 card-shadow group cursor-default"
          >
            <Icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-lg">{exp.title}</h3>
            <p className="text-muted-foreground text-sm">{exp.org}</p>
            {exp.period && <p className="text-primary text-xs font-medium mt-2">{exp.period}</p>}
          </motion.div>
        );
      })}
    </motion.div>
  </SectionWrapper>
);

export default ExperienceSection;
