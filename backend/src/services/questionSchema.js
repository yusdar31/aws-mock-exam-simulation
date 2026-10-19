import catalog from "../../../src/data/certifications.json" with { type: "json" };
export const domains = Object.fromEntries(
  Object.entries(catalog).map(([key, value]) => [
    key,
    Object.keys(value.blueprint),
  ]),
);
export function normalizeQuestion(input = {}) {
  const examType = input.examType || "saa";
  const domain = String(input.domain || "Unclassified")
    .replace(/^Design /, "")
    .replace("Cloud Technology and Services", "Technology & Services")
    .replace("Security and Compliance", "Security & Compliance")
    .replace("Billing, Pricing, and Support", "Billing & Pricing");
  return {
    ...input,
    examType,
    lang: input.lang === "id" ? "id" : "en",
    domain,
    type: input.type === "multiple" ? "multiple" : "single",
    prompt: String(input.prompt || "").trim(),
    options: Array.isArray(input.options)
      ? input.options
          .filter(
            (o) => o && typeof o.id === "string" && typeof o.text === "string",
          )
          .map((o) => ({ id: o.id.toUpperCase(), text: o.text.trim() }))
      : [],
    correctAnswers: Array.isArray(input.correctAnswers)
      ? input.correctAnswers
          .filter((a) => typeof a === "string")
          .map((a) => a.toUpperCase())
      : [],
    explanation: String(input.explanation || "").trim(),
    version: Number.isInteger(input.version) ? input.version : 1,
    optionExplanations:
      input.optionExplanations && typeof input.optionExplanations === "object"
        ? input.optionExplanations
        : {},
    sourceUrl: typeof input.sourceUrl === "string" ? input.sourceUrl : "",
    verifiedAt: typeof input.verifiedAt === "string" ? input.verifiedAt : "",
    status: ["draft", "approved", "rejected"].includes(input.status)
      ? input.status
      : "draft",
    duplicateReviewed: input.duplicateReviewed === true,
  };
}
export function questionIssues(q) {
  const issues = [];
  if (q.issues?.includes("possible_duplicate") && !q.duplicateReviewed)
    issues.push("possible_duplicate");
  if (!q.prompt) issues.push("missing_prompt");
  if (
    q.prompt.length > 6000 ||
    q.explanation.length > 12000 ||
    q.options.some((o) => o.text.length > 3000)
  )
    issues.push("text_too_long");
  if (!Object.hasOwn(domains, q.examType)) issues.push("invalid_exam_type");
  if (
    !Object.hasOwn(domains, q.examType) ||
    !domains[q.examType].includes(q.domain)
  )
    issues.push("invalid_domain");
  if (
    Object.hasOwn(catalog, q.examType) &&
    !catalog[q.examType].languages.includes(q.lang)
  )
    issues.push("unavailable_language");
  if (q.options.length < 4 || q.options.some((o) => !o.text))
    issues.push("incomplete_options");
  const ids = q.options.map((o) => o.id);
  if (ids.length > 6 || ids.some((id) => !/^[A-F]$/.test(id)))
    issues.push("invalid_option_ids");
  if (new Set(ids).size !== ids.length) issues.push("duplicate_option_ids");
  if (
    !q.correctAnswers.length ||
    new Set(q.correctAnswers).size !== q.correctAnswers.length ||
    q.correctAnswers.some((a) => !ids.includes(a))
  )
    issues.push("invalid_answers");
  if (
    (q.type === "single" && q.correctAnswers.length !== 1) ||
    (q.type === "multiple" &&
      (q.correctAnswers.length < 2 || q.correctAnswers.length >= ids.length))
  )
    issues.push("answer_count");
  if (!q.explanation) issues.push("missing_explanation");
  if (
    !q.sourceUrl ||
    !(
      q.examType === "gcp-ace"
        ? /^https:\/\/(cloud\.google\.com|docs\.cloud\.google\.com)\//
        : /^https:\/\/(docs\.aws\.amazon\.com|aws\.amazon\.com)\//
    ).test(q.sourceUrl)
  )
    issues.push(
      q.examType === "gcp-ace"
        ? "missing_google_reference"
        : "missing_aws_reference",
    );
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(q.verifiedAt) ||
    !Number.isFinite(Date.parse(q.verifiedAt)) ||
    new Date(q.verifiedAt).toISOString().slice(0, 10) !== q.verifiedAt
  )
    issues.push("missing_review_date");
  if (
    q.options.some(
      (o) =>
        typeof q.optionExplanations[o.id] !== "string" ||
        !q.optionExplanations[o.id].trim(),
    )
  )
    issues.push("missing_distractor_rationale");
  return issues;
}
