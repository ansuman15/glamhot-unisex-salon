# Glamhot Unisex Salon — Landing Page PRD & Full Build Prompt
> Inspired by Juice Salons' editorial premium aesthetic | Optimized for Google Ads & Conversion

---

## PART 1 — PRODUCT REQUIREMENTS DOCUMENT (PRD)

### 1.1 Executive Summary

**Client:** Glamhot Unisex Salon  
**Location:** Bhubaneswar, Odisha, India  
**Contact:** "+91 9348696298" *(see §1.6 for instructions)*  
**Address:** "Plot No:- 98, ITER College Rd, near Food square, Jagmohan Nagar, Bhubaneswar, Odisha 751030"  
**Google Maps Embed:** "https://maps.app.goo.gl/TcbShWE9yg1JU6uG7"
**GMB Source:** https://share.google/xc7tRY9jukDVcofNF  

**Page Purpose:**  
A premium, conversion-first landing page for Glamhot Unisex Salon that functions as both an organic web presence and a Google Ads destination. Every section is engineered to reduce friction and accelerate the booking decision — from first impression scroll to the appointment CTA.

**Traffic Sources This Page Serves:**
- Google Search Ads (direct booking intent)
- Google Display Ads (awareness → retargeting)
- Meta Ads (visual-first audience)
- GMB website link
- WhatsApp Business campaigns
- Organic local SEO

---

### 1.2 Design Identity System

#### Palette — "Midnight Atelier"

> Inspired by Juice Salons' editorial restraint, but pushed into a warmer, more intimate luxury register. No generic gradients. No neon. No corporate blue.

| Token | Hex | Usage |
|---|---|---|
| `--noir` | `#0A0906` | Primary background, hero section |
| `--charcoal` | `#1C1917` | Secondary section backgrounds |
| `--champagne` | `#C8A96E` | Primary accent — CTA buttons, gold rule lines, hover states |
| `--champagne-light` | `#E2CC9A` | Hover states, gradient shimmer |
| `--ivory` | `#FAF7F2` | Light section backgrounds, card surfaces |
| `--blush` | `#D4B5AD` | Subtle warm tint on testimonial cards |
| `--ink` | `#2B2723` | Body text on light backgrounds |
| `--ghost` | `#F0EBE4` | Muted text on light backgrounds |
| `--white-pure` | `#FEFEFE` | High-contrast text on dark |

**Background rhythm:** Dark → Light → Dark → Light → Dark  
(Alternating creates visual breathing room and section distinction without borders.)

#### Typography

| Role | Font | Style | Notes |
|---|---|---|---|
| Display / Hero | **Cormorant Garamond** | Light Italic, 400 | High-fashion editorial. Long ascenders. Never bold at hero. |
| Subheadings | **Cormorant Garamond** | SemiBold 600 | Structural anchors |
| UI Labels, Nav | **DM Sans** | Regular 400, 500 | Clean, modern, readable |
| Body Copy | **DM Sans** | Regular 400 | Comfortable reading |
| Service Prices | **DM Mono** | 400 | Tabular clarity for pricing |
| CTA Buttons | **DM Sans** | Medium 500, tracked 0.1em | Authority without aggression |

**Import:** Google Fonts — `Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400`

**Type Scale (fluid, clamp-based):**
- `--fs-display`: `clamp(3.2rem, 8vw, 8rem)` — Hero headline
- `--fs-hero-sub`: `clamp(1.1rem, 2vw, 1.5rem)` — Hero subline
- `--fs-section-title`: `clamp(2rem, 5vw, 4rem)` — Section headers
- `--fs-body`: `clamp(0.9rem, 1.5vw, 1.05rem)` — Body copy
- `--fs-label`: `0.75rem` — Labels, tags, tracked caps

**Typographic Rule:** All section headings set in Cormorant Garamond Italic at `--fs-section-title`. Section taglines in DM Sans tracked uppercase at `--fs-label`. Never use bold display headings — let the font's natural grace do the weight.

---

### 1.3 UX Research — Content Hierarchy & Placement Logic

Based on conversion funnel research for local service businesses (salon, spa, grooming) with paid traffic:

#### Why People Book a Salon (Decision Drivers, ranked):
1. **Trust signals** — "Will they make me look good?" → Show real results + real faces
2. **Proximity + convenience** — Address, map, hours visible without scrolling far
3. **Price anchoring** — Not the cheapest, but "worth it"
4. **Social proof** — Reviews and testimonials, especially with names/photos
5. **Ease of booking** — Every friction point loses a conversion
6. **Emotional resonance** — Feeling premium/cared for before they walk in

#### Fold-level Content Prioritization:
- **Above the fold:** Brand identity + One clear CTA + Trust proof (rating badge) + Mobile number
- **2nd scroll:** Services — quick scan of what they offer
- **3rd scroll:** Why Choose Us — the differentiator argument
- **4th scroll:** Testimonials — social proof, the closer
- **5th scroll:** Booking form + contact + map — commitment zone
- **Footer:** Address, hours, social, secondary nav

#### Google Ads Landing Page Rules Embedded:
- Message match: Headline on page must mirror the ad headline
- Single-goal CTA: All CTAs point to the same action — Book Appointment
- No external nav links that take users off the page
- Phone number click-to-call visible at top always
- Page speed optimized (no heavy JS libs, CSS animations over JS where possible)
- Trust badges (Google Rating, Years Active) above the fold

---

### 1.4 Section Architecture

```
01 — Sticky Nav Bar (thin, transparent → dark on scroll)
02 — Hero Section (full-viewport, dark)
03 — Trust Strip / Social Proof Bar
04 — Services Grid (light ivory)
05 — Why Glamhot (dark, asymmetric)
06 — Before/After or Transformation Gallery (dark)
07 — Testimonials Carousel (light ivory)
08 — Booking Section / CTA Block (dark with champagne form)
09 — Location + Contact (light)
10 — Footer (noir)
```

---

### 1.5 Section-by-Section Specifications

---

#### SECTION 01 — Sticky Navigation

**Background:** Transparent on load → `rgba(10, 9, 6, 0.96)` on scroll past 80px  
**Blur:** `backdrop-filter: blur(12px)`  
**Height:** 64px  
**Content:**
- LEFT: Wordmark — "GLAMHOT" in Cormorant Garamond SemiBold, 1.4rem, champagne color
- CENTER: Nav links (desktop only) — Services | Gallery | About | Reviews | Contact
  - DM Sans 0.8rem, tracked 0.08em, uppercase, white/70% → white on hover
- RIGHT: "Book Now" pill button — champagne background, noir text, 0.8rem, 36px height

**Behavior:** On mobile, hamburger → slide-down menu from top (full width, dark background)  
**Ads Note:** On the Google Ads landing page version, HIDE the center nav links. Show only logo + "Book Appointment" + phone number. Keep users focused.

---

#### SECTION 02 — Hero Section

