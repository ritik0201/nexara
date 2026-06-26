"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Languages", href: "/languages" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 flex items-center",
          scrolled
            ? "h-16 bg-surface/90 backdrop-blur-xl border-b border-gold/15"
            : "bg-transparent"
        )}
      >
        <div className="w-full max-w-container-max-width mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
          <Link
            href="/"
            className="font-display font-bold text-lg md:text-xl tracking-tighter text-white hover:text-gold transition-colors duration-300"
          >
            NEXARA
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative group text-xs uppercase tracking-[0.15em] font-body transition-colors duration-300 pb-1",
                    isActive ? "text-gold" : "text-muted hover:text-white"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex">
            <Button variant="primary" href="/contact">
              Request a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center p-6 lg:hidden"
          >
            <motion.div
              initial={shouldReduceMotion ? { y: 0 } : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { y: 0 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center gap-8 w-full max-w-sm"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl uppercase tracking-[0.2em] font-body transition-colors duration-300",
                      isActive ? "text-gold" : "text-muted hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-full mt-4 flex justify-center">
                <Button
                  variant="primary"
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center"
                >
                  Request Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
