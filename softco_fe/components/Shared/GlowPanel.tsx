import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border border-cyan-400/20 bg-[#070d18]/88 p-5 shadow-[0_0_24px_rgba(59,130,246,0.08),inset_0_0_24px_rgba(59,130,246,0.04)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      {children}
    </div>
  );
}