**Height:** 100vh  
**Background:** `--noir` with a very subtle noise texture overlay (0.04 opacity)  
**Layout:** Two-column on desktop (60/40 split), stacked on mobile

**LEFT COLUMN — Copy:**
```
[LABEL — DM Sans, 0.7rem, tracked 0.2em, champagne, uppercase]
BHUBANESWAR'S PREMIER UNISEX SALON

[HEADLINE — Cormorant Garamond Light Italic]
Where Every Look
Becomes a Statement.

[BODY — DM Sans 400, white/70%, max 280px wide]
From precision cuts to luxe skincare — 
Glamhot is the space where 
Bhubaneswar's most style-conscious 
come to transform.

[CTA BLOCK]
[ Book Your Appointment → ]   [ ☎ Call Us Now ]

[TRUST BADGE]
⭐ 4.8/5 on Google · 200+ Happy Clients
```

**RIGHT COLUMN — Visual:**
- Full-height editorial image (salon interior or model/stylist shot)
- Image has a subtle dark gradient on the left edge blending into the noir background
- On mobile: image becomes a background behind the copy with overlay

**Text cursor animation on HEADLINE:**  
The words "Every Look" are typed character by character using a CSS/JS typewriter effect with a blinking cursor `|` in champagne color. Cursor blinks 3 times then disappears. Cycle repeats every 6s with different phrases:
- "Every Look Becomes a Statement."
- "Every Visit Feels Like Luxury."
- "Every Client Leaves Transformed."

**Animation — On Page Load:**
- Label: fades in from bottom (Y: 20px → 0), delay 0.2s
- Headline line 1: slides in from LEFT (X: -40px → 0), delay 0.4s
- Headline line 2 (with typewriter): fades in delay 0.8s
- Body copy: fades in delay 1.0s
- CTA buttons: scale from 0.9 → 1.0 with fade, delay 1.2s
- Trust badge: fades in delay 1.4s
- Right column image: slides in from RIGHT (X: +60px → 0), delay 0.3s

---

#### SECTION 03 — Trust Strip

**Height:** 80px desktop, auto mobile  
**Background:** `--champagne` (full width)  
**Content:** 4 items in a row, separated by thin vertical lines

```
[ ⭐ 4.8 Google Rating ] | [ 200+ Clients Served ] | [ 5+ Expert Stylists ] | [ Open 7 Days ]
```

**Typography:** DM Sans 500, noir text, `--fs-label` size  
**Animation:** Each stat counter animates from 0 to final value on first scroll into view (IntersectionObserver). Duration 1.2s ease-out.

---

#### SECTION 04 — Services Grid

**Background:** `--ivory`  
**Padding:** 120px 0  

**Section Header:**
```
[LABEL — champagne, tracked uppercase]  OUR EXPERTISE

[H2 — Cormorant Garamond Italic, ink]
Services Crafted
For Every You.
```

**Services Layout:**  
3 × 2 grid on desktop, 2 × 3 on tablet, 1-col on mobile  
Each card: white background, 1px `--ghost` border, 32px padding, 12px radius (subtle, not pill)

**Service Cards (6 cards):**

| Icon | Title | Tagline | Starting Price |
|---|---|---|---|
| ✂ | Hair Styling | Cuts, blowouts & transformations | From ₹299 |
| 🎨 | Hair Colour | Balayage, highlights & global colour | From ₹799 |
| ✨ | Skin & Facials | Advanced cosmetology & glow treatments | From ₹499 |
| 💅 | Nail Art | Precision manicure & creative designs | From ₹199 |
| 🧖 | Spa & Relaxation | Head massage, body spa & de-stress | From ₹399 |
| 👰 | Bridal Package | Complete bridal & pre-bridal looks | On Request |

**Card hover state:** Lift (translateY -4px), champagne top border animates in (width: 0 → 100%), shadow deepens  

**Card entrance animation (scroll-triggered, alternating):**  
- Cards 1, 3, 5: slide in from LEFT (X: -60px → 0) with fade
- Cards 2, 4, 6: slide in from RIGHT (X: +60px → 0) with fade
- Staggered delay: 0.1s between each card
- All use `IntersectionObserver` with `threshold: 0.15`

---

#### SECTION 05 — Why Glamhot (Differentiator)

**Background:** `--charcoal`  
**Padding:** 120px 0  
**Layout:** Full-width asymmetric — image left (45%), text right (55%) on desktop

**Left — Image Block:**  
A editorial portrait or interior shot of the salon. No stock photo vibe. Image has a champagne-colored thin border offset (absolute positioned, 12px offset down-right, 1px champagne border).

**Right — Copy Block:**
```
[LABEL — champagne, tracked uppercase]  WHY GLAMHOT

[H2 — Cormorant Garamond Italic, white]
Not Just a Salon.
An Experience.

[4 Feature Points — DM Sans, white/80%]

→ Trained & certified stylists for every service
→ Premium international product brands only
→ Hygienic, private, welcoming ambience
→ No rush — your time is respected

[CTA]
[ Explore Our Services → ]
```

**Animation (scroll-triggered):**  
- Image: slides in from LEFT (X: -80px → 0), fade, duration 0.8s
- Each feature point: slides in from RIGHT (X: +50px → 0), staggered 0.15s apart
- The offset border on image: draws in via `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)`, creating a line-draw reveal effect

---

#### SECTION 06 — Gallery / Transformation Strip

**Background:** `--noir`  
**Padding:** 80px 0  

**Section Header:**
```
[LABEL — champagne, tracked uppercase]  OUR WORK SPEAKS

[H2 — Cormorant Garamond Italic, white]
The Glamhot Difference.
```

**Layout:** Horizontal auto-scrolling marquee strip of 8–12 salon photos  
- Two rows: Row 1 scrolls RIGHT, Row 2 scrolls LEFT simultaneously  
- Creates an immersive, cinematic gallery without any clicks required  
- Pure CSS animation: `@keyframes marquee-right` / `@keyframes marquee-left`  
- Speed: ~40s per full loop, `animation-timing-function: linear`  
- On hover: `animation-play-state: paused` with scale(1.03) on hovered image

**Images:** Tall editorial crops (3:4 ratio), 220px wide each, 8px gap, no border radius (editorial edge)

---

#### SECTION 07 — Testimonials

**Background:** `--ivory`  
**Padding:** 120px 0  

**Section Header:**
```
[LABEL — champagne, tracked uppercase]  CLIENT LOVE

[H2 — Cormorant Garamond Italic, ink]
What Our Clients
Are Saying.
```

**Testimonial Delivery — 4-Direction Scroll Animation:**

This is the signature animation sequence. As the user scrolls into this section:
- **Card A** enters from LEFT → settles center-left
- **Card B** enters from RIGHT → settles center-right (simultaneously with A)
- **Card C** enters from TOP ↓ → settles above center
- **Card D** enters from BOTTOM ↑ → settles below center

They converge into a 2×2 grid. After settling (0.8s), they rest with a subtle float animation.

**On mobile:** Cards enter one by one, alternating from left and right as user scrolls, like a shuffled deck.

