"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Presentation, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  Video, 
  Layers, 
  FileCheck, 
  FileText, 
  Award, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  Sparkles,
  Building,
  GraduationCap,
  HeartPulse,
  Cpu,
  Briefcase,
  Landmark,
  ShieldAlert,
  Coins
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import AccordionItem from "@/components/ui/AccordionItem";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const heroBg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80";

type TrainingDomain = {
  id: string;
  label: string;
  description: string;
  isFeatured?: boolean;
  courses: string[];
};

const domainsData: TrainingDomain[] = [
  {
    id: "compliance",
    label: "Compliance & Statutory",
    description: "Legally compliant, mandatory corporate workshops designed to secure your organization.",
    courses: [
      "POSH (Prevention of Sexual Harassment) — Employee Awareness & ICC Committee Training",
      "Code of Conduct, Ethics & Professional Integrity",
      "Anti-Bribery & Anti-Corruption (ABAC) Compliance",
      "Data Protection & India DPDP Act Compliance",
      "Whistleblower Policy & Reporting Channels Training",
      "POCSO Awareness (where applicable in education/healthcare)"
    ]
  },
  {
    id: "cross-cultural",
    label: "Cross-Cultural & Language",
    description: "Our core differentiator — empowering outbound teams and C-suite leaders to navigate international corporate protocol.",
    isFeatured: true,
    courses: [
      "Cross-Cultural Communication for Multilingual & Global Teams",
      "International Business Etiquette (Europe, North America, Middle East, Africa, APAC)",
      "Foreign Language Training for Business (French, German, Japanese, Arabic, Mandarin)",
      "Linguistic Readiness for Outbound Delegations & Global Relocation Teams",
      "Bilateral MoU Protocol & Negotiation Preparation"
    ]
  },
  {
    id: "leadership",
    label: "Leadership & Management",
    description: "Transforming high-potentials and managers into strategic organizational leaders.",
    courses: [
      "First-Time Manager & Supervisor Transition Bootcamps",
      "Mid-Level Manager & Senior Executive Leadership Retreats",
      "Delegation, Performance Coaching & Constructive Feedback Skills",
      "Change Management & Agility in Disrupted Ecosystems",
      "Succession Planning & Business Continuity Workshops"
    ]
  },
  {
    id: "behavioral",
    label: "Behavioral & Soft Skills",
    description: "Cultivating the critical interpersonal competencies that power daily business performance.",
    courses: [
      "Executive Business Communication & Impactful Presentation Skills",
      "Email Etiquette & Strategic Written Business Communication",
      "Emotional Intelligence (EQ) for Managers & Leaders",
      "High-Performing Team Building, Collaboration & Trust Dynamics",
      "Strategic Time Management & Priority Optimization",
      "Customer Service Excellence & Frontline Grooming"
    ]
  },
  {
    id: "sales",
    label: "Sales & Negotiation",
    description: "Driving commercial success through modern negotiation and account frameworks.",
    courses: [
      "Sales Effectiveness, Persuasion & Closing Strategies",
      "Win-Win Commercial Negotiations & Value Selling",
      "Strategic Key Account Management (KAM)",
      "Retail Floor, Frontline Sales & Customer Experience"
    ]
  },
  {
    id: "technical",
    label: "Technical & Digital",
    description: "Ensuring workforce fluency in emerging tools and security hygiene.",
    courses: [
      "Cloud Fundamentals (Non-tech AWS, Azure & Google Cloud Awareness)",
      "Cybersecurity Hygiene & Phishing Awareness for Business Teams",
      "Data Analytics & Practical AI/ChatGPT Tools for Teams",
      "Enterprise Software Adoption (Salesforce, SAP, Advanced MS Excel)"
    ]
  },
  {
    id: "quality",
    label: "Quality & Safety",
    description: "Institutionalizing operational excellence and international standards.",
    courses: [
      "Six Sigma & Lean Manufacturing Fundamentals",
      "ISO Standards Awareness (9001 Quality, 14001 Environment, 27001 Security)",
      "Environment, Health & Safety (EHS) Workplace Regulations"
    ]
  },
  {
    id: "dei",
    label: "DEI & Inclusion",
    description: "Building psychologically safe, diverse, and inclusive corporate environments.",
    courses: [
      "Gender Sensitization & Inclusive Workplace Communication",
      "Disability Inclusion & Universal Design Awareness",
      "Inclusive Leadership — Mitigating Unconscious Bias in Hiring & Management"
    ]
  },
  {
    id: "onboarding",
    label: "Onboarding & Induction",
    description: "Accelerating the ramp-up time for early-career hires and new employees.",
    courses: [
      "Campus-to-Corporate (C2C) Professional Transition Training",
      "Structured New Employee Orientation (NEO) & Corporate Culture Immersion"
    ]
  }
];

