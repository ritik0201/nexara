"use client";

import React from "react";
import Image from "next/image";
import { 
  Briefcase, 
  Landmark, 
  GraduationCap, 
  HeartPulse, 
  Cpu, 
  Mic 
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { industries } from "@/content/industries";

const industriesHeroBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDcBRqqNdGwrO9r3e0jMkhYR-g-AA3-afTvx8JhQKLIBmuwG97ZVlLcKoQ3VvJzPceGq2YLCjq3DeZZFM-bU65L76rZJFLbY65Ehc5fMY7aYOY1zj82fLEv8FF1UJMnYQHH8j-5v88KIoNzRyH_T1sqfoBejlWCclWrcZptwAV5h-A3KjiuDlL4ZlOZv9Zp2rguQafkFuJUmtxrmPY08n5lik3HwwSbwJqn7u8PWCJgcar8h-D7Cmx8vBxoBnA-6iF4K5vjUkAZinc";
const caseStudyBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuBtKFLuMX3h7HVwHIRWW27ykBHNZbEvA5Y5xlED6SlbsERkidF_2MXz0n7S80M5yY6LCR9CWqYvTsJksRLvpj2O2Motyhww5iUv2q_i2M3vVtsjZhUG57qBG0D4EP4shugX9B5jhjinhKXQVe_0Co25B9IG0r_mhsPBIhlSmvpTrwMgXRIkrxg8n5HOSqgi5vaORR9pN8pjezqncB4osUXoheXlagyuAjRo-yM0ZPmltcKWfApyhqqmB0fARP3L_qsMUBJ-SF33Tck";

const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase: Briefcase,
  Landmark: Landmark,
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Cpu: Cpu,
  Mic: Mic,
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        backgroundImage={industriesHeroBg}
        eyebrow="Industries We Serve"
        heading={
          <>
            Specialized <span className="gold-gradient-text italic font-subheading font-normal">Language Solutions</span>, Sector by Sector
          </>
        }
        subtext="Providing precision-engineered linguistic support for the world's most demanding environments. From diplomatic halls to surgical suites."
        compact
      />

      {/* Industry Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Briefcase;
            return (
              <FadeIn 
                key={ind.id} 
                direction="up" 
                delay={ind.delay}
                duration={0.6}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between" glow>
                  <div>
                    <div className="text-gold mb-6">
                      <Icon className="w-8 h-8 stroke-[1.25]" />
                    </div>
                    <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4">
                      {ind.name}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-muted leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>
                  <div>
                    <div className="h-[1px] bg-goldMuted w-full mb-6" />
                    <ul className="space-y-2.5 font-body text-xs text-white">
                      {ind.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3">
                          <span className="text-gold text-[8px]" aria-hidden="true">◆</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Featured Case Study */}
      <section className="bg-[#0f0f0f]/75 backdrop-blur-md py-24 md:py-32 border-y border-goldMuted overflow-hidden relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <SectionLabel eyebrow="Featured Engagement" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-white tracking-tight">
              The 2024 Global Governance Summit
            </h2>
            <blockquote className="font-subheading italic text-lg md:text-xl text-muted/95 leading-relaxed border-l border-gold pl-6 py-1">
              &ldquo;Nexara provided flawless interpretation for 14 simultaneous language tracks across three days of intense climate policy negotiations. Their team wasn&rsquo;t just translating words; they were facilitating history.&rdquo;
            </blockquote>
            
            <div className="flex flex-col gap-6 pt-6 divide-y divide-goldMuted/30">
              <div className="flex items-center gap-4">
                <span className="font-display font-bold text-3xl md:text-4xl text-gold">14+</span>
                <span className="font-body text-xs md:text-sm text-white">Languages Supported Simultaneously</span>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <span className="font-display font-bold text-3xl md:text-4xl text-gold">48k</span>
                <span className="font-body text-xs md:text-sm text-white">Words Translated in Real-time Daily</span>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <FadeIn direction="right" duration={0.8}>
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-goldMuted shadow-2xl relative z-10" data-cursor-text="STAGE">
                <Image
                  src={caseStudyBg}
                  alt="Diplomatic stage with projection screens and microphones"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Decorative back border */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-r border-b border-gold/20 rounded-br-[40px] z-0 pointer-events-none" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-20 px-6 max-w-container-max-width mx-auto text-center">
        <h4 className="font-body font-light text-[10px] md:text-xs text-muted uppercase tracking-[0.25em] mb-10 opacity-60">
          Trusted by Global Entities
        </h4>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "Embassies",
            "Non-Profits",
            "NGOs",
            "Trade Unions",
            "Think Tanks",
            "Foundations"
          ].map((entity) => (
            <span
              key={entity}
              className="px-6 py-2.5 rounded-full border border-gold/30 text-gold font-body text-xs tracking-widest uppercase hover:bg-gold/10 transition-colors duration-300 cursor-default"
              data-cursor-text="TRUST"
            >
              {entity}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6 bg-gradient-to-b from-background to-[#141414] border-t border-goldMuted">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Operating in a Specialized Sector? <br />
              <span className="italic font-display font-normal text-gold">Let&rsquo;s Talk.</span>
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Our industry specialists are ready to architect a custom linguistic solution tailored to your operational requirements and cultural nuances.
            </p>
            <Button variant="primary" href="/contact">
              Schedule Strategic Briefing
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
