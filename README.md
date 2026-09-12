# Services Brief 📋

A concise, shareable services portfolio for clients, founders, and hiring managers.

This site is the digital version of a one-page services brief. It explains who I am, what I build, and how we can start working together — ready for email, LinkedIn, or a live URL on Netlify.

---

## Why this exists 🎯

I needed a clean leave-behind that is faster than a full portfolio and clearer than a resume.

- **For clients** — three services, a simple process, and a direct next step
- **For my network** — a page they can forward without extra explanation
- **For me** — one place to keep the pitch consistent across PDF, web, and outreach

The work behind it is frontend-focused full stack: React, Next.js, pixel-perfect UI, production debugging, and products that have shipped inside live bank apps.

---

## What it does ✨

| Section | Purpose |
| --- | --- |
| Hero | Name, role, and the one-line pitch |
| Proof | Animated stats: years of experience, bank-live products, real-time work |
| About | Trust-building story, including Hysab Kytab PFM and Omni Vision |
| Services | Product UI, production care, and full-stack engineering |
| How it works | A 3-step path: scope, build, ship |
| Call to action | Email, LinkedIn, and portfolio links |
| Theme toggle | Light and dark mode, saved in the browser |

---

## Tech stack 🧩

| Area | Choice |
| --- | --- |
| Framework | **Next.js 15** (App Router, static export) |
| UI | **React 19** |
| Language | **TypeScript** |
| Styling | **CSS Modules** + global design tokens |
| Font | **Manrope** via `next/font` |
| Motion | Intersection Observer counters and scroll reveals |
| Theme | `data-theme` + `localStorage`, no flash on load |
| Hosting | Static `out/` folder — **Netlify** |

No backend. No CMS. One page, built to ship.

---

## Project structure 📂

```text
app/                  # layout, page, global styles
components/
  Hero/               # headline + theme toggle
  Proof/              # animated proof points
  About/              # why work with me
  Services/           # three core offers
  Process/            # how it works
  CallToAction/       # contact
  SiteFooter/
  CountUp/            # number animation
  Reveal/             # scroll-in motion
  ThemeProvider/
  ThemeToggle/
hooks/                # useInView
```

Each component keeps its `.tsx` and `.module.css` in the same folder.

---

## Run locally ⚡

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # writes a static site to /out
```

Force a theme while testing:

- `/?theme=light`
- `/?theme=dark`

---

## Deploy 🚀

**Netlify** — `netlify.toml` already sets:

- build command: `npm run build`
- publish folder: `out`

---

## Author 👤

**Muhammad Mukarram Asad**  
Frontend-focused full stack developer

- Email: [mukarramasad89@gmail.com](mailto:mukarramasad89@gmail.com)
- LinkedIn: [linkedin.com/in/mukarram-asad](https://www.linkedin.com/in/mukarram-asad)
- Portfolio: [mukarram-portfolio.netlify.app](https://mukarram-portfolio.netlify.app/)

---

© 2026 Muhammad Mukarram Asad
