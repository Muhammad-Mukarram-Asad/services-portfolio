"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const style = { transitionDelay: `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${styles.reveal} ${inView ? styles.in : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </Tag>
  );
}
