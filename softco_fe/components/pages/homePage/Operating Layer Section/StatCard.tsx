"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const accentMap = {
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
};

export function StatCard({
  value,
  label,
  accent = "cyan",
  delay = 0,
}: {
  value: string;
  label: string;
  accent?: keyof typeof accentMap;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-blue-400/15 bg-[#08111f] p-4"
    >
      <p className="text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">{label}</p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.15 }}
        className={cn(
          "mt-3 h-[2px] w-14 origin-left rounded-full",
          accentMap[accent],
        )}
      />
    </motion.div>
  );
}
