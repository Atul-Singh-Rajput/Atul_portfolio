"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";
import { Building2, Calendar, CheckCircle } from "lucide-react";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  const isLatest = index === 0;

  return (
    <motion.div
      ref={ref}
      className="relative pl-12"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full flex-shrink-0 z-10"
          style={{
            background: isLatest
              ? "linear-gradient(135deg, #7c6af7, #06b6d4)"
              : "rgba(255,255,255,0.2)",
            border: isLatest
              ? "none"
              : "1px solid rgba(255,255,255,0.15)",
            boxShadow: isLatest
              ? "0 0 20px rgba(124,106,247,0.5)"
              : "none",
          }}
          animate={
            isLatest ? { scale: [1, 1.2, 1] } : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />
        {index < experience.length - 1 && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(124,106,247,0.4) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="glass rounded-3xl p-8 mb-6"
        style={{
          border: isLatest
            ? "1px solid rgba(124,106,247,0.2)"
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {isLatest && (
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#22c55e",
                    border: "1px solid rgba(34,197,94,0.25)",
                  }}
                >
                  Current
                </span>
              )}
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(124,106,247,0.1)",
                  color: "#a78bfa",
                  border: "1px solid rgba(124,106,247,0.2)",
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3 className="text-xl font-bold">{exp.role}</h3>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <Building2 size={14} style={{ color: "rgba(245,245,245,0.4)" }} />
              <span className="font-medium text-sm">{exp.company}</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Calendar size={12} style={{ color: "rgba(245,245,245,0.3)" }} />
              <span
                className="text-xs"
                style={{ color: "rgba(245,245,245,0.45)" }}
              >
                {exp.period}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Highlights */}
        <ul className="space-y-3">
          {exp.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              className="flex gap-3"
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2 + i * 0.05 }}
            >
              <CheckCircle
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: isLatest ? "#7c6af7" : "rgba(245,245,245,0.3)" }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,245,245,0.65)" }}
              >
                {highlight}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Experience"
              title="Where I've worked"
              description="Building AI solutions in enterprise environments with real-world impact."
            />

            {/* Company logo area */}
            <motion.div
              className="glass rounded-3xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,106,247,0.2), rgba(6,182,212,0.1))",
                    border: "1px solid rgba(124,106,247,0.3)",
                    color: "#7c6af7",
                  }}
                >
                  LTI
                </div>
                <div>
                  <div className="font-semibold">LTIMindtree</div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(245,245,245,0.45)" }}
                  >
                    Software Engineer · AI/ML
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "rgba(245,245,245,0.3)" }}
                  >
                    Noida, India
                  </div>
                </div>
              </div>

              <div
                className="mt-5 pt-5 text-sm leading-relaxed"
                style={{
                  color: "rgba(245,245,245,0.5)",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                Working on enterprise Generative AI solutions leveraging Azure
                OpenAI, LangChain, and custom RAG architectures for large
                enterprise clients.
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="flex flex-col pt-2">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
