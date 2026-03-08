import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;
