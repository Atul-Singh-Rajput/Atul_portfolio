"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal, stats, education } from "@/lib/data";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  return (
    <section id="about" className="section">
      <div className="container-main">
        <SectionHeader
          eyebrow="About Me"
          title="Turning AI research into production reality"
          description="I build enterprise-grade AI systems that bridge the gap between cutting-edge research and real-world applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" ref={ref}>
          {/* Left: Photo + Stats */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Photo with glass frame — blends with dark background */}
            <div className="relative">
              <div
                className="relative h-[420px] rounded-3xl overflow-hidden"
                style={{
                  background: "#080808",
                  border: "1px solid rgba(124,106,247,0.2)",
                  boxShadow: "0 0 60px -20px rgba(124,106,247,0.25)",
                }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Atul Singh"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Dark gradient vignette to blend white circular edges */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 55%, #080808 90%)",
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #080808 0%, transparent 100%)",
                  }}
                />
                {/* Side fades */}
                <div
                  className="absolute inset-y-0 left-0 w-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(to right, #080808 0%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(to left, #080808 0%, transparent 100%)",
                  }}
                />

                {/* Location badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-2 rounded-xl glass">
                  <MapPin size={14} style={{ color: "#7c6af7" }} />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(245,245,245,0.8)" }}
                  >
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div
                    className="text-3xl font-bold mb-1 gradient-text-accent"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(245,245,245,0.45)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Education */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            {/* Bio */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,106,247,0.15)", border: "1px solid rgba(124,106,247,0.25)" }}
                >
                  <Briefcase size={18} style={{ color: "#7c6af7" }} />
                </div>
                <h3 className="font-semibold text-lg">Professional Summary</h3>
              </div>

              <div className="space-y-4">
                <p className="body-lg" style={{ color: "rgba(245,245,245,0.65)" }}>
                  AI/GenAI Engineer with hands-on experience developing and
                  deploying Generative AI solutions using LLMs (GPT, open-source
                  models), building end-to-end RAG pipelines, prompt engineering
                  workflows, and AI-powered applications.
                </p>
                <p className="body-lg" style={{ color: "rgba(245,245,245,0.65)" }}>
                  Proficient in Python, FastAPI, LangChain, Azure OpenAI,
                  HuggingFace, and REST APIs. Strong foundation in NLP, ML
                  concepts, and agentic AI orchestration on Azure.
                </p>
                <p className="body-lg" style={{ color: "rgba(245,245,245,0.65)" }}>
                  Currently at{" "}
                  <span style={{ color: "#a78bfa" }}>LTIMindtree</span>,
                  building enterprise AI systems that help businesses leverage
                  the power of modern language models.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}
                >
                  <GraduationCap size={18} style={{ color: "#06b6d4" }} />
                </div>
                <h3 className="font-semibold text-lg">Education</h3>
              </div>

              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #7c6af7, #06b6d4)"
                            : i === 1
                            ? "linear-gradient(135deg, #f59e0b, #f97316)"
                            : "rgba(255,255,255,0.25)",
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-white/90">
                        {edu.degree}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "rgba(245,245,245,0.5)" }}
                      >
                        {edu.institution}
                      </div>
                      <div className="flex items-center flex-wrap gap-2 mt-1.5">
                        {edu.period && (
                          <span className="text-xs" style={{ color: "rgba(245,245,245,0.35)" }}>
                            {edu.period}
                          </span>
                        )}
                        <span
                          className="text-xs font-medium"
                          style={{ color: "#a78bfa" }}
                        >
                          {edu.score}
                        </span>
                        {"highlight" in edu && edu.highlight && (
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              background: edu.highlight === "Gold Medal"
                                ? "rgba(245,158,11,0.15)"
                                : "rgba(124,106,247,0.15)",
                              border: edu.highlight === "Gold Medal"
                                ? "1px solid rgba(245,158,11,0.3)"
                                : "1px solid rgba(124,106,247,0.3)",
                              color: edu.highlight === "Gold Medal" ? "#f59e0b" : "#a78bfa",
                            }}
                          >
                            {edu.highlight === "Gold Medal" ? "🥇 " : "🏆 "}{edu.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
