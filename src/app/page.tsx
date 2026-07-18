"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/ui/Loader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLenis } from "@/hooks/useLenis";

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false);

  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Animated mesh background */}
      <MeshBackground />

      {/* Loader */}
      <AnimatePresence>
        {!loaderDone && (
          <Loader onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      {/* Main content — shown after loader */}
      {loaderDone && (
        <>
          <Navbar />
          <main className="relative" style={{ zIndex: 1 }}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <AchievementsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
