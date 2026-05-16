export default function BrandLogo({ eyebrow, title, headingTag = 'h1', compact = false }) {
  const HeadingTag = headingTag;

  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup-compact' : 'brand-lockup-large'}`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-core">CS</span>
      </span>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <HeadingTag>{title}</HeadingTag>
      </div>
    </div>
  );
}
