export interface Destination {
  id: string;
  name: string;
  location: string;
  category: "Spiritual" | "Heritage" | "Scenic" | "Attraction";
  description: string;
  distanceFromAjmerStation: string;
  recommendedDuration: string;
  highlights: string[];
  image: string;
  altText: string;
}

export const destinations: Destination[] = [
  {
    id: "dargah-sharif",
    name: "Ajmer Sharif Dargah",
    location: "Ajmer",
    category: "Spiritual",
    description: "The globally revered shrine of Sufi saint Hazrat Khwaja Moinuddin Chishti, visited by millions of pilgrims seeking peace and blessings.",
    distanceFromAjmerStation: "2.5 km",
    recommendedDuration: "2 - 3 Hours",
    highlights: ["Nizam Gate & Buland Darwaza", "Historical Degs (cauldrons)", "Spiritual Qawwali evenings"],
    image: "/images/destinations/Ajmer%20Sharif%20Dargah.jpg",
    altText: "Ajmer Sharif Dargah holy Sufi shrine taxi service"
  },
  {
    id: "pushkar-brahma-temple",
    name: "Pushkar Holy Lake & Brahma Temple",
    location: "Pushkar",
    category: "Spiritual",
    description: "One of the world's very few temples dedicated to Lord Brahma, situated beside the serene and sacred Pushkar Lake surrounded by 52 bathing ghats.",
    distanceFromAjmerStation: "14 km",
    recommendedDuration: "Half Day to Full Day",
    highlights: ["Rare 14th-century Jagatpita Brahma Temple", "52 sacred Lake Ghats & evening Aarti", "Pushkar camel grounds & colorful bazaars"],
    image: "/images/destinations/Brahma%20Temple.png",
    altText: "Pushkar Brahma Temple and Holy Lake taxi tour from Ajmer"
  },
  {
    id: "ana-sagar-lake",
    name: "Ana Sagar Lake & Daulat Bagh",
    location: "Ajmer",
    category: "Scenic",
    description: "A scenic 12th-century artificial lake built by Arnoraja, featuring elegant white marble pavilions (Baradari) commissioned by Mughal Emperor Shah Jahan.",
    distanceFromAjmerStation: "4 km",
    recommendedDuration: "1 - 2 Hours",
    highlights: ["Sunset boat rides on the lake", "Shah Jahan marble Baradari pavilions", "Daulat Bagh gardens & promenade"],
    image: "/images/destinations/Ana%20Sagar%20Lake.jpg",
    altText: "Ana Sagar Lake and marble pavilions sightseeing cab in Ajmer"
  },
  {
    id: "taragarh-fort",
    name: "Taragarh Fort (Star Fort)",
    location: "Ajmer",
    category: "Heritage",
    description: "Perched atop the Nagpahari hill, this ancient 8th-century fortress offers panoramic views of the entire Ajmer city and Aravalli mountain ranges.",
    distanceFromAjmerStation: "10 km (hill route)",
    recommendedDuration: "2 - 3 Hours",
    highlights: ["Panoramic vantage point of Ajmer", "Ancient battlements and water reservoirs", "Dargah of Miran Saheb"],
    image: "/images/destinations/Taragarh%20Fort.jpg",
    altText: "Taragarh Fort panoramic hill view taxi in Ajmer"
  },
  {
    id: "adhai-din-ka-jhopra",
    name: "Adhai Din Ka Jhopra",
    location: "Ajmer",
    category: "Heritage",
    description: "A striking Indo-Islamic architectural marvel built in the late 12th century, famous for its carved yellow limestone pillars and towering arches.",
    distanceFromAjmerStation: "3 km",
    recommendedDuration: "1 Hour",
    highlights: ["Intricate Indo-Islamic stone carvings", "Historical Sanskrit college architecture", "Striking 7-arched facade"],
    image: "/images/destinations/Adhai%20Din%20Ka%20Jhopra.png",
    altText: "Adhai Din Ka Jhopra ancient monument taxi visit in Ajmer"
  },
  {
    id: "kishangarh-marble-slurry",
    name: "Kishangarh Dumping Yard (Marble City)",
    location: "Kishangarh",
    category: "Attraction",
    description: "Known as the 'Snow of Rajasthan' or 'Switzerland of Rajasthan', this pristine white marble slurry ground is a celebrated photography and movie shoot hotspot.",
    distanceFromAjmerStation: "32 km",
    recommendedDuration: "2 Hours",
    highlights: ["Photogenic snow-white landscape", "Kishangarh Airport hub access", "Asia's largest marble trading market"],
    image: "/images/destinations/Kishangarh%20Dumping%20Yard.jpg",
    altText: "Kishangarh marble dumping yard white photography spot cab rental"
  }
];
