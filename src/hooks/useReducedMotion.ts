"use client";

import { useState, useEffect } from "react";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

export function useReducedMotion() {
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useFramerReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? !!shouldReduce : false;
}
