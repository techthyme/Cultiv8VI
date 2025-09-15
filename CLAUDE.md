# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cultiv8VI is a **Next.js 15** agricultural marketplace platform connecting Virgin Islands farmers with local restaurants, bakeries, and food businesses. Built using the **App Router** architecture, the application features a modern React frontend with TypeScript and Tailwind CSS, designed specifically for the Virgin Islands agricultural ecosystem.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Development**: Turbopack for fast builds and dev server

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── help/
│   │   └── page.tsx        # Farmer help center (comprehensive FAQ, articles, seasonal guide)
│   ├── layout.tsx          # Root layout with Geist fonts
│   ├── page.tsx            # Main application component (home/marketplace/farmers/dashboard)
│   └── globals.css         # Global styles
public/                     # Static assets (SVG icons)
docs/                       # Project documentation
├── brief.md                # Project brief and requirements
└── architecture/           # Technical documentation
```

### Application Architecture

**Next.js App Router Structure:**

- Uses file-based routing with the App Router paradigm
- Main application (`src/app/page.tsx`) handles primary marketplace functionality
- Dedicated routes for specialized features (e.g., `/help` for farmer support)

**Core Application Components:**

1. **Navigation Component**: Responsive nav with mobile menu, user type switching (farmer/business), and cart/notifications
2. **Multiple Views**: Home, Marketplace, Farmers directory, and Farmer Dashboard (state-based routing within main page)
3. **Farmer Help Center** (`/help`): Dedicated Next.js route with comprehensive farmer resources
4. **State Management**: Local React state for:
   - Active tab navigation within main app
   - User type (farmer vs business) - affects available navigation options
   - Shopping cart and notifications
   - Search and filters
   - Mobile menu state

### Key Features

**Core Marketplace:**

- **Marketplace**: Product browsing with search, category filters, and shopping cart
- **Farmer Profiles**: Directory of local farmers with ratings and specialties
- **Dual User Types**: Different experiences for farmers (dashboard) vs businesses (shopping)
- **Responsive Design**: Mobile-first with hamburger menu and adaptive layouts

**Farmer Support System:**

- **Comprehensive Help Center** (`/help`): Full-featured support system for farmers including:
  - **FAQ Section**: 10+ searchable and filterable frequently asked questions
  - **Farming Articles**: Virgin Islands-specific guides (hurricane prep, post-harvest handling, herb growing, etc.)
  - **Seasonal Availability Guide**: Interactive table showing crop seasons and current availability status
  - **Contact & Support**: Multiple support channels and emergency agricultural contacts
- **Context-Aware Navigation**: Help access only available to users in "farmer" mode

**Technical Implementation:**

- **Sample Data**: Currently uses hardcoded sample data for farmers and produce
- **Hybrid Routing**: Combines App Router routes with state-based navigation for optimal UX

### Data Models

Core interfaces defined in `src/app/page.tsx`:

- `Farmer`: Farm profiles with ratings and specialties
- `Product`: Products with pricing, availability, and harvest dates
- `Category`: Product categorization
- `CartItem`: Shopping cart items

### Styling Patterns

- Uses Tailwind utility classes throughout
- Green color scheme (`green-600`, `green-700`) for agricultural theme
- Responsive grid layouts (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Hover states and transitions for interactive elements
- Shadow and rounded corner design system

## Development Notes

### Routing Strategy

- **Hybrid approach**: Main app uses state-based navigation for core features (marketplace, dashboard, etc.)
- **Dedicated routes**: Specialized features like farmer help use Next.js App Router (`/help`)
- **Navigation**: Uses `useRouter` from `next/navigation` for programmatic routing to dedicated pages

### Current Implementation

- All data is currently hardcoded - integration with backend/database would be next step
- Uses external image URLs from Unsplash for sample content
- Mobile-responsive design with collapsible navigation
- Shopping cart persists in component state but would need persistence layer

### Key Technical Decisions

- **Next.js 15 + App Router**: Leverages latest Next.js features for optimal performance
- **Turbopack**: Faster builds and development server
- **TypeScript**: Full type safety across the application
- **User Context Management**: User type (farmer/business) determines available navigation and features
