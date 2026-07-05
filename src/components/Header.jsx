import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export default function Header() {
  const { setHovering } = useCursor();

  return (
    <header className="fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-6 py-4 backdrop-blur-sm sm:px-10">
      <span className="font-display text-lg tracking-wide text-gold uppercase">
        Sandeep<span className="text-text">.Fit</span>
      </span>

      <motion.a
        href="#offer"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        whileHover={{ color: "#E8B84B" }}
        className="cta-cursor font-body text-xs tracking-widest text-text uppercase"
      >
        Start →
      </motion.a>
    </header>
  );
}
