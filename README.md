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

- `index.html` - app shell
- `src/main.js` - pathname router + page rendering logic
- `src/templates/*.html` - route-specific HTML templates
- `src/styles.css` - global styles
- `bookshelf/README.md` - source content area for the bookshelf section
- `blog/posts/*.md` - archived markdown files kept in the repository
- `public/assets` - static assets/icons/images

## Routes

- `/` - responsive homepage
- `/bookshelf` - bookshelf page
