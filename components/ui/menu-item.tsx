import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "brand";
}

interface MenuListProps {
  children: ReactNode;
  className?: string;
}

export function MenuList({ children, className }: MenuListProps) {
  return <ul className={className}>{children}</ul>;
}

export function MenuItem({
  children,
  onClick,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  variant = "default",
  ...otherProps
}: MenuItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer
          flex w-full items-center gap-2.5 px-4 py-3 text-caption-1 lg:text-body-2 text-text-default
          hover:bg-bg-default transition-colors duration-100
          disabled:cursor-not-allowed disabled:opacity-40
          focus:outline-none focus:bg-bg-default
          ${variant === "brand" ? "hover:bg-brand-subtle rounded-lg" : "hover:bg-bg-default"}
          ${className}
        `}
        {...otherProps}
      >
        {leftIcon && (
          <span className="shrink-0 text-text-default">{leftIcon}</span>
        )}
        <span className="flex-1 text-left">{children}</span>
        {rightIcon && (
          <span className="shrink-0 text-text-default">{rightIcon}</span>
        )}
      </button>
    </li>
  );
}
