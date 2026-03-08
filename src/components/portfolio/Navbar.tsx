import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Education", "Experience", "Skills", "Projects", "Vision", "Learning", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur-md card-shadow" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("home")} className="font-display text-xl font-bold gradient-text">
          Amal Sankar
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              {l}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* scroll progress */}
      <div className="h-0.5 bg-muted">
        <div className="h-full gradient-bg transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-slide-up">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
