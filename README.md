# Dave B. Lausa — Portfolio (React)

React (Vite) version of the original GitHub Pages portfolio.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build / preview
```bash
npm run build      # outputs to /dist
npm run preview
```

## Structure
- `src/components/` — Navbar, Dropdown, Hero, About, Skills, Projects, ProjectCard, ProjectModal, Lightbox, Contact, Footer, BackToTop
- `src/data/` — `projects.js` (all project cards + modals), `skills.js`, `site.js` (links/contact)
- `src/styles/` — original `style.css` + `dropdown.css`
- `public/` — `avatar.png` and `assets/` (screenshots, icons, resume)

To add a project, add one object to `src/data/projects.js`.
