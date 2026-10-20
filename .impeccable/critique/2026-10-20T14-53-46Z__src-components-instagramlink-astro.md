---
target: Instagram link placements (post-fix)
total_score: 22
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\InstagramLink.astro"
target_fingerprint: "sha256:71175c18f12e3f293f022001a06a7096081b0fc71fe5cb0147a8f94e27831344"
target_path: "C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\InstagramLink.astro"
timestamp: 2026-10-20T14-53-46Z
slug: src-components-instagramlink-astro
---
# Critique (post-fix re-score): Instagram link placements
⚠️ DEGRADED: single-context (post-fix verification re-score of the 2026-10-20T14-33-59Z dual-agent critique, not a fresh dual-agent run)

Scope: src/components/InstagramLink.astro used in the "Quem sou eu" caption (src/pages/index.astro), the blog author box (src/components/blog/AuthorBio.astro), and the footer (src/components/Footer.astro). Shipped in 8e6cfb9.

## Heuristics (scoped) — 22/28 (79%, Good); n/a: 7, 9, 10
| # | Heuristic | Before | After | Note |
|---|---|---|---|---|
| 1 | Visibility of status | 3 | 3 | Footer hover still hue-only (9.74 to 9.68:1); light-surface hovers fine |
| 2 | Match real world | 3 | 3 | Sobre still relies on the glyph visually; screen readers now hear "Instagram" |
| 3 | User control | 3 | 3 | New tab keeps the site open |
| 4 | Consistency | 2 | 3 | Weights unified on light surfaces (500), one screen-reader pattern everywhere, footer WhatsApp now announces new tab too |
| 5 | Error prevention | 3 | 3 | New tab announced to screen readers; no visual external-link cue |
| 6 | Recognition | 3 | 3 | Unchanged |
| 8 | Minimalist | 3 | 4 | Sobre now has a clear primary (WhatsApp text link) and a quiet secondary (Instagram); nothing competes with the hero CTA |

## Detector
CLI on the 4 files: 0 findings (exit 0), before and after the fixes.

## Resolved issues (verified in the browser, keyboard Tab focus)
- [P1, fixed] Focus ring: light surfaces now ring #7D5F23 with 2px white offset (5.68:1 on slate-50, 5.94:1 on white); footer keeps #B8924A on navy (5.0:1). `outline-hidden` keeps a transparent outline that forced-colors renders.
- [P2, fixed] Tap areas: invisible ::after expansion gives 210x48 (Sobre), 210x48 (author box), 233x40 (footer). No overlap with the author box WhatsApp button (24px clear).
- [P2, fixed] Sobre hierarchy: added "Prefere conversar? Fale comigo pelo WhatsApp" (gold underlined text link, nowrap, tracked as lead_whatsapp placement=sobre).
- [P3, fixed] Screen reader: aria-label removed; reads "Instagram @advogada.palomasantos (abre em nova aba)" in Sobre, "@advogada.palomasantos (abre em nova aba)" where a visible label precedes it. Footer WhatsApp gets aria-describedby "Abre em nova aba" (aria-label unchanged to keep analytics event_label stable).
- [P3, fixed] Weight drift: author box now font-medium (500), matching Sobre.

## Remaining (minor)
- [P3] Footer hover is a hue-only change at equal luminance (sitewide pattern on all footer links).
- [P3] Sobre placement has no visible "Instagram" word; glyph only.
- [P3] Handle is 14px (below the 15px body floor), acceptable as meta text matching the OAB line.

## Personas
Jordan: Sobre now offers a clear "talk to me" path next to the glyph. Sam: focus visible on every placement, single announcement. Casey: 40-48px tap targets.
