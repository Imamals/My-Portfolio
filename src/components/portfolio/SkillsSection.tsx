import SectionWrapper from "./SectionWrapper";
import { Code2, Brain, Palette, Terminal, FileCode, Lightbulb, MessageSquare, Clock, Users, Zap, Target, Layers } from "lucide-react";

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

const SkillCard = ({ name, icon: Icon }: { name: string; icon: typeof Code2 }) => (
  <div className="flex flex-col items-center gap-3 p-5 bg-card rounded-xl card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:gradient-bg transition-colors duration-300">
      <Icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
    </div>
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" gradient>
    <div className="max-w-5xl mx-auto space-y-12">
      <div>
        <h3 className="font-display font-semibold text-lg mb-5 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {technical.map((s) => <SkillCard key={s.name} {...s} />)}
        </div>
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg mb-5 text-center">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {soft.map((s) => <SkillCard key={s.name} {...s} />)}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
