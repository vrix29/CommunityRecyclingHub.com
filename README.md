# Hunter Region Community Recycling Website
**St Francis Xavier's College — Year 11 Science (11ENC), 2026**
**Built by: Vrix irin Marcelo**

---

## What This Project Is

A community awareness website about recycling in the Hunter Region, NSW. It uses real government data, an interactive map, and data visualisations to educate the community about recycling habits, where to drop off waste, and why it matters.

---

## Pages

| Page | File | What It Does |
|------|------|--------------|
| Home | `index.html` | Landing page with hero banner, video, and 3 feature cards |
| Data | `Data.html` | Interactive charts with real NSW recycling statistics |
| Interactive Map | `map.html` | Map with 14 recycling station pins across the Hunter Region |
| Media | `media.html` | Grid of 6 educational YouTube videos about recycling |
| About | `about.html` | Project mission, the problem, goals, and team |

---

## Technologies Used

### Languages
- **HTML5** — structure and content of every page
- **CSS3** — all styling, layout, colours, and animations
- **JavaScript (Vanilla)** — chart logic and map logic; no frameworks used

### External Libraries (loaded via CDN — no installation needed)

| Library | What It's Used For | Where |
|---------|--------------------|-------|
| **Leaflet.js v1.9.4** | Interactive map with clickable pins | `map.html` |
| **Chart.js v4.4.3** | Pie chart and bar chart | `Data.html` |
| **Google Fonts — Poppins** | Modern font used site-wide | All pages |

> **CDN** means the library is loaded from the internet via a link in the HTML — no files to download or install.

---

## Feature Breakdown

### Pie Chart (Data page)
- **Library:** Chart.js
- **Data source:** NSW EPA Kerbside Red Lid Bin Audit (2019)
- **What it shows:** Breakdown of what's inside the average NSW household rubbish bin — 51% organics, 18% paper, 13% plastics, 6% glass & metals, 12% other
- **How it works:** A `<canvas>` element in the HTML is targeted by JavaScript (`Script/data-charts.js`), which passes the data and colour settings to Chart.js to render the chart

### Bar Chart (Data page)
- **Library:** Chart.js
- **Data source:** NSW State of the Environment 2024 — Waste and Recycling
- **What it shows:** NSW waste diversion rate from 2015–16 to 2022–23, with the Hunter Region's Lake Macquarie rate (70%) shown as a comparison bar
- **How it works:** Same JavaScript file as the pie chart — Chart.js renders a grouped bar chart on a second `<canvas>` element

### Animated Progress Bars (Data page)
- **No library** — pure CSS and JavaScript
- **What they show:** National material recovery rates by type (metals 90% down to plastics 12%)
- **How it works:** Each bar starts at `width: 0` in CSS. A JavaScript scroll listener detects when the bars come into view and sets the `width` to the target percentage, triggering a CSS transition animation

### Interactive Map (Map page)
- **Library:** Leaflet.js
- **Map tiles:** OpenStreetMap (free, open-source map data)
- **What it shows:** 14 recycling stations across Newcastle, Lake Macquarie, Maitland, Cessnock, Singleton, Muswellbrook, Port Stephens, and Dungog
- **Pin types:** Green = Resource Recovery Centres, Blue = Community Drop-Off Points, Orange = E-Waste Collection
- **How it works:** `Script/map.js` defines each station's name, address, GPS coordinates, accepted materials, and opening hours. Leaflet places a custom-coloured dot marker at each coordinate. Clicking a pin opens a popup with the station details
- **Custom pins:** Instead of Leaflet's default blue pin image, coloured CSS circles (`div` elements styled with `border-radius: 50%`) are used as markers via Leaflet's `divIcon` feature

### Stat Cards (Home page)
- **No library** — pure HTML and CSS
- **What they show:** Key recycling figures (66% NSW diversion rate, 14 Hunter Region stations, recycling symbol)
- **Design:** CSS `linear-gradient` backgrounds with large bold text

### Video Embeds (Home page & Media page)
- **Method:** YouTube iframe embed
- **Responsive:** The iframe is wrapped in a `div` with `padding-top: 56.25%` — this is the standard CSS trick to maintain a 16:9 aspect ratio at any screen width without JavaScript

---

## Design Decisions

### Font — Poppins
Loaded from Google Fonts. Chosen because it is modern, clean, and widely used on government and community websites. Applied site-wide via `* { font-family: 'Poppins', sans-serif; }` in the CSS.

### Colour Scheme
| Colour | Hex | Used For |
|--------|-----|----------|
| Dark green | `#2c3425` | Headings |
| Medium green | `#528244` | Buttons, borders, accents |
| Light green | `#76c776` | Button hover state |
| Footer green | `#497540` | Footer background |
| Card background | `#eceee0` / `#f0f2e8` | Section backgrounds |

### Layout System
- **CSS Flexbox** — used for the navigation bar, hero banner, footer, and sidebar on the map page
- **CSS Grid** — used for the three home page cards, video grid, and about page cards
- **CSS Subgrid** — used specifically on the home page cards so the label, illustration, and button sections align perfectly across all three cards regardless of how much text each label contains

### Card Style
All cards across the site (home page tiles, chart cards, video cards, about cards) share the same visual style:
- White background
- `border-radius: 8px` (rounded corners)
- `border-top: 4px solid #528244` (green top accent)
- `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` (subtle shadow)

This creates a consistent, professional look across every page.

### No Frameworks
The project uses **no JavaScript frameworks** (no React, Vue, Angular, etc.) and **no CSS frameworks** (no Bootstrap, Tailwind, etc.). Everything is written in plain HTML, CSS, and JavaScript. The only external dependencies are Leaflet.js, Chart.js, and Google Fonts — all loaded from a CDN.

---

## File Structure

```
Project Assessment/
├── index.html          ← Home page
├── Data.html           ← Data & charts page
├── map.html            ← Interactive map page
├── media.html          ← Video gallery page
├── about.html          ← About page
├── README.md           ← This file
├── css/
│   └── style.css       ← All styles for every page
├── Script/
│   ├── map.js          ← Leaflet map logic & station data
│   └── data-charts.js  ← Chart.js pie chart, bar chart & progress bars
└── Images/
    ├── logo.jpg
    ├── Green_Recycling_Logo.png
    ├── bg-banner.jpg
    └── ...
```

---

## Data Sources

| Statistic | Source |
|-----------|--------|
| NSW bin composition (pie chart) | NSW EPA — Analysis of NSW Kerbside Red Lid Bin Audit Data (2019) |
| NSW diversion rate over time (bar chart) | NSW State of the Environment 2024 — Waste and Recycling |
| Lake Macquarie 70% diversion rate | Lake Macquarie City Council / Newcastle Herald |
| National material recovery rates (progress bars) | National Waste & Resource Recovery Report 2024 — DCCEEW |
| 14% contamination rate | 2022 National Waste Report |
| Recycling station locations | Hunter Region council websites & Google Maps |
