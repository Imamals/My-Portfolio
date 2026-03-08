import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "", gradient = false }: Props) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className={`py-20 lg:py-28 ${gradient ? "gradient-subtle-bg" : ""} ${className}`}>
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
