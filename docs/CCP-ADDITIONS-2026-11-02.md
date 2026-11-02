# CCP bilingual additions — 2 November 2026

Added 100 original foundational questions, each with an English and Indonesian version: 200 published language variants. These are independent practice questions, not official or recalled examination items.

## Coverage and content

| Domain | New question pairs |
| --- | ---: |
| Cloud Concepts | 24 |
| Security & Compliance | 30 |
| Technology & Services | 34 |
| Billing & Pricing | 12 |
| **Total** | **100** |

The distribution follows the [CLF-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html). Questions ask about concepts, responsibilities, appropriate services, or purchasing capabilities; they do not require CLI syntax, implementation instructions, or deep troubleshooting.

- 93 single-answer questions and seven questions requiring two answers in each language.
- Four options for single-answer questions and five for multiple-answer questions.
- Shared topic identifiers, corresponding option order, and identical answer labels across translations.
- Indonesian prompts, options, and explanations use Indonesian prose; AWS product names and technical terms retain their established names.
- Every option has a distinct explanation. Correct-answer positions rotate deterministically.
- Stable new IDs: `ccp-scenario-en-20261102-001` through `100`, and their `-id-` counterparts. New content starts at version 1.

Content lives in `scripts/curated/ccp-20261102.mjs` and is appended by `scripts/build-banks.mjs` after existing editorial transformations. This keeps every earlier question unchanged, including its version and answers. Hash checks cover all 395 previous Indonesian entries and 138 previous English entries.

Ten initial drafts were replaced after comparison with the existing bank to test different requirements: third-party software licensing, Lambda dependency scanning, EventBridge, EMR, EBS snapshots, FSx for Windows, DMS, Client VPN, Capacity Reservations, and Marketplace. Other core concepts intentionally recur in foundational practice; text uniqueness alone is not treated as proof of different concepts.

## Resulting banks

- English: 238 reviewed questions.
- Indonesian: 238 reviewed questions and 257 archived questions, totaling 495 catalog entries.
- SAA and ACE questions are unchanged.

## Validation

New tests check the exact 100-pair count, translation linkage, answer keys, domain distribution, schema, distinct option explanations, previous-bank preservation, and complete retrieval through the paginated release API. Browser coverage checks all 100 additions in each catalog, multiple-answer explanations, mobile overflow, and a 65-question simulation in each question language. Every reference URL, including concept references used for alternatives, was checked: 102 URLs returned HTTP 200.

Checks: `npm.cmd run build`, `npm.cmd test`, `node tests/ccp-additions-browser.mjs`, and `node tests/usability-browser.mjs`. The dedicated additions browser test also supports `EXAM_TEST_URL` for production verification.
