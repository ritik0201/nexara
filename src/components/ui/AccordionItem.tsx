"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const [localOpen, setLocalOpen] = useState(false);
  
  const isCurrentlyOpen = onToggle ? isOpen : localOpen;
  const toggle = onToggle ? onToggle : () => setLocalOpen(!localOpen);

  return (
    <div className="bg-surface border-b border-goldMuted transition-colors duration-300">
      <button
        className="w-full flex justify-between items-center py-6 md:py-8 px-6 md:px-10 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        onClick={toggle}
      >
        <span className="font-body font-medium text-base md:text-[18px] text-white hover:text-gold transition-colors duration-300">
          {question}
        </span>
        <motion.span
          className="text-gold shrink-0 ml-4"
          animate={shouldReduceMotion ? {} : { rotate: isCurrentlyOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isCurrentlyOpen && (
          <motion.div
            initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-6 md:pb-8 text-muted font-body leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
