"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlowPanel } from "./GlowPanel";

const colorMap = {
  blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]",
  emerald: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]",
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
  purple: "bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.9)]",
};

export function FlowList({
  title,
  items,
}: {
  title: string;
  items: { label: string; color: keyof typeof colorMap }[];
}) {
  return (
    <GlowPanel className="min-h-[150px]">
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-cyan-400">
        {title}
      </p>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="flex items-center gap-3 text-base text-slate-300"
          >
            <motion.span
              className={cn("h-2.5 w-2.5 rounded-full", colorMap[item.color])}
              initial={{ opacity: 0.35, scale: 0.95 }}
              whileInView={{
                opacity: [0.35, 1, 0.35],
                scale: [0.95, 1.15, 0.95],
              }}
              viewport={{ once: false }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </GlowPanel>
  );
}
