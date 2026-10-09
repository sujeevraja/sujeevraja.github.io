# sujeevraja.github.io

Source code for my [homepage](https://sujeevraja.github.io), built with [Astro](https://astro.build) and styled with the [Tachyons](https://tachyons.io) CSS toolkit.

## Developing

Install dependencies and start Astro's development server:

```sh
npm install
npm run dev
```

The site is available at the local URL printed by Astro, typically `http://localhost:4321`.

## Building

Create the production build:

```sh
npm run build
```

Preview the generated site locally:

```sh
npm run preview
```

The build output is written to `dist/`.

## Deploying

Pushing to `master` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` to GitHub Pages.

