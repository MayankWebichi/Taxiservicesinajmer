import { vehicles, type Vehicle } from "@/data/vehicles";
import { routes, popularCityDropList, type RouteItem } from "@/data/routes";

export interface FareCalculationResult {
  hasFixedFare: boolean;
  estimatedFare: number;
  ratePerKm: number;
  distanceKm: number;
  vehicleName: string;
  tripType: string;
  notes: string;
}

/**
 * Route-Based Fare Calculator using verified route fares and per-km pricing
 */
export function calculateRouteFare(
  fromCity: string,
  toCity: string,
  vehicleId: string,
  tripType: "One Way" | "Round Trip" = "One Way"
): FareCalculationResult {
  const vehicle = vehicles.find((v) => v.id === vehicleId) || vehicles[1]; // Default to Dzire
  const normalizedFrom = fromCity.toLowerCase().trim();
  const normalizedTo = toCity.toLowerCase().trim();

  // Check for verified fixed fares (Ajmer to Jaipur)
  const isAjmerJaipur =
    (normalizedFrom.includes("ajmer") && normalizedTo.includes("jaipur")) ||
    (normalizedFrom.includes("jaipur") && normalizedTo.includes("ajmer"));

  if (isAjmerJaipur && tripType === "One Way") {
    let fixed = 1800; // default sedan
    if (vehicle.category === "Hatchback") fixed = 1800;
    else if (vehicle.id === "swift-dzire" || vehicle.id === "toyota-etios") fixed = 1800;
    else if (vehicle.id === "maruti-ertiga" || vehicle.id === "toyota-rumion") fixed = 2800;
    else if (vehicle.id === "toyota-innova") fixed = 3500;
    else if (vehicle.id === "toyota-innova-crysta") fixed = 4500;
    else fixed = 135 * vehicle.ratePerKm;

    return {
      hasFixedFare: true,
      estimatedFare: fixed,
      ratePerKm: vehicle.ratePerKm,
      distanceKm: 135,
      vehicleName: vehicle.name,
      tripType,
      notes: "Fixed verified fare for Ajmer–Jaipur route. Toll/parking extra if applicable."
    };
  }

  // Check for Ajmer to Delhi Airport fixed fares
  const isAjmerDelhiAirport =
    normalizedFrom.includes("ajmer") &&
    (normalizedTo.includes("delhi") || normalizedTo.includes("igi"));

  if (isAjmerDelhiAirport && tripType === "One Way") {
    let fixed = 5500; // default sedan
    if (vehicle.id === "swift-dzire" || vehicle.category === "Sedan") fixed = 5500;
    else if (vehicle.id === "maruti-ertiga" || vehicle.id === "toyota-rumion") fixed = 7500;
    else if (vehicle.id === "toyota-innova-crysta") fixed = 9500;
    else fixed = 390 * vehicle.ratePerKm;

    return {
      hasFixedFare: true,
      estimatedFare: fixed,
      ratePerKm: vehicle.ratePerKm,
      distanceKm: 390,
      vehicleName: vehicle.name,
      tripType,
      notes: "Verified direct airport transfer fare to Delhi IGI Airport."
    };
  }

  // Check known route distances from database
  const matchedRoute = routes.find(
    (r) =>
      r.from.toLowerCase().includes(normalizedFrom) &&
      r.to.toLowerCase().includes(normalizedTo)
  );

  const matchedCity = popularCityDropList.find((c) =>
    c.name.toLowerCase().includes(normalizedTo)
  );

  const distance = matchedRoute
    ? matchedRoute.distanceKm
    : matchedCity
    ? matchedCity.distanceKm
    : 100; // fallback standard estimation distance

  const multiplier = tripType === "Round Trip" ? 2 : 1;
  const calculatedFare = Math.round(distance * vehicle.ratePerKm * multiplier);

  return {
    hasFixedFare: false,
    estimatedFare: calculatedFare,
    ratePerKm: vehicle.ratePerKm,
    distanceKm: distance * multiplier,
    vehicleName: vehicle.name,
    tripType,
    notes: `Calculated at ₹${vehicle.ratePerKm}/km for ${distance * multiplier} km. Toll, parking, and driver allowance applicable as per journey.`
  };
}
