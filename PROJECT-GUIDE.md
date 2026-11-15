# PROJECT-GUIDE — Hasanull Portfolio

Ei file-e sob kichu ekjayga-y ache: **konta kothay**, **kivabe kaj kore**, ar **kon jinis kivabe change korbe**.

---

## 1. Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build kora site local-e dekho
```

Deploy (Vercel): repo import koro. `vercel.json` already ache, tai `/about`, `/technology` er moto deep link refresh korleo kaj korbe.

---

## 2. Folder map (kothay ki ache)

```
portfolio/
├─ index.html              Google Fonts <link>, body-r default class (bg, font, 0.95rem)
├─ package.json            react, react-dom, react-router-dom (runtime) + vite, tailwind (dev)
├─ vite.config.js          Vite + React plugin, port 5173
├─ tailwind.config.js      COLOURS (tech, admin, neutral), FONTS, ANIMATIONS (keyframes)
├─ postcss.config.js       tailwind + autoprefixer
├─ vercel.json             sob path -> /index.html rewrite
├─ PROJECT-GUIDE.md        ei file
├─ README.md               short intro
└─ src/
   ├─ main.jsx             React start + BrowserRouter
   ├─ App.jsx              Routes, Navbar, Footer, page fade-up wrapper
   ├─ index.css            @tailwind + colour variables + dark mode + focus + reduced-motion (ar kichu na)
   ├─ lib/
   │  └─ content.js        EMAIL, LINKEDIN, GITHUB + projects, skills, responsibilities, case studies, principles
   ├─ components/
   │  ├─ Navbar.jsx        floating pill navbar + mobile overlay menu
   │  ├─ ThemeToggle.jsx   Light/Dark button (navbar-e)
   │  ├─ Footer.jsx        dark footer (Navigate / Pathways / Connect)
   │  ├─ LiveCard.jsx      hover / touch / reduced-motion "live" behaviour
   │  ├─ Reveal.jsx        scroll-e fade + 14px rise (ekbar)
   │  ├─ CodeArt.jsx       typewriter code window (decorative)
   │  ├─ Marquee.jsx       infinite scrolling strip
   │  ├─ ContactForm.jsx   name/email/message form + mailto logic
   │  └─ ScrollToTop.jsx   route change-e page top-e niye jay
   └─ pages/
      ├─ Home.jsx          Hero, Marquee, Two pathway cards
      ├─ About.jsx         6 ta card
      ├─ Administration.jsx  sage theme page
      ├─ Technology.jsx    slate theme page
      ├─ Contact.jsx       GitHub / Email / LinkedIn + form
      └─ NotFound.jsx      404
