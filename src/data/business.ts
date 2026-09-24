export interface BusinessInfo {
  name: string;
  tagline: string;
  established: number;
  heritageText: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  openingHours: string;
  availability: string;
  serviceAreas: string[];
  googleMapsUrl: string;
  website: string;
}

export const business: BusinessInfo = {
  name: "Taxi Services in Ajmer",
  tagline: "Reliable Taxi Service in Ajmer — Serving Ajmer & Pushkar Since 2008",
  established: 2008,
  heritageText: "Serving Ajmer Since 2008",
  phone: "+917737314538",
  phoneFormatted: "+91 77373 14538",
  whatsapp: "917737314538",
  whatsappFormatted: "+91 77373 14538",
  email: "info@taxirentalinajmer.com",
  address: {
    line1: "Doorstep Pickup Across Ajmer & Pushkar",
    landmark: "24/7 Citywide Cab Dispatch",
    city: "Ajmer",
    state: "Rajasthan",
    pincode: "305001",
    full: "Ajmer & Pushkar, Rajasthan, India - 305001"
  },
  openingHours: "Mo-Su 00:00-23:59",
  availability: "24/7 (All 7 Days)",
  serviceAreas: [
    "Ajmer",
    "Pushkar",
    "Jaipur",
    "Kishangarh",
    "Udaipur",
    "Jodhpur",
    "Rajasthan",
    "All India Outstation"
  ],
  googleMapsUrl: "https://maps.google.com/?q=Ajmer+Rajasthan",
  website: "https://taxirentalinajmer.com"
};
