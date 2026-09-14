export default function handler(_request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
