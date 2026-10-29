# Nisam — a visual notebook

A responsive, motion-led single-page portfolio for Nisam, with editorial typography, layered CSS depth, scroll reveals, responsive anchor navigation, a featured visual study, and editable demonstration project dialogs.

## Run locally

```sh
bun install
bun run dev        # http://localhost:5173
bun run typecheck
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
```

## Make it yours

- `src/data/site.ts` contains the introductory copy, contact details, social links, focus areas, process steps and three demonstration project records. Replace the sample projects and dates with real content before publishing.
- Project, archive and portrait imagery is in `public/images`. The portrait and project images are illustrative placeholders; replace them with approved images.
- `src/app/pages/Home.tsx`, `src/app/pages/About.tsx`, `src/app/components/Nav.tsx` and `src/app/components/Footer.tsx` compose the single continuous page and its interactions.
- `src/app/components/motion.tsx` contains reusable masked headings, image reveals, directional entrances and subtle scroll parallax. Reduced-motion preferences are respected.
- `src/styles.css` defines the warm paper, ink and restrained vermilion palette, responsive editorial layouts, animation styles and mobile navigation.
- Contact currently uses an honest `mailto:` fallback. Edit the email address and social links in `src/data/site.ts`; no form or message backend is configured.

The project was adapted from the Freebuff Portfolio starter. The project list is explicitly demonstration content, not a record of Nisam’s actual work or qualifications.

## Deploy with Freebuff Sites

After `bun run build`, `deploy.json` describes the Worker and public asset directories for the Sites deployer.
