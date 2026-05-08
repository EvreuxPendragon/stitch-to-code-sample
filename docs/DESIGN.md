---
version: alpha
name: Cafe Miel
description: >
  Warm minimalist food editorial design system for a baking and dessert recipe
  blog. Rooted in organic warmth, editorial clarity, and approachable elegance.
colors:
  primary: "#2A2118"
  secondary: "#7A716B"
  tertiary: "#C97B5A"
  neutral: "#FAF8F5"
  surface: "#FFFFFF"
  surface-tint: "#F3EDE6"
  border: "#E6DDD6"
  accent-rose: "#E8C2B8"
  on-primary: "#FAF8F5"
  on-tertiary: "#FFFFFF"
  error: "#B00020"
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Playfair Display
    fontSize: 2.75rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Poppins
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.75
  body-md:
    fontFamily: Poppins
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.65
  label-caps:
    fontFamily: Poppins
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.14em
  label-md:
    fontFamily: Poppins
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
  nav:
    fontFamily: Poppins
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.04em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  gutter: 24px
  margin: 40px
  section: 80px
  max-width: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 14px 32px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 12px 28px
  button-secondary-hover:
    textColor: "{colors.tertiary}"
  recipe-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 0px
  recipe-card-hover:
    textColor: "{colors.tertiary}"
  category-label:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-caps}"
    padding: 0px
  editorial-callout:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 40px 48px
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.tertiary}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 12px 16px
  input-field-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
---

# Broma Bakery — Design System

## Overview

Broma Bakery is a warm minimalist editorial brand. The visual language evokes
the feeling of a handwritten recipe passed down and styled for a contemporary
audience: organic warmth meets editorial precision.

**Brand personality:** Approachable but refined. Nostalgic but modern. The site
feels like a beautifully photographed cookbook — airy, generous with white
space, and never clinical. It is the opposite of sterile tech minimalism; every
element carries warmth.

**Target audience:** Home bakers aged 25–45 who take pride in their craft,
trust beautiful photography to inspire them, and expect a browsing experience
that feels as curated as the recipes themselves.

**Emotional response to evoke:** The visual equivalent of a warm kitchen on a
Sunday morning — relaxed, inviting, and confident. Users should feel inspired
and unhurried. The UI is never urgent or aggressive.

**Design north star:** *Editorial warmth.* Think food magazine layouts where
generous negative space, a serif headline, and a portrait photo do all the
heavy lifting. Restraint is the craft.

## Colors

The palette is built entirely from warm neutrals with a single earthy accent
that references terracotta, browned butter, and cinnamon — all bakery staples.

