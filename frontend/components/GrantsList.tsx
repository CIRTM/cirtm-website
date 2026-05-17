type Grant = {
  title: string;
  funder: string;
  duration: string;
  notes: string;
};

function parseGrants(markdown: string): Grant[] {
  // Drop the heading line (### Grants or similar)
  const body = markdown.replace(/^#+\s+.+\n+/, "").trim();

  // Split on list item markers
  const lines = body.split(/\n[-*]\s+/).filter(Boolean);

  return lines.map((line) => {
    const flat = line.replace(/\n/g, " ").trim();

    // Title: first **…**
    const titleMatch = flat.match(/^\*\*(.+?)\*\*/);
    const title = titleMatch ? titleMatch[1].trim() : flat;

    // Funder: between *Funder:* and either *Duration:* or end
    const funderMatch = flat.match(/\*Funder:\*\s*(.+?)(?=\s*\.\s*\*Duration:|\s*$)/);
    const funder = funderMatch ? funderMatch[1].trim().replace(/\.$/, "") : "";

    // Duration: between *Duration:* and end
    const durationMatch = flat.match(/\*Duration:\*\s*(.+?)(?=\s*\.\s*[A-Z]|\s*$)/);
    const duration = durationMatch ? durationMatch[1].trim().replace(/\.$/, "") : "";

    // Notes: anything after the last structured field
    const afterStructured = flat
      .replace(/^\*\*.+?\*\*/, "")          // strip title
      .replace(/\s*—\s*/, "")              // strip em-dash
      .replace(/\*Funder:\*\s*.+?(?=\s*\.\s*\*Duration:|\s*$)/, "")   // strip funder
      .replace(/\.\s*\*Duration:\*\s*.+?(?=\s*\.\s*[A-Z]|\s*$)/, "")  // strip duration
      .replace(/^\s*\.\s*/, "").trim();
    const notes = afterStructured.replace(/^[.—\s]+/, "").trim();

    return { title, funder, duration, notes };
  });
}

export function GrantsList({ markdown }: { markdown: string }) {
  // Extract an optional heading before the list
  const headingMatch = markdown.match(/^(#+\s+.+)/m);
  const heading = headingMatch ? headingMatch[1].replace(/^#+\s+/, "") : null;
  const grants = parseGrants(markdown);

  if (grants.length === 0) return null;

  return (
    <div>
      {heading && (
        <h3 className="text-lg font-semibold text-navy mt-6 mb-4">{heading}</h3>
      )}
      <ul className="space-y-6">
        {grants.map((g, i) => (
          <li key={i} className="border-l-2 border-teal/30 pl-4">
            <p className="font-semibold text-teal leading-snug mb-3">{g.title}</p>
            {g.funder && (
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold text-navy">Funder:</span> {g.funder}
              </p>
            )}
            {g.duration && (
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-navy">Duration:</span> {g.duration}
              </p>
            )}
            {g.notes && !g.funder && !g.duration && (
              <p className="text-sm text-gray-700">{g.notes}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
