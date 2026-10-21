# Question bank catalog

Follow the current Exam Studio surfaces and semantic tokens in `src/studio.css`.
This page extends the existing minimal interface; do not add new fonts, gradients,
decorative illustrations, metric dashboards, or a separate color palette.

- Entry points: main navigation “Bank soal” and guest entry “Jelajahi bank soal”.
- Routes: `#banks` and `#banks/<certification>-<question-language>`.
- One bank per supported certification/language combination, sourced from the existing catalog.
- Use visible search and provider/language filters above a single-column list.
- Show actual available question/domain counts and explain incomplete simulation coverage.
- Detail view lists domain counts and searchable questions with answers collapsed initially.
- Load 20 questions at a time. Show explicit loading, empty, unavailable and cached-data states.
- Use the same bank resolution as the lobby so withdrawals and updated versions agree.
- Preserve unfinished sessions; selecting a bank opens setup rather than starting/replacing an exam.
- Question language and interface language remain independent.
- Keep controls at least 44px tall, retain visible focus, and stack filters/actions on small screens.
- Reuse light/dark tokens; support reduced motion and 200% text without horizontal scrolling.
