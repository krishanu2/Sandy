import DragReveal from "./DragReveal";
import PlaceholderImage from "./PlaceholderImage";

export default function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
  className = "aspect-[3/4] w-full",
}) {
  return (
    <div className="relative">
      {/* Viewfinder corner brackets — photography motif */}
      <div className="pointer-events-none absolute -top-3 -left-3 h-7 w-7 border-t-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute -top-3 -right-3 h-7 w-7 border-t-2 border-r-2 border-gold" />
      <div className="pointer-events-none absolute -bottom-3 -left-3 h-7 w-7 border-b-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute -right-3 -bottom-3 h-7 w-7 border-r-2 border-b-2 border-gold" />

      <DragReveal
        className={className}
        leftLabel="Before"
        rightLabel="After"
        leftContent={
          beforeSrc ? (
            <img src={beforeSrc} alt={beforeLabel} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderImage label={beforeLabel} className="h-full w-full" />
          )
        }
        rightContent={
          afterSrc ? (
            <img src={afterSrc} alt={afterLabel} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderImage label={afterLabel} className="h-full w-full" />
          )
        }
      />
    </div>
  );
}
