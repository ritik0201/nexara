"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3.5 rounded-[4px] font-body font-semibold text-xs uppercase tracking-widest transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-gold text-black hover:bg-white border border-transparent",
    secondary: "border border-gold text-gold hover:bg-gold/10",
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && !shouldReduceMotion && (
        <motion.span
          className="absolute top-0 bottom-0 block w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-25 pointer-events-none"
          initial={{ left: "-100%" }}
          whileHover={{ left: "150%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />
      )}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cn(baseStyles, variants[variant], className)}>
          {buttonContent}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variants[variant], className)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
