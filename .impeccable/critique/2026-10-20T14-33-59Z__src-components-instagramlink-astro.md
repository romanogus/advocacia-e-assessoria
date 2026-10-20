---
target: Instagram link placements
total_score: 20
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\InstagramLink.astro"
target_fingerprint: "sha256:95fdaccccd856f0b66e63fa476b54ff526c6e58cff5bdda01d5e1f61afd6d768"
target_path: "C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\InstagramLink.astro"
timestamp: 2026-10-20T14-33-59Z
slug: src-components-instagramlink-astro
---
# Critique: Instagram link placements (InstagramLink.astro in Sobre, AuthorBio, Footer)
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics (scoped) — 20/28 (71%, Good); n/a: 7, 9, 10
1 Visibility 3 · 2 Real world 3 · 3 Control 3 · 4 Consistency 2 · 5 Error prevention 3 · 6 Recognition 3 · 8 Minimalist 3

## Detector
CLI: 0 findings across the 4 files. Browser overlay: 0 on Instagram links; pre-existing out-of-scope: undersized-ui-text (10px navbar subtitle), nested-cards x2 (pill inside blog CTA card, likely false positive).

## Priority issues
- [P1] Focus ring #B8924A fails 3:1 on light surfaces (2.77 sobre / 2.90 author box) and `outline-none` leaves nothing in forced-colors. Fix: outline-hidden + tone prop (light ring #7D5F23 + offset; dark ring #B8924A).
- [P2] Hit areas 20/20/24px vs 48px DESIGN.md target. Fix: invisible ::after hit-area expansion.
- [P2] Sobre: Instagram is the only interactive element in #sobre at peak trust. Fix: quiet WhatsApp text link in bio column, or monitor placement analytics.
- [P3] Screen reader announces "Instagram" twice where a visible label exists; new-tab suffix inconsistent with footer WhatsApp. Fix: drop aria-label, sr-only suffix.
- [P3] Weight drift 500/600/400 across placements. Fix: author box font-medium.

## Personas
Jordan: lone glyph in Sobre may read as contact. Sam: ring contrast, forced-colors, double "Instagram". Casey: 20px tap targets.
