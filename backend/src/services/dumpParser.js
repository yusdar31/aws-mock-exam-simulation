const splitPattern = /(?:^|\n)\s*(\d+[\].]|\d+\.[A-Z]|\d+\.)\s*/g

function cleanBlock(block) {
  return block
    .replace(/^[-=*\s]+|[-=*\s]+$/g, '')
    .replace(/\r/g, '')
    .trim()
}

function normalizeLines(block) {
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function extractAnswerLine(lines) {
  return (
    lines.find((line) => /^ans\s*[-:.]/i.test(line)) ??
    lines.find((line) => /^correct answer/i.test(line)) ??
    lines.find((line) => /^[A-D][.)]\s/.test(line) && lines.some((value) => /correct/i.test(value))) ??
    ''
  )
}

function extractCorrectAnswerIds(block, answerLine) {
  const explicitMatches = answerLine.match(/[A-D]/g)

  if (explicitMatches?.length) {
    return [...new Set(explicitMatches)]
  }

  const chooseTwoMatches = block.match(/(?:Choose two|Choose three)/gi)
  if (chooseTwoMatches?.length) {
    const looseMatches = block.match(/\b[A-D]\b/g)
    return looseMatches ? [...new Set(looseMatches)].slice(0, 2) : []
  }

  return []
}

function extractOptions(lines) {
  const optionLines = lines.filter((line) => /^[A-D][.)]\s+/i.test(line))

  return optionLines.map((line) => {
    const match = line.match(/^([A-D])[.)]\s+(.*)$/i)
    return {
      id: match[1].toUpperCase(),
      text: match[2].trim(),
    }
  })
}

function extractPrompt(lines) {
  const promptLines = []

  for (const line of lines) {
    if (/^(ans\s*[-:.]|correct answer|keywords?:|option\s+[A-D]|general line:|conditions:|task:|requirements:)/i.test(line)) {
      break
    }

    if (/^[A-D][.)]\s+/i.test(line)) {
      break
    }

    promptLines.push(line)
  }

  return promptLines.join(' ').trim()
}

function extractExplanation(lines, answerLine) {
  const explanationStartIndex = lines.findIndex((line) => line === answerLine)

  if (explanationStartIndex === -1) {
    return ''
  }

  return lines
    .slice(explanationStartIndex + 1)
    .filter((line) => !/^[-=*]{5,}$/.test(line))
    .join(' ')
    .trim()
}

export function parseRawDump(rawText) {
  const normalized = rawText.replace(/\r/g, '').trim()
  if (!normalized) {
    return []
  }

  const parts = normalized.split(splitPattern).filter(Boolean)
  const results = []

  for (let index = 0; index < parts.length; index += 2) {
    const label = parts[index]
    const body = cleanBlock(parts[index + 1] ?? '')

    if (!body) {
      continue
    }

    const lines = normalizeLines(body)
    const answerLine = extractAnswerLine(lines)
    const options = extractOptions(lines)
    const prompt = extractPrompt(lines)
    const explanation = extractExplanation(lines, answerLine)

    results.push({
      sourceNumber: label.replace(/[^\d]/g, ''),
      rawBlock: body,
      parsed: {
        prompt,
        options,
        answerLine,
        correctAnswers: extractCorrectAnswerIds(body, answerLine),
        explanation,
      },
    })
  }

  return results
}
