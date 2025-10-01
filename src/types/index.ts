/**
 * A user is any human that uses the platform. Users can be buyers, farmers, or both.
 * Users are able to create farms and purchase products from other farms.
 */
export interface User {
  id: string;
  email: string;
  name: string;
  handle: string;
  avatar?: string;
  phone?: string;
  address?: Address;
  userType?: UserType;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
  // Farmer-specific fields (when userType includes 'farmer')
  farmerProfile?: FarmerProfile;
}

/**
 * User types for the two-sided marketplace
 */
export enum UserType {
  BUYER = "buyer",
  FARMER = "farmer",
  BOTH = "both"
}

/**
 * Address information for users and farms
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Additional profile information for farmers
 */
export interface FarmerProfile {
  bio?: string;
  experienceYears?: number;
  certifications: string[];
  farmingMethods: FarmingMethod[];
  preferredContactMethod: ContactMethod;
}

/**
 * Farming methods and practices
 */
export enum FarmingMethod {
  ORGANIC = "organic",
  CONVENTIONAL = "conventional",
  SUSTAINABLE = "sustainable",
  BIODYNAMIC = "biodynamic",
  HYDROPONIC = "hydroponic",
  PERMACULTURE = "permaculture"
}

/**
 * Preferred contact methods
 */
export enum ContactMethod {
  EMAIL = "email",
  PHONE = "phone",
  SMS = "sms",
  APP_MESSAGE = "app_message"
}

/**
 * A farm represents a farming operation owned by a user (farmer)
 */
export interface Farm {
  id: string;
  name: string;
  farmerName?: string;
  description: string;
  address: Address;
  rating: number;
  reviewCount: number;
  images: string[];
  coverImage: string;
  certified: boolean;
  specialties: string[];
  ownerId: string;
  owner: User;
  contact?: ContactInfo;
  operatingHours?: OperatingHours;
  seasonalInfo?: string;
  certifications?: Certification[];
  deliveryOptions?: DeliveryOption[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  products?: Product[];
  paymentMethods?: PaymentMethod[];
  minimumOrder?: number;
  locationName?: string;
}

/**
 * Farm certifications
 */
export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  issueDate: string;
  expiryDate?: string;
  certificateUrl?: string;
}

/**
 * Contact information for farms
 */
export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

/**
 * Operating hours for farms
 */
export interface OperatingHours {
  monday?: TimeSlot;
  tuesday?: TimeSlot;
  wednesday?: TimeSlot;
  thursday?: TimeSlot;
  friday?: TimeSlot;
  saturday?: TimeSlot;
  sunday?: TimeSlot;
}

export interface TimeSlot {
  open: string;
  close: string;
  closed?: boolean;
}

/**
 * Delivery options for farms
 */
export enum DeliveryOption {
  FARM_PICKUP = "farm_pickup",
  LOCAL_DELIVERY = "local_delivery",
  SHIPPING = "shipping",
  FARMERS_MARKET = "farmers_market"
}

/**
 * Payment methods accepted by farms
 */
export enum PaymentMethod {
  CASH = "cash",
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  PAYPAL = "paypal",
  VENMO = "venmo",
  BANK_TRANSFER = "bank_transfer",
  CHECK = "check"
}

/**
 * Product in the marketplace
 */
