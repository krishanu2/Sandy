import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function DragReveal({
  leftContent,
  rightContent,
  leftLabel = "Before",
  rightLabel = "After",
  className = "",
  onCommit,
  commitThreshold = 1.1,
}) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const committedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let first = true;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setWidth(w);
      if (first) {
        x.set(w / 2);
        first = false;
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  const clipPath = useTransform(x, (v) => {
    const pct = width ? 100 - (v / width) * 100 : 50;
    return `inset(0 ${pct}% 0 0)`;
  });

  useMotionValueEvent(x, "change", (v) => {
    if (!width || !onCommit) return;
    if (v / width >= commitThreshold && !committedRef.current) {
      committedRef.current = true;
      onCommit();
    } else if (v / width < commitThreshold) {
      committedRef.current = false;
    }
  });

  const jumpTo = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    x.set(Math.min(width, Math.max(0, clientX - rect.left)));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => jumpTo(e.clientX)}
      className={`relative select-none overflow-hidden ${className}`}
      style={{ cursor: "ew-resize" }}
    >
      <div className="absolute inset-0 h-full w-full">{rightContent}</div>

      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 h-full w-full overflow-hidden"
      >
        {leftContent}
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: width }}
        dragElastic={0}
        dragMomentum={false}
        style={{ x }}
        className="absolute top-0 z-10 h-full w-[2px] bg-gold"
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-xs font-bold text-bg shadow-lg">
          ↔
        </div>
      </motion.div>

      <span className="pointer-events-none absolute top-2 left-2 z-10 bg-bg/70 px-2 py-1 font-body text-[10px] tracking-wide text-muted uppercase">
        {leftLabel}
      </span>
      <span className="pointer-events-none absolute top-2 right-2 z-10 bg-bg/70 px-2 py-1 font-body text-[10px] tracking-wide text-muted uppercase">
        {rightLabel}
      </span>
    </div>
  );
}
