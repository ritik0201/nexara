"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const servicesHeroBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCniMON0Txdc0FDWCz5RLOd_3iNe5q2Hrba7b2_pzK_-BMyia0JtEwG8WxQmvv_ZYp11mbg0qLMMWqlvtEB-fcFSASA9nxTRXXeusNSaiDCuQ-8JWYZYyMoHLqDjjdfP_4IrR-9BoeBuWSDr3TEIVAOPuvkgg9vvSrNqpZOp8BPeGLxUT-U0ESoUOBGNE-9bx2n1S7wKODztUB3DMJPqsFJmKHZInybOXBJgGoSgq2sGjcC04MVT9apPHtqt2BYMVFT8TmfC9_4qmM";
const translationImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB92oGyct-R7U-dAyF73ak66A_Fe80bgLJcwA9mGmfNbZ1dpSknLLXl-CJ6p2o_VNSkpiiwivPa_cawMNRS8ESwgKaX17kQfkpmynqFZN-4tO-YjHxGKu7MVCcg6mGOZXIttjCUgX_AK7kQqCrhF1uTclvTEZz47LBEXvsYSUhRxMuTm6ANoi4Vz34NfGn-5HbNjXG-mVIUow9HNu0yCMjPLc8MjT3kUbRWGO-gMHHrtRqFMsCF4XdzlFeeS294yQ1eLotbGcbjnxY";
const interpretationImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBpXLTlkpeE14P-RZn53v6CREr-M9vJKeUAUVYfVWENqW3fcguAO2B8R32vGXnnlmRHN7IKurcLm9Ns4B3AGUl6CGw88I3f0WK6h88ImKcMGI_v6i5MShDlv5Rq3-8uhcf0RZRc3a_MPwl43e8nOQsItTpFxcr6xnDrsdBTX8p7jPxix8MTSYUlH7N-712TdqVYSYhwRhLrDGFfGW6bp-eAWbELvjp3HhqYnU7vUDbomiZl8x8alpZYFK2CNn3VrcU8cXXZJldKYr4";
const trainingImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBAePd1yH9dncziD8rkbqI2Z6NreqdH9nAdnewHS1e0Sow50s6wvmEPiNp_LHiLzdO9L9ilN-26Wp9Frl9E7h0mrBb3pnNQbpX5wIb3-XivVY_xlr8Q-xZMJD1KFAqjjldyGCismB4p2oaFU2_R1s8U6voWvmEEpuPXySvx5LfuAKspIVZ4zs0BMue-ylmdsLHXs_nPQXwg-K5UyCqYfvGoVLURQh1EpYX6rdbo0E0zc-eTUU7-rDTj3Qj4U7528ODAZ6xfeWZq9Cw";

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <PageHero
        backgroundImage={servicesHeroBg}
        eyebrow="What We Offer"
        heading="Language & Training Solutions for Global Events"
        subtext="Providing bespoke linguistic solutions for elite summits, multinational corporations, and diplomatic missions."
        compact
      />

      {/* Service 1: Translation */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="01 &mdash; Translation" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-white tracking-tight">
              Precision Translation for Every Document, Every Language
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              Our linguistic experts ensure your message transcends borders with absolute fidelity. We specialize in high-stakes documentation where every nuance matters.
            </p>
            
            <ul className="space-y-3 pt-4">
              {[
                "Certified Multi-Stage Review",
                "Domain-Specific Terminology Management",
                "Secure Confidential Data Handling"
              ].map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 font-body text-sm text-white">
                  <span className="w-3 h-[1px] bg-gold shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6">
              {["Legal Documents", "Technical Manuals", "Financial Reports"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-gold/20 rounded-full font-body text-[10px] text-gold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <FadeIn direction="right" duration={0.6}>
              <div className="border border-goldMuted p-4 bg-[#141414] hover:border-gold/30 transition-colors duration-300">
                <div className="relative w-full max-w-[450px] aspect-[3/4]">
                  <Image
                    src={translationImage}
                    alt="Sleek dark wood desk with notebook, pen and laptop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider width="sm" />

      {/* Service 2: Interpretation */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Left */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <FadeIn direction="left" duration={0.6}>
              <div className="border border-goldMuted p-4 bg-[#141414] hover:border-gold/30 transition-colors duration-300">
                <div className="relative w-full max-w-[450px] aspect-[3/4]">
                  <Image
                    src={interpretationImage}
                    alt="Linguist simultaneous interpreter working in soundproof glass booth"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 lg:pl-12">
            <SectionLabel eyebrow="02 &mdash; Interpretation" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-white tracking-tight">
              Real-Time Interpretation for High-Stakes Conversations
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              Facilitating seamless dialogue across cultures. Our simultaneous and consecutive interpreters operate at the highest levels of global diplomacy and corporate leadership.
            </p>

            <div className="flex flex-wrap gap-2 pt-6">
              {["International Summits", "Diplomatic Meetings", "Legal Proceedings"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-gold/20 rounded-full font-body text-[10px] text-gold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider width="sm" />

      {/* Service 3: Corporate Training */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Left */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="03 &mdash; Corporate Training" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-white tracking-tight">
              Cross-Cultural &amp; Communication Training for Global Teams
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              Empowering your workforce to navigate the complexities of international etiquette and linguistic diversity with confidence and respect.
            </p>

            <div className="flex flex-wrap gap-2 pt-6">
              {["Diplomatic Protocol Training", "Executive Coaching", "Cultural Fluency"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-gold/20 rounded-full font-body text-[10px] text-gold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <FadeIn direction="right" duration={0.6}>
              <div className="border border-goldMuted p-4 bg-[#141414] hover:border-gold/30 transition-colors duration-300">
                <div className="relative w-full max-w-[450px] aspect-[3/4]">
                  <Image
                    src={trainingImage}
                    alt="Corporate workshop training manual inside high-end luxury boardroom"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 backdrop-blur-md border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 text-center">
          <SectionLabel eyebrow="How We Work" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mb-20">
            From Brief to Flawless Delivery
          </h2>

          <div className="relative pt-8">
            {/* Connecting horizontal line */}
            <div className="absolute top-[52px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden md:block" />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Initial consultation to define your specific linguistic requirements."
                },
                {
                  step: "02",
                  title: "Strategic Match",
                  desc: "Assignment of subject-matter experts tailored to your industry."
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Precise translation or interpretation with multi-layer quality checks."
                },
                {
                  step: "04",
                  title: "Final Audit",
                  desc: "Rigorous review and flawless delivery of your final assets."
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
              Need a Tailored Language Solution?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Our linguistic program directors are ready to draft a customized solution for your corporate summit or localization project.
            </p>
            <Button variant="primary" href="/contact">
              Request a Quote
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
