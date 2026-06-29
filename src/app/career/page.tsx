"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  XCircle,
  Award,
  BookOpen,
  Send,
  FileText,
  UserCheck
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const careerHeroBg = "https://images.unsplash.com/photo-1521791136368-1a8682707636?auto=format&fit=crop&w=1920&q=80";

// Validation schema
const careerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  nativeLanguage: z.string().min(2, "Please enter your native language(s)"),
  otherLanguages: z.string().min(2, "Please describe your other known language skills"),
  specialization: z.string().min(1, "Please select your primary specialization"),
  experience: z.string().min(1, "Please select your years of experience"),
  resumeLink: z.string().url("Please provide a valid resume or portfolio URL (Google Drive, LinkedIn, Dropbox etc.)"),
  message: z.string().min(10, "Cover letter must be at least 10 characters"),
});

type CareerFormValues = z.infer<typeof careerSchema>;

export default function CareerPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      specialization: "Simultaneous Interpretation",
      experience: "4-7 Years",
    }
  });

  const onSubmit = async (data: CareerFormValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setResponseMsg(result.message || "Thank you. Your career application has been successfully submitted.");
        reset();
      } else {
        setStatus("error");
        setResponseMsg(result.error || "Application submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("An unexpected network error occurred.");
    }
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHero
        backgroundImage={careerHeroBg}
        eyebrow="Careers at Nexara"
        heading="Join the Elite Network of Global Linguists"
        subtext="We recruit highly talented translators, simultaneous interpreters, and cultural consultants for high-stakes international operations."
        compact
      />

      {/* Core Recruitment & Application Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Application Form */}
          <div className="lg:col-span-7 bg-surface/90 backdrop-blur-md border border-gold/15 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
            <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-2">
              Linguist Application Form
            </h3>
            <p className="font-body text-xs text-muted leading-relaxed mb-8">
              Submit your credentials and known language skills to join our vetted global registry.
            </p>

            {status === "success" && (
              <div className="mb-8 p-6 bg-gold/10 border border-gold/30 rounded-lg flex items-start gap-4 text-gold animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider">Application Received</h4>
                  <p className="font-body text-xs mt-1 text-muted leading-relaxed">{responseMsg}</p>
                  <Button variant="secondary" onClick={() => setStatus("idle")} className="mt-4 px-4 py-2 text-[10px]">
                    Submit Another Application
                  </Button>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-8 p-6 bg-red-950/20 border border-red-500/30 rounded-lg flex items-start gap-4 text-red-400">
                <XCircle className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider">Submission Error</h4>
                  <p className="font-body text-xs mt-1 leading-relaxed">{responseMsg}</p>
                </div>
              </div>
            )}

            {status !== "success" && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alexander Mercer"
                      {...register("name")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="a.mercer@nexara.global"
                      {...register("email")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 block">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 block">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Native Language */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Native Language(s)
                    </label>
                    <input
                      type="text"
                      placeholder="English, French"
                      {...register("nativeLanguage")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.nativeLanguage && (
                      <span className="text-[10px] text-red-400 block">{errors.nativeLanguage.message}</span>
                    )}
                  </div>
                </div>

                {/* Known Language Skills */}
                <div className="space-y-2">
                  <label className="font-body text-[10px] md:text-xs text-gold uppercase tracking-widest block font-bold">
                    Fluent Languages & Known Translation Skills
                  </label>
                  <input
                    type="text"
                    placeholder="Mandarin (C2 - Certified), German (C1 - Conference Interpreter)"
                    {...register("otherLanguages")}
                    className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                  />
                  {errors.otherLanguages && (
                    <span className="text-[10px] text-red-400 block">{errors.otherLanguages.message}</span>
                  )}
                  <p className="text-[10px] text-muted leading-relaxed mt-1">
                    List any additional languages, corresponding fluency levels, and certifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Specialization */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Primary Specialization
                    </label>
                    <select
                      {...register("specialization")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 transition-colors duration-300 appearance-none [&>option]:bg-surface [&>option]:text-white"
                    >
                      <option value="Simultaneous Interpretation">Simultaneous Interpretation</option>
                      <option value="Consecutive Interpretation">Consecutive Interpretation</option>
                      <option value="Document Localization">Document Localization</option>
                      <option value="Linguistic Consulting & Diplomacy">Linguistic Consulting & Diplomacy</option>
                      <option value="Bilingual Facilitation">Bilingual Facilitation</option>
                    </select>
                  </div>

                  {/* Years of Experience */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Years of Experience
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 transition-colors duration-300 appearance-none [&>option]:bg-surface [&>option]:text-white"
                    >
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="4-7 Years">4-7 Years</option>
                      <option value="8-12 Years">8-12 Years</option>
                      <option value="13+ Years">13+ Years (Expert Liaison)</option>
                    </select>
                  </div>
                </div>

                {/* Resume/Portfolio URL */}
                <div className="space-y-2">
                  <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                    Resume / CV Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/file/d/.../view"
                    {...register("resumeLink")}
                    className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                  />
                  {errors.resumeLink && (
                    <span className="text-[10px] text-red-400 block">{errors.resumeLink.message}</span>
                  )}
                  <p className="text-[10px] text-muted leading-relaxed mt-1">
                    Provide a link to your resume/CV (Google Drive, LinkedIn profile, Dropbox, or personal website). Ensure sharing settings allow external viewing.
                  </p>
                </div>

                {/* Cover Letter / Message */}
                <div className="space-y-2">
                  <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                    Linguistic Experience & Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly introduce yourself, details of your past major deployments (e.g. summits, diplomatic interpretation), and why you wish to join Nexara."
                    {...register("message")}
                    className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted resize-none transition-colors duration-300"
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 block">{errors.message.message}</span>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "submitting"}
                    className="w-full md:w-auto"
                  >
                    {status === "submitting" ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 space-y-12 lg:pl-10">
            <div className="space-y-8">
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-white">
                Why Join Nexara?
              </h2>
              
              <div className="space-y-6">
                {/* Prestige */}
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      High-Stakes Projects
                    </h4>
                    <p className="font-body text-xs text-muted mt-1 leading-relaxed">
                      Deliver simultaneous interpretation and document localization for international embassies, head-of-state diplomatic assemblies, and Fortune 500 corporate summits.
                    </p>
                  </div>
                </div>

                {/* Autonomy */}
                <div className="flex items-start gap-4">
                  <UserCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      Flexible Engagements
                    </h4>
                    <p className="font-body text-xs text-muted mt-1 leading-relaxed">
                      Operate on an assignment basis. Choose virtual deployments or on-site assignments in premium venues globally.
                    </p>
                  </div>
                </div>

                {/* Rates */}
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      Elite Compensation
                    </h4>
                    <p className="font-body text-xs text-muted mt-1 leading-relaxed">
                      We offer market-leading daily honorariums and translation rates, respecting the intensive expertise and cognitive demand of professional translation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-goldMuted space-y-4">
                <h4 className="font-body font-bold text-xs text-gold uppercase tracking-widest">
                  Current Target Profiles
                </h4>
                <ul className="space-y-2 font-body text-xs text-muted leading-relaxed list-disc list-inside">
                  <li>Simultaneous Interpreters (UN Grade preferred)</li>
                  <li>Legal & Technical Certified Translators</li>
                  <li>Cultural Localization Consultants</li>
                  <li>Bilingual Conference Mediators</li>
                </ul>
              </div>
            </div>

            {/* Language Showcase Card */}
            <div className="relative w-full p-8 rounded-xl border border-gold/15 bg-[#0A0A0A]/75 backdrop-blur-md space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold" />
                <h4 className="font-display font-medium text-sm text-white uppercase tracking-wider">
                  In-Demand Languages
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[
                  "Mandarin", "Spanish", "French", "Arabic", "Japanese", 
                  "German", "Russian", "Hindi", "Korean", "Portuguese", 
                  "Italian", "Turkish", "Dutch", "Vietnamese"
                ].map((lang) => (
                  <span 
                    key={lang}
                    className="px-3 py-1 bg-gold/5 border border-gold/15 rounded-md text-[10px] text-gold font-body tracking-wider"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-muted italic leading-relaxed">
                *While these represent our core requests, certified linguists of all global language combinations are encouraged to apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote Band */}
      <section className="py-16 px-6 border-t border-goldMuted bg-[#0F0F0F]/30">
        <div className="max-w-container-max-width mx-auto flex items-center justify-center gap-6">
          <span className="h-[1px] bg-goldMuted flex-grow max-w-[150px] hidden md:block" />
          <p className="font-display italic text-base md:text-lg text-muted text-center max-w-2xl leading-relaxed">
            Connecting cultures, securing understanding. Join Nexara to power international cooperation.
          </p>
          <span className="h-[1px] bg-goldMuted flex-grow max-w-[150px] hidden md:block" />
        </div>
      </section>
    </div>
  );
}
