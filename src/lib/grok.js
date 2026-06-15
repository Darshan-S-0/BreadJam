/**
 * grok.js — BreadJam AI service using Groq Cloud API
 * Model: llama-3.3-70b-versatile (free tier, very fast)
 * Endpoint: https://api.groq.com/openai/v1/chat/completions
 *
 * Exports:
 *   generateAll(notes, mode)     → { summary, analogy, quiz }
 *   generateAnalogy(notes, mode) → { analogy }
 *   generateQuiz(notes)          → { quiz }
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'llama-3.3-70b-versatile'

// ── Per-mode style instructions ────────────────────────────────────────────
const MODE_INSTRUCTIONS = {
  genz: `Write in Gen Z slang — casual, punchy, energetic. Use phrases like "no cap", "lowkey", "slay", "bussin", "it's giving", "hits different", "understood the assignment", "rent free". Keep it TikTok-brained and fun. Short sentences.`,

  millen: `Write in Millennial tone — slightly self-deprecating, nostalgic, and relatable. Reference adulting struggles, 2000s pop culture. Use phrases like "I can't even", "adulting is hard", "the struggle is real", "throwback", "on fleek". Mix warmth with mild existential dread.`,

  linkedin: `Write in LinkedIn influencer corporate-speak. Use buzzwords: "synergy", "leverage", "circle back", "bandwidth", "pivot", "thought leadership", "value proposition", "stakeholders", "paradigm shift", "move the needle", "ecosystem". Sound like a TED Talk crossed with a motivational post.`,

  proper: `Write in clear, precise academic language. Be well-structured and educational. Use correct terminology. Suitable for a textbook or study guide. No slang, no filler — just clean, informative prose.`,
}

// ── Core fetch wrapper ─────────────────────────────────────────────────────
async function callGroq(messages) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY

  if (!apiKey) {
    throw new Error('VITE_GROQ_API_KEY is not set. Add it to your .env.local file.')
  }

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.8,
      response_format: { type: 'json_object' },
    }),
  })

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}))
    const msg = errBody?.error?.message || `Groq API error (${response.status})`
    throw new Error(msg)
  }

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content ?? ''

  try {
    return JSON.parse(text)
  } catch {
    throw new Error('Groq returned invalid JSON. Please try again.')
  }
}

// ── Exported functions ─────────────────────────────────────────────────────

/**
 * Full generation: summary + analogy + quiz in one call.
 * @param {string} notes - user's raw notes
 * @param {string} mode  - 'genz' | 'millen' | 'linkedin' | 'proper'
 * @returns {{ summary: string, analogy: string, quiz: QuizQuestion[] }}
 */
export async function generateAll(notes, mode) {
  const styleGuide = MODE_INSTRUCTIONS[mode] || MODE_INSTRUCTIONS.proper

  const messages = [
    {
      role: 'system',
      content:
        'You are BreadJam, a student study assistant that makes dense academic notes easy and fun to understand. You MUST respond with valid JSON only — no markdown, no code fences, no extra text whatsoever.',
    },
    {
      role: 'user',
      content: `Transform the following notes into study content using the "${mode}" translation style.

STYLE GUIDE: ${styleGuide}

NOTES:
"""
${notes}
"""

Respond with a JSON object using EXACTLY this structure (no extra keys):
{
  "summary": "2-4 sentence summary of the notes written in the specified style",
  "analogy": "1-2 sentence creative real-world analogy explaining the core concept in the specified style",
  "quiz": [
    {
      "question": "A clear question about an important concept from the notes",
      "options": ["option A", "option B", "option C", "option D"],
      "correct": 1
    },
    {
      "question": "A second question testing a different concept",
      "options": ["option A", "option B", "option C", "option D"],
      "correct": 0
    },
    {
      "question": "A third question, slightly more challenging",
      "options": ["option A", "option B", "option C", "option D"],
      "correct": 2
    }
  ]
}

Rules:
- "correct" is a zero-based index into "options" (0, 1, 2, or 3)
- Exactly 3 quiz questions, each with exactly 4 options
- Vary which index is correct across questions
- Questions should test genuine understanding, not trivial memorization`,
    },
  ]

  return callGroq(messages)
}

/**
 * Regenerate only the analogy (for "Try Another Analogy" button).
 * @param {string} notes
 * @param {string} mode
 * @returns {{ analogy: string }}
 */
export async function generateAnalogy(notes, mode) {
  const styleGuide = MODE_INSTRUCTIONS[mode] || MODE_INSTRUCTIONS.proper

  const messages = [
    {
      role: 'system',
      content: 'You are BreadJam, a student study assistant. Respond with valid JSON only — no markdown, no extra text.',
    },
    {
      role: 'user',
      content: `Create a FRESH and CREATIVE analogy for these notes using the "${mode}" style. Make it different and more inventive than a standard analogy.

STYLE GUIDE: ${styleGuide}

NOTES:
"""
${notes}
"""

Respond with JSON: { "analogy": "your 1-2 sentence analogy here" }`,
    },
  ]

  return callGroq(messages)
}

/**
 * Regenerate only the quiz (for "New Quiz" button).
 * @param {string} notes
 * @returns {{ quiz: QuizQuestion[] }}
 */
export async function generateQuiz(notes) {
  const messages = [
    {
      role: 'system',
      content: 'You are BreadJam, a student study assistant. Respond with valid JSON only — no markdown, no extra text.',
    },
    {
      role: 'user',
      content: `Generate 3 NEW and DIFFERENT multiple-choice questions based on these notes. Test different concepts than a typical quiz would.

NOTES:
"""
${notes}
"""

Respond with JSON:
{
  "quiz": [
    { "question": "Question text here", "options": ["A", "B", "C", "D"], "correct": 0 },
    { "question": "Question text here", "options": ["A", "B", "C", "D"], "correct": 3 },
    { "question": "Question text here", "options": ["A", "B", "C", "D"], "correct": 1 }
  ]
}

Rules:
- "correct" is the 0-based index of the right answer in "options"
- Exactly 3 questions with exactly 4 options each
- Vary which index is the correct answer
- Make questions test genuine understanding of the material`,
    },
  ]

  return callGroq(messages)
}
