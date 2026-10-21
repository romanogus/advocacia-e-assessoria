---
target: cookie banner, legal pages and footer legal links
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\CookieConsent.astro"
target_fingerprint: "sha256:419f5992d0eecb97966d46346cf35466761d82fe9d156e411c0b1a67aa842233"
target_path: "C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\components\\CookieConsent.astro"
timestamp: 2026-10-21T11-38-16Z
slug: src-components-cookieconsent-astro
---
Method: dual-agent (A: design review · B: detector + browser)

Scope: cookie consent banner (src/components/CookieConsent.astro), legal pages (src/layouts/LegalPage.astro, src/pages/politica-de-privacidade.astro, src/pages/termos-de-uso.astro), footer legal links (src/components/Footer.astro).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Banner vanishes after a choice with no confirmation or live-region announcement. |
| 2 | Match System / Real World | 3 | Banner Portuguese is plain; policy body carries "art. 7º, V" citations inline. |
| 3 | User Control and Freedom | 2 | No close, no Esc; reopening from footer forces a choice to dismiss. |
| 4 | Consistency and Standards | 3 | Expanded state has two filled-navy primaries (Aceitar todos + Salvar preferências). |
| 5 | Error Prevention | 3 | Unchecked opt-ins; Aceitar/Recusar 8px apart on mobile invite mis-taps. |
| 6 | Recognition Rather Than Recall | 2 | Policy references "seção 7" as plain text across ~12 phone screens. |
| 7 | Flexibility and Efficiency | 1 | No TOC/anchors; banner is tab stop 26 of 29. |
| 8 | Aesthetic and Minimalist Design | 3 | Banner restrained; cookie table crushed on mobile. |
| 9 | Error Recovery | 2 | Blocked localStorage makes the banner reappear every page; choice never sticks. |
| 10 | Help and Documentation | 3 | Banner links the policy; policy has clear tool table. |
| **Total** | | **24/40** | **Acceptable** |

## Design Specificity Verdict

LLM: banner is on-palette but structurally a generic three-button cookie card that speaks about the site's measurement needs instead of the visitor's real worry (confidentiality). Legal pages carry practice-specific content (CNIS, health reports for BPC/LOAS, children's data, sigilo) in default `prose` with no wayfinding.

Deterministic scan: CLI `detect` = 0 findings on all five files. Browser overlay (4 views): gpt-thin-border-wide-shadow on banner card CookieConsent.astro:13 (real); cramped-padding on table wrapper politica-de-privacidade.astro:128 (false positive, cells padded 12/16px); line-length on Footer.astro:69 copyright (borderline, single 12px legal line, disappears on mobile); undersized-ui-text Navbar.astro:39 (real, out of scope). Detector missed the mobile overlap, focus handling and wayfinding issues.

## Overall Impression

Consent mechanics are honest and correct; the UX problem is placement and timing. On mobile an anxious ad visitor's first sight is a card about "anúncios" covering the WhatsApp CTA they came for. Biggest opportunity: make the banner smaller and kinder.

## What's Working

1. Fair consent: denied by default, set before GTM, unchecked opt-ins, Recusar as a real one-tap button, each purpose named in plain words.
2. Practice-specific policy content: sensitive health data, children's data (art. 14), retention, ANPD route, five-row cookie table.
3. Re-entry: footer and inline §7 "Preferências de cookies" reopen with saved state; desktop bottom-left card avoids both WhatsApp paths.

## Priority Issues

- [P0] Mobile banner hides both WhatsApp paths on first screen. 375x812: card y 533–800 covers hero CTA (534–594) and FAB (736–792); expanded 53% of viewport. Fix: compact bar under md (<~150px, one sentence, Aceitar/Recusar side by side, Personalizar as text link); lift FAB while banner is open. Command: /impeccable adapt.
- [P1] Keyboard/screen-reader flow broken: banner last in DOM (tab stop 26/29), focus left on hidden button after a choice, no Esc. Fix: render first in body without stealing focus; restore focus to trigger or main; Esc closes when reopened; polite live announcement. Command: /impeccable harden.
- [P1] Targets/type below project rules: banner buttons 36–42px (DESIGN.md requires 48), banner text 14px (15px floor), footer legal links 12px text / 16px tall. Fix: min-h-12, 15px text, footer min-h-11 text-sm. Command: /impeccable adapt.
- [P2] Legal pages lack wayfinding: 12 h2 without ids, no TOC, no summary, "seção N" not linked. Fix: "Em resumo" box, collapsible "Nesta página" TOC, anchored headings, linked cross-references. Command: /impeccable layout.
- [P2] Cookie table breaks on mobile: ~100px columns, clipped text, unfocusable scroll region, FAB covers last column, row names are td. Fix: stacked cards below sm, th scope=row. Command: /impeccable adapt.

## Persona Red Flags

- Jordan: "Personalizar" unclear; "Anúncios" reads as "this site shows ads"; taps Aceitar todos to clear the screen.
- Casey: green CTA and FAB hidden on arrival; 41px Aceitar/Recusar 8px apart near bottom edge.
- Sam: banner read last; focus dropped; 16px-tall footer links; table not keyboard-scrollable; no TOC for 12 sections.
- Dona Cida (63, INSS denial, older Android at 130% font, from an ad): card grows to ~350px (~560px expanded), buttons may land in a scrolling area; "Google Analytics" meaningless; "Anúncios"/"medir" feels like surveillance; sigilo reassurance buried in §4.

## Minor Observations

- Banner card thin border + wide shadow; swap for Card Elevation shadow + 1px Old Gold top rule (no gold in banner today).
- Heading "Sua privacidade" generic.
- On the policy page, the banner's policy link is self-referential.
- Termos "Ao navegar pelo site, você declara estar de acordo" is browse-wrap; soften to "Ao usar este site, valem as condições abaixo."
- Policy and Termos end in dead ends with no path back to WhatsApp.

## Questions to Consider

- Consent Mode already defaults to denied; why must the banner appear before the visitor has seen Paloma? It could wait until the first scroll.
- Is the separate "Anúncios" toggle worth a second technical decision for a 63-year-old, or would one "Medição do site" choice do?
- Why is the calmest fact on the site (sigilo from the first message) not one line in the banner?
