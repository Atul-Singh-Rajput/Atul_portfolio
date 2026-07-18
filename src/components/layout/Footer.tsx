"use client";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const socialLinks = [
  { href: personal.github, icon: Github, label: "GitHub" },
  { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(124,106,247,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,106,247,0.25), rgba(6,182,212,0.15))",
                  border: "1px solid rgba(124,106,247,0.3)",
                  color: "#7c6af7",
                }}
              >
                AS
              </div>
              <div>
                <div className="font-bold text-sm">Atul Singh</div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(245,245,245,0.4)" }}
                >
                  AI/GenAI Engineer
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(245,245,245,0.45)" }}
            >
              Building AI-powered systems at the frontier of Generative AI.
              Passionate about turning research into production reality.
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
              />
              <span
                className="text-xs"
                style={{ color: "rgba(245,245,245,0.4)" }}
              >
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "rgba(245,245,245,0.3)" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm cursor-none transition-colors duration-200"
                  style={{ color: "rgba(245,245,245,0.5)" }}
                  data-cursor-hover
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "rgba(245,245,245,0.3)" }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm cursor-none"
                style={{ color: "rgba(245,245,245,0.5)" }}
                data-cursor-hover
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="text-sm cursor-none"
                style={{ color: "rgba(245,245,245,0.5)" }}
                data-cursor-hover
              >
                {personal.phone}
              </a>
              <span
                className="text-sm"
                style={{ color: "rgba(245,245,245,0.35)" }}
              >
                {personal.location}
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center cursor-none"
                  style={{ color: "rgba(245,245,245,0.4)" }}
                  whileHover={{ scale: 1.1, color: "#7c6af7" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  data-cursor-hover
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(245,245,245,0.3)" }}
          >
            © {new Date().getFullYear()} Atul Singh. Crafted with{" "}
            <Heart size={11} className="inline" style={{ color: "#7c6af7" }} />
            {" "}using Next.js & Framer Motion.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center cursor-none"
            style={{ color: "rgba(245,245,245,0.4)" }}
            whileHover={{
              scale: 1.1,
              color: "#7c6af7",
              y: -2,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label="Scroll to top"
            data-cursor-hover
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