**Card Design:**
```
[Card — white, 1px blush border, 28px padding, 8px radius]

"★★★★★"  [DM Sans, champagne]

"[Testimonial quote in Cormorant Garamond Italic, ink, 1.1rem]"

— [Name, DM Sans 500, ink]
  [Service received, DM Sans 400, 0.8rem, ghost]
```

**Sample Testimonial Content (replace with real GMB reviews):**

> *"Walked in nervous about a new haircut and walked out feeling like a completely different person. The stylist actually listened to what I wanted — rare!"*  
> — Priya M. · Hair Styling

> *"The bridal makeup was absolutely stunning. Everyone at my wedding was asking who did my look. Thank you Glamhot!"*  
> — Sneha R. · Bridal Package

> *"Best facial I've had in Bhubaneswar, hands down. My skin felt 10 years younger. Already booked my next appointment."*  
> — Kavita D. · Skin Treatment

> *"Great vibe, clean space, friendly staff. Got my hair coloured here and the balayage was perfect. Will be a regular."*  
> — Rohan S. · Hair Colour

---

#### SECTION 08 — Booking CTA Block

**This is the most important section for conversion. It should feel urgent and easy, never desperate.**

**Background:** `--charcoal` with a very subtle diagonal texture  
**Padding:** 100px 0  

**Layout (desktop):** Two columns — left copy, right form

**LEFT — CTA Copy:**
```
[LABEL — champagne, tracked]  READY FOR YOUR TRANSFORMATION?

[H2 — Cormorant Garamond Italic, white, large]
Book Your Appointment
Today.

[Body — DM Sans, white/70%]
Limited slots available. 
Walk-ins welcome, but appointments 
always get priority.

[Hours Block]
Mon–Sat: 10:00 AM – 8:00 PM
Sunday: 11:00 AM – 6:00 PM

[Phone CTA — large, champagne]
📞 [PHONE NUMBER]
Tap to call instantly

[WhatsApp CTA]
💬 Chat on WhatsApp
```

**RIGHT — Booking Form:**
```
[Form Container — ivory background, 32px padding, 8px radius]

[ Full Name          ]  ← text input
[ Phone Number       ]  ← tel input with +91 prefix
[ Service Required ▾ ]  ← select dropdown
[ Preferred Date 📅  ]  ← date input
[ Preferred Time ▾   ]  ← select: Morning / Afternoon / Evening
[ Message (Optional) ]  ← textarea, 3 rows

[ Book My Appointment → ]  ← full-width champagne button
```

**Form UX Details:**
- On focus: input border-bottom animates from ghost → champagne (not a full border box)
- Submit button: champagne → champagne-light on hover, slight scale 1.02
- After submit: replace form with a success message: "We've received your request. We'll confirm via WhatsApp shortly. ✓"
- Form validation: inline, non-intrusive — red dot on invalid, green check on valid

**Animation:** Form slides in from RIGHT as copy slides in from LEFT, simultaneously, on scroll.

---

#### SECTION 09 — Location & Contact

**Background:** `--ivory`  
**Padding:** 80px 0  
**Layout:** Two columns — left info, right Google Maps embed (iframe)

**LEFT:**
```
[H3 — Cormorant Garamond Italic, ink]
Find Us. Visit Us.

[Address Block — DM Sans, ink]
📍 [FULL ADDRESS FROM GMB]
    Bhubaneswar, Odisha — [PIN CODE]

📞 [PHONE NUMBER] 
    (Tap to call)

⏰ Monday – Saturday: 10 AM – 8 PM
   Sunday: 11 AM – 6 PM

[Google Maps CTA Button]
[ View on Google Maps → ]
```

**RIGHT:**
```
[Google Maps Embed — 100% width, 400px height, rounded 8px]
[Get embed from: Google Maps → Share → Embed a map]
[Replace &output=embed in the iframe src]
```

**Map pin:** Use the GMB link to pull the embed:  
`https://maps.google.com/maps?q=Glamhot+Unisex+Salon+Bhubaneswar&output=embed`  
*(Replace with actual Place ID embed once you have it from GMB)*

---

#### SECTION 10 — Footer

**Background:** `--noir`  
**Padding:** 60px 0 40px  

**Layout:** 3 columns on desktop

```
COL 1 — Brand
GLAMHOT (wordmark, champagne)
Bhubaneswar's premier unisex salon.
[Social icons: Instagram, Facebook, WhatsApp]

COL 2 — Quick Links
Services  |  Gallery  |  Reviews
Book Appointment  |  Contact Us

COL 3 — Contact
📍 [ADDRESS]
📞 [PHONE]
⏰ Mon–Sat 10AM–8PM
   Sun 11AM–6PM

BOTTOM BAR:
© 2025 Glamhot Unisex Salon. All rights reserved.
Designed with care in Bhubaneswar.
```

---

### 1.6 GMB Data Extraction Instructions

