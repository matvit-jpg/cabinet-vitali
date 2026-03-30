export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-10 flex justify-center ${className}`}
      role="separator"
      aria-hidden
    >
      <div className="h-px w-24 bg-gold/80" />
    </div>
  );
}