export default function CorporateTrainingPage() {
  const [activeTab, setActiveTab] = useState("compliance");
  const activeDomain = domainsData.find(d => d.id === activeTab) || domainsData[0];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90dvh] flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20 pt-32 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_75%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <SectionLabel eyebrow="Enterprise Development" />
          
          <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-white tracking-tight mb-6 mt-3">
            Corporate Training That Builds <br />
            <span className="gold-gradient-text">Capability, Not Just Attendance</span>
          </h1>
          
          <p className="font-body text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Upskilling your global workforce with legally-compliant POSH programs, executive leadership pathways, and our unique cross-cultural language training.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact">
              Request a Needs Assessment
            </Button>
            <Button variant="secondary" href="/contact">
              Explore Custom Syllabi
            </Button>
          </div>
        </div>
      </section>

      {/* 2. WHY CORPORATE TRAINING (Problem Framing) */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto border-t border-goldMuted">
        <div className="bg-[#141414] border border-gold/15 p-8 md:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl text-white font-semibold leading-tight">
              The Reality of <br />
              <span className="text-gold">Workforce Skill Gaps</span>
            </h3>
          </div>
          <div className="lg:col-span-8 font-body text-sm md:text-base text-muted/90 leading-relaxed border-l border-gold/25 pl-0 lg:pl-8">
            <p className="mb-4">
              Rapid digital transformation, strict compliance frameworks like India&apos;s DPDP Act, and remote work structures are exposing massive skill gaps in corporate environments. 
            </p>
            <p>
              Nexara bridges these gaps with diagnostic-driven training models. We focus on measurable competency development rather than simple classroom hour completion.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TRAINING DOMAINS WE COVER (Tabbed Grid) */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto border-t border-goldMuted">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel eyebrow="Curriculum Segments" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            Training Domains We Cover
          </h2>
          <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
            Select a segment to explore our core corporate workshops, compliance audits, and skilling programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 items-start">
          {/* Tab Selection (Left side) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 border-b border-gold/10 lg:border-b-0 whitespace-nowrap lg:whitespace-normal no-scrollbar">
            {domainsData.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`w-auto lg:w-full text-left px-5 py-3.5 rounded font-body text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between border ${
                  activeTab === domain.id
                    ? domain.isFeatured
                      ? "bg-gold text-black border-transparent font-bold"
                      : "bg-[#141414] text-gold border-gold/30 font-semibold"
                    : "text-muted border-transparent hover:text-white hover:bg-surface/40"
                }`}
              >
                <span>{domain.label}</span>
                {domain.isFeatured && (
                  <span className={`ml-2 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                    activeTab === domain.id ? "bg-black text-gold" : "bg-gold/10 text-gold border border-gold/25"
                  }`}>
                    Unique
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content (Right side) */}
          <div className="lg:col-span-8">
            <FadeIn direction="right" duration={0.4} key={activeTab}>
              <div className={`p-8 md:p-10 rounded-2xl border transition-all duration-300 ${
                activeDomain.isFeatured 
                  ? "bg-gradient-to-br from-[#1c180e] to-surface border-gold/45 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.12)]" 
                  : "bg-surface border-gold/15"
              }`}>
                {activeDomain.isFeatured && (
                  <div className="flex items-center gap-2 text-gold mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-body text-[9px] uppercase tracking-widest font-semibold">Our Special Differentiator</span>
                  </div>
                )}
                
                <h3 className="font-display font-semibold text-2xl text-white mb-2">
                  {activeDomain.label}
                </h3>
                <p className="font-body text-xs md:text-sm text-muted mb-8 leading-relaxed">
                  {activeDomain.description}
                </p>

                <div className="space-y-4">
                  {activeDomain.courses.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      <span className="font-body text-xs md:text-sm text-white leading-relaxed">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gold/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="font-body text-[10px] text-muted uppercase tracking-widest">Sponsor Delivery</p>
                    <p className="font-body text-xs text-white mt-1">Available in On-site, Hybrid, & Virtual formats.</p>
                  </div>
                  <Button variant="primary" href="/contact" className="w-full sm:w-auto">
                    Request Course Outline
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. DELIVERY FORMATS */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel eyebrow="Flexible Execution" />
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
              Our Delivery Formats
            </h2>
            <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
              We execute your training where, when, and how your team operates.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "On-Site (At Client Premises)",
                desc: "Facilitators deploy directly to your head office, regional branches, or retreat centers for immersive, hands-on physical bootcamps."
              },
              {
                icon: Video,
                title: "Virtual/Live Online",
                desc: "Real-time, interactive online classrooms utilizing collaborative digital canvases, breakout rooms, and simulated scenarios."
              },
              {
                icon: Layers,
                title: "Hybrid Delivery Models",
                desc: "A composite model featuring on-demand pre-learning packages combined with targeted live coaching and simulation clinics."
              }
            ].map((format, idx) => {
              const Icon = format.icon;
              return (
                <FadeIn key={idx} direction="up" duration={0.5} className="h-full">
                  <div className="h-full bg-surface border border-gold/15 rounded-2xl p-8 hover:border-gold/30 hover:shadow-[0_15px_30px_-15px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-6">
                        <Icon className="w-6 h-6 stroke-[1.25]" />
                      </div>
                      <h3 className="font-display font-medium text-lg md:text-xl text-white mb-3">
                        {format.title}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-muted leading-relaxed">
                        {format.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>

          <div className="text-center mt-12 bg-surface/30 p-6 rounded-lg border border-gold/5 max-w-2xl mx-auto">
            <span className="font-body font-bold text-[10px] text-gold uppercase tracking-widest block mb-1">
              Program Duration Flexibility
            </span>
            <p className="font-body text-xs text-muted leading-relaxed">
              Choose from half-day quick sprints, full-day intensives, or multi-week programs. We offer open workshops and custom built private-label enterprise tracks.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATION, MATERIALS & DOCUMENTATION */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel eyebrow="Compliance-Ready Output" />
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-white tracking-tight">
              Certification, Workbooks &amp; Audit Trail Documentation
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              We provide formal compliance documentation ready for audit filings, especially critical for POSH and Code of Conduct.
            </p>
            <div className="pt-2">
              <Button variant="secondary" href="/contact">
                Review Sample Materials
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: "Individual Certificates",
                desc: "Branded Certificates of Completion detailing program name, date, and facilitator signature."
              },
              {
                icon: BookOpen,
                title: "Structured Workbooks",
                desc: "Professional physical or PDF training handbooks with models, checklists, and references."
              },
              {
                icon: FileText,
                title: "Pre/Post Assessments",
                desc: "Individual assessments demonstrating learning growth for L&D metric dashboards."
              },
              {
                icon: FileCheck,
                title: "Audit Compliance Files",
                desc: "Official attendance sheets and statutory compliance records required for annual board filings."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-surface border border-gold/15 p-6 rounded-lg space-y-4">
                  <div className="w-10 h-10 rounded bg-gold/5 border border-gold/25 flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h4 className="font-body font-bold text-xs uppercase tracking-widest text-white">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR TRAINERS */}
      <section className="py-24 md:py-32 bg-[#141414]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionLabel eyebrow="Facilitator Vetting" />
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight">
              Facilitators with Real-World Domain Authority
            </h2>
            <p className="font-body text-sm md:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Our empanelled trainers have **10 to 25 years of industry experience**. We cross-match trainers to your sector (e.g. BFSI, Manufacturing, Tech) and run vetting sample sessions prior to course assignment.
            </p>
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel eyebrow="Implementation Pathway" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            The Training Lifecycle
          </h2>
          <p className="font-body text-sm md:text-base text-muted mt-4 leading-relaxed">
            Six structured stages to ensure the training drives organizational performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pt-4">
          {[
            {
              step: "01",
              title: "Diagnostic",
              desc: "Briefing calls to identify compliance gaps, business context, and language needs."
            },
            {
              step: "02",
              title: "Design",
              desc: "Developing custom case studies, roleplays, and sector-matched materials."
            },
            {
              step: "03",
              title: "Matching",
              desc: "Assigning the certified facilitator with direct industry tenure."
            },
            {
              step: "04",
              title: "Delivery",
              desc: "Executing the program on-site, virtually, or through hybrid panels."
            },
            {
              step: "05",
              title: "Certification",
              desc: "Administering pre/post tests and distributing completion certificates."
            },
            {
              step: "06",
              title: "Reporting",
              desc: "Delivering outcomes, L&D metrics, and compliance logs to sponsors."
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="w-12 h-12 rounded-full border border-gold/30 bg-surface flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-gold">
                <span className="font-display font-semibold text-sm text-gold">{item.step}</span>
              </div>
              <h4 className="font-body font-bold text-xs uppercase tracking-widest text-white mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h4>
              <p className="font-body text-xs text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHY CHOOSE NEXARA FOR CORPORATE TRAINING */}
      <section className="py-24 md:py-32 bg-[#110E07]/75 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel eyebrow="Nexara Differentiators" />
              <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight">
                G20-Level Standards for Your Organization
              </h2>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                We bring the same precision, security, and global fluency required at diplomatic summits straight to your corporate training floor.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Multilingual & Cross-Cultural",
                  desc: "Unique capacity to train in regional and major foreign languages, backed by our core interpretation desk."
                },
                {
                  title: "Industry-Certified Facilitators",
                  desc: "Facilitators vetted through direct senior corporate or diplomatic tenure."
                },
                {
                  title: "Compliance-Ready Documentation",
                  desc: "Audit-ready participant certs and logs included in standard pricing, not an add-on."
                },
                {
                  title: "Fully Customized Materials",
                  desc: "Content customized to your sector regulations, corporate ethics, and seniority."
                },
                {
                  title: "Single Point of Contact",
                  desc: "Account managers handle everything from needs diagnostic to final reporting."
                },
                {
                  title: "Tuitioned Infrastructure",
                  desc: "Backed by Tuitioned's extensive pedagogical, technical, and educational heritage."
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

      {/* 9. INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto text-center">
        <SectionLabel eyebrow="Sectors We Train" />
        <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mb-16 mt-2">
          Trusted Across Corporate Sectors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {[
            { label: "Corporate", icon: Briefcase },
            { label: "Government", icon: Landmark },
            { label: "Education", icon: GraduationCap },
            { label: "Healthcare", icon: HeartPulse },
            { label: "Technology", icon: Cpu },
            { label: "BFSI & Finance", icon: Coins },
            { label: "Export & Mfg.", icon: Building }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center p-6 bg-surface border border-gold/10 rounded-lg">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-3 bg-black">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-body text-[10px] text-white uppercase tracking-wider">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. TESTIMONIAL / SOFT CREDIBILITY */}
      <section className="relative py-24 md:py-32 bg-gold/[0.01] border-y border-goldMuted overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-[10px] text-gold uppercase tracking-[0.2em] font-semibold block mb-6">
            Nexara Quality Standards
          </span>
          <p className="font-display italic text-lg md:text-2xl text-white leading-relaxed mb-6">
            &ldquo;We manage our corporate training workshops with the same rigorous protocols and subject-matter alignment that power our interpretation desk at international summits and bilateral state meetings.&rdquo;
          </p>
          <p className="font-body text-xs text-muted uppercase tracking-[0.15em]">
            Backed by the Elite Standard of Nexara Global Services
          </p>
        </div>
      </section>

      {/* 11. FAQ SNIPPET */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel eyebrow="L&D Advisory" />
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-white tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border-t border-goldMuted">
          {[
            {
              question: "Do you provide corporate training in regional Indian or foreign languages?",
              answer: "Yes. Due to our extensive translation and interpretation network, we can deliver statutory POSH training, safety protocols, and behavioral workshops in Hindi, Tamil, Telugu, Marathi, and other regional languages. We also provide language-learning tracks for business French, German, Japanese, Arabic, and Mandarin."
            },
            {
              question: "Is your POSH training compliant and audit-ready under statutory guidelines?",
              answer: "Absolutely. Our POSH (Prevention of Sexual Harassment) modules meet all compliance guidelines in India. We provide branded completion certificates for every employee, special certificates for Internal Committee (IC) members, attendance registers, and a summary report suitable for inclusion in your corporate annual compliance filings."
            },
            {
              question: "Can courses be customized to our specific industry vertical?",
              answer: "Yes. We do not use templated decks. During our initial diagnostics phase, we customize the case studies, role-play scenarios, and language requirements to match your industry sector (e.g. BFSI regulations, automotive quality standards, tech cybersecurity hygiene, etc.)."
            },
            {
              question: "Do participants receive course materials and completion documentation?",
              answer: "Yes, every participant receives a workbook/handbook (PDF or high-end print) containing the training frameworks, cheat sheets, and templates. Participants who complete the course and pass the post-assessment receive a branded Certificate of Completion signed by their vetted facilitator."
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

      {/* 12. CLOSING CTA */}
      <section className="py-24 text-center px-6 border-t border-goldMuted bg-[#110E07]/50 relative z-10">
        <FadeIn direction="up" duration={0.8}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-white tracking-tight leading-tight">
              Unsure Which Training Your Team Needs?
            </h2>
            <p className="font-body text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed pb-6">
              Book a free 30-minute training needs diagnostic call with our corporate advisors. Let us draft a customized skilling outline for your workforce.
            </p>
            <Button variant="primary" href="/contact">
              Book a Diagnostic Call
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* 13. CROSS-LINK TEASER */}
      <section className="py-16 px-6 bg-black border-t border-gold/15">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display text-white text-lg font-medium mb-1">Planning a major global event or summit?</h4>
            <p className="font-body text-xs text-muted">We provide G20-level simultaneous and consecutive interpretation services with complete equipment setup.</p>
          </div>
          <Button variant="secondary" href="/services/interpretation" className="shrink-0">
            Explore Interpretation Services &rarr;
          </Button>
        </div>
      </section>
    </div>
  );
}
