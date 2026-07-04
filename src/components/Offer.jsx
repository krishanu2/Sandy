import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DragReveal from "./DragReveal";
import { useCursor } from "../context/CursorContext";

const logistics = [
  "Online Coaching — train anywhere, show up anyway.",
  "Offline Training — Human Fitness Gym, Dharuhera.",
  "Nutrition & Diet Planning — eat like the result already happened.",
];

function NowPanel() {
  return (
    <div className="relative h-full w-full bg-surface grayscale">
      <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col items-center justify-center px-3 text-center sm:px-6">
        <p className="font-display text-base leading-tight uppercase text-muted sm:text-xl md:text-2xl">
          Same gym clothes, still folded in the drawer.
        </p>
        <p className="mt-3 font-body text-[11px] text-muted sm:text-sm">
          Same photo you didn't post. Same 11pm scroll, wondering when it
          changes.
        </p>
      </div>
    </div>
  );
}

function FuturePanel() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-dusk">
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(232,184,75,0.35) 0%, transparent 65%)",
        }}
      />
      <div className="absolute top-0 right-0 flex h-full w-1/2 flex-col items-center justify-center px-3 text-center sm:px-6">
        <p className="relative font-display text-base leading-tight uppercase text-amber sm:text-xl md:text-2xl">
          Stairs stop being a decision.
        </p>
        <p className="relative mt-3 font-body text-[11px] text-text sm:text-sm">
          Your reflection stops the scroll. The bag's already packed the
          night before you need it.
        </p>
      </div>
    </div>
  );
}

export default function Offer() {
  const [committed, setCommitted] = useState(false);
  const { setHovering } = useCursor();

  return (
    <section id="offer" className="bg-bg px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-body text-sm uppercase tracking-wide text-muted"
        >
          Drag toward the version of you that's already there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <DragReveal
            className="h-[50vh] w-full rounded-sm sm:h-[60vh]"
            leftLabel="Now"
            rightLabel="90 Days"
            commitThreshold={0.85}
            onCommit={() => setCommitted(true)}
            leftContent={<NowPanel />}
            rightContent={<FuturePanel />}
          />
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <AnimatePresence>
            {committed && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="font-display text-lg uppercase text-amber"
              >
                90 days. Let's go.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.a
            href="#contact"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 36px rgba(201,162,39,0.7)",
            }}
            whileTap={{ scale: 0.96 }}
            className="cta-cursor inline-block rounded-sm bg-gold px-10 py-4 font-display text-lg tracking-wide text-bg uppercase"
          >
            Choose The Next 90 Days
          </motion.a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-muted/10 pt-8">
          {logistics.map((line) => (
            <p key={line} className="font-body text-xs text-muted">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
