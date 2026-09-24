export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tripType: string;
  startingPrice: string;
  icon: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "one-way-taxi",
    slug: "outstation",
    title: "One Way Taxi",
    shortDescription: "Pay only for the distance traveled in one direction. No return fare obligation.",
    fullDescription: "Budget-friendly one-way cab rentals connecting Ajmer and Pushkar to Jaipur, Delhi, Udaipur, Jodhpur, and 50+ cities across India. Dedicated door-to-door service with zero hidden charges.",
    tripType: "One-Way Intercity",
    startingPrice: "₹1,800 to Jaipur",
    icon: "arrow-right-circle",
    features: [
      "Pay one side only",
      "Doorstep pickup in Ajmer & Pushkar",
      "Fixed route fares & per-km options",
      "All-India tourist permit"
    ]
  },
  {
    id: "round-trip-taxi",
    slug: "outstation",
    title: "Round Trip Taxi",
    shortDescription: "Flexible multi-day or same-day return journeys with dedicated cab and driver.",
    fullDescription: "Round-trip cab booking for family vacations, business visits, and pilgrimage journeys. Enjoy total flexibility with driver wait-times at your destination and seamless return travel.",
    tripType: "Return Journey",
    startingPrice: "From ₹10 / km",
    icon: "repeat",
    features: [
      "Driver stays with you",
      "Custom multi-stop itineraries",
      "Transparent night/driver allowance",
      "Sedan, SUV & Tempo options"
    ]
  },
  {
    id: "airport-transfers",
    slug: "airport-transfer",
    title: "Airport Transfers",
    shortDescription: "Guaranteed on-time drops and pickups for Jaipur, Kishangarh & Delhi IGI airports.",
    fullDescription: "Stress-free airport taxi service synchronized with your flight schedules. We provide punctual pickups from your Ajmer hotel or residence with flight-tracking assistance for arriving passengers.",
    tripType: "Airport Drop / Pickup",
    startingPrice: "₹5,500 to Delhi IGI",
    icon: "send",
    features: [
      "Flight schedule coordination",
      "Zero airport delay guarantee",
      "Ample luggage space in sedans & SUVs",
      "24/7 night & early morning departures"
    ]
  },
  {
    id: "local-taxi",
    slug: "taxi-rental",
    title: "Local Ajmer Taxi",
    shortDescription: "Hourly and daily cabs in Ajmer and Pushkar for temple darshan, markets & local meetings.",
    fullDescription: "Convenient local cab rentals for Ajmer Sharif Dargah, Pushkar Brahma Temple, Ana Sagar Lake, and local city commutes. Available on flexible hourly packages.",
    tripType: "Local Hourly",
    startingPrice: "Custom hourly packages",
    icon: "map-pin",
    features: [
      "Point-to-point city drops",
      "Temple & Dargah pilgrimage assistance",
      "Pushkar day excursion packages",
      "Clean AC vehicles with local drivers"
    ]
  },
  {
    id: "outstation-cabs",
    slug: "outstation",
    title: "Outstation Cabs",
    shortDescription: "All-India outstation taxi rental with transparent per-km billing and verified chauffeurs.",
    fullDescription: "Long-distance travel made comfortable. Travel across Rajasthan, Delhi NCR, Gujarat, and beyond with skilled highway drivers who know the best routes and highway halts.",
    tripType: "Outstation Intercity",
    startingPrice: "From ₹10 / km",
    icon: "compass",
    features: [
      "Starting from ₹10/km for Glanza",
      "No hidden kilometer calculations",
      "Experienced highway chauffeurs",
      "Round-the-clock emergency support"
    ]
  },
  {
    id: "sightseeing-tours",
    slug: "tours",
    title: "Ajmer & Pushkar Sightseeing",
    shortDescription: "Curated heritage tours covering Dargah Sharif, Pushkar Lake, Brahma Temple & Ana Sagar.",
    fullDescription: "Explore the cultural and spiritual essence of Ajmer and Pushkar with customizable sightseeing tours. Perfect for families, spiritual seekers, and international travelers.",
    tripType: "Full / Half Day Tour",
    startingPrice: "₹1,500 Half Day / ₹2,500 Full Day",
    icon: "sun",
    features: [
      "Cover all 7 major heritage landmarks",
      "Knowledgeable local drivers",
      "Flexible stop durations for photography & puja",
      "Desert sunset point at Pushkar"
    ]
  },
  {
    id: "tempo-traveller-hire",
    slug: "taxi-rental",
    title: "Tempo Traveller Hire",
    shortDescription: "13 to 27 seater luxury tempo travellers and Urbania vans for group travel & pilgrimages.",
    fullDescription: "Group transportation made effortless. Choose from 13, 17, 21, and 27-seater air-conditioned tempo travellers equipped with pushback seating, ample luggage space, and entertainment systems.",
    tripType: "Group Travel",
    startingPrice: "From ₹22 / km",
    icon: "users",
    features: [
      "13, 17, 21 & 27 seater fleet",
      "Maharaja Urbania luxury variants",
      "Spacious luggage boots & overhead racks",
      "Comfortable pushback seats & AC"
    ]
  },
  {
    id: "wedding-car-rental",
    slug: "wedding-logistics",
    title: "Wedding Transportation & Logistics",
    shortDescription: "Complete wedding fleet: Force Urbania, Innova Crysta, Tempo Travellers & decorated baraat cars.",
    fullDescription: "Seamless logistics for destination weddings across Ajmer and Pushkar. We provide synchronized guest airport pickups, hotel-to-resort shuttles, and decorated luxury vehicles with a dedicated coordinator.",
    tripType: "Wedding & Event Logistics",
    startingPrice: "Custom Fleet Packages",
    icon: "award",
    features: [
      "Luxury Force Urbania & Crysta fleet",
      "Kishangarh & Jaipur airport guest pickups",
      "Hotel-to-resort scheduled shuttles",
      "Dedicated on-site logistics manager"
    ]
  }
];
