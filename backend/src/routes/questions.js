import crypto from 'node:crypto'
import express from 'express'
import { parseRawDump } from '../services/dumpParser.js'
import { createDraftQuestionsFromParsedEntries } from '../services/questionNormalizer.js'
import { detectDuplicates } from '../services/similarity.js'
import { readQuestions, writeQuestions } from '../storage.js'
import { generateQuestionsFromAI, translateToIndonesian } from '../services/aiGenerator.js'

export const questionRouter = express.Router()

function inferIssues(question) {
  const issues = []
  if (!question.prompt) issues.push('missing_prompt')
  if (question.options.length < 4) issues.push('incomplete_options')
  if (!question.correctAnswers.length) issues.push('missing_correct_answer')
  if (!question.explanation) issues.push('missing_explanation')
  return issues
}

function sanitizeQuestionInput(input) {
  const safeInput = input ?? {}

  return {
    domain: typeof safeInput.domain === 'string' ? safeInput.domain : 'Unclassified',
    difficulty: typeof safeInput.difficulty === 'string' ? safeInput.difficulty : 'unknown',
    type: safeInput.type === 'multiple' ? 'multiple' : 'single',
    prompt: typeof safeInput.prompt === 'string' ? safeInput.prompt : '',
    options: Array.isArray(safeInput.options)
      ? safeInput.options
          .filter((option) => option && typeof option.id === 'string' && typeof option.text === 'string')
          .map((option) => ({ id: option.id.toUpperCase(), text: option.text }))
      : [],
    correctAnswers: Array.isArray(safeInput.correctAnswers)
      ? safeInput.correctAnswers.filter((value) => typeof value === 'string').map((value) => value.toUpperCase())
      : [],
    explanation: typeof safeInput.explanation === 'string' ? safeInput.explanation : '',
    issues: Array.isArray(safeInput.issues)
      ? safeInput.issues.filter((value) => typeof value === 'string')
      : [],
  }
}

questionRouter.get('/', async (_request, response, next) => {
  try {
    const questions = await readQuestions()
    response.json({ items: questions })
  } catch (error) {
    next(error)
  }
})

