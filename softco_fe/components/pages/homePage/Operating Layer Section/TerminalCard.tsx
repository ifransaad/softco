"use client";

import { motion } from "motion/react";

const lines = [
  "✓ enriched context",
  "✓ opportunity created",
  "✓ owner assigned",
  "✓ follow-up drafted",
];

export function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="rounded-2xl border border-blue-400/20 bg-[#06101c] p-4 sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-500" />
        <span className="h-2 w-2 rounded-full bg-slate-500" />
        <span className="h-2 w-2 rounded-full bg-slate-500" />

        <span className="ml-2 text-[10px] text-slate-500">
          softco/automation-runner
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="font-mono text-xs text-cyan-400"
      >
        › qualify_lead --source=web --score=70
      </motion.p>

      <div className="mt-3 space-y-1.5">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: 0.55 + index * 0.12,
            }}
            className="font-mono text-xs text-slate-400"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
