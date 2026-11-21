# Balaji — Portfolio

A React (Vite) portfolio built from my résumé, with pure-CSS animations.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content

Everything (bio, skills, jobs, projects, contact) lives in `src/data.js`.
Change the text there and the whole site updates.

## What's animated

| Effect | Where |
| --- | --- |
| Masked line-by-line title rise, typing caret | Hero |
| Floating gradient blobs, drifting grid | Hero background |
| Infinite tech marquee (pauses on hover) | Hero footer |
| Scroll-reveal (IntersectionObserver) | Every section |
| Count-up stats | About |
| Staggered skill chips | Skills |
| Drawing timeline line + pulsing dot | Experience |
| Cursor spotlight + 3D tilt, filter replay | Projects |
| Scroll-progress bar, active-link highlight | Navbar |
| Breathing glow | Contact |

`prefers-reduced-motion` is respected: users who opt out get a static page.

## Structure

```
src/
  data.js            content
  hooks.js           useInView, useTyping, useCountUp, useActiveSection, useScrollProgress
  styles.css         tokens, layout, all keyframes
  components/        Navbar, Hero, About, Skills, Experience, Projects, Contact, Reveal
```

## Deploy

Push to GitHub and import the repo into Vercel or Netlify (build command
`npm run build`, output directory `dist`).
