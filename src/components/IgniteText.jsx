import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (stagger) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const charVariants = (finalColor) => ({
  hidden: { opacity: 0, filter: "blur(8px)", color: "var(--color-amber)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    color: finalColor,
    transition: { duration: 0.4, ease: "easeOut" },
  },
});

export default function IgniteText({
  text,
  as = "h2",
  className = "",
  stagger = 0.035,
  once = true,
  amount = 0.6,
  color = "var(--color-text)",
}) {
  const MotionTag = motion[as];
  const words = text.split(" ");
  const char = charVariants(color);

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.28em]">
          {word.split("").map((c, ci) => (
            <motion.span key={ci} variants={char} className="inline-block">
              {c}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
}
