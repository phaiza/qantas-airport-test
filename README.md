# ✈️ Qantas Airport Explorer

A responsive React app that displays airports where Qantas operates. It fetches data from a public API, supports search, filters, and details view for each airport.

## 🌍 Live Demo

The app is deployed and accessible at:

[https://qantas-airport-test.vercel.app/](https://qantas-airport-test.vercel.app/)

## 🔧 Tech Stack

- **React 19 + Vite**
- **TypeScript**
- **React Query** – for data fetching & caching
- **React Router** – for routing
- **SASS (CSS Modules)** – for styling
- **Vitest + React Testing Library** – for unit tests
- **Prettier + ESLint + Husky + Lint-staged** – for code quality

## 🚀 Features

- Responsive UI (mobile-first)
- Paginated airport list with **"Load More"**
- Search + filters (international, domestic, regional)
- Detail view with structured airport info
- Loading states with suspense and spinners
- Smooth animations & accessible markup

## 📦 Getting Started

```bash
# Clone the repo
git clone [https://github.com/your-username/qantas-airport-test.git](https://github.com/phaiza/qantas-airport-test.git)
cd qantas-airport-test

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧪 Running Tests

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
```

## 🧹 Linting & Formatting

```bash
# Lint all files
npm run lint

# Format all files with Prettier
npm run format
```

## 🔒 Pre-commit Hook

Pre-commit checks are powered by **Husky** and **Lint-staged**. On commit:

- ESLint will fix issues
- Prettier will format code

## 📁 Project Structure

```
src/
  ├── assets/              # Static assets
  ├── components/          # UI components
  ├── pages/               # Route-based pages
  ├── styles/              # Global styles
  ├── tests/               # Unit tests
  ├── types/               # TypeScript types
  ├── utils/               # Helper functions
  └── main.tsx             # App entry
```

## 🌐 API Used

Data is fetched from:

```
https://api.qantas.com/flight/refData/airport
```

## 👩‍💻 Author

Faiza Ahmed  
[LinkedIn](https://www.linkedin.com/in/phaiza19/) | [GitHub](https://github.com/phaiza)
