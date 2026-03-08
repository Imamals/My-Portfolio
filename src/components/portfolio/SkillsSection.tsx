import SectionWrapper from "./SectionWrapper";
import { Code2, Brain, Palette, Terminal, FileCode, Lightbulb, MessageSquare, Clock, Users, Zap, Target, Layers } from "lucide-react";
import { motion } from "framer-motion";

const technical = [
  { name: "Python", icon: Terminal },
  { name: "C Programming", icon: Code2 },
  { name: "JavaScript", icon: FileCode },
  { name: "Prompt Engineering", icon: Brain },
  { name: "Canva", icon: Palette },
  { name: "Adobe", icon: Layers },
];

const soft = [
  { name: "Leadership", icon: Zap },
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Decision Making", icon: Target },
  { name: "Creative Thinking", icon: Lightbulb },
  { name: "Critical Thinking", icon: Brain },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
];

const SkillCard = ({ name, icon: Icon, index }: { name: string; icon: typeof Code2; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ y: -5, boxShadow: "0 8px 25px hsl(220 20% 10% / 0.08)" }}
    className="flex flex-col items-center gap-3 p-5 bg-card rounded-xl card-shadow group cursor-default"
  >
    <motion.div
      className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:gradient-bg transition-colors duration-300"
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
    </motion.div>
    <span className="text-sm font-medium text-center">{name}</span>
  </motion.div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" gradient>
    <div className="max-w-5xl mx-auto space-y-12">
      <div>
        <h3 className="font-display font-semibold text-lg mb-5 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {technical.map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
        </div>
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg mb-5 text-center">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {soft.map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
