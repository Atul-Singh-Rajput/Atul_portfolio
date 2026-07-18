"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const isFeatured = project.featured;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`project-card relative rounded-3xl overflow-hidden ${
        isFeatured ? "md:col-span-2 xl:col-span-1" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
    >
      {/* Card background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.accent}08 0%, transparent 60%)`,
          border: `1px solid ${hovered ? project.accent + "30" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "24px",
          transition: "border-color 0.3s ease",
        }}
      />

      <div
        className="relative p-8 rounded-3xl h-full flex flex-col gap-6"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Featured badge */}
            {isFeatured && (
              <div className="tag mb-3">Featured Project</div>
            )}
            <h3 className="heading-md">{project.title}</h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center cursor-none"
                style={{ color: "rgba(245,245,245,0.5)" }}
                whileHover={{ scale: 1.1, color: project.accent }}
                data-cursor-hover
                aria-label="View on GitHub"
              >
                <Github size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center cursor-none"
                style={{ color: "rgba(245,245,245,0.5)" }}
                whileHover={{ scale: 1.1, color: project.accent }}
                data-cursor-hover
                aria-label="View live project"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className="body-lg flex-1"
          style={{ color: "rgba(245,245,245,0.6)" }}
        >
          {project.description}
        </p>

        {/* Long description on hover */}
        <motion.p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(245,245,245,0.45)" }}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.longDescription}
        </motion.p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-lg font-medium"
              style={{
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}25`,
                color: project.accent,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: hovered
              ? `inset 0 0 60px -20px ${project.accent}20, 0 0 80px -20px ${project.accent}15`
              : "none",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6"
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          style={{ color: project.accent }}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container-main">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          description="Production AI systems that solve real problems — from intelligent chatbots to multi-agent orchestration."
        />

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + featuredProjects.length}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MagneticButton
            href="https://github.com/Atul-Singh-Rajput"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            <Github size={18} />
            View All on GitHub
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
