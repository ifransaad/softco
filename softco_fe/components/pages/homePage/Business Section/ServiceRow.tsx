"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  service: Service;
};

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ServiceIcon() {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="
        relative
        flex h-12 w-12 shrink-0
        items-center justify-center
        rounded-2xl
        border border-slate-200
        bg-slate-50

        sm:h-14 sm:w-14
      "
    >
      <div className="relative flex h-9 w-6 items-center justify-center rounded-xl border border-slate-200 bg-white sm:h-10 sm:w-7">
        <div className="absolute h-6 w-px bg-slate-200 sm:h-7" />

        <div className="absolute h-px w-4 bg-slate-200" />

        <motion.span
          className="relative z-10 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,.65)]"
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 4px rgba(59,130,246,.35)",
              "0 0 12px rgba(59,130,246,.85)",
              "0 0 4px rgba(59,130,246,.35)",
            ],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

const ServiceRow = ({ service }: Props) => {
  return (
    <motion.div
      variants={rowVariants}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border border-slate-200
        bg-white
        p-4

        sm:p-5
        lg:rounded-[24px]
        lg:px-4
        lg:py-4
      "
    >
      {/* hover wash */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          bg-[linear-gradient(90deg,rgba(59,130,246,0.035),transparent_50%)]
        "
      />

      <div
        className="
          relative
          flex flex-col
          gap-5

          lg:grid
          lg:grid-cols-[72px_300px_minmax(0,1fr)_auto_auto]
          lg:items-center
          lg:gap-5

          xl:grid-cols-[72px_320px_minmax(0,1fr)_auto_auto]
        "
      >
        {/* Top section for mobile/tablet */}
        <div className="flex items-start justify-between gap-4 lg:contents">
          {/* ICON */}
          <ServiceIcon />

          {/* ARROW - mobile/tablet */}
          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-slate-50
              text-slate-500
              transition-colors
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-500

              lg:hidden
            "
            aria-label={`Open ${service.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* TITLE */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              border border-blue-100
              bg-blue-50
              text-[11px]
              font-semibold
              text-blue-500

              sm:h-9 sm:w-9
              sm:text-xs
            "
          >
            {service.number}
          </motion.div>

          <div className="min-w-0">
            <h3
              className="
                text-base
                font-semibold
                tracking-[-0.02em]
                text-slate-900

                sm:text-lg
                lg:text-xl
              "
            >
              {service.title}
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            leading-6
            text-slate-500

            lg:max-w-[440px]
          "
        >
          {service.description}
        </p>

        {/* TAG */}
        <motion.div
          whileHover={{ y: -1 }}
          className="
            w-fit
            rounded-lg
            bg-[#050911]
            px-3
            py-2
            text-[9px]
            font-semibold
            tracking-wide
            text-cyan-400
          "
        >
          {service.tag}
        </motion.div>

        {/* ARROW - desktop */}
        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          whileTap={{ scale: 0.95 }}
          className="
            hidden h-10 w-10
            items-center justify-center
            rounded-full
            border border-slate-200
            bg-slate-50
            text-slate-500
            transition-colors
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-500

            lg:flex
          "
          aria-label={`Open ${service.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceRow;
