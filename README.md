# Abode

Personal site for Supriya Srivatsa, refactored to a vanilla HTML/CSS/JavaScript app powered by **Vite** and **Bun**.

## Stack

- Vanilla HTML, CSS, JavaScript (no framework)
- Vite for local dev/build
- Bun for package management and script running

## Getting started

```bash
bun install
bun run dev
```

## Build and preview

```bash
bun run build
bun run preview
```

## Project structure

- `index.html` – app shell
- `src/main.js` – hash-router + page rendering logic
- `src/styles.css` – global styles
- `blog/posts/*.md` – markdown blog source files rendered in the app
- `public/assets` – static assets/icons/images

## Routes

- `#/home` - new responsive homepage
- Legacy pages are available under `#/legacy/*` (for example `#/legacy/blog`, `#/legacy/reachout`).
