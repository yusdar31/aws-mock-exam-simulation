# ACE alignment with the supplied guide - 22 October 2026

The supplied five-page standard Associate Cloud Engineer guide is the content
reference for this release. Its outline matches the standard guide linked by
Google's certification page on the review date:
https://services.google.com/fh/files/misc/associate_cloud_engineer_exam_guide_english.pdf

Adds 71 original Indonesian scenarios to address gaps, bringing the reviewed
pool to 171 questions. The 100 earlier archived items remain available as
archives, giving 271 total items. They are not represented as newly reviewed.
Every new item has a key, a specific explanation for every option, an objective,
a topic, a review date and an official Google Cloud documentation reference.
The additions are authored practice questions, not copied certification items.

The 50-question simulation continues to sample 10/15/15/10 questions across the
four domains (20%/30%/30%/20%) for 120 minutes. Pool size per domain differs
because this expansion targets gaps; pool counts do not change sampling weights.
Practice and newly generated classroom packets now default to reviewed content,
including ACE. Explicitly saved practice content choices are preserved.

| Objective | Reviewed questions | Focus of the alignment |
| --- | ---: | --- |
| 1.1 | 25 | Cloud Identity groups/automation, standalone organizations, locations, initial networking, Asset Inventory and AI context |
| 1.2 | 8 | Billing access, account/project relationships, currency, budgets and exports |
| 2.1 | 24 | VM Manager, custom machines, Hyperdisk, regional disks, kubectl, private GKE, GPUs/TPUs, agent runtime, autoscaled MIGs |
| 2.2 | 17 | Spanner, Bigtable, AlloyDB, managed Kafka, Memorystore, NetApp Volumes, Managed Lustre, redundancy and storage-class cost |
| 2.3 | 8 | Secure tags/Cloud NGFW, hybrid VPN, service tiers, VPCs and load balancing |
| 2.4 | 7 | Terraform, Fabric FAST, Config Connector, Helm, AI-assisted review and Application Design Center |
| 3.1 | 21 | IAP/SSH, snapshots, StatefulSets, VPA, Autopilot requests, node pools, accelerators, agent deployment, Workbench and Workstations |
| 3.2 | 13 | Database Center, queries, job inspection, backup/restore, lifecycle and CMEK |
| 3.3 | 7 | Static IPs, routes, subnet expansion, NAT, DNS and firewall operations |
| 3.4 | 17 | Prometheus, log-based metrics, firewall logging, log analytics, Trace/Profiler, Query Insights, Active Assist and Cloud Hub |
| 4.1 | 13 | Policies, role inheritance, predefined/custom roles and least privilege |
| 4.2 | 11 | Runtime identities, Google-managed service agents, short-lived credentials, impersonation and federation |

`scripts/curated/gcp-ace-coverage.mjs` maps all 94 numbered considerations in the
supplied outline to representative question IDs. These mappings support
traceability: they do not claim exhaustive treatment of every named product,
command, configuration or possible exam scenario. Cross-domain skills can map
to a question whose primary objective differs from the consideration.

The existing Terraform-assistance question ending in `20261021-079` was revised
to Gemini-assisted Monitoring investigation so its content fits objective 3.4;
its version is incremented. New questions are in
`scripts/curated/gcp-ace-guide.mjs`, with stable IDs
`ace-scenario-id-20261022-001` through `071`. The original source generator
appends these without renumbering existing IDs. Question snapshots in active
exams and completed history are not rewritten. No database migration is needed.

References include the GoogleCloudPlatform Fabric FAST repository for additional
implementation context:
https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/blob/master/fast/README.md

Validation includes bank/schema integrity, unique IDs/prompts/options, distinct
option explanations, all 12 objective mappings, all 94 consideration mappings,
the release API's pagination of 171 items, preservation of archived content,
50-question quotas and two non-overlapping packets. The full 58-test Node suite
passed. Full ESLint, the production build, the ACE guest browser flow and the
existing usability browser checks passed locally;
browser checks cover both new and earlier scenarios, rationale display,
language-independent question state, original deadline preservation and mobile
overflow. All 155 distinct reviewed-question reference URLs returned HTTP 200.
Source-audit artifacts are in ignored `artifacts/ace-guide-20261022/`.

The pre-existing result-page height issue documented in the earlier catalog
release is outside this content change and its assertion is not altered.
Publishing and the production guest smoke test are verified after the release
commit rather than inferred from local tests.
