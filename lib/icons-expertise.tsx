import {
  DoorOpen,
  Scale,
  Building2,
  Store,
  Gavel,
  AlertCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ExpertiseIconName } from "./expertises";

const map: Record<ExpertiseIconName, LucideIcon> = {
  DoorOpen,
  Scale,
  Building2,
  Store,
  Gavel,
  AlertCircle,
  ShieldCheck,
};

export function ExpertiseIcon({
  name,
  className,
}: {
  name: ExpertiseIconName;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden />;
}
