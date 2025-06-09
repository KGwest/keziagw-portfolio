import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4,0,0.2,1] } }
};

export default function MotionSection({ children, className = "", ...props }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      {...props}
    >
      {children}
    </motion.section>
  );
}
