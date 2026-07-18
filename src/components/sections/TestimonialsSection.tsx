"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

// Placeholder testimonials — replace with real ones when available
const testimonials = [
  {
    id: 1,
    quote:
      "Atul has an exceptional ability to translate complex AI concepts into production-ready systems. His work on our RAG pipeline reduced hallucinations by 60% and significantly improved response relevance.",
    author: " Associate Data Scientist",
    company: "LTIMindtree",
    initials: "MKS",
    color: "#7c6af7",
    note: "Manu Kant Sharma ",
  },
  {
    id: 2,
    quote:
      "The multi-agent travel planner Atul built was a showcase of engineering excellence. His GenAI skills and understanding of LangGraph are truly impressive for someone at his experience level.",
    author: "Associate Data Scientist",
    company: "LTIMindtree",
    initials: "SS",
    color: "#06b6d4",
    note: "Sameer Srivastav",
  },
  {
    id: 3,
    quote:
      "Atul consistently delivers clean, well-documented code. His Codebase Q&A Bot is used internally by our team daily — it's robust, accurate, and production-grade.",
    author: "Software Engineer",
    company: "LTIMindtree",
    initials: "KSV",
    color: "#10b981",
    note: "Kishoar Hari Venkatesh",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  return (
    <section id="testimonials" className="section">
      <div className="container-main" ref={ref}>
        <SectionHeader
          eyebrow="Testimonials"
          title="What people say"
          description="Feedback from colleagues and collaborators on my work and impact."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="glass rounded-3xl p-7 flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -6 }}
              style={{ border: `1px solid ${t.color}20` }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${t.color}15`, border: `1px solid ${t.color}25` }}
              >
                <Quote size={18} style={{ color: t.color }} />
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "rgba(245,245,245,0.7)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Placeholder note */}
              <div
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(255,200,0,0.08)",
                  border: "1px solid rgba(255,200,0,0.2)",
                  color: "rgba(255,200,0,0.6)",
                }}
              >
                {t.note}
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `${t.color}25`,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "rgba(245,245,245,0.85)" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(245,245,245,0.4)" }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
