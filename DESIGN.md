---
name: Santos & Trevizan — Advocacia e Assessoria
description: Classical Brazilian legal prestige balanced with warm, approachable clarity
colors:
  chamber-navy: "#1D2A3D"
  old-gold: "#B8924A"
  warm-parchment: "#D9D8D3"
  action-green: "#25D366"
  action-green-hover: "#20BA56"
  highlight-gold: "#F0D080"
  secondary-gold: "#D4A857"
  card-navy: "#243350"
  card-navy-hover: "#293A5A"
  neutral-dark: "#0F172A"
  neutral-surface: "#F8FAFC"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "'Lora', Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "'Lora', Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "'Lora', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "'Albert Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Albert Sans', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.action-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.action-green-hover}"
  card-area:
    backgroundColor: "{colors.card-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "28px"
  card-area-hover:
    backgroundColor: "{colors.card-navy-hover}"
---

# Design System: Santos & Trevizan — Advocacia e Assessoria

## Overview

**Creative North Star: "The Dignified Advocate"**

The Santos & Trevizan visual system balances the gravitas and rigor of Brazilian jurisprudence with warm, empathetic modern clarity. Legal representation often meets clients at moments of high anxiety—disputed dismissals, blocked retirement claims, complex family inheritances. The interface conveys steadfast technical competence without the cold intimidation or bureaucratic obscurity of classical law firms.

Visual weight rests on Chamber Navy (`#1D2A3D`) anchored by Warm Parchment (`#D9D8D3`) surfaces and Old Gold (`#B8924A`) accents. Warm typography pairs the literary authority of *Lora* and *Merriweather* for headings with the effortless scanability of *Lato* for body text. Crucially, direct client action is illuminated by a prominent Action Green (`#25D366`) WhatsApp pathway, assuring immediate human connection across Brazil.

**Key Characteristics:**
- **Prestige without Pretense:** Rich traditional deep navy and refined gold accents framed by warm, inviting parchment.
- **Immediate Human Accessibility:** High-contrast, tactile WhatsApp contact points designed for zero-friction client reassurance.
- **Rigor & Structure:** Clean modular cards, thoughtful information chunks, and disciplined editorial typography that demystifies Brazilian law.

## Colors

A dignified legal palette contrasting deep oceanic navy and warm parchment neutrals, crowned with antique gold accents and a vital action green for client communication.

### Primary
- **Chamber Navy** (`#1D2A3D`): The foundational bedrock of the firm. Used for major structural sections, primary headings, dark surfaces, and brand authority.

### Secondary
- **Old Gold** (`#B8924A`): The mark of craft, rigor, and prestige. Used for linear corner brackets, icon strokes, subtle borders, and key subsection highlights.
- **Highlight Gold** (`#F0D080`): Used as a radiant hover glow and gradient partner to Old Gold.
- **Secondary Gold** (`#D4A857`): Used for subheadings and card section titles on dark surfaces.

### Tertiary
- **Direct Action Green** (`#25D366` / hover `#20BA56`): Reserved strictly for triage and client connection actions (WhatsApp CTA button, floating action button).

### Neutral
- **Warm Parchment** (`#D9D8D3`): Neutral hero and navigation backdrop evoking traditional legal documents and calm physical warmth.
- **Card Navy** (`#243350` / hover `#293A5A`): Deep container surface providing gentle tonal contrast within Chamber Navy sections.
- **Neutral Surface** (`#F8FAFC`): Crisp light background for institutional and biographical sections.
- **Slate Text** (`#475569` / `#1E293B`): Readable neutral body copy on light surfaces.
- **Pure White** (`#FFFFFF`): Pillar cards and crisp contrast highlights.

### Named Rules
**The Action Exclusivity Rule.** Action Green (`#25D366`) is exclusively reserved for direct client communication channels (WhatsApp triage, consultation booking). It must never be co-opted for cosmetic accents, badges, or secondary UI widgets.

**The Golden Precision Rule.** Old Gold is an accent, not a fill. It appears in delicate structural strokes, icon lines, and refined borders; it never dominates large background planes.

## Typography

**Display Font:** Lora (with Georgia, serif fallback)
**Headline Font:** Lora (with Georgia, serif fallback)
**Body Font:** Albert Sans (with -apple-system, sans-serif fallback)
**Label Font:** Albert Sans (uppercase, tracking-wider)

**Character:** Dignified, literary, and accessible. Serifs carry constitutional weight and institutional trust, while the humanist sans-serif body provides rapid legibility for stressed readers.

