# Abode

Personal site for Supriya Srivatsa, refactored to a vanilla HTML/CSS/JavaScript app powered by **Vite** and **Bun**.

## Stack

- Vanilla HTML + CSS
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

- `index.html` - homepage
- `bookshelf.html` - bookshelf page
- `src/styles.css` - global styles
- `vite.config.js` - multi-page build inputs
- `bookshelf/README.md` - source content area for the bookshelf section
- `blog/posts/*.md` - archived markdown files kept in the repository
- `public/assets` - static assets/icons/images
- `public/_redirects` - Netlify route mapping (`/bookshelf` to `/bookshelf.html`)

## Routes

- `/` - responsive homepage
- `/bookshelf` - bookshelf page
