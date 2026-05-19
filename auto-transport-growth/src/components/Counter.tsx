"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Counter({ from, to, duration = 2, suffix = "", prefix = "", decimals = 0 }: { from: number, to: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(from + easeProgress * (to - from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}
