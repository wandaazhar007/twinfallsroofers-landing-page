type Props = {
  data: Record<string, unknown>;
};

// Renders a single JSON-LD block on the server. `data` must come from our own
// content/lib builders, never from unsanitized user input.
export function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
