import {
  Farm,
  User,
  ProductCategory,
  ProductUnit,
  FarmingMethod,
  UserType,
  Product,
} from "@/types";

const viCities = ["Charlotte Amalie", "Christiansted", "Frederiksted", "Cruz Bay", "Coral Bay", "Anna's Retreat", "Altona", "Estate Frydenhoj"];
const viStreets = ["Queen Cross Street", "King Street", "Waterfront", "Centerline Road", "Southside Road", "Northside Road", "Estate Road", "Cane Bay Road"];
const viNames = ["Maria", "José", "Carlos", "Ana", "Miguel", "Carmen", "Luis", "Rosa", "Pedro", "Sofia", "Antonio", "Isabella", "Roberto", "Esperanza", "Manuel", "Dolores", "Francisco", "Luz", "Ramón", "Esperanza"];

export const mockUsers: User[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `user-${i + 1}`,
  email: `${viNames[i % viNames.length].toLowerCase()}${i + 1}@cultiv8vi.com`,
  name: `${viNames[i % viNames.length]} ${i % 2 === 0 ? 'Rodriguez' : 'Martinez'}`,
  handle: `${viNames[i % viNames.length].toLowerCase()}${i + 1}`,
  avatar: `https://placehold.co/100x100?text=${viNames[i % viNames.length]}`,
  phone: `+1-340-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
  address: {
    street: `${100 + i} ${viStreets[i % viStreets.length]}`,
    city: viCities[i % viCities.length],
    state: i < 10 ? "St. Thomas" : i < 15 ? "St. Croix" : "St. John",
    zipCode: i < 10 ? `00802` : i < 15 ? `00820` : `00831`,
  },
  userType: UserType.FARMER,
  isVerified: i % 2 === 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

const viFarmNames = [
  "Coral Bay Organic Gardens", "Magens Bay Farm", "Cane Bay Agricultural Cooperative", 
  "Estate Whim Plantation", "Paradise Point Produce", "Mahogany Run Farm",
  "Sapphire Beach Gardens", "Mountaintop Agricultural Estate", "Secret Harbour Farm",
  "Compass Point Gardens", "Pineapple Beach Farm", "Estate Bordeaux Organics",
  "Cruz Bay Community Garden", "Lindqvist Beach Farm", "Estate Catherineberg Gardens",
  "Hull Bay Sustainable Farm", "Estate Mandahl Produce", "Dorothea Bay Gardens",
  "Estate Bovoni Farm", "Coakley Bay Agricultural Co-op"
];

const viSpecialties = [
  ["Tropical Fruits", "Coconuts", "Bananas"],
  ["Caribbean Herbs", "Thyme", "Mint", "Basil"], 
  ["Root Vegetables", "Sweet Potatoes", "Yams"],
  ["Leafy Greens", "Callaloo", "Spinach"],
  ["Citrus Fruits", "Limes", "Oranges"],
  ["Spices", "Hot Peppers", "Ginger"],
  ["Plantains", "Breadfruit", "Mangoes"],
  ["Sea Grapes", "Tamarind", "Passion Fruit"],
  ["Free-range Chickens", "Fresh Eggs"],
  ["Goat Products", "Goat Milk", "Goat Cheese"]
];

const viDescriptions = [
  "Family-owned farm growing traditional Caribbean crops using sustainable methods passed down through generations.",
  "Certified organic farm specializing in tropical fruits and vegetables native to the Virgin Islands.",
  "Community-supported agriculture farm providing fresh, locally-grown produce to Virgin Islands restaurants.",
  "Historic plantation turned modern organic farm, preserving traditional Caribbean farming techniques.",
  "Small-scale permaculture farm focusing on climate-resilient crops suited to island conditions.",
  "Cooperative farm owned by local families, growing diverse tropical crops for the local market.",
  "Sustainable farm using rainwater harvesting and solar power to grow pesticide-free produce.",
  "Mountainside farm taking advantage of cooler microclimates to grow a variety of crops year-round.",
  "Coastal farm specializing in salt-tolerant crops and traditional Caribbean vegetables.",
  "Multi-generational farm committed to preserving heritage varieties of Virgin Islands crops."
];

// Farm images mapping for variety - NO DUPLICATES within each farm
const farmImageSets = [
  // Farm 1 - Coral Bay Organic Gardens (Tropical Fruits)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/smiling-black-farmer-with-fresh-bananas-on-plantat-2025-01-09-08-21-26-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/woman-on-the-banana-plantation-with-rich-harvest-2025-03-15-23-52-53-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-bananas-on-gray-background-shopping-for-2025-01-10-04-57-31-utc.jpg",
    ],
    coverImage: "/smiling-black-farmer-with-fresh-bananas-on-plantat-2025-01-09-08-21-26-utc.jpg",
  },
  // Farm 2 - Magens Bay Farm (Caribbean Herbs)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/farmer-eco-agriculture-at-organic-farm-2025-01-29-08-04-42-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-fresh-organic-basil-in-cutting-board-on-r-2025-02-11-14-01-29-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/sprig-of-mint-on-wooden-board-2024-11-03-03-23-34-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/farmer-eco-agriculture-at-organic-farm-2025-01-29-08-04-42-utc.jpg",
  },
  // Farm 3 - Cane Bay Agricultural Cooperative (Root Vegetables)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/a-farmer-with-a-tray-of-organic-bell-peppers-fresh-2025-04-04-01-06-58-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/a-boy-holding-a-large-wooden-box-of-fresh-vegetabl-2025-04-04-06-55-28-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/person-using-garden-hose-to-wash-beetroots-2024-10-18-07-49-16-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/a-farmer-with-a-tray-of-organic-bell-peppers-fresh-2025-04-04-01-06-58-utc.jpg",
  },
  // Farm 4 - Estate Whim Plantation (Leafy Greens)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/here-you-go-2025-04-06-05-46-28-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/african-farmers-carrying-vegetables-and-a-hoe-2025-02-02-20-10-56-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/fresh-lettuce-and-green-onion-field-2025-03-26-03-04-03-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/here-you-go-2025-04-06-05-46-28-utc.jpg",
  },
  // Farm 5 - Paradise Point Produce (Citrus Fruits)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/red-pomegranate-2025-02-11-15-05-17-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/farmer-showing-a-freshly-picked-tomato-in-a-field-2025-06-05-22-15-09-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/mix-of-red-sweet-tomatoes-2024-10-11-22-22-06-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/red-pomegranate-2025-02-11-15-05-17-utc.jpg",
  },
  // Farm 6 - Mahogany Run Farm (Spices)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/farmer-in-the-field-2025-03-07-11-59-38-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/multiracial-harvesters-on-plantation-with-papaya-p-2025-01-08-02-50-18-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/smiling-black-harvester-touching-papaya-on-plant-i-2025-01-09-17-51-54-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/farmer-in-the-field-2025-03-07-11-59-38-utc.jpg",
  },
  // Farm 7 - Sapphire Beach Gardens (Plantains)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/a-boy-holding-a-large-wooden-box-of-fresh-vegetabl-2025-04-04-13-05-12-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/whole-yellow-plantains-2025-03-23-20-47-57-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/coconut-water-and-coconuts-on-a-bright-pastel-back-2024-12-05-17-32-33-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/a-boy-holding-a-large-wooden-box-of-fresh-vegetabl-2025-04-04-13-05-12-utc.jpg",
  },
  // Farm 8 - Mountaintop Agricultural Estate (Sea Grapes)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/organic-raw-brown-tamarind-2025-01-16-16-17-01-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/nominated-2024-11-07-13-31-21-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/close-up-view-of-unpeeled-dried-beans-laid-side-by-2025-02-10-10-52-02-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/organic-raw-brown-tamarind-2025-01-16-16-17-01-utc.jpg",
  },
  // Farm 9 - Secret Harbour Farm (Free-range Chickens)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/white-and-brown-eggs-on-linen-cloth-2025-04-04-11-25-56-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-milk-2024-09-18-20-02-35-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/happy-farmer-african-family-on-livestock-farm-2025-02-12-03-32-58-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/white-and-brown-eggs-on-linen-cloth-2025-04-04-11-25-56-utc.jpg",
  },
  // Farm 10 - Compass Point Gardens (Goat Products)
  {
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/confident-farmer-standing-in-green-field-with-arms-2024-12-07-23-45-00-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-iced-passion-fruit-soda-with-lemon-and-pa-2025-03-26-13-57-16-utc.jpg",
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/senior-african-farmer-working-in-countryside-harve-2024-12-04-15-46-01-utc.jpg",
    ],
    coverImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/confident-farmer-standing-in-green-field-with-arms-2024-12-07-23-45-00-utc.jpg",
  },
];

export const mockFarms: Farm[] = Array.from({ length: 20 }).map((_, i) => {
  const user = mockUsers[i];
  const island = i < 10 ? "St. Thomas" : i < 15 ? "St. Croix" : "St. John";
  const imageSet = farmImageSets[i % farmImageSets.length];
  
  return {
    id: `farm-${i + 1}`,
    name: viFarmNames[i],
    farmerName: user.name,
    description: viDescriptions[i % viDescriptions.length],
    address: {
      street: `${200 + i} ${viStreets[i % viStreets.length]}`,
      city: viCities[i % viCities.length],
      state: island,
      zipCode: island === "St. Thomas" ? "00802" : island === "St. Croix" ? "00820" : "00831",
    },
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // between 3.0–5.0
    reviewCount: Math.floor(Math.random() * 150 + 25), // 25-175 reviews
    images: imageSet.images,
    coverImage: imageSet.coverImage,
    certified: i % 4 === 0, // 25% are certified organic
    specialties: viSpecialties[i % viSpecialties.length],
    ownerId: user.id,
    owner: user,
    contact: {
      phone: user.phone || `+1-340-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
      email: user.email,
    },
    seasonalInfo: i % 3 === 0 ? "Peak harvest season: November through May. Hurricane season adjustments: June-November." : undefined,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
});

