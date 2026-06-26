"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text" | "hidden">("default");
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch/flicker
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Position of cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor positioning
  const springConfig = { damping: 40, stiffness: 400, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Check if device supports hover (coarse pointers like touch screens should hide custom cursor)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Reset cursor style on route change to prevent getting stuck in pointer/text states
  useEffect(() => {
    setCursorType("default");
    setCursorText("");
  }, [pathname]);

  useEffect(() => {
    if (isMobile) return;

    // Hide default cursor globally
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find closest element with custom cursor attributes
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      const hoverTextElement = target.closest("[data-cursor-text]") as HTMLElement | null;

      if (hoverTextElement) {
        setCursorType("text");
        setCursorText(hoverTextElement.getAttribute("data-cursor-text") || "");
      } else if (clickable) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeaveWindow = () => {
      setCursorType("hidden");
    };

    const handleMouseEnterWindow = () => {
      setCursorType("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isMobile]);

  // Variant animations for cursor sizes and shapes
  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: "#D4AF37", // Gold
      border: "0px solid transparent",
      borderRadius: "50%",
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(212, 175, 55, 0.1)", // Translucent gold fill
      border: "1.5px solid #D4AF37", // Gold border
      borderRadius: "50%",
    },
    text: {
      width: 80,
      height: 32,
      backgroundColor: "#D4AF37",
      border: "0px solid transparent",
      borderRadius: "16px",
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    }
  };

  const ringVariants = {
    default: {
      width: 28,
      height: 28,
      borderColor: "#D4AF37",
      opacity: 0.6,
      scale: 1,
    },
    pointer: {
      width: 60,
      height: 60,
      borderColor: "#F5E09A", // Lighter gold
      opacity: 0.8,
      scale: 1.1,
    },
    text: {
      width: 90,
      height: 42,
      borderColor: "#D4AF37",
      opacity: 0.3,
      scale: 1.05,
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    }
  };

  if (isMobile) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 99999,
          borderWidth: cursorType === "hidden" ? 0 : 1,
          borderStyle: "solid",
          borderRadius: cursorType === "text" ? "20px" : "50%",
          willChange: "transform, width, height",
        }}
        animate={cursorType}
        variants={ringVariants}
        transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.8 }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 100000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: cursorType === "text" ? "0 4px 20px rgba(0,0,0,0.3)" : "0 0 12px rgba(212,175,55,0.2)",
          willChange: "transform, width, height",
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.5 }}
      >
        {cursorType === "text" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.2 }}
            className="font-body text-[9px] font-bold text-black uppercase tracking-[0.2em] whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
