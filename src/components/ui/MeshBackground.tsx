"use client";
import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs: Blob[] = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        vx: 0.15,
        vy: 0.1,
        radius: 420,
        color: "124,106,247",
        opacity: 0.12,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.7,
        vx: -0.12,
        vy: 0.15,
        radius: 360,
        color: "6,182,212",
        opacity: 0.08,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        vx: 0.08,
        vy: -0.12,
        radius: 500,
        color: "167,139,250",
        opacity: 0.06,
      },
    ];

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${blob.color}, ${blob.opacity})`
        );
        gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 1 }}
    />
  );
}
