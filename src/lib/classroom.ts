import { supabase } from "./supabase";
import type { Question } from "../types";

export type ClassroomQuestion = Pick<
  Question,
  "id" | "prompt" | "domain" | "lang" | "type" | "options"
> & {
  required: number;
  correctAnswers?: string[];
  explanation?: string;
};
export type ClassroomAccess = {
  code: string;
  token: string;
  role: "host" | "member";
  title?: string;
  createdAt?: number;
  expiresAt?: number;
  status?: "waiting" | "running" | "closed";
};
export type ClassroomState = {
  version?: number;
  createdAt?: number;
  expiresAt?: number;
  allowLate?: boolean;
  reviewSync?: boolean;
  reviewIndex?: number;
  code: string;
  title: string;
  status: "waiting" | "running" | "closed";
  host: boolean;
  minutes: number;
  startsAt: number | null;
  endsAt: number | null;
  serverNow: number;
  revealed: boolean;
  total: number;
  participantCount: number;
  questions: ClassroomQuestion[];
  member?: {
    id: string;
    name: string;
    answers: Record<string, string[]>;
    revision: number;
    submitted: boolean;
    ready?: boolean;
    flags?: string[];
    accountLinked?: boolean;
    score: number | null;
  };
  participants?: {
    id: string;
    name: string;
    answered: number;
    submitted: boolean;
    ready?: boolean;
    score: number | null;
    lastSeen: number;
    answers: Record<string, string[]> | null;
  }[];
};
const key = "aws-classroom-access-v1";
const historyKey = "aws-classroom-rooms-v1";
function isAccess(value: unknown): value is ClassroomAccess {
  if (!value || typeof value !== "object") return false;
  const v = value as ClassroomAccess;
  return (
    typeof v.code === "string" &&
    /^(?:[A-F0-9]{8})?$/.test(v.code) &&
    typeof v.token === "string" &&
    /^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/i.test(v.token) &&
    ["host", "member"].includes(v.role)
  );
}
export function readClassroomHistory(): ClassroomAccess[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(historyKey) || "[]");
    return Array.isArray(value)
      ? value.filter(isAccess).filter((v) => v.code)
      : [];
  } catch {
    return [];
  }
}
export function readClassroomAccess(): ClassroomAccess | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(key) || "null");
    return isAccess(value) ? value : null;
  } catch {
    return null;
  }
}
export function saveClassroomAccess(value: ClassroomAccess | null) {
  try {
    if (value) {
      if (value.code)
        localStorage.setItem(
          historyKey,
          JSON.stringify([
            value,
            ...readClassroomHistory().filter(
              (v) => v.code !== value.code || v.role !== value.role,
            ),
          ]),
        );
      sessionStorage.setItem(key, JSON.stringify(value));
    } else sessionStorage.removeItem(key);
  } catch {
    throw new Error(
      "Penyimpanan browser diperlukan agar sesi kelas dapat dilanjutkan.",
    );
  }
}
export function rememberClassroom(
  access: ClassroomAccess,
  room: ClassroomState,
) {
  const metadata = {
    ...access,
    title: room.title,
    createdAt: room.createdAt,
    expiresAt: room.expiresAt,
    status: room.status,
  };
  const previous = readClassroomHistory().find(
    (v) => v.code === access.code && v.role === access.role,
  );
  if (JSON.stringify(previous) !== JSON.stringify(metadata))
    saveClassroomAccess(metadata);
}
export function forgetClassroom(code: string, role: ClassroomAccess["role"]) {
  localStorage.setItem(
    historyKey,
    JSON.stringify(
      readClassroomHistory().filter((v) => v.code !== code || v.role !== role),
    ),
  );
}
export async function classroomCall(
  action: string,
  payload: Record<string, unknown> = {},
): Promise<ClassroomState> {
  const { data, error } = await supabase
    .rpc("classroom_rpc", { action, payload })
    .abortSignal(AbortSignal.timeout(15000));
  if (error) {
    if (["PGRST202", "42883", "42P01"].includes(error.code))
      throw new Error(
        "Ujian bersama belum diaktifkan di server. Administrator perlu menjalankan migrasi kelas.",
      );
    throw new Error(
      error.message || "Koneksi kelas terputus. Coba sinkronkan kembali.",
    );
  }
  if (
    action !== "health" &&
    (!data ||
      typeof data.code !== "string" ||
      !Array.isArray(data.questions) ||
      !Number.isFinite(data.serverNow))
  )
    throw new Error("Respons sesi kelas tidak valid.");
  return data as ClassroomState;
}
