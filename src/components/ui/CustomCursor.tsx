"use client";
import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });
  const isDotHovering = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleHoverStart = () => {
      isDotHovering.current = true;
      document.querySelector(".cursor-dot")?.classList.add("hovering");
      document.querySelector(".cursor-ring")?.classList.add("hovering");
    };

    const handleHoverEnd = () => {
      isDotHovering.current = false;
      document.querySelector(".cursor-dot")?.classList.remove("hovering");
      document.querySelector(".cursor-ring")?.classList.remove("hovering");
    };

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );

    window.addEventListener("mousemove", moveCursor, { passive: true });
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
      />
      <motion.div
        className="cursor-ring"
        style={{ left: ringX, top: ringY }}
      />
    </>
  );
}
