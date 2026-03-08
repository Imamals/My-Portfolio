import SectionWrapper from "./SectionWrapper";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="bg-card rounded-2xl overflow-hidden card-shadow group"
        whileHover={{ y: -4, boxShadow: "0 12px 40px hsl(220 20% 10% / 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-48 gradient-bg flex items-center justify-center relative overflow-hidden">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot size={64} className="text-primary-foreground/80" />
          </motion.div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground text-xs font-medium">
            🚧 Currently Building
          </div>
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-bold text-xl">AI-Based Python Tutoring Website</h3>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A web platform designed to help learners understand Python programming using AI-powered explanations and tutoring assistance.
          </p>
          <div className="flex gap-2 flex-wrap">
            {["Python", "AI", "Web Development", "Education"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
