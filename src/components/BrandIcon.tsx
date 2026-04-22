export function BrandIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="24" height="24">
      <path d="M4 18L8 10L12 14L16 6L20 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="16" cy="6" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
