import SectionWrapper from "./SectionWrapper";
import { Bot, ExternalLink } from "lucide-react";

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="max-w-3xl mx-auto">
      <div className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group">
        <div className="h-48 gradient-bg flex items-center justify-center relative overflow-hidden">
          <Bot size={64} className="text-primary-foreground/80 group-hover:scale-110 transition-transform duration-500" />
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
            {["Python", "AI", "Web Development", "Education"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
