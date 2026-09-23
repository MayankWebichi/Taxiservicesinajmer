export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Booking" | "Pricing" | "Routes";
}

export const faqs: FAQItem[] = [
  {
    question: "How can I book a taxi with Panwar Taxi Ajmer?",
    answer: "You can book instantly by calling our 24/7 hotline at +91 77373 14538 or sending a message on WhatsApp. You can also select your pickup, destination, travel date, and preferred vehicle on our website booking widget to generate an instant quote and booking request.",
    category: "Booking"
  },
  {
    question: "Do you provide one-way taxi service from Ajmer?",
    answer: "Yes, we specialize in one-way taxi rentals where you pay only for the distance traveled in one direction. Popular one-way routes include Ajmer to Jaipur, Ajmer to Delhi, Udaipur, Jodhpur, and all major cities across Rajasthan and India.",
    category: "Routes"
  },
  {
    question: "What is the fixed fare for an Ajmer to Jaipur taxi?",
    answer: "For the 135 km Ajmer to Jaipur route, we offer verified fixed fares: Swift Dzire / Toyota Etios Sedan at ₹1,800, Maruti Ertiga / Toyota Rumion at ₹2,800, Toyota Innova at ₹3,500, and Toyota Innova Crysta at ₹4,500. Toll and parking charges are extra as applicable.",
    category: "Pricing"
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer: "Yes, we provide 24/7 airport transfer services connecting Ajmer and Pushkar to Jaipur International Airport (JAI), Kishangarh Airport (KQH, 30 km away), and Delhi Indira Gandhi International Airport (IGI). Fixed fare for an Ajmer to Delhi Airport sedan is ₹5,500.",
    category: "Routes"
  },
  {
    question: "Which vehicles are available in your fleet?",
    answer: "Our fully air-conditioned fleet includes budget hatchbacks (Toyota Glanza @ ₹10/km), sedans (Swift Dzire, Toyota Etios @ ₹11/km), 6-seater SUVs (Maruti Ertiga, Toyota Rumion @ ₹13/km, Kia Carens @ ₹14/km, Toyota Innova & Innova Crysta @ ₹16/km), and 13 to 27-seater luxury Tempo Travellers and Urbania vans (from ₹22/km).",
    category: "General"
  },
  {
    question: "Are all your taxi cabs air-conditioned?",
    answer: "Yes, 100% of our fleet—from hatchbacks and sedans to SUVs and Tempo Travellers—is equipped with functional air conditioning for maximum comfort during Rajasthan summers and long highway journeys.",
    category: "General"
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation on taxi bookings. Please notify us in advance via phone or WhatsApp if your travel plans change so we can reassign or release your vehicle without hassle.",
    category: "Booking"
  },
  {
    question: "Where is your office located in Ajmer?",
    answer: "Our main office is located at 1027/54, Ward No 53, Vaishali Nagar, Near Man Singh Stop, Ajmer (Rajasthan) 305001. We operate 24 hours a day, 7 days a week.",
    category: "General"
  }
];
