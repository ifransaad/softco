"use client";

import { motion } from "motion/react";

type Props = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const navItems = [
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "AI",
    href: "#ai",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Company",
    href: "#company",
  },
];

const Services = ({ mobile = false, onNavigate }: Props) => {
  if (mobile) {
    return (
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.07,
              delayChildren: 0.08,
            },
          },
        }}
        className="flex flex-col"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.label}
            variants={{
              hidden: {
                opacity: 0,
                x: -12,
              },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <a
              href={item.href}
              onClick={onNavigate}
              className="
                group
                flex items-center justify-between
                border-b border-white/5
                py-4
                text-base font-medium
                text-[#B2C2D9]
                transition-colors
                hover:text-white
              "
            >
              {item.label}

              <span className="translate-x-0 text-sm text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white">
                ↗
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  return (
    <ul className="flex gap-5 text-sm font-medium text-[#B2C2D9]">
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Services;
