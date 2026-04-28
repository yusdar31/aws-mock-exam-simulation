import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { questionBank, type ExamQuestion } from './data/questionBank'

type ExamPhase = 'landing' | 'exam' | 'review' | 'result' | 'admin'
type QuestionStatus = 'answered-marked' | 'marked' | 'answered' | 'unanswered'

type ReviewQuestion = {
  id: string
  sourceType: string
  sourceRef: string
  sourceNumber?: string
  status: string
  domain: string
  difficulty: string
  type: 'single' | 'multiple'
  prompt: string
  options: { id: string; text: string }[]
  correctAnswers: string[]
  explanation: string
  rawBlock?: string
  issues?: string[]
  updatedAt?: string
}

type ReviewDraft = {
  domain: string
  difficulty: string
  type: 'single' | 'multiple'
  prompt: string
  explanation: string
  correctAnswers: string
  options: { id: string; text: string }[]
}

type ErrorInsight = {
  label: string
  description: string
}

const EXAM_DURATION_SECONDS = 45 * 60
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:4000' 
  : `http://${window.location.hostname}:4000`

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(totalSeconds, 0)
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function arraysMatch(left: string[], right: string[]) {
  if (left.length !== right.length) {
    return false
  }

  const sortedLeft = [...left].sort()
  const sortedRight = [...right].sort()

  return sortedLeft.every((value, index) => value === sortedRight[index])
}

function getQuestionStatus(
  question: ExamQuestion,
  selectedAnswers: Record<string, string[]>,
  markedQuestionIds: string[],
): QuestionStatus {
  const selected = selectedAnswers[question.id] ?? []
  const isAnswered = selected.length > 0
  const isMarked = markedQuestionIds.includes(question.id)

  if (isMarked && isAnswered) {
    return 'answered-marked'
  }

  if (isMarked) {
    return 'marked'
  }

  if (isAnswered) {
    return 'answered'
  }

  return 'unanswered'
}

function getStatusLabel(status: QuestionStatus) {
  switch (status) {
    case 'answered-marked':
      return 'Answered / Marked'
    case 'marked':
      return 'Marked'
    case 'answered':
      return 'Answered'
    default:
      return 'Not Answered'
  }
}

function buildErrorInsight(question: ExamQuestion): ErrorInsight {
  const prompt = question.prompt.toLowerCase()

  if (/least operational overhead|most operationally efficient|managed backups|minimal administrative effort/.test(prompt)) {
    return {
      label: 'Managed Service Bias',
      description: 'Review when AWS expects the lowest-ops managed service answer over self-managed infrastructure.',
    }
  }

  if (/availability zone|multi-az|failover|remain available|durable|disaster|resilien/i.test(prompt)) {
    return {
      label: 'Resilience Pattern Gap',
      description: 'Revisit high availability, Multi-AZ, decoupling, and failure-domain design patterns.',
    }
  }

  if (/encrypted|credentials|secret|iam|kms|secure|vpce|access|policy/.test(prompt)) {
    return {
      label: 'Security Boundary Confusion',
      description: 'Focus on IAM roles, encryption choices, bucket policies, secrets handling, and least privilege boundaries.',
    }
  }

  if (/latency|performance|cache|throughput|in-memory|global|edge/.test(prompt)) {
    return {
      label: 'Performance Trade-off Miss',
      description: 'Review service selection for latency, caching, throughput, and globally distributed access patterns.',
    }
  }

  if (/cost|lowest cost|cost-effective|spot|glacier|savings|reserved/.test(prompt)) {
    return {
      label: 'Cost Optimization Miss',
      description: 'Practice identifying the cheapest option that still satisfies the stated durability, availability, or interruption requirements.',
    }
  }

  if (question.domain === 'Secure Architectures') {
    return {
      label: 'Security Architecture Review',
      description: 'Strengthen decision-making around identity, network boundaries, and data protection controls.',
    }
  }

  if (question.domain === 'Resilient Architectures') {
    return {
      label: 'Availability Design Review',
      description: 'Study workload designs that tolerate AZ failure, traffic spikes, and dependency outages.',
    }
  }

  if (question.domain === 'High-Performing Architectures') {
    return {
      label: 'Performance Architecture Review',
      description: 'Practice matching workload patterns to the best-fit database, cache, queue, or content delivery service.',
    }
  }

  if (question.domain === 'Cost-Optimized Architectures') {
    return {
      label: 'Cost Decision Review',
      description: 'Review pricing models and storage or compute choices where the cheapest valid answer is often the target.',
    }
  }

  return {
    label: 'Requirement Prioritization',
    description: 'Slow down on the core requirement and rank answers by exact fit before comparing implementation details.',
  }
}

function createDraftFromQuestion(question: ReviewQuestion | null): ReviewDraft {
  if (!question) {
    return {
      domain: 'Unclassified',
      difficulty: 'unknown',
      type: 'single',
      prompt: '',
      explanation: '',
      correctAnswers: '',
      options: [
        { id: 'A', text: '' },
        { id: 'B', text: '' },
        { id: 'C', text: '' },
        { id: 'D', text: '' },
      ],
    }
  }

  return {
    domain: question.domain,
    difficulty: question.difficulty,
    type: question.type,
    prompt: question.prompt,
    explanation: question.explanation,
    correctAnswers: question.correctAnswers.join(', '),
    options: question.options.length
      ? question.options.map((option) => ({ ...option }))
      : [
          { id: 'A', text: '' },
          { id: 'B', text: '' },
          { id: 'C', text: '' },
          { id: 'D', text: '' },
        ],
  }
}

async function fetchReviewQuestions() {
  const response = await fetch(`${API_BASE_URL}/api/questions`)

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? 'Failed to load review questions')
  }

  const payload = await response.json()
  return payload.items as ReviewQuestion[]
}

async function saveReviewQuestion(id: string, draft: ReviewDraft, status: string) {
  const response = await fetch(`${API_BASE_URL}/api/questions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status,
      domain: draft.domain,
      difficulty: draft.difficulty,
      type: draft.type,
      prompt: draft.prompt,
      explanation: draft.explanation,
      correctAnswers: draft.correctAnswers
        .split(',')
        .map((value) => value.trim().toUpperCase())
        .filter(Boolean),
      options: draft.options,
    }),
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? 'Failed to save question')
  }

  const payload = await response.json()
  return payload.item as ReviewQuestion
}

async function updateReviewStatus(id: string, action: 'approve' | 'reject') {
  const response = await fetch(`${API_BASE_URL}/api/questions/${id}/${action}`, {
    method: 'POST',
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? `Failed to ${action} question`)
  }

  const payload = await response.json()
  return payload.item as ReviewQuestion
}

async function approveAllDrafts() {
  const response = await fetch(`${API_BASE_URL}/api/questions/bulk/approve-drafts`, {
    method: 'POST',
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? `Failed to approve drafts`)
  }

  return response.json() as Promise<{ approved: number }>
}


async function importDumpQuestions(sourceRef: string, rawText: string) {
  const response = await fetch(`${API_BASE_URL}/api/questions/import-dump-fast`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sourceRef,
      rawText,
    }),
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? 'Failed to import dump questions')
  }

  return response.json() as Promise<{ imported: number; items: ReviewQuestion[] }>
}

async function importJsonQuestions(sourceRef: string, jsonText: string) {
  const items = JSON.parse(jsonText)

  if (!Array.isArray(items)) {
    throw new Error('JSON must be an array of questions')
  }

  const response = await fetch(`${API_BASE_URL}/api/questions/import-json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sourceRef,
      items,
    }),
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? 'Failed to import JSON questions')
  }

  return response.json() as Promise<{ imported: number; items: ReviewQuestion[] }>
}

async function fetchApprovedQuestions() {
  const response = await fetch(`${API_BASE_URL}/api/questions/approved`)

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error ?? 'Failed to load approved questions')
  }

  const payload = await response.json()
  return payload.items as ExamQuestion[]
}

