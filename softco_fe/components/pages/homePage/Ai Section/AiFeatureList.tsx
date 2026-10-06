"use client";

import { motion } from "motion/react";

const features = [
  "Internal copilots",
  "Document intelligence",
  "Lead & support automation",
  "Workflow agents",
  "Semantic search / RAG",
];

export function AiFeatureList() {
  return (
    <div className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <div
          key={feature}
          className="flex items-center gap-3 text-sm text-slate-300 sm:text-base"
        >
          <motion.span
            className="h-2 w-2 shrink-0 rounded-full bg-cyan-400"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 4px rgba(34,211,238,.35)",
                "0 0 12px rgba(34,211,238,.95)",
                "0 0 4px rgba(34,211,238,.35)",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: index * 0.14,
              ease: "easeInOut",
            }}
          />

          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
