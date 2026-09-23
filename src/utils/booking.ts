/**
 * Lightweight privacy-friendly event tracking utility
 */
export function trackEvent(eventName: string, details?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // Dispatch custom DOM event for any attached analytics listeners (GTM/GA4/custom)
    window.dispatchEvent(
      new CustomEvent("taxi_analytics", {
        detail: { event: eventName, ...details, timestamp: Date.now() }
      })
    );
    // Console log in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, details);
    }
  }
}
