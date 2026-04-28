import { GoogleGenAI, Type } from '@google/genai';
import crypto from 'node:crypto';

// Use gemini-2.5-flash as it is fast and supports structured outputs very well.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const schema = {
  type: Type.ARRAY,
  description: "Array of simulated AWS exam questions.",
  items: {
    type: Type.OBJECT,
    properties: {
      domain: {
        type: Type.STRING,
        description: "The targeted AWS domain (e.g. Design Secure Architectures)."
      },
      difficulty: {
        type: Type.STRING,
        description: "Must be 'medium' or 'hard'."
      },
      type: {
        type: Type.STRING,
        description: "Must be 'single' if only 1 correct answer, 'multiple' if more than 1 correct answer."
      },
      prompt: {
        type: Type.STRING,
        description: "The real-world scenario question prompt."
      },
      options: {
        type: Type.ARRAY,
        description: "List of options for the question.",
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING, description: "Option ID (A, B, C, D, etc.)" },
            text: { type: Type.STRING, description: "The answer content." }
          },
          required: ["id", "text"]
        }
      },
      correctAnswers: {
        type: Type.ARRAY,
        description: "Array of the correct option IDs (e.g. ['A'] or ['A', 'C'])",
        items: {
          type: Type.STRING
        }
      },
      explanation: {
        type: Type.STRING,
        description: "A detailed explanation of why the correct answers are right, and others are wrong."
      }
    },
    required: ["domain", "difficulty", "type", "prompt", "options", "correctAnswers", "explanation"]
  }
};

export async function generateQuestionsFromAI(domain, count) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const validCount = Math.min(Math.max(Number(count), 1), 30);
  
  let domainText = "4 main AWS SAA-C03 domains proportionally";
  if (domain && domain !== "all") {
    domainText = `the "${domain}" domain specifically`;
  }

  const promptText = `Act as an AWS Certified Solutions Architect - Professional. 
Your task is to generate valid JSON containing ${validCount} practice questions for the AWS Certified Solutions Architect - Associate (SAA-C03) exam.

Focus on: ${domainText}.

Criteria:
1. Scenario-based real-world architectural challenges.
2. Difficulty: Exam-level (medium or hard).
3. Distractors must be plausible.
4. Provide a detailed explanation for both correct and incorrect choices.
5. You MUST return exactly ${validCount} questions.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      }
    });

    const parsed = JSON.parse(response.text);
    return parsed;

  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate questions using AI.");
  }
}