export const mockProducts: Product[] = [
  {
    id: "1",
    cartId: "2",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Organic Tomatoes",
    description:
      "Fresh, vine-ripened organic tomatoes grown in rich Virgin Islands soil.",
    price: 4.5,
    color: "blue",
    quantity: 2,
    unit: ProductUnit.POUND,
    quantityAvailable: 50,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/mix-of-red-sweet-tomatoes-2024-10-11-22-22-06-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/mix-of-red-sweet-tomatoes-2024-10-11-22-22-06-utc.jpg",
    category: ProductCategory.VEGETABLES,
    tags: ["organic", "fresh"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    cartId: "23",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Basil",
    description: "Aromatic basil leaves perfect for cooking.",
    price: 3.25,
    color: "blue",
    quantity: 2,
    unit: ProductUnit.BUNCH,
    quantityAvailable: 15,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-fresh-organic-basil-in-cutting-board-on-r-2025-02-11-14-01-29-utc.jpg",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-fresh-organic-basil-in-cutting-board-on-r-2025-02-11-14-01-29-utc.jpg",
    category: ProductCategory.HERBS,
    tags: ["fresh", "aromatic"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    cartId: "24",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Bananas",
    description:
      "Sweet, ripe bananas grown in the tropical Virgin Islands climate.",
    price: 2.5,
    color: "yellow",
    quantity: 1,
    unit: ProductUnit.POUND,
    quantityAvailable: 60,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-bananas-on-gray-background-shopping-for-2025-01-10-04-57-31-utc.jpg",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/bunch-of-bananas-on-gray-background-shopping-for-2025-01-10-04-57-31-utc.jpg",
    category: ProductCategory.FRUITS,
    tags: ["sweet", "tropical", "nutritious"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    cartId: "25",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Pineapple",
    description:
      "Sweet, juicy pineapple grown in the tropical Virgin Islands sun.",
    price: 4.75,
    color: "yellow",
    quantity: 1,
    unit: ProductUnit.EACH,
    quantityAvailable: 18,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/nominated-2024-11-07-13-31-21-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/nominated-2024-11-07-13-31-21-utc.jpg",
    category: ProductCategory.FRUITS,
    tags: ["sweet", "tropical", "juicy"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    cartId: "26",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Thyme",
    description:
      "Aromatic Caribbean thyme, essential for seasoning local dishes.",
    price: 2.75,
    color: "green",
    quantity: 1,
    unit: ProductUnit.BUNCH,
    quantityAvailable: 30,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/fresh-thyme-sprigs-bunch-isolated-on-white-backgro-2024-12-10-03-18-19-utc.JPG",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/fresh-thyme-sprigs-bunch-isolated-on-white-backgro-2024-12-10-03-18-19-utc.JPG",
    category: ProductCategory.HERBS,
    tags: ["aromatic", "seasoning", "caribbean"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "6",
    cartId: "27",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from local Virgin Islands chickens.",
    price: 4.25,
    color: "brown",
    quantity: 1,
    unit: ProductUnit.DOZEN,
    quantityAvailable: 40,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/white-and-brown-eggs-on-linen-cloth-2025-04-04-11-25-56-utc.jpg",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/white-and-brown-eggs-on-linen-cloth-2025-04-04-11-25-56-utc.jpg",
    category: ProductCategory.EGGS,
    tags: ["free-range", "fresh", "local"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "7",
    cartId: "28",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Goat Milk",
    description: "Fresh, creamy goat milk from local Virgin Islands goats.",
    price: 7.0,
    color: "white",
    quantity: 1,
    unit: ProductUnit.QUART,
    quantityAvailable: 15,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-milk-2024-09-18-20-02-35-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-milk-2024-09-18-20-02-35-utc.jpg",
    category: ProductCategory.DAIRY,
    tags: ["fresh", "creamy", "goat"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "8",
    cartId: "29",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Passion Fruit Juice",
    description:
      "Freshly squeezed passion fruit juice with tropical island flavor.",
    price: 8.5,
    color: "orange",
    quantity: 1,
    unit: ProductUnit.QUART,
    quantityAvailable: 18,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-iced-passion-fruit-soda-with-lemon-and-pa-2025-03-26-13-57-16-utc.jpg",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/glass-of-iced-passion-fruit-soda-with-lemon-and-pa-2025-03-26-13-57-16-utc.jpg",
    category: ProductCategory.BEVERAGES,
    tags: ["fresh", "tropical", "passion fruit"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "9",
    cartId: "30",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Coconut Water",
    description: "Fresh coconut water straight from young green coconuts.",
    price: 4.0,
    color: "clear",
    quantity: 1,
    unit: ProductUnit.PINT,
    quantityAvailable: 35,
    images: [
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/coconut-water-and-coconuts-on-a-bright-pastel-back-2024-12-05-17-32-33-utc.jpg",
    ],
    primaryImage:
      "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/coconut-water-and-coconuts-on-a-bright-pastel-back-2024-12-05-17-32-33-utc.jpg",
    category: ProductCategory.BEVERAGES,
    tags: ["fresh", "coconut", "natural"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "10",
    cartId: "31",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Plantains",
    description: "Sweet ripe plantains perfect for frying or baking.",
    price: 2.25,
    color: "yellow",
    quantity: 1,
    unit: ProductUnit.POUND,
    quantityAvailable: 45,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/whole-yellow-plantains-2025-03-23-20-47-57-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/whole-yellow-plantains-2025-03-23-20-47-57-utc.jpg",
    category: ProductCategory.FRUITS,
    tags: ["sweet", "caribbean", "versatile"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "11",
    cartId: "32",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Tamarind",
    description: "Fresh tamarind pods with sweet and tangy pulp.",
    price: 5.75,
    color: "brown",
    quantity: 1,
    unit: ProductUnit.POUND,
    quantityAvailable: 20,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/organic-raw-brown-tamarind-2025-01-16-16-17-01-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/organic-raw-brown-tamarind-2025-01-16-16-17-01-utc.jpg",
    category: ProductCategory.FRUITS,
    tags: ["tangy", "tropical", "flavorful"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "12",
    cartId: "33",
    farmId: "farm_1",
    farm: mockFarms[0],
    name: "Fresh Mint",
    description:
      "Aromatic fresh mint leaves perfect for teas, cocktails, and cooking.",
    price: 3.0,
    color: "green",
    quantity: 1,
    unit: ProductUnit.BUNCH,
    quantityAvailable: 25,
    images: ["https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/sprig-of-mint-on-wooden-board-2024-11-03-03-23-34-utc.jpg"],
    primaryImage: "https://pub-6b9e98efd97c4e319194e6f58d173dc7.r2.dev/sprig-of-mint-on-wooden-board-2024-11-03-03-23-34-utc.jpg",
    category: ProductCategory.HERBS,
    tags: ["aromatic", "refreshing", "versatile"],
    inSeason: true,
    farmingMethod: FarmingMethod.ORGANIC,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];
