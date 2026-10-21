export type ExamType = "ccp" | "saa" | "gcp-ace";
export type Language = "id" | "en";
export type Mode = "practice" | "simulation";
export type Phase =
  | "auth"
  | "lobby"
  | "exam"
  | "review"
  | "result"
  | "history"
  | "admin"
  | "coach"
  | "live"
  | "banks"
  | "study";
// Study tools have a separate route from the active exam.
export type Question = {
  id: string;
  examType: ExamType;
  lang: Language;
  domain: string;
  type: "single" | "multiple";
  prompt: string;
  options: { id: string; text: string }[];
  correctAnswers: string[];
  explanation: string;
  optionExplanations?: Record<string, string>;
  sourceUrl?: string;
  verifiedAt?: string;
  version: number;
  difficulty?: string;
  status?: "draft" | "approved" | "rejected";
  issues?: string[];
  updatedAt?: string;
  duplicateReviewed?: boolean;
};
export type Config = {
  examType: ExamType;
  lang: Language;
  mode: Mode;
  limit: number;
  duration: number;
  domains: string[];
  content?: "all" | "new" | "reviewed" | "archive";
};
export type Session = {
  id: string;
  userId: string;
  config: Config;
  questions: Question[];
  index: number;
  answers: Record<string, string[]>;
  flags: string[];
  deadline: number | null;
  remaining: number | null;
  elapsed: number;
  questionTimes: Record<string, number>;
  savedAt: number;
  state: "active" | "paused";
  assignmentId?: string;
  confidence?: Record<string, "sure" | "unsure">;
};
export type DomainPerformance = {
  domain: string;
  correct: number;
  total: number;
  accuracy: number;
};
export type Attempt = {
  id: string;
  userId: string;
  examType: ExamType;
  lang: Language;
  mode: Mode;
  submittedAt: number;
  score: number;
  totalQuestions: number;
  scoreRate: number;
  durationSeconds: number;
  domainPerformance: DomainPerformance[];
  session?: Session;
  synced?: boolean;
  assignmentId?: string;
};
export type User = {
  id: string;
  name: string;
  email: string;
  role: "student" | "admin" | "coach" | "guest";
};
