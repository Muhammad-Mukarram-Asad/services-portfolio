"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./CountUp.module.css";

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end, inView]);

  return (
    <span ref={ref} className={`${styles.value} ${className ?? ""}`.trim()}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
