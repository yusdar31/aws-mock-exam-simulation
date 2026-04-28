import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDirectory = path.resolve(__dirname, '../data')
const questionStorePath = path.join(dataDirectory, 'questions.json')

async function ensureStore() {
  await mkdir(dataDirectory, { recursive: true })

  try {
    await readFile(questionStorePath, 'utf8')
  } catch {
    await writeFile(questionStorePath, '[]', 'utf8')
  }
}

export async function readQuestions() {
  await ensureStore()
  const raw = await readFile(questionStorePath, 'utf8')
  return JSON.parse(raw)
}

export async function writeQuestions(questions) {
  await ensureStore()
  await writeFile(questionStorePath, JSON.stringify(questions, null, 2), 'utf8')
}
