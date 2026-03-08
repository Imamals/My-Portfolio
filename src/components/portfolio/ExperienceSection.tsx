import SectionWrapper from "./SectionWrapper";
import { Briefcase, Users, Shield, Award } from "lucide-react";

const experiences = [
  { title: "IEDC Co-Lead", org: "IEDC SNMIMT", period: "2025 – Present", icon: Briefcase },
  { title: "First Year Student Coordinator", org: "TinkerHub SNMIMT", period: "2025 – Present", icon: Users },
  { title: "NSS Volunteer Leader", org: "SNMHSS Moothakunnam", period: "2022 – 2024", icon: Award },
  { title: "Student Police Cadet", org: "GHSS Pullut", period: "", icon: Shield },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience & Leadership">
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {experiences.map((exp, i) => {
        const Icon = exp.icon;
        return (
          <div key={i} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg">{exp.title}</h3>
            <p className="text-muted-foreground text-sm">{exp.org}</p>
            {exp.period && <p className="text-primary text-xs font-medium mt-2">{exp.period}</p>}
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
