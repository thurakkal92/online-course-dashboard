import { ReactNode } from "react";
import { Check as Tick } from "lucide-react";

type ChipProps = {
  text: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Chip = ({
  text,
  leftIcon,
  selected = false,
  disabled = false,
  onClick,
}: ChipProps) => {
  const baseStyles =
    "inline-flex items-center gap-2 h-8 lg:h-9 lg:px-4 px-3 py-2 rounded-full text-caption-1 lg:text-body-2 transition-colors border select-none";

  const stateStyles = disabled
    ? "bg-bg-default border-border-subtle text-text-subtle cursor-not-allowed"
    : selected
      ? "bg-brand-subtle border-brand-bold text-brand-bold cursor-pointer"
      : "bg-white border-border-medium text-text-default cursor-pointer hover:bg-bg-default";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${stateStyles}`}
    >
      {leftIcon && (
        <span className="flex items-center h-5 w-5 lg:h-6 lg:w-6 text-inherit">
          {leftIcon}
        </span>
      )}
      <span className="text-inherit">{text}</span>
      {selected && (
        <span className="flex items-center">
          <Tick className="h-5 w-5 lg:h-6 lg:w-6" />
        </span>
      )}
    </button>
  );
};

export default Chip;
