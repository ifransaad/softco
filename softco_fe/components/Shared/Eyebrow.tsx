"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  dotClassName?: string;
  pulse?: boolean;
};

export function Eyebrow({
  children,
  className,
  dotClassName,
  pulse = true,
}: EyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5",
        className,
      )}
    >
      <motion.span
        className={cn("h-1.5 w-1.5 rounded-full bg-cyan-400", dotClassName)}
        animate={
          pulse
            ? {
                opacity: [1, 0.35, 1],
                boxShadow: [
                  "0 0 6px rgba(34,211,238,.5)",
                  "0 0 14px rgba(34,211,238,1)",
                  "0 0 6px rgba(34,211,238,.5)",
                ],
              }
            : undefined
        }
        transition={
          pulse
            ? {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      <span className="text-[10px] font-medium uppercase tracking-wide text-slate-300">
        {children}
      </span>
    </motion.div>
  );
}
