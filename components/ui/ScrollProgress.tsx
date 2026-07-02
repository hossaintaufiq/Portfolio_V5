"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"
      style={{ scaleX }}
    />
  );
}
