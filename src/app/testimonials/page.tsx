"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { testimonials } from "@/content/testimonials";

const testimonialsHeroBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCbB7Zrb8jAeSW2e8yO519INLNnfnRdkVfocryk0sEdBVTz-L2iARVKC_fAUweLhp4w7Us1mgjxFKvRdISia7MjX-tLiCK1HXTgOfwLilIS4XNGhNe6qJQWCUZIzQGAmoLt6Xp4QAsGlem61epZvcY1RmAfgMJ6LG3Mx1-MmLzLGrBHH04_e4BzkbXIjqlLS2VpeQmD5Hjttnt-jTJqN-5dNMMxDNyrBlgggtUzRbrPLTTPGqVLabAeGlBWwZY8-kq0bvcPXoKwFt4";

export default function TestimonialsPage() {
  // Find featured diplomatic testimonial
  const featured = testimonials.find((t) => t.id === "t2") || testimonials[0];
  const gridTestimonials = testimonials.filter((t) => t.id !== "t2" && t.id !== "t1");

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHero
        backgroundImage={testimonialsHeroBg}
        eyebrow="Client Testimonials"
        heading="Trusted by Organizers of the World's Most Important Events"
        subtext="Providing flawless translations, high-fidelity interpretation, and corporate cross-cultural precision."
        compact
      />

      {/* Featured Testimonial Panel */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <FadeIn direction="up" duration={0.8}>
          <div className="relative bg-surface border border-gold/15 rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl">
            {/* Watermark Quote Symbols */}
            <div className="absolute top-4 left-6 text-gold/5 font-display text-[160px] leading-[1] pointer-events-none select-none">
              &ldquo;
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <blockquote className="font-subheading italic text-xl md:text-3xl lg:text-[42px] leading-snug text-white">
                Nexara didn&rsquo;t just provide interpretation; they orchestrated a linguistic symphony that bridged four continents and three ideologies. In the high-stakes world of diplomatic summits, their precision is the invisible foundation of our success.
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-body font-semibold text-xs md:text-sm text-gold uppercase tracking-[0.2em] mb-1">
                  {featured.author}
                </span>
                <span className="font-body text-xs text-muted italic">
                  {featured.role}
                </span>
              </div>
            </div>

            <div className="absolute bottom-[-60px] right-6 text-gold/5 font-display text-[160px] leading-[1] pointer-events-none select-none">
              &rdquo;
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Client Badges Pill Row */}
      <section className="pb-16 px-6">
        <div className="max-w-container-max-width mx-auto text-center space-y-6">
          <span className="font-body font-light text-[10px] md:text-xs text-muted uppercase tracking-[0.2em] block mb-4">
            Voices From
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Embassies",
              "Government Bodies",
              "Fortune 500 Corporates",
              "NGOs",
              "Event Agencies"
            ].map((badge) => (
              <span
                key={badge}
                className="px-6 py-2 border border-gold/30 rounded-full font-body text-xs text-white/95 tracking-wide hover:border-gold transition-colors duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Masonry-like Grid */}
      <section className="py-24 bg-[#110E07]/75 backdrop-blur-md border-y border-goldMuted px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-container-max-width mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Custom Asymmetric layout coordinates */}
            {gridTestimonials.map((t, idx) => {
              // Apply asymmetric column spans and vertical offsets
              let spanClass = "md:col-span-6";
              let offsetClass = "";
              
              if (idx === 0) {
                spanClass = "md:col-span-7";
              } else if (idx === 1) {
                spanClass = "md:col-span-5 md:mt-24";
              } else if (idx === 2) {
                spanClass = "md:col-span-7";
              } else if (idx === 3) {
                spanClass = "md:col-span-5 md:-mt-12";
              }

              return (
                <FadeIn 
                  key={t.id} 
                  direction="up" 
                  duration={0.6} 
                  className={`${spanClass} ${offsetClass}`}
                >
                  <div data-cursor-text="QUOTE" className="h-full">
                    <TestimonialCard
                      quote={t.quote}
                      author={t.author}
                      role={t.role}
                      rating={t.rating}
                      className="h-full"
                    />
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Establish a corporate account or request custom pricing for a singular event. Partner with Nexara.
            </p>
            <Button variant="primary" href="/contact">
              Schedule a Consultation
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
