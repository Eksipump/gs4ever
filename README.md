# GS4EVER

Guild website built with Next.js, TypeScript, and Tailwind CSS v4.

All page styling is handled directly in the JSX using Tailwind CSS utility classes. `app/globals.css` only contains the Tailwind import, smooth scrolling, and global background styles.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Customization

- **Discord URL:** update `DISCORD_URL` in `app/content.ts`.
- **Guild content:** progression, recruitment, navigation links, highlights, GSF rules, and FAQ content can be updated in `app/content.ts`.
- **Header image:** replace `public/header.png`.
- **Logo:** replace `public/logo.png`.

## Roadmap

- Expand the dashboard with more detailed guild and progression pages.
- Integrate Blizzard APIs to automatically manage and update the guild roster.
- Automatically synchronize PvE progression data when the required APIs become available.

## AI-Assisted Development

This small project was built as an experiment with **vibe coding** and AI-assisted development.

The website was created in less than an hour with the help of AI tools. The generated code was reviewed and tested by me before being integrated.

The goal was simply to experiment with how quickly a basic showcase website could be built using an AI-assisted workflow.
