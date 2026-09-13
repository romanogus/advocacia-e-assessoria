---
target: src/pages/index.astro
total_score: 17
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\pages\\index.astro"
target_fingerprint: "sha256:48a0b8bef5fd012b4cb2f2de9418a3259e79791babb83769eb2aad893aaddd57"
target_path: "C:\\Users\\Gustavo\\projects\\advocacia-e-assessoria\\src\\pages\\index.astro"
timestamp: 2026-09-11T23-23-36Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: 12df8294-681b-40f7-adde-4e3051799c60 · B: e914de80-fc7e-45f6-9130-b7a1cd06b279)

#### Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 2 | Navbar logo invisible on load; practice cards launch external WhatsApp with no indicator; footer contact relies on fragile client JS |
| 2 | Match Between System and Real World | 3 | Layperson terminology is strong, but generic masculine CTA used and official OAB credentials are omitted |
| 3 | User Control and Freedom | 2 | Wrapping entire 460px card in <a> traps text selection and causes accidental WhatsApp triggers on mobile scroll |
| 4 | Consistency and Standards | 2 | Color token drift on WhatsApp CTA/FAB; inline Lora styles mixed with Merriweather; hero border uses generic amber |
| 5 | Error Prevention | 2 | Whole-card click target causes frequent mis-taps; client JS obfuscation leaves links empty if script fails |
| 6 | Recognition Rather Than Recall | 3 | Excellent 3x3 practice breakdown, but lacks visual diagram of the 100% digital triage/consultation process |
| 7 | Flexibility and Efficiency | n/a | Persuade / Landing Page mode: power-user workflows not applicable |
| 8 | Aesthetic and Minimalist Design | 3 | Dignified palette and icons, but desktop FAB is oversized (80px) with constant 2s pulse lacking reduced-motion support |
| 9 | Error Recovery | n/a | Persuade / Landing Page mode: no form inputs or editable transactional state |
| 10 | Help and Documentation | n/a | Persuade / Landing Page mode: static landing surface |
| **Total** | | **17 / 28** | **Acceptable (60.7%)** |

#### Design Specificity Verdict
The visual foundation ('The Dignified Advocate') using Chamber Navy (#1D2A3D), Warm Parchment (#D9D8D3), and Old Gold (#B8924A) accents successfully avoids generic SaaS blues and legal stock clichés (gavels, marble columns). However, it suffers from an 'Anonymous Agency' deficit: zero named attorneys, zero photos, and zero OAB registration numbers appear on the page, conflicting with Brazilian legal credibility norms.

Deterministic scan found 2 slop warnings:
1. side-tab: 4px gold accent border on hero subtitle (src/pages/index.astro:112)
2. overused-font: Lato loaded with three font families in total (src/layouts/Layout.astro:18)

Visual overlays were skipped because no dev server was active.

#### Priority Issues
- [P1] The Faceless Firm Vulnerability: Missing attorney identification & OAB credentials
- [P1] Card-as-Link Usability Trap: Entire 460px card acts as external WhatsApp link
- [P1] Severe WCAG Contrast Failure: White text on #25D366 yields 1.98:1 contrast
- [P2] Inverted Navbar State & AI Side-Tab Border: Logo hidden on load, heavy border-r-4
- [P2] Fragile Client-Side DOM Obfuscation: Empty contact links if JS fails

#### Persona Red Flags
- Carlos (Anxious Dismissed Worker): Unreadable green CTA button outdoors; accidental WhatsApp trigger during mobile scroll.
- Dona Maria (Elderly Pensioner): Disoriented by abrupt external app switch on tapping card; after-hours confusion.
- Marcelo (Small Business Owner): Distracted by 80px pulsing desktop FAB; absence of partner bios and bar credentials.
