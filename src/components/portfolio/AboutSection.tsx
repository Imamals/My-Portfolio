import SectionWrapper from "./SectionWrapper";
import profileImg from "@/assets/profile-photo.jpg";

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
      <div className="relative group mx-auto">
        <div className="absolute -inset-3 gradient-bg rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity" />
        <div className="relative overflow-hidden rounded-2xl card-shadow">
          <img src={profileImg} alt="Amal Sankar K R" className="w-full max-w-sm object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          I am a Computer Science and Engineering student at APJ Abdul Kalam Technological University (KTU). I am currently developing skills in AI development, data analytics, and prompt engineering while building strong foundations in programming.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I enjoy exploring emerging technologies, experimenting with new ideas, and turning concepts into practical solutions. As a curious technology explorer and builder, I constantly seek opportunities to learn, innovate, and contribute to impactful technology.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
