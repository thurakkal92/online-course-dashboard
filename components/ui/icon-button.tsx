import React from "react";

type IconButtonVariant = "default" | "outline" | "neutral" | "ghost";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<IconButtonVariant, string> = {
  default:
    "bg-brand-medium text-text-inverse hover:bg-brand-bold active:bg-brand-bold border-transparent",
  outline:
    "bg-white text-brand-medium border-brand-medium hover:text-brand-bold hover:border-brand-bold active:border-border-bold",
  neutral:
    "bg-white text-text-default border border-border-bold hover:bg-bg-default active:bg-bg-default",
  ghost:
    "bg-transparent border-transparent text-text-default hover:bg-bg-default active:bg-bg-default",
};

export default function IconButton({
  variant = "default",
  children,
  className = "",
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        w-10 h-10 rounded-full border-2 transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
