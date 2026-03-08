import profileImg from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 animate-float blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-secondary/5 animate-float-delayed blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 animate-float-slow blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              👋 Welcome to my portfolio
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hi, I'm <span className="gradient-text">Amal Sankar K R</span>
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              {["Computer Science Student", "Prompt Engineer", "AI & Data Analytics Learner"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">{tag}</span>
              ))}
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              Exploring AI, building tools, and turning ideas into intelligent solutions.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
              I am a Computer Science and Engineering student passionate about AI, programming, and building intelligent tools that make learning more accessible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "0.65s" }}>
              <button onClick={() => scrollTo("projects")} className="px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-shadow">
                View Projects
              </button>
              <button onClick={() => scrollTo("contact")} className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 gradient-bg rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-card card-shadow group-hover:card-shadow-hover transition-shadow duration-500">
                <img src={profileImg} alt="Amal Sankar K R" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
