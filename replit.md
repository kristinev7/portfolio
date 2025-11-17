# Portfolio Website

## Overview

This is a personal portfolio website built with Next.js 14, showcasing professional experience, projects, and skills. The site features a modern, animated interface using GSAP for smooth page transitions and card interactions. The application is designed as a static/client-side rendered portfolio with no backend database requirements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 14 with TypeScript
- Uses the App Router architecture (app directory structure)
- Client-side rendering for interactive components with "use client" directive
- Server-side rendering for static content pages
- File-based routing with dedicated routes for Home (/), Projects (/Projects), and Resume (/Resume)

**Styling Approach**
- Tailwind CSS for utility-first styling
- Custom CSS modules for specific components (nav.css, footer.css, home.css)
- Custom fonts: Tomorrow (primary), Tillana (banner text)
- Responsive design with mobile-first approach using Tailwind breakpoints
- Dark theme with custom color scheme (teal/dark green background: rgb(13, 50, 47))

**Animation System**
- GSAP (GreenSock Animation Platform) for advanced animations
- Custom page transition animations using four vertical banner elements
- Card flip animations on the Projects page using 3D transforms and rotationY
- Animations defined in utils/animations.tsx and triggered via TransitionLink component

**Component Structure**
- Shared layout with Navbar and Footer across all pages
- Template.tsx implements page transition wrapper with animation banners
- Reusable components: Banner, Card, TransitionLink
- TypeScript interfaces for type safety (CardProps example)

### Navigation Architecture

**Custom Routing Solution**
- TransitionLink component wraps Next.js router navigation
- Intercepts route changes to trigger exit animations before navigation
- Hamburger menu for mobile devices with toggle state management
- Uses Heroicons for icon components (@heroicons/react)

### Content Organization

**Page Structure**
- Home page (/): Banner + About section with personal introduction
- Projects page (/Projects): Carousel-style card display with GSAP flip animations
- Resume page (/Resume): Skills and education information in card layout
- Each route has its own layout.tsx for route-specific configurations

**State Management**
- React hooks (useState, useRef, useEffect) for local component state
- No global state management library - simple component-level state sufficient for portfolio needs

### Design Patterns

**Layout Pattern**
- Root layout (app/layout.tsx) defines global structure
- Nested layouts for route-specific configurations
- Fixed footer with social media links (GitHub, LinkedIn)
- Consistent header/navbar across all pages

**Component Composition**
- Functional components with TypeScript
- Props-based component communication
- Event handlers passed as props (closeMenu callback pattern)

**Animation Pattern**
- Separation of animation logic from component logic
- Centralized animation functions in utils/animations.tsx
- Timeline-based animations using GSAP for sequential effects

## External Dependencies

### Core Framework
- **next**: ^14.2.10 - React framework for production
- **react**: ^18 - UI library
- **react-dom**: ^18 - React DOM rendering

### Animation & Icons
- **gsap**: ^3.12.5 - Professional-grade animation library for page transitions and card effects
- **@heroicons/react**: ^2.1.5 - SVG icon library (used for hamburger menu)
- **react-icons**: ^5.3.0 - Icon library (used for social media icons in footer)

### Styling
- **tailwindcss**: ^3.4.1 - Utility-first CSS framework
- **postcss**: ^8 - CSS preprocessor required by Tailwind
- Google Fonts CDN - Tomorrow and Tillana font families loaded via CSS import

### Development Tools
- **typescript**: ^5 - Type safety and improved developer experience
- **eslint**: ^8 - Code linting
- **eslint-config-next**: 14.2.7 - Next.js specific ESLint configuration
- TypeScript type definitions for Node, React, and React DOM

### External Services
- Google Fonts API - Font delivery (Tomorrow, Tillana)
- GitHub - Project repository hosting (links in projects)
- LinkedIn - Professional profile linking (footer)