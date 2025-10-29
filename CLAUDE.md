# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Doc Reader Pro is a React application built with Vite, TypeScript, and shadcn-ui. The project is managed through Lovable (https://lovable.dev) and uses Supabase as the backend.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Directory Structure

- **src/pages/**: Page-level components that represent distinct routes
  - `Index.tsx`: Main landing page composing Hero, Features, Dashboard, CTA, and Footer sections
  - `NotFound.tsx`: 404 error page
- **src/components/**: Reusable React components
  - Custom components (Hero, Features, Dashboard, CTA, Footer) live at the root
  - **ui/**: shadcn-ui components (auto-generated, generally shouldn't be manually edited)
- **src/hooks/**: Custom React hooks
  - `use-mobile.tsx`: Hook for detecting mobile viewport
  - `use-toast.ts`: Toast notification hook
- **src/integrations/supabase/**: Supabase integration
  - `client.ts`: Auto-generated Supabase client (uses VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY)
  - `types.ts`: Auto-generated TypeScript types from Supabase schema
- **src/lib/**: Utility functions
  - `utils.ts`: Contains cn() helper for className merging

### Key Technologies

- **Vite**: Build tool and dev server
- **React 18** with **TypeScript**: UI framework
- **shadcn-ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **TanStack Query**: Server state management (QueryClient configured in App.tsx)
- **React Router v6**: Client-side routing
- **Supabase**: Backend as a service (authentication, database, storage)
- **lucide-react**: Icon library

### Path Aliases

The project uses TypeScript path aliases configured in `vite.config.ts` and `components.json`:
- `@/`: Resolves to `./src/`
- `@/components`: Components directory
- `@/lib`: Library/utilities
- `@/hooks`: Custom hooks
- `@/integrations/supabase`: Supabase client and types

### Application Structure

The app entry point is `src/main.tsx`, which renders `App.tsx`. The App component wraps the entire application with:
1. QueryClientProvider (TanStack Query)
2. TooltipProvider (shadcn-ui)
3. Toaster components (for notifications)
4. BrowserRouter (React Router)

Routes are defined in `src/App.tsx`. Add new routes before the catch-all "*" route.

## Working with shadcn-ui

shadcn-ui components are located in `src/components/ui/`. These are typically auto-generated and should not be manually edited unless necessary. To add new shadcn-ui components, use the shadcn-cli:

```bash
npx shadcn@latest add [component-name]
```

Configuration is in `components.json` with:
- Style: default
- Base color: slate
- CSS variables: enabled
- TypeScript: enabled

## Supabase Integration

The Supabase client is pre-configured in `src/integrations/supabase/client.ts` with:
- localStorage for auth persistence
- Auto token refresh enabled
- Session persistence enabled

Import the client like:
```typescript
import { supabase } from "@/integrations/supabase/client";
```

Environment variables required:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## Styling Conventions

- Use Tailwind utility classes for styling
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- Follow the design system colors defined in Tailwind config (uses CSS variables)
- Components use semantic color tokens: `foreground`, `background`, `muted`, `accent`, `destructive`, `primary`, `secondary`, `border`, `card`

## Adding New Routes

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx` before the "*" catch-all route
3. Use React Router's `<Route>` component with path and element props

## Lovable Integration

This project is managed through Lovable. Changes made via the Lovable UI are automatically committed. The `lovable-tagger` plugin is active in development mode for component identification.

## Important Notes

- The dev server runs on port 8080 with IPv6 host (::)
- All UI components are based on Radix UI primitives wrapped with Tailwind styling
- Type safety is enforced throughout with TypeScript strict mode