Since the GMB short link (https://share.google/xc7tRY9jukDVcofNF) requires authentication to resolve, extract the data manually:

1. Open the GMB link on your phone/browser while logged in
2. Copy: Full address, Phone number, Business hours, Google Rating, Review count
3. Replace all `[INSERT FROM GMB]` placeholders in this document and in the code
4. For Google Maps embed:
   - Go to maps.google.com
   - Search "Glamhot Unisex Salon Bhubaneswar"
   - Click Share → Embed a map → Copy HTML
   - Paste the `<iframe>` into Section 09

---

## PART 2 — ANIMATION SYSTEM (FULL SPECIFICATION)

### 2.1 Understanding the Animations

**"From right and then left, vice versa" — Alternating Section Entrance:**  
As the user scrolls down, each content block alternates its entry direction:
- Odd sections: TEXT slides from LEFT, IMAGE from RIGHT
- Even sections: IMAGE from LEFT, TEXT from RIGHT
This creates a rhythmic zigzag visual flow, like turning pages of a magazine.
Implementation: CSS `transform: translateX(-60px)` → `translateX(0)` with `opacity: 0 → 1`

**"Text cursor animation" — Typewriter with Cursor:**  
The hero headline uses a JS typewriter that types characters one by one (30ms delay each), holds for 2.5s, then deletes in 15ms bursts, cycles to next phrase.
A `|` cursor in champagne color blinks at the end of the typed text using CSS:
```css
@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
.cursor { animation: blink 0.8s step-end infinite; color: var(--champagne); }
```

**"Testimonial cards from right and left at same time" — Simultaneous Bilateral Entry:**  
Cards A and B fly in from opposite horizontal directions simultaneously when the section enters viewport. CSS transition classes added together via `classList.add()` after `IntersectionObserver` fires:
```js
cardA.classList.add('enter-left');
cardB.classList.add('enter-right'); // same tick, same IntersectionObserver callback
```

**"From 4 directions while scrolling" — Quadrant Convergence:**  
4 testimonial cards converge from all 4 edges (← → ↑ ↓) to their grid positions. This is the showstopper moment:
```css
.card-left  { transform: translateX(-100px); opacity: 0; }
.card-right { transform: translateX(+100px); opacity: 0; }
.card-top   { transform: translateY(-100px); opacity: 0; }
.card-bottom{ transform: translateY(+100px); opacity: 0; }

.card.visible {
  transform: translate(0, 0);
  opacity: 1;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
}
```
All 4 transitions fire simultaneously when the section enters the viewport.

---

### 2.2 Full Animation Inventory

| Section | Element | Animation | Trigger | Duration | Easing |
|---|---|---|---|---|---|
| Hero | Label | Fade + Y(20px→0) | Page load | 0.5s, delay 0.2s | ease-out |
| Hero | H1 Line 1 | X(-40px→0) + Fade | Page load | 0.6s, delay 0.4s | ease-out |
| Hero | H1 Line 2 | Typewriter cursor | Page load | JS cycling | — |
| Hero | Body | Fade | Page load | 0.5s, delay 1.0s | ease |
| Hero | CTA Buttons | Scale(0.9→1) + Fade | Page load | 0.4s, delay 1.2s | ease-out |
| Hero | Right Image | X(+60px→0) + Fade | Page load | 0.7s, delay 0.3s | ease-out |
| Trust Strip | Stats | Count 0→N | Scroll into view | 1.2s | ease-out |
| Services | Cards 1,3,5 | X(-60px→0) + Fade | Scroll | 0.6s, staggered | cubic-bezier |
| Services | Cards 2,4,6 | X(+60px→0) + Fade | Scroll | 0.6s, staggered | cubic-bezier |
| Why Glamhot | Image | X(-80px→0) + Fade | Scroll | 0.8s | cubic-bezier |
| Why Glamhot | Border line | clip-path draw | Scroll | 0.6s, delay 0.4s | ease |
| Why Glamhot | Feature points | X(+50px→0), staggered | Scroll | 0.5s each | ease-out |
| Gallery | Marquee row 1 | Continuous rightward | CSS loop | 40s linear | linear |
| Gallery | Marquee row 2 | Continuous leftward | CSS loop | 40s linear | linear |
| Testimonials | Cards A+B | X(±100px→0) simultaneously | Scroll | 0.8s | cubic-bezier |
| Testimonials | Cards C+D | Y(±100px→0) simultaneously | Scroll | 0.8s, delay 0.1s | cubic-bezier |
| Testimonials | All cards (settled) | Float (Y: 0→-6px→0) | Auto loop | 4s infinite | ease-in-out |
| Booking | Form | X(+80px→0) + Fade | Scroll | 0.7s | ease-out |
| Booking | Copy | X(-80px→0) + Fade | Scroll | 0.7s | ease-out |
| Nav | Background | opacity/blur on scroll | Scroll past 80px | 0.3s | ease |

---

## PART 3 — FULL BUILD PROMPT (FOR DEVELOPERS / AI CODE GENERATION)

> Paste this entire prompt into Cursor, Claude Code, Lovable, or Antigravity to generate the full page.

---

```
Build a premium, conversion-optimized, single-page landing page for "Glamhot Unisex Salon" — a luxury unisex salon in Bhubaneswar, Odisha, India. This page will be used as a Google Ads landing page and organic web presence.

────────────────────────────────────────
TECH STACK
────────────────────────────────────────
- Pure HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- Google Fonts via @import (Cormorant Garamond + DM Sans + DM Mono)
- IntersectionObserver for all scroll animations (no GSAP, no ScrollMagic)
- CSS custom properties for the entire design system
- CSS animations + transitions only (no anime.js, no framer-motion)
- Mobile-first responsive (320px → 1440px+)
- No jQuery. No Bootstrap. No Tailwind.
- Single HTML file with inline <style> and <script> tags.

────────────────────────────────────────
DESIGN SYSTEM — CSS CUSTOM PROPERTIES
────────────────────────────────────────
:root {
  /* Colors */
  --noir: #0A0906;
  --charcoal: #1C1917;
  --champagne: #C8A96E;
  --champagne-light: #E2CC9A;
  --ivory: #FAF7F2;
  --blush: #D4B5AD;
  --ink: #2B2723;
  --ghost: #9E9690;
  --white: #FEFEFE;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-ui: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'DM Mono', monospace;

  /* Type Scale */
  --fs-display: clamp(3.2rem, 8vw, 8rem);
  --fs-hero-sub: clamp(1.1rem, 2vw, 1.5rem);
  --fs-section: clamp(2rem, 5vw, 4rem);
  --fs-body: clamp(0.9rem, 1.5vw, 1.05rem);
  --fs-label: 0.72rem;

  /* Spacing */
  --section-pad: clamp(80px, 10vw, 140px) 0;
  --container: min(1200px, 92vw);

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-gentle: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

────────────────────────────────────────
GLOBAL STYLES
────────────────────────────────────────
- html: scroll-behavior smooth; font-size 16px
- body: background var(--noir); color var(--white); font-family var(--font-ui); margin 0; overflow-x hidden
- All sections: position relative; overflow hidden (for clip animations)
- Images: display block; max-width 100%; object-fit cover
- *, *::before, *::after: box-sizing border-box; margin 0; padding 0
- ::selection: background var(--champagne); color var(--noir)
- Scrollbar: thin, champagne thumb, noir track (webkit-scrollbar)

Add a subtle noise texture overlay using a CSS pseudo-element on dark sections:
- background-image: url("data:image/svg+xml,...") with noise pattern at 0.04 opacity

────────────────────────────────────────
SECTION 1 — STICKY NAVIGATION
────────────────────────────────────────
<nav id="nav">
  - Position: fixed, top 0, full width, z-index 1000
  - Height: 64px
  - Initial: background transparent, no shadow
  - On scroll past 80px (JS class .scrolled): background rgba(10,9,6,0.96), backdrop-filter blur(12px)
  - Transition: background 0.3s ease, backdrop-filter 0.3s ease

  LEFT: 
  - Logo/Wordmark: "GLAMHOT" in var(--font-display), font-weight 600, font-size 1.4rem, color var(--champagne), letter-spacing 0.06em
  - Below: "UNISEX SALON" in var(--font-ui), font-size 0.6rem, letter-spacing 0.2em, color rgba(255,255,255,0.5), uppercase

  CENTER (desktop ≥ 900px):
  - Nav links: Services · Gallery · Reviews · Contact
  - DM Sans, 0.78rem, letter-spacing 0.08em, uppercase, color rgba(255,255,255,0.65)
  - Hover: color var(--champagne), transition 0.2s

  RIGHT:
  - Button: "Book Now" — background var(--champagne), color var(--noir), 
    DM Sans 500, 0.78rem, tracking 0.06em, uppercase, 36px height, 20px padding, 
    border-radius 4px (subtle, not pill), hover: background var(--champagne-light)
  - Phone link (mobile): "📞 Call" shortcut visible on small screens

  MOBILE (< 900px):
  - Hamburger button: 3 lines, champagne color
  - Menu opens as full-width panel sliding down from top
  - Menu background: var(--charcoal), vertical nav links centered
  - X button to close

────────────────────────────────────────
SECTION 2 — HERO
────────────────────────────────────────
<section id="hero">
  - Height: 100svh (safe area), min-height 640px
  - Background: var(--noir)
  - Add pseudo-element grain texture: position absolute, inset 0, 
    background repeating noise at 4% opacity, pointer-events none

  Layout: CSS Grid, 2 columns [55fr 45fr] on desktop, 1 col on mobile
  - Grid gap: 0
  - Align: center

  LEFT COL (.hero-copy):
  - Padding: 0 clamp(24px, 5vw, 80px)
  - Max-width: 580px

  Elements (in order, each with animation class .anim-ready → .anim-in):

  1. Label span:
     - Text: "BHUBANESWAR'S PREMIER UNISEX SALON"
     - Font: DM Sans, 0.7rem, letter-spacing 0.22em, uppercase
     - Color: var(--champagne)
     - Margin-bottom: 20px
     - Before it: a 24px horizontal line in var(--champagne), 1px height, inline-block

  2. H1 (.hero-h1):
     - Font: Cormorant Garamond, 300 (Light) Italic
     - Size: var(--fs-display)
     - Color: var(--white)
     - Line-height: 1.05
     - Margin-bottom: 28px
     - Line 1: "Where Every Look" (static)
     - Line 2: typewriter container with class .typewriter-target + blinking .cursor
     
  3. Typewriter JavaScript:
     const phrases = [
       "Becomes a Statement.",
       "Feels Like Luxury.",
       "Tells Your Story.",
       "Leaves You Transformed."
     ];
     Implement: type chars at 35ms, hold 2800ms, delete at 18ms, cycle
     Cursor element: <span class="cursor">|</span>
     CSS: .cursor { color: var(--champagne); animation: blink 0.85s step-end infinite; }
     @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  4. Body paragraph:
     - DM Sans, var(--fs-body), color rgba(255,255,255,0.68), line-height 1.7
     - Max-width: 360px
     - Text: "From precision cuts to advanced skin treatments — Glamhot is where Bhubaneswar's style-conscious come for their signature look."

  5. CTA Row (flex, gap 16px, margin-top 36px):
     a. Primary button: "Book Your Appointment →"
        - Background: var(--champagne), color: var(--noir)
        - Padding: 14px 28px, border-radius 4px
        - DM Sans 500, 0.85rem, letter-spacing 0.05em
        - Hover: background var(--champagne-light), transform translateY(-2px)
        - On click: smooth scroll to #booking section
     b. Secondary link: "📞 [PHONE NUMBER]"
        - No background, color: var(--white), border 1px solid rgba(255,255,255,0.25)
        - Padding: 14px 28px, border-radius 4px
        - Hover: border-color var(--champagne), color var(--champagne)
        - href: tel:[PHONE]

  6. Trust badge (flex, align-center, gap 10px, margin-top 28px):
     - Stars: "★★★★★" in var(--champagne), 0.9rem
     - Text: "4.8/5 on Google · 200+ Clients" — DM Sans, 0.8rem, rgba(255,255,255,0.55)

  RIGHT COL (.hero-image):
  - Position: relative, height 100%, overflow hidden
  - Image: object-fit cover, object-position center top, height 80vh
  - Left edge: linear-gradient(to right, var(--noir) 0%, transparent 30%)
  - Bottom edge: linear-gradient(to top, var(--noir) 0%, transparent 25%)
  - Fallback bg color: var(--charcoal) if no image
  
  On mobile: 
  - Hero becomes single column
  - Image becomes background with dark overlay (rgba(10,9,6,0.7))
  - Text centered, padding 24px

  ENTRANCE ANIMATIONS (JS: add class .loaded to body after DOMContentLoaded):
  - Label: opacity 0 → 1, transform translateY(24px) → 0, transition 0.6s ease-out 0.2s
  - H1 line 1: opacity 0 → 1, transform translateX(-40px) → 0, transition 0.7s var(--ease-out-expo) 0.4s
  - H1 line 2 (typewriter): opacity 0 → 1, transition 0.4s ease 0.8s (then typewriter starts)
  - Body: opacity 0 → 1, transition 0.5s ease 1.0s
  - CTAs: opacity 0 → 1, transform scale(0.92) → 1, transition 0.5s ease 1.2s
  - Trust badge: opacity 0 → 1, transition 0.5s ease 1.4s
  - Right image: opacity 0 → 1, transform translateX(60px) → 0, transition 0.8s var(--ease-out-expo) 0.3s

────────────────────────────────────────
SECTION 3 — TRUST STRIP
────────────────────────────────────────
<section id="trust">
  - Background: var(--champagne)
  - Padding: 0
  - Height: 72px desktop, auto mobile

  Container: CSS grid or flex, 4 items, centered, divided by 1px rgba(10,9,6,0.2) lines

  Items: [ ⭐ 4.8 Rating ] | [ 200+ Clients ] | [ 5+ Expert Stylists ] | [ Open 7 Days ]
  - DM Sans 500, 0.82rem, letter-spacing 0.06em, color var(--noir), uppercase

  Counter animation: 
  - For numeric values (4.8, 200, 5+), use IntersectionObserver
  - On first intersection: animate from 0 to final via requestAnimationFrame, duration 1200ms, easing out
  - Non-numeric items just fade in

────────────────────────────────────────
SECTION 4 — SERVICES
────────────────────────────────────────
<section id="services">
  - Background: var(--ivory)
  - Padding: var(--section-pad)

  Header (centered):
  - Label: "OUR EXPERTISE" — champagne, 0.7rem, tracked 0.2em, uppercase, DM Sans
    With champagne horizontal rule lines on either side (flex, gap 16px)
  - H2: "Services Crafted For Every You." — Cormorant Garamond Italic, var(--fs-section), var(--ink)
  - Max-width 600px, centered, margin-bottom 72px

  Services Grid:
  - CSS grid: repeat(3, 1fr) on desktop, repeat(2, 1fr) on tablet, 1fr on mobile
  - Gap: 24px

  6 Service Cards — each:
  - Background: var(--white)
  - Border: 1px solid rgba(200,169,110,0.15)
  - Padding: 36px 28px
  - Border-radius: 8px
  - Position: relative, overflow hidden

  Card top border animation:
  - ::before pseudo: position absolute, top 0, left 0, height 2px, width 0, background var(--champagne)
  - On hover: width → 100%, transition 0.4s ease

  Card content:
  - Icon: large emoji or SVG, 2rem, display block, margin-bottom 20px
  - Title: Cormorant Garamond 600, 1.4rem, var(--ink), margin-bottom 8px
  - Tagline: DM Sans, 0.88rem, var(--ghost), line-height 1.5, margin-bottom 16px
  - Price: DM Mono, 0.85rem, var(--champagne), letter-spacing 0.04em
  - CTA link: "Learn more →" — DM Sans, 0.8rem, var(--champagne), no underline, 
    underline appears on hover

  Hover effect: transform translateY(-4px), box-shadow 0 16px 40px rgba(0,0,0,0.08), transition 0.3s

  ENTRANCE ANIMATIONS (IntersectionObserver, threshold 0.12):
  All cards start: opacity 0
  - Cards at index 0, 2, 4 (0-based): transform translateX(-60px)
  - Cards at index 1, 3, 5: transform translateX(+60px)
  On intersection: opacity → 1, transform → translateX(0)
  Transition: 0.65s var(--ease-out-expo)
  Stagger: each card gets additional delay of index * 0.1s

────────────────────────────────────────
SECTION 5 — WHY GLAMHOT
────────────────────────────────────────
<section id="why">
  - Background: var(--charcoal)
  - Padding: var(--section-pad)

  Layout: CSS grid [45fr 55fr] on desktop (image left, text right), stacked on mobile
  Gap: 80px

  LEFT — Image block (.why-image):
  - Position: relative
  - Image: 100% width, aspect-ratio 4/5, object-fit cover, border-radius 4px

  Offset border decoration:
  - Absolutely positioned sibling div: position absolute, top 16px, left 16px, 
    right -16px, bottom -16px
  - Border: 1px solid var(--champagne)
  - border-radius: 4px, z-index: -1
  - Clip-path animation on scroll: 
    Initial: clip-path inset(0 100% 0 0)
    On enter: clip-path inset(0 0% 0 0), transition 0.7s ease 0.4s

  ENTRANCE (IntersectionObserver):
  - Image: translateX(-80px) opacity 0 → translateX(0) opacity 1, 0.8s var(--ease-out-expo)
  - Border: clip-path reveal after 0.4s delay

  RIGHT — Copy block (.why-copy):
  - Label: "WHY GLAMHOT" — champagne, tracked, small, uppercase, DM Sans
  - H2: "Not Just a Salon. An Experience." — Cormorant Garamond Italic, white, var(--fs-section)
  - Body: DM Sans, rgba(255,255,255,0.68), line-height 1.7, margin 24px 0

  4 Feature Points (each is a flex row, gap 16px):
  - Arrow: "→" in champagne
  - Text: DM Sans, rgba(255,255,255,0.82)
  - Content:
    1. "Trained & certified stylists for every service type"
    2. "Premium international product brands exclusively"
    3. "Hygienic, private, and genuinely welcoming ambience"
    4. "No rush — every client's time is completely respected"

  Each feature: 
  - Initial: opacity 0, translateX(50px)
  - On enter: opacity 1, translateX(0), transition 0.5s var(--ease-out-expo)
  - Stagger delay: 0s, 0.12s, 0.24s, 0.36s

  CTA button after features:
  - "Explore Our Services →" — champagne border, champagne text, 
    padding 12px 24px, margin-top 32px
  - Hover: background var(--champagne), color var(--noir)

────────────────────────────────────────
SECTION 6 — GALLERY MARQUEE
────────────────────────────────────────
<section id="gallery">
  - Background: var(--noir)
  - Padding: 80px 0
  - Overflow: hidden

  Header (centered, container width):
  - Label: "OUR WORK SPEAKS" — champagne, tracked
  - H2: "The Glamhot Difference." — Cormorant Garamond Italic, white

  Marquee Container (.marquee-wrap):
  - Two rows, each a flex strip
  - Row 1 (.marquee-row--right): animates rightward
  - Row 2 (.marquee-row--left): animates leftward
  - Gap between rows: 12px
  - Margin-top: 48px

  Each row: contains 8 image slots repeated twice (for seamless loop)
  Images: 220px width, auto height (3:4 aspect ratio enforced), object-fit cover
  Gap between images: 12px
  Flex-shrink: 0 on each image

  @keyframes marquee-right {
    from { transform: translateX(0) }
    to { transform: translateX(-50%) }
  }
  @keyframes marquee-left {
    from { transform: translateX(-50%) }
    to { transform: translateX(0) }
  }
  
  Row 1: animation marquee-right 40s linear infinite
  Row 2: animation marquee-left 40s linear infinite

  Hover on row: animation-play-state paused
  Hover on individual image: transform scale(1.04), transition 0.3s ease
  
  Left/right fade edges:
  .marquee-wrap::before, .marquee-wrap::after:
    Position absolute, top 0, height 100%, width 120px, z-index 2
    Gradient from var(--noir) to transparent (left) and vice versa (right)

  Placeholder for gallery images: 
  Use background-color var(--charcoal) with centered champagne "✦" as placeholder
  until real salon photos are provided

────────────────────────────────────────
SECTION 7 — TESTIMONIALS (4-DIRECTION ANIMATION)
────────────────────────────────────────
<section id="reviews">
  - Background: var(--ivory)
  - Padding: var(--section-pad)

  Header (centered):
  - Label: "CLIENT LOVE" — champagne, tracked, small
  - H2: "What Our Clients Are Saying." — Cormorant Garamond Italic, var(--ink)

  Testimonials Grid (.testimonials-grid):
  - CSS grid: 2×2 on desktop, 1 col on mobile
  - Gap: 24px
  - Max-width: 900px, centered
  - Margin-top: 64px

  4 Cards:
  - Card A: class .card-from-left  (translateX -120px → 0)
  - Card B: class .card-from-right (translateX +120px → 0)
  - Card C: class .card-from-top   (translateY -120px → 0)
  - Card D: class .card-from-bottom(translateY +120px → 0)

  ALL start: opacity 0 and their directional transform
  ALL transition simultaneously on IntersectionObserver:
    opacity → 1, transform → translate(0,0)
    transition: 0.85s var(--ease-out-expo)
    Cards C and D get transition-delay: 0.08s

  Card design:
  - Background: var(--white)
  - Border: 1px solid rgba(212,181,173,0.3) (blush tint)
  - Border-radius: 8px
  - Padding: 36px 32px
  - Box-shadow: 0 4px 20px rgba(0,0,0,0.04)

  Card content:
  - Stars: "★★★★★" — var(--champagne), 0.9rem, margin-bottom 16px
  - Quote: Cormorant Garamond Italic 400, 1.1rem, var(--ink), line-height 1.65
    Wrapped in proper <blockquote> or <q> element
    Opening " character: Cormorant Garamond, 3rem, var(--champagne), 
    position absolute, top -10px, left 20px, opacity 0.3
  - Name: DM Sans 500, 0.9rem, var(--ink), margin-top 20px
  - Service: DM Sans 400, 0.78rem, var(--ghost)

  After cards settle, add a gentle float:
  @keyframes float {
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-6px) }
  }
  Apply to .card after .visible is added:
  .card.visible { animation: float 4s ease-in-out infinite; }
  Stagger float timing: nth-child delays 0s, 1s, 2s, 3s

  Sample testimonials (use real GMB reviews when available):
  1: "Walked in nervous about a new haircut — walked out feeling like a completely different person. The stylist genuinely listened. Rare." — Priya M. · Hair Styling
  2: "My bridal makeup was absolutely stunning. Every guest was asking who did my look. Glamhot made my wedding day unforgettable." — Sneha R. · Bridal Package
  3: "Best facial in Bhubaneswar, no contest. My skin felt 10 years younger. Already booked my next appointment." — Kavita D. · Skin Treatment
  4: "Great vibe, spotlessly clean, staff who actually care. Balayage was done perfectly. I've found my permanent salon." — Rohan S. · Hair Colour

────────────────────────────────────────
SECTION 8 — BOOKING SECTION
────────────────────────────────────────
<section id="booking">
  - Background: var(--charcoal)
  - Padding: var(--section-pad)
  - Position: relative (subtle diagonal noise texture via pseudo)

  Layout: CSS grid [50fr 50fr] on desktop, stacked (copy first, form second) on mobile
  Gap: 80px

  LEFT (.booking-copy):
  ENTRANCE: translateX(-80px) opacity 0 → translateX(0) opacity 1, 0.7s ease-out on scroll

  - Label: "READY FOR YOUR TRANSFORMATION?" — champagne, tiny, tracked, uppercase
  - H2: "Book Your Appointment Today." — Cormorant Garamond Italic, white, 3rem
  - Body: DM Sans, rgba(255,255,255,0.65), line-height 1.7
    "Limited slots available daily. Walk-ins welcome, but appointments always get priority service."
  - Hours block (margin 32px 0):
    Two lines: DM Sans, rgba(255,255,255,0.8), small
    "Monday – Saturday · 10:00 AM – 8:00 PM"
    "Sunday · 11:00 AM – 6:00 PM"
  - Phone CTA (large):
    <a href="tel:[PHONE]"> 📞 [PHONE NUMBER] </a>
    Cormorant Garamond Italic, 1.8rem, var(--champagne)
    "Tap to call instantly" in small DM Sans below
  - WhatsApp CTA:
    <a href="https://wa.me/91[PHONEDIGITS]"> 💬 Chat on WhatsApp </a>
    DM Sans, 0.85rem, rgba(255,255,255,0.6), underline on hover

  RIGHT (.booking-form):
  ENTRANCE: translateX(+80px) opacity 0 → translateX(0) opacity 1, 0.7s ease-out on scroll
  (fires simultaneously with left column on same IntersectionObserver)

  Form container:
  - Background: var(--ivory)
  - Border-radius: 10px
  - Padding: 40px 36px

  Form heading inside: "Schedule Your Visit" — Cormorant Garamond Italic, var(--ink), 1.6rem

  Inputs (all share base style):
  - Width: 100%, margin-bottom: 20px
  - Background: transparent
  - Border: none, border-bottom: 1px solid rgba(43,39,35,0.2)
  - Border-bottom transitions: to var(--champagne) on :focus
  - Font: DM Sans, 0.9rem, var(--ink)
  - Padding: 10px 0
  - Outline: none

  Form fields:
  1. Full Name (type text, placeholder "Your Full Name")
  2. Phone Number (type tel, placeholder "+91 XXXXX XXXXX")
  3. Service (select dropdown): 
     Options: Hair Styling, Hair Colour, Skin & Facials, Nail Art, Spa & Relaxation, Bridal Package, Not Sure Yet
  4. Preferred Date (type date)
  5. Preferred Time (select): Morning (10AM–1PM), Afternoon (1PM–5PM), Evening (5PM–8PM)
  6. Message (textarea, rows 2, placeholder "Any special requests? (Optional)")

  Submit Button:
  - Full width, height 50px
  - Background: var(--champagne), color: var(--noir)
  - DM Sans 500, 0.9rem, letter-spacing 0.06em, uppercase
  - Text: "Book My Appointment →"
  - Border-radius: 4px
  - Hover: background var(--champagne-light), transform translateY(-2px), box-shadow 0 8px 24px rgba(200,169,110,0.35)
  - Transition: all 0.25s ease

  On submit (JS):
  - Prevent default
  - Basic validation (name, phone, service required)
  - Show loading state on button: "Sending..." with subtle pulse
  - After 800ms simulated: hide form, show success message:
    Checkmark icon ✓ in champagne (large)
    "Your request is confirmed!" — Cormorant Garamond Italic, ink, 1.6rem
    "We'll reach out on WhatsApp within 2 hours to confirm your slot." — DM Sans, small
    "📞 Call us directly: [PHONE]" — champagne link

────────────────────────────────────────
SECTION 9 — LOCATION & CONTACT
────────────────────────────────────────
<section id="contact">
  - Background: var(--ivory)
  - Padding: 80px 0

  Layout: CSS grid [45fr 55fr] on desktop, stacked on mobile (map first on mobile)

  LEFT (.location-info):
  - H3: "Find Us. Visit Us." — Cormorant Garamond Italic, var(--ink), 2.2rem
  - Info items (each: flex row, icon + text, gap 14px, margin-bottom 20px):
    📍 [FULL ADDRESS] / Bhubaneswar, Odisha
    📞 [PHONE NUMBER] (anchor with tel:)
    ⏰ Mon–Sat: 10 AM – 8 PM / Sun: 11 AM – 6 PM
  - "Get Directions" button:
    border 1px solid var(--champagne), color var(--champagne), padding 12px 24px
    href: https://maps.google.com/?q=Glamhot+Unisex+Salon+Bhubaneswar
    Hover: background var(--champagne), color var(--noir)

  RIGHT (.map-embed):
  - Google Maps iframe, width 100%, height 420px, border-radius 8px, border none
  - Src: [INSERT EMBED URL FROM GOOGLE MAPS → SHARE → EMBED A MAP]
  - Fallback if no embed: styled div showing address on a champagne background

────────────────────────────────────────
SECTION 10 — FOOTER
────────────────────────────────────────
<footer>
  - Background: var(--noir)
  - Padding: 64px 0 32px
  - Border-top: 1px solid rgba(200,169,110,0.15)

  Grid: [1fr 1fr 1fr] on desktop, stacked on mobile, gap 48px

  COL 1:
  - Wordmark "GLAMHOT" — Cormorant Garamond 600, var(--champagne), 1.6rem
  - "UNISEX SALON" — DM Sans, 0.65rem, tracked, rgba(255,255,255,0.4), uppercase
  - Tagline: "Bhubaneswar's premiere unisex salon." — DM Sans, 0.85rem, rgba(255,255,255,0.5), margin-top 12px
  - Social icons row (margin-top 24px):
    Instagram, Facebook, WhatsApp — SVG icons, 20px, rgba(255,255,255,0.5) → var(--champagne) on hover
    Links to actual social profiles

  COL 2:
  - Heading: "Quick Links" — DM Sans 500, 0.72rem, tracked uppercase, var(--champagne), margin-bottom 16px
  - Links: Services · Gallery · Reviews · Book Appointment · Contact Us
    DM Sans, 0.88rem, rgba(255,255,255,0.55), each on own line
    Hover: color var(--champagne), translateX(4px)

  COL 3:
  - Heading: "Contact" — same style as col 2 heading
  - Address, phone, hours — same as contact section but smaller DM Sans, rgba(255,255,255,0.55)

  Bottom bar (border-top: 1px solid rgba(255,255,255,0.06), margin-top 48px, padding-top 24px):
  - Flex, space-between
  - Left: "© 2025 Glamhot Unisex Salon. All rights reserved."
  - Right: "Designed in Bhubaneswar."
  - Both: DM Sans, 0.75rem, rgba(255,255,255,0.3)

────────────────────────────────────────
JAVASCRIPT MODULES TO IMPLEMENT
────────────────────────────────────────

1. SCROLL-TRIGGERED ANIMATIONS ENGINE
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));

All animatable elements have class .anim-ready with CSS:
.anim-ready { opacity: 0; transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo); }
.anim-ready.visible { opacity: 1; transform: translate(0,0) !important; }

2. TYPEWRITER ENGINE (in hero)
const target = document.querySelector('.typewriter-target');
const cursor = document.querySelector('.cursor');
const phrases = ["Becomes a Statement.", "Feels Like Luxury.", "Tells Your Story.", "Leaves You Transformed."];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function type() {
  const phrase = phrases[phraseIdx];
  if (!isDeleting) {
    target.textContent = phrase.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === phrase.length) {
      isDeleting = true;
      setTimeout(type, 2800);
      return;
    }
  } else {
    target.textContent = phrase.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 18 : 35);
}
window.addEventListener('load', () => setTimeout(type, 1200));

3. STICKY NAV
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

4. COUNTER ANIMATION (trust strip)
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;
  const animate = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const current = ease * target;
    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current) + (target === 5 ? '+' : (target === 200 ? '+' : ''));
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

5. FORM SUBMISSION (simple, no backend)
document.querySelector('.booking-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Validate
  // Show loading
  // After delay, show success state
  // Optionally: construct WhatsApp URL with form data and open:
  const name = encodeURIComponent(this.querySelector('[name=name]').value);
  const service = encodeURIComponent(this.querySelector('[name=service]').value);
  const phone = '[PHONE DIGITS ONLY]';
  const msg = encodeURIComponent(`Hi! I'd like to book an appointment at Glamhot Salon.\nName: ${decodeURIComponent(name)}\nService: ${decodeURIComponent(service)}`);
  window.open(`https://wa.me/91${phone}?text=${msg}`, '_blank');
});

