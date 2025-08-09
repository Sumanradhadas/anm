# Overview

This is a React-based website for Anushka ANM Training Institute, a nursing education institution located in Lakhisarai, Bihar. The website serves as an informational platform for prospective students and their families, providing details about the ANM (Auxiliary Nurse Midwife) program, admission procedures, faculty, facilities, and contact information. The institute is approved by the Bihar Nursing Council and conducts admissions through DCECE counseling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight, client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with custom design system variables for consistent theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
- **Runtime**: Node.js with Express.js for the REST API server
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **API Design**: RESTful endpoints for contact inquiries and admission inquiries
- **Middleware**: Custom logging middleware for API request tracking and debugging
- **Error Handling**: Centralized error handling with proper HTTP status codes and JSON responses

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM with type-safe schema definitions
- **ORM**: Drizzle ORM for database operations with automatic TypeScript type inference
- **Schema Management**: Shared schema definitions between client and server in `/shared` directory
- **Validation**: Zod schemas for runtime data validation and TypeScript type generation
- **Fallback Storage**: In-memory storage implementation for development and testing scenarios

## Development Architecture
- **Monorepo Structure**: Single repository with separate client, server, and shared code organization
- **Module Resolution**: ESModules throughout with custom path aliases for clean imports
- **Development Server**: Vite dev server with hot module replacement integrated with Express backend
- **Type Safety**: Shared types between frontend and backend through common schema definitions
- **Code Organization**: Feature-based file structure with reusable UI components and utility functions

# External Dependencies

## Core Framework Dependencies
- **React**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web application framework for API endpoints
- **TypeScript**: Type system for enhanced developer experience and code reliability
- **Vite**: Build tool and development server with fast hot reloading

## Database and ORM
- **PostgreSQL**: Primary database system (configured but may not be actively used)
- **Neon Database**: Serverless PostgreSQL provider via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database toolkit for schema definition and queries
- **Drizzle Kit**: Database migration and schema management utilities

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Accessible component primitives for complex UI elements
- **shadcn/ui**: Pre-built component library with consistent design patterns
- **Lucide React**: Icon library for consistent iconography throughout the application
- **class-variance-authority**: Utility for creating variant-based component APIs

## Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **TanStack Query**: Server state management with caching and synchronization
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation

## Development and Build Tools
- **PostCSS**: CSS processing with Tailwind CSS integration
- **ESBuild**: Fast bundler for production server builds
- **TSX**: TypeScript execution environment for development
- **date-fns**: Date manipulation utilities for timestamp handling

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tools integration