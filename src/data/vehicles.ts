export interface Vehicle {
  id: string;
  name: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Tempo Traveller";
  categoryLabel: string;
  seats: number;
  luggage: number;
  ratePerKm: number;
  hasAC: boolean;
  freeCancellation: boolean;
  bestFor: string;
  popular: boolean;
  image: string;
  altText: string;
  fixedFares?: {
    ajmerToJaipur?: number;
    ajmerToDelhiAirport?: number;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "toyota-glanza",
    name: "Toyota Glanza",
    category: "Hatchback",
    categoryLabel: "Budget Hatchback",
    seats: 4,
    luggage: 2,
    ratePerKm: 10,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Budget city travel, local Ajmer darshan & solo/couple trips",
    popular: true,
    image: "/images/vehicles/Toyota%20Glanza.png",
    altText: "Toyota Glanza AC hatchback taxi available for hire in Ajmer",
  },
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Sedan",
    categoryLabel: "Comfort Sedan",
    seats: 4,
    luggage: 2,
    ratePerKm: 11,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Intercity one-way travel, airport transfers & business trips",
    popular: true,
    image: "/images/vehicles/Maruti%20Swift%20Dzire.png",
    altText: "Maruti Swift Dzire AC sedan taxi available for rental in Ajmer",
    fixedFares: {
      ajmerToJaipur: 1800,
      ajmerToDelhiAirport: 5500
    }
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Sedan",
    categoryLabel: "Spacious Sedan",
    seats: 4,
    luggage: 2,
    ratePerKm: 11,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Comfortable highway rides with large boot space",
    popular: false,
    image: "/images/vehicles/Toyota%20Etios.png",
    altText: "Toyota Etios sedan cab for outstation and airport pickup from Ajmer",
    fixedFares: {
      ajmerToJaipur: 1800
    }
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "SUV",
    categoryLabel: "Family 6-Seater SUV",
    seats: 6,
    luggage: 4,
    ratePerKm: 13,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Family trips, Pushkar pilgrimages & outstation tours",
    popular: true,
    image: "/images/vehicles/Maruti%20Suzuki%20Ertiga.png",
    altText: "Maruti Ertiga 6-seater AC SUV taxi rental in Ajmer",
    fixedFares: {
      ajmerToJaipur: 2800,
      ajmerToDelhiAirport: 7500
    }
  },
  {
    id: "toyota-rumion",
    name: "Toyota Rumion",
    category: "SUV",
    categoryLabel: "Premium 6-Seater SUV",
    seats: 6,
    luggage: 4,
    ratePerKm: 13,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Smooth highway cruising & family outstation packages",
    popular: false,
    image: "/images/vehicles/Toyota%20Rumion.png",
    altText: "Toyota Rumion premium SUV cab booking in Ajmer",
    fixedFares: {
      ajmerToJaipur: 2800,
      ajmerToDelhiAirport: 7500
    }
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "SUV",
    categoryLabel: "Executive 6-Seater MPV",
    seats: 6,
    luggage: 4,
    ratePerKm: 14,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Executive travel & long-distance Rajasthan tours",
    popular: false,
    image: "/images/vehicles/Kia%20Carens.png",
    altText: "Kia Carens premium cab service in Ajmer and Pushkar"
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    category: "SUV",
    categoryLabel: "Trusted Family Cab",
    seats: 6,
    luggage: 5,
    ratePerKm: 16,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Multi-day Rajasthan tours & extra luggage comfort",
    popular: true,
    image: "/images/vehicles/innova.svg",
    altText: "Toyota Innova family taxi hire in Ajmer for Rajasthan tours",
    fixedFares: {
      ajmerToJaipur: 3500
    }
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    categoryLabel: "Luxury Premium SUV",
    seats: 6,
    luggage: 5,
    ratePerKm: 16,
    hasAC: true,
    freeCancellation: true,
    bestFor: "VIP travel, airport transfers & premium comfort tours",
    popular: true,
    image: "/images/vehicles/crysta.svg",
    altText: "Toyota Innova Crysta luxury taxi rental in Ajmer",
    fixedFares: {
      ajmerToJaipur: 4500,
      ajmerToDelhiAirport: 9500
    }
  },
  {
    id: "tempo-13-seater",
    name: "13 Seater Tempo Traveller",
    category: "Tempo Traveller",
    categoryLabel: "Small Group Traveller",
    seats: 13,
    luggage: 10,
    ratePerKm: 22,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Family pilgrimages, Pushkar fair & corporate outings",
    popular: true,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "13 Seater AC Tempo Traveller rental service in Ajmer"
  },
  {
    id: "urbania-13-seater",
    name: "13 Seater Maharaja Urbania",
    category: "Tempo Traveller",
    categoryLabel: "Luxury Maharaja Van",
    seats: 13,
    luggage: 10,
    ratePerKm: 24,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Luxury group tours, recliner seats & wedding guest escort",
    popular: false,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "13 Seater Maharaja Urbania luxury tempo traveller in Ajmer"
  },
  {
    id: "tempo-17-seater",
    name: "17 Seater Tempo Traveller",
    category: "Tempo Traveller",
    categoryLabel: "Medium Group Traveller",
    seats: 17,
    luggage: 12,
    ratePerKm: 25,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Extended family tours & outstation pilgrimage trips",
    popular: true,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "17 Seater Tempo Traveller on rent in Ajmer"
  },
  {
    id: "urbania-17-seater",
    name: "17 Seater Urbania Traveller",
    category: "Tempo Traveller",
    categoryLabel: "Luxury 17-Seater Van",
    seats: 17,
    luggage: 12,
    ratePerKm: 25,
    hasAC: true,
    freeCancellation: true,
    bestFor: "High-comfort group journeys across Rajasthan",
    popular: false,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "17 Seater Urbania luxury traveller in Ajmer"
  },
  {
    id: "tempo-21-seater",
    name: "21 Seater Tempo Traveller",
    category: "Tempo Traveller",
    categoryLabel: "Large Group Coach",
    seats: 21,
    luggage: 15,
    ratePerKm: 28,
    hasAC: true,
    freeCancellation: true,
    bestFor: "College trips, large family events & religious tours",
    popular: false,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "21 Seater Tempo Traveller for hire in Ajmer"
  },
  {
    id: "tempo-27-seater",
    name: "27 Seater Tempo Traveller",
    category: "Tempo Traveller",
    categoryLabel: "Mini Bus / Maxi Cab",
    seats: 27,
    luggage: 18,
    ratePerKm: 32,
    hasAC: true,
    freeCancellation: true,
    bestFor: "Wedding transportation, school/college groups & conventions",
    popular: false,
    image: "/images/vehicles/Force%20Tempo%20Traveller.png",
    altText: "27 Seater luxury mini bus tempo traveller in Ajmer"
  }
];

export const fleetCategories = [
  { id: "all", label: "All Vehicles" },
  { id: "Sedan", label: "Sedans" },
  { id: "SUV", label: "SUVs" },
  { id: "Hatchback", label: "Hatchbacks" },
  { id: "Tempo Traveller", label: "Tempo Travellers" }
];
