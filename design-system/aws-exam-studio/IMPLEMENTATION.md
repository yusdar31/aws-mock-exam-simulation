# AWS Exam Studio design decisions

Source: UI UX Pro Max, installed from nextlevelbuilder/ui-ux-pro-max-skill on 2026-10-18. The generated MASTER.md records the verified `professional certification dashboard` query (minimalism, density 6, variance 3).

The first `certification learning dashboard` query returned children's typography. It was rejected for this adult professional certification product; no output from that query was persisted.

## Application decisions

### Current user direction (supersedes the visual choices below)

The user requested a more minimal interface, less generated/template-like decoration, and a larger question navigator. The current `src/studio.css` uses neutral warm-white / charcoal surfaces, small corner radii, no card shadows, plain text navigation, and thin section dividers. Removed redundant overview/nav icons, decorative setup numbering and the dark marketing panel. Retained semantic success/error/flag colors and keyboard focus.

Exam layout now fills the viewport with 24px outer padding/gap and a 320px navigator. The former 1280px centered scroll container was removed after the user showed excessive side gutters at 1890px. The reading column no longer has a second 1000px cap. Number buttons are square (about 48px desktop, at least 44px in responsive grids). The navigator collapses below 901px and closes back to the question heading when a question is selected, including selecting the current question again. A small native progress indicator exposes completion without inventing a readiness metric.

The targeted `minimal content first` style search returned Minimalism & Swiss Style. React-specific sidebar/conditional queries returned no verified matches; implementation uses the existing React state and standard CSS grid rather than relying on an unrelated stack result. The generated MASTER.md remains the original recommendation record; this user-directed implementation takes precedence.

### Earlier visual direction (replaced by the current user direction)

- Apply the professional navy / blue palette through semantic tokens in `src/studio.css`. Retain amber for the introductory guest action and flagged-question meaning.
- Use Inter for headings and body, selected from the explicit `technical professional sans` typography search. Keep existing JetBrains Mono for timers and numeric setup markers. This deliberately overrides the generated Fira pairing for familiar continuous exam reading.
- Keep existing React controls and native form semantics. Apply consistent decorative SVG strokes, 44px action targets, keyboard outlines, reduced-motion behavior, theme pairs, and a 4/8px spacing rhythm.
- Adapt the hero / features / CTA suggestion to the existing auth screen. Do not add unverified testimonials, course counts, readiness scores, or decorative charts.
- Lobby overview uses actual completed attempts, unique question IDs and due questions filtered by current certification and question language. Do not label these as official certification readiness.
- Selected certification has both a check mark and `aria-pressed`. Setup markers are decorative; heading hierarchy stays intact.
- Preserve session, localization, bank loading, bookmark, backup, export and submission behavior. Test these after style changes.

## Layout

- Auth: navy introductory panel plus lightweight login form; single column on phones.
- Lobby: overview, onboarding, numbered setup cards, session summary. Primary launch stays fixed on viewports at or below 900px, with reserved scroll space.
- Exam: calm reading surface, distinct choice boundaries and semantic feedback, existing scroll region between header/footer.
- History / result / study: shared cards, type scale, controls, numeric alignment and theme tokens.

## Validation

See `docs/UI-UX-PRO-MAX-2026-10-18.md` for final checks and deployment evidence.
