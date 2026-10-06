"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Azure",
  "OpenAI",
  "Anthropic",
  "Docker",
];

const techContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const techItemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const ContactSection = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Technology stack */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 text-center text-xs font-medium text-slate-400"
          >
            Built with modern, proven technology
          </motion.p>

          <motion.div
            variants={techContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex max-w-5xl flex-wrap justify-center gap-2"
          >
            {technologies.map((technology) => (
              <motion.span
                key={technology}
                variants={techItemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 shadow-sm"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="relative mt-24 overflow-hidden rounded-[22px] bg-[#050C18] px-6 py-10 shadow-[0_0_35px_rgba(30,144,255,0.14)] sm:px-8 lg:mt-28 lg:px-12 lg:py-11"
        >
          {/* decorative glow */}
          <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="max-w-3xl"
            >
              <motion.span
                variants={fadeUpVariants}
                className="mb-3 block text-[10px] font-semibold uppercase tracking-wide text-cyan-400"
              >
                Ready to build?
              </motion.span>

              <motion.h2
                variants={fadeUpVariants}
                className="max-w-3xl text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[38px]"
              >
                Turn your operational bottleneck into a software advantage.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                className="mt-3 max-w-2xl text-sm leading-6 text-slate-400"
              >
                Bring us the workflow, system problem or product idea.
                We&apos;ll help turn it into an executable roadmap.
              </motion.p>
            </motion.div>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-400"
            >
              Talk to SoftCo
              <motion.span
                className="inline-block"
                animate={{
                  x: [0, 2, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                ↗
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
