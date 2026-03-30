import type { ReactNode } from "react";

export function SectionWrapper({
  children,
  className = "",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={`py-20 lg:py-32 ${className}`}>
      {children}
    </Tag>
  );
}
