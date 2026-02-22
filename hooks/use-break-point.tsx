"use client";

import { useState, useEffect } from "react";

type Breakpoints = {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;

function resolve(bp: Breakpoints, width: number): number {
  if (bp.xl && width >= BREAKPOINTS.xl) return bp.xl;
  if (bp.lg && width >= BREAKPOINTS.lg) return bp.lg;
  if (bp.md && width >= BREAKPOINTS.md) return bp.md;
  if (bp.sm && width >= BREAKPOINTS.sm) return bp.sm;
  return bp.default;
}

export function useBreakpoint(bp: Breakpoints): number {
  const [value, setValue] = useState(bp.default);

  useEffect(() => {
    const update = () => setValue(resolve(bp, window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return value;
}
