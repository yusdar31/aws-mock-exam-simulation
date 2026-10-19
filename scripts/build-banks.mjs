import fs from "node:fs";
import ts from "typescript";
import cloud from "./curated/cloud.mjs";
import security from "./curated/security.mjs";
import resilience from "./curated/resilience.mjs";
import performance from "./curated/performance.mjs";
import cost from "./curated/cost.mjs";
import multiple from "./curated/multiple.mjs";
import { expand, optionConcept } from "./curated/expansion.mjs";
import { deepen } from './curated/depth.mjs';
async function legacy(path, name) {
  const source = fs.readFileSync(path, "utf8"),
    output = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext },
    }).outputText;
  return (
    await import(
      "data:text/javascript;base64," + Buffer.from(output).toString("base64")
    )
  )[name];
}
const refs = {
  shared: "https://aws.amazon.com/compliance/shared-responsibility-model/",
  dlm: "https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-lifecycle.html",
  cloud:
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  iam: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
  secrets:
    "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
  kms: "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
  s3: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  rds: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
  vpc: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
  sqs: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  ddb: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
  cf: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  lambda: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
  ec2: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html",
  waf: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html",
  ssm: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
  trail:
    "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  cognito:
    "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
  efs: "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
  r53: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-failover.html",
  proxy:
    "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
  dax: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
  athena: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
  replica:
    "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
  kinesis: "https://docs.aws.amazon.com/streams/latest/dev/introduction.html",
  alb: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
  nlb: "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
  placement:
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
  cache: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html",
  ebs: "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html",
  search:
    "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
  accelerator:
    "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
  savings:
    "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
  ce: "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
  budgets:
    "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
};
const legacyCcp = await legacy(
    "src/data/ccpQuestionBank.ts",
    "ccpQuestionBank",
  ),
  legacySaa = await legacy("src/data/questionBank.ts", "questionBank");
const groups = [
  ["ccp", "Cloud Concepts", cloud],
  ["ccp", "Security & Compliance", security],
  [
    "ccp",
    "Technology & Services",
    [...resilience.slice(0, 11), ...performance.slice(0, 11)],
  ],
  [
    "ccp",
    "Billing & Pricing",
    [1, 2, 3, 4, 6, 7, 10, 12].map((index) => cost[index]),
  ],
  ["saa", "Secure Architectures", security],
  ["saa", "Resilient Architectures", resilience],
  ["saa", "High-Performing Architectures", performance],
  ["saa", "Cost-Optimized Architectures", cost],
];
for (const group of groups) {
  const [, domain] = group;
  const extra =
    domain === "Cloud Concepts"
      ? expand("cloud")
      : /Security|Secure/.test(domain)
        ? expand("security")
        : domain === "Technology & Services"
          ? [
              ...expand("resilience").slice(0, 12),
              ...expand("performance").slice(0, 11),
            ]
          : /Billing/.test(domain)
            ? expand("cost").slice(0, 9)
            : /Resilient/.test(domain)
              ? expand("resilience")
              : /High-Performing/.test(domain)
                ? expand("performance")
                : expand("cost");
  // Keep existing curated IDs stable: append new rows after all existing rows below.
  group.push(extra);
}
const rows = groups.flatMap(([type, domain, items]) =>
  items.map((row) => ({ type, domain, row })),
);
rows.push(...multiple.map(([type, domain, row]) => ({ type, domain, row })));
rows.push(
  ...groups.flatMap(([type, domain, , extra]) =>
    extra.map((row) => ({ type, domain, row })),
  ),
);
const banks = {};
for (const type of ["ccp", "saa"])
  for (const lang of ["id", "en"]) {
    const old = (type === "ccp" ? legacyCcp : legacySaa)
      .filter((q) => lang === "id" && q.lang === "id")
      .map((q) => ({
        ...q,
        examType: type,
        lang,
        version: 1,
        sourceRef: "legacy-practice-bank",
      }));
    const fresh = rows
      .filter((q) => q.type === type)
      .map(({ domain, row }, index) => {
        const [promptId, promptEn, choices, whyId, whyEn, ref, metadata] = row,
          offset = index % choices.length,
          labels = ["A", "B", "C", "D", "E"].slice(0, choices.length);
        const options = labels.map((id, i) => ({
            id,
            text: choices[(i + offset) % choices.length],
          })),
          answers = (metadata?.answers || [0]).map(
            (answer) =>
              labels[(choices.length - offset + answer) % choices.length],
          ),
          explanation = lang === "id" ? whyId : whyEn;
        const notes = lang === "id" ? metadata?.notesId : metadata?.notesEn;
        const optionExplanations = Object.fromEntries(
          options.map((o) => [
            o.id,
            answers.includes(o.id)
              ? explanation
              : notes?.[(options.indexOf(o) + offset) % choices.length] ||
                optionConcept(o.text)?.[lang === "id" ? 1 : 2] ||
                explanation,
          ]),
        );
        return {
          id: `curated-${type}-${lang}-${index + 1}`,
          examType: type,
          lang,
          domain,
          type: answers.length > 1 ? "multiple" : "single",
          prompt: lang === "id" ? promptId : promptEn,
          options,
          correctAnswers: answers,
          explanation,
          optionExplanations,
          sourceUrl: metadata?.sourceUrl || refs[ref || "cloud"],
          verifiedAt: notes ? "2026-10-18" : "2026-10-13",
          version: 2,
          difficulty: "intermediate",
          status: "approved",
          sourceRef: "original-practice-scenarios",
        };
      });
    banks[`${type}-${lang}`] = [...old, ...deepen(fresh,type,lang)];
    fs.mkdirSync("src/data/banks", { recursive: true });
    fs.writeFileSync(
      `src/data/banks/${type}-${lang}.json`,
      JSON.stringify(banks[`${type}-${lang}`]),
    );
    console.log(
      `${type}-${lang}: ${old.length} legacy + ${fresh.length} original`,
    );
  }
fs.writeFileSync(
  "src/data/banks/manifest.json",
  JSON.stringify(
    Object.fromEntries(
      Object.entries(banks).map(([key, items]) => [
        key,
        {
          count: items.length,
          domains: items.reduce(
            (out, q) => ((out[q.domain] = (out[q.domain] || 0) + 1), out),
            {},
          ),
        },
      ]),
    ),
  ),
);

fs.mkdirSync("backend/data", { recursive: true });
fs.writeFileSync(
  "backend/data/builtin-seed.json",
  JSON.stringify(
    Object.values(banks)
      .flat()
      .filter((q) => q.sourceRef === "original-practice-scenarios"),
  ),
);
