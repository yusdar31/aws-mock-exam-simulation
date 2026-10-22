# Learner feedback release - 22 October 2026

Addresses five findings from a real classroom session:

- Private question flags appear in the navigator and submission review. Classroom
  v3 stores flags on the participant record. Older servers use browser storage
  until the migration is installed.
- Submission is separated from Previous/Next. Review & submit opens a modal with
  incomplete/flagged counts, question navigation, Continue answering as the
  initial focus, and a separate irreversible confirmation. Escape returns to
  answering. The existing server deadline and submission immutability remain.
- Indonesian answer prose is localized during bank generation. Product/service
  names and code identifiers remain recognizable. Published Indonesian versions
  are incremented so existing remote/cache versions cannot mask the corrections.
- 35 reviewed Indonesian CCP items are replaced with foundational service and
  concept questions, with specific rationales and official references. Other
  reviewed CCP prompts use their concise source wording instead of inflated
  scenarios. Of 138 reviewed questions, median prompt length changes from 323.5
  to 97.5 characters, maximum 278; length alone is not the criterion for scope.
  Existing archive questions and English material are not claimed as re-reviewed.
- Optional account login/registration links classroom membership to auth.uid().
  A participant can also link an existing guest membership. Account history
  lists only that user's sessions. Opening a session from another browser
  rotates its access token and revision, preserving answers, flags and the
  original deadline while revoking the earlier browser's editing credential.
  Completed, account-linked reports remain accessible after the ordinary guest
  access expiry, while answer keys still require the host to release review.

Scope reference: the official CLF-C02 guide describes foundational knowledge and
places architecture design, troubleshooting and implementation outside scope:
https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/

For saved local templates, loading a template refreshes known question IDs to
newer built-in versions before the host previews or creates a new packet.
Already-running classrooms retain their original packet and answer keys; old
attempts retain their saved question snapshots.

## Activation

Run `supabase/migrations/20261022_classroom_learners.sql` after the existing
20261019 upgrade. It is transactional and repeatable. Direct table access stays
revoked for anon/authenticated roles, and account ownership comes from auth.uid(),
never a user ID supplied by the client. No account token is saved in a history
table. Do not report the feature as active until `classroom_rpc('health')`
returns version 3. The frontend remains compatible with version 2 during rollout.
Reload the classroom page after activating the migration.

## Validation

All 57 Node tests passed, including account isolation, denied anonymous history,
cross-browser identity/answer/flag preservation, stale credential rejection,
guest linking, repeatable migrations, and access to released account reports
after guest expiry. The production build and full ESLint passed. The
existing classroom and classroom-upgrade browser checks passed after updating
their submission flow. A new browser check covers authenticated joining,
flagging, canceled confirmation, a fresh browser context, mobile layout, language
switching and host-released review. All 24 distinct references used in the 35
replacement items returned HTTP 200.

Browser fixtures use local PostgreSQL through PGlite and synthetic authentication;
they do not create real accounts or real learners' sessions. Artifacts and source
audit reports are under ignored `artifacts/classroom-learners-20261022/`.
The unrelated result-page height assertion documented in the earlier catalog
release is not modified. Deployment verification and backend migration activation
are separate checks.
