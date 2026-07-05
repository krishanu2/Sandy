import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";

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
  const draggingRef = useRef(false);

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

  const moveTo = useCallback(
    (clientX) => {
      const rect = containerRef.current.getBoundingClientRect();
      x.set(Math.min(width, Math.max(0, clientX - rect.left)));
    },
    [x, width],
  );

  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    moveTo(e.clientX);
  };
  const endDrag = (e) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer capture may already be released
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 h-full w-full">{rightContent}</div>

      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 h-full w-full overflow-hidden"
      >
        {leftContent}
      </motion.div>

      {/* Full-size drag surface: large touch target, native pointer events.
          touchAction:pan-y lets vertical page scroll pass through untouched;
          only deliberate horizontal movement is captured for the divider. */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ touchAction: "pan-y", cursor: "ew-resize" }}
        className="absolute inset-0 h-full w-full"
      />

      <motion.div
        style={{ x }}
        className="pointer-events-none absolute top-0 z-10 h-full w-[2px] bg-gold"
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
