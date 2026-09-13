---
target_identity: "file:C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src-pages-blog-index-astro"
timestamp: 2026-09-13T12-57-05Z
slug: src-pages-blog-index-astro
---
# Impeccable Design Critique — Blog Surfaces

**Target Surfaces:** `src/pages/blog/index.astro` & `src/pages/blog/[slug].astro`  
**Brand Identity:** Santos & Trevizan — Advocacia e Assessoria (*"The Dignified Advocate"*)  
**Evaluation Mode:** Read & Persuade  
**Provenance:** Two isolated parallel subagents (Assessment A: Design Review Director; Assessment B: Detector + Browser Evidence via Chromium).

---

## 1. Design Specificity Verdict

**Verdict: Strongly Tailored with Critical Structural Blindspots (80% Bespoke / 20% Generic Leakage)**

The visual hierarchy, editorial cadence, and humanized tone successfully embody **"The Dignified Advocate"**. The interface feels authoritative, warm, and distinctly authored for a Brazilian legal practice rather than a generic tech blog or interchangeable legal template.

### Bespoke Strengths:
- **Chamber Navy & Warm Parchment Harmony:** Deep oceanic navy (`#1D2A3D`) grounded by parchment backgrounds creates a calm, reassuring institutional atmosphere for distressed readers.
- **Context-Aware Pre-Filled WhatsApp Triage:** Passing the specific article title directly into WhatsApp triage URLs (`Olá! Li o artigo "${articleTitle}"...`) completely removes friction for prospective clients seeking counsel.
- **Editorial Typography:** `Lora` display headings paired with `Albert Sans` body copy at 18px / 1.85 line-height delivers an effortless reading rhythm.

### Where Generic Leakage & Structural Flaws Creep In:
- **P0 Cascading Specificity Bug:** `.article-content h3` forces CTA titles inside the article to `#1D2A3D`, rendering dark navy text over a dark navy background (1.0:1 contrast — completely invisible).
- **Footer Palette Disconnect:** `Footer.astro` relies on default Tailwind `slate-900` / `slate-800` rather than the brand's Chamber Navy (`#1D2A3D`) and Old Gold (`#B8924A`).
- **WCAG AA Contrast Violations:** Old Gold (`#B8924A`) is misapplied as a text fill on white backgrounds (yielding ~2.9:1, failing the 4.5:1 requirement).

---

## 2. Nielsen's 10 Heuristics Scorecard

| # | Heuristic | Score (0-4) | Status | Key Observation |
|---|---|:---:|:---:|---|
| 1 | **Visibility of System Status** | **3** | Good | Category filter buttons toggle active state; copy-link displays toast. Needs `aria-pressed`. |
| 2 | **Match System & Real World** | **4** | Excellent | Speaks natural Brazilian legal language without bureaucratic obscurity (*pente-fino*, *CadÚnico*, *liminar em 48h*). |
| 3 | **User Control and Freedom** | **3** | Good | Breadcrumbs and return links provided; lacks explicit reset when category filter returns 0 articles. |
| 4 | **Consistency and Standards** | **2** | Fair | **Critical issue:** Footer uses generic Slate instead of Chamber Navy; gold text violates `DESIGN.md` rules. |
| 5 | **Error Prevention** | **2** | Fair | Selecting an empty category displays a blank void with no feedback message; clipboard errors caught silently. |
| 6 | **Recognition Rather Than Recall** | **3** | Good | Pre-filled WhatsApp URLs retain context; AuthorBio lacks explicit OAB registration number. |
| 7 | **Flexibility and Efficiency** | **n/a** | n/a | Mode-applicability exemption for editorial/reading surfaces (no power-user shortcuts needed). |
| 8 | **Aesthetic & Minimalist Design** | **3** | Good | Dignified card and callout layout; deducted for 4-5 stacked CTAs at the bottom of articles. |
| 9 | **Help Users Recover from Errors** | **2** | Fair | Zero feedback when category filtering yields no articles (no "Nenhum artigo encontrado" empty state). |
| 10 | **Help and Documentation** | **4** | Excellent | Callouts (Tips, Deadlines, Jurisprudence) serve as superb contextual legal documentation. |
| **Total** | | **26/36** | **72.2%** | **Rating: Good** |

---

## 3. Cognitive Load Assessment

