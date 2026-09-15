# 32:18 Research

32:18 is a data-driven research project examining housing, wealth, and the widening class divide in America. Each piece starts with a thesis, pulls public data, and lays out the results, graphs, numbers, and conclusions, with source data published alongside so anyone can reproduce or challenge the analysis.

## Tech Stack

The site is built with [Astro](https://astro.build), using a mix of TypeScript, JavaScript, CSS, and Markdown/MDX for content. Content collections (Research and Case Studies) are defined in `src/content.config.ts` and pulled in via `getCollection()`.

It's statically built and hosted on GitHub Pages, with builds and deploys handled automatically by GitHub Actions on every push to `master`.

## Project Structure

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── research/
│   │   └── case-studies/
│   ├── layouts/
│   └── pages/
│       ├── research/
│       ├── case-studies/
│       └── about/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

All commands run from the project root, in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`              | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally before deploying      |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check` |