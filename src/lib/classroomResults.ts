import type { ClassroomQuestion, ClassroomState } from "./classroom";

export type ClassroomParticipant = NonNullable<
  ClassroomState["participants"]
>[number];

export function rankParticipants(participants: ClassroomParticipant[]) {
  const sorted = [...participants].sort(
    (a, b) =>
      (b.score ?? 0) - (a.score ?? 0) ||
      a.name.localeCompare(b.name) ||
      a.id.localeCompare(b.id),
  );
  let rank = 0;
  return sorted.map((participant, index) => {
    if (index === 0 || participant.score !== sorted[index - 1].score)
      rank = index + 1;
    return { ...participant, rank };
  });
}

export function answerOutcome(
  question: ClassroomQuestion,
  selected: string[] = [],
) {
  if (!selected.length) return "unanswered";
  const correct = question.correctAnswers;
  return correct &&
    selected.length === correct.length &&
    new Set(selected).size === selected.length &&
    selected.every((id) => correct.includes(id))
    ? "correct"
    : "incorrect";
}
