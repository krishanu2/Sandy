import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export default function CustomCursor() {
  const { hovering } = useCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
      animate={{
        x: pos.x - (hovering ? 22 : 5),
        y: pos.y - (hovering ? 22 : 5),
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
        borderWidth: hovering ? 2 : 0,
        backgroundColor: hovering ? "rgba(201,162,39,0)" : "rgba(201,162,39,0.75)",
        opacity: visible ? 1 : 0,
      }}
      style={{ borderStyle: "solid", borderColor: "var(--color-gold)" }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.5 }}
    />
  );
}