- **Primary (#2A2118):** A very deep warm brown, not pure black. Used for all
  body text, headlines, and the logo. The brown undertone keeps it from feeling
  harsh and reinforces the warmth of the brand identity.

- **Secondary (#7A716B):** A warm medium gray with slight brown lean. Used for
  metadata, captions, recipe category sub-labels, and footer links. Provides a
  recessive tier in the typographic hierarchy without cold contrast.

- **Tertiary (#C97B5A):** A muted terracotta / warm sienna that acts as the
  single interactive accent. Used exclusively for category labels, hover states,
  text links, and the one CTA color that drives action. Inspired by the site's
  tile accent (#DA532C) desaturated and lightened to remain warm without being
  loud.

- **Neutral (#FAF8F5):** A warm off-white page background with a faint cream
  undertone. Never pure white for large backgrounds — the warmth is intentional
  and critical to the brand.

- **Surface (#FFFFFF):** Pure white reserved for content cards, modal
  overlays, and areas that need maximum contrast for readability (e.g.,
  newsletter input forms, inline recipe cards).

- **Surface Tint (#F3EDE6):** A light warm beige used for editorial callout
  sections (e.g., "THIS JUST IN" hero feature boxes) and the newsletter section
  background. Adds depth without shadow.

- **Border (#E6DDD6):** Warm parchment-toned divider. Used for horizontal rules
  between sections, card borders (when used), and input field outlines.

- **Accent Rose (#E8C2B8):** A dusty blush used only for decorative elements
  like star icons and ornamental separators. Never used for interactive states
  or text — purely ornamental.

## Typography

The type system uses two families with sharply distinct roles: **Playfair
Display** for all editorial headings and **Poppins** for all functional, body,
and UI text. This pairing creates natural tension — the high-contrast serif
feels like a food magazine while the clean sans grounds navigation and
body copy.

**Display & Headlines (Playfair Display)**

Playfair Display is used for the brand name, section headlines, recipe titles,
and any large editorial statement. At display sizes, it is set in Regular (400)
with tight letter-spacing and loose line-height to maximize impact. At
component sizes (recipe cards), it shifts to SemiBold (600) for density and
scannability. Italic variants appear for stylistic emphasis in section headers
like *"it's brunch season."* — always lowercase, always italic for these
conversational moments.

**Body & UI (Poppins)**

Poppins handles navigation, body copy, category labels, metadata, form fields,
and all functional text. Its humanist warmth complements Playfair without
competing. Category labels are set in Poppins Bold ALL CAPS with generous
letter-spacing (0.14em) — this is the brand's "editorial voice" for
classification, borrowed from magazine design conventions.

**Key rules:**
- Never use Playfair Display below 20px.
- Category labels are ALWAYS uppercase Poppins Bold with 0.14em tracking.
- Body copy line-height is never below 1.6 — this site breathes.
- No third font family is permitted anywhere in the system.

## Layout

The layout follows a **Centered Editorial Grid** for desktop (max-width:
1200px) and a **Single-Column Stack** for mobile. The structure mimics a
premium food magazine: wide photography, generous gutters, and section rhythm
driven by large typographic breaks.

**Grid:** 12-column fluid grid with 24px gutters and 40px side margins on
desktop. Recipe grids use a 3-column layout at desktop (≥1024px), 2-column at
tablet (≥640px), and single-column on mobile.

**Spacing scale:** Based on an 8px base unit. All padding, margins, and gaps
are multiples of 8px. The 4px half-step (xs) is used only for micro-adjustments
within components (e.g., icon-to-label gap in category chips).

**Section rhythm:** Sections are separated by 80px vertical padding
(`spacing.section`) at desktop. Photography-led hero sections (e.g., "THIS
JUST IN") use full-bleed imagery with text overlay on mobile and side-by-side
layouts at desktop.

**Max width:** 1200px centered container. Content areas (body copy in recipe
posts) are further constrained to ~720px for optimal reading line length.

**Image ratio:** Recipe card photography is consistently 2:3 portrait
(e.g., 613×920px source). This ratio is enforced across all grid cards and
must not be broken by cropping or stretching.

## Elevation & Depth

Depth is achieved through **Tonal Contrast and Spatial Separation** — not
shadows. This is a flat design system with one intentional exception.

The three tonal layers are:
1. **Page layer:** Warm off-white `neutral` (#FAF8F5) — the canvas.
2. **Content layer:** Pure white `surface` (#FFFFFF) — cards and inputs.
3. **Callout layer:** Warm beige `surface-tint` (#F3EDE6) — feature sections.

**No drop shadows** appear anywhere in the UI except for a single optional
`box-shadow: 0 2px 8px rgba(42,33,24,0.06)` that may be applied to floating
navigation on scroll (not the default state). Heavy shadows, color glows, or
gradients are explicitly out of brand.

**Visual hierarchy is communicated through:**
- Typography size and weight contrast (not color)
- Whitespace rhythm between sections
- Photography scale (hero images are always larger than grid cards)
- The terracotta category label as the only chromatic signal in cards

## Shapes

The shape language is defined by **Deliberate Flatness**. This is not an
accident of omission — it is a craft statement.

Interactive elements (buttons, inputs and tags) use `rounded.full` (9999px)
corners.

The only exceptions are images that keep a full rectangular shape with 0px rounded corners.

## Components

### Buttons

The primary button is fully rounded (9999px radius), set in `label-caps`
typography (Poppins Bold Uppercase), with a deep warm brown background. It is
used for primary CTAs: "Read Now", "Order Now", "Submit".

The secondary button ("browse all recipes") is text-only with an underline
or right-arrow treatment — no filled background, no border. It serves as a
wayfinding element, not a conversion driver.

**Hover states** shift primary button background to terracotta `tertiary`
(#C97B5A). Secondary links shift text color to the same terracotta.
Transitions are 200ms ease. No scale transforms on hover.

### Recipe Cards

Recipe cards consist of a full-bleed portrait image (2:3 ratio), a category
label in uppercase terracotta (`label-caps`), and a recipe title in
`headline-sm` (Playfair Display SemiBold). There are no borders, no shadows,
and no card background fill — the card is defined entirely by its photograph
and typography. Padding between the image bottom and the category label is 12px.

On hover, the recipe title text color shifts to `tertiary` (#C97B5A) at
200ms ease. The image does not scale or overlay — restraint is the rule.

### Category Labels

Uppercase, Poppins Bold, 0.6875rem, 0.14em letter-spacing, terracotta color
(#C97B5A). Used consistently above recipe card titles and inside the hero
callout sections. Never placed below a title. Never inside the image.

### Editorial Callout ("THIS JUST IN")

A full-width section with `surface-tint` background (#F3EDE6). Contains a
"THIS JUST IN" label-caps eyebrow, a `display-lg` Playfair Display headline
(the featured recipe name), a body-md description paragraph, and a text
link CTA. Left-aligned text column sits beside or above a full portrait
photograph.

### Navigation

Top navigation: horizontally centered Poppins links at 0.875rem with 0.04em
tracking. A top utility bar above the main nav holds social icons and a
search trigger. The logo (SVG wordmark) is centered between nav link groups
on desktop.

Dropdown mega-menu: triggered on hover over "Recipes." Shows two columns of
text category links plus a column of 3 featured recipe mini-cards.

### Newsletter Input

Inline label-and-input pair: "Name" and "Email" fields are full-width,
square-cornered, with a 1px border in `border` color (#E6DDD6). Submit
button uses the primary button style. The form section sits on a
`surface-tint` background.

### Craving Navigation (Horizontal Scroller)

A horizontal row of 8 image+label tiles for browsing by craving type
("salty-sweet", "nostalgic", etc.). Each tile is a square portrait crop with
the craving label overlaid at bottom-left in white `label-caps`. This is the
only component that uses a text-on-image pattern.

## Do's and Don'ts

**Do's:**
- Do use `neutral` (#FAF8F5) — not pure white — for all page backgrounds.
- Do enforce the 2:3 portrait ratio on every recipe card image without exception.
- Do set all category labels in uppercase Poppins Bold with 0.14em letter-spacing
  and terracotta color — this is a load-bearing brand signal.
- Do maintain a minimum 80px vertical gap between page sections on desktop.
- Do use `primary` color (#2A2118) for all headlines to preserve warmth.
- Do use Playfair Display Italic (Regular weight) for conversational section
  headers like *"it's brunch season."* — always lowercase in this pattern.
- Do maintain WCAG AA contrast ratios (≥4.5:1 for normal text, ≥3:1 for
  large text) across all color pairings.

**Don'ts:**
- Don't add border-radius to images or cards.
- Don't use more than two font families anywhere in the system (Playfair
  Display + Poppins only).
- Don't use Playfair Display for body copy, captions, navigation, or labels.
- Don't use drop shadows except for the single allowed scrolled-nav elevation.
- Don't use pure black (#000000) for text — always use the warm primary
  (#2A2118).
- Don't use pure white (#FFFFFF) for full-page backgrounds — use `neutral`
  (#FAF8F5) instead.
- Don't introduce new accent colors. The terracotta `tertiary` is the sole
  interactive color; accent rose is purely decorative.
- Don't scale or add hover zoom/overlay effects on recipe card images.
- Don't use more than two type weights on a single screen view.
- Don't use landscape-cropped images for recipe cards — the 2:3 portrait ratio
  is required for visual rhythm.
- Don't place editorial callout labels ("THIS JUST IN") below the headline —
  they are always eyebrows, never captions.
