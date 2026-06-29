"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const aboutHeroBg = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80";
const teamVolkov = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80";
const teamThorne = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80";
const teamChen = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        backgroundImage={aboutHeroBg}
        eyebrow="About Us"
        heading={
          <>
            Three Decades of Bridging <br />
            <span className="gold-gradient-text">the World&rsquo;s Languages</span>
          </>
        }
        subtext="Established in 1994, Nexara coordinates uncompromised linguistic accuracy for global corporate leaders and diplomatic summits."
        compact
      />

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="up" duration={0.6}>
            <Card glow={false} className="h-full border border-gold/15 bg-surface p-12 hover:border-gold/40 transition-colors duration-300">
              <h3 className="font-display font-medium text-2xl md:text-3xl text-gold mb-6">
                Our Mission
              </h3>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                To deliver uncompromised linguistic precision for global entities, ensuring that every nuance of authority and hospitality is preserved across borders. We facilitate high-stakes dialogue through elite interpretation and bespoke translation.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="up" duration={0.6}>
            <Card glow={false} className="h-full border border-gold/15 bg-surface p-12 hover:border-gold/40 transition-colors duration-300">
              <h3 className="font-display font-medium text-2xl md:text-3xl text-gold mb-6">
                Our Vision
              </h3>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                To be the silent architect behind the world&rsquo;s most significant cultural and corporate exchanges, where language is no longer a barrier but a bridge to exclusive opportunities and shared heritage.
              </p>
            </Card>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* Quote & Statistics Section */}
      <section className="py-24 bg-[#141414]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Executive Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-gold">
              <Quote className="w-10 h-10 stroke-[1.25] rotate-180" />
            </div>
            <blockquote className="font-subheading italic text-xl md:text-2xl lg:text-3xl text-white leading-relaxed" data-cursor-text="QUOTE">
              &ldquo;Precision in language is not merely a service; it is the cornerstone of global diplomacy and corporate legacy. At Nexara, we handle every word with the same reverence one would afford a master craftsman&rsquo;s work.&rdquo;
            </blockquote>
            <div className="pt-4">
              <p className="font-body font-bold text-xs uppercase tracking-widest text-gold">
                &mdash; Julian Vane
              </p>
              <p className="font-body text-xs text-muted mt-1 uppercase tracking-wider">
                Chief Executive Officer
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            {[
              { num: "500+", text: "Annual High-Stakes Events" },
              { num: "40+", text: "Official Languages Supported" },
              { num: "30", text: "Years of Institutional Heritage" }
            ].map((stat) => (
              <div key={stat.text} className="group">
                <div className="font-display font-bold text-4xl md:text-5xl gold-gradient-text tracking-tight">
                  {stat.num}
                </div>
                <div className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest mt-2">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-container-max-width mx-auto">
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mb-20 text-center">
            Built on Trust, <span className="italic font-subheading font-normal text-gold">Proven at Scale</span>
          </h2>

          <div className="relative flex flex-col md:flex-row items-stretch justify-between pb-12 gap-8 md:gap-4 overflow-x-auto no-scrollbar">
            {/* Timeline connection line */}
            <div className="absolute top-[48px] left-8 right-8 h-[1px] bg-gold/20 hidden md:block" />

            {[
              {
                year: "1994",
                text: "Nexara founded in Zurich, Switzerland, focusing on diplomatic translation & summit interpretation."
              },
              {
                year: "2008",
                text: "Global expansion into NYC, Singapore, and New Delhi, serving G20 summits and Fortune 500 corporate assemblies."
              },
              {
                year: "2024",
                text: "Introducing AI-Enhanced terminology audit databases to support real-time translation accuracy for critical legacy projects."
              }
            ].map((milestone) => (
              <FadeIn key={milestone.year} direction="up" duration={0.6} className="relative z-10 flex-grow md:min-w-[300px] flex flex-col items-center">
                <div className="w-4 h-4 bg-gold rotate-45 mb-8 hidden md:block" />
                <div className="bg-surface border border-gold/15 rounded-xl p-6 text-center w-full hover:border-gold/40 transition-colors duration-300" data-cursor-text="HISTORY">
                  <span className="font-display font-bold text-lg md:text-xl text-gold block mb-2">
                    {milestone.year}
                  </span>
                  <p className="font-body text-xs md:text-sm text-muted leading-relaxed">
                    {milestone.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Language Teaser */}
      <section className="py-16 bg-[#0f0f0f]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 text-center">
          <span className="font-body font-light text-[10px] md:text-xs text-gold uppercase tracking-[0.4em] block mb-10">
            GLOBAL REACH
          </span>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 opacity-60">
            {[
              "Mandarin", "Arabic", "French", "Japanese", "German",
              "Spanish", "Portuguese", "Hindi", "Italian", "Korean"
            ].map((lang) => (
              <span
                key={lang}
                className="font-body font-medium text-base md:text-xl text-white hover:text-gold transition-colors cursor-default"
                data-cursor-text="GLOBAL"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* People / Vetting Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <SectionLabel eyebrow="Our People" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight text-white mt-2">
              An Elite Collective of Linguistic Specialists
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["UN Certified", "Court Accredited", "AIIC Members"].map((badge) => (
              <span
                key={badge}
                className="border border-gold/40 px-5 py-1.5 rounded-full font-body text-[10px] text-gold uppercase tracking-wider font-semibold"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Elena Volkov",
              role: "Lead Diplomatic Liaison",
              img: teamVolkov,
              alt: "Elena Volkov refined corporate portrait suit library"
            },
            {
              name: "Marcus Thorne",
              role: "Director of Interpretation",
              img: teamThorne,
              alt: "Marcus Thorne conference interpreter headphones glass booth"
            },
            {
              name: "Sarah Chen",
              role: "Head of Global Operations",
              img: teamChen,
              alt: "Sarah Chen operations manager modern office background"
            }
          ].map((member) => (
            <FadeIn key={member.name} direction="up" duration={0.6} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-goldMuted">
                <Image
                  src={member.img}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <h4 className="font-display font-semibold text-lg md:text-xl text-white">
                {member.name}
              </h4>
              <p className="font-body text-xs text-gold uppercase tracking-widest mt-1">
                {member.role}
              </p>
            </FadeIn>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <FadeIn direction="up" duration={0.8}>
          <div className="gold-gradient-bg p-12 md:p-24 rounded-[4px] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-black mb-4 tracking-tight leading-tight">
                Partner with a Team That Understands Global Events
              </h2>
              <p className="font-body text-sm md:text-base text-black/75 leading-relaxed">
                Experience the difference of working with a linguistic partner that values your brand&rsquo;s authority as much as you do.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Button variant="secondary" href="/contact" className="border-black text-black hover:bg-black hover:text-gold">
                Start a Consultation
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
