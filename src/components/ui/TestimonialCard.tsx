import React from "react";
import { Star } from "lucide-react";
import Card from "./Card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={className} glow>
      {rating > 0 && (
        <div className="flex gap-1 mb-6" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-gold text-gold" : "text-zinc-700"
              }`}
            />
          ))}
        </div>
      )}
      <p className="font-subheading italic text-lg md:text-xl text-white mb-8 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <div className="h-[1px] bg-goldMuted w-full mb-4" />
        <h4 className="font-body font-semibold text-xs uppercase tracking-widest text-gold">
          {author}
        </h4>
        <p className="font-body text-xs text-muted mt-1">{role}</p>
      </div>
    </Card>
  );
}
