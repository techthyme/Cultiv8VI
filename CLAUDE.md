# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cultiv8VI is a Next.js 15 agricultural marketplace platform connecting Virgin Islands farmers with local restaurants, bakeries, and food businesses. The application features a modern React frontend with TypeScript and Tailwind CSS.

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
├── app/
│   ├── layout.tsx      # Root layout with Geist fonts
│   ├── page.tsx        # Main application component (single-page app)
│   └── globals.css     # Global styles
public/                 # Static assets (SVG icons)
```

### Application Architecture

The main application (`src/app/page.tsx`) is a single-component React app with multiple view states:

1. **Navigation Component**: Responsive nav with mobile menu, user type switching (farmer/business), and cart/notifications
2. **Multiple Pages**: Home, Marketplace, Farmers directory, and Farmer Dashboard
3. **State Management**: Local React state for:
   - Active tab navigation
   - User type (farmer vs business)
   - Shopping cart
   - Search and filters
   - Mobile menu state

### Key Features

- **Marketplace**: Product browsing with search, category filters, and shopping cart
- **Farmer Profiles**: Directory of local farmers with ratings and specialties
- **Dual User Types**: Different experiences for farmers (dashboard) vs businesses (shopping)
- **Responsive Design**: Mobile-first with hamburger menu and adaptive layouts
- **Sample Data**: Currently uses hardcoded sample data for farmers and produce

### Data Models

Core interfaces defined in `src/app/page.tsx`:
- `Farmer`: Farm profiles with ratings and specialties
- `Produce`: Products with pricing, availability, and harvest dates
- `Category`: Product categorization
- `CartItem`: Shopping cart items

### Styling Patterns

- Uses Tailwind utility classes throughout
- Green color scheme (`green-600`, `green-700`) for agricultural theme
- Responsive grid layouts (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Hover states and transitions for interactive elements
- Shadow and rounded corner design system

## Development Notes

- The app currently operates as a single-page application with client-side routing via state
- All data is currently hardcoded - integration with backend/database would be next step
- Uses external image URLs from Unsplash for sample content
- Mobile-responsive design with collapsible navigation
- Shopping cart persists in component state but would need persistence layer