# SAURABH — Portfolio

A personal portfolio site built with React and Tailwind CSS, styled around a retro / neo-brutalist theme (hard black offset shadows, zero border radius, a warm off-white palette).

## Tech stack

- **React 18** with [Create React App](https://github.com/facebook/create-react-app) (`react-scripts`)
- **Tailwind CSS 3** — custom `retro` design tokens in [tailwind.config.js](tailwind.config.js)
- **Animation** — GSAP, Framer Motion / Motion, React Spring, Lottie
- **3D / WebGL** — Three.js, OGL
- **UI** — MUI, Emotion, Lucide, React Icons, FontAwesome
- **Analytics** — React GA4, Vercel Speed Insights

## Getting started

```bash
npm install
npm start
```

The dev server runs at http://localhost:3000 and reloads on save.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Production build into `build/` |
| `npm test` | Run tests in watch mode |
| `npm run eject` | Eject CRA config (one-way) |

## Project structure

```
public/            Static assets, resumes (PDF), favicon, index.html
scripts/           Utility scripts (e.g. inspect-retroui.js)
src/
  App.jsx          Root component — composes all page sections
  components/      Page sections (Hero, Work, About, Contact, ...)
  animate_compo/   Reusable animation primitives
  ui/              Small presentational UI pieces
  assests/         Images, logos and tech icons
_retroui_ref/      Design reference screenshots + structure notes
```

## Page sections

Rendered in order from [src/App.jsx](src/App.jsx):

`Header` → `Hero` → `QuoteCard` → `Technology` → `WorkFlow` → `SkillProof` → `Work` → `About` → `TechImpact` → `Contact` → `Footer`

Additional components not currently mounted in `App.jsx`: `InterViewFAQ`, `Projects`, `ResumeMenu`, `Services`, `SkillPlayGround`.

## Design tokens

Defined under `theme.extend` in [tailwind.config.js](tailwind.config.js):

- **Colors** — `retro-bg` `#f5ece7`, `retro-ink` `#000000`, plus accents (`yellow`, `pink`, `lime`, `blue`, `orange`, `purple`)
- **Shadows** — `shadow-retro`, `shadow-retro-md`, `shadow-retro-lg` (solid black offsets)
- **Fonts** — `font-display` (Archivo Black), `font-sans` (Space Grotesk), `font-mono` (JetBrains Mono)

## Build

```bash
npm run build
```

Outputs a minified, hashed production bundle to `build/`, ready to deploy to any static host.
