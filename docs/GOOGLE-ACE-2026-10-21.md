# Google ACE practice expansion - 21 October 2026

Adds 100 original Indonesian scenario questions to the existing 100-question
bank. These are practice items authored for the application, not reproduced
certification questions. Each new item has an answer, a specific explanation for
every option, an objective mapping, and an official Google Cloud reference.
There are 92 single-answer and eight multiple-answer questions; multiple-answer
prompts state the number of answers to select. Answer positions are rotated.

The standard exam guide linked from Google's certification page was reviewed:
https://services.google.com/fh/files/misc/associate_cloud_engineer_exam_guide_english.pdf

The four current domains are represented by 20/30/30/20 new questions. The
application's 50-question, 120-minute simulation uses quotas of 10/15/15/10.
Google describes the standard exam as 50-60 questions; this application uses a
50-question practice preset and does not predict certification performance.

The source of the new questions is `scripts/curated/gcp-ace-scenarios.mjs`.
Stable IDs run from `ace-scenario-id-20261021-001` to `100`. The original bank
is preserved in `scripts/curated/gcp-ace-legacy-id.json`. The bank build now
reproduces both sources, publishes the new approved questions through the
release API, and includes them in the optional backend seed.

Old planning and deployment domain labels map to the new combined domain.
Existing question IDs, prompts, options, answers, and explanations are retained.
Saved filters and repeated configurations accept the old labels; active session
snapshots and historical answers are not rewritten. No database migration is
required. Question language remains independent of interface language.

Validation: production build, full ESLint, and all 53 Node tests passed.
The ACE browser scenario, existing usability browser checks, and question-bank
catalog browser checks passed. The ACE scenario verifies 200 available items,
new-question filtering and explanations, old preference compatibility, domain
quotas, two non-overlapping 50-question simulations, answer/deadline preservation
when changing interface language, and a narrow-screen layout without overflow.
All 85 distinct question reference URLs returned HTTP 200 during source review.
Artifacts are saved under the ignored `artifacts/ace-20261021/` directory.

The entire browser suite was not rerun for this content release. The previously
documented result-page height failure remains recorded in
`QUESTION-BANKS-2026-10-21.md`; this release does not change that layout or relax
its assertion. Deployment and the production guest smoke test are verified
separately after pushing the release commit.
