# Madhusmita Palai — Portfolio (React)

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
# replace index.html, src/main.jsx and add src/Portfolio.jsx from this folder
npm install && npm run dev
```

Files
- `Portfolio.jsx` — the whole page, one default-exported component. No CSS framework, no UI library.
- `main.jsx` — mount point. `accent` prop sets the highlight colour.
- `index.html` — loads Instrument Sans + JetBrains Mono.

Notes
- Data lives in the `ROLES` and `STACK_GROUPS` constants at the top of `Portfolio.jsx` — edit those, not the markup.
- Section spine uses one `IntersectionObserver`; hover-tracing matches stack tags to roles via `rolesUsing()`.
- Timeline bars are positioned from year floats (`T0` / `SPAN`); add a new role by pushing to the `tracks` array in `<Timeline />`.
