import { useState } from "react";
import { motion } from "framer-motion";

const excuses = [
  {
    label: "I've started before... and stopped.",
    reply:
      "Then you already know starting was never the problem. Stopping is. This time, someone notices before it happens.",
  },
  {
    label: "I know what to do. I just don't do it.",
    reply:
      "Knowing was never the gap. The gap is the next 20 minutes — that's the only thing coaching actually fixes.",
  },
  {
    label: "I keep waiting for the \"right time.\"",
    reply:
      "There is no right time. There's only the next set — today's, not Monday's.",
  },
  {
    label: "Every mirror feels like proof I'm falling behind.",
    reply: "Then let's give the mirror something else to prove.",
  },
];

const bgSteps = ["#0a0a0a", "#0d0906", "#100804", "#050302"];
const vignetteSteps = [0.15, 0.28, 0.42, 0.55];

export default function Pain() {
  const [selected, setSelected] = useState({});

  return (
    <section className="relative">
      {excuses.map((e, i) => (
        <div
          key={i}
          className="relative flex h-screen items-center justify-center overflow-hidden px-6"
          style={{ backgroundColor: bgSteps[i] }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: vignetteSteps[i],
              background:
                "radial-gradient(ellipse at center, transparent 35%, #000 100%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-3xl text-center"
          >
            <p
              onClick={() => setSelected((s) => ({ ...s, [i]: true }))}
              className="cursor-pointer font-display text-4xl leading-tight uppercase text-text transition-colors duration-300 hover:text-amber sm:text-5xl"
            >
              {e.label}
            </p>
            {selected[i] && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 font-body text-lg text-amber"
              >
                {e.reply}
              </motion.p>
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
