"use client";

import { useState, ReactNode } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  Placement,
} from "@floating-ui/react";

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  children: ReactNode;
  placement?: Placement;
}

export function Menu({
  trigger,
  children,
  placement = "bottom-start",
  ...otherProps
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(6), flip({ padding: 8 }), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: "menu" }),
  ]);

  return (
    <div className="relative inline-block" {...otherProps}>
      <div
        role="button"
        ref={(node) => refs.setReference(node)}
        {...getReferenceProps()}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <FloatingPortal>
          <div
            ref={(node) => {
              refs.setFloating(node);
            }}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-50 min-w-[180px] rounded-lg border border-border-default bg-white py-1 shadow-md ring-1 ring-black/5 focus:outline-none"
          >
            {children}
          </div>
        </FloatingPortal>
      )}
    </div>
  );
}
