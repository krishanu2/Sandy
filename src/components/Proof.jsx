import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import IgniteText from "./IgniteText";

const cases = [
  {
    name: "Sandeep",
    duration: "12 Months",
    detail: "Aug 2024 — Aug 2025 · The anchor transformation",
    before: "Sandeep, before — Aug 2024",
    after: "Sandeep, after — Aug 2025",
  },
  {
    name: "Client — Rohan",
    duration: "3 Months",
    detail: "Teenage client, visible fat loss",
    before: "Rohan, before — month 0",
    after: "Rohan, after — month 3",
  },
  {
    name: "Client — Vikram",
    duration: "4 Months",
    detail: "Dad-bod to lean & defined",
    before: "Vikram, before — month 0",
    after: "Vikram, after — month 4",
  },
];

export default function Proof() {
  return (
    <section className="bg-bg">
      {/* Stopping number beat */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <IgniteText
          as="h2"
          text="100+"
          color="var(--color-gold)"
          stagger={0.06}
          className="font-display text-7xl uppercase sm:text-9xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 font-display text-2xl uppercase tracking-wide text-text sm:text-3xl"
        >
          Natural Transformations
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 font-body text-sm text-muted uppercase tracking-wide"
        >
          Drag the line on each one. See it for yourself.
        </motion.p>
      </div>

      {/* One case at a time — title + slider + caption fit in a single screen */}
      {cases.map((c, i) => (
        <div
          key={c.name}
          className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center font-display text-4xl text-amber uppercase sm:text-5xl"
          >
            {c.duration}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <BeforeAfterSlider
              beforeLabel={c.before}
              afterLabel={c.after}
              className="mx-auto h-[42vh] aspect-[4/5]"
            />
          </motion.div>

          <div className="mt-5 text-center">
            <p className="font-body text-sm text-muted">{c.name}</p>
            <p className="mt-1 font-body text-xs text-muted">{c.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
