import { supabase } from "./supabase";
import { isQuestion } from "./exam";
import type {
  Attempt,
  ExamType,
  Language,
  Question,
  Session,
  User,
} from "../types";
import {
  getAttempts,
  getPendingAttempts,
  saveAttempt,
  getBankCache,
  saveBankCache,
} from "./storage";
export const API_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");
export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const response = await fetch(`${API_URL}/api${path}`, {
    ...init,
    signal: init.signal ?? AbortSignal.timeout(15000),
    headers: {
      "Content-Type": "application/json",
      ...(data.session
        ? { Authorization: `Bearer ${data.session.access_token}` }
        : {}),
      ...init.headers,
    },
  });
  const payload = await response
    .json()
    .catch(() => ({ error: "Layanan bank soal belum tersedia." }));
  if (!response.ok)
    throw new ApiError(payload.error || "Permintaan gagal.", response.status);
  if (
    !payload ||
    typeof payload !== "object" ||
    Array.isArray(payload) ||
    payload.error
  )
    throw new ApiError(
      "Respons layanan tidak valid. Periksa konfigurasi API.",
      502,
    );
  return payload as T;
}
export async function loadApproved(type: ExamType, lang: Language) {
  const items: Question[] = [];
  const excluded = new Set<string>();
  let page = 1;
  let source = "central";
  try {
    do {
      const payload = await api<{
        items: Question[];
        total: number;
        source?: string;
        excludedIds?: string[];
      }>(
        `/questions/approved?examType=${type}&lang=${lang}&page=${page}&limit=200`,
        { signal: AbortSignal.timeout(4000) },
      );
      if (
        !Array.isArray(payload.items) ||
        !payload.items.every(
          (q) => isQuestion(q) && q.examType === type && q.lang === lang,
        ) ||
        !Number.isFinite(payload.total)
      )
        throw new Error("Respons bank tidak valid.");
      source = payload.source || "central";
      items.push(...payload.items);
      for (const id of payload.excludedIds || []) excluded.add(id);
      if (items.length >= payload.total || !payload.items.length) break;
      page++;
    } while (page <= 25);
    const cache = { id: `${type}-${lang}`, items, excludedIds: [...excluded] };
    await saveBankCache(cache).catch(() => {});
    return { ...cache, offline: false, source };
  } catch (error) {
    const cached = await getBankCache(`${type}-${lang}`);
    if (cached) return { ...cached, offline: true, source: "cache" };
    throw error;
  }
}
export async function identity(fallback: User): Promise<User> {
  try {
    return await api<User>("/identity");
  } catch {
    try {
      const { data } = await supabase
        .from("app_roles")
        .select("role")
        .eq("user_id", fallback.id)
        .maybeSingle();
      const role = data?.role;
      return {
        ...fallback,
        role: ["admin", "coach"].includes(role) ? role : "student",
      };
    } catch {
      return { ...fallback, role: "student" };
    }
  }
}
export async function syncAttempt(attempt: Attempt): Promise<boolean> {
  if (attempt.userId === "guest") return false;
  try {
    const { error } = await supabase.from("exam_history").upsert(
      {
        attempt_id: attempt.id,
        user_id: attempt.userId,
        exam_type: attempt.examType,
        lang: attempt.lang,
        mode: attempt.mode,
        submitted_at: attempt.submittedAt,
        score: attempt.score,
        total_questions: attempt.totalQuestions,
        score_rate: attempt.scoreRate,
        duration_seconds: attempt.durationSeconds,
        domain_performance: attempt.domainPerformance,
        session_snapshot: attempt.session,
        assignment_id: attempt.assignmentId ?? null,
      },
      { onConflict: "attempt_id" },
    );
    if (error) return false;
    await saveAttempt({ ...attempt, synced: true });
    return true;
  } catch {
    return false;
  }
}
export async function loadHistory(
  userId: string,
  page = 0,
): Promise<Attempt[]> {
  const local = await getAttempts(userId, (page + 1) * 25);
  if (userId === "guest") return local;
  try {
    const { data, error } = await supabase
      .from("exam_history")
      .select(
        "id,attempt_id,user_id,exam_type,lang,mode,submitted_at,score,total_questions,score_rate,duration_seconds,domain_performance,session_snapshot,assignment_id",
      )
      .eq("user_id", userId)
      .order("submitted_at", { ascending: false })
      .range(page * 25, page * 25 + 24);
    if (error || !data) return local;
    const remote: Attempt[] = data.map((row) => ({
      id: row.attempt_id || String(row.id),
      userId: row.user_id,
      examType: row.exam_type,
      lang: row.lang || "en",
      mode: row.mode || "practice",
      submittedAt: Number(row.submitted_at),
      score: row.score,
      totalQuestions: row.total_questions,
      scoreRate: row.score_rate,
      durationSeconds: row.duration_seconds,
      domainPerformance: row.domain_performance || [],
      session: row.session_snapshot || undefined,
      synced: true,
      assignmentId: row.assignment_id,
    }));
    for (const attempt of remote) await saveAttempt(attempt);
    return [
      ...new Map([...local, ...remote].map((item) => [item.id, item])).values(),
    ].sort((a, b) => b.submittedAt - a.submittedAt);
  } catch {
    return local;
  }
}
export async function syncPending(userId: string) {
  for (const record of await getPendingAttempts(userId))
    if (!record.synced) await syncAttempt(record);
}
export async function syncSession(session: Session) {
  if (session.userId === "guest") return false;
  try {
    const { error } = await supabase.from("exam_sessions").upsert(
      {
        user_id: session.userId,
        snapshot: session,
        updated_at: session.savedAt,
      },
      { onConflict: "user_id" },
    );
    return !error;
  } catch {
    return false;
  }
}
export async function cloudSession(userId: string): Promise<Session | null> {
  if (userId === "guest") return null;
  try {
    const { data } = await supabase
      .from("exam_sessions")
      .select("snapshot")
      .eq("user_id", userId)
      .maybeSingle();
    return data?.snapshot ?? null;
  } catch {
    return null;
  }
}
export async function clearCloudSession(userId: string) {
  if (userId !== "guest")
    await supabase.from("exam_sessions").delete().eq("user_id", userId);
}
