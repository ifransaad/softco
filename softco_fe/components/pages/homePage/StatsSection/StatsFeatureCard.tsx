"use client";

import { motion } from "motion/react";

export function StatsFeatureCard({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "blue" | "violet";
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
      }}
      transition={{ duration: 0.25 }}
      className="h-full rounded-[24px] border border-slate-200 bg-slate-50 p-6"
    >
      <p className="text-[34px] font-bold tracking-wide text-[#090E17] ">
        {eyebrow}
      </p>

      <h3 className="mt-4 max-w-[280px] text-sm font-semibold leading-tight tracking-[-0.03em] text-blue-500">
        {title}
      </h3>

      <p className="mt-4 max-w-[360px] text-sm leading-6 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}
