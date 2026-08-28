type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-teal mb-3">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
    </div>
  );
}
