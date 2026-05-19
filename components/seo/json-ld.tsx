// ─── components/seo/json-ld.tsx ───────────────────────────────────────────────
// Server component — renders a JSON-LD <script> tag into the document <head>.
// Usage: <JsonLd schema={organizationSchema()} />
// Safe: schema data is always constructed from controlled application data,
// never from user input — dangerouslySetInnerHTML is appropriate here.
// ─────────────────────────────────────────────────────────────────────────────

export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
