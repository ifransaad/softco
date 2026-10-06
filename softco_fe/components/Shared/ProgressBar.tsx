"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const accentMap = {
  cyan: "bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]",
  blue: "bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.85)]",
  emerald: "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]",
  purple: "bg-violet-500 shadow-[0_0_14px_rgba(139,92,246,0.85)]",
};

export function ProgressBar({
  progress,
  accent = "cyan",
  delay = 0.9,
}: {
  progress: number;
  accent?: keyof typeof accentMap;
  delay?: number;
}) {
  return (
    <div className="mt-3 h-[4px] w-12 overflow-hidden rounded-full bg-white/8">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn("h-full rounded-full", accentMap[accent])}
      />
    </div>
  );
}
