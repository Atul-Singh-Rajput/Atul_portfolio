"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/lib/data";
import { Award, BadgeCheck } from "lucide-react";

const issuerColors: Record<string, string> = {
  Microsoft: "#00adef",
  GitHub: "#f5f5f5",
  Pluralsight: "#f15b2a",
  IBM: "#0f62fe",
  Coursera: "#0056d3",
  Udemy: "#a435f0",
};

export function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  return (
    <section id="achievements" className="section">
      <div className="container-main" ref={ref}>
        <SectionHeader
          eyebrow="Achievements"
          title="Certifications & Recognition"
          description="Validating expertise through industry-recognized certifications from leading technology organizations."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const color = issuerColors[cert.issuer] || "#7c6af7";
            return (
              <motion.div
                key={cert.title}
                className="glass rounded-3xl p-6 gradient-border"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Award size={22} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-sm leading-snug mb-2"
                      style={{ color: "rgba(245,245,245,0.9)" }}
                    >
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={13} style={{ color }} />
                      <span
                        className="text-xs font-medium"
                        style={{ color }}
                      >
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified badge */}
                <div
                  className="mt-4 pt-4 flex items-center gap-2"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      color: "#22c55e",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    ✓ Certified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 glass-heavy rounded-3xl p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="tag mb-4">Academic Excellence</div>
              <h3 className="heading-md mb-4">
                MCA in AI & Data Science · 6th University Rank
              </h3>
              <p
                className="body-lg mb-4"
                style={{ color: "rgba(245,245,245,0.55)" }}
              >
                Graduated with a{" "}
                <span className="gradient-text-accent font-bold">
                  CGPA of 9.2
                </span>{" "}
                and secured the{" "}
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                  6th University Rank
                </span>{" "}
                from Amrita Vishwa Vidyapeetham, Mysore — specializing in
                Artificial Intelligence and Data Science.
              </p>
              <p
                className="body-lg"
                style={{ color: "rgba(245,245,245,0.55)" }}
              >
                Also awarded the{" "}
                <span style={{ color: "#f59e0b", fontWeight: 600 }}>
                  🥇 Gold Medal
                </span>{" "}
                for academic excellence in B.Sc (PMCs) from SBRR Mahajana
                First Grade College, Mysore — CGPA 9.39.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,106,247,0.2) 0%, rgba(6,182,212,0.1) 100%)",
                  border: "2px solid rgba(124,106,247,0.3)",
                }}
              >
                <span className="text-4xl font-bold gradient-text-accent">
                  9.2
                </span>
                <span
                  className="text-xs mt-1"
                  style={{ color: "rgba(245,245,245,0.5)" }}
                >
                  MCA CGPA
                </span>
              </div>
              <div
                className="px-4 py-2 rounded-2xl flex items-center gap-2"
                style={{
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.3)",
                }}
              >
                <span className="text-xl">🥇</span>
                <div>
                  <div className="text-xs font-bold" style={{ color: "#f59e0b" }}>Gold Medal</div>
                  <div className="text-xs" style={{ color: "rgba(245,245,245,0.4)" }}>B.Sc · 9.39 CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
