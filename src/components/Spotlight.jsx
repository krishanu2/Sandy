import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function Spotlight() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const sy = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-20 h-[560px] w-[560px] rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(232,184,75,0.09) 0%, rgba(201,162,39,0.04) 35%, transparent 70%)",
      }}
    />
  );
}
