import express from 'express'
import { config } from './config.js'
import { questionRouter } from './routes/questions.js'
import { startAutoGenerator } from './scheduler.js'

const app = express()

app.use((_, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(express.json({ limit: '10mb' }))

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/questions', questionRouter)

app.use((error, _request, response, _next) => {
  response.status(500).json({
    error: error instanceof Error ? error.message : 'Unknown server error',
  })
})

app.listen(config.port, () => {
  console.log(`Backend listening on http://localhost:${config.port}`)
  startAutoGenerator()
})
