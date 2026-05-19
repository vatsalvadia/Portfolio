"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimationVariant = "fadeUp" | "slideLeft" | "slideRight" | "scaleUp" | "none";

interface RevealSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function RevealSection({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  triggerOnce = true,
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  if (shouldReduceMotion || variant === "none") {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: variant === "fadeUp" ? 40 : 0,
      x: variant === "slideLeft" ? 40 : variant === "slideRight" ? -40 : 0,
      scale: variant === "scaleUp" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