Evaluated against the 8-point checklist and Cowan's Working Memory Rule ($\le 4$ options):
- **Single Focus:** ❌ **FAIL (at post footer).** Reading flow is serene, but the end of an article presents 4 competing action points simultaneously.
- **Chunking & Grouping:** ✅ **PASS.** Clear visual hierarchy between Hero, Featured Card, Recent Grid, and Legal Callouts.
- **Minimal Choices ($\le 4$ options):** Filter bar (4 choices) passes; post-article conversion cluster (5+ choices) fails.
- **Progressive Disclosure:** ✅ **PASS.** Excerpts disclose core hooks; full articles provide comprehensive guidance.

---

## 4. Priority Issues (P0–P3)

### [P0] Invisible CTA Title in Article (CSS Specificity Bug)
- **What:** In `PortableTextRenderer.astro`, `.article-content h3` has specificity `(0, 1, 1)`. When `CtaBlock.astro` embeds `ArticleCTA.astro`, its `<h3>` is forced to `#1D2A3D` over a `#1D2A3D` container. The heading *"Recebeu a notificação ou está com medo de perder o BPC?"* is rendered in **invisible dark-blue text on dark-blue background (1.0:1 contrast)**.
- **Fix:** In `ArticleCTA.astro`, use `!text-white` or scope `PortableTextRenderer`'s `h3` rule.

### [P1] Low-Contrast Gold Text on White (WCAG AA Failure)
- **What:** `#B8924A` (Old Gold) with white `#FFFFFF` yields only **2.91:1** contrast (fails WCAG AA 4.5:1).
  - `BlogCard.astro`: "Destaque" pill uses `bg-[#B8924A] text-white`.
  - `AuthorBio.astro`: Author role uses `text-[#B8924A]` on white.
  - `[slug].astro`: Category breadcrumb uses `text-[#B8924A]`.
- **Fix:** Use dark navy text `#1D2A3D` on gold backgrounds (6.8:1 contrast), and a deeper bronze/gold (`#7D5F23` or `#8A661C`) for text on light surfaces.

### [P1] Skipped Heading Levels & Semantic Outline
- **What:**
  - Blog Index: `<h1>` in hero is directly followed by `<h3>` in cards (missing `<h2>`).
  - Article Page: Callout titles render as `<h4>` directly following `<h2>` sections (missing `<h3>`).
- **Fix:** Use `<h2>` for BlogCard titles on index; change Callout titles from `<h4>` to a styled `<p>` inside `<aside role="note">`.

### [P1] Category Filter Zero-State Void
- **What:** Clicking a category with 0 published articles causes the grid to vanish into an empty white void with no feedback message or reset button.
- **Fix:** Add an empathetic empty-state banner with an instant "Ver todos os artigos" reset button.

### [P2] Inconsistent Footer Palette
- **What:** `Footer.astro` uses generic Tailwind `bg-slate-900` / `bg-slate-800` rather than the design tokens (`#1D2A3D` Chamber Navy, `#243350` Card Navy, and `#B8924A` Old Gold borders).
- **Fix:** Harmonize `Footer.astro` with the brand design tokens.

### [P2] Reading Line Length & Heading Scale Cliff
- **What:** Main article text stretches to ~85–92 characters/line (exceeding the ideal 65–75ch); `h2` (36px) drops abruptly to `h3` (20px).
- **Fix:** Constrain `.article-content` to `max-w-3xl mx-auto` (~68ch) and adjust `h3` to `1.5rem` (24px).

### [P2] WhatsApp Share vs. Contact False Affordance & CTA Clustering
- **What:** Header share button is labeled "WhatsApp" in green, causing users to mistake it for direct lawyer contact; end of article has 4-5 stacked conversion elements.
- **Fix:** Rename share button to "Compartilhar artigo" with neutral styling; suppress template bottom CTA if an in-article CTA is present.

---

## 5. Persona Red Flags

1. **Dona Maria (68 anos — Beneficiária de BPC/LOAS no celular Android)**:
   - Gold text (`#B8924A`) washes out in sunlight on her budget screen.
   - Taps green "WhatsApp" button under the title expecting to talk to Dra. Paloma, but WhatsApp opens with a "Forward to..." prompt.
2. **Carlos (38 anos — Trabalhador demitido)**:
   - Clicks "Direito Trabalhista" on the blog index; the page goes blank with no articles and no explanation. Carlos assumes the firm does not handle labor law and leaves.
3. **Dra. Paloma (Advogada Fundadora e Autora)**:
   - When she inserts a tailored consultation CTA in Sanity Studio, its title is completely invisible due to the CSS bug, and a duplicate template CTA appears right below it.
