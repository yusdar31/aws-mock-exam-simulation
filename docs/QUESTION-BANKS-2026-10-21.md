# Question bank catalog

Users can browse banks separately from exam setup at `#banks`, including a guest
entry on the sign-in page. Available banks follow the existing certification and
question-language catalog; unsupported combinations are not advertised.

The catalog shows available question counts, content domains, and questions with
references and option explanations. Search supports certification names, codes
and domains, with provider and question-language filters.

Each `#banks/<examType>-<lang>` detail link survives reload and sign-in/guest entry.
Details include domain counts, question text/ID search, domain filtering, and
progressive loading in groups of 20. Answers and explanations are collapsed until
the user opens them. Choosing practice or simulation returns to the existing
setup screen with the bank and mode selected. Existing paused sessions remain
available; a new attempt still uses the normal replacement confirmation.

The lobby and catalog share `loadAvailableBank`: merge published versions with
built-ins, apply withdrawn IDs, deduplicate prompts, then fall back to the saved
bank or built-ins with a visible notice when the question service is unavailable.
Simulation is offered only when the existing blueprint quotas are satisfied.

Interface copy is bilingual, independent of question language. Layouts use the
existing minimal theme, support keyboard controls, and work on narrow screens.
No database migration, account creation, or schema changes are required.

Validation includes production build, ESLint, the Node test suite, and the browser
suite. `tests/question-banks-browser.mjs` covers published edits/withdrawals,
catalog filters, question search, pagination, answers, language independence,
deep links, practice/simulation setup, paused-session preservation, offline cache,
light/dark accessibility checks, responsive widths and 200% text. Browser tests
use guests and local fixtures; artifacts are excluded from Git.

Validation outcome: build and ESLint passed; 49 Node tests passed. The new catalog
browser test and the existing browser, admin, bank, language, usability, studio,
classroom and classroom-upgrade scripts passed. The final existing
`review-quality-browser.mjs` check still fails its `<4000px` total mobile result
height assertion (4395–4424px in the changed build). An isolated build of the
unchanged starting commit `31cf9f6` reproduces that assertion failure at 4376px.
The assertion has not been relaxed or removed. This existing result-page issue
is separate from the catalog feature; remaining checks after that assertion are
not reported as passed.
