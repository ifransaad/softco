"use client";

import { motion } from "motion/react";

export function RadialCore({ progress = 84 }: { progress?: number }) {
  const size = 240;
  const stroke = 26;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedProgress = Math.max(0, Math.min(progress, 100)) / 100;
  const dashOffset = circumference * (1 - normalizedProgress);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[50px]" />

      <svg width={size} height={size} className="-rotate-90 overflow-visible">
        <defs>
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="55%" stopColor="#5B7CFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />

        {/* Animated progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#coreGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: dashOffset }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.4,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="drop-shadow-[0_0_16px_rgba(99,102,241,0.7)]"
        />
      </svg>

      {/* Inner disk */}
      <div className="absolute flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#050911] shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]">
        <p className="text-center text-[18px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
          SOFTCO
          <br />
          INTELLIGENCE
          <br />
          CORE
        </p>
      </div>
    </div>
  );
}
