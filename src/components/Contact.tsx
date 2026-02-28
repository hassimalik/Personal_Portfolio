import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });
      if (error) throw error;
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "hassaanaslam0321@gmail.com", href: "mailto:hassaanaslam0321@gmail.com" },
                { icon: Phone, label: "+923246288562", href: "https://wa.me/923246288562" },
                { icon: MapPin, label: "Lahore, Punjab, Pakistan", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/923246288562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(175_80%_50%/0.4)] transition-all duration-300"
            >
              <Phone size={18} />
              WhatsApp Me
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.4)] transition-all duration-300 disabled:opacity-50"
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
