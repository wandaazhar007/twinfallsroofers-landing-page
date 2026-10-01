// Conversion event tracking via window.dataLayer (GTM). See docs/04-spesifikasi-konten.md
// section 10 for the full event list. Safe to call even when GTM is not installed.
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export type PhoneClickLocation = 'header' | 'sticky_bar' | 'footer' | 'content' | 'contact';

export function pushEvent(event: string, data: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...data });
}

export function trackPhoneClick(location: PhoneClickLocation): void {
  pushEvent('phone_click', { location });
}

export function trackEstimateFormSubmit(): void {
  pushEvent('estimate_form_submit');
}

export function trackDirectionsClick(): void {
  pushEvent('directions_click');
}

export function trackReviewCtaClick(): void {
  pushEvent('review_cta_click');
}
