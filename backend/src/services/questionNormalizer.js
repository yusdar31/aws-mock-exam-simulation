import crypto from 'node:crypto'

function createId() {
  return crypto.randomUUID()
}

function inferType(correctAnswers) {
  return correctAnswers.length > 1 ? 'multiple' : 'single'
}

function inferStatusFlags(question) {
  const issues = []

  if (!question.prompt) {
    issues.push('missing_prompt')
  }

  if (question.options.length < 4) {
    issues.push('incomplete_options')
  }

  if (!question.correctAnswers.length) {
    issues.push('missing_correct_answer')
  }

  if (!question.explanation) {
    issues.push('missing_explanation')
  }

  return issues
}

function buildDraftQuestion(entry, sourceRef) {
  const parsed = entry.parsed
  const question = {
    id: createId(),
    sourceType: 'dump',
    sourceRef,
    sourceNumber: entry.sourceNumber,
    status: 'draft',
    domain: 'Unclassified',
    difficulty: 'unknown',
    type: inferType(parsed.correctAnswers),
    prompt: parsed.prompt,
    options: parsed.options,
    correctAnswers: parsed.correctAnswers,
    explanation: parsed.explanation,
    rawBlock: entry.rawBlock,
  }

  return {
    ...question,
    issues: inferStatusFlags(question),
  }
}

export function createDraftQuestionsFromParsedEntries(entries, sourceRef) {
  return entries.map((entry) => buildDraftQuestion(entry, sourceRef))
}

export function normalizeParsedQuestions(entries, sourceRef) {
  return entries.map((entry) => buildDraftQuestion(entry, sourceRef))
}
