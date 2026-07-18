"use client";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);

    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  } catch (err) {
    console.error(err);
    alert("Failed to send message");
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "#7c6af7",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "#06b6d4",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
      color: "#10b981",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Atul-Singh-Rajput",
      href: personal.github,
      color: "#f5f5f5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "atul-singh-rajput",
      href: personal.linkedin,
      color: "#0077b5",
    },
  ];

  const inputClass =
    "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-300";

  const inputStyle = (name: string): React.CSSProperties => ({
    background:
      focused === name
        ? "rgba(124,106,247,0.08)"
        : "rgba(255,255,255,0.04)",
    border: `1px solid ${
      focused === name
        ? "rgba(124,106,247,0.4)"
        : "rgba(255,255,255,0.08)"
    }`,
    color: "#f5f5f5",
  });

  return (
    <section id="contact" className="section">
      <div className="container-main" ref={ref}>
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full-time opportunities, freelance AI projects, and interesting collaborations."
          centered
        />

        {/* Availability banner */}
        <motion.div
          className="glass rounded-2xl p-5 mb-12 flex items-center justify-between gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span className="font-medium text-sm text-white/80">
              Available for new opportunities
            </span>
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(245,245,245,0.45)" }}
          >
            Response time: Within 24 hours
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left: Contact info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Get in touch</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,245,245,0.55)" }}
              >
                Whether you have a project in mind, want to discuss AI
                opportunities, or just want to say hello — I'm always happy to
                hear from you.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl glass cursor-none transition-all duration-200"
                      style={{
                        color: "rgba(245,245,245,0.65)",
                      }}
                      data-cursor-hover
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${color}15`,
                          border: `1px solid ${color}25`,
                        }}
                      >
                        <Icon size={17} style={{ color }} />
                      </div>
                      <div>
                        <div
                          className="text-xs mb-0.5"
                          style={{ color: "rgba(245,245,245,0.35)" }}
                        >
                          {label}
                        </div>
                        <div className="text-sm font-medium text-white/80">
                          {value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl glass"
                      style={{ color: "rgba(245,245,245,0.65)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${color}15`,
                          border: `1px solid ${color}25`,
                        }}
                      >
                        <Icon size={17} style={{ color }} />
                      </div>
                      <div>
                        <div
                          className="text-xs mb-0.5"
                          style={{ color: "rgba(245,245,245,0.35)" }}
                        >
                          {label}
                        </div>
                        <div className="text-sm font-medium text-white/80">
                          {value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-heavy rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs mb-2 font-medium"
                      style={{ color: "rgba(245,245,245,0.45)" }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Atul singh"
                      className={inputClass}
                      style={inputStyle("name")}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs mb-2 font-medium"
                      style={{ color: "rgba(245,245,245,0.45)" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="atul@example.com"
                      className={inputClass}
                      style={inputStyle("email")}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs mb-2 font-medium"
                    style={{ color: "rgba(245,245,245,0.45)" }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="AI Project Collaboration"
                    className={inputClass}
                    style={inputStyle("subject")}
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs mb-2 font-medium"
                    style={{ color: "rgba(245,245,245,0.45)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className={inputClass}
                    style={{ ...inputStyle("message"), resize: "none" }}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 cursor-none"
                  style={{
                    background: submitted
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "linear-gradient(135deg, #7c6af7, #06b6d4)",
                    color: "#fff",
                  }}
                  whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  data-cursor-hover
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </div>
    </section>
  );
}
