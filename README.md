# Flight Mood Board

Flight Mood Board is a lightweight interactive application built with **Vue 3** that allows users to select a travel mood and instantly discover ideal destinations with direct flight options.

This project was built manually from scratch to demonstrate a solid understanding of a modern frontend build pipeline, creating the application architecture without using scaffolding tools.

![Flight Mood Board](/flightmoodboardappshowcase.gif)

---

# Project Overview

The primary goal of this project is to demonstrate production-level frontend engineering skills across several key areas:

- **Manual Build Pipeline**
  - Configuration of **Webpack 5**, **Babel**, and all required loaders completely from scratch.
  - Understanding of module bundling, asset optimization, and production builds.

- **SASS Architecture**
  - Modular styling using the modern `@use` directive instead of the deprecated `@import`.
  - Reusable variables, mixins, and partials following scalable architecture principles.

- **Code Quality & Testing**
  - Unit testing with **Mocha** and **Chai**.
  - Tests focused on the application's filtering logic.

- **Vue 3 Composition API**
  - Clean implementation using:
    - `ref`
    - `computed`
    - `props`
    - `emits`

---

## AI-Assisted Engineering

GitHub Copilot and Claude were used as development copilots to accelerate implementation while solving complex issues involving:

- Manual Webpack configuration
- Dependency management
- Build optimization
- Development workflow improvements

## Layered Architecture

The application separates concerns into independent layers:

- **Presentation Layer**
  - Vue components
  - UI rendering
  - User interaction

- **Logic Layer**
  - Pure JavaScript utility modules
  - Filtering logic
  - Data processing

# Getting Started

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run serve
```

## Run Unit Tests

```bash
npm test
```

## Build for Production

```bash
npm run build
```

---

# Features

### Interactive Mood Selection

A dynamic travel mood selector featuring:

- Adventure
- Relaxation
- Culture
- Gastronomy

Includes interactive active states and smooth visual transitions.

### Responsive Grid System

A fully responsive destination grid that automatically adapts to different screen sizes.

---

# Technologies

## Frontend

- Vue 3
- Composition API

## Build & Bundling

- Webpack 5
- Babel 7
- Vue Loader v17

## Styling

- SASS
- Dart Sass
- Modular architecture using `@use`

## Testing

- Mocha
- Chai

---

# Author

**Tanimara Elias Santos**

---

# Version

**1.0.0**
