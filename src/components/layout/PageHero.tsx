"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  backgroundImage: string;
  eyebrow: string;
  heading: React.ReactNode;
  subtext?: string;
  compact?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  backgroundImage,
  eyebrow,
  heading,
  subtext,
  compact = false,
  children,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const heroVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden px-6 md:px-10 lg:px-20 pt-28 pb-12 md:py-0",
        compact ? "min-h-[400px] md:h-[512px] md:min-h-[614px]" : "min-h-[100dvh] md:h-screen md:min-h-[800px]"
      )}
    >
      {/* Radial Ambient Glow behind text for beautiful readability on top of 3D active waves */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* Hero Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-4xl text-center flex flex-col items-center"
      >
        <motion.span
          variants={itemVariants}
          className="font-body font-light text-xs text-gold uppercase tracking-[0.3em] mb-4 block"
        >
          {eyebrow}
        </motion.span>
        
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-[clamp(2.25rem,5vw,4.25rem)] text-white leading-[1.1] mb-6 max-w-4xl tracking-tight"
          data-cursor-text={eyebrow ? eyebrow.toUpperCase() : "NEXARA"}
        >
          {heading}
        </motion.h1>

        {subtext && (
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-lg text-muted max-w-2xl mx-auto mb-8 leading-[1.7]"
          >
            {subtext}
          </motion.p>
        )}

        {children && <motion.div variants={itemVariants}>{children}</motion.div>}
      </motion.div>
    </section>
  );
}
