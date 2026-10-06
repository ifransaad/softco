"use client";

import React from "react";
import { motion } from "motion/react";
import { PipelineCard } from "./PipelineCard";
import { FeatureCard } from "./FeatureCard";

type Props = {};
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

const OperatingDetails = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid items-center gap-4 sm:grid-cols-2"
    >
      <motion.div variants={fadeUp}>
        <FeatureCard
          eyebrow="ERP / FINANCE / OPS"
          title="Operations in one source of truth."
          description="Finance, inventory and operational workflows connected through one scalable platform."
          accent="blue"
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <FeatureCard
          eyebrow="HRMS / PEOPLE OPS"
          title="People systems teams actually use."
          description="Employee journeys, attendance, payroll and performance designed around real policies."
          accent="violet"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="sm:col-span-2">
        <div className="grid gap-5 rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:grid-cols-[1.05fr_0.95fr] sm:p-6">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-500">
              CRM + Customer Data
            </p>

            <h3 className="mt-3 max-w-[320px] text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl">
              From lead to lifetime value.
            </h3>

            <p className="mt-4 max-w-[420px] text-sm leading-6 text-slate-500">
              Customer data, sales workflows and service interactions designed
              as one connected journey.
            </p>
          </div>

          <PipelineCard />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OperatingDetails;
