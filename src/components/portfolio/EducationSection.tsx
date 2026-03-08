import SectionWrapper from "./SectionWrapper";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  { degree: "B.Tech Computer Science and Engineering", school: "SNM Institute of Management and Technology (SNMIMT), Maliankara", uni: "APJ Abdul Kalam Technological University", year: "2025 – 2029", current: true },
  { degree: "Plus Two – Bio Science", school: "SNMHSS Moothakunnam", uni: "", year: "2022 – 2024", current: false },
  { degree: "SSLC", school: "GHSS Pullut", uni: "", year: "2021 – 2022", current: false },
];

const EducationCard = ({ item, isLeft, index }: { item: typeof education[0]; isLeft: boolean; index: number }) => (
  <motion.div
    className={`relative bg-card rounded-2xl p-6 card-shadow group overflow-hidden ${item.current ? "border border-primary/20" : ""}`}
    initial={{ opacity: 0, x: isLeft ? -80 : 80, rotate: isLeft ? -3 : 3 }}
    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 70, damping: 14 }}
    whileHover={{ y: -6, boxShadow: "0 16px 48px hsl(220 20% 10% / 0.12)" }}
  >
    {/* Side gradient bar */}
    <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-1 h-full gradient-bg rounded-full`} />

    {item.current && (
      <motion.span
        className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ● Currently Pursuing
      </motion.span>
    )}

    <h3 className="font-display font-bold text-lg leading-snug">{item.degree}</h3>
    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm">
      <MapPin size={14} className="text-primary flex-shrink-0" />
      <span>{item.school}</span>
    </div>
    {item.uni && <p className="text-muted-foreground text-xs mt-1 pl-5">{item.uni}</p>}
    <div className="flex items-center gap-1.5 mt-3 text-primary text-xs font-semibold">
      <Calendar size={13} />
      <span>{item.year}</span>
    </div>
  </motion.div>
);

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" gradient>
    <div className="max-w-5xl mx-auto relative">
      {/* Center vertical line - desktop only */}
      <motion.div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 origin-top"
        style={{ background: "linear-gradient(to bottom, hsl(220 90% 56%), hsl(260 60% 60%))" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="space-y-16 md:space-y-20">
        {education.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="relative">
              {/* Desktop zigzag */}
              <div className="hidden md:grid grid-cols-[1fr_64px_1fr] items-center">
                {/* Left column */}
                <div className={isLeft ? "" : "order-3"}>
                  {isLeft && <EducationCard item={item} isLeft={isLeft} index={i} />}
                  {!isLeft && <div />}
                </div>

                {/* Center dot */}
                <div className="flex justify-center order-2">
                  <motion.div
                    className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center z-10 border-4 border-background"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <GraduationCap size={18} className="text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Right column */}
                <div className={isLeft ? "order-3" : ""}>
                  {!isLeft && <EducationCard item={item} isLeft={isLeft} index={i} />}
                  {isLeft && <div />}
                </div>
              </div>

              {/* Mobile - stacked */}
              <div className="md:hidden flex gap-4 items-start">
                <motion.div
                  className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1 border-4 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15, type: "spring" }}
                >
                  <GraduationCap size={14} className="text-primary-foreground" />
                </motion.div>
                <div className="flex-1">
                  <EducationCard item={item} isLeft={false} index={i} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
