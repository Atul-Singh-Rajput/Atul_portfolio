"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    // Simulate progressive loading
    const intervals = [
      setTimeout(() => setProgress(25), 200),
      setTimeout(() => setProgress(55), 500),
      setTimeout(() => setProgress(80), 900),
      setTimeout(() => setProgress(100), 1400),
      setTimeout(() => setPhase("reveal"), 1700),
      setTimeout(() => onComplete(), 2500),
    ];
    return () => intervals.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#080808" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,106,247,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex items-center justify-center w-20 h-20 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,106,247,0.2), rgba(6,182,212,0.1))",
            border: "1px solid rgba(124,106,247,0.3)",
            backdropFilter: "blur(20px)",
          }}
        >
          <span
            className="font-bold text-3xl"
            style={{
              background:
                "linear-gradient(135deg, #7c6af7 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AS
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <div
            className="text-xl font-semibold tracking-wider uppercase"
            style={{ letterSpacing: "0.3em", color: "rgba(245,245,245,0.5)" }}
          >
            Atul Singh
          </div>
          <div
            className="text-xs mt-1"
            style={{ color: "rgba(245,245,245,0.25)", letterSpacing: "0.2em" }}
          >
            AI / GenAI Engineer
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 flex flex-col gap-3">
          <div
            className="h-px w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #7c6af7, #06b6d4)",
                originX: 0,
              }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="text-right text-xs font-mono"
            style={{ color: "rgba(245,245,245,0.3)" }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Reveal curtains */}
        {phase === "reveal" && (
          <>
            <motion.div
              className="fixed inset-0 origin-top"
              style={{ background: "#080808", zIndex: 1 }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}
