// components/SectionHeading.tsx

"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.4,
      }}
      className={`flex flex-col gap-4 text-center ${className}`}
    >
      <motion.span
        variants={itemVariants}
        className="text-xs font-bold text-primary"
      >
        {label}
      </motion.span>

      <motion.h2
        variants={itemVariants}
        className="text-[32px] font-bold leading-tight text-[#090E17] sm:text-[36px] lg:text-[42px]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="text-[16px] leading-relaxed text-gray-600"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
