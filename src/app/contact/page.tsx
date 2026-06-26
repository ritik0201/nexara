"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Globe, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

const contactHeroBg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCtfyzhi8shfP9UkZS3eYcWmaWj__nlzeaUMJrZnkrSG5okl4nitXic0hGu9FBKPLkA2RsVyYZ3E4QhEOnitMB3HHhOhciMOQfygszgxjHAWM6jiT_2Ssq4neMLVAolOkcgrHjeMJVuAaHTZxvQx3yFeSgeLHMTFk_I_hp0Zhb3fUaUijoNjAjKgn-LCZdy8tBp39fbsgLhXOZABsb3yKSt0BORH0L2iRt8PQcx68EBrpSiy_1AiCl0kVw9yOSTowrxOJY9Z3GlSvU";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Event date is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      eventType: "Corporate Summit",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setResponseMsg(result.message || "Thank you. Your message has been received.");
        reset();
      } else {
        setStatus("error");
        setResponseMsg(result.error || "Form submission failed. Please try again.");
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
        backgroundImage={contactHeroBg}
        eyebrow="Get In Touch"
        heading="Let's Plan Your Next Global Event"
        subtext="Tailored language solutions and logistical precision for the world's most demanding stakeholders."
        compact
      />

      {/* Main Form & Info Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-surface/90 backdrop-blur-md border border-gold/15 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
            <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-8">
              Submit an Inquiry
            </h3>

            {status === "success" && (
              <div className="mb-8 p-6 bg-gold/10 border border-gold/30 rounded-lg flex items-start gap-4 text-gold">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider">Inquiry Received</h4>
                  <p className="font-body text-xs mt-1 text-muted leading-relaxed">{responseMsg}</p>
                  <Button variant="secondary" onClick={() => setStatus("idle")} className="mt-4 px-4 py-2 text-[10px]">
                    Send Another message
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
                      placeholder="Johnathan Doe"
                      {...register("name")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Global Enterprises Ltd."
                      {...register("organization")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.organization && (
                      <span className="text-[10px] text-red-400 block">{errors.organization.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="j.doe@organization.com"
                      {...register("email")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 placeholder:text-goldMuted transition-colors duration-300"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 block">{errors.email.message}</span>
                    )}
                  </div>

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Event Type
                    </label>
                    <select
                      {...register("eventType")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 transition-colors duration-300 appearance-none [&>option]:bg-surface [&>option]:text-white"
                    >
                      <option value="Corporate Summit">Corporate Summit</option>
                      <option value="Diplomatic Conference">Diplomatic Conference</option>
                      <option value="NGO Workshop">NGO Workshop</option>
                      <option value="Bespoke Hospitality">Bespoke Hospitality</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                      Event Date
                    </label>
                    <input
                      type="date"
                      {...register("eventDate")}
                      className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold py-2 text-white focus:ring-0 transition-colors duration-300"
                    />
                    {errors.eventDate && (
                      <span className="text-[10px] text-red-400 block">{errors.eventDate.message}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-body text-[10px] md:text-xs text-muted uppercase tracking-widest block">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we assist with your global event requirements?"
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
                    {status === "submitting" ? "Sending Request..." : "Send Request"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 space-y-12 lg:pl-10">
            <div className="space-y-8">
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      Email Inquiry
                    </h4>
                    <p className="font-body text-base text-white mt-1">concierge@nexara.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      Direct Liaison
                    </h4>
                    <p className="font-body text-base text-white mt-1">+91 11 4050 9000</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-xs text-gold uppercase tracking-widest">
                      Gurgaon Head Office
                    </h4>
                    <p className="font-body text-xs md:text-sm text-white mt-1 leading-relaxed">
                      Level 14, The Oberoi Centre, DLF Cyber City, Phase III, Gurgaon, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-goldMuted space-y-4">
                <p className="font-body italic text-xs text-muted">
                  &ldquo;Excellence is not an act, but a habit.&rdquo; &mdash; 24/7 support availability for active summit deployments.
                </p>
                <Button variant="secondary" href="tel:+911140509000">
                  Liaison Support Call
                </Button>
              </div>
            </div>

            {/* Stylized SVG Map Illustration */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gold/15 bg-[#0A0A0A]/75 backdrop-blur-md flex items-center justify-center" data-cursor-text="MAP">
              <svg className="w-3/4 h-3/4 opacity-60" viewBox="0 0 400 200">
                <path 
                  d="M50 150 Q100 50 200 100 T350 50" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeDasharray="8 4" 
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="100" fill="#D4AF37" r="4" />
                <circle cx="200" cy="100" fill="none" r="10" stroke="#D4AF37" strokeWidth="1" className="animate-ping origin-center" />
              </svg>
              <div className="absolute bottom-4 left-4 text-[9px] text-gold/60 tracking-widest uppercase font-body">
                Global Operations Map | DLF Cyber City
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect Strip */}
      <section className="bg-[#0F0F0F]/75 backdrop-blur-md py-24 px-6 md:px-10 lg:px-20 border-y border-goldMuted relative z-10">
        <div className="max-w-container-max-width mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Event Companies",
                desc: "Scalable simultaneous interpretation and liaison squads for international trade expos and corporate summits.",
                sla: "Est. Response: 2 Hours"
              },
              {
                icon: Briefcase,
                title: "Corporates & Govt",
                desc: "Secure, confidential translation services for bilateral trade agreements and quarterly board assemblies.",
                sla: "Priority Support: Instant"
              },
              {
                icon: Globe,
                title: "Embassies & NGOs",
                desc: "Expert cultural mediation and localized language training support for international global outreach programs.",
                sla: "Est. Response: 4 Hours"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} direction="up" delay={idx * 0.1} duration={0.6}>
                  <div data-cursor-text="DIRECT" className="h-full">
                    <Card className="h-full flex flex-col justify-between" glow={idx === 1}>
                    <div className="space-y-4">
                      <div className="text-gold">
                        <Icon className="w-8 h-8 stroke-[1.25]" />
                      </div>
                      <h3 className="font-display font-medium text-lg md:text-xl text-white">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-goldMuted/20">
                      <span className="font-body text-[10px] text-gold uppercase tracking-widest font-semibold">
                        {item.sla}
                      </span>
                    </div>
                    </Card>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Final Trust Band */}
      <section className="py-16 px-6">
        <div className="max-w-container-max-width mx-auto flex items-center justify-center gap-6">
          <span className="h-[1px] bg-goldMuted flex-grow max-w-[150px] hidden md:block" />
          <p className="font-display italic text-lg md:text-xl text-muted text-center max-w-2xl leading-relaxed">
            Trusted by summit organizers across India and beyond for over a decade.
          </p>
          <span className="h-[1px] bg-goldMuted flex-grow max-w-[150px] hidden md:block" />
        </div>
      </section>
    </div>
  );
}
