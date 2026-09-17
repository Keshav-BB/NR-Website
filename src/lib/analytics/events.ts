'use client';

type EventName =
  | 'page_view'
  | 'free_training_click'
  | 'contact_started'
  | 'contact_submitted'
  | 'whatsapp_click'
  | 'call_click'
  | 'resource_download'
  | 'story_view'
  | 'career_view'
  | 'job_apply_click'
  | 'scroll_50'
  | 'scroll_90';

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: EventName, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    ...params,
    timestamp: new Date().toISOString(),
    page_location: window.location.href,
    page_path: window.location.pathname,
  };

  // Google Analytics 4 tracking
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventPayload);
  }

  // Generic dataLayer push
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
  }

  // Development debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}:`, eventPayload);
  }
}
