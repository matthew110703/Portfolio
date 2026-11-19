import type { ReactNode } from "react";
import { AppShell } from "@/components/layout";

export default function V2Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <AppShell>{children}</AppShell>;
}
