import SectionWrapper from "./SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.Tech Computer Science and Engineering", school: "SNM Institute of Management and Technology (SNMIMT), Maliankara", uni: "APJ Abdul Kalam Technological University", year: "2025 – 2029" },
  { degree: "Plus Two – Bio Science", school: "SNMHSS Moothakunnam", uni: "", year: "2022 – 2024" },
  { degree: "SSLC", school: "GHSS Pullut", uni: "", year: "2021 – 2022" },
];

const TimelineItem = ({ item, index }: { item: typeof education[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div ref={ref} className={`relative pl-10 pb-10 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: `${index * 150}ms` }}>
      {/* Line */}
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-border last:hidden" />
      {/* Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
        <GraduationCap size={16} className="text-primary-foreground" />
      </div>
      <div className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-300">
        <span className="text-xs font-semibold text-primary">{item.year}</span>
        <h3 className="font-display font-bold text-lg mt-1">{item.degree}</h3>
        <p className="text-muted-foreground text-sm">{item.school}</p>
        {item.uni && <p className="text-muted-foreground text-xs mt-1">{item.uni}</p>}
      </div>
    </div>
  );
};

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" gradient>
    <div className="max-w-2xl mx-auto">
      {education.map((item, i) => (
        <TimelineItem key={i} item={item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
