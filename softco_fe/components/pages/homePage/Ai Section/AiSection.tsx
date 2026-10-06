"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/Shared/Eyebrow";
import { AiFeatureList } from "./AiFeatureList";
import { AiFlowPanel } from "./AiFlowPanel";


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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const leftContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};


const AiSection = (props: Props) => {
  return (
    <section className="overflow-hidden bg-[#050911] py-16 text-white sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-6">SoftCo AI Systems</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-[570px] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[58px]"
          >
            From AI feature to intelligent operation.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[560px] text-base leading-7 text-slate-400 sm:text-lg"
          >
            We connect models to real business context: your data, rules,
            approvals, permissions and existing systems.
          </motion.p>

          <motion.div variants={fadeUp}>
            <AiFeatureList />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7">
            <Button
              className=""
            >
              Explore AI integration
            </Button>
          </motion.div>
        </motion.div>

        <AiFlowPanel />
      </div>
    </section>
  );
};

export default AiSection;
