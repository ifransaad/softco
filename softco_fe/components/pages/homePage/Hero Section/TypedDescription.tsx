"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const text =
  "CRM, ERP, HRMS, AI automation and custom digital products — designed as connected infrastructure, not isolated software.";

export function TypedDescription() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (hasTyped) return;

    const startDelay = setTimeout(() => {
      setIsTyping(true);

      let index = 0;

      const interval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setHasTyped(true);
        }
      }, 25);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(startDelay);
  }, [hasTyped]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="max-w-[80%] text-base leading-7 text-slate-400 sm:text-lg mt-5"
    >
      {displayedText}

      <motion.span
        className="ml-[2px] inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-cyan-300"
        animate={{
          opacity: isTyping ? 1 : [1, 0, 1],
        }}
        transition={
          isTyping
            ? { duration: 0 }
            : {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </motion.p>
  );
}
