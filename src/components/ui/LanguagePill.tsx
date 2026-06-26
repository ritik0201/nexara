"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanguagePillProps {
  name: string;
  className?: string;
}

export default function LanguagePill({ name, className }: LanguagePillProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "px-6 py-3 rounded-full border border-gold/30 hover:border-gold text-white bg-surface hover:bg-gold/5 font-body text-xs md:text-sm tracking-widest uppercase cursor-default transition-all duration-300",
        className
      )}
    >
      {name}
    </motion.span>
  );
}
