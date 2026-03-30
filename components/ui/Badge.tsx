import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-gold ${className}`}
    >
      {children}
    </span>
  );
}
