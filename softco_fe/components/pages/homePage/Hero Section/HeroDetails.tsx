"use client";

import React from 'react'
import { motion } from "motion/react";
import { Button } from '@/components/ui/button';
import { TypedDescription } from './TypedDescription';
import { Eyebrow } from '@/components/Shared/Eyebrow';

type Props = {}

const benefits = [
  "AI-native architecture",
  "Enterprise workflows",
  "End-to-end delivery",
];

const HeroDetails = (props: Props) => {
  return (
    <section className="relative overflow-hidden xl:py-16 p-4 text-white lg:flex-1">
      <div className="relative mx-auto flex max-w-7xl items-center">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <Eyebrow>Building the intelligent business layer</Eyebrow>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="max-w-[720px] text-[48px] font-bold leading-[1.03] text-white sm:text-[58px] lg:text-[64px] mt-8"
          >
            We engineer the
            <br />
            systems behind
            <br />
            modern business.
          </motion.h1>

          {/* Description */}
          <TypedDescription />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="h-11 rounded-xl bg-blue-500 px-6 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,.18)] transition-shadow hover:bg-blue-600 hover:shadow-[0_0_40px_rgba(59,130,246,.35)]"
              >
                Start a project
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-xl border-blue-400/25 bg-blue-950/30 px-6 text-sm text-white backdrop-blur-sm hover:bg-blue-950/50 hover:text-white"
              >
                See our capabilities
              </Button>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.75,
                },
              },
            }}
            className="mt-5 flex flex-wrap gap-x-7 gap-y-3"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-[11px] text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                {benefit}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroDetails