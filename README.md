# Forno Rosso — Pizza Site

A self-contained, no-build static site. No images to source — all artwork
(pizzas, oven, flame, brand mark) is hand-drawn inline SVG, so nothing breaks
or goes missing when you deploy.

## Files
- `index.html` — all page content
- `style.css` — design system + layout + animations
- `script.js` — mobile nav, scroll reveals, ember particles, order form
- `assets/favicon.svg` — tab icon

## Deploy to GitHub Pages at `merajahmad1150.github.io/pizza`

1. Create a new repo named exactly `pizza` under your `merajahmad1150` account.
2. Upload these four items (`index.html`, `style.css`, `script.js`, `assets/`)
   to the **root** of that repo (not inside a subfolder).
3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`, then **Save**.
4. Wait 1–2 minutes, then visit `https://merajahmad1150.github.io/pizza`.

If you ever rename the repo to something other than `pizza`, the URL updates
to match — no code changes needed, since all paths here are relative.

## Notes
- The order form is front-end only right now (shows a confirmation message
  but doesn't send anywhere). To receive real submissions, point it at
  Formspree, Netlify Forms, or your own endpoint — see the comment at the
  bottom of `script.js`.
- Fonts (Fraunces, Work Sans, JetBrains Mono) load from Google Fonts, so the
  page needs an internet connection to show them — it falls back to system
  fonts gracefully if that's ever blocked.
- Colors, copy (Forno Rosso, menu items, prices, address, hours) are all
  placeholders for a fictional pizzeria — swap in real details before going
  live.