export interface Product {
  id: string;
  cartId: string;
  farmId: string;
  farm: Farm;
  name: string;
  description: string;
  color: string;
  price: number;
  quantity: number;
  unit: ProductUnit;
  quantityAvailable: number;
  minimumOrder?: number;
  images: string[];
  primaryImage: string;
  category: ProductCategory;
  subcategory?: string;
  tags: string[];
  inSeason: boolean;
  farmingMethod: FarmingMethod;
  harvestDate?: string;
  storageInstructions?: string;
  nutritionalInfo?: NutritionalInfo;
  allergens?: string[];
  shelfLife?: number;
  isActive: boolean;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Product categories for the marketplace
 */
export enum ProductCategory {
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  HERBS = "herbs",
  GRAINS = "grains",
  LEGUMES = "legumes",
  NUTS = "nuts",
  DAIRY = "dairy",
  EGGS = "eggs",
  MEAT = "meat",
  SEAFOOD = "seafood",
  PREPARED_FOODS = "prepared_foods",
  BEVERAGES = "beverages",
  HONEY = "honey",
  FLOWERS = "flowers",
  PLANTS = "plants",
  OTHER = "other"
}

/**
 * Units of measurement for products
 */
export enum ProductUnit {
  POUND = "lb",
  OUNCE = "oz",
  GRAM = "g",
  KILOGRAM = "kg",
  PIECE = "piece",
  EACH = "each",
  BUNCH = "bunch",
  HEAD = "head",
  DOZEN = "dozen",
  PINT = "pint",
  QUART = "quart",
  GALLON = "gallon",
  LITER = "liter",
  MILLILITER = "ml",
  BAG = "bag",
  BOX = "box",
  BASKET = "basket",
  CASE = "case"
}

/**
 * Nutritional information for products
 */
export interface NutritionalInfo {
  calories?: number;
  fat?: number;
  saturatedFat?: number;
  cholesterol?: number;
  sodium?: number;
  carbohydrates?: number;
  fiber?: number;
  sugar?: number;
  protein?: number;
  vitamins?: { [key: string]: string };
  minerals?: { [key: string]: string };
}

/**
 * Cart item with quantity and selections
 */
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unit: ProductUnit;
  priceAtTime: number;
  specialInstructions?: string;
  addedAt: string;
}

/**
 * Shopping cart for buyers
 */
export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax?: number;
  deliveryFee?: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Order status throughout the fulfillment process
 */
export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  PREPARING = "preparing",
  READY_FOR_PICKUP = "ready_for_pickup",
  OUT_FOR_DELIVERY = "out_for_delivery",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
  REFUNDED = "refunded"
}

/**
 * Order placed by a buyer
 */
export interface Order {
  id: string;
  buyerId: string;
  buyer: User;
  farmId: string;
  farm: Farm;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  deliveryOption: DeliveryOption;
  deliveryAddress?: Address;
  pickupTime?: string;
  deliveryTime?: string;
  specialInstructions?: string;
  orderNotes?: string;
  createdAt: string;
  updatedAt: string;
  estimatedFulfillmentTime?: string;
}

/**
 * Individual item within an order
 */
export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unit: ProductUnit;
  priceAtTime: number;
  subtotal: number;
}

/**
 * Review left by a buyer for a farm or product
 */
export interface Review {
  id: string;
  buyerId: string;
  buyer: User;
  farmId: string;
  farm: Farm;
  productId?: string;
  product?: Product;
  orderId: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: string[];
  isVerifiedPurchase: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Search and filter parameters for marketplace
 */
export interface MarketQuery {
  search?: string;
  category?: ProductCategory;
  location?: string;
  radius?: number;
  priceMin?: number;
  priceMax?: number;
  farmingMethod?: FarmingMethod;
  inSeasonOnly?: boolean;
  availableOnly?: boolean;
  sortBy?: "price" | "distance" | "rating" | "newest" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}

/**
 * Response from marketplace API
 */
export interface MarketResponse {
  products: Product[];
  farms: Farm[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  appliedFilters: Omit<MarketQuery, "page" | "pageSize">;
}

/**
 * User authentication session
 */
export interface Session {
  isAuthenticated: boolean;
  user?: User;
  token?: string;
  expiresAt?: string;
}

/**
 * Notification for users
 */
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: string;
}

/**
 * Types of notifications
 */
export enum NotificationType {
  ORDER_CONFIRMED = "order_confirmed",
  ORDER_READY = "order_ready",
  ORDER_DELIVERED = "order_delivered",
  PAYMENT_RECEIVED = "payment_received",
  REVIEW_RECEIVED = "review_received",
  PRODUCT_LOW_STOCK = "product_low_stock",
  SEASONAL_REMINDER = "seasonal_reminder",
  PROMOTION = "promotion",
  SYSTEM = "system"
}

// Legacy deprecated types - to be removed in future versions
// import * as dep from "./deprecated";