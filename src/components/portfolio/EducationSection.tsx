import SectionWrapper from "./SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  { degree: "B.Tech Computer Science and Engineering", school: "SNM Institute of Management and Technology (SNMIMT), Maliankara", uni: "APJ Abdul Kalam Technological University", year: "2025 – 2029" },
  { degree: "Plus Two – Bio Science", school: "SNMHSS Moothakunnam", uni: "", year: "2022 – 2024" },
  { degree: "SSLC", school: "GHSS Pullut", uni: "", year: "2021 – 2022" },
];

const TimelineItem = ({ item, index }: { item: typeof education[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div ref={ref} className="relative pl-10 pb-10 last:pb-0">
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-border" />
      <motion.div
        className="absolute left-0 top-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 200 }}
      >
        <GraduationCap size={16} className="text-primary-foreground" />
      </motion.div>
      <motion.div
        className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300"
        initial={{ opacity: 0, x: -30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
      >
        <span className="text-xs font-semibold text-primary">{item.year}</span>
        <h3 className="font-display font-bold text-lg mt-1">{item.degree}</h3>
        <p className="text-muted-foreground text-sm">{item.school}</p>
        {item.uni && <p className="text-muted-foreground text-xs mt-1">{item.uni}</p>}
      </motion.div>
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
