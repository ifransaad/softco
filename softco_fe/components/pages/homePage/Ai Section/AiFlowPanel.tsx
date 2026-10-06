"use client";

import { motion } from "motion/react";
import { AiFlowConnectors } from "./AiFlowConnectors";
import { AiFlowCard } from "./AiFlowCard";

const flowSteps = [
  {
    number: 1,
    title: "INPUT",
    description: "Form · email · document",
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    number: 2,
    title: "UNDERSTAND",
    description: "Classify · extract · enrich",
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    number: 3,
    title: "DECIDE",
    description: "Rules · model · context",
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    number: 4,
    title: "ACT",
    description: "CRM · ERP · HRMS · API",
    className: "lg:col-start-1 lg:row-start-2",
  },
  {
    number: 5,
    title: "APPROVE",
    description: "Human-in-the-loop",
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    number: 6,
    title: "LEARN",
    description: "Measure · improve · audit",
    className: "lg:col-start-2 lg:row-start-3",
  },
];

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

export function AiFlowPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 18,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[30px] border border-blue-400/20 bg-[#07111f] p-5 shadow-[0_0_70px_rgba(59,130,246,0.08)] sm:p-7 lg:min-h-[500px] lg:p-8"
    >
      {/* ambient center glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_62%)]" />

      {/* subtle animated glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[80px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <AiFlowConnectors />

      <motion.div
        variants={cardsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid gap-15 lg:grid-cols-3 lg:grid-rows-3"
      >
        {flowSteps.map((step) => (
          <AiFlowCard key={step.number} {...step} />
        ))}
      </motion.div>
    </motion.div>
  );
}
