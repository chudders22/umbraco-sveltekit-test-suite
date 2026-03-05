# Umbraco & SvelteKit Blog

This project is a modern, headless blog setup utilizing [Umbraco CMS](https://umbraco.com/) for content management and [SvelteKit](https://kit.svelte.dev/) for the frontend presentation.

## Architecture

*   **Backend (Umbraco):** Acts as a headless CMS, providing content via the Content Delivery API.
*   **Frontend (SvelteKit):** A fast, modern frontend framework that consumes the Umbraco API to render the blog.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Component Development & Testing:** [Storybook](https://storybook.js.org/) alongside [Vitest](https://vitest.dev/).

## Features

*   **Blocklist Editor:** Component-based page building in Umbraco (headers, footers, text blocks, image galleries, video embeds, code embeds).
*   **Headless Content Delivery:** Uses Umbraco's Content Delivery API.
*   **Type Safety:** Uses `openapi-typescript` to generate frontend models directly from the Umbraco Swagger definition.
*   **uSync:** Used for serializing Umbraco schema and configurations, ensuring easy synchronization between environments.
*   **Storybook Integration:** Isolated component development with automated visual regression and accessibility testing.

## Prerequisites

*   [.NET SDK](https://dotnet.microsoft.com/download)
*   [Node.js](https://nodejs.org/) (Version 20 or later recommended)

## Getting Started

### 1. Backend Setup (Umbraco)

The backend is located in the `Application.Cms` directory. It uses a SQLite database out of the box for easy local development.

```bash
cd Application.Cms
dotnet build
dotnet run
```

*   **Umbraco Backoffice:** `https://localhost:44356/umbraco`
*   **Swagger API Docs:** `https://localhost:44356/umbraco/swagger`

*(Note: The exact port might differ based on your local `launchSettings.json`. Check the terminal output when running the backend.)*

### 2. Frontend Setup (SvelteKit)

The frontend project is located in the `Frontend` directory.

```bash
cd Frontend
npm install
npm run dev
```

The frontend will start a Vite development server (typically at `http://localhost:5173`). Note that it expects the Umbraco backend to be running to fetch content and structure.

#### Frontend Scripts

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the SvelteKit app for production.
*   `npm run generate-types`: Generates TypeScript interfaces from the running Umbraco Swagger endpoint. Ensure Umbraco is running locally on port 44356 before executing this command.
*   `npm run storybook`: Starts the Storybook development server on port 6006.
*   `npm run build-storybook`: Builds the Storybook static site.
*   `npm run test:storybook`: Runs Vitest for Storybook component tests.
*   `npm run format`: Formats code using Prettier.

## Component Workflow

1.  **Define in Umbraco:** Create your Document Types and Blocks using the Umbraco backoffice.
2.  **Sync Definition:** uSync captures changes to the schema to commit to source control.
3.  **Generate Types:** Run `npm run generate-types` in the `Frontend` directory to update your `src/lib/types/umbraco.d.ts` file based on the generated Swagger definitions.
4.  **Build Component:** Create the corresponding Svelte component in `Frontend/src/lib/components`.
5.  **Storybook Testing:** Document and test the component visually in Storybook using `.stories.ts` files.
