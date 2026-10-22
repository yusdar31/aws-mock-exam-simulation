# ACE style calibration against GEAR examples - 22 October 2026

The user supplied ten GEAR practice examples as an editorial benchmark. The
examples emphasize a concrete situation, relevant constraints, and a choice
between technical approaches. The revision applies that pattern to 55 existing
original questions; it does not publish the supplied example text or assign new
answer keys to the examples.

Changes focus on distractors and explanations:

- Compare mechanisms from the relevant area: HPA/VPA/node scaling, tracing/CPU
  profiling/aggregate metrics/logs, managed tooling/manual operations, and
  group/individual/broad/custom IAM grants.
- Make incorrect alternatives fail a stated constraint, such as permissions,
  scope, persistence, operational overhead, or recovery requirements.
- Avoid unrelated product choices such as DNS as a notebook execution service.
- For the read-only SQL exercise, use four SELECT alternatives that differ in
  filter or result limits, rather than obviously destructive statements.
- Keep explanatory text specific to the choice and avoid treating longer answer
  text as an implicit hint. Among the 55 revised questions, the correct choice
  is uniquely longest in 11 cases, compared with 38 before this revision. This
  measure is an editorial check, not a difficulty or exam-equivalence score.

The changes are in `scripts/curated/gcp-ace-gear-calibration.mjs`, applied by the
guide scenario generator before answer rotation. Keys identify stable suffixes
of `ace-scenario-id-20261022-NNN`; new source rows must continue to be appended
without renumbering existing rows. Correct answer positions, prompts, objective
mappings, and question counts are retained. The 55 changed versions increment to
2 so new packets and caches use the new option text. Existing exam/history
snapshots retain their original options and grading keys.

The reviewed pool remains 171 questions, with 100 archive items available
separately. The four-domain 10/15/15/10 simulation quotas remain unchanged.
The original documentation references remain attached to the authored items.
GEAR is an editorial reference, not an assertion that these authored items are
official Google questions or predict certification performance.

Validation: production build and all 59 Node tests passed. Checks cover release
versions, distinct rationales, preserved schema and domain quotas, representative
operational answer keys, SQL selection constraints, and the new Trace/Profiler
comparison in the browser. The guest browser flow is checked locally and after
deployment, including repeated simulations and state/deadline preservation.
Audit artifacts are under ignored `artifacts/ace-gear-20261022/`.
