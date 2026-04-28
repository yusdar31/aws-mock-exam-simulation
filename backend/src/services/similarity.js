function tokenize(text) {
  if (!text) return []
  return text.toLowerCase().match(/\w+/g) || []
}

function calculateJaccardIndex(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1
  if (setA.size === 0 || setB.size === 0) return 0

  const intersection = new Set([...setA].filter((x) => setB.has(x)))
  const union = new Set([...setA, ...setB])

  return intersection.size / union.size
}

/**
 * Checks a new question against an array of existing questions for duplicates.
 * Returns an array of issue strings ('possible_duplicate').
 */
export function detectDuplicates(newQuestion, existingQuestions, threshold = 0.85) {
  const issues = []

  const newTokens = new Set(tokenize(newQuestion.prompt))

  for (const existing of existingQuestions) {
    if (newQuestion.id === existing.id) continue

    const existingTokens = new Set(tokenize(existing.prompt))
    const similarity = calculateJaccardIndex(newTokens, existingTokens)

    if (similarity >= threshold) {
      issues.push('possible_duplicate')
      break // Once it's flagged, no need to check others
    }
  }

  return issues
}
