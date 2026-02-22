"use client";

import DashboardSkeleton from "@/components/features/card-loading";
import { useEffect, useState } from "react";

export default function LoadingGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return <DashboardSkeleton />;
  }

  return <>{children}</>;
}
