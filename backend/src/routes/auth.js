import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'
import { findUserByEmail, findUserById, createUser, updateUser } from '../userStorage.js'
import { config } from '../config.js'

export const authRouter = express.Router()

const JWT_SECRET = config.jwtSecret

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

// Register
authRouter.post('/register', async (request, response, next) => {
  try {
    const { name, email, password } = request.body ?? {}

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      response.status(400).json({ error: 'Name minimal 2 karakter' })
      return
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      response.status(400).json({ error: 'Email tidak valid' })
      return
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      response.status(400).json({ error: 'Password minimal 6 karakter' })
      return
    }

    const existing = await findUserByEmail(email)
    if (existing) {
      response.status(409).json({ error: 'Email sudah terdaftar' })
      return
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

    await createUser(user)
    const token = generateToken(user)

    response.status(201).json({
      token,
      user: sanitizeUser(user),
    })
  } catch (error) {
    next(error)
  }
})

// Login
authRouter.post('/login', async (request, response, next) => {
  try {
    const { email, password } = request.body ?? {}

    if (!email || !password) {
      response.status(400).json({ error: 'Email dan password wajib diisi' })
      return
    }

    const user = await findUserByEmail(email)
    if (!user) {
      response.status(401).json({ error: 'Email atau password salah' })
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      response.status(401).json({ error: 'Email atau password salah' })
      return
    }

    const token = generateToken(user)

    response.json({
      token,
      user: sanitizeUser(user),
    })
  } catch (error) {
    next(error)
  }
})

// Get current user profile
authRouter.get('/me', async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      response.status(401).json({ error: 'Token tidak ditemukan' })
      return
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await findUserById(decoded.id)

    if (!user) {
      response.status(401).json({ error: 'User tidak ditemukan' })
      return
    }

    response.json({ user: sanitizeUser(user) })
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      response.status(401).json({ error: 'Token tidak valid atau sudah expired' })
      return
    }
    next(error)
  }
})

// Save exam history
authRouter.post('/history', async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      response.status(401).json({ error: 'Token tidak ditemukan' })
      return
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await findUserById(decoded.id)

    if (!user) {
      response.status(401).json({ error: 'User tidak ditemukan' })
      return
    }

    const record = request.body
    if (!record || !record.id) {
      response.status(400).json({ error: 'Data history tidak valid' })
      return
    }

    const history = user.examHistory ?? []
    history.unshift(record)

    // Keep last 100 records
    if (history.length > 100) history.length = 100

    await updateUser(user.id, { examHistory: history })

    response.json({ saved: true, total: history.length })
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      response.status(401).json({ error: 'Token tidak valid' })
      return
    }
    next(error)
  }
})

// Get exam history
authRouter.get('/history', async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      response.status(401).json({ error: 'Token tidak ditemukan' })
      return
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await findUserById(decoded.id)

    if (!user) {
      response.status(401).json({ error: 'User tidak ditemukan' })
      return
    }

    response.json({ history: user.examHistory ?? [] })
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      response.status(401).json({ error: 'Token tidak valid' })
      return
    }
    next(error)
  }
})
