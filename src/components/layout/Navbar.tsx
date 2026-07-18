"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((v) => setIsScrolled(v > 50));
  }, [scrollY]);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="mx-auto my-4"
          style={{ maxWidth: "1280px", padding: "0 24px" }}
        >
          <motion.nav
            className="flex items-center justify-between px-6 py-3 rounded-2xl"
            animate={{
              background: isScrolled
                ? "rgba(8,8,8,0.85)"
                : "rgba(8,8,8,0.4)",
              backdropFilter: "blur(24px)",
              borderColor: isScrolled
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.06)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-none"
              whileHover={{ scale: 1.02 }}
              data-cursor-hover
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,106,247,0.3), rgba(6,182,212,0.2))",
                  border: "1px solid rgba(124,106,247,0.4)",
                  color: "#7c6af7",
                }}
              >
                AS
              </div>
              <span
                className="font-semibold text-sm hidden sm:block"
                style={{ color: "rgba(245,245,245,0.8)" }}
              >
                Atul Singh
              </span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link px-4 py-2 rounded-xl text-sm font-medium cursor-none transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  data-cursor-hover
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <MagneticButton
                href={personal.resume}
                variant="secondary"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollTo("#contact")}
                variant="primary"
                size="sm"
              >
                Hire Me
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-cursor-hover
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-px bg-white rounded"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              />
              <motion.span
                className="block w-5 h-px bg-white rounded"
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className="block w-5 h-px bg-white rounded"
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
              />
            </button>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-x-0 top-24 z-40 md:hidden px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <div
          className="rounded-2xl p-6 flex flex-col gap-2"
          style={{
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-none"
              data-cursor-hover
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10 flex gap-3">
            <MagneticButton href={personal.resume} variant="secondary" size="sm">
              Resume
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo("#contact")} variant="primary" size="sm">
              Hire Me
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </>
  );
}
