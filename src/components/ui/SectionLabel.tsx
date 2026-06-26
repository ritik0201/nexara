import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  eyebrow: string;
  className?: string;
  hasLine?: boolean;
}

export default function SectionLabel({
  eyebrow,
  className,
  hasLine = true,
}: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-4 mb-4", className)}>
      <span className="font-body font-light text-[10px] md:text-xs text-gold uppercase tracking-[0.25em] whitespace-nowrap">
        {eyebrow}
      </span>
      {hasLine && (
        <span className="h-[1px] w-12 bg-goldMuted block" aria-hidden="true" />
      )}
    </div>
  );
}
