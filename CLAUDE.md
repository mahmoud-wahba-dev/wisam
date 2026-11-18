# wissam

Arabic, right-to-left marketing site (`<html lang="ar" dir="rtl">`).

## Stack
- Vite 8 + React 19 (React Compiler enabled through Babel). JavaScript/JSX, no TypeScript. **Not Next.js.**
- Tailwind v4 through `@tailwindcss/vite`, with daisyUI 5. Theme tokens, daisyUI themes and `@font-face` live in `src/index.css` (`@theme` block).
- Routing: `react-router` v8 with `createBrowserRouter` in `src/App.jsx`.
- Animation: `motion` (import from `motion/react`), `aos`, and `swiper` for sliders.
- Lint: `npm run lint` (oxlint). Dev server: `npm run dev`. There are no tests.

## Layout
- `@/` is an alias for `src/`.
- `src/pages/<page>/`: route pages. Homepage sections are in `src/pages/home/components/`.
- `src/componets/` (spelled like this on purpose; don't rename it): shared `ui/` components and `slider/`.
- `src/data/`: static content (nav, news, products, programs…). Put copy here, not inside components.
- `src/lib/utils.js`: `cn()` (clsx + tailwind-merge). `src/lib/placeholder.js`: `ph(seed, w, h)` and `box(w, h, label)` for placeholder images.

## Conventions
- RTL first: use logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) rather than `ml`/`mr`/`left`/`right`. Mirror any directional animation.
- Animation: use `motion` by default (hover, `whileInView` reveals, layout, springs). Add GSAP + ScrollTrigger only for pinned or scrubbed scroll timelines. AOS is legacy: don't add new `data-aos` usage, and move sections to `motion` when you touch them. Always respect `prefers-reduced-motion`.
- Use design tokens from `@theme` and daisyUI themes, not hard-coded hex values.
- Secrets go in `.env.local` (gitignored). Never prefix a secret with `VITE_`, because those values are bundled into the client.
