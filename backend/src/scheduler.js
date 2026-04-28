import cron from 'node-cron'
import crypto from 'node:crypto'
import { generateQuestionsFromAI } from './services/aiGenerator.js'
import { readQuestions, writeQuestions } from './storage.js'
import { detectDuplicates } from './services/similarity.js'

const BATCH_SIZE = 10
const CRON_SCHEDULE = process.env.AI_CRON_SCHEDULE || '0 */4 * * *' // Default: every 4 hours

function inferIssues(question) {
  const issues = []
  if (!question.prompt) issues.push('missing_prompt')
  if (!Array.isArray(question.options) || question.options.length < 4) issues.push('incomplete_options')
  if (!Array.isArray(question.correctAnswers) || !question.correctAnswers.length) issues.push('missing_correct_answer')
  if (!question.explanation) issues.push('missing_explanation')
  return issues
}

function sanitizeQuestion(input) {
  const safeInput = input ?? {}
  return {
    domain: typeof safeInput.domain === 'string' ? safeInput.domain : 'Unclassified',
    difficulty: typeof safeInput.difficulty === 'string' ? safeInput.difficulty : 'unknown',
    type: safeInput.type === 'multiple' ? 'multiple' : 'single',
    prompt: typeof safeInput.prompt === 'string' ? safeInput.prompt : '',
    options: Array.isArray(safeInput.options)
      ? safeInput.options
          .filter((o) => o && typeof o.id === 'string' && typeof o.text === 'string')
          .map((o) => ({ id: o.id.toUpperCase(), text: o.text }))
      : [],
    correctAnswers: Array.isArray(safeInput.correctAnswers)
      ? safeInput.correctAnswers.filter((v) => typeof v === 'string').map((v) => v.toUpperCase())
      : [],
    explanation: typeof safeInput.explanation === 'string' ? safeInput.explanation : '',
  }
}

async function runAutoGenerate() {
  const timestamp = new Date().toISOString()
  console.log(`[AI Scheduler] ${timestamp} — Starting auto-generation (batch: ${BATCH_SIZE})...`)

  try {
    const generatedItems = await generateQuestionsFromAI('all', BATCH_SIZE)

    if (!Array.isArray(generatedItems) || generatedItems.length === 0) {
      console.log(`[AI Scheduler] ${timestamp} — AI returned empty result. Skipping.`)
      return
    }

    const existingQuestions = await readQuestions()

    const draftQuestions = generatedItems.map((item) => {
      const sanitized = sanitizeQuestion(item)
      const baseIssues = inferIssues(sanitized)
      const duplicateIssues = detectDuplicates(sanitized, existingQuestions)

      return {
        id: crypto.randomUUID(),
        sourceType: 'ai-generated',
        sourceRef: 'auto-scheduler',
        status: 'draft',
        ...sanitized,
        issues: [...new Set([...baseIssues, ...duplicateIssues])],
      }
    })

    const updatedQuestions = [...draftQuestions, ...existingQuestions]
    await writeQuestions(updatedQuestions)

    console.log(`[AI Scheduler] ${timestamp} — Successfully added ${draftQuestions.length} new draft questions. Total bank: ${updatedQuestions.length}`)
  } catch (error) {
    console.error(`[AI Scheduler] ${timestamp} — Auto-generation failed:`, error.message || error)
  }
}

export function startAutoGenerator() {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    console.log('[AI Scheduler] GEMINI_API_KEY not configured. Auto-generator is DISABLED.')
    return
  }

  console.log(`[AI Scheduler] Scheduler registered with cron: "${CRON_SCHEDULE}"`)
  console.log(`[AI Scheduler] Will generate ${BATCH_SIZE} questions per batch across all 4 AWS domains.`)

  cron.schedule(CRON_SCHEDULE, () => {
    runAutoGenerate()
  })

  // Run once on startup after a short delay (30s) to let the server fully boot
  setTimeout(() => {
    console.log('[AI Scheduler] Running initial batch on startup...')
    runAutoGenerate()
  }, 30_000)
}
