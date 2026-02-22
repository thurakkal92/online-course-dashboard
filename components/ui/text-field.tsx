"use client";

import { InputHTMLAttributes, ReactNode } from "react";

type TextFieldState = "default" | "error" | "success";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "disabled"
> & {
  label?: string;
  hintText?: string;
  placeholder?: string;
  value?: string;
  variant?: TextFieldState;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const containerStyles: Record<TextFieldState, string> = {
  default:
    "bg-white border-2 border-border-default hover:border-brand-medium active:border-brand focus-within:border-brand-medium",
  error: "bg-white border-2 border-error",
  success: "bg-white border-2 border-brand-medium",
};

const inputStyles: Record<TextFieldState, string> = {
  default: "text-text-default placeholder:text-text-subtle",
  error: "text-text-default placeholder:text-text-subtle",
  success: "text-text-default placeholder:text-text-subtle",
};

const iconStyles: Record<TextFieldState, string> = {
  default: "text-text-default",
  error: "text-text-default",
  success: "text-text-default",
};

const hintStyles: Record<TextFieldState, string> = {
  default: "text-text-subtle",
  error: "text-error",
  success: "text-brand-medium",
};

const TextField = ({
  label,
  hintText,
  placeholder = "Placeholder text",
  value,
  variant = "default",
  disabled = false,
  leftIcon,
  rightIcon,
  onChange,
  className,
  ...rest
}: TextFieldProps) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          className={`text-caption-1 ${disabled ? "text-subtle" : "text-default"}`}
        >
          {label}
        </label>
      )}

      <div
        className={[
          "flex items-center gap-2 px-4 py-3 rounded-lg transition-colors h-11",
          disabled
            ? "bg-bg-default border border-border-subtle cursor-not-allowed"
            : containerStyles[variant],
        ].join(" ")}
      >
        {leftIcon && (
          <span
            className={`flex-shrink-0 ${disabled ? "text-subtle" : iconStyles[variant]}`}
          >
            {leftIcon}
          </span>
        )}

        <input
          {...rest}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={[
            "flex-1 bg-transparent outline-none text-body-2 min-w-0",
            disabled
              ? "text-text-subtle placeholder:text-text-subtle cursor-not-allowed"
              : inputStyles[variant],
          ].join(" ")}
        />

        {rightIcon && (
          <span
            className={`flex-shrink-0 ${disabled ? "text-text-subtle" : iconStyles[variant]}`}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {hintText && (
        <span
          className={`text-caption1 ${disabled ? "text-text-subtle" : hintStyles[variant]}`}
        >
          {hintText}
        </span>
      )}
    </div>
  );
};

export default TextField;
