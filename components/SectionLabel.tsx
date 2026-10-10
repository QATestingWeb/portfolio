export default function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="label">
      <b>{n}</b>
      <i aria-hidden="true" />
      {children}
    </div>
  );
}
