# 🛒 Implement Customer Marketplace Browsing for Farms & Products

## Overview

Develop the customer-facing marketplace functionality that allows customers to browse and search through farms and products in the two-sided marketplace platform.

## User Story

**As a customer**, I want to browse and search for farms and products on the `/market` page so that I can discover and purchase items from local farmers.

## Feature Requirements

### Core Functionality

- [ ] Create `/market` page that displays a list of products
- [ ] Implement search and filtering capabilities for farms and products
- [ ] Display product information with farm details
- [ ] Provide responsive design for mobile and desktop
- [ ] Handle loading and error states appropriately

### API Integration

- [ ] Create `app/api/market/route.ts` API endpoint
- [ ] API should return farm and product data based on query parameters
- [ ] Support search, filtering, and pagination through query parameters
- [ ] Implement proper error handling and status codes

## Technical Implementation

### Project Structure Compliance

Following the established project architecture:

```
src/
├── app/
│   ├── market/
│   │   └── page.tsx              # Market page route
│   └── api/
│       └── market/
│           └── route.ts          # API endpoint for market data
├── components/
│   ├── server/
│   │   └── market/
│   │       ├── MarketPage.tsx    # Server component - handles data fetching
│   │       └── ProductList.tsx   # Server component - renders product list
│   ├── client/
│   │   └── market/
│   │       ├── SearchFilters.tsx # Client component - search/filter UI
│   │       ├── ProductCard.tsx   # Client component - interactive product card
│   │       └── Pagination.tsx    # Client component - pagination controls
│   ├── ui/
│   │   ├── Card.tsx             # Reusable card component
│   │   ├── Badge.tsx            # Badge component for categories
│   │   ├── SearchInput.tsx      # Search input component
│   │   └── LoadingSpinner.tsx   # Loading state component
│   └── forms/
│       └── market/
│           └── SearchForm.tsx    # Search and filter form
├── types/
│   └── market.ts                # TypeScript interfaces for market data
├── constants/
│   └── market.ts                # Market-related constants
└── lib/
    └── api/
        └── market.ts            # API utility functions
```

## Detailed Requirements

### 1. API Route Implementation (`app/api/market/route.ts`)

#### Endpoint Specification

```typescript
GET / api / market;
```

#### Query Parameters

- [ ] `search` - Search term for product/farm names
- [ ] `category` - Filter by product category
- [ ] `location` - Filter by farm location
- [ ] `page` - Pagination page number
- [ ] `limit` - Number of items per page
- [ ] `sortBy` - Sort criteria (price, name, date)
- [ ] `sortOrder` - Sort direction (asc, desc)

#### Response Format

```typescript
{
  success: boolean;
  data: {
    products: Product[];
    farms: Farm[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
  message?: string;
}
```

#### Implementation Checklist

- [ ] Handle GET request with query parameter parsing
- [ ] Implement database queries with proper filtering
- [ ] Add pagination logic
- [ ] Include error handling with appropriate HTTP status codes
- [ ] Add input validation for query parameters
- [ ] Implement rate limiting considerations

### 2. Server Components (`/components/server/market/`)

#### MarketPage.tsx

- [ ] Fetch data from `/api/market` endpoint
- [ ] Handle search params from URL
- [ ] Pass data to client components
- [ ] Implement proper error boundaries
- [ ] Add loading states

#### ProductList.tsx

- [ ] Receive products and farms data as props
- [ ] Render list of ProductCard components
- [ ] Handle empty states
- [ ] Implement proper key props for list items

### 3. Client Components (`/components/client/market/`)

#### SearchFilters.tsx

- [ ] Implement search functionality with debouncing
- [ ] Create category and location filter dropdowns
- [ ] Handle filter state with URL parameters
- [ ] Add clear filters functionality
- [ ] Use React Context for filter state if needed

#### ProductCard.tsx

- [ ] Display product image, name, price, and description
- [ ] Show associated farm information
- [ ] Add hover states and interactions
- [ ] Include "Add to Cart" or "View Details" actions
- [ ] Implement responsive design

#### Pagination.tsx

- [ ] Handle page navigation
- [ ] Display current page and total pages
- [ ] Include previous/next buttons
- [ ] Update URL parameters on page change
- [ ] Show page numbers with proper truncation

### 4. UI Components (`/components/ui/`)

#### Required Components

- [ ] **Card.tsx** - Base card component for product display
- [ ] **Badge.tsx** - For product categories and tags
- [ ] **SearchInput.tsx** - Styled search input with icon
- [ ] **LoadingSpinner.tsx** - Loading state indicator
- [ ] **Button.tsx** - Consistent button styling (if not exists)
- [ ] **Select.tsx** - Dropdown component for filters (if not exists)

### 5. Forms (`/components/forms/market/`)

#### SearchForm.tsx

- [ ] Compose UI components for search and filters
- [ ] Handle form submission
- [ ] Manage form state
- [ ] Integrate with URL parameters
- [ ] Add form validation if needed

### 6. Types & Constants

#### Types (`/types/market.ts`)

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  farmId: string;
  farm: Farm;
  createdAt: string;
  updatedAt: string;
}

interface Farm {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  ownerId: string;
  products?: Product[];
}

interface MarketSearchParams {
  search?: string;
  category?: string;
  location?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
```

#### Constants (`/constants/market.ts`)

- [ ] Product categories
- [ ] Default pagination settings
- [ ] Sort options
- [ ] Filter options

## Component Architecture Flow

1. **Server Flow:**

   - `app/market/page.tsx` → `MarketPage.tsx` (server component)
   - `MarketPage.tsx` fetches data from `/api/market`
   - `MarketPage.tsx` renders `ProductList.tsx` and imports client components

2. **Client Flow:**
   - `SearchFilters.tsx` handles user interactions
   - `ProductCard.tsx` displays individual products with farm info
   - `Pagination.tsx` manages page navigation
   - All client components use UI components from `/components/ui/`

## Acceptance Criteria

### Functional Requirements

- [ ] `/market` page loads and displays products correctly
- [ ] API endpoint returns properly formatted data
- [ ] Search functionality works with debouncing
- [ ] Filtering by category and location works
- [ ] Pagination works correctly
- [ ] Products display farm information
- [ ] Responsive design works on mobile and desktop
- [ ] Loading states are shown during data fetching
- [ ] Error states are handled gracefully

### Technical Requirements

- [ ] Server components handle data fetching only
- [ ] Client components handle interactivity only
- [ ] UI components are stateless and reusable
- [ ] Forms compose UI components properly
- [ ] Proper TypeScript types are implemented
- [ ] Code follows project structure conventions
- [ ] No console errors or warnings
- [ ] Proper SEO optimization with metadata

### Performance Requirements

- [ ] Search queries are debounced (300ms minimum)
- [ ] Images are optimized using Next.js Image component
- [ ] Pagination prevents loading all products at once
- [ ] Proper loading states prevent layout shifts

## Testing Considerations

- [ ] Test API endpoint with various query parameters
- [ ] Test search and filtering functionality
- [ ] Test pagination edge cases
- [ ] Test responsive design on different screen sizes
- [ ] Test loading and error states

## Additional Notes

- Follow accessibility best practices for all components
- Ensure proper error handling throughout the data flow
- Consider implementing skeleton loading states
- Plan for future features like product favorites or comparison
- Ensure proper SEO with server-rendered content

## Labels

`feature` `marketplace` `customer` `nextjs` `api` `frontend`

## Priority

**High** - Core marketplace functionality for customers

---

**Estimated Effort:** 2-3 sprints  
**Team Members:** [Assign relevant developers]  
**Dependencies:** Database schema for farms and products, authentication system
