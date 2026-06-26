"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className, glow = true }: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "bg-surface border border-gold/15 rounded-[24px] p-8 md:p-10 transition-all duration-300",
        glow && "hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.12)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
