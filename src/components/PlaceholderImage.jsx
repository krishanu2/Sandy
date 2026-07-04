export default function PlaceholderImage({ label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gold/40 bg-gradient-to-br from-surface to-bg text-center ${className}`}
    >
      <span className="px-6 font-body text-xs tracking-wide text-muted uppercase">
        [ Photo: {label} ]
      </span>
    </div>
  );
}
