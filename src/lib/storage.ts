import type { Attempt, Session, Question } from "../types";
let database: Promise<IDBDatabase> | undefined;
function open() {
  database ??= new Promise((resolve, reject) => {
    const request = indexedDB.open("aws-exam-v2", 3);
    request.onupgradeneeded = () => {
      for (const store of ["sessions", "attempts", "adminQueue", "bankCache"])
        if (!request.result.objectStoreNames.contains(store))
          request.result.createObjectStore(store, { keyPath: "id" });
      const attempts = request.transaction!.objectStore("attempts");
      if (!attempts.indexNames.contains("userTime"))
        attempts.createIndex("userTime", ["userId", "submittedAt"]);
      if (!attempts.indexNames.contains("userPending"))
        attempts.createIndex("userPending", ["userId", "pending"]);
      const cursor = attempts.openCursor();
      cursor.onsuccess = () => {
        const row = cursor.result;
        if (row) {
          row.update({ ...row.value, pending: Number(!row.value.synced) });
          row.continue();
        }
      };
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      database = undefined;
      reject(
        new Error(
          "Penyimpanan browser tidak tersedia. Izinkan penyimpanan untuk menjaga progres.",
        ),
      );
    };
  });
  return database;
}
async function run<T>(
  store: string,
  mode: IDBTransactionMode,
  operation: (object: IDBObjectStore) => IDBRequest,
): Promise<T> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, mode),
      request = operation(transaction.objectStore(store));
    transaction.oncomplete = () => resolve(request.result as T);
    transaction.onerror = () =>
      reject(
        new Error(
          "Progres belum tersimpan. Periksa ruang penyimpanan browser.",
        ),
      );
    transaction.onabort = transaction.onerror;
  });
}
export async function saveSession(session: Session, replaceId?: string) {
  const db = await open();
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction("sessions", "readwrite"),
      store = transaction.objectStore("sessions");
    let conflict = false;
    const request = store.get(session.userId);
    request.onsuccess = () => {
      const previous = request.result;
      if (
        previous &&
        previous.attemptId !== session.id &&
        previous.attemptId !== replaceId
      ) {
        conflict = true;
        transaction.abort();
        return;
      }
      if (
        previous?.attemptId === session.id &&
        previous.savedAt > session.savedAt
      )
        return;
      store.put({ ...session, id: session.userId, attemptId: session.id });
    };
    transaction.oncomplete = () => resolve();
    transaction.onerror = transaction.onabort = () =>
      reject(
        new Error(
          conflict
            ? "Sesi berubah di tab lain. Muat ulang untuk melanjutkan sesi terbaru."
            : "Progres belum tersimpan. Periksa ruang penyimpanan browser.",
        ),
      );
  });
}
export async function getSession(userId: string): Promise<Session | null> {
  const value = await run<(Session & { attemptId: string }) | undefined>(
    "sessions",
    "readonly",
    (store) => store.get(userId),
  );
  return value ? { ...value, id: value.attemptId } : null;
}
export async function removeSession(userId: string, attemptId?: string) {
  const db = await open();
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction("sessions", "readwrite"),
      store = transaction.objectStore("sessions"),
      request = store.get(userId);
    request.onsuccess = () => {
      if (!attemptId || request.result?.attemptId === attemptId)
        store.delete(userId);
    };
    transaction.oncomplete = () => resolve();
    transaction.onerror = transaction.onabort = () =>
      reject(new Error("Sesi belum dapat dihapus."));
  });
}
export const saveAttempt = (attempt: Attempt) =>
  run("attempts", "readwrite", (store) =>
    store.put({ ...attempt, pending: Number(!attempt.synced) }),
  );
export async function getAttempts(
  userId: string,
  limit = 200,
): Promise<Attempt[]> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("attempts");
    const cursor = transaction
      .objectStore("attempts")
      .index("userTime")
      .openCursor(
        IDBKeyRange.bound([userId, 0], [userId, Number.MAX_SAFE_INTEGER]),
        "prev",
      );
    const result: Attempt[] = [];
    cursor.onsuccess = () => {
      const row = cursor.result;
      if (row && result.length < limit) {
        result.push(row.value as Attempt);
        row.continue();
      }
    };
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () =>
      reject(new Error("Riwayat belum dapat dibaca."));
  });
}
export const getPendingAttempts = (userId: string) =>
  run<Attempt[]>("attempts", "readonly", (store) =>
    store.index("userPending").getAll(IDBKeyRange.only([userId, 1])),
  );
export type QueuedEdit = {
  id: string;
  userId: string;
  action: "save" | "approve" | "reject" | "import";
  payload: unknown;
  savedAt: number;
};
export const queueEdit = (edit: QueuedEdit) =>
  run("adminQueue", "readwrite", (store) => store.put(edit));
export const getQueuedEdits = () =>
  run<QueuedEdit[]>("adminQueue", "readonly", (store) => store.getAll());
export const removeQueuedEdit = (id: string) =>
  run("adminQueue", "readwrite", (store) => store.delete(id));
export type BankCache = {
  id: string;
  items: Question[];
  excludedIds: string[];
};
export const saveBankCache = (cache: BankCache) =>
  run("bankCache", "readwrite", (store) => store.put(cache));
export const getBankCache = (id: string) =>
  run<BankCache | undefined>("bankCache", "readonly", (store) => store.get(id));
