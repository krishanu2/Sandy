import DragReveal from "./DragReveal";
import PlaceholderImage from "./PlaceholderImage";

export default function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  className = "aspect-[3/4] w-full",
}) {
  return (
    <DragReveal
      className={className}
      leftLabel="Before"
      rightLabel="After"
      leftContent={<PlaceholderImage label={beforeLabel} className="h-full w-full" />}
      rightContent={<PlaceholderImage label={afterLabel} className="h-full w-full" />}
    />
  );
}
