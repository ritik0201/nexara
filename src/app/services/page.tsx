"use client";

import React from "react";
import { Globe, Headset, Presentation, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const servicesHeroBg = "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80";

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <PageHero
        backgroundImage={servicesHeroBg}
        eyebrow="Our Solutions"
        heading="Linguistic & Training Solutions for Global Leadership"
        subtext="Bespoke communication frameworks built to facilitate diplomacy, support complex global trade, and empower C-suite capability."
        compact
      />

      {/* Services Portfolio Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel eyebrow="Service Pillars" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] text-white tracking-tight mt-2">
            The Three Pillars of Nexara
          </h2>
          <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
            From high-fidelity legal document translations to simultaneous interpretation at G20-level summits and statutory corporate compliance trainings, Nexara serves as your single point of contact for global standard delivery.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Pillar 1: Translation */}
          <FadeIn direction="up" duration={0.6} className="h-full">
            <div className="h-full bg-surface border border-gold/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.12)] transition-all duration-300" data-cursor-text="TRANSLATE">
              <div>
                <div className="mb-8 text-gold">
                  <Globe className="w-10 h-10 stroke-[1.25]" />
                </div>
                <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4">
                  Document Translation
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  Certified document localization and multi-stage translation for high-stakes corporate, legal, financial, and medical documents. We manage strict sector-specific terminology with absolute accuracy.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-muted/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Certified Multi-Stage Review
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Custom Terminology Glossaries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Secure Cryptographic Data Vaults
                  </li>
                </ul>
              </div>
              <Button variant="secondary" href="/contact" className="w-full justify-center">
                Get Translation Quote
              </Button>
            </div>
          </FadeIn>

          {/* Pillar 2: Interpretation */}
          <FadeIn direction="up" duration={0.6} className="h-full">
            <div className="h-full bg-surface border border-gold/30 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] transition-all duration-300 relative z-10 lg:-translate-y-4" data-cursor-text="INTERPRET">
              <div>
                <div className="mb-8 text-gold">
                  <Headset className="w-11 h-11 stroke-[1.25]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-gold/10 text-gold border border-gold/20 text-[9px] uppercase tracking-wider rounded">Dedicated Hub</span>
                </div>
                <h3 className="font-display font-medium text-2xl text-white mb-4">
                  Interpretation Services
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  Elite simultaneous, consecutive, and remote (RSI) interpretation for international summits, state banquets, bilateral talks, expo forums, and corporate arbitration. Vetted conference interpreters.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-muted/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Simultaneous & Consecutive
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    ISO-Standard Equipment Provided
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Bharat Global Expo Case Study
                  </li>
                </ul>
              </div>
              <Button variant="primary" href="/services/interpretation" className="w-full justify-center">
                Explore Interpretation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>

          {/* Pillar 3: Corporate Training */}
          <FadeIn direction="up" duration={0.6} className="h-full">
            <div className="h-full bg-surface border border-gold/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.12)] transition-all duration-300" data-cursor-text="TRAIN">
              <div>
                <div className="mb-8 text-gold">
                  <Presentation className="w-10 h-10 stroke-[1.25]" />
                </div>
                <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4">
                  Corporate Training
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  Statutory compliance programs (POSH), mid/senior executive leadership workshops, cross-cultural training, and foreign language instruction for outbound business teams.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-muted/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Legally-Compliant POSH Seminars
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Cross-Cultural Strategy & Languages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    Official Certificate & Workbook Bundles
                  </li>
                </ul>
              </div>
              <Button variant="secondary" href="/services/corporate-training" className="w-full justify-center">
                Explore Corporate Training <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* How We Work Section */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 text-center">
          <SectionLabel eyebrow="Execution Excellence" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mb-20">
            From Brief to Flawless Delivery
          </h2>

          <div className="relative pt-8">
            <div className="absolute top-[52px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden md:block" />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Consultation to establish your specific business objectives and communication environment."
                },
                {
                  step: "02",
                  title: "Strategic Match",
                  desc: "Sourcing vetted, industry-matched interpreters or trainers with precise domain authority."
                },
                {
                  step: "03",
                  title: "Logistics & Design",
                  desc: "Deploying ISO-certified hardware, custom syllabi, and pre-assessments for audit evidence."
                },
                {
                  step: "04",
                  title: "Execution & Report",
                  desc: "Delivery accompanied by post-event reports, certification lists, and outcome analytics."
                }
              ].map((item) => (
                <FadeIn key={item.step} direction="up" duration={0.5} className="group" data-cursor-text="STEPS">
                  <div className="w-16 h-16 rounded-full border border-gold/30 bg-surface flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                    <span className="font-display font-semibold text-lg text-gold">{item.step}</span>
                  </div>
                  <h3 className="font-body font-bold text-sm uppercase tracking-widest text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-muted px-4 leading-relaxed">
                    {item.desc}
                  </p>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Ready to Design Your Language Program?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Our linguistic program directors and corporate advisors are ready to draft a customized delivery framework for your team or upcoming event.
            </p>
            <Button variant="primary" href="/contact">
              Request a Consultation
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
