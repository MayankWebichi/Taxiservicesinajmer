import { business } from "@/data/business";
import type { FAQItem } from "@/data/faqs";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": business.name,
    "description": "Trusted taxi and cab rental service in Ajmer and Pushkar since 2008. One way cabs, outstation taxis, airport transfers, and Rajasthan sightseeing.",
    "url": business.website,
    "telephone": business.phone,
    "priceRange": "₹₹",
    "image": `${business.website}/images/logo-seal.png`,
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
      { "@type": "City", "name": "Jaipur" },
      { "@type": "State", "name": "Rajasthan" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ajmer Taxi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer to Jaipur Taxi",
            "description": "Fixed fare one-way sedan cab from Ajmer to Jaipur at ₹1,800"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer Outstation Cab Rental",
            "description": "Outstation AC cabs starting from ₹10 per km"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ajmer Airport Transfers",
            "description": "Airport transfers to Kishangarh, Jaipur, and Delhi IGI Airports"
          }
        }
      ]
    }
  };
}

export function generateFAQSchema(faqList: FAQItem[]) {
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

