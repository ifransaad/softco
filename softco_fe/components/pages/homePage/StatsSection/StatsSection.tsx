"use client";

import React from "react";
import { motion } from "motion/react";

import SectionHeading from "@/components/Shared/SectionHeading";
import { StatsFeatureCard } from "./StatsFeatureCard";

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

const StatsSection = (props: Props) => {
  return (
    <section className="py-14 sm:py-20 px-4 lg:px-8">
      <SectionHeading
        label="DESIGNED FOR OUTCOMES"
        title="Technology should show up in the numbers."
        description="We focus on operational leverage: fewer manual steps, clearer data, faster delivery and better user experiences."
      />
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
        className=" container mx-auto grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12"
      >
        <motion.div variants={fadeUp}>
          <StatsFeatureCard
            eyebrow="42%"
            title="less manual handling"
            description="Workflow automation across repetitive operations."
            accent="blue"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatsFeatureCard
            eyebrow="3.1×"
            title="faster internal turnaround"
            description="Connected systems remove duplicated handoffs."
            accent="blue"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatsFeatureCard
            eyebrow="1 source"
            title="of operational truth"
            description="Dashboards and core systems align teams around the same data."
            accent="blue"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatsFeatureCard
            eyebrow="24/7"
            title="digital capability"
            description="Customer and employee workflows continue beyond office hours."
            accent="blue"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
