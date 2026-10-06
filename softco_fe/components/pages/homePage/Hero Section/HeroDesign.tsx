"use client";

import { FlowList } from "@/components/Shared/FlowList";
import { MetricCard } from "@/components/Shared/MetricCard";
import { RadialCore } from "@/components/Shared/RadialCore";
import { motion } from "motion/react";

type Props = {};

const cardEnter = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: "blur(8px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HeroDesign = (props: Props) => {
  return (
    <section className="w-full relative overflow-hidden text-white lg:flex-1">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative rounded-[36px] border border-cyan-400/15 bg-[radial-gradient(circle_at_center,rgba(48,104,255,0.08),rgba(5,9,17,0.96)_65%)] p-5 sm:p-8"
        >

          <div className="grid gap-6 lg:grid-cols-[1.05fr_1.2fr_1.05fr] lg:grid-rows-3">
            {/* Left top */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.1}
            >
              <MetricCard
                title="CRM"
                subtitle="Customer signals"
                progress={32}
                accent="cyan"
              />
            </motion.div>

            {/* Center */}
            <motion.div
              className="row-span-3 flex items-center justify-center"
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.18}
            >
              <RadialCore progress={86} />
            </motion.div>

            {/* Right top */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.14}
            >
              <MetricCard
                title="ERP"
                subtitle="Operations data"
                progress={38}
                accent="blue"
              />
            </motion.div>

            {/* Left middle */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2}
            >
              <MetricCard
                eyebrow="LIVE SYSTEM TELEMETRY"
                bigValue="42 ms"
                statusText="all systems nominal"
                accent="emerald"
                emphasis
              />
            </motion.div>

            {/* Right middle */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.22}
            >
              <FlowList
                title="AUTOMATION FLOW"
                items={[
                  { label: "Lead captured", color: "blue" },
                  { label: "AI qualification", color: "blue" },
                  { label: "CRM updated", color: "emerald" },
                ]}
              />
            </motion.div>

            {/* Left bottom */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.26}
            >
              <MetricCard
                title="HRMS"
                subtitle="People workflows"
                progress={26}
                accent="emerald"
              />
            </motion.div>

            {/* Right bottom */}
            <motion.div
              variants={cardEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.3}
            >
              <MetricCard
                title="AI AGENTS"
                subtitle="Automation layer"
                progress={42}
                accent="purple"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroDesign;
