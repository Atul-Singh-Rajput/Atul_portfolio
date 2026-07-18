"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/three/ParticleField").then((m) => ({
      default: m.ParticleField,
    })),
  { ssr: false }
);

const words = ["AI Engineer", "GenAI Builder", "LLM Architect", "RAG Specialist"];

function AnimatedTitle() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.1em] overflow-hidden">
      <motion.span
        key={currentWord}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 gradient-text-accent"
        style={{ display: "block" }}
      >
        {words[currentWord]}
      </motion.span>
    </div>
  );
}

function GlowOrb({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(124,106,247,0.07), transparent 40%)`,
      }}
    />
  );
}

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 100,
    damping: 30,
  });

  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX.set(e.clientX - cx);
        mouseY.set(e.clientY - cy);
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "100px" }}
    >
      {/* Three.js Particle Background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Mouse glow */}
      <GlowOrb x={mousePos.x} y={mousePos.y} />

      {/* Main Content */}
      <div className="container-main relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-100px)] py-20">
          {/* Left: Text */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "rgba(245,245,245,0.6)" }}
                >
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div>
              <div className="overflow-hidden mb-2">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-sm font-medium uppercase tracking-[0.2em]"
                  style={{ color: "rgba(245,245,245,0.4)" }}
                >
                  Hello, I'm
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="heading-display gradient-text"
                  style={{ lineHeight: "0.9", marginBottom: "0.1em" }}
                >
                  Atul
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="heading-display gradient-text"
                  style={{ lineHeight: "0.9" }}
                >
                  Singh
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="heading-lg mt-3"
              >
                <AnimatedTitle />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="body-lg max-w-lg"
              style={{ color: "rgba(245,245,245,0.55)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Building enterprise-grade Generative AI solutions with LLMs,
              RAG pipelines, and agentic AI workflows. Currently at{" "}
              <span style={{ color: "rgba(245,245,245,0.85)" }}>
                LTIMindtree
              </span>
              , crafting AI-powered applications that scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <MagneticButton
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="primary"
                size="lg"
              >
                View My Work
                <ArrowDown size={16} />
              </MagneticButton>
              <MagneticButton
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atulsinghmysore@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <Mail size={16} />
                Get In Touch
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span
                className="text-xs"
                style={{ color: "rgba(245,245,245,0.3)" }}
              >
                Connect:
              </span>
              {[
                { href: personal.github, icon: Github, label: "GitHub" },
                {
                  href: personal.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center cursor-none"
                  style={{ color: "rgba(245,245,245,0.5)" }}
                  whileHover={{
                    scale: 1.1,
                    color: "#7c6af7",
                    borderColor: "rgba(124,106,247,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  data-cursor-hover
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo with liquid glass layers */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.div
              ref={photoRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c6af7, #06b6d4, #7c6af7)",
                  padding: "2px",
                  borderRadius: "50%",
                  filter: "blur(0px)",
                  animation: "spin 8s linear infinite",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "#080808" }}
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl glass"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-2xl flex items-center justify-center text-xs font-mono"
                  style={{ color: "rgba(124,106,247,0.8)" }}>
                  AI
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-10 px-3 py-2 rounded-xl glass"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="text-xs font-medium" style={{ color: "rgba(245,245,245,0.7)" }}>
                  🎓 MCA — 9.2 CGPA
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-12 px-3 py-2 rounded-xl glass"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="text-xs font-medium" style={{ color: "rgba(245,245,245,0.7)" }}>
                  🤖 GPT-4o
                </div>
              </motion.div>

              {/* Photo container */}
              <div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(124,106,247,0.3)",
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.08),
                    0 20px 80px -20px rgba(124,106,247,0.4),
                    0 0 120px -40px rgba(6,182,212,0.2)
                  `,
                }}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
                  }}
                />

                <Image
                  src="/photo.jpg"
                  alt="Atul Singh — AI/GenAI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          data-cursor-hover
          aria-label="Scroll to about section"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "rgba(245,245,245,0.3)" }}
          >
            Scroll
          </span>
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7c6af7" }}
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
