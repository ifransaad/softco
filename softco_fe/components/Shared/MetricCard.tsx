"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlowPanel } from "./GlowPanel";
import { ProgressBar } from "./ProgressBar";

const dotMap = {
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
  blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]",
  emerald: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]",
  purple: "bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.9)]",
};

export function MetricCard({
  title,
  subtitle,
  progress,
  accent = "cyan",
  eyebrow,
  bigValue,
  statusText,
  emphasis = false,
}: {
  title?: string;
  subtitle?: string;
  progress?: number;
  accent?: keyof typeof dotMap;
  eyebrow?: string;
  bigValue?: string;
  statusText?: string;
  emphasis?: boolean;
}) {
  if (emphasis) {
    return (
      <GlowPanel className="min-h-[142px]">
        <div className="space-y-3">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-cyan-400">
            {eyebrow}
          </p>

          <h3 className="text-5xl font-semibold tracking-[-0.04em] text-white">
            {bigValue}
          </h3>

          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <motion.span
              className={cn("h-2.5 w-2.5 rounded-full", dotMap.emerald)}
              initial={{ opacity: 0.35 }}
              whileInView={{ opacity: [0.35, 1, 0.35] }}
              viewport={{ once: false }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>{statusText}</span>
          </div>
        </div>
      </GlowPanel>
    );
  }

  return (
    <GlowPanel className="min-h-[116px]">
      <div className="flex h-full flex-col justify-center">
        <h3 className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-base text-slate-400">{subtitle}</p>

        <ProgressBar progress={progress ?? 0} accent={accent} />
      </div>
    </GlowPanel>
  );
}
