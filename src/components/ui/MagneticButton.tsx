"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  "data-cursor-hover"?: boolean;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  size = "md",
  disabled,
  target,
  rel,
  type = "button",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.35);
      y.set((e.clientY - cy) * 0.35);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered, x, y]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-4.5 text-base",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #7c6af7 0%, #06b6d4 100%)",
      color: "#fff",
      border: "none",
    },
    secondary: {
      background: "rgba(255,255,255,0.05)",
      color: "#f5f5f5",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(12px)",
    },
    ghost: {
      background: "transparent",
      color: "rgba(245,245,245,0.7)",
      border: "1px solid rgba(255,255,255,0.08)",
    },
  };

  const baseClass = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-full cursor-none select-none",
    "transition-all duration-300",
    sizeClasses[size],
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor-hover
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseClass}
          style={variantStyles[variant]}
        >
          {/* Shimmer overlay for primary */}
          {variant === "primary" && (
            <motion.span
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span
                className="absolute inset-0 shimmer"
                style={{ borderRadius: "inherit" }}
              />
            </motion.span>
          )}
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClass}
          style={variantStyles[variant]}
        >
          {variant === "primary" && (
            <motion.span
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span
                className="absolute inset-0 shimmer"
                style={{ borderRadius: "inherit" }}
              />
            </motion.span>
          )}
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        </button>
      )}
    </motion.div>
  );

  return inner;
}
