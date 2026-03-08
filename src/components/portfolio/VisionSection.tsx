import SectionWrapper from "./SectionWrapper";
import { Sparkles } from "lucide-react";

const VisionSection = () => (
  <SectionWrapper id="vision" title="My Vision" gradient>
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg mb-2">
        <Sparkles size={28} className="text-primary-foreground" />
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        My vision is to explore emerging technologies and build intelligent tools that make learning more accessible and effective. I believe technology can transform how people gain knowledge, solve problems, and innovate.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        As I grow as a developer, I aim to deepen my expertise in artificial intelligence, programming, and data-driven systems while contributing to meaningful projects that create real-world impact.
      </p>
    </div>
  </SectionWrapper>
);

export default VisionSection;
