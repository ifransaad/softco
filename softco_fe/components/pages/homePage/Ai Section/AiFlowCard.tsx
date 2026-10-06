"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const flowCardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

type AiFlowCardProps = {
  number: number;
  title: string;
  description: string;
  className?: string;
};

export function AiFlowCard({
  number,
  title,
  description,
  className,
}: AiFlowCardProps) {
  return (
    <motion.div
      variants={flowCardVariants}
      whileHover={{
        y: -4,
        borderColor: "rgba(34,211,238,0.35)",
        boxShadow: "0 14px 40px rgba(34,211,238,0.08)",
      }}
      className={cn(
        "relative z-10 min-h-[108px] rounded-2xl border border-blue-400/20 bg-[#0b1729]/95 p-4 backdrop-blur-sm",
        className,
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-400">
        {number} {title}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </motion.div>
  );
}
