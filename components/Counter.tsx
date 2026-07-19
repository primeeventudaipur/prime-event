"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({
  end,
 suffix = "",
}: CounterProps) {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 25,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {

    if (isInView) {
      motionValue.set(end);
    }

  }, [isInView, end, motionValue]);

  useEffect(() => {

    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

  }, [springValue]);

  return (

    <motion.span
      ref={ref}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="inline-block"
    >

      {display}
      {suffix}

    </motion.span>

  );
}