function App() {
  const [phase, setPhase] = useState<ExamPhase>('landing')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({})
  const [markedQuestionIds, setMarkedQuestionIds] = useState<string[]>([])
  const [remainingSeconds, setRemainingSeconds] = useState(EXAM_DURATION_SECONDS)
  const [submittedAt, setSubmittedAt] = useState<number | null>(null)
  const [showDetailedReview, setShowDetailedReview] = useState(false)
  
  // Configuration State
  const [availableQuestions, setAvailableQuestions] = useState<ExamQuestion[]>([])
  const [examConfigDuration, setExamConfigDuration] = useState<number>(45) // minutes, -1 for unlimited
  const [examConfigLimit, setExamConfigLimit] = useState<number | 'all'>(20)
  const [examConfigDomains, setExamConfigDomains] = useState<string[]>([])

  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([])
  const [examLoading, setExamLoading] = useState(false)
  const [examError, setExamError] = useState('')
  const [reviewQuestions, setReviewQuestions] = useState<ReviewQuestion[]>([])
  const [reviewLoading, setReviewLoading] = useState(false)
  const [reviewError, setReviewError] = useState('')
  const [selectedReviewId, setSelectedReviewId] = useState('')
  const [reviewDraft, setReviewDraft] = useState<ReviewDraft>(createDraftFromQuestion(null))
  const [reviewNotice, setReviewNotice] = useState('')
  const [reviewActionLoading, setReviewActionLoading] = useState(false)
  const [importSourceRef, setImportSourceRef] = useState('manual-import')
  const [importRawText, setImportRawText] = useState('')
  const [importLoading, setImportLoading] = useState(false)
  const [importNotice, setImportNotice] = useState('')
  const [importJsonText, setImportJsonText] = useState('')
  const [importTab, setImportTab] = useState<'dump' | 'json' | 'ai'>('ai')
  const [importAiDomain, setImportAiDomain] = useState<string>('all')
  const [importAiCount, setImportAiCount] = useState<number>(5)
  const [adminStatusFilter, setAdminStatusFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const currentQuestion = examQuestions[currentIndex]
  const selectedReviewQuestion =
    reviewQuestions.find((question) => question.id === selectedReviewId) ?? null

  const filteredReviewQuestions = useMemo(() => {
    let filtered = reviewQuestions
    if (adminStatusFilter !== 'all') {
      filtered = filtered.filter((question) => question.status === adminStatusFilter)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(
        (question) => question.prompt.toLowerCase().includes(q) || question.id.toLowerCase().includes(q)
      )
    }
    return filtered
  }, [reviewQuestions, adminStatusFilter, searchQuery])

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { all: reviewQuestions.length }
    for (const question of reviewQuestions) {
      counts[question.status] = (counts[question.status] ?? 0) + 1
    }
    return counts
  }, [reviewQuestions])

  const score = useMemo(() => {
    return examQuestions.reduce((total, question) => {
      const answers = selectedAnswers[question.id] ?? []
      return total + Number(arraysMatch(answers, question.correctAnswers))
    }, 0)
  }, [selectedAnswers, examQuestions])

  const answeredCount = useMemo(() => {
    return examQuestions.filter((question) => (selectedAnswers[question.id] ?? []).length > 0).length
  }, [selectedAnswers, examQuestions])

  const domainPerformance = useMemo(() => {
    const domainMap = new Map<
      string,
      { domain: string; total: number; correct: number; answered: number }
    >()

    for (const question of examQuestions) {
      const selected = selectedAnswers[question.id] ?? []
      const entry = domainMap.get(question.domain) ?? {
        domain: question.domain,
        total: 0,
        correct: 0,
        answered: 0,
      }

      entry.total += 1
      entry.answered += Number(selected.length > 0)
      entry.correct += Number(arraysMatch(selected, question.correctAnswers))

      domainMap.set(question.domain, entry)
    }

    return Array.from(domainMap.values())
      .map((entry) => ({
        ...entry,
        accuracy: entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0,
      }))
      .sort((left, right) => {
        if (left.accuracy !== right.accuracy) {
          return left.accuracy - right.accuracy
        }

        return right.total - left.total
      })
  }, [examQuestions, selectedAnswers])

  const weakestDomain = domainPerformance[0] ?? null
  const strongestDomain = domainPerformance.length
    ? [...domainPerformance].sort((left, right) => right.accuracy - left.accuracy)[0]
    : null

  const errorInsights = useMemo(() => {
    const counts = new Map<string, { insight: ErrorInsight; count: number }>()

    for (const question of examQuestions) {
      const selected = selectedAnswers[question.id] ?? []

      if (arraysMatch(selected, question.correctAnswers)) {
        continue
      }

      const insight = buildErrorInsight(question)
      const existing = counts.get(insight.label)

      if (existing) {
        existing.count += 1
      } else {
        counts.set(insight.label, { insight, count: 1 })
      }
    }

    return Array.from(counts.values()).sort((left, right) => right.count - left.count)
  }, [examQuestions, selectedAnswers])

  const reviewCount = markedQuestionIds.length
  const scoreRate = examQuestions.length > 0 ? Math.round((score / examQuestions.length) * 100) : 0

  useEffect(() => {
    if (phase !== 'exam' && phase !== 'review') {
      return undefined
    }

    if (remainingSeconds <= 0) {
      setSubmittedAt(Date.now())
      setPhase('result')
      return undefined
    }

    const interval = window.setInterval(() => {
      setRemainingSeconds((currentSeconds) => currentSeconds - 1)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [phase, remainingSeconds])

  useEffect(() => {
    setReviewDraft(createDraftFromQuestion(selectedReviewQuestion))
  }, [selectedReviewQuestion])

  async function openAdminPanel() {
    setPhase('admin')
    setReviewLoading(true)
    setReviewError('')
    setReviewNotice('')

    try {
      const items = await fetchReviewQuestions()
      setReviewQuestions(items)
      setSelectedReviewId(items[0]?.id ?? '')
    } catch (error) {
      setReviewError(error instanceof Error ? error.message : 'Failed to load review items')
    } finally {
      setReviewLoading(false)
    }
  }

  // Load available questions for configuration on mount
  useEffect(() => {
    async function loadAvailable() {
      try {
        const approved = await fetchApprovedQuestions()
        setAvailableQuestions(approved.length > 0 ? approved : questionBank)
      } catch {
        setAvailableQuestions(questionBank)
      }
    }
    loadAvailable()
  }, [])

  const availableDomains = useMemo(() => {
    const list = new Set(availableQuestions.map((q) => q.domain).filter(Boolean))
    return Array.from(list)
  }, [availableQuestions])

  // Auto-select all available domains when list loads
  useEffect(() => {
    setExamConfigDomains(availableDomains)
  }, [availableDomains])

  function toggleConfigDomain(domain: string) {
    setExamConfigDomains((current) =>
      current.includes(domain) ? current.filter((d) => d !== domain) : [...current, domain]
    )
  }

  function startExam() {
    setExamLoading(true)
    setExamError('')

    let source = availableQuestions

    // 1. Filter by Domain
    let filtered = source.filter((q) => examConfigDomains.includes(q.domain))
    if (filtered.length === 0) {
      filtered = source // fail-safe if nothing selected
    }

    // 2. Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)

    // 3. Slice to Limit
    let finalQuestions = shuffled
    if (examConfigLimit !== 'all') {
      finalQuestions = shuffled.slice(0, examConfigLimit)
    }

    setExamQuestions(finalQuestions)
    setPhase('exam')
    setCurrentIndex(0)
    setSelectedAnswers({})
    setMarkedQuestionIds([])
    setRemainingSeconds(examConfigDuration === -1 ? -1 : examConfigDuration * 60)
    setSubmittedAt(null)
    setShowDetailedReview(false)
    setExamLoading(false)
  }

  function updateAnswer(optionId: string) {
    setSelectedAnswers((current) => {
      const existingAnswers = current[currentQuestion.id] ?? []

      if (currentQuestion.type === 'single') {
        return {
          ...current,
          [currentQuestion.id]: [optionId],
        }
      }

      const nextAnswers = existingAnswers.includes(optionId)
        ? existingAnswers.filter((value) => value !== optionId)
        : [...existingAnswers, optionId]

      return {
        ...current,
        [currentQuestion.id]: nextAnswers,
      }
    })
  }

  function clearAnswer() {
    setSelectedAnswers((current) => ({
      ...current,
      [currentQuestion.id]: [],
    }))
  }

  function toggleMarkForReview() {
    setMarkedQuestionIds((current) => {
      if (current.includes(currentQuestion.id)) {
        return current.filter((questionId) => questionId !== currentQuestion.id)
      }

      return [...current, currentQuestion.id]
    })
  }

  function finishExam() {
    setShowDetailedReview(false)
    setSubmittedAt(Date.now())
    setPhase('result')
  }

  function goToReviewScreen() {
    setPhase('review')
  }

  function backToExam() {
    setPhase('exam')
  }

  function updateDraftField(field: keyof Omit<ReviewDraft, 'options'>, value: string) {
    setReviewDraft((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function updateDraftOption(index: number, value: string) {
    setReviewDraft((current) => ({
      ...current,
      options: current.options.map((option, optionIndex) =>
        optionIndex === index ? { ...option, text: value } : option,
      ),
    }))
  }

  function applyQuestionUpdate(updatedQuestion: ReviewQuestion) {
    setReviewQuestions((current) =>
      current.map((question) => (question.id === updatedQuestion.id ? updatedQuestion : question)),
    )
    setSelectedReviewId(updatedQuestion.id)
  }

  async function handleImportDump() {
    if (!importRawText.trim()) {
      setImportNotice('Paste raw dump text first.')
      return
    }

    setImportLoading(true)
    setImportNotice('')

    try {
      const payload = await importDumpQuestions(importSourceRef.trim() || 'manual-import', importRawText)
      const refreshedQuestions = await fetchReviewQuestions()

      setReviewQuestions(refreshedQuestions)
      setSelectedReviewId(payload.items[0]?.id ?? refreshedQuestions[0]?.id ?? '')
      setImportRawText('')
      setImportNotice(`Imported ${payload.imported} questions.`)
    } catch (error) {
      setImportNotice(error instanceof Error ? error.message : 'Failed to import dump')
    } finally {
      setImportLoading(false)
    }
  }

  async function handleImportJson() {
    if (!importJsonText.trim()) {
      setImportNotice('Paste JSON array of questions first.')
      return
    }

    setImportLoading(true)
    setImportNotice('')

    try {
      const payload = await importJsonQuestions(importSourceRef.trim() || 'json-import', importJsonText)
      const refreshedQuestions = await fetchReviewQuestions()

      setReviewQuestions(refreshedQuestions)
      setSelectedReviewId(payload.items[0]?.id ?? refreshedQuestions[0]?.id ?? '')
      setImportJsonText('')
      setImportNotice(`Imported ${payload.imported} questions from JSON.`)
    } catch (error) {
      setImportNotice(error instanceof Error ? error.message : 'Failed to import JSON')
    } finally {
      setImportLoading(false)
    }
  }

  async function handleImportAi() {
    setImportLoading(true)
    setImportNotice('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/questions/generate-ai`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: importAiDomain,
          count: importAiCount,
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error ?? 'Failed to generate questions using AI')
      }

      const payload = await response.json()
      const refreshedQuestions = await fetchReviewQuestions()

      setReviewQuestions(refreshedQuestions)
      setSelectedReviewId(payload.items[0]?.id ?? refreshedQuestions[0]?.id ?? '')
      setImportNotice(`Successfully generated ${payload.imported} new AI questions!`)
    } catch (error) {
      setImportNotice(error instanceof Error ? error.message : 'AI generation failed')
    } finally {
      setImportLoading(false)
    }
  }

  async function handleSaveReviewQuestion() {
    if (!selectedReviewQuestion) {
      return
    }

    setReviewActionLoading(true)
    setReviewNotice('')

    try {
      const updated = await saveReviewQuestion(
        selectedReviewQuestion.id,
        reviewDraft,
        selectedReviewQuestion.status,
      )
      applyQuestionUpdate(updated)
      setReviewNotice('Draft saved.')
    } catch (error) {
      setReviewNotice(error instanceof Error ? error.message : 'Failed to save draft')
    } finally {
      setReviewActionLoading(false)
    }
  }

  async function handleApproveAllDrafts() {
    if (!window.confirm('Are you sure you want to approve all drafts?')) {
      return
    }
    
    setReviewActionLoading(true)
    setReviewNotice('')

    try {
      const payload = await approveAllDrafts()
      const refreshedQuestions = await fetchReviewQuestions()
      setReviewQuestions(refreshedQuestions)
      setReviewNotice(`Successfully approved ${payload.approved} drafts.`)
    } catch (error) {
      setReviewNotice(error instanceof Error ? error.message : 'Failed to approve all drafts')
    } finally {
      setReviewActionLoading(false)
    }
  }

  async function handleUpdateReviewStatus(action: 'approve' | 'reject') {
    if (!selectedReviewQuestion) {
      return
    }

    setReviewActionLoading(true)
    setReviewNotice('')

    try {
      const updated = await updateReviewStatus(selectedReviewQuestion.id, action)
      applyQuestionUpdate(updated)
      setReviewNotice(action === 'approve' ? 'Question approved.' : 'Question rejected.')
    } catch (error) {
      setReviewNotice(error instanceof Error ? error.message : 'Failed to update status')
    } finally {
      setReviewActionLoading(false)
    }
  }


  if (phase === 'landing') {
    return (
      <main className="lobby-shell">
        <section className="lobby-card">
          <div className="lobby-header">
            <div>
              <div className="aws-badge">AWS Certification</div>
              <h1>AWS Certified Solutions Architect - Associate</h1>
              <p className="lobby-copy">
                Simulasi dibuat menyerupai exam delivery UI: timer di header,
                navigator soal, penanda review, dan halaman review akhir sebelum submit.
              </p>
            </div>
            <div className="lobby-id-block">
              <span>Exam Code</span>
              <strong>SAA-C03 Mock</strong>
            </div>
          </div>

          <div className="lobby-config-section">
            <h2>Exam Setup</h2>

            <div className="config-grid">
              <div className="config-field">
                <label>Question Limit</label>
                <div className="config-options">
                  {[10, 20, 50, 'all'].map((val) => (
                    <button
                      key={val}
                      className={`config-pill ${examConfigLimit === val ? 'active' : ''}`}
                      onClick={() => setExamConfigLimit(val as any)}
                    >
                      {val === 'all' ? 'All' : val}
                    </button>
                  ))}
                  <input
                    type="number"
                    className="config-pill-input"
                    placeholder="Custom"
                    min={1}
                    max={availableQuestions.length}
                    value={typeof examConfigLimit === 'number' && ![10, 20, 50].includes(examConfigLimit as number) ? examConfigLimit : ''}
                    onChange={(e) => {
                      const val = parseInt(e.target.value)
                      if (!isNaN(val) && val > 0) setExamConfigLimit(val)
                    }}
                  />
                </div>
              </div>

              <div className="config-field">
                <label>Time Limit</label>
                <div className="config-options">
                  {[15, 30, 45, 60, -1].map((val) => (
                    <button
                      key={val}
                      className={`config-pill ${examConfigDuration === val ? 'active' : ''}`}
                      onClick={() => setExamConfigDuration(val)}
                    >
                      {val === -1 ? 'Unlimited' : `${val} Min`}
                    </button>
                  ))}
                  <input
                    type="number"
                    className="config-pill-input"
                    placeholder="Custom"
                    min={1}
                    value={examConfigDuration !== -1 && ![15, 30, 45, 60].includes(examConfigDuration) ? examConfigDuration : ''}
                    onChange={(e) => {
                      const val = parseInt(e.target.value)
                      if (!isNaN(val) && val > 0) setExamConfigDuration(val)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="config-field config-domains-field">
              <label>Select Domains</label>
              <div className="config-domains-list">
                {availableDomains.map((domain) => (
                  <label key={domain} className="config-domain-item">
                    <input
                      type="checkbox"
                      checked={examConfigDomains.includes(domain)}
                      onChange={() => toggleConfigDomain(domain)}
                    />
                    <span>{domain}</span>
                  </label>
                ))}
                {availableDomains.length === 0 && (
                  <span className="config-domain-empty">Loading domains...</span>
                )}
              </div>
            </div>
            
            <p className="lobby-config-summary">
              Available Pool: <strong>{availableQuestions.length}</strong> questions.
            </p>
          </div>

          <div className="lobby-actions split-actions">
            <button className="exam-secondary-button" onClick={openAdminPanel}>
              Open Review Admin
            </button>
            <button className="exam-primary-button" disabled={examLoading} onClick={startExam}>
              {examLoading ? 'Loading...' : 'Begin Exam'}
            </button>
          </div>
          {examError && <p className="lobby-error">{examError}</p>}
        </section>
      </main>
    )
  }

  if (phase === 'admin') {
    return (
      <main className="admin-shell">
        <header className="admin-header">
          <div>
            <div className="aws-badge">Question Review</div>
            <h1>Question Review Panel</h1>
            <p>
              Review imported dump questions, edit the normalized version, and approve or reject each item.
            </p>
          </div>
          <div className="admin-header-actions">
            <button
              className="exam-primary-button"
              disabled={reviewActionLoading || !statusCounts['draft']}
              onClick={handleApproveAllDrafts}
            >
              Approve All Drafts
            </button>
            <button className="exam-secondary-button" onClick={() => setPhase('landing')}>
              Back To Lobby
            </button>
          </div>
        </header>

        <section className="admin-layout">
          <aside className="admin-sidebar">
            <div className="admin-sidebar-header">
              <strong>Questions</strong>
              <span>{reviewQuestions.length} items</span>
            </div>

            <div className="admin-filter-bar">
              {['all', 'draft', 'approved', 'rejected'].map((status) => (
                <button
                  className={`admin-filter-button ${adminStatusFilter === status ? 'active' : ''}`}
                  key={status}
                  onClick={() => setAdminStatusFilter(status)}
                >
                  {status} ({statusCounts[status] ?? 0})
                </button>
              ))}
            </div>

            <div className="admin-search-wrapper">
              <input
                className="admin-search-input"
                placeholder="Search prompt or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {reviewLoading ? <p className="admin-message">Loading review items...</p> : null}
            {reviewError ? <p className="admin-error">{reviewError}</p> : null}

            <div className="admin-question-list">
              {filteredReviewQuestions.map((question) => (
                <button
                  className={`admin-question-item ${
                    question.id === selectedReviewId ? 'active' : ''
                  }`}
                  key={question.id}
                  onClick={() => {
                    setSelectedReviewId(question.id)
                    setReviewNotice('')
                  }}
                >
                  <span className="admin-question-number">
                    Q{question.sourceNumber ?? question.id.slice(0, 4)}
                  </span>
                  <strong>{question.prompt || 'Untitled question'}</strong>
                  <span className={`admin-status-tag ${question.status}`}>{question.status}</span>
                </button>
              ))}
            </div>
          </aside>

          <section className="admin-editor">
            {selectedReviewQuestion ? (
              <>
                <div className="admin-import-card">
                  <div className="admin-import-header">
                    <div>
                      <h2>Import Questions</h2>
                      <p>Import from raw text dump, paste JSON, or auto-generate with AI.</p>
                    </div>
                    <button
                      className="exam-primary-button"
                      disabled={importLoading}
                      onClick={importTab === 'ai' ? handleImportAi : importTab === 'json' ? handleImportJson : handleImportDump}
                    >
                      {importLoading ? 'Processing...' : importTab === 'ai' ? 'Generate ✨' : `Import ${importTab === 'json' ? 'JSON' : 'Dump'}`}
                    </button>
                  </div>

                  <div className="admin-import-tabs">
                    <button
                      className={`admin-import-tab ${importTab === 'ai' ? 'active' : ''}`}
                      onClick={() => setImportTab('ai')}
                    >
                      Generate AI ✨
                    </button>
                    <button
                      className={`admin-import-tab ${importTab === 'json' ? 'active' : ''}`}
                      onClick={() => setImportTab('json')}
                    >
                      JSON (from AI)
                    </button>
                    <button
                      className={`admin-import-tab ${importTab === 'dump' ? 'active' : ''}`}
                      onClick={() => setImportTab('dump')}
                    >
                      Raw Dump
                    </button>
                  </div>

                  <div className="admin-form-grid compact-form-grid">
                    <label className="admin-field">
                      <span>Source Reference</span>
                      <input
                        value={importSourceRef}
                        onChange={(event) => setImportSourceRef(event.target.value)}
                      />
                    </label>

                    {importTab === 'ai' ? (
                      <>
                        <label className="admin-field wide-field">
                           <span>Target Domain</span>
                           <select value={importAiDomain} onChange={e => setImportAiDomain(e.target.value)}>
                              <option value="all">Mix (Semua Domain)</option>
                              <option value="Design Secure Architectures">Design Secure Architectures</option>
                              <option value="Design Resilient Architectures">Design Resilient Architectures</option>
                              <option value="Design High-Performing Architectures">Design High-Performing Architectures</option>
                              <option value="Design Cost-Optimized Architectures">Design Cost-Optimized Architectures</option>
                           </select>
                        </label>
                        <label className="admin-field wide-field">
                           <span>Jumlah Soal (Maksimal 30)</span>
                           <input type="number" min={1} max={30} value={importAiCount} onChange={e => setImportAiCount(parseInt(e.target.value) || 5)} />
                        </label>
                      </>
                    ) : importTab === 'json' ? (
                      <label className="admin-field wide-field">
                        <span>JSON Array</span>
                        <textarea
                          rows={10}
                          placeholder={'[\n  {\n    "domain": "Resilient Architectures",\n    "type": "single",\n    "prompt": "A company runs...",\n    "options": [\n      { "id": "A", "text": "..." },\n      { "id": "B", "text": "..." },\n      { "id": "C", "text": "..." },\n      { "id": "D", "text": "..." }\n    ],\n    "correctAnswers": ["A"],\n    "explanation": "..."\n  }\n]'}
                          value={importJsonText}
                          onChange={(event) => setImportJsonText(event.target.value)}
                        />
                      </label>
                    ) : (
                      <label className="admin-field wide-field">
                        <span>Raw Dump Text</span>
                        <textarea
                          rows={10}
                          value={importRawText}
                          onChange={(event) => setImportRawText(event.target.value)}
                        />
                      </label>
                    )}
                  </div>

                  {importNotice ? <div className="admin-import-notice">{importNotice}</div> : null}
                </div>

                <div className="admin-summary-grid">
                  <div>
                    <span>Status</span>
                    <strong>{selectedReviewQuestion.status}</strong>
                  </div>
                  <div>
                    <span>Source</span>
                    <strong>{selectedReviewQuestion.sourceRef}</strong>
                  </div>
                  <div>
                    <span>Type</span>
                    <strong>{selectedReviewQuestion.type}</strong>
                  </div>
                  {selectedReviewQuestion.issues && selectedReviewQuestion.issues.length > 0 && (
                    <div style={{ gridColumn: 'span 3' }}>
                      <span>Issues</span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                        {selectedReviewQuestion.issues.map(issue => (
                          <strong key={issue} style={{ color: '#dc2626', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                            {issue.replace(/_/g, ' ').toUpperCase()}
                          </strong>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="admin-form-grid">
                  <label className="admin-field wide-field">
                    <span>Prompt</span>
                    <textarea
                      rows={5}
                      value={reviewDraft.prompt}
                      onChange={(event) => updateDraftField('prompt', event.target.value)}
                    />
                  </label>

                  <label className="admin-field">
                    <span>Domain</span>
                    <input
                      value={reviewDraft.domain}
                      onChange={(event) => updateDraftField('domain', event.target.value)}
                    />
                  </label>

                  <label className="admin-field">
                    <span>Difficulty</span>
                    <input
                      value={reviewDraft.difficulty}
                      onChange={(event) => updateDraftField('difficulty', event.target.value)}
                    />
                  </label>

                  <label className="admin-field">
                    <span>Type</span>
                    <select
                      value={reviewDraft.type}
                      onChange={(event) =>
                        updateDraftField('type', event.target.value as ReviewDraft['type'])
                      }
                    >
                      <option value="single">single</option>
                      <option value="multiple">multiple</option>
                    </select>
                  </label>

                  <label className="admin-field wide-field">
                    <span>Correct Answers</span>
                    <input
                      placeholder="A, C"
                      value={reviewDraft.correctAnswers}
                      onChange={(event) => updateDraftField('correctAnswers', event.target.value)}
                    />
                  </label>

                  <label className="admin-field wide-field">
                    <span>Explanation</span>
                    <textarea
                      rows={5}
                      value={reviewDraft.explanation}
                      onChange={(event) => updateDraftField('explanation', event.target.value)}
                    />
                  </label>
                </div>

                <div className="admin-options-card">
                  <h2>Answer Options</h2>
                  <div className="admin-options-list">
                    {reviewDraft.options.map((option, index) => (
                      <label className="admin-option-row" key={option.id}>
                        <span>{option.id}</span>
                        <input
                          value={option.text}
                          onChange={(event) => updateDraftOption(index, event.target.value)}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="admin-meta-grid">
                  <div className="admin-meta-card">
                    <h2>Issue Flags</h2>
                    {selectedReviewQuestion.issues?.length ? (
                      <div className="admin-tag-list">
                        {selectedReviewQuestion.issues.map((issue) => (
                          <span className="admin-issue-tag" key={issue}>
                            {issue}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p>No issues reported.</p>
                    )}
                  </div>

                  <div className="admin-meta-card">
                    <h2>Raw Source</h2>
                    <pre>{selectedReviewQuestion.rawBlock || 'No raw block saved.'}</pre>
                  </div>
                </div>

                <div className="admin-action-bar">
                  <div>
                    {reviewNotice ? <span className="admin-notice">{reviewNotice}</span> : null}
                  </div>
                  <div className="admin-action-buttons">
                    <button
                      className="exam-secondary-button"
                      disabled={reviewActionLoading}
                      onClick={handleSaveReviewQuestion}
                    >
                      Save Draft
                    </button>
                    <button
                      className="exam-danger-button"
                      disabled={reviewActionLoading}
                      onClick={() => handleUpdateReviewStatus('reject')}
                    >
                      Reject
                    </button>
                    <button
                      className="exam-primary-button"
                      disabled={reviewActionLoading}
                      onClick={() => handleUpdateReviewStatus('approve')}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="admin-empty-state">
                <h2>No review item selected</h2>
                <p>Import dump questions or select one from the left panel to begin.</p>
              </div>
            )}
          </section>
        </section>
      </main>
    )
  }

  if (phase === 'review') {
    return (
      <main className="exam-frame review-frame">
        <header className="exam-topbar">
          <div className="exam-topbar-left">
            <span className="exam-brand">AWS Mock Exam</span>
            <span className="exam-separator">|</span>
            <span>Section Review</span>
          </div>
          <div className="exam-topbar-center">
            <span className="exam-session-label">Review Screen</span>
            <span>Review all responses before you submit</span>
          </div>
          <div className={`exam-timer ${remainingSeconds < 300 ? 'warning' : ''}`}>
            Time Remaining: {formatTime(remainingSeconds)}
          </div>
        </header>

        <section className="review-summary-page">
          <div className="exam-utility-bar review-utility-bar">
            <div className="exam-utility-group">
              <span className="exam-utility-label">Section</span>
              <strong>AWS Solutions Architect Associate</strong>
            </div>
            <div className="exam-utility-group">
              <span className="exam-utility-label">Review Status</span>
              <strong>{answeredCount} of {examQuestions.length} answered</strong>
            </div>
            <div className="exam-utility-group subdued">
              <span className="exam-utility-label">Next Action</span>
              <strong>Return to any item or submit section</strong>
            </div>
          </div>

          <div className="review-summary-header">
            <h1>Review Your Responses</h1>
            <p>
              Verify each item status before submission. You can reopen any question to revise your response.
            </p>
          </div>

          <div className="review-summary-stats">
            <div>
              <span>Answered</span>
              <strong>{answeredCount}</strong>
            </div>
            <div>
              <span>Not Answered</span>
              <strong>{examQuestions.length - answeredCount}</strong>
            </div>
            <div>
              <span>Marked</span>
              <strong>{reviewCount}</strong>
            </div>
          </div>

          <div className="exam-coaching-strip review-coaching-strip" aria-label="Section review guidance">
            <span className="exam-coaching-label">Review Tip</span>
            <p>
              Revisit flagged items first, then verify prompts asking for BEST, MOST cost-effective, or LEAST operational overhead.
            </p>
          </div>

          <div className="review-table-card">
            <div className="review-table-header">
              <span>Question</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {examQuestions.map((question, index) => {
              const status = getQuestionStatus(question, selectedAnswers, markedQuestionIds)

              return (
                <div className="review-table-row" key={question.id}>
                  <span>Question {index + 1}</span>
                  <span className={`review-status-pill ${status}`}>{getStatusLabel(status)}</span>
                  <button
                    className="review-link-button"
                    onClick={() => {
                      setCurrentIndex(index)
                      backToExam()
                    }}
                  >
                    Review Item
                  </button>
                </div>
              )
            })}
          </div>

          <div className="review-footer-actions">
            <button className="exam-secondary-button" onClick={backToExam}>
              Return To Section
            </button>
            <button className="exam-danger-button" onClick={finishExam}>
              End Review And Submit
            </button>
          </div>
        </section>
      </main>
    )
  }

  if (phase === 'result') {
    return (
      <main className="exam-frame review-frame result-frame">
        <header className="exam-topbar">
          <div className="exam-topbar-left">
            <span className="exam-brand">AWS Mock Exam</span>
            <span className="exam-separator">|</span>
            <span>Score Report</span>
          </div>
          <div className="exam-topbar-center">
            <span className="exam-session-label">Results</span>
            <span>Section submitted successfully</span>
          </div>
          <div className="exam-timer">
            Submitted {submittedAt ? new Date(submittedAt).toLocaleTimeString() : '-'}
          </div>
        </header>

        <section className="result-page-card result-shell-card">
          <div className="exam-utility-bar result-utility-bar">
            <div className="exam-utility-group">
              <span className="exam-utility-label">Section</span>
              <strong>AWS Solutions Architect Associate</strong>
            </div>
            <div className="exam-utility-group">
              <span className="exam-utility-label">Score</span>
              <strong>{score} of {examQuestions.length} correct</strong>
            </div>
            <div className="exam-utility-group subdued">
              <span className="exam-utility-label">Mode</span>
              <strong>Post-exam review</strong>
            </div>
            <div className="exam-utility-group subdued">
              <span className="exam-utility-label">Detailed Review</span>
              <strong>{showDetailedReview ? 'Unlocked for study' : 'Hidden until opened'}</strong>
            </div>
          </div>

          <div className="result-hero">
            <div>
              <div className="aws-badge">Section Complete</div>
              <h1>Score Report</h1>
              <p>
                Review your performance summary and inspect each response with the correct answer rationale.
              </p>
            </div>

            <div className="result-score-box">
              <span className="result-score-label">Scaled Score</span>
              <strong>{scoreRate}%</strong>
              <span>
                {score} / {examQuestions.length} correct responses
              </span>
              <span>
                Marked for review: {reviewCount}
              </span>
            </div>
          </div>

          <div className="result-mini-stats">
            <div>
              <span>Answered</span>
              <strong>{answeredCount}</strong>
            </div>
            <div>
              <span>Marked</span>
              <strong>{reviewCount}</strong>
            </div>
            <div>
              <span>Time Remaining</span>
              <strong>{formatTime(remainingSeconds)}</strong>
            </div>
          </div>

          <div className="exam-coaching-strip result-coaching-strip" aria-label="SAA post-exam guidance">
            <span className="exam-coaching-label">Study Focus</span>
            <p>
              Review missed items by domain and note whether the mistake came from service selection, requirement prioritization, or cost-versus-resilience trade-offs.
            </p>
          </div>

          {!showDetailedReview ? (
            <section className="locked-review-card" aria-label="Locked detailed review">
              <div>
                <span className="review-question-label">Realistic Mode</span>
                <h2>Detailed answer review is hidden</h2>
                <p>
                  This score report keeps explanations and option-level feedback closed until you intentionally switch from exam mode to study mode.
                </p>
              </div>
              <button className="exam-primary-button" onClick={() => setShowDetailedReview(true)}>
                Open Detailed Review
              </button>
            </section>
          ) : null}

          <section className="domain-performance-card" aria-label="Domain performance analysis">
            <div className="domain-performance-header">
              <div>
                <span className="review-question-label">Domain Analysis</span>
                <h2>SAA Domain Performance</h2>
                <p>Use this breakdown to decide which architecture domain needs the next study block.</p>
              </div>
              <div className="domain-performance-summary">
                <div>
                  <span>Strongest</span>
                  <strong>{strongestDomain?.domain ?? '-'}</strong>
                </div>
                <div>
                  <span>Needs Review</span>
                  <strong>{weakestDomain?.domain ?? '-'}</strong>
                </div>
              </div>
            </div>

            <div className="domain-performance-grid">
              {domainPerformance.map((entry) => (
                <article className="domain-performance-item" key={entry.domain}>
                  <div className="domain-performance-row">
                    <div>
                      <h3>{entry.domain}</h3>
                      <p>
                        {entry.correct} / {entry.total} correct, {entry.answered} answered
                      </p>
                    </div>
                    <strong>{entry.accuracy}%</strong>
                  </div>

                  <div className="domain-progress-track" aria-hidden="true">
                    <span className="domain-progress-fill" style={{ width: `${entry.accuracy}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="error-analysis-card" aria-label="Error pattern analysis">
            <div className="domain-performance-header">
              <div>
                <span className="review-question-label">Error Analysis</span>
                <h2>Why Answers Were Missed</h2>
                <p>
                  These categories estimate the reasoning pattern behind incorrect responses so you can target the next study session.
                </p>
              </div>
            </div>

            {errorInsights.length > 0 ? (
              <div className="error-analysis-list">
                {errorInsights.map(({ insight, count }) => (
                  <article className="error-analysis-item" key={insight.label}>
                    <div className="error-analysis-topline">
                      <h3>{insight.label}</h3>
                      <span>{count} miss{count > 1 ? 'es' : ''}</span>
                    </div>
                    <p>{insight.description}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="error-analysis-empty">
                <strong>No recurring error patterns detected.</strong>
                <p>All answered items were correct in this attempt.</p>
              </div>
            )}
          </section>

          {showDetailedReview ? (
            <section className="review-list">
              {examQuestions.map((question, index) => {
                const selected = selectedAnswers[question.id] ?? []
                const isCorrect = arraysMatch(selected, question.correctAnswers)

                return (
                  <article className="review-card" key={question.id}>
                    <div className="review-card-header">
                      <div>
                        <span className="review-question-label">Item {index + 1}</span>
                        <h2>{question.prompt}</h2>
                      </div>
                      <span className={`result-badge ${isCorrect ? 'pass' : 'fail'}`}>
                        {isCorrect ? 'Correct Response' : 'Incorrect Response'}
                      </span>
                    </div>

                    <div className="review-meta-row">
                      <span>{question.domain}</span>
                      <span>
                        {question.type === 'single'
                          ? 'Single answer'
                          : `Select ${question.correctAnswers.length}`}
                      </span>
                    </div>

                    <div className="answer-review-grid">
                      {question.options.map((option) => {
                        const userPicked = selected.includes(option.id)
                        const isCorrectOption = question.correctAnswers.includes(option.id)

                        return (
                          <div
                            className={`answer-review ${userPicked ? 'user-picked' : ''} ${
                              isCorrectOption ? 'correct-option' : ''
                            }`}
                            key={option.id}
                          >
                            <span className="answer-letter">{option.id}</span>
                            <span>{option.text}</span>
                          </div>
                        )
                      })}
                    </div>

                    <div className="explanation-box">
                      <strong>Rationale</strong>
                      <p>{question.explanation}</p>
                    </div>
                  </article>
                )
              })}
            </section>
          ) : null}

          <div className="result-actions">
            {showDetailedReview ? (
              <button className="exam-secondary-button" onClick={() => setShowDetailedReview(false)}>
                Hide Detailed Review
              </button>
            ) : null}
            <button className="exam-secondary-button" onClick={() => setPhase('landing')}>
              Return To Lobby
            </button>
            <button className="exam-primary-button" onClick={startExam}>
              Launch New Attempt
            </button>
          </div>
        </section>
      </main>
    )
  }

  const questionStatus = getQuestionStatus(currentQuestion, selectedAnswers, markedQuestionIds)
  const selectedForCurrentQuestion = selectedAnswers[currentQuestion.id] ?? []

  return (
    <main className="exam-frame">
      <header className="exam-topbar">
        <div className="exam-topbar-left">
          <span className="exam-brand">AWS Mock Exam</span>
          <span className="exam-separator">|</span>
          <span>SAA-C03</span>
        </div>
        <div className="exam-topbar-center">
          <span className="exam-session-label">Delivery Screen</span>
          <span>Question {currentIndex + 1} of {examQuestions.length}</span>
        </div>
        <div className={`exam-timer ${remainingSeconds < 300 ? 'warning' : ''}`}>
          Time Remaining: {formatTime(remainingSeconds)}
        </div>
      </header>

      <section className="exam-body-layout">
        <aside className="navigator-panel">
          <div className="navigator-header">
            <div className="navigator-title">Question Navigator</div>
            <p>Select a number to jump directly to a question.</p>
          </div>
          <div className="navigator-summary-grid">
            <div>
              <span>Answered</span>
              <strong>{answeredCount}</strong>
            </div>
            <div>
              <span>Open</span>
              <strong>{examQuestions.length - answeredCount}</strong>
            </div>
            <div>
              <span>Flagged</span>
              <strong>{reviewCount}</strong>
            </div>
          </div>
          <div className="navigator-grid">
            {examQuestions.map((question, index) => {
              const status = getQuestionStatus(question, selectedAnswers, markedQuestionIds)

              return (
                <button
                  className={`navigator-button ${status} ${index === currentIndex ? 'active' : ''}`}
                  key={question.id}
                  onClick={() => setCurrentIndex(index)}
                  title={`Question ${index + 1}: ${getStatusLabel(status)}`}
                >
                  <span className="navigator-button-number">{index + 1}</span>
                  {(status === 'marked' || status === 'answered-marked') && (
                    <span className="navigator-flag-indicator" aria-hidden="true">
                      F
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="navigator-legend">
            <div><span className="legend-box current"></span>Current</div>
            <div><span className="legend-box answered"></span>Answered</div>
            <div><span className="legend-box marked"></span>Marked</div>
            <div><span className="legend-box unanswered"></span>Not Answered</div>
          </div>
        </aside>

        <section className="question-workspace">
          <div className="question-toolbar">
            <div>
              <span className="question-meta-label">Domain</span>
              <strong>{currentQuestion.domain}</strong>
            </div>
            <div>
              <span className="question-meta-label">Response Type</span>
              <strong>
                {currentQuestion.type === 'single'
                  ? 'Select one answer'
                  : `Select ${currentQuestion.correctAnswers.length} answers`}
              </strong>
            </div>
            <div>
              <span className="question-meta-label">Status</span>
              <strong>{getStatusLabel(questionStatus)}</strong>
            </div>
          </div>

          <div className="exam-utility-bar">
            <div className="exam-utility-group">
              <span className="exam-utility-label">Section Tools</span>
              <strong>Calculator unavailable</strong>
            </div>
            <div className="exam-utility-group">
              <span className="exam-utility-label">Comments</span>
              <strong>Comments disabled for this demo</strong>
            </div>
            <div className="exam-utility-group subdued">
              <span className="exam-utility-label">Review Queue</span>
              <strong>{reviewCount} item(s) marked</strong>
            </div>
          </div>

          <div className="exam-coaching-strip" aria-label="Exam strategy guidance">
            <span className="exam-coaching-label">SAA Exam Tip</span>
            <p>
              Prioritize keywords around operational overhead, resilience, security boundaries, and cost trade-offs before comparing answer choices.
            </p>
          </div>

          <div className="question-content-card">
            <div className="question-content-header">
              <div className="question-stem-header">
                <span className="question-number-badge">Question {currentIndex + 1}</span>
                <h2>{currentQuestion.prompt}</h2>
              </div>

              <div className="question-side-meta">
                <span className="question-side-meta-label">Response Required</span>
                <strong>
                  {currentQuestion.type === 'single'
                    ? 'Select one answer'
                    : `Select ${currentQuestion.correctAnswers.length} answers`}
                </strong>
              </div>
            </div>

            <div className="question-stem-header">
              <div className="response-instruction">
              {currentQuestion.type === 'single'
                ? 'Select the best answer.'
                : 'Select the best answers that apply.'}
              </div>
            </div>

            <div className="choice-list">
              {currentQuestion.options.map((option) => {
                const picked = selectedForCurrentQuestion.includes(option.id)

                return (
                  <label className={`choice-row ${picked ? 'selected' : ''}`} key={option.id}>
                    <input
                      checked={picked}
                      name={currentQuestion.id}
                      onChange={() => updateAnswer(option.id)}
                      type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
                    />
                    <span className="choice-letter">{option.id}.</span>
                    <span className="choice-text">{option.text}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </section>
      </section>

      <footer className="exam-footer-bar">
        <div className="footer-left-actions">
          <button className="exam-secondary-button" onClick={clearAnswer}>
            Clear Answer
          </button>
          <button className="exam-secondary-button" onClick={toggleMarkForReview}>
            {markedQuestionIds.includes(currentQuestion.id)
              ? 'Remove Review Flag'
              : 'Flag For Review'}
          </button>
        </div>

        <div className="footer-right-actions">
          <button
            className="exam-secondary-button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((index) => index - 1)}
          >
            Previous
          </button>
          <button
            className="exam-primary-button"
            disabled={currentIndex === examQuestions.length - 1}
            onClick={() => setCurrentIndex((index) => index + 1)}
          >
            Next
          </button>
          <button className="exam-danger-button" onClick={goToReviewScreen}>
            Review Section
          </button>
        </div>
      </footer>
    </main>
  )
}

export default App
