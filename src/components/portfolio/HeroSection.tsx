import profileImg from "@/assets/profile-photo.jpg";
import { motion } from "framer-motion";

const roles = [
  { label: "Computer Science Student", emoji: "🎓" },
  { label: "Prompt Engineer", emoji: "⚡" },
  { label: "AI & Data Analytics Learner", emoji: "🤖" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating gradient shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[100px]"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-secondary/[0.06] blur-[100px]"
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-6 py-28 lg:py-36 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold tracking-wide"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display leading-[1.1]"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground">
                Hi,
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold gradient-text mt-2">
                I'm Amal Sankar K R
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {roles.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.12 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
                >
                  {tag.emoji} {tag.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Exploring AI, building tools, and turning ideas into intelligent solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(220, 90%, 56%, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="px-8 py-3.5 rounded-xl gradient-bg text-primary-foreground font-bold text-base shadow-lg glow-shadow tracking-wide"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "hsl(220, 90%, 56%)", color: "white" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-base transition-colors duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-5 gradient-bg rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-card shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={profileImg}
                  alt="Amal Sankar K R"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
