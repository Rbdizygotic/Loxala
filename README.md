# Loxala Social Platform

A modern social platform interface built with React, TypeScript, and TailwindCSS.

## Features

- **Responsive Design**: Works seamlessly across all devices (mobile, tablet, desktop)
- **Modern UI Components**: Built with Radix UI primitives for accessibility
- **Advanced Form Handling**: Complex contact form with React Hook Form and Zod validation
- **TypeScript**: Full type safety and excellent developer experience
- **TailwindCSS**: Efficient utility-first styling with custom design system
- **Form Validation**: Comprehensive validation with real-time feedback
- **Loading States**: Optimistic UI updates and loading indicators
- **Mock Data Integration**: Demonstrates real-world data handling patterns

## Tech Stack

- **React 18**: Latest React with modern hooks and patterns
- **TypeScript**: Full type safety and IntelliSense support
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework with custom design tokens
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Beautiful, customizable icons

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── ui/             # Reusable UI components (Button, Input, Form, etc.)
├── screens/
│   └── Prototype/      # Main application screen
│       └── sections/   # Feature sections (Profile, Posts, Contact, Navigation)
├── lib/               # Utility functions and helpers
└── types/             # TypeScript type definitions and Zod schemas
```

## Form Implementation

The contact form implements:
- Form validation using Zod schemas
- React Hook Form for form state management
- Optimistic UI updates during form submission
- Responsive design for all device sizes
- Accessible form controls with proper labeling

## Notes and Assumptions

- The project uses mock data for demonstration purposes
- Images are loaded from public URLs
- The design is fully responsive and adapts to different screen sizes
- Form validation is implemented using Zod schemas
- The project follows modern React best practices and patterns
- Form submissions are simulated with a delay to demonstrate loading states

## Development Decisions

- Used Radix UI for accessible component primitives
- Implemented responsive design using TailwindCSS breakpoints
- Structured components for maximum reusability
- Added TypeScript for better type safety and developer experience
- Integrated ESLint for code quality maintenance
- Used React 19's useFormStatus hook for form submission states

## License

MIT
