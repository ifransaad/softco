"use client";

import React from "react";
import { motion } from "motion/react";
import { Eyebrow } from "@/components/Shared/Eyebrow";
import { FeatureCard } from "./FeatureCard";
import { PipelineCard } from "./PipelineCard";
import { StatCard } from "./StatCard";
import { TerminalCard } from "./TerminalCard";
import { MetricCard } from "@/components/Shared/MetricCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

type Props = {};

const OperatingDesign = (props: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#050911] p-6 text-white shadow-[0_20px_80px_rgba(2,8,23,0.20)] sm:p-8 lg:p-10"
    >
      {/* subtle futuristic glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="relative">
        <Eyebrow className="mb-7">Intelligence layer</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[500px] text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl"
        >
          AI that acts inside your workflows.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-[520px] text-sm leading-6 text-slate-400 sm:text-base"
        >
          Agents, copilots and automation connect to the systems your teams
          already use — with permissions, data context and clear business logic.
        </motion.p>

        <div className="mt-7">
          <TerminalCard />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:max-w-[300px]">
          <StatCard
            value="41%"
            label="less manual work"
            accent="emerald"
            delay={0.4}
          />
          <StatCard
            value="3.2×"
            label="faster workflows"
            accent="cyan"
            delay={0.5}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OperatingDesign;
