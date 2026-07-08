"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

interface LinkItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const links: LinkItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Overview", href: "/services" },
      { name: "Interpretation Services", href: "/services/interpretation" },
      { name: "Corporate Training", href: "/services/corporate-training" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Languages", href: "/languages" },
  { name: "Careers", href: "/career" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
              if (link.submenu) {
                const isActive = pathname.startsWith(link.href);
                return (
                  <div key={link.name} className="relative group/dropdown py-4">
                    <button
                      className={cn(
                        "flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-body transition-colors duration-300 pb-1 cursor-pointer focus:outline-none",
                        isActive ? "text-gold" : "text-muted hover:text-white"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/dropdown:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-[#141414] border border-gold/15 p-2 rounded shadow-2xl backdrop-blur-xl flex flex-col gap-1">
                        {link.submenu.map((subitem) => {
                          const isSubActive = pathname === subitem.href;
                          return (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={cn(
                                "px-4 py-2.5 text-[10px] uppercase tracking-widest font-body rounded transition-all duration-200 text-left hover:bg-gold/10 hover:text-white block",
                                isSubActive ? "text-gold bg-gold/5" : "text-muted"
                              )}
                            >
                              {subitem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
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
                if (link.submenu) {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <div key={link.name} className="w-full flex flex-col items-center animate-none">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          "flex items-center gap-2 text-xl uppercase tracking-[0.2em] font-body transition-colors duration-300 focus:outline-none",
                          isActive ? "text-gold" : "text-muted hover:text-white"
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={shouldReduceMotion ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden flex flex-col items-center gap-4 mt-4 w-full bg-surface/30 py-3 rounded border border-gold/5"
                          >
                            {link.submenu.map((subitem) => {
                              const isSubActive = pathname === subitem.href;
                              return (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className={cn(
                                    "text-sm uppercase tracking-[0.15em] font-body transition-colors duration-300 py-1",
                                    isSubActive ? "text-gold font-semibold" : "text-muted hover:text-white"
                                  )}
                                >
                                  {subitem.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
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
