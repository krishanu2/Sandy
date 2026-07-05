import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CTAButton from "./CTAButton";
import heroImg from "../assets/photos/hero-mid-lift.webp";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 50, damping: 20 });
  const springY = useSpring(my, { stiffness: 50, damping: 20 });
  const imgX = useTransform(springX, (v) => v * -18);
  const imgY = useTransform(springY, (v) => v * -18);

  useEffect(() => {
    const handler = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section className="relative flex h-screen items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ x: imgX, y: imgY }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Sandeep Yadav mid-lift in the gym"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center">
        <h1 className="font-display text-5xl tracking-wide uppercase sm:text-7xl">
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="block"
          >
            Your Excuses
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="block"
          >
            End Here.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 260, damping: 14 }}
          className="mt-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(201,162,39,0)",
                "0 0 30px rgba(201,162,39,0.4)",
                "0 0 0px rgba(201,162,39,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block rounded-sm"
          >
            <CTAButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
