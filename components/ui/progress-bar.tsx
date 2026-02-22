type ProgressVariant = "success" | "info" | "error" | "warning";

interface ProgressBarProps {
  variant?: ProgressVariant;
  progress: number; // 0–100
  label?: string;
  sublabel?: string;
}

const variantStyles: Record<ProgressVariant, string> = {
  success: "bg-success",
  info: "bg-info",
  error: "bg-error",
  warning: "bg-warning",
};

export default function ProgressBar({
  variant = "success",
  progress,
  label,
  sublabel,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full flex flex-col gap-1.5">
      {/* Labels */}
      {(label || sublabel) && (
        <div className="flex justify-between items-center">
          {label && (
            <span
              aria-label={label}
              className="text-caption-2 text-text-default"
            >
              {label}
            </span>
          )}
          {sublabel && (
            <span
              aria-label={sublabel}
              className="text-caption-2 text-text-default"
            >
              {sublabel}
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div className="w-full h-3 bg-bg-default rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${variantStyles[variant]}`}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progress: ${clamped}%`}
        />
      </div>
    </div>
  );
}
