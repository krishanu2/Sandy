import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import IgniteText from "./IgniteText";

export default function Close() {
  const { setHovering } = useCursor();
  const [clicked, setClicked] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-16 bg-bg px-6 text-center">
      <IgniteText
        as="h2"
        text="In 90 days you'll either be glad you started today, or explaining why you didn't."
        stagger={0.012}
        amount={0.5}
        className="max-w-3xl font-display text-2xl leading-tight uppercase sm:text-4xl"
      />

      <div className="relative inline-block">
        <motion.button
          type="button"
          onClick={() => setClicked(true)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          whileHover={!clicked ? { scale: 1.04, boxShadow: "0 0 36px rgba(201,162,39,0.7)" } : {}}
          whileTap={!clicked ? { scale: 0.96 } : {}}
          className="cta-cursor relative z-10 min-w-64 rounded-sm bg-gold px-10 py-4 font-display text-lg tracking-wide text-bg uppercase"
        >
          {clicked ? "✓" : "Start Your Transformation"}
        </motion.button>

        <AnimatePresence>
          {clicked && (
            <motion.span
              initial={{ scale: 0.4, opacity: 0.7 }}
              animate={{ scale: 2.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ backgroundColor: "var(--color-emerald)" }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
