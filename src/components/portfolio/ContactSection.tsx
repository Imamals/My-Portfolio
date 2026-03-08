import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/amalsankar" },
  { icon: Github, label: "GitHub", value: "github.com/amalsankar" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a friendly chat." gradient>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="space-y-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 card-shadow hover:card-shadow-hover transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 card-shadow space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Name</label>
            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" placeholder="Your email" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" placeholder="Your message" />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 glow-shadow">
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
