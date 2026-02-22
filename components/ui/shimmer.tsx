export default function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-bg-medium animate-pulse rounded-md ${className}`} />
  );
}
