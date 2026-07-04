import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroRitual() {
  const [show, setShow] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem("introSeen"),
  );

  useEffect(() => {
    if (!show) return;
    sessionStorage.setItem("introSeen", "1");
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <motion.div
            animate={{
              scale: [1, 1.7, 1],
              boxShadow: [
                "0 0 0px rgba(232,184,75,0.3)",
                "0 0 50px rgba(232,184,75,0.9)",
                "0 0 0px rgba(232,184,75,0.3)",
              ],
            }}
            exit={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="h-3 w-3 rounded-full bg-amber"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
