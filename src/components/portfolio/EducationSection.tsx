import SectionWrapper from "./SectionWrapper";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  { degree: "B.Tech Computer Science and Engineering", school: "SNM Institute of Management and Technology (SNMIMT), Maliankara", uni: "APJ Abdul Kalam Technological University", year: "2025 – 2029", current: true },
  { degree: "Plus Two – Bio Science", school: "SNMHSS Moothakunnam", uni: "", year: "2022 – 2024", current: false },
  { degree: "SSLC", school: "GHSS Pullut", uni: "", year: "2021 – 2022", current: false },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" gradient>
    <div className="max-w-4xl mx-auto relative">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

      {education.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`relative flex items-center mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Card side */}
            <div className="flex-1 md:px-8">
              <motion.div
                className={`relative bg-card rounded-2xl p-6 card-shadow group overflow-hidden ${item.current ? "border border-primary/20" : ""}`}
                whileHover={{ y: -4, boxShadow: "0 12px 40px hsl(220 20% 10% / 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-1 h-full gradient-bg rounded-full`} />

                {item.current && (
                  <motion.span
                    className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Currently Pursuing
                  </motion.span>
                )}

                <h3 className="font-display font-bold text-lg leading-snug">{item.degree}</h3>

                <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  <span>{item.school}</span>
                </div>

                {item.uni && (
                  <p className="text-muted-foreground text-xs mt-1 pl-5">{item.uni}</p>
                )}

                <div className="flex items-center gap-1.5 mt-3 text-primary text-xs font-semibold">
                  <Calendar size={13} />
                  <span>{item.year}</span>
                </div>
              </motion.div>
            </div>

            {/* Center dot (desktop) */}
            <motion.div
              className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-bg items-center justify-center z-10 border-4 border-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 + 0.1, type: "spring", stiffness: 250 }}
            >
              <GraduationCap size={16} className="text-primary-foreground" />
            </motion.div>

            {/* Spacer for the other side */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default EducationSection;
