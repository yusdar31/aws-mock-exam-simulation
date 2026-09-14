import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DATA_DIR = '/tmp/mock-exam-data'
const USERS_FILE = join(DATA_DIR, 'users.json')
const QUESTIONS_FILE = join(DATA_DIR, 'questions.json')

function ensureDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

// === Users ===

export function readUsers() {
  ensureDir()
  try {
    return JSON.parse(readFileSync(USERS_FILE, 'utf8'))
  } catch {
    return []
  }
}

export function writeUsers(users) {
  ensureDir()
  writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8')
}

export function findUserByEmail(email) {
  return readUsers().find((u) => u.email === email.toLowerCase().trim()) ?? null
}

export function findUserById(id) {
  return readUsers().find((u) => u.id === id) ?? null
}

export function createUser(user) {
  const users = readUsers()
  users.push(user)
  writeUsers(users)
  return user
}

export function updateUser(id, updates) {
  const users = readUsers()
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) return null
  users[index] = { ...users[index], ...updates }
  writeUsers(users)
  return users[index]
}

// === Questions ===

export function readQuestions() {
  ensureDir()
  try {
    return JSON.parse(readFileSync(QUESTIONS_FILE, 'utf8'))
  } catch {
    return []
  }
}

export function writeQuestions(questions) {
  ensureDir()
  writeFileSync(QUESTIONS_FILE, JSON.stringify(questions, null, 2), 'utf8')
}
