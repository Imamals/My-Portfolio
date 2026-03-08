import SectionWrapper from "./SectionWrapper";
import { Brain, BarChart3, Code2, Globe, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { text: "Artificial Intelligence fundamentals", icon: Brain },
  { text: "Data Analytics concepts", icon: BarChart3 },
  { text: "Advanced Python programming", icon: Code2 },
  { text: "JavaScript and modern web development", icon: Globe },
  { text: "Prompt engineering techniques", icon: Wand2 },
];

const LearningSection = () => (
  <SectionWrapper id="learning" title="What I'm Currently Learning">
    <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 bg-card rounded-xl p-4 card-shadow hover:card-shadow-hover transition-shadow duration-300"
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={18} className="text-accent-foreground" />
            </motion.div>
            <span className="text-sm font-medium">{item.text}</span>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default LearningSection;
