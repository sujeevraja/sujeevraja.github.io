# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development** (two terminals needed):
```bash
npm run start   # watches src/ and rebuilds bin/app.js on change
npm run bs      # serves index.html via Browsersync at localhost:3000 (Firefox)
```

**Production build:**
```bash
npm run build   # produces minified bin/app.js via webpack
```

Deploying = committing the built `bin/app.js` to master. GitHub Pages serves the site directly from this repo.

There are no tests.

## Architecture

This is a single-page personal website using **MithrilJS** for UI/routing and **Tachyons** for CSS (utility classes via CDN in `index.html`). Webpack bundles `src/` into `bin/app.js`.

**Routing** (`src/index.js`): Mithril client-side routes map URL paths (e.g. `/publications`) to view components. Each route is wrapped in a `Body` layout via `buildRouteResolver`.

**Layout** (`src/views/Body.js`): Every page renders `Header → Content → Footer`. `Content` wraps children with a page title and max-width constraint.

**Models** (`src/models/`): Two patterns exist:
- **Static models** (e.g. `Bio.js`): Plain JS objects with hardcoded content, including inline Mithril vnodes for links.
- **Dynamic models** (e.g. `Presentation.js`, `Publication.js`): Load data at runtime via `m.request()` from JSON files in `assets/`. They cache results in a `list` array and a `loaded` flag; views call `loadList()` in `oninit` only if not yet loaded.

**Views** (`src/views/`): Each view exports a Mithril component with a `view` function (and optionally `oninit`). Views consuming dynamic models check `model.loaded` and call `model.loadList()` in `oninit`. The `title` property on view exports is used by the router to set the page heading.

**Content data** (`assets/*.json`): `presentations.json`, `experience.json`, `education.json`, and `yetToBePublished.json` drive the dynamic pages. `publications.json` appears unused (the Publications page loads from `yetToBePublished.json`).

**Tachyons classes**: See the comment block at the top of `src/index.js` for a quick reference of commonly used classes and their meanings.
