# Portfolio Website

## Overview

This is a personal portfolio website for Jomar N. Abaten, a back-end developer and system administrator. The application showcases professional certifications, technical expertise, and contact information through a modern, responsive single-page application. Built with React and TypeScript on the frontend with Express.js backend infrastructure, the site demonstrates proficiency in full-stack development while maintaining focus on back-end capabilities and system administration skills.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for smooth transitions and interactive elements
- **UI Components**: Comprehensive Radix UI component library with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Storage Strategy**: Dual implementation with in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful API structure with `/api` prefix routing
- **Development Setup**: Vite integration for hot module replacement and development server

### Build and Development Tools
- **Build System**: Vite for frontend bundling with esbuild for server compilation
- **Package Management**: npm with lock file for dependency consistency
- **Development Server**: Integrated Vite dev server with Express proxy setup
- **TypeScript Configuration**: Strict mode enabled with modern module resolution
- **Code Quality**: ESLint and Prettier integration through development tools

### Database Design
- **Users Table**: Authentication-ready user management with UUID primary keys
- **Certificates Table**: Portfolio content management for professional certifications
- **Schema Management**: Drizzle migrations with versioned schema evolution
- **Connection**: Neon Database serverless PostgreSQL for production deployment

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless deployments
- **drizzle-orm** and **drizzle-kit**: Type-safe database operations and migrations
- **express**: Web application framework for API routes and middleware
- **@tanstack/react-query**: Efficient server state management and data fetching

### UI and Styling Libraries
- **@radix-ui/***: Comprehensive accessible component primitives (20+ packages)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **framer-motion**: Animation library for enhanced user interactions
- **lucide-react**: Modern icon library with consistent design language

### Development and Build Tools
- **vite**: Fast build tool and development server with React plugin support
- **tsx**: TypeScript execution engine for Node.js development
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting for Replit environment
- **wouter**: Minimalist React router for single-page application navigation

### Form and Validation
- **react-hook-form**: Performant form library with validation support
- **@hookform/resolvers**: Integration layer for validation schema libraries
- **zod**: TypeScript-first schema validation for form data and API contracts