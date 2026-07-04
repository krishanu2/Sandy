import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export default function CTAButton({ className = "" }) {
  const { setHovering } = useCursor();

  return (
    <motion.a
      href="#offer"
      className={`cta-cursor inline-block rounded-sm bg-gold px-10 py-4 font-display text-lg tracking-wide text-bg uppercase ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      whileHover={{
        backgroundColor: "#E8B84B",
        scale: 1.04,
        boxShadow: "0 0 36px rgba(232,184,75,0.7)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      Start Your Transformation
    </motion.a>
  );
}
