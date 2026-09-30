export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="mb-8 border-l-4 border-signal pl-3 text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
