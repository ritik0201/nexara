import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Divider from "../ui/Divider";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-goldMuted mt-auto">
      <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-tighter text-white hover:text-gold transition-colors duration-300"
          >
            NEXARA
          </Link>
          <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
            The elite standard in global language solutions, simultaneous interpretation, and cultural diplomacy since 1994.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gold">
            Quick Links
          </h4>
          <ul className="space-y-3 font-body text-sm text-muted">
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                Our Legacy
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-gold transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gold transition-colors">
                FAQ Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="space-y-6">
          <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gold">
            Services
          </h4>
          <ul className="space-y-3 font-body text-sm text-muted">
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Simultaneous Interpretation
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Document Localization
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Corporate Training
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-gold transition-colors">
                Linguistic Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gold">
            Contact Info
          </h4>
          <ul className="space-y-3 font-body text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <span>Level 14, The Oberoi Centre, DLF Cyber City, Phase III, Gurgaon, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:concierge@nexara.in" className="hover:text-gold transition-colors">
                concierge@nexara.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+911140509000" className="hover:text-gold transition-colors">
                +91 11 4050 9000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-goldMuted font-body text-xs text-muted opacity-80 gap-4">
          <p>&copy; {new Date().getFullYear()} Nexara Powered by Tuitioned. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
