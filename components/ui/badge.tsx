import React from "react";

type BadgeVariant = "error" | "success" | "warning" | "info" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  text: string;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-bg-default text-text-default border-border-medium",
  error: "bg-error-subtle text-text-default border-error",
  success: "bg-brand-subtle text-text-default border-brand-default",
  warning: "bg-warning-subtle text-text-default border-warning",
  info: "bg-info-subtle text-text-default border-info",
};

export default function Badge({
  variant = "default",
  text,
  className,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        whitespace-nowrap
        px-4 py-1
        rounded-md
        border
        font-semibold
        h-6
        lg:text-caption-1
        text-caption-2
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {text}
    </span>
  );
}
