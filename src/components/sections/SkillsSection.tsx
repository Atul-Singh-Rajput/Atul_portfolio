"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Core Languages": "#7c6af7",
  "GenAI & LLMs": "#06b6d4",
  "AI APIs & Models": "#f59e0b",
  "NLP & ML": "#10b981",
  "Vector Databases": "#ec4899",
  "Backend & APIs": "#f97316",
  "Cloud & DevOps": "#3b82f6",
  Visualization: "#8b5cf6",
};

const categoryIcons: Record<string, string> = {
  "Core Languages": "💻",
  "GenAI & LLMs": "🤖",
  "AI APIs & Models": "🧠",
  "NLP & ML": "📊",
  "Vector Databases": "🗄️",
  "Backend & APIs": "⚙️",
  "Cloud & DevOps": "☁️",
  Visualization: "📈",
};

function SkillCategory({
  category,
  items,
  color,
  index,
}: {
  category: string;
  items: string[];
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      ref={ref}
      className="glass rounded-3xl p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      style={{ border: `1px solid ${color}22` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          {categoryIcons[category]}
        </div>
        <div>
          <h3 className="font-semibold text-sm text-white/90">{category}</h3>
          <p className="text-xs" style={{ color: "rgba(245,245,245,0.35)" }}>
            {items.length} technologies
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="h-px mb-5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
          style={{ originX: 0, background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            className="skill-pill px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
            style={{
              background:
                hoveredSkill === skill
                  ? `${color}20`
                  : "rgba(255,255,255,0.05)",
              border: `1px solid ${hoveredSkill === skill ? color + "40" : "rgba(255,255,255,0.08)"}`,
              color:
                hoveredSkill === skill ? color : "rgba(245,245,245,0.65)",
              transition: "all 0.2s ease",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + 0.2 + i * 0.03 }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section">
      <div className="container-main">
        <SectionHeader
          eyebrow="Technical Skills"
          title="The AI tech stack I master"
          description="From LLMs to vector databases — these are the tools I use to build production AI systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories.map(([category, items], index) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              color={categoryColors[category] || "#7c6af7"}
              index={index}
            />
          ))}
        </div>

        {/* Marquee tech bar */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-center"
            style={{ color: "rgba(245,245,245,0.25)" }}
          >
            Core Technologies
          </div>
          <div className="relative flex overflow-hidden gap-0">
            <motion.div
              className="flex gap-8 items-center flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[
                "Python",
                "LangChain",
                "GPT-4o",
                "RAG",
                "FastAPI",
                "Docker",
                "Azure",
                "HuggingFace",
                "ChromaDB",
                "FAISS",
                "LlamaIndex",
                "LangGraph",
                "Python",
                "LangChain",
                "GPT-4o",
                "RAG",
                "FastAPI",
                "Docker",
                "Azure",
                "HuggingFace",
                "ChromaDB",
                "FAISS",
                "LlamaIndex",
                "LangGraph",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="text-sm font-medium px-5 py-2 rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(245,245,245,0.45)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
