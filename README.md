# ⚽ Football Analyst

Football Analyst is a React + TypeScript single-page application for exploring football data, teams, players, and match results.

The application uses the API-Football API to retrieve football data.

## 🚀 Features

### 🏠 Home Page

The Home page currently includes:

- Hero section.
- Navigation.
- Last Matches section.
- Team cards.
- Team search.
- "Discover Players" action that takes users to the Players page.

### ⚽ Last Matches

The Home page displays the latest match results using football data retrieved from the API.

The matches are displayed using reusable UI components.

### 🏟️ Teams

Users can:

- Search for teams.
- View team cards.
- Explore teams through the Home page.
- Navigate to the Players page through the "Discover Players" action.

### 👤 Players Page

The Players page has been started and is currently under development.

Implemented so far:

- Players page navigation.
- Players page Hero section.

More player features will be added later.

## 🔎 Search

A reusable Searchbar was implemented to support searching for football data.

The Searchbar is shared between pages instead of creating a separate component for each page.

Search functionality uses:

- React state
- Custom hooks
- Debouncing
- TypeScript
- API services

## 🏗️ Project Architecture

The project was reorganized using a modular architecture.

```text
src/
│
├── components/
│   └── Reusable global components
│
├── libs/
│   └── FootballApi
│
├── module/
│   ├── home/
│   ├── players/
│   └── teams/
│
├── service/
│   ├── players/
│   ├── teams/
│   └── matches/
│
├── App.tsx
└── main.tsx
Architecture responsibilities
module → Code specific to a page or feature.
components → Reusable components shared between modules.
service → API requests and data fetching logic.
libs → API client and external library configuration.
hooks → Reusable React logic.
models → TypeScript interfaces and data models.

This architecture helps keep the application organized and avoids duplicating code between pages.

🎨 UI Improvements

The UI has been redesigned to create a more modern football-focused experience.

Improvements include:

Updated navigation.
New Hero sections.
Redesigned team cards.
Improved match cards.
Improved spacing and typography.
Better page structure.
Updated navigation links.
🧭 Navigation

The navigation was updated to connect the main sections of the application.

Current navigation includes:

Home
Players
Teams

The Discover Players action on the Home page navigates users to the Players page.

🛠️ Technologies
React
TypeScript
Vite
React Router
Swiper
Lucide React
CSS
API-Football
📌 Project Status

The project is currently under development.

Completed
 React + TypeScript setup
 API integration
 New modular architecture
 Home page Hero
 Navigation
 Last Matches section
 Team search
 Team cards
 Reusable Searchbar
 Updated navigation links
 UI redesign
 Discover Players navigation
 Players page Hero
 Players page Navigation
In Progress
 Complete Players page
 Player cards
 Player statistics
 Player search
 Player details
 Complete Teams page
 More football features
