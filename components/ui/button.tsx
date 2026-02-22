import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-medium text-text-inverse hover:bg-brand-bold active:bg-brand-bold border-transparent",
  secondary:
    "bg-brand-subtle text-brand-bold border border-border-default hover:bg-success-subtle active:bg-success-subtle",
  outline:
    "bg-bg-light text-brand-medium border-brand-medium text-brand-medium hover:border-brand-bold hover:text-brand-bold active:text-brand-bold active:border-brand-bold",
  text: "bg-transparent text-brand-medium border-transparent hover:bg-brand-subtle active:text-brand-bold active:bg-brand-subtle",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-body-2 gap-1.5 lg:gap-2.5 h-9",
  md: "px-5 py-2.5 text-body-2 gap-2 h-11",
  lg: "px-6 py-3 h-12 text-body-1 gap-2.5 justify-center",
};

export default function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex whitespace-nowrap items-center font-medium cursor-pointer rounded-md border transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full justify-center" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
