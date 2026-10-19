import type { Attempt, Question } from "../types";
import { CERTIFICATIONS } from "./catalog";
// Text pagination avoids the canvas height limit on long reviews.
export async function exportPdf(
  attempt: Attempt,
  questions: Question[],
  english: boolean,
) {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF();
  let y = 18;
  const text = (value: string, bold = false) => {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(10);
    const normalized = value
      .replace(/[–—]/g, "-")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/→/g, " -> ")
      .replace(/↗/g, "");
    for (const line of pdf.splitTextToSize(normalized, 174) as string[]) {
      if (y > 278) {
        pdf.addPage();
        y = 18;
      }
      pdf.text(line, 18, y);
      y += 5;
    }
    y += 3;
  };
  text(
    `${CERTIFICATIONS[attempt.examType].name} - ${attempt.scoreRate}%`,
    true,
  );
  text(
    `${attempt.score}/${attempt.totalQuestions} | ${new Date(attempt.submittedAt).toISOString().slice(0, 10)}`,
  );
  text(
    english
      ? "Independent practice. This is not an official certification score."
      : "Latihan independen. Bukan skor sertifikasi resmi.",
  );
  for (const d of attempt.domainPerformance)
    text(`${d.domain}: ${d.correct}/${d.total} (${d.accuracy}%)`);
  for (const q of questions) {
    const index =
      attempt.session?.questions.findIndex((item) => item.id === q.id) ?? -1;
    text(`${index + 1}. ${q.prompt}`, true);
    text(`${q.id} - v${q.version}`);
    text(
      `${english ? "Your answer" : "Jawaban Anda"}: ${(attempt.session?.answers[q.id] || []).join(", ") || "-"} | ${english ? "Correct" : "Kunci"}: ${q.correctAnswers.join(", ")}`,
    );
    for (const option of q.options) {
      text(`${option.id}. ${option.text}`, true);
      text(
        q.optionExplanations?.[option.id] ||
          (q.correctAnswers.includes(option.id) ? q.explanation : ""),
      );
    }
    text(q.explanation);
    if (q.sourceUrl) text(q.sourceUrl);
  }
  pdf.save(`${attempt.examType}-review-${attempt.id}.pdf`);
}
