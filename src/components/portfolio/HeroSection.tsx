import profileImg from "@/assets/profile-placeholder.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-primary/3 blur-2xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              👋 Welcome to my portfolio
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I'm <span className="gradient-text">Amal Sankar K R</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["Computer Science Student", "Prompt Engineer", "AI & Data Analytics Learner"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Exploring AI, building tools, and turning ideas into intelligent solutions.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I am a Computer Science and Engineering student passionate about AI, programming, and building intelligent tools that make learning more accessible.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(220, 90%, 56%, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-semibold shadow-lg glow-shadow"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-4 gradient-bg rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-card card-shadow group-hover:card-shadow-hover transition-shadow duration-500">
                <img src={profileImg} alt="Amal Sankar K R" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
