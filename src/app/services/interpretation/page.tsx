"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Headset, 
  Users, 
  Mic, 
  Volume2, 
  Tv, 
  Accessibility, 
  FileText, 
  CheckCircle, 
  Layers, 
  Wifi, 
  ShieldCheck, 
  Calendar, 
  TrendingUp, 
  ChevronRight, 
  Quote, 
  ExternalLink 
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import LanguagePill from "@/components/ui/LanguagePill";
import AccordionItem from "@/components/ui/AccordionItem";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const heroBg = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80";
const caseStudyBg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80";

export default function InterpretationServicesPage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90dvh] flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20 pt-32 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_75%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <SectionLabel eyebrow="High-Stakes Linguistics" />
          
          <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-white tracking-tight mb-6 mt-3">
            Real-Time Interpretation for <br />
            <span className="gold-gradient-text">High-Stakes Global Events</span>
          </h1>
          
          <p className="font-body text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Providing G20-level simultaneous and consecutive interpretation for corporate boardrooms, government functions, trade expos, and international summits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" href="/contact">
              Request Interpreters for Your Event
            </Button>
            <Button variant="secondary" href="/contact">
              Get a Quote in 24 Hours
            </Button>
          </div>
        </div>

        {/* Trust Strip stats */}
        <div className="w-full max-w-container-max-width mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <StatCard number="500+" label="Events Delivered" />
          <StatCard number="40+" label="Languages Supported" />
          <StatCard number="10,000+" label="Delegates Served" />
        </div>
      </section>

      {/* 2. TYPES OF INTERPRETATION WE OFFER */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto border-t border-goldMuted">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel eyebrow="Linguistic Modalities" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            Types of Interpretation We Offer
          </h2>
          <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
            We adapt our delivery methods to suit the scale, setting, and flow of your discussion.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Headset,
              title: "Simultaneous Interpretation",
              desc: "Real-time, booth-based interpretation for large-scale international conferences, summits, and AGMs. Interpreters work in pairs from soundproof booths, ensuring zero pause in speaker flow."
            },
            {
              icon: Mic,
              title: "Consecutive Interpretation",
              desc: "The speaker pauses at key intervals for the interpreter to relay the message. Ideal for intimate bilateral negotiations, press briefings, legal arbitrations, and high-level corporate audits."
            },
            {
              icon: Volume2,
              title: "Whisper Interpretation (Chuchotage)",
              desc: "Discreet, real-time whispering for 1 or 2 delegates sitting within a larger forum. No specialist booths are required, allowing for personal localization during larger assembly settings."
            },
            {
              icon: Tv,
              title: "Remote Simultaneous Interpretation (RSI)",
              desc: "A cloud-based translation framework for hybrid and virtual events. Interpreters connect via remote consoles to feed audio channels straight to delegates on Zoom, Teams, or custom web portals."
            },
            {
              icon: Users,
              title: "Escort/Liaison Interpretation",
              desc: "Mobile, interactive interpretation for delegation visits, factory tours, diplomatic protocol meetings, and business negotiations, supporting fluid interactions on the move."
            },
            {
              icon: Accessibility,
              title: "Sign Language Interpretation",
              desc: "Providing professional visual interpreters for government broadcasts, public events, and compliance-driven accessibility, ensuring compliance and universal event inclusion."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} direction="up" duration={0.5} className="h-full">
                <div className="h-full bg-surface border border-gold/15 rounded-2xl p-8 hover:border-gold/30 hover:shadow-[0_15px_30px_-15px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-6">
                    <Icon className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  <h3 className="font-display font-medium text-lg md:text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. EVENTS & SETTINGS WE COVER */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="mb-16 max-w-3xl">
            <SectionLabel eyebrow="Event Environments" />
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
              Events & Settings We Cover
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                title: "International Summits",
                desc: "High-scale, multi-language real-time translation systems matching G20 and bilateral delegates."
              },
              {
                title: "Government Meetings",
                desc: "Diplomatic protocol compliance and security-vetted linguists handling sensitive bilateral negotiations."
              },
              {
                title: "Trade Fairs & Expos",
                desc: "Booth-level language representation. Inspired by our successful execution at the Bharat Global Expo."
              },
              {
                title: "C-Suite Board Meetings",
                desc: "Discreet and professional linguistic matching for high-stakes investor calls, M&A talks, and AGMs."
              },
              {
                title: "Product Launches",
                desc: "Delivering real-time localized brand narratives to corporate media pools, press, and international clients."
              },
              {
                title: "Legal Arbitration",
                desc: "Court-qualified sworn interpreters handling complex legal frameworks, proceedings, and depositions."
              },
              {
                title: "Scientific Conferences",
                desc: "Deep sector-specific knowledge covering clinical, medical, defense, engineering, and digital topics."
              },
              {
                title: "MoU Signings",
                desc: "Protocol-aligned translation to support bilateral handshakes, contract signing, and official diplomatic steps."
              }
            ].map((event, idx) => (
              <FadeIn key={idx} direction="up" duration={0.4} className="group">
                <div className="bg-surface/50 border border-gold/10 p-6 rounded-lg hover:border-gold/30 hover:bg-surface transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="font-body font-bold text-xs uppercase tracking-widest text-white mb-2 group-hover:text-gold transition-colors">
                      {event.title}
                    </h4>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. LANGUAGES WE COVER */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel eyebrow="Global Coverage" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-white tracking-tight">
              Flagship Languages We Cover
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              We deploy elite native linguists across key international nodes, including specialized languages tailored for expos like our Bharat-Africa trade corridors.
            </p>
            <p className="font-body text-xs md:text-sm text-muted/70 leading-relaxed">
              Need local regional dialects or rarer international combinations? Our logistics desk handles custom deployments globally.
            </p>
            <div className="pt-4">
              <Button variant="secondary" href="/languages">
                View All 40+ Languages
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="right" duration={0.6}>
              <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
                {[
                  "French", "German", "Japanese", "Arabic", 
                  "Mandarin", "Spanish", "Russian", "Portuguese",
                  "Korean", "Italian", "Swahili", "Amharic"
                ].map((lang) => (
                  <LanguagePill key={lang} name={lang} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT & TECHNOLOGY */}
      <section className="py-24 md:py-32 bg-[#141414]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel eyebrow="AV Infrastructure" />
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
              Hardware & Equipment Infrastructure
            </h2>
            <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
              Nexara provides complete turn-key technology sets. You don&apos;t need to coordinate with third-party AV suppliers.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "ISO Soundproof Booths",
                desc: "ISO 4043-compliant portable double-interpreter booths ensuring standard-compliant acoustic isolation and operator comfort."
              },
              {
                title: "Wireless Headsets",
                desc: "High-frequency multichannel wireless receivers and headsets featuring crystal-clear audio feeds for thousands of delegates."
              },
              {
                title: "RSI Platform Integrations",
                desc: "Fully integrated remote interpretation hubs supporting Zoom, MS Teams, Webex, and secure digital streaming panels."
              },
              {
                title: "On-Site Tech Support",
                desc: "Vetted sound engineers, coordinators, and standby tech leads managing channels, sound levels, and backup systems."
              }
            ].map((tech, idx) => (
              <FadeIn key={idx} direction="up" duration={0.5} className="text-center">
                <div className="w-12 h-12 rounded-full border border-gold/20 bg-background flex items-center justify-center mx-auto mb-6 text-gold">
                  <span className="font-display text-sm font-semibold">{`0${idx + 1}`}</span>
                </div>
                <h4 className="font-body font-bold text-sm text-white uppercase tracking-widest mb-3">
                  {tech.title}
                </h4>
                <p className="font-body text-xs text-muted leading-relaxed">
                  {tech.desc}
                </p>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. HOW WE WORK (PROCESS) */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel eyebrow="Event Lifecycle" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            Our Interpretation Process
          </h2>
          <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
            Five deliberate phases to guarantee high-fidelity translation with zero operational interruption.
          </p>
        </div>

        <div className="relative border-l border-gold/15 max-w-4xl mx-auto pl-8 md:pl-12 space-y-16">
          {[
            {
              step: "Phase 01",
              title: "Brief & Scoping",
              desc: "Detailing the event agenda, language pairs, delegate metrics, target venue floorplans, and core technical subjects."
            },
            {
              step: "Phase 02",
              title: "Interpreter Matching",
              desc: "Sourcing certified, subject-matter experts (diplomatic protocol, high finance, defense, medical, or complex engineering) aligned to your topic."
            },
            {
              step: "Phase 03",
              title: "Logistics & Setup",
              desc: "Transporting and installing ISO-standard interpretation booths, receiver hubs, testing channels, and verifying remote RSI cloud streams."
            },
            {
              step: "Phase 04",
              title: "Live Delivery & Support",
              desc: "Deploying dual-interpreter setups for fatigue management alongside standby AV crew to handle live feeds and channel security."
            },
            {
              step: "Phase 05",
              title: "Post-Event Evaluation",
              desc: "Providing client audits, delegate feedback reviews, and clean audio file exports of the interpreted sessions."
            }
          ].map((phase, idx) => (
            <div key={idx} className="relative">
              {/* Bullet Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-black border-2 border-gold flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] font-semibold">
                {phase.step}
              </span>
              <h3 className="font-display font-medium text-lg md:text-xl text-white mt-1 mb-2">
                {phase.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE NEXARA FOR INTERPRETATION */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel eyebrow="Our Credentials" />
              <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight">
                Why Elite Events Choose Nexara
              </h2>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                When diplomatic relations, corporate acquisitions, or global expos are on the line, there is no margin for linguistic hesitation or technical dropouts.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "10+ Years Field Experience",
                  desc: "We only deploy certified conference interpreters with established tenure in international arenas."
                },
                {
                  title: "Sector-Specific Experts",
                  desc: "Qualified interpreters matched to technical topics: legal, defense, finance, medicine, and engineering."
                },
                {
                  title: "NDA & Secret Vetted",
                  desc: "Strict confidentiality frameworks for high-profile governmental and board proceedings."
                },
                {
                  title: "Dual-Interpreter Staffing",
                  desc: "Standard deployment of paired linguists to manage fatigue and sustain cognitive precision."
                },
                {
                  title: "Global Logistics Desk",
                  desc: "Capability to deploy interpreters and physical booths all over India and major international hubs."
                },
                {
                  title: "End-to-End AV Bundles",
                  desc: "Consolidated billing that includes translators, ISO-standard booths, headsets, and tech staff."
                }
              ].map((prop, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 text-gold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <h4 className="font-body font-bold text-xs uppercase tracking-widest text-white">
                      {prop.title}
                    </h4>
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed pl-6">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDY / PORTFOLIO STRIP */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="border border-gold/20 bg-[#141414] overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <Image
                src={caseStudyBg}
                alt="Large scale trade exposition with delegates and booths"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-6 left-6 bg-black/80 px-4 py-1.5 border border-gold/30 rounded text-[10px] text-gold uppercase tracking-widest font-body">
                Case Study
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-6 flex flex-col justify-center">
              <span className="font-body font-semibold text-[10px] text-gold uppercase tracking-[0.2em]">
                Exposition Highlights
              </span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-white tracking-tight">
                Bharat Global Expo Africa
              </h3>
              
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gold/15">
                <div>
                  <div className="font-subheading italic text-xl md:text-2xl text-gold">French</div>
                  <div className="font-body text-[9px] uppercase tracking-wider text-muted mt-1">Language Cover</div>
                </div>
                <div>
                  <div className="font-subheading italic text-xl md:text-2xl text-gold">500+</div>
                  <div className="font-body text-[9px] uppercase tracking-wider text-muted mt-1">Delegates</div>
                </div>
                <div>
                  <div className="font-subheading italic text-xl md:text-2xl text-gold">Pan-Africa</div>
                  <div className="font-body text-[9px] uppercase tracking-wider text-muted mt-1">Scope</div>
                </div>
              </div>

              <p className="font-body text-xs md:text-sm text-muted leading-relaxed">
                Nexara coordinated and executed simultaneous French-English interpretation services for bilateral trade corridors at the Bharat Global Expo Africa. We deployed soundproof interpretation booths, managed multi-channel headsets for 500+ delegates, and provided sector-specific linguists to facilitate multi-million dollar MoU signings with zero delays.
              </p>

              <div className="pt-2">
                <Button variant="secondary" href="/contact" className="gap-2">
                  Read Case Briefs <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="relative py-24 md:py-32 bg-gold/[0.01] border-y border-goldMuted overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up" duration={0.8}>
            <div className="flex justify-center text-gold mb-6">
              <Quote className="w-12 h-12 stroke-[1.25] rotate-180" />
            </div>
            <blockquote className="font-subheading italic text-lg md:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">
              &ldquo;Nexara&apos;s interpretation services were the cornerstone of our APAC regional summit. Their ability to handle technical financial nuances in four languages simultaneously was nothing short of extraordinary. They are, without a doubt, the gold standard in linguistic support.&rdquo;
            </blockquote>
            <div>
              <div className="font-display font-medium text-base md:text-lg text-gold">
                Julianne V. Sinclair
              </div>
              <div className="font-body text-[9px] md:text-xs text-muted uppercase tracking-[0.2em] mt-2">
                Director of International Relations, Global Finance Corp
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. FAQ SNIPPET */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel eyebrow="Support Desk" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border-t border-goldMuted">
          {[
            {
              question: "Simultaneous vs consecutive — which modality does my event need?",
              answer: "Simultaneous interpretation is recommended for large assemblies, summits, and presentations where the speaker delivers content continuously; delegates listen via headsets without interruption. Consecutive interpretation is suited for bilateral dialogues, roundtable discussions, legal testimonies, and boardroom debates where the speaker pauses periodically for the interpreter to translate."
            },
            {
              question: "How much lead time does Nexara require before booking interpreters?",
              answer: "For major conferences requiring on-site soundproof booths and delegate receiver systems, we require a minimum of 2 to 3 weeks' lead time for logistics setup and interpreter matching. However, for remote simultaneous translation (RSI) or C-suite negotiations, we can often mobilize interpreters within 48 to 72 hours."
            },
            {
              question: "Can Nexara support hybrid events with remote international delegates?",
              answer: "Yes. Through our Remote Simultaneous Interpretation (RSI) cloud configuration, interpreters can operate from on-site booths or remote hubs, broadcasting direct translation channels. Delegates can easily tune into these channels on site via wireless headsets, or join virtually via Zoom, Microsoft Teams, or custom streaming panels."
            },
            {
              question: "Do you supply the translation equipment, or must we rent it separately?",
              answer: "We supply complete, turn-key technical systems. This includes ISO 4043 double booths, multi-channel delegate headsets, FM/IR transmitters, microphones, and dedicated sound technicians. You do not need to deal with a separate AV rental vendor."
            }
          ].map((faq, idx) => (
            <AccordionItem 
              key={idx}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/faq" className="font-body text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors">
            Visit Full FAQ Center &rarr;
          </Link>
        </div>
      </section>

      {/* 11. CLOSING CTA */}
      <section className="py-24 text-center px-6 border-t border-goldMuted bg-[#110E07]/50 relative z-10">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Planning a Multilingual Event?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Get a tailored interpretation quote and tech blueprint within 24 hours. Let us ensure your event is executed with absolute precision.
            </p>
            <Button variant="primary" href="/contact">
              Get an Interpretation Quote
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* 12. CROSS-LINK TEASER */}
      <section className="py-16 px-6 bg-black border-t border-gold/15">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-white text-lg font-medium mb-1">Looking to train your team?</h4>
            <p className="font-body text-xs text-muted">Empower your international delegates with global business communication and cultural etiquette.</p>
          </div>
          <Button variant="secondary" href="/services/corporate-training" className="shrink-0">
            Explore Corporate Training &rarr;
          </Button>
        </div>
      </section>
    </div>
  );
}
