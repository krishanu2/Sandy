import { motion } from "framer-motion";
import coachingImg from "../assets/photos/coaching-candid.webp";

export default function Person() {
  return (
    <section className="bg-surface px-6 py-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={coachingImg}
            alt="Sandeep Yadav coaching a client"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-color" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="mb-6 font-display text-4xl text-gold uppercase">
            Sandeep Didn't Start As A Coach.
          </h2>
          <p className="mb-4 font-body text-lg text-text">
            He started tired of starting over — and used himself as the first
            proof. That 12-month transformation in the Proof section? That's
            him.
          </p>
          <p className="mb-4 font-body text-lg text-text">
            Every plan he builds now, he's already tested on his own body,
            month by month, not theory.
          </p>
          <p className="font-body text-lg text-muted">
            He still trains under his mentor,{" "}
            <span className="text-amber">Anoop Yadav</span> — because staying
            coachable is the discipline, not just the result.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
