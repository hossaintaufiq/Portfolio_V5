"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.10),transparent_40%)]" />
      <motion.div
        className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"
        animate={{ x: ["-8%", "8%", "-8%"], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-[10%] h-[28rem] w-[28rem] rounded-full bg-violet-400/10 blur-3xl"
        animate={{ x: ["0%", "-10%", "0%"], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:46px_46px] opacity-20" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
}
