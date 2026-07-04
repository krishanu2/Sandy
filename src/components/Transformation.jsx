import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portraitImg from "../assets/photos/portrait-gold-black.webp";

const beats = [
  "Picture a body that stops asking for approval.",
  "Energy that doesn't run out by 3pm.",
  "Clothes that fit the way you imagined.",
  "A mirror you don't avoid.",
  "Walking into a room differently.",
];

export default function Transformation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative bg-dusk">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div className="relative hidden md:block">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ y }} className="h-[70vh] w-full overflow-hidden">
              <motion.img
                style={{ scale }}
                src={portraitImg}
                alt="Sandeep Yadav portrait"
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>

        <div className="md:hidden">
          <img
            src={portraitImg}
            alt="Sandeep Yadav portrait"
            className="mb-12 h-[50vh] w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col gap-[40vh] py-[20vh]">
          {beats.map((beat, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ textShadow: "0 0 30px rgba(232,184,75,0.35)" }}
              className="font-display text-3xl leading-tight text-text uppercase sm:text-4xl"
            >
              {beat}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