6. MOBILE HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

────────────────────────────────────────
RESPONSIVE BREAKPOINTS
────────────────────────────────────────
- Mobile: max-width 640px
- Tablet: 641px – 900px
- Desktop: 901px+
- Large: 1280px+

Mobile-specific rules:
- Hero: single column, text centered, image as darkened full-bg
- Services: 2-column grid
- Why Glamhot: stacked, image first, copy below
- Testimonials: 2-column grid (keep the 4-direction anim on mobile too, scale down distances to ±60px)
- Booking: stacked (copy first, form below)
- Location: map first, info below
- Nav: hamburger menu

────────────────────────────────────────
PERFORMANCE & SEO NOTES
────────────────────────────────────────
- All images: lazy loading (loading="lazy"), proper alt attributes
- Meta tags:
  <title>Glamhot Unisex Salon Bhubaneswar | Book Hair & Beauty Appointment</title>
  <meta name="description" content="Glamhot Unisex Salon in Bhubaneswar — premium hair styling, skin treatments, nail art & bridal packages. Book your appointment online or call directly.">
  <meta property="og:title" content="Glamhot Unisex Salon | Bhubaneswar's Premier Salon">
  <meta property="og:description" content="Precision cuts, luxury facials, bridal packages & more. Book online today.">
  <link rel="canonical" href="[WEBSITE URL]">
