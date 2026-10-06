"use client";

import { motion } from "motion/react";

const items = [
  { label: "New lead", value: 32, color: "bg-blue-500" },
  { label: "Qualified", value: 18, color: "bg-blue-500" },
  { label: "Proposal", value: 9, color: "bg-blue-500" },
  { label: "Won", value: 6, color: "bg-emerald-400" },
];

export function PipelineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: 0.3 + index * 0.1,
            }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
                className={`h-2 w-2 rounded-full ${item.color}`}
              />

              <span className="text-xs text-slate-500">{item.label}</span>
            </div>

            <span className="text-xs font-semibold text-slate-800">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