questionRouter.get('/approved', async (_request, response, next) => {
  try {
    const questions = await readQuestions()
    const approved = questions
      .filter((question) => question.status === 'approved')
      .map((question) => ({
        id: question.id,
        domain: question.domain,
        type: question.type,
        prompt: question.prompt,
        options: question.options,
        correctAnswers: question.correctAnswers,
        explanation: question.explanation,
      }))

    response.json({ items: approved })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/generate-ai', async (request, response, next) => {
  try {
    const { domain = 'all', count = 5 } = request.body ?? {}
    const validCount = Math.min(Math.max(Number(count), 1), 30)
    
    // Generate questions using AI
    const generatedItems = await generateQuestionsFromAI(domain, validCount)
    
    // Proceed exactly like import-json
    if (!Array.isArray(generatedItems) || generatedItems.length === 0) {
      response.status(400).json({ error: 'AI returned an empty or invalid array of questions' })
      return
    }

    const existingQuestions = await readQuestions()

    const draftQuestions = generatedItems.map((item) => {
      const sanitized = sanitizeQuestionInput(item)
      const baseIssues = sanitized.issues.length ? sanitized.issues : inferIssues(sanitized)
      const duplicateIssues = detectDuplicates(sanitized, existingQuestions)

      return {
        id: crypto.randomUUID(),
        sourceType: 'ai-generated',
        sourceRef: 'gemini-ai-studio',
        status: 'draft',
        ...sanitized,
        issues: [...new Set([...baseIssues, ...duplicateIssues])],
      }
    })

    const updatedQuestions = [...draftQuestions, ...existingQuestions]

    await writeQuestions(updatedQuestions)

    response.status(201).json({
      imported: draftQuestions.length,
      items: draftQuestions,
    })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/import-json', async (request, response, next) => {
  try {
    const { items: rawItems, sourceRef = 'json-import' } = request.body ?? {}

    if (!Array.isArray(rawItems) || rawItems.length === 0) {
      response.status(400).json({ error: 'items must be a non-empty array of questions' })
      return
    }

    const existingQuestions = await readQuestions()

    const draftQuestions = rawItems.map((item) => {
      const sanitized = sanitizeQuestionInput(item)
      const baseIssues = sanitized.issues.length ? sanitized.issues : inferIssues(sanitized)
      const duplicateIssues = detectDuplicates(sanitized, existingQuestions)

      return {
        id: crypto.randomUUID(),
        sourceType: 'json',
        sourceRef,
        status: 'draft',
        ...sanitized,
        issues: [...new Set([...baseIssues, ...duplicateIssues])],
      }
    })

    const updatedQuestions = [...draftQuestions, ...existingQuestions]

    await writeQuestions(updatedQuestions)

    response.status(201).json({
      imported: draftQuestions.length,
      items: draftQuestions,
    })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/import-dump-fast', async (request, response, next) => {
  try {
    const { rawText, sourceRef = 'manual-import' } = request.body ?? {}

    if (!rawText || typeof rawText !== 'string') {
      response.status(400).json({ error: 'rawText is required' })
      return
    }

    const existingQuestions = await readQuestions()
    const parsedEntries = parseRawDump(rawText)
    const draftQuestions = createDraftQuestionsFromParsedEntries(parsedEntries, sourceRef).map(draft => {
      const duplicateIssues = detectDuplicates(draft, existingQuestions)
      return {
        ...draft,
        issues: [...new Set([...(draft.issues ?? []), ...duplicateIssues])]
      }
    })
    
    const updatedQuestions = [...draftQuestions, ...existingQuestions]

    await writeQuestions(updatedQuestions)

    response.status(201).json({
      imported: draftQuestions.length,
      items: draftQuestions,
    })
  } catch (error) {
    next(error)
  }
})

questionRouter.put('/:id', async (request, response, next) => {
  try {
    const questions = await readQuestions()
    const index = questions.findIndex((question) => question.id === request.params.id)

    if (index === -1) {
      response.status(404).json({ error: 'Question not found' })
      return
    }

    const existingQuestion = questions[index]
    const updates = sanitizeQuestionInput(request.body)
    const nextStatus = typeof request.body?.status === 'string' ? request.body.status : existingQuestion.status

    const updatedQuestion = {
      ...existingQuestion,
      ...updates,
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    }

    questions[index] = updatedQuestion
    await writeQuestions(questions)

    response.json({ item: updatedQuestion })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/:id/approve', async (request, response, next) => {
  try {
    const questions = await readQuestions()
    const index = questions.findIndex((question) => question.id === request.params.id)

    if (index === -1) {
      response.status(404).json({ error: 'Question not found' })
      return
    }

    questions[index] = {
      ...questions[index],
      status: 'approved',
      updatedAt: new Date().toISOString(),
    }

    await writeQuestions(questions)
    response.json({ item: questions[index] })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/bulk/approve-drafts', async (_request, response, next) => {
  try {
    const questions = await readQuestions()
    
    let updatedCount = 0
    const updatedQuestions = questions.map(question => {
      if (question.status === 'draft') {
        updatedCount++
        return {
          ...question,
          status: 'approved',
          updatedAt: new Date().toISOString()
        }
      }
      return question
    })

    if (updatedCount > 0) {
      await writeQuestions(updatedQuestions)
    }

    response.json({ approved: updatedCount })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/:id/reject', async (request, response, next) => {
  try {
    const questions = await readQuestions()
    const index = questions.findIndex((question) => question.id === request.params.id)

    if (index === -1) {
      response.status(404).json({ error: 'Question not found' })
      return
    }

    questions[index] = {
      ...questions[index],
      status: 'rejected',
      updatedAt: new Date().toISOString(),
    }

    await writeQuestions(questions)
    response.json({ item: questions[index] })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/generate-practice', async (request, response, next) => {
  try {
    const { domain, count = 5 } = request.body ?? {}

    if (!domain || typeof domain !== 'string') {
      response.status(400).json({ error: 'domain is required' })
      return
    }

    const validCount = Math.min(Math.max(Number(count), 1), 15)
    const generatedItems = await generateQuestionsFromAI(domain, validCount)

    if (!Array.isArray(generatedItems) || generatedItems.length === 0) {
      response.status(400).json({ error: 'AI returned empty results' })
      return
    }

    const existingQuestions = await readQuestions()

    const practiceQuestions = generatedItems.map((item) => {
      const sanitized = sanitizeQuestionInput(item)
      return {
        id: crypto.randomUUID(),
        sourceType: 'ai-practice',
        sourceRef: 'weakness-practice',
        status: 'approved',
        ...sanitized,
        issues: [],
      }
    })

    const updatedQuestions = [...practiceQuestions, ...existingQuestions]
    await writeQuestions(updatedQuestions)

    // Return the practice questions in exam-ready format
    const examReady = practiceQuestions.map((q) => ({
      id: q.id,
      domain: q.domain,
      type: q.type,
      prompt: q.prompt,
      options: q.options,
      correctAnswers: q.correctAnswers,
      explanation: q.explanation,
    }))

    response.status(201).json({
      generated: practiceQuestions.length,
      domain,
      items: examReady,
    })
  } catch (error) {
    next(error)
  }
})

questionRouter.post('/translate', async (request, response, next) => {
  try {
    const { text } = request.body ?? {}

    if (!text || typeof text !== 'string') {
      response.status(400).json({ error: 'text is required' })
      return
    }

    if (text.length > 5000) {
      response.status(400).json({ error: 'Text too long (max 5000 chars)' })
      return
    }

    const translated = await translateToIndonesian(text)
    response.json({ translated })
  } catch (error) {
    next(error)
  }
})