```

---

## 3. Kon jinis kothay change korbe

| Ki change korba | Kothay |
|---|---|
| **Email / LinkedIn add** | `src/lib/content.js` -> `EMAIL = ''`, `LINKEDIN = ''` |
| GitHub link | `src/lib/content.js` -> `GITHUB` |
| Project add / edit / link add | `src/lib/content.js` -> `PROJECTS` |
| Skill add/remove | `src/lib/content.js` -> `SKILL_GROUPS` |
| Administration responsibility card | `src/lib/content.js` -> `RESPONSIBILITIES` |
| Case study title | `src/lib/content.js` -> `CASE_STUDIES` |
| Principles (Organization, Efficiency...) | `src/lib/content.js` -> `PRINCIPLES` |
| Home hero text, buttons, chips | `src/pages/Home.jsx` (text and classes pasapashi) |
| Home tags (Administration / Technology card) | `src/pages/Home.jsx` upore `adminTags`, `techTags` |
| Marquee words | `src/pages/Home.jsx` -> `marqueeWords` |
| About page text | `src/pages/About.jsx` |
| Navbar link / order | `src/components/Navbar.jsx` -> `links` array |
| Footer | `src/components/Footer.jsx` |
| Colour hex | `tailwind.config.js` (tech/admin) ar `src/index.css` (neutral) |
| Font | `index.html` (<link>) + `tailwind.config.js` -> `fontFamily` |
| Animation speed | `tailwind.config.js` -> `animation` |
| Profile photo | `src/pages/Home.jsx` -> "Profile photo placeholder card" section; ekhane `<img>` boshaba |

### Email add korle ki hoy
`EMAIL = 'you@example.com'` korle:
- Contact form submit korle `mailto:` link khule (user-er email app open hoy)
- Contact page + footer-e Email button/link real hoye jay
`EMAIL = ''` thakle form submit-e likha ashe: **"The email address has not been added yet."**

### Project-e real info add korar niyom
`PROJECTS` er ekta item:
```js
{
  name: 'Landing Launchpad',
  description: '...',
  tech: ['HTML'],          // null = "to be added" placeholder
  contribution: null,      // string dile placeholder-er jaygay oi text dekhabe
  github: 'https://...',   // null = disabled "GitHub · soon"
  live: null,              // URL dile "LIVE PREVIEW" button real hoy
  code: ['...', '...'],    // shudhu typewriter sajano, "illustration" label ache
}
```
**Rule:** jei info nai ta `null` rakho. Kono kichu andaj kore likho na.

---

## 4. Colour system (Technology = slate, Administration = sage)

| Theme | Kothay use hoy | Tailwind class |
|---|---|---|
| Technology (slate) | Technology page, Tech card, nav "Technology", footer link, project card ring | `tech`, `tech-deep`, `tech-soft`, `tech-light`, `text-tech-ond` |
| Administration (sage) | Administration page, Admin card, nav "Administration", footer link | `admin`, `admin-deep`, `admin-soft`, `admin-on`, `admin-mut` |
| Neutral (Home, About, Contact) | background, text, border | `bg-bg`, `bg-bg2`, `bg-card`, `text-ink`, `text-mut`, `border-line`, `bg-dk` |

- Neutral colour gulo `src/index.css`-e CSS variable (RGB channel). Light = `:root`, Dark = `:root.dark`.
- Dark mode-e slate text ke ujjol dekhate `dark:text-tech-light` / `dark:bg-tech` use kora hoyeche.

### Light / Dark mode kivabe kaj kore
1. Page load-er age `index.html`-er chhoto script `<html>`-e `dark` ba `light` class boshay: **age save kora choice**, na thakle **device-er theme**.
2. Navbar-er sun/moon button (`ThemeToggle.jsx`) click korle class bodlay ar `localStorage`-e `theme` save kore, tai porer bar-o same thake.
3. `tailwind.config.js`-e `darkMode: 'class'`: `dark:` class gulo `<html class="dark">` dekhe kaj kore.
4. Sob-somoy light chao? `index.html`-er script-e `dark` ke `false` kore dao (ar toggle muche dao). Sob-somoy dark chao? `true` koro.
5. Dark colour change korte: `src/index.css`-e `:root.dark` (ar niche media query fallback, dutoi same value).
- Lime ba pink kothao nai.

---

## 5. Styling rule (kivabe class lekha)

- Sob style **inline Tailwind class**, `className`-e text-er pashe. Kono `H2`, `Box`, `Btn` wrapper component nai.
- Page text JSX-er bhitorei. Shudhu lomba repeated data `content.js`-e.
- `index.css`-e shudhu: `@tailwind`, colour variable, dark media query, smooth scroll, focus outline, reduced-motion rule.
- Arbitrary values use hoyeche, jemon `text-[clamp(1.5rem,3.2vw,2.2rem)]`, `after:bg-[linear-gradient(90deg,#9DB87A,#4A5968)]`, `group-data-[live=true]:animate-type-line`.
- Text size: body `0.95rem`, h2 `clamp(1.5rem,3.2vw,2.2rem)`, page h1 `clamp(2rem,6vw,4rem)`, hero h1 `clamp(2.5rem,8.5vw,5.6rem)`.

---

## 6. Routing kivabe kaj kore

1. `main.jsx` -> `<BrowserRouter>` app-ke wrap kore.
2. `App.jsx` -> `<Routes>`: `/`, `/about`, `/administration`, `/technology`, `/contact`, `*` (NotFound).
3. `ScrollToTop` -> `pathname` change hole `window.scrollTo(0,0)`.
4. Page wrapper `<div key={location.pathname} className="animate-fade-up">`: key change hole React notun element banay, tai animation **protibar replay** hoy.
5. Protita page nijer `document.title` set kore `useEffect` diye. Jemon "Technology & Design – MD Hasanull Hoque".
6. `vercel.json` -> sob path `index.html`-e rewrite.

---

## 7. Navbar kivabe kaj kore (`Navbar.jsx`)

- **Floating pill**: `sticky top-3`, `rounded-full`, border, soft shadow.
- **Blur background `before:` pseudo-element-e**: pill-er nijer `backdrop-filter` nai, tai `position: fixed` mobile menu atke jay na.
- **Active link colour**: Home/About/Contact = `bg-ink text-bg`; Administration = `bg-admin text-admin-on`; Technology = `bg-tech text-white`. Administration/Technology-te chhoto coloured dot.
- **Order**: Home, About, Administration, Technology, Contact. Administration sob jaygay Technology-er **age**.
- **Mobile (md-er niche)**:
  - Hamburger-er 2 ta line -> X (CSS transform).
  - Full-screen overlay, boro link, LET’S TALK button.
  - Route change hole, `Escape` chaple, ba link click korle band hoy.
  - Open thakle `document.body.style.overflow = 'hidden'` (scroll lock).
  - Menu-te `aria-expanded`, `aria-controls`; band thakle `invisible` tai keyboard focus o jay na.

---

## 8. LiveCard (`LiveCard.jsx`) kivabe kaj kore

LiveCard shudhu **behaviour** dey: card-er `data-live="true|false"` attribute thik kore. Look (ring, shadow, rong) card jekhane use hoyeche segane `className`-e lekha.

| Mode | Kokhon | Ki hoy |
|---|---|---|
| `hover` | mouse device (`hover: hover`) | pointer ashle / focus korle live; pointer move-e 3D tilt (max 6deg X, 8deg Y) + cursor follow kora coloured spotlight |
| `touch` | touch device | `IntersectionObserver` (`rootMargin: -35% 0 -35% 0`): card screen-er majhkhane thakle live |
| `reduced` | `prefers-reduced-motion` | sobsomoy live, tilt nai |

**Live hole:**
- 2px ring + shadow (`data-[live=true]:ring-2 data-[live=true]:ring-admin`)
- code window line by line type kore (`CodeArt`: `clip-path` + `steps(24)`, 450ms/line, `animationDelay = i * 450ms`)
- checklist box ek ek kore tick hoy (`animate-tick`, delay `i*450+300ms`)

**Children** `group-data-[live=true]:...` diye react kore. Notun live effect dite shudhu oi class likhle hobe.

**Spotlight colour** `spot` prop diye: sage card = `rgba(157,184,122,..)`, slate card = `rgba(74,89,104,..)` ba `rgba(191,201,211,..)`.

---

## 9. Page-wise ki ache

### Home (`/`)
1. Hero: h1 "HELLO, I’M HASANULL." (sage→slate gradient underline), tagline, 2 button, profile photo placeholder + 3 chip.
2. Marquee: Frontend, Admin, UI Design, Operations, Code, Coordination. Slate square / sage circle alternate. Hover-e pause.
3. Pathway cards (Administration **left**, Technology **right**, equal size): Admin = soft sage + checklist; Tech = deep slate + code window.

### Technology (`/technology`)
h1 (last words slate highlight) -> Skills (3 group) -> Featured projects (4) -> Design experiments (5, "Coming soon") -> Development approach (6 pill) -> sage button to Administration.

### Administration (`/administration`)
h1 (second sentence sage highlight) -> intro + 3 fact chip -> 8 responsibility cards -> 7 case-study cards (details to be added) -> Experience timeline (1 entry) -> 4 principles (deep sage / plain alternate) -> slate button to Technology.

### About (`/about`)
Professional journey, Technology interests, Administrative experience, Education, Skills, Personal interests (placeholder).

### Contact (`/contact`)
GitHub (real), Email + LinkedIn (disabled placeholder jotokkhon `content.js` khali), contact form.

---

## 10. Responsive (kivabe adapt kore)

| Screen | Ki hoy |
|---|---|
| Mobile (< 768px) | Hamburger + overlay menu; hero stacked; pathway cards 1 column; sob grid 1 column |
| Tablet (md, 768px+) | Desktop navbar; hero 2 column; pathway 2 column; cards 2 column |
| Laptop (lg, 1024px+) | Responsibilities 4 column; case studies / skills 3 column; footer 4 column |
| Desktop | Content max `70rem`, `mx-auto px-5`; footer full width |

Font size `clamp()` diye smoothly scale hoy. Layout shudhu choto hoy na, grid column ar stack change hoy.

---

## 11. Motion ar Accessibility

- **Reveal**: scroll-e ekbar fade + 14px rise.
- **prefers-reduced-motion**: global CSS rule + `motion-reduce:` class; LiveCard always live (no tilt); marquee animation bondho, word gulo wrap kore dekhay.
- Visible focus outline (`:focus-visible`); dark surface-e (footer, tech card) outline-er rong light kora hoyeche.
- `aria-label` (logo, hamburger), `aria-expanded` (menu button), `aria-hidden` (marquee, code window, decorative dot).
- Contact form message `role="status" aria-live="polite"`.
- Disabled placeholder gulo real `<button disabled>`.

---

## 12. "To be added" placeholder list (ekhono kono real info nai)

Ei gulo tumi jokhon pabe tokhon add korba:

| Jinis | Kothay add korba |
|---|---|
| Email | `content.js` -> `EMAIL` |
| LinkedIn | `content.js` -> `LINKEDIN` |
| Profile photo | `Home.jsx` photo card |
| Hasynest & Garments Tracker: tech, contribution, GitHub, live | `content.js` -> `PROJECTS` |
| Landing Launchpad & My First Repo: contribution, live link | `content.js` -> `PROJECTS` |
| Design experiments (5 ta) | `Technology.jsx` (ekhon "Coming soon") |
| 7 case study details | `Administration.jsx` / `content.js` -> `CASE_STUDIES` |
| Personal interests | `About.jsx` |

---

## 13. Content rules (mone rakho)

- Notun fact, statistic, achievement, project URL, certificate, skill level banabe na.
- Shudhu ei technology gulo: HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Node.js, MongoDB, Firebase, Git, GitHub, VS Code.
- Placeholder sobsomoy dashed + "to be added / soon" dekhabe, jate real data na mone hoy.
- Runtime dependency shudhu `react`, `react-dom`, `react-router-dom`.

### Note: ami (Claude) je chhoto jinis likhechi, tumi check korba
Spec-e shudhu title chhilo, tai ei text gulo ami neutral bhabe likhechi. Tomar pochondo na hole `content.js` / page file-e change koro:
- 8 ta responsibility-r ek line description (`RESPONSIBILITIES`)
- 4 ta principle-er ek line description (`PRINCIPLES`)
- About page-er card text (Professional journey, Technology interests)
- Contact intro-r last line ("Send a message, or find me on GitHub.")
- Project code window-er sketch line (label "illustration", tai asol code na)
