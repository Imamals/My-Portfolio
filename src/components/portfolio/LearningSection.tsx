import SectionWrapper from "./SectionWrapper";
import { BookOpen, Brain, BarChart3, Code2, Globe, Wand2 } from "lucide-react";

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
          <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-accent-foreground" />
            </div>
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default LearningSection;
