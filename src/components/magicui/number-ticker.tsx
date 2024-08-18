import React, { useEffect, useRef, useCallback } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
}

const NumberTicker: React.FC<NumberTickerProps> = React.memo(({ value, direction = "up", delay = 1, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 80,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const updateTextContent = useCallback((latest: number) => {
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", updateTextContent);
  }, [springValue, updateTextContent]);

  return (
    <span
      className={cn("inline-block tabular-nums text-black dark:text-white tracking-wider", className)}
      ref={ref}
    />
  );
});

export default NumberTicker;
