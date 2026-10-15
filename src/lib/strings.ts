// Fallback label for a link when real content (e.g. a blog post's title) isn't
// available yet — turns a slug into a readable, title-cased phrase.
export function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Formats a "HH:mm" opening-hours value (site.openingHours) as "7 AM" / "7 PM".
export function formatHour(time: string): string {
  const [hourString] = time.split(':');
  const hour = Number(hourString);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour} ${period}`;
}

// Formats a "YYYY-MM-DD" content date as "February 12, 2026". UTC keeps the calendar day
// stable regardless of the build server's timezone.
export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
