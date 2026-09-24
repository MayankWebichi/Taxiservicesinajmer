export interface RoutePricing {
  sedanFare?: number;
  suvFare?: number;
  innovaFare?: number;
  crystaFare?: number;
  startingPrice?: number;
  priceNote?: string;
}

export interface RouteItem {
  id: string;
  slug: string;
  from: string;
  to: string;
  title: string;
  distanceKm: number;
  estimatedTime: string;
  popular: boolean;
  featuredOnHome: boolean;
  hasDedicatedPage: boolean;
  pricing: RoutePricing;
  description: string;
  highlights: string[];
}

export const routes: RouteItem[] = [
  {
    id: "ajmer-jaipur",
    slug: "ajmer-to-jaipur-taxi",
    from: "Ajmer",
    to: "Jaipur",
    title: "Ajmer to Jaipur Taxi",
    distanceKm: 135,
    estimatedTime: "2.5 Hours",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      sedanFare: 1999,
      suvFare: 3000,
      innovaFare: 3800,
      crystaFare: 4500,
      startingPrice: 1999,
      priceNote: "Fixed all-inclusive fare: Dzire/Etios ₹1,999, Ertiga ₹3,000, Crysta ₹4,500"
    },
    description: "Daily direct one-way and round-trip taxi service connecting Ajmer and the Pink City. Punctual doorstep pickup across Ajmer and Pushkar.",
    highlights: ["NH 48 expressway route", "Doorstep pickup & drop", "Clean AC cabs", "Verified fixed fares"]
  },
  {
    id: "ajmer-delhi-airport",
    slug: "ajmer-to-delhi-taxi",
    from: "Ajmer",
    to: "Delhi IGI Airport",
    title: "Ajmer to Delhi Airport Taxi",
    distanceKm: 390,
    estimatedTime: "6.5 Hours",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      sedanFare: 5500,
      suvFare: 7500,
      crystaFare: 9500,
      startingPrice: 5500,
      priceNote: "Fixed direct airport transfer fare"
    },
    description: "Reliable airport drop and pickup service from Ajmer to Indira Gandhi International Airport (T1, T2, T3) with zero delays.",
    highlights: ["24/7 flight-timed departures", "Flight tracking for return pickups", "Spacious luggage capacity", "Experienced highway drivers"]
  },
  {
    id: "ajmer-pushkar",
    slug: "ajmer-to-pushkar-taxi",
    from: "Ajmer",
    to: "Pushkar",
    title: "Ajmer to Pushkar Taxi",
    distanceKm: 15,
    estimatedTime: "30-40 Minutes",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      sedanFare: 700,
      suvFare: 1200,
      crystaFare: 1500,
      startingPrice: 700,
      priceNote: "Fixed one-way drop: ₹700 (Swift Dzire / Toyota Etios)"
    },
    description: "Scenic drive through the Nag Pahar hills connecting Ajmer Dargah with the holy town of Pushkar, Brahma Temple, and Pushkar Lake.",
    highlights: ["Brahma Temple & 52 Ghats", "Flexible wait time for darshan", "Desert safari drop options", "Same-day return available"]
  },
  {
    id: "ajmer-kishangarh-airport",
    slug: "ajmer-to-kishangarh-airport-taxi",
    from: "Ajmer",
    to: "Kishangarh Airport (KQH)",
    title: "Ajmer to Kishangarh Airport Taxi",
    distanceKm: 30,
    estimatedTime: "45 Minutes",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      startingPrice: 800,
      priceNote: "Direct airport transfer"
    },
    description: "Quick and hassle-free cab transfer from your Ajmer hotel or residence to Kishangarh Airport for seamless domestic flight boarding.",
    highlights: ["Closest regional airport (30 km)", "Guaranteed on-time arrival", "Luggage assistance", "Flight-scheduled booking"]
  },
  {
    id: "ajmer-udaipur",
    slug: "ajmer-to-udaipur-taxi",
    from: "Ajmer",
    to: "Udaipur",
    title: "Ajmer to Udaipur Taxi",
    distanceKm: 265,
    estimatedTime: "5 Hours",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      sedanFare: 4500,
      suvFare: 6500,
      crystaFare: 8500,
      startingPrice: 4500,
      priceNote: "Fixed one-way: Dzire/Etios ₹4,500, Ertiga ₹6,500, Crysta ₹8,500"
    },
    description: "Travel from Ajmer to the City of Lakes via smooth 4-lane highway with optional stops at Nathdwara Shrinathji or Chittorgarh.",
    highlights: ["Nathdwara darshan stop on request", "Lake City doorstep drop", "One-way and multi-day round trips"]
  },
  {
    id: "ajmer-jodhpur",
    slug: "ajmer-to-jodhpur-taxi",
    from: "Ajmer",
    to: "Jodhpur",
    title: "Ajmer to Jodhpur Taxi",
    distanceKm: 205,
    estimatedTime: "4.5 Hours",
    popular: true,
    featuredOnHome: true,
    hasDedicatedPage: true,
    pricing: {
      sedanFare: 3500,
      suvFare: 4500,
      crystaFare: 6000,
      startingPrice: 3500,
      priceNote: "Fixed one-way: Dzire/Etios ₹3,500, Ertiga ₹4,500, Crysta ₹6,000"
    },
    description: "Intercity cab service to the Sun City, covering Mehrangarh Fort, Umaid Bhawan, and city center with professional highway chauffeurs.",
    highlights: ["Smooth highway travel", "City center and railway drop", "Reliable one-way and return cabs"]
  },
  {
    id: "ajmer-bikaner",
    slug: "ajmer-to-bikaner-taxi",
    from: "Ajmer",
    to: "Bikaner",
    title: "Ajmer to Bikaner Taxi",
    distanceKm: 270,
    estimatedTime: "5 Hours",
    popular: false,
    featuredOnHome: false,
    hasDedicatedPage: false,
    pricing: {
      startingPrice: 2970,
      priceNote: "Calculated from ₹11/km"
    },
    description: "Comfortable cab journey across the desert corridor to Junagarh Fort, Karni Mata Mandir, and Bikaner city.",
    highlights: ["Desert corridor drive", "Clean AC vehicles", "Flexible refreshment stops"]
  },
  {
    id: "ajmer-kota",
    slug: "ajmer-to-kota-taxi",
    from: "Ajmer",
    to: "Kota",
    title: "Ajmer to Kota Taxi",
    distanceKm: 215,
    estimatedTime: "4 Hours",
    popular: false,
    featuredOnHome: false,
    hasDedicatedPage: false,
    pricing: {
      startingPrice: 2365,
      priceNote: "Calculated from ₹11/km"
    },
    description: "Direct taxi booking for students, families, and professionals traveling between Ajmer and the education hub Kota.",
    highlights: ["Reliable student & family transfers", "Smooth state highway connectivity", "Doorstep hostel & home drop"]
  },
  {
    id: "ajmer-pokaran",
    slug: "ajmer-to-pokaran-taxi",
    from: "Ajmer",
    to: "Pokaran",
    title: "Ajmer to Pokaran Taxi",
    distanceKm: 375,
    estimatedTime: "6.5 Hours",
    popular: false,
    featuredOnHome: false,
    hasDedicatedPage: false,
    pricing: {
      startingPrice: 4125,
      priceNote: "Calculated from ₹11/km"
    },
    description: "Highway cab service connecting Ajmer to the historic town of Pokaran on the Jaisalmer corridor.",
    highlights: ["Long-distance comfort", "Experienced desert drivers", "All-India permit vehicles"]
  },
  {
    id: "ajmer-osian",
    slug: "ajmer-to-osian-taxi",
    from: "Ajmer",
    to: "Osian",
    title: "Ajmer to Osian Taxi",
    distanceKm: 260,
    estimatedTime: "5 Hours",
    popular: false,
    featuredOnHome: false,
    hasDedicatedPage: false,
    pricing: {
      startingPrice: 2860,
      priceNote: "Calculated from ₹11/km"
    },
    description: "Direct taxi to the ancient temple city and desert dune camps of Osian.",
    highlights: ["Temple darshan & sand dunes", "Customized day returns", "AC comfort"]
  }
];

export const popularCityDropList = [
  { name: "Jaipur", distanceKm: 135, hasFixedFare: true, fixedSedan: 1999 },
  { name: "Delhi IGI Airport", distanceKm: 390, hasFixedFare: true, fixedSedan: 5500 },
  { name: "Pushkar", distanceKm: 15, hasFixedFare: true, fixedSedan: 700 },
  { name: "Udaipur", distanceKm: 265, hasFixedFare: true, fixedSedan: 4500 },
  { name: "Jodhpur", distanceKm: 205, hasFixedFare: true, fixedSedan: 3500 },
  { name: "Kishangarh Airport", distanceKm: 30, hasFixedFare: false },
  { name: "Bikaner", distanceKm: 270, hasFixedFare: false },
  { name: "Kota", distanceKm: 215, hasFixedFare: false },
  { name: "Jaisalmer", distanceKm: 490, hasFixedFare: false },
  { name: "Churu", distanceKm: 280, hasFixedFare: false },
  { name: "Pokaran", distanceKm: 375, hasFixedFare: false }
];
