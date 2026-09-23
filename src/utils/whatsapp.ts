import { business } from "@/data/business";

export interface BookingDetails {
  vehicle?: string;
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
  passengers?: number | string;
  tripType?: "One Way" | "Round Trip" | "Airport Transfer" | "Local Tour" | string;
  customMessage?: string;
}

/**
 * Creates a centralized, uniform WhatsApp booking or inquiry URL
 */
export function createWhatsAppBookingUrl(details?: BookingDetails): string {
  const phone = business.whatsapp;
  
  if (!details || Object.keys(details).length === 0) {
    const text = `Hello Panwar Taxi Ajmer, I would like to enquire about taxi rental services in Ajmer.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  if (details.customMessage) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(details.customMessage)}`;
  }

  const parts: string[] = ["Hello Panwar Taxi Ajmer,"];
  
  const vehicleText = details.vehicle ? ` a ${details.vehicle}` : " a taxi";
  const pickupText = details.pickup ? ` from ${details.pickup}` : " from Ajmer";
  const dropText = details.destination ? ` to ${details.destination}` : "";
  
  parts.push(`I want to book${vehicleText}${pickupText}${dropText}.`);

  const extraDetails: string[] = [];
  if (details.tripType) extraDetails.push(`Trip Type: ${details.tripType}`);
  if (details.date) extraDetails.push(`Travel Date: ${details.date}`);
  if (details.time) extraDetails.push(`Pickup Time: ${details.time}`);
  if (details.passengers) extraDetails.push(`Passengers: ${details.passengers}`);

  if (extraDetails.length > 0) {
    parts.push(`\nDetails:\n• ${extraDetails.join("\n• ")}`);
  }

  parts.push("\nPlease share fare estimate and availability.");

  const message = parts.join(" ");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick direct quote link generator for popular routes
 */
export function createRouteWhatsAppUrl(routeName: string, vehicleName?: string): string {
  const vehicleStr = vehicleName ? ` for a ${vehicleName}` : "";
  const text = `Hello Panwar Taxi Ajmer, I want to check availability and book a cab for ${routeName}${vehicleStr}. Please share fare details.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}
