"use client";

import { motion } from "motion/react";

const pathTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function AiFlowConnectors() {
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      {/* 1 -> 2 -> 3 */}
      <motion.path
        d="M250 120 H500 H745"
        fill="none"
        stroke="rgba(59,130,246,.9)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ...pathTransition,
          delay: 1.05,
        }}
      />

      {/* 2 -> 4 */}
      <motion.path
        d="M500 120 V330 H315"
        fill="none"
        stroke="rgba(59,130,246,.9)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ...pathTransition,
          delay: 1.25,
        }}
      />

      {/* 3 -> 5 */}
      <motion.path
        d="M750 120 V330 H610"
        fill="none"
        stroke="rgba(59,130,246,.9)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ...pathTransition,
          delay: 1.4,
        }}
      />

      {/* 4 -> 6 */}
      <motion.path
        d="M250 330 H500 V560"
        fill="none"
        stroke="rgba(59,130,246,.9)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ...pathTransition,
          delay: 1.55,
        }}
      />

      {/* 5 -> 6 */}
      <motion.path
        d="M610 330 H500"
        fill="none"
        stroke="rgba(59,130,246,.9)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ...pathTransition,
          delay: 1.7,
        }}
      />
    </svg>
  );
}
