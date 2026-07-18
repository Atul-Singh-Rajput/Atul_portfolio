"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className={`mb-16 ${centered ? "text-center" : ""}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="tag">{eyebrow}</span>
        </motion.div>
      )}

      <div className="overflow-hidden mb-4">
        <motion.h2
          className="heading-lg gradient-text"
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          className="body-lg max-w-2xl"
          style={{ color: "rgba(245,245,245,0.55)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
