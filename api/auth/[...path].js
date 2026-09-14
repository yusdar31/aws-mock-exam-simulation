export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.json({
    url: request.url,
    method: request.method,
    query: request.query,
  })
}
