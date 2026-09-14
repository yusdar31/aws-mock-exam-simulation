import crypto from 'node:crypto'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// ─── Storage ───

const DATA_DIR = '/tmp/mock-exam-data'
const USERS_FILE = join(DATA_DIR, 'users.json')

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
}

function readUsers() {
  ensureDir()
  try { return JSON.parse(readFileSync(USERS_FILE, 'utf8')) }
  catch { return [] }
}

function writeUsers(users) {
  ensureDir()
  writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8')
}

function findUserByEmail(email) {
  return readUsers().find((u) => u.email === email.toLowerCase().trim()) ?? null
}

function findUserById(id) {
  return readUsers().find((u) => u.id === id) ?? null
}

function createUser(user) {
  const users = readUsers()
  users.push(user)
  writeUsers(users)
  return user
}

function updateUser(id, updates) {
  const users = readUsers()
  const idx = users.findIndex((u) => u.id === id)
  if (idx === -1) return null
  users[idx] = { ...users[idx], ...updates }
  writeUsers(users)
  return users[idx]
}

// ─── Auth Helpers ───

const JWT_SECRET = process.env.JWT_SECRET ?? 'aws-mock-exam-default-secret-change-in-production'

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '30d' })
}

function sanitizeUser(user) {
  return { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt, examHistory: user.examHistory ?? [] }
}

function verifyToken(authHeader) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null
  try { return jwt.verify(authHeader.split(' ')[1], JWT_SECRET) }
  catch { return null }
}

// ─── Handler ───

export default async function handler(request, response) {
  // CORS
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (request.method === 'OPTIONS') return response.status(204).end()

  // Extract path: Vercel passes query param "...path" from catch-all route
  const action = request.query?.['...path'] ?? request.query?.path ?? ''

  try {
    // POST /api/auth/register
    if (action === 'register' && request.method === 'POST') {
      const { name, email, password } = request.body ?? {}

      if (!name || typeof name !== 'string' || name.trim().length < 2)
        return response.status(400).json({ error: 'Name minimal 2 karakter' })
      if (!email || typeof email !== 'string' || !email.includes('@'))
        return response.status(400).json({ error: 'Email tidak valid' })
      if (!password || typeof password !== 'string' || password.length < 6)
        return response.status(400).json({ error: 'Password minimal 6 karakter' })

      if (findUserByEmail(email))
        return response.status(409).json({ error: 'Email sudah terdaftar' })

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        createdAt: new Date().toISOString(),
        examHistory: [],
      }

      createUser(user)
      return response.status(201).json({ token: generateToken(user), user: sanitizeUser(user) })
    }

    // POST /api/auth/login
    if (action === 'login' && request.method === 'POST') {
      const { email, password } = request.body ?? {}
      if (!email || !password)
        return response.status(400).json({ error: 'Email dan password wajib diisi' })

      const user = findUserByEmail(email)
      if (!user) return response.status(401).json({ error: 'Email atau password salah' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return response.status(401).json({ error: 'Email atau password salah' })

      return response.json({ token: generateToken(user), user: sanitizeUser(user) })
    }

    // GET /api/auth/me
    if (action === 'me' && request.method === 'GET') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      return response.json({ user: sanitizeUser(user) })
    }

    // POST /api/auth/history
    if (action === 'history' && request.method === 'POST') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      const record = request.body
      if (!record || !record.id)
        return response.status(400).json({ error: 'Data history tidak valid' })

      const history = user.examHistory ?? []
      history.unshift(record)
      if (history.length > 100) history.length = 100
      updateUser(user.id, { examHistory: history })

      return response.json({ saved: true, total: history.length })
    }

    // GET /api/auth/history
    if (action === 'history' && request.method === 'GET') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      return response.json({ history: user.examHistory ?? [] })
    }

    return response.status(404).json({ error: 'Not found', action })
  } catch (error) {
    return response.status(500).json({ error: error.message ?? 'Server error' })
  }
}
