export interface Testimonial {
  id: string;
  source: string;
  isPlaceholder: boolean;
  statusNote: string;
}

// Strictly factual: No fabricated reviews or synthetic names
export const testimonialsConfig = {
  hasLiveReviews: false,
  message: "Verified customer reviews via Google Reviews will be integrated soon. Contact us directly for references from thousands of happy travelers served across Rajasthan since 2008.",
  googleReviewsUrl: "https://maps.google.com/?q=Taxi+Services+in+Ajmer",
  highlights: [
    "Serving Ajmer & Pushkar Since 2008",
    "24/7 Dispatch and Customer Support",
    "100% Air-Conditioned Fleet",
    "Verified Fixed Fares & Free Cancellation"
  ]
};