- Structured data (JSON-LD):
  @type: LocalBusiness + BeautySalon
  name, address, telephone, openingHours, aggregateRating

- Google Ads: Add UTM-aware section for the ads version:
  On ?utm_source=google: Hide center nav links, add sticky bottom CTA bar with "Book Now" + phone

────────────────────────────────────────
PLACEHOLDER DATA TO REPLACE BEFORE LAUNCH
────────────────────────────────────────
[ ] [PHONE NUMBER] — from GMB (format: +91 XXXXX XXXXX for display, 91XXXXXXXXXX for wa.me)
[ ] [FULL ADDRESS] — from GMB
[ ] [PIN CODE] — from GMB  
[ ] [MAPS EMBED URL] — from Google Maps → Share → Embed a map → copy iframe src
[ ] [INSTAGRAM URL] — from salon's Instagram profile
[ ] [FACEBOOK URL] — from salon's Facebook page
[ ] [WHATSAPP NUMBER] — can be same as phone number
[ ] Gallery images — 8–10 real salon photos (interior, results, team)
[ ] Hero image — editorial-quality salon/stylist photo
[ ] "Why Glamhot" section image — salon interior or stylist at work
[ ] GMB review text — replace placeholder testimonials with real Google reviews
[ ] Google Rating number — exact star rating from GMB
[ ] Client count — actual number from GMB or CRM
```

---

## PART 4 — GOOGLE ADS SPECIFIC INSTRUCTIONS

### Landing Page Match Rules

| Ad Headline | Page Headline to Mirror |
|---|---|
| "Best Salon in Bhubaneswar" | Add: "Bhubaneswar's Best-Rated Unisex Salon" as H1 subtitle |
| "Book a Salon Appointment" | Keep: "Book Your Appointment Today" in booking section |
| "Hair Color Near Me" | Ensure: Hair Colour card is first in services grid |
| "Bridal Makeup Bhubaneswar" | Ensure: Bridal Package card is visible without scrolling |

### Ads Landing Page Version Modifications

Add `?ads=true` URL parameter check in JS:
```js
const isAdsTraffic = new URLSearchParams(window.location.search).get('ads') === 'true'
  || document.referrer.includes('google');

if (isAdsTraffic) {
  document.querySelector('.nav-links').style.display = 'none'; // remove navigation
  document.querySelector('.sticky-cta-bar').style.display = 'flex'; // show sticky bottom bar
}
```

Sticky Bottom CTA Bar (hidden normally, shown for ads traffic):
```
Position: fixed, bottom 0, full width, z-index 999, height 64px
Background: var(--champagne), color: var(--noir)
Content: "📞 Call: [PHONE]" | "📅 Book Appointment"
Two buttons, side by side, full responsive
```

### Conversion Tracking
Add Google Ads conversion tags:
- On form submit: `gtag('event', 'conversion', { 'send_to': '[CONVERSION_ID]' })`
- On phone click: `gtag('event', 'conversion', { 'send_to': '[CALL_CONVERSION_ID]' })`

---

*Document prepared by Convertrix for Glamhot Unisex Salon — Bhubaneswar, Odisha*  
*Version: 1.0 | Ready for handoff to development*