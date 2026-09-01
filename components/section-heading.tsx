export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-14 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-muted sm:mt-16">
      <span className="text-accent">## </span>
      {children}
    </h2>
  );
}
