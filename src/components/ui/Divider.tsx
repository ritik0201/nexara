import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  width?: "sm" | "md" | "lg" | "full";
}

export default function Divider({ className, width = "sm" }: DividerProps) {
  const widths = {
    sm: "w-20",
    md: "w-40",
    lg: "w-64",
    full: "w-full",
  };

  return (
    <div
      className={cn("h-[1px] bg-goldMuted mx-auto", widths[width], className)}
      aria-hidden="true"
    />
  );
}
