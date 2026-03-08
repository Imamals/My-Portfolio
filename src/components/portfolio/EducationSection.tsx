import SectionWrapper from "./SectionWrapper";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  { degree: "SSLC", school: "GHSS Pullut", uni: "", year: "2021 – 2022", current: false },
  { degree: "Plus Two – Bio Science", school: "SNMHSS Moothakunnam", uni: "", year: "2022 – 2024", current: false },
  { degree: "B.Tech Computer Science and Engineering", school: "SNM Institute of Management and Technology (SNMIMT), Maliankara", uni: "APJ Abdul Kalam Technological University", year: "2025 – 2029", current: true },
];

// Each step goes higher — like 📈
const stepOffsets = [160, 80, 0]; // top offset in px for the ascending effect

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" gradient>
    <div className="max-w-5xl mx-auto">
      {/* Desktop: ascending graph layout */}
      <div className="hidden md:block relative" style={{ minHeight: 380 }}>
        {/* Connecting ascending line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: 380 }}>
          <motion.path
            d={`M ${100} ${stepOffsets[0] + 60} 
                Q ${100 + (500 - 100) / 2} ${stepOffsets[0] + 60}, ${500 / 2 + 100} ${stepOffsets[1] + 60}
                Q ${(500 / 2 + 100 + 900) / 2} ${stepOffsets[1] + 60}, ${900} ${stepOffsets[2] + 60}`}
            fill="none"
            stroke="url(#graphGradient)"
            strokeWidth="3"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220, 90%, 56%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(260, 60%, 60%)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid grid-cols-3 gap-8" style={{ minHeight: 380 }}>
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              style={{ paddingTop: stepOffsets[i] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.25, type: "spring", stiffness: 80 }}
            >
              {/* Dot on the graph line */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gradient-bg border-4 border-background z-10"
                style={{ top: stepOffsets[i] - 10 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.25 + 0.3, type: "spring", stiffness: 300 }}
              />

              {/* Card */}
              <motion.div
                className={`bg-card rounded-2xl p-5 card-shadow overflow-hidden relative ${item.current ? "border border-primary/20" : ""}`}
                whileHover={{ y: -6, boxShadow: "0 16px 48px hsl(220 20% 10% / 0.12)" }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={16} className="text-primary-foreground" />
                  </div>
                  {item.current && (
                    <motion.span
                      className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>

                <h3 className="font-display font-bold text-base leading-snug">{item.degree}</h3>

                <div className="flex items-start gap-1.5 mt-2 text-muted-foreground text-xs">
                  <MapPin size={12} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{item.school}</span>
                </div>
                {item.uni && <p className="text-muted-foreground text-[11px] mt-0.5 pl-4">{item.uni}</p>}

                <div className="flex items-center gap-1.5 mt-3 text-primary text-xs font-semibold">
                  <Calendar size={12} />
                  <span>{item.year}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked with ascending bar heights */}
      <div className="md:hidden space-y-6">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="flex gap-4 items-stretch"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Rising bar */}
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-2 rounded-full gradient-bg"
                style={{ height: `${(i + 1) * 30 + 20}px` }}
              />
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 border-4 border-background">
                <GraduationCap size={12} className="text-primary-foreground" />
              </div>
            </div>

            <motion.div
              className={`flex-1 bg-card rounded-xl p-4 card-shadow ${item.current ? "border border-primary/20" : ""}`}
              whileHover={{ x: 4 }}
            >
              {item.current && (
                <motion.span
                  className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ● Current
                </motion.span>
              )}
              <h3 className="font-display font-bold text-sm">{item.degree}</h3>
              <p className="text-muted-foreground text-xs mt-1">{item.school}</p>
              <p className="text-primary text-xs font-semibold mt-2">{item.year}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
