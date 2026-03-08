import profileImg from "@/assets/profile-photo.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const tags = [
    { label: "Computer Science Student", emoji: "🎓" },
    { label: "Prompt Engineer", emoji: "⚡" },
    { label: "AI & Data Analytics Learner", emoji: "🤖" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-16 left-[8%] w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-[8%] w-[28rem] h-[28rem] rounded-full bg-secondary/5 blur-3xl"
          animate={{ y: [0, 24, 0], x: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/2 w-56 h-56 rounded-full bg-primary/3 blur-2xl"
          animate={{ y: [0, -35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-40 h-40 rounded-full bg-secondary/4 blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-6 py-28 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium tracking-wide"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              Hi,
              <br />
              <span className="gradient-text">I'm Amal Sankar K R</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.42 + i * 0.12 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <span className="text-base grayscale opacity-70">{tag.emoji}</span>
                  {tag.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Exploring AI, building tools, and turning ideas into intelligent solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 0 30px hsl(220, 90%, 56%, 0.35)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 rounded-full gradient-bg text-primary-foreground font-semibold shadow-lg glow-shadow text-sm tracking-wide"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06, backgroundColor: "hsl(220, 90%, 56%)", color: "white" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold transition-all duration-300 text-sm tracking-wide"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 90 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-5 gradient-bg rounded-full opacity-15 blur-2xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img src={profileImg} alt="Amal Sankar K R" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
