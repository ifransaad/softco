"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Services from "./Services";
import Logo from "../Logo";
import AnimatedLogo from "../Shared/AnimatedLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: scrolled ? 12 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={
          scrolled
            ? "fixed inset-x-0 top-0 z-50 px-4"
            : "absolute inset-x-0 top-0 z-50 px-4"
        }
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            container mx-auto
            flex items-center justify-between
            px-4 py-3
            transition-[background,border,box-shadow,backdrop-filter,border-radius]
            duration-300

            ${
              scrolled
                ? `
                  rounded-2xl
                  border border-white/10
                  bg-[#050911]/75
                  shadow-[0_12px_50px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                `
                : `
                  border border-transparent
                  bg-transparent
                `
            }
          `}
        >
          <AnimatedLogo />

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <Services />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className={
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white/15"
              }
            >
              Build with Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-4 right-4 top-[84px]
                z-50
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-[#050911]/95
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                lg:hidden
              "
            >
              <div className="flex flex-col p-5">
                <Services mobile onNavigate={() => setMobileOpen(false)} />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.3,
                  }}
                  className="mt-5 border-t border-white/10 pt-5"
                >
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                    Build with Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
