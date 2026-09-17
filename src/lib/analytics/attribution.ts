'use client';

export interface AttributionData {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  firstTouchSource?: string;
  firstTouchCampaign?: string;
  landingPage?: string;
  referrer?: string;
}

const STORAGE_KEY = 'nr_attribution_data';
const FIRST_TOUCH_KEY = 'nr_first_touch';

export function initializeAttribution(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source') || undefined;
    const medium = urlParams.get('utm_medium') || undefined;
    const campaign = urlParams.get('utm_campaign') || undefined;
    const term = urlParams.get('utm_term') || undefined;
    const content = urlParams.get('utm_content') || undefined;

    // Retrieve or set first-touch
    let firstTouch = window.localStorage.getItem(FIRST_TOUCH_KEY);
    if (!firstTouch && source) {
      firstTouch = JSON.stringify({ source, campaign, timestamp: new Date().toISOString() });
      window.localStorage.setItem(FIRST_TOUCH_KEY, firstTouch);
    }

    const parsedFirstTouch = firstTouch ? JSON.parse(firstTouch) : {};

    const attribution: AttributionData = {
      utmSource: source,
      utmMedium: medium,
      utmCampaign: campaign,
      utmTerm: term,
      utmContent: content,
      firstTouchSource: parsedFirstTouch.source,
      firstTouchCampaign: parsedFirstTouch.campaign,
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch (error) {
    console.error('Attribution initialization error:', error);
    return {};
  }
}

export function getStoredAttribution(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // fallback
  }

  return initializeAttribution();
}

export function appendAttributionToUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const attribution = getStoredAttribution();
    const url = new URL(baseUrl);

    if (attribution.utmSource) url.searchParams.set('utm_source', attribution.utmSource);
    if (attribution.utmMedium) url.searchParams.set('utm_medium', attribution.utmMedium);
    if (attribution.utmCampaign) url.searchParams.set('utm_campaign', attribution.utmCampaign);
    if (attribution.utmTerm) url.searchParams.set('utm_term', attribution.utmTerm);
    if (attribution.utmContent) url.searchParams.set('utm_content', attribution.utmContent);

    return url.toString();
  } catch {
    return baseUrl;
  }
}
