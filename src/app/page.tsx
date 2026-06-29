"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Globe, 
  Headset, 
  Presentation, 
  Briefcase, 
  Landmark, 
  GraduationCap, 
  HeartPulse, 
  Cpu, 
  Mic, 
  ArrowRight, 
  Quote 
} from "lucide-react";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const heroBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";
const interpreterPortrait = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
const boardroomBg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80";
const summitBg = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  // Hero Text Cascade
  const textCascade: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  // Signature Entrance for Stat Cards
  const statCascade: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const statItem: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <div className="w-full">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nexara",
            "url": "https://nexara.global",
            "logo": "https://nexara.global/logo.png",
            "description": "Providing bespoke linguistic solutions for elite international summits, multinational corporations, and critical diplomatic missions across the globe.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Level 14, The Oberoi Centre, DLF Cyber City, Phase III",
              "addressLocality": "Gurgaon",
              "addressRegion": "Haryana",
              "postalCode": "122002",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-11-4050-9000",
              "contactType": "customer service",
              "email": "ritik@tuition-ed.com"
            }
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[750px] flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20 pt-24 pb-12 md:py-0 overflow-hidden">
        {/* Subtle radial ambient glow behind text to guarantee readability on top of active 3D waves */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_65%)] pointer-events-none z-0" />

        <motion.div
          variants={textCascade}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-4xl flex flex-col items-center mt-0 md:mt-[-8vh]"
        >
          <motion.span
            variants={textItem}
            className="font-body font-light text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] mb-6 block"
          >
            TRANSLATION &middot; INTERPRETATION &middot; CORPORATE TRAINING
          </motion.span>
          
          <motion.h1
            variants={textItem}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-white tracking-tight mb-6"
            data-cursor-text="NEXARA"
          >
            Bridging <span className="gold-gradient-text">Languages</span>.<br />
            Connecting <span className="gold-gradient-text">Global Events</span>.
          </motion.h1>
          
          <motion.p
            variants={textItem}
            className="font-body text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Providing bespoke linguistic solutions for elite international summits, multinational corporations, and critical diplomatic missions across the globe.
          </motion.p>
          
          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" href="/contact">
              Book a Consultation
            </Button>
            <Button variant="secondary" href="/services">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={statCascade}
          initial="hidden"
          animate="show"
          className="w-full z-20 flex flex-wrap justify-center items-stretch gap-6 px-6 mt-12 md:mt-0 md:absolute md:bottom-8 lg:bottom-12 left-0 right-0"
        >
          <motion.div variants={statItem} className="w-full max-w-[280px] sm:w-64 flex">
            <StatCard number="500+" label="Events Delivered" className="w-full" />
          </motion.div>
          <motion.div variants={statItem} className="w-full max-w-[280px] sm:w-64 flex">
            <StatCard number="40+" label="Languages" className="w-full" />
          </motion.div>
          <motion.div variants={statItem} className="w-full max-w-[280px] sm:w-64 flex">
            <StatCard number="PAN-INDIA" label="Coverage" className="w-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="Who We Are" />
            
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight">
              India&apos;s Trusted Partner for Global Communication
            </h2>
            
            <div className="space-y-4 font-body text-sm md:text-base text-muted/90 leading-relaxed">
              <p>
                Nexara stands as the premier destination for high-stakes linguistic precision. We cater to the world&apos;s most demanding corporate and diplomatic environments where every word carries the weight of reputation.
              </p>
              <p>
                Our methodology combines traditional human excellence with cutting-edge logistical support, ensuring your international events are executed with seamless fluency and cultural nuance.
              </p>
            </div>
            
            {/* Heritage Statistics Grid */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-goldMuted">
              <div>
                <div className="font-subheading italic text-[36px] md:text-[40px] text-gold leading-none">
                  15+ Years
                </div>
                <div className="font-body text-[10px] uppercase tracking-widest text-muted mt-2">
                  Heritage
                </div>
              </div>
              <div>
                <div className="font-subheading italic text-[36px] md:text-[40px] text-gold leading-none">
                  40+
                </div>
                <div className="font-body text-[10px] uppercase tracking-widest text-muted mt-2">
                  Linguistic Nodes
                </div>
              </div>
              <div>
                <div className="font-subheading italic text-[36px] md:text-[40px] text-gold leading-none">
                  10,000+
                </div>
                <div className="font-body text-[10px] uppercase tracking-widest text-muted mt-2">
                  Delegates Served
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 border border-gold/30 z-0 pointer-events-none" />
              <div className="relative z-10 aspect-[3/4] bg-surface overflow-hidden border border-goldMuted" data-cursor-text="LISTEN">
                <Image
                  src={interpreterPortrait}
                  alt="Professional simultaneous interpreter at work with headphones and microphone"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES (Asymmetric Grid) */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="mb-16 max-w-3xl">
            <SectionLabel eyebrow="Our Expertise" />
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
              Comprehensive Language &amp; Training Solutions
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
            {/* Translation */}
            <FadeIn direction="up" duration={0.6} className="h-full">
              <div className="h-full bg-surface border border-gold/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.12)] transition-all duration-300" data-cursor-text="TRANSLATE">
                <div>
                  <div className="mb-8 text-gold">
                    <Globe className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4">
                    Translation
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed mb-8">
                    Document localization for legal, medical, and financial sectors with rigorous multi-tier quality assurance protocols.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Interpretation (Raised Middle Card) */}
            <FadeIn direction="up" duration={0.6} className="h-full">
              <div className="h-full bg-surface border border-gold/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative z-10 md:-translate-y-8 hover:border-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.18)] transition-all duration-300" data-cursor-text="SPEAK">
                <div>
                  <div className="mb-8 text-gold">
                    <Headset className="w-12 h-12 stroke-[1.25]" />
                  </div>
                  <h3 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
                    Interpretation
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted leading-relaxed mb-8">
                    Simultaneous and consecutive interpretation services for high-level summits, diplomatic missions, and corporate boardrooms.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Corporate Training */}
            <FadeIn direction="up" duration={0.6} className="h-full">
              <div className="h-full bg-surface border border-gold/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.12)] transition-all duration-300" data-cursor-text="LEARN">
                <div>
                  <div className="mb-8 text-gold">
                    <Presentation className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4">
                    Corporate Training
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed mb-8">
                    Cross-cultural communication workshops and specialized language training for C-suite executives and global teams.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Asymmetric, reversed image/text) */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with gray filter hover */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeIn direction="left" duration={0.8}>
              <div className="relative aspect-[4/3] md:aspect-video rounded-lg overflow-hidden border border-goldMuted group" data-cursor-text="FOCUS">
                <Image
                  src={boardroomBg}
                  alt="High level corporate meeting overlooking global city skyline"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Value Propositions */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 lg:pl-12">
            <SectionLabel eyebrow="Why Choose Us" />
            
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight">
              Precision. Discretion.<br />Global Standards.
            </h2>

            <StaggerContainer className="space-y-6 pt-6 divide-y divide-goldMuted">
              {[
                {
                  num: "01",
                  title: "Certified Linguists",
                  text: "Only top-tier, industry-certified professionals with over a decade of field experience."
                },
                {
                  num: "02",
                  title: "Sector-Specific Expertise",
                  text: "Specialized teams for Legal, Defense, Healthcare, and Tech industries."
                },
                {
                  num: "03",
                  title: "Confidentiality Protocols",
                  text: "Military-grade data protection and strict NDA compliance for all projects."
                },
                {
                  num: "04",
                  title: "Pan-India Delivery",
                  text: "Seamless logistical execution across all major metropolitan hubs and remote locations."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.num}
                  variants={textItem}
                  className={`flex gap-6 items-start ${idx > 0 ? "pt-6" : ""}`}
                >
                  <span className="font-subheading italic text-2xl md:text-3xl text-gold font-semibold shrink-0 mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-body font-bold text-sm md:text-base text-white">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs md:text-sm text-muted mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES (Trust Strip / Trusted Across Sectors) */}
      <section className="py-24 bg-[#141414]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 text-center">
          <SectionLabel eyebrow="Who We Serve" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mb-16">
            Trusted Across Sectors
          </h2>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-8">
            {[
              { label: "Corporate", icon: Briefcase },
              { label: "Government", icon: Landmark },
              { label: "Education", icon: GraduationCap },
              { label: "Healthcare", icon: HeartPulse },
              { label: "Technology", icon: Cpu },
              { label: "Conferences", icon: Mic }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.label} direction="up" duration={0.5} className="group cursor-pointer" data-cursor-text="SERVE">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/20 bg-background text-gold group-hover:bg-gold/10 group-hover:border-gold transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="font-body text-[10px] md:text-xs text-muted group-hover:text-white uppercase tracking-[0.15em] transition-colors duration-300">
                      {item.label}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. TESTIMONIAL TEASER */}
      <section className="relative py-32 md:py-40 border-y border-goldMuted bg-gold/[0.01] overflow-hidden">
        {/* Radial Ambient Glow behind testimonial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center" data-cursor-text="QUOTE">
          <FadeIn direction="up" duration={0.8}>
            <div className="flex justify-center text-gold mb-6">
              <Quote className="w-12 h-12 stroke-[1.25] rotate-180" />
            </div>
            <blockquote className="font-subheading italic text-xl md:text-3xl text-white leading-relaxed mb-10 max-w-3xl mx-auto">
              &ldquo;Nexara&apos;s interpretation services were the cornerstone of our APAC regional summit. Their ability to handle technical financial nuances in four languages simultaneously was nothing short of extraordinary. They are, without a doubt, the gold standard in linguistic support.&rdquo;
            </blockquote>
            <div>
              <div className="font-display font-medium text-lg md:text-xl text-gold">
                Julianne V. Sinclair
              </div>
              <div className="font-body text-[10px] md:text-xs text-muted uppercase tracking-[0.2em] mt-2">
                Director of International Relations, Global Finance Corp
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <FadeIn direction="up" duration={0.8}>
          <div className="bg-black p-12 md:p-24 text-center rounded-[4px] border border-gold/20 relative overflow-hidden group">
            {/* Dynamic Gold Gradient Border Highlight */}
            <div className="absolute inset-0 border-2 border-gold/10 group-hover:border-gold/50 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/[0.02] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
                Let&apos;s Make Your Next Event Truly Global.
              </h2>
              <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
                Contact our specialist team today for a tailored quote and linguistic strategy session.
              </p>
              <div>
                <Button variant="primary" href="/contact" className="scale-105 sm:scale-110 hover:scale-115">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
