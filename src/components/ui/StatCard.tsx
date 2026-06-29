"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
  glow?: boolean;
}

export default function StatCard({
  number,
  label,
  className,
  glow = true,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8 w-full h-full rounded-xl text-center shadow-2xl relative overflow-hidden transition-all duration-300 flex flex-col justify-center",
        glow && "hover:border-gold/50 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.18)]",
        className
      )}
    >
      <div className="font-display font-bold text-3xl md:text-4xl gold-gradient-text tracking-tight">
        {number}
      </div>
      <div className="font-body font-light text-[10px] md:text-xs text-muted uppercase tracking-[0.15em] mt-2">
        {label}
      </div>
    </div>
  );
}
