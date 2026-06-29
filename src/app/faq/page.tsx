"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccordionItem from "@/components/ui/AccordionItem";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { faqCategories } from "@/content/faq";

const faqHeroBg = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHero
        backgroundImage={faqHeroBg}
        eyebrow="Frequently Asked Questions"
        heading="Everything You Need to Know"
        subtext="Detailed insights into Nexara's bespoke language solutions, technical logistics, and corporate security protocols."
        compact
      />

      {/* FAQ Accordion List */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="space-y-8">
              <FadeIn direction="left" duration={0.5}>
                <span className="font-body font-light text-[10px] md:text-xs text-gold uppercase tracking-[0.25em] block mb-4 border-b border-gold/15 pb-2">
                  {cat.category}
                </span>
              </FadeIn>

              <StaggerContainer className="space-y-0 border-t border-goldMuted">
                {cat.items.map((item, idx) => (
                  <FadeIn key={idx} direction="up" duration={0.4}>
                    <div data-cursor-text="ASK">
                      <AccordionItem
                        question={item.question}
                        answer={item.answer}
                      />
                    </div>
                  </FadeIn>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Support / Quick Contact Band */}
      <section className="bg-[#110E07]/75 backdrop-blur-md border-y border-goldMuted py-24 px-6 text-center relative z-10">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-body font-light text-[10px] md:text-xs text-muted uppercase tracking-[0.2em] block mb-2">
              Still Have Questions?
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight mb-8">
              Our Specialists are Ready to Assist
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" href="/contact">
                Contact Our Team
              </Button>
              <Button variant="secondary" href="/contact">
                Schedule a Call
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
