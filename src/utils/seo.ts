import { business } from "@/data/business";
import type { FAQItem } from "@/data/faqs";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${business.website}/#taxiservice`,
    "name": business.name,
    "alternateName": [
      "Ajmer Taxi Service",
      "Taxi Services in Ajmer",
      "Best Taxi Service in Ajmer",
      "Panwar Taxi Ajmer",
      "Ajmer Cab Booking",
      "Pushkar Taxi Service"
    ],
    "description": "Ajmer's leading taxi service and car rental provider since 2008. Verified yellow-plate AC cabs starting from ₹10/km, one-way cabs to Jaipur, Delhi, Pushkar, Jodhpur, Udaipur, Kishangarh Airport, and Dargah Sharif transfers.",
    "url": business.website,
    "telephone": business.phone,
    "priceRange": "₹10/km - ₹35/km",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
    "image": [
      `${business.website}/images/logo-seal.png`,
      `${business.website}/images/hero-top-car.webp`
    ],
    "logo": `${business.website}/images/logo-seal.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.line1,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4716,
      "longitude": 74.6399
    },
    "hasMap": "https://maps.google.com/?q=Taxi+Services+in+Ajmer+Rajasthan",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1280",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Ajmer" },
      { "@type": "City", "name": "Pushkar" },
      { "@type": "City", "name": "Kishangarh" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Jodhpur" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "State", "name": "Rajasthan" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Services & Fares in Ajmer",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer to Jaipur Taxi (One-Way)",
            "description": "Fixed fare one-way AC sedan cab (Dzire/Etios) from Ajmer to Jaipur at ₹1,999"
          },
          "price": "1999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer to Pushkar Taxi",
            "description": "Comfortable AC cab transfer from Ajmer Railway Station or Dargah to Pushkar starting at ₹700"
          },
          "price": "700",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer to Kishangarh Airport Taxi",
            "description": "Direct airport pickup and drop between Ajmer and Kishangarh Airport (KQH) starting at ₹800"
          },
          "price": "800",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer to Sarwar Sharif Dargah Taxi",
            "description": "Dedicated pilgrimage cab to Hazrat Khwaja Fakhruddin Chishti Dargah at Sarwar Sharif with waiting time included from ₹1,500"
          },
          "price": "1500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer Outstation Car Rental per KM",
            "description": "Outstation AC cabs starting from ₹10/km for Hatchbacks, ₹11/km for Sedans, ₹13/km for Ertiga, and ₹18/km for Innova Crysta"
          },
          "price": "10",
          "priceCurrency": "INR"
        }
      ]
    }
  };
}

export function generateFAQSchema(faqList: (FAQItem | { question: string; answer: string })[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export interface ServiceSchemaOptions {
  name?: string;
  serviceType?: string;
  description?: string;
  url?: string;
  providerName?: string;
  providerUrl?: string;
  price?: string | number;
  priceCurrency?: string;
}

export function generateServiceSchema(
  serviceNameOrOptions: string | ServiceSchemaOptions,
  serviceDescription?: string,
  url?: string
) {
  let name = "";
  let description = "";
  let serviceUrl = business.website;
  let offers = undefined;

  if (typeof serviceNameOrOptions === "object" && serviceNameOrOptions !== null) {
    name = serviceNameOrOptions.name || serviceNameOrOptions.serviceType || "";
    description = serviceNameOrOptions.description || "";
    serviceUrl = serviceNameOrOptions.url || business.website;
    if (serviceNameOrOptions.price) {
      offers = {
        "@type": "Offer",
        "price": serviceNameOrOptions.price,
        "priceCurrency": serviceNameOrOptions.priceCurrency || "INR"
      };
    }
  } else {
    name = serviceNameOrOptions || "";
    description = serviceDescription || "";
    serviceUrl = url || business.website;
  }

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "TaxiService",
      "name": business.name,
      "telephone": business.phone,
      "url": business.website
    },
    "description": description,
    "url": serviceUrl,
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan"
    }
  };

  if (offers) {
    schema["offers"] = offers;
  }

  return schema;
}

export function generateWebSiteSearchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": business.name,
    "alternateName": ["Taxi Services in Ajmer", "Panwar Taxi Ajmer", "Ajmer Cab Booking", "Pushkar Taxi"],
    "url": business.website,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${business.website}/fare-calculator/?from=Ajmer&to={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
