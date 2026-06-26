"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import LanguagePill from "@/components/ui/LanguagePill";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { languageCategories } from "@/content/languages";

const languagesHeroBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqfGrB31OSLj_Fsp0mBIlK8gxpfjJ_nY7M-Km15nbNoWBaKgwMpqgKi0BCtKMfVobKKLPBoFKo3TmZdcjG1CVw4nAJzhg_oyyfCccYozO4aR1FQKEhLwDCxdspMy4eHeIe9jkpN1iGXr8TQA5gIejON95nxnW6goT968N4gkqsnhSS3EfSz92-oeeJvbk2wXhnaE2ITWFNL27XmpYOpwFkENIitq-tXNDzTlDVacRw0NjlblNrgAjkPdf0jF7G9kwTlt0FsUWBvdw";

export default function LanguagesPage() {
  return (
    <div className="w-full">
      {/* Compact Hero */}
      <PageHero
        backgroundImage={languagesHeroBg}
        eyebrow="Languages Supported"
        heading="40+ Languages. One Trusted Partner."
        subtext="Global linguistic coverage for high-stakes summits, corporate rollouts, and events across India."
        compact
      />

      {/* Stat Band */}
      <section className="py-12 bg-surface/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="font-display font-bold text-3xl md:text-4xl gold-gradient-text mb-2">40+</span>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-muted">Languages Supported</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display font-bold text-3xl md:text-4xl gold-gradient-text mb-2">100+</span>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-muted">Certified Linguists</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display font-bold text-3xl md:text-4xl gold-gradient-text mb-2">PAN-INDIA</span>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-widest text-muted">Remote &amp; On-Site Delivery</span>
          </div>
        </div>
      </section>

      {/* Language Categorized Directory */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto space-y-24">
        {languageCategories.map((cat, idx) => (
          <div key={cat.category} className="space-y-8">
            <FadeIn direction="left" duration={0.5}>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-white border-l-[3px] border-gold pl-6">
                {cat.category}
              </h2>
            </FadeIn>
            
            <StaggerContainer className="flex flex-wrap gap-4 pt-4">
              {cat.languages.map((lang) => (
                <FadeIn key={lang} direction="none" duration={0.3}>
                  <div data-cursor-text="SPEAK">
                    <LanguagePill name={lang} />
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </section>

      {/* Clarification Notice Band */}
      <section className="py-16 bg-surface/75 backdrop-blur-md border-y border-goldMuted px-6 relative z-10">
        <div className="max-w-container-max-width mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <p className="font-subheading italic text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Note: Simultaneous interpretation services are subject to equipment availability and specialist matching. We recommend booking 14+ business days in advance for regional dialects.
          </p>
          <div className="shrink-0">
            <Button variant="secondary" href="/contact">
              Confirm Language Availability
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ CTA Banner */}
      <section className="py-24 text-center px-6">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Don&rsquo;t See Your Language Listed?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Nexara maintains a global network. We source rare dialects and specialized language consultants on request for niche industrial or diplomatic requirements.
            </p>
            <Button variant="primary" href="/contact">
              Inquire with Our Concierge
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
