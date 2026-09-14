import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail, findUserById, createUser, updateUser } from './_lib/storage.js'

const JWT_SECRET = process.env.JWT_SECRET ?? 'aws-mock-exam-default-secret-change-in-production'

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: '30d' }
  )
}

function sanitizeUser(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    createdAt: user.createdAt,
    examHistory: user.examHistory ?? [],
  }
}

function verifyToken(authHeader) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null
  try {
    return jwt.verify(authHeader.split(' ')[1], JWT_SECRET)
  } catch {
    return null
  }
}

function cors(response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export default async function handler(request, response) {
  cors(response)
  if (request.method === 'OPTIONS') return response.status(204).end()

  const { url, method, body } = request
  const path = url.replace(/^\/api\/auth\/?/, '')

  try {
    // POST /api/auth/register
    if (path === 'register' && method === 'POST') {
      const { name, email, password } = body ?? {}

      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return response.status(400).json({ error: 'Name minimal 2 karakter' })
      }
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return response.status(400).json({ error: 'Email tidak valid' })
      }
      if (!password || typeof password !== 'string' || password.length < 6) {
        return response.status(400).json({ error: 'Password minimal 6 karakter' })
      }

      const existing = findUserByEmail(email)
      if (existing) {
        return response.status(409).json({ error: 'Email sudah terdaftar' })
      }

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
      const token = generateToken(user)
      return response.status(201).json({ token, user: sanitizeUser(user) })
    }

    // POST /api/auth/login
    if (path === 'login' && method === 'POST') {
      const { email, password } = body ?? {}

      if (!email || !password) {
        return response.status(400).json({ error: 'Email dan password wajib diisi' })
      }

      const user = findUserByEmail(email)
      if (!user) {
        return response.status(401).json({ error: 'Email atau password salah' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return response.status(401).json({ error: 'Email atau password salah' })
      }

      const token = generateToken(user)
      return response.json({ token, user: sanitizeUser(user) })
    }

    // GET /api/auth/me
    if (path === 'me' && method === 'GET') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      return response.json({ user: sanitizeUser(user) })
    }

    // POST /api/auth/history (save)
    if (path === 'history' && method === 'POST') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      const record = body
      if (!record || !record.id) {
        return response.status(400).json({ error: 'Data history tidak valid' })
      }

      const history = user.examHistory ?? []
      history.unshift(record)
      if (history.length > 100) history.length = 100

      updateUser(user.id, { examHistory: history })
      return response.json({ saved: true, total: history.length })
    }

    // GET /api/auth/history
    if (path === 'history' && method === 'GET') {
      const decoded = verifyToken(request.headers.authorization)
      if (!decoded) return response.status(401).json({ error: 'Token tidak valid' })

      const user = findUserById(decoded.id)
      if (!user) return response.status(401).json({ error: 'User tidak ditemukan' })

      return response.json({ history: user.examHistory ?? [] })
    }

    return response.status(404).json({ error: 'Not found' })
  } catch (error) {
    return response.status(500).json({ error: error.message ?? 'Server error' })
  }
}
