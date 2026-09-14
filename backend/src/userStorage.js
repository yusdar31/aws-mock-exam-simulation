import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDirectory = path.resolve(__dirname, '../data')
const userStorePath = path.join(dataDirectory, 'users.json')

async function ensureUserStore() {
  await mkdir(dataDirectory, { recursive: true })

  try {
    await readFile(userStorePath, 'utf8')
  } catch {
    await writeFile(userStorePath, '[]', 'utf8')
  }
}

export async function readUsers() {
  await ensureUserStore()
  const raw = await readFile(userStorePath, 'utf8')
  return JSON.parse(raw)
}

export async function writeUsers(users) {
  await ensureUserStore()
  await writeFile(userStorePath, JSON.stringify(users, null, 2), 'utf8')
}

export async function findUserByEmail(email) {
  const users = await readUsers()
  return users.find((u) => u.email === email.toLowerCase().trim()) ?? null
}

export async function findUserById(id) {
  const users = await readUsers()
  return users.find((u) => u.id === id) ?? null
}

export async function createUser(user) {
  const users = await readUsers()
  users.push(user)
  await writeUsers(users)
  return user
}

export async function updateUser(id, updates) {
  const users = await readUsers()
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) return null
  users[index] = { ...users[index], ...updates }
  await writeUsers(users)
  return users[index]
}
