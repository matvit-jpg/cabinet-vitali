import { GoldRule } from "@/components/motion/GoldRule";
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-10 flex justify-center ${className}`}
      role="separator"
      aria-hidden
    >
      <GoldRule className="h-px w-24 bg-gold/80" />
    </div>
  );
}
