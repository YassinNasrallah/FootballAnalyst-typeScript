# ⚽ FootballAnalyse

A football analysis web application built with **React, TypeScript, OOP, and a Football API**.

The goal of this project is to practice building a real-world React application while applying **Object-Oriented Programming, TypeScript models, API integration, Context API, and custom React hooks**.

> 🚧 **Project Status:** In Development

---

## 🛠️ Technologies

* React
* TypeScript
* Vite
* React Router
* Context API
* Object-Oriented Programming (OOP)
* REST API
* Custom React Hooks
* CSS
* Lucide React

---

## 📁 Project Structure

```text
src/
│
├── api/
│   └── Api.ts
│
├── components/
│   └── navbar/
│       ├── Navigation.tsx
│       ├── Searchwrapper.tsx
│       ├── Searchbar.tsx
│       └── Suggestions.tsx
│
├── hooks/
│   ├── useSearch.ts
│   ├── useDebounce.ts
│   └── useFootball.tsx
│
├── service/
│   └── useFootballSearch.ts
│
├── models/
│   ├── PlayerModel.ts
│   └── TeamModel.ts
│
├── pages/
│   └── Home.tsx
│
├── App.tsx
└── main.tsx
```

---

# 🧱 OOP and Models

The project uses TypeScript models to represent football data.

### Player Model

The `PlayerModel` describes the structure of player information received from the API.

For example, a player can contain information such as:

* ID
* Name
* Photo
* Position
* Team
* Other player information

### Team Model

The `TeamModel` describes football club information.

It can contain:

* ID
* Name
* Country
* Logo
* Code
* Other team information

Using models helps TypeScript understand the structure of the API data and provides better type safety throughout the application.

---

# 🌐 API Layer

The project uses an API class to communicate with the football API.

```text
api/
└── Api.ts
```

The API class is responsible for making requests and retrieving football data.

Examples of API operations include:

```text
_getplayers()
_getteams()
_getMatches()
_getMatchById()
```

The goal is to keep API communication separate from the UI components.

```text
React Components
       ↓
Custom Hooks
       ↓
API Class
       ↓
Football API
```

This makes the application easier to maintain and understand.

---

# 🔍 Search System

The search system is divided into several responsibilities instead of putting everything inside one component.

```text
Searchbar
    ↓
useSearch
    ↓
useDebounce
    ↓
useFootballSearch
    ↓
Api
```

This separation keeps the React components focused mainly on the UI.

---

## 🔎 `useSearch`

`useSearch` is a custom hook responsible for managing the search input.

It stores:

* The current search value
* The input change handler

Conceptually:

```text
User types
    ↓
handleChange
    ↓
search state
```

This allows the search input logic to be reused without putting the state directly inside the component.

---

## ⏱️ `useDebounce`

`useDebounce` prevents the application from making an API request every time the user presses a key.

For example, without debounce:

```text
R       → API request
Ro      → API request
Ron     → API request
Rona    → API request
Ronaldo → API request
```

This can create unnecessary API requests.

With debounce:

```text
Ronaldo
   ↓
wait
   ↓
user stops typing
   ↓
API request
```

The debounce delay can be configured, for example:

```text
500ms
```

---

# ⚽ `useFootballSearch`

`useFootballSearch` connects the search system with the football API.

Its responsibilities include:

* Getting the search value
* Using the debounced search value
* Calling the player API
* Calling the team API
* Storing player results
* Storing team results
* Returning the search results

The general flow is:

```text
Search value
     ↓
Debounce
     ↓
Debounced search
     ↓
API._getplayers()
     ↓
Player results

Debounced search
     ↓
API._getteams()
     ↓
Team results
```

The hook returns:

```text
players
teams
search
```

so other parts of the application can use the results.

---

# 🌍 Context API

The project also uses **React Context** to share football-related state between components.

Instead of passing data through many levels of components:

```text
Navigation
   ↓
Searchwrapper
   ↓
Searchbar
```

Context allows components to access shared data directly.

The project contains a custom `useFootball` hook that provides access to the football context.

Conceptually:

```text
Context Provider
       ↓
   useFootball()
       ↓
Shared football state
```

This can be used for values such as:

* Search
* Search handler
* Players
* Teams
* Loading state
* API instance

---

# 🧩 Components

## `Searchbar`

The `Searchbar` component is responsible for displaying the search input.

It uses the football context to access:

```text
search
handleChange
```

The component focuses on displaying the UI rather than handling the API logic.

---

## `Searchwrapper`

`Searchwrapper` connects the search input and search suggestions.

It uses:

```text
useFootballSearch()
```

and gets:

```text
search
players
teams
```

It then displays the suggestions when the user has entered a search value.

```text
Searchwrapper
│
├── Searchbar
│
└── Suggestions
```

---

## `Suggestions`

`Suggestions` displays search results.

It can display:

### Players

```text
Player image
Player name
Position
```

### Teams

```text
Team logo
Team name
Country
```

The component can also use React Router to navigate to a player's page when a player is selected.

---

# 🧭 React Router

React Router is used for application navigation.

For example, selecting a player can navigate to:

```text
/players/:id
```

This allows the application to have separate pages for football data.

---

# 🎯 Architecture

The project is organized so that different parts have different responsibilities.

```text
                 React Application
                        │
          ┌─────────────┴─────────────┐
          ↓                           ↓
      Components                   Context
          │                           │
          ↓                           ↓
      Custom Hooks              Shared State
          │
          ↓
      API Class
          │
          ↓
     Football API
```

### Responsibilities

| Part         | Responsibility                      |
| ------------ | ----------------------------------- |
| Components   | UI and presentation                 |
| Models       | Data structure and TypeScript types |
| Hooks        | React logic and reusable behavior   |
| Context      | Shared application state            |
| API Class    | API communication                   |
| React Router | Navigation                          |

---

# 🚧 Current Development

The project is still under development.

Current work includes:

* Search functionality
* Debounced API requests
* Player search
* Team search
* Search suggestions
* Context API
* Player navigation
* Football data models
* API integration

More football analysis features and pages will be added as development continues.

---

# 🎓 What I'm Practicing

This project is also a learning project focused on improving my understanding of:

* React
* TypeScript
* OOP
* Classes
* Models
* Custom Hooks
* Context API
* API integration
* Async/Await
* REST APIs
* React Router
* Component architecture
* Separation of responsibilities
* Type safety

---

# 📌 Project Goal

The goal of FootballAnalyse is not only to build a football application, but also to practice how to structure a larger React + TypeScript project using reusable components, custom hooks, models, API classes, and shared state.

The project will continue to evolve as new football analysis features are implemented.