### Hierarchy
- **Display** (Bold 700, `clamp(2rem, 5vw, 3rem)`, line-height 1.2): Hero tagline and primary brand statements.
- **Headline** (Bold 700, 2.25rem - 3rem, line-height 1.25): Major section titles ("Áreas de Atuação", "Sobre o Escritório").
- **Title** (Semibold 600 / Bold 700, 1.25rem - 1.5rem, line-height 1.35): Practice area cards, pillar headings, and service categories.
- **Body** (Regular 400 / Medium 500, 1rem - 1.125rem, line-height 1.6): Explanatory text, legal concepts, and firm profile. Max line length 65–75ch.
- **Label** (Semibold 600, 0.75rem - 0.875rem, letter-spacing 0.05em, uppercase): Section kickers, badges, and category indicators.

### Named Rules
**The Plain Language Rule.** Body text must remain generous in line-height (1.6+) and never drop below 15px. When explaining legal rights, clarity in typography mirrors clarity in counsel.

## Layout

- **Container Widths:** Standard maximum container width of `max-w-7xl` (1280px) with horizontal padding (`px-4 sm:px-6 md:px-8`).
- **Section Rhythm:** Substantial vertical padding (`py-16 md:py-24`) creating distinct editorial chapters between Hero, Practice Areas, Profile, and Contact.
- **Grid Systems:** 
  - Practice areas: 1 column mobile, 2 columns tablet, 3 columns desktop (`gap-8`).
  - Profile & Pillars: 12-column split (7 columns biography, 5 columns value pillars).
- **Responsive Navigation:** Fixed 4rem (64px) top header with desktop inline navigation and a clean, full-screen mobile menu drawer.

## Elevation & Depth

The system employs restrained tonal layering over aggressive drop shadows. Surfaces feel grounded, stable, and physical.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1)`): Minimal lift for white cards on light surfaces.
- **Card Elevation** (`box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.15)`): Deep focus for pillar containers and highlighted cards.
- **Interactive Lift** (`transform: translateY(-2px)` or `scale(1.02)` with `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2)`): Confident tactile response on hover.
- **WhatsApp Ambient Pulse** (`animation: whatsapp-pulse 2s infinite`): Subtle expanding ring pulse on the floating action button to catch attention without visual shrillness.

### Named Rules
**The Grounded Surface Rule.** Deep navy surfaces use tone shifts (`#1D2A3D` to `#243350`) rather than dark drop shadows to create spatial layering.

## Shapes

- **Corner Radius Scale:**
  - Standard cards & containers: `rounded-xl` (12px)
  - Interactive buttons & inputs: `rounded-lg` (8px)
  - Heroic pillar boxes: `rounded-2xl` (16px)
  - Badges & Action Buttons: `rounded-full` (pill)
- **Signature Accents:**
  - **L-Bracket Golden Accent:** Thin 2px gradient corner arms (`#F0D080` to `#B8924A`) framing the top-left of primary practice cards, echoing classical legal framing.
  - **Hero Border Transition:** Subtle linear gradient rule bridging hero and content.

## Components

### Buttons
- **Shape:** Rounded rectangle (`rounded-lg`, 8px) or pill.
- **Primary WhatsApp CTA:** Action Green (`#25D366`), white bold text, WhatsApp icon, generous padding (`px-8 py-4`).
- **Hover / Focus:** Scale lift (`hover:scale-[1.02]`), background shift (`#20ba56`), visible gold focus ring (`ring-2 ring-[#B8924A]`).

### Practice Area Cards
- **Structure:** Modular container with L-bracket top accent, custom SVG line icon, title, 3 distinct legal issue breakdown rows, and a bottom inquiry CTA.
- **Surface:** Card Navy (`#243350`) with delicate gold border (`border-[#B8924A]/25`).
- **Hover:** Slight expansion (`scale-[1.02]`), border glow (`border-[#F0D080]/50`), arrow glide.

### Floating Action Button (FAB)
- **Structure:** 56px (mobile) to 80px (desktop) circular green action button anchored at `bottom-5 right-5`.
- **States:** Ambient green expanding pulse when idle; pause on hover.

### Navigation Header
- **Structure:** Fixed 64px bar in Warm Parchment (`#D9D8D3`). Brand logo fades in seamlessly once the visitor scrolls past the hero section.

## Do's and Don'ts

### Do:
- **Do** maintain strong contrast ratios across all text: white and gold on dark navy, charcoal on warm parchment.
- **Do** preserve structured WhatsApp triage messages per practice area to pre-qualify inquiries.
- **Do** maintain generous whitespace and line-height on legal explanations so complex laws remain approachable.
- **Do** keep touch targets on mobile at least 48x48px for effortless thumb tapping.

### Don't:
- **Don't** use legal stock clichés (wooden gavels, blindfolded lady justice, marble courthouse pillars).
- **Don't** apply AI "side-tab" borders (thick unilateral colored borders on cards).
- **Don't** use Action Green for anything other than direct communication channels.
- **Don't** use high-pressure sales urgency patterns, countdown timers, or aggressive popups; maintain dignity and compliance with OAB ethics.
