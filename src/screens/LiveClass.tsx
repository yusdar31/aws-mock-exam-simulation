import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/context";
import LanguageSelector from "../components/LanguageSelector";
import ClassroomHostDashboard from "../components/ClassroomHostDashboard";
import ClassroomShare from "../components/ClassroomShare";
import ClassroomPacket from "../components/ClassroomPacket";
import ClassroomHistory from "../components/ClassroomHistory";
import { rankParticipants } from "../lib/classroomResults";
import { CERTIFICATIONS, EXAM_TYPES } from "../lib/catalog";
import { loadBank } from "../lib/banks";
import { formatTime, selectQuestions, isQuestion, matches } from "../lib/exam";
import {
  classroomCall,
  readClassroomAccess,
  readClassroomHistory,
  saveClassroomAccess,
  rememberClassroom,
  forgetClassroom,
  type ClassroomAccess,
  type ClassroomState,
} from "../lib/classroom";
import type { Config, Question } from "../types";

export default function LiveClass({
  onPractice,
}: {
  onPractice: (questions: Question[]) => Promise<void>;
}) {
  const { t } = useLanguage();
  const [access, setAccess] = useState(readClassroomAccess);
  const [history, setHistory] = useState(readClassroomHistory);
  const [room, setRoom] = useState<ClassroomState | null>(null);
  const [packet, setPacket] = useState<Question[] | null>(null);
  const [followHost, setFollowHost] = useState(true);
  const followHostRef = useRef(true);
  function follow(value: boolean) {
    followHostRef.current = value;
    setFollowHost(value);
  }
  const [serverVersion, setServerVersion] = useState(1);
  const [ready, setReady] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [dirty, setDirty] = useState(false),
    [index, setIndex] = useState(0);
  const [type, setType] = useState<Config["examType"]>("ccp"),
    [lang, setLang] = useState<Config["lang"]>("id");
  const [tick, setTick] = useState(() => performance.now());
  const [clock, setClock] = useState(() => ({
    server: Date.now(),
    local: performance.now(),
  }));
  const anchor = useRef({ server: Date.now(), local: performance.now() });
  const stateRef = useRef(room),
    accessRef = useRef(access),
    pending = useRef<Record<string, string[]> | null>(null);
  const revision = useRef(0),
    inFlight = useRef<Promise<void> | null>(null),
    working = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const createToken = useRef(
      access?.role === "host" && !access.code
        ? access.token
        : crypto.randomUUID(),
    ),
    joinToken = useRef(
      access?.role === "member" && !access.code
        ? access.token
        : crypto.randomUUID(),
    );
  const now = clock.server + tick - clock.local;
  const running =
    room?.status === "running" &&
    room.startsAt !== null &&
    now >= room.startsAt &&
    room.endsAt !== null &&
    now < room.endsAt;
  const locked = !running || !!room?.member?.submitted || busy;

  const apply = useCallback((data: ClassroomState) => {
    if (accessRef.current?.code !== data.code) return;
    const nextClock = { server: data.serverNow, local: performance.now() };
    anchor.current = nextClock;
    setClock(nextClock);
    stateRef.current = data;
    setRoom(data);
    if (accessRef.current) rememberClassroom(accessRef.current, data);
    if (data.member) {
      revision.current = data.member.revision;
      if (data.status === "closed" && pending.current) {
        pending.current = null;
        setDirty(false);
        setError(
          "Waktu berakhir sebelum sebagian jawaban terkirim. Hasil memakai jawaban yang diterima server.",
        );
      }
      if (!pending.current) setAnswers(data.member.answers);
    }
  }, []);
  const sync = useCallback(async () => {
    if (inFlight.current || working.current || !accessRef.current?.code) return;
    const credential = accessRef.current;
    const request = (async () => {
      const snapshot = pending.current;
      const old = stateRef.current;
      const estimated =
        anchor.current.server + performance.now() - anchor.current.local;
      const canSave =
        snapshot &&
        old?.member &&
        !old.member.submitted &&
        old.status === "running" &&
        old.startsAt !== null &&
        estimated >= old.startsAt &&
        old.endsAt !== null &&
        estimated < old.endsAt;
      try {
        let data = await classroomCall(canSave ? "save" : "state", {
          ...credential,
          ...(canSave ? { answers: snapshot, revision: revision.current } : {}),
        });
        // All submissions are already immutable. The connected host finalizes the
        // session using the existing authorized RPC, including after reconnect.
        if (
          data.host &&
          data.status === "running" &&
          data.participants?.length &&
          data.participants.every((p) => p.submitted)
        ) {
          data = await classroomCall("finish", credential);
        }
        if (canSave && pending.current === snapshot) {
          pending.current = null;
          setDirty(false);
        }
        apply(data);
        if (!pending.current && data.status !== "closed") setError("");
      } catch (e) {
        if (e instanceof Error && e.message.includes("tab lain")) {
          pending.current = null;
          setDirty(false);
        }
        setError(
          e instanceof Error
            ? e.message
            : "Koneksi kelas terputus. Coba sinkronkan kembali.",
        );
        // Refresh the server state after a rejected write, including deadline and revision conflicts.
        if (canSave)
          try {
            apply(await classroomCall("state", credential));
          } catch {
            /* Retry on the next poll. */
          }
      }
    })();
    inFlight.current = request;
    try {
      await request;
    } finally {
      inFlight.current = null;
    }
  }, [apply]);
  useEffect(() => {
    void (async () => {
      try {
        const health = await classroomCall("health");
        setServerVersion(health.version || 1);
        setReady(true);
      } catch (e) {
        setReady(false);
        setError(
          e instanceof Error
            ? e.message
            : "Koneksi kelas terputus. Coba sinkronkan kembali.",
        );
      }
    })();
  }, []);
  useEffect(() => {
    const id = setInterval(() => setTick(performance.now()), 250);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!access?.code) return;
    void sync();
    let timer: ReturnType<typeof setTimeout>;
    const poll = () => {
      const current = stateRef.current;
      // Final host results do not change unless the host issues a command.
      // A participant follows published review only when synchronization is on.
      const final =
        current?.status === "closed" &&
        (current.host || (current.revealed && !followHostRef.current));
      const delay =
        document.visibilityState === "hidden"
          ? 10000
          : current?.revealed && !current.reviewSync
            ? 5000
            : 1500;
      timer = setTimeout(() => {
        if (!final && document.visibilityState !== "hidden") void sync();
        poll();
      }, delay);
    };
    poll();
    const online = () => void sync();
    window.addEventListener("online", online);
    document.addEventListener("visibilitychange", online);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("online", online);
      document.removeEventListener("visibilitychange", online);
    };
  }, [access, sync]);
  useEffect(() => {
    if (!dirty) return;
    const before = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", before);
    return () => window.removeEventListener("beforeunload", before);
  }, [dirty]);
  useEffect(() => {
    heading.current?.focus();
  }, [index, room?.status, room?.revealed, room?.member?.submitted, running]);

  async function run(action: string, payload: Record<string, unknown> = {}) {
    if (working.current) return null;
    working.current = true;
    setBusy(true);
    setError("");
    try {
      await inFlight.current;
      if (action === "submit" && pending.current && accessRef.current) {
        const snapshot = pending.current;
        apply(
          await classroomCall("save", {
            ...accessRef.current,
            answers: snapshot,
            revision: revision.current,
          }),
        );
        pending.current = null;
        setDirty(false);
      }
      const data = await classroomCall(action, {
        ...accessRef.current,
        ...payload,
        ...(action === "submit"
          ? {
              revision: revision.current,
              answers: stateRef.current?.member?.answers || answers,
            }
          : {}),
      });
      if (["create", "join", "recover", "claim_host"].includes(action)) {
        const credential: ClassroomAccess = {
          code: data.code,
          token: String(payload.token),
          role: ["create", "claim_host"].includes(action) ? "host" : "member",
        };
        saveClassroomAccess(credential);
        accessRef.current = credential;
        setAccess(credential);
        setHistory(readClassroomHistory());
      }
      apply(data);
      setReady(true);
      return data;
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Koneksi kelas terputus. Coba sinkronkan kembali.",
      );
      return null;
    } finally {
      working.current = false;
      setBusy(false);
    }
  }
  async function create(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    const limit = Number(form.get("count")),
      minutes = Number(form.get("minutes"));
    if (
      !Number.isInteger(limit) ||
      limit < 1 ||
      limit > 100 ||
      !Number.isInteger(minutes) ||
      minutes < 1 ||
      minutes > 180
    )
      return;
    setBusy(true);
    try {
      // Check persistence before creating a room; an unfinished request can be retried with the same host key.
      saveClassroomAccess({
        code: "",
        token: createToken.current,
        role: "host",
      });
      const bank = await loadBank(type, lang);
      const config: Config = {
        examType: type,
        lang,
        mode: "practice",
        limit,
        duration: minutes,
        domains: form.getAll("domains").map(String),
        content: type === "gcp-ace" ? "all" : "reviewed",
      };
      const questions =
        packet?.length === limit &&
        packet.every((q) => q.examType === type && q.lang === lang)
          ? packet
          : selectQuestions(bank, config);
      await run("create", {
        token: createToken.current,
        title: String(form.get("title")),
        minutes,
        questions,
        allowLate: form.get("allowLate") === "on",
      });
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Paket soal belum dapat dibuat.",
      );
    } finally {
      setBusy(false);
    }
  }
  function choose(option: string) {
    if (locked || !room) return;
    const q = room.questions[index];
    if (!q) return;
    const old = answers[q.id] || [];
    const selected =
      q.type === "single"
        ? [option]
        : old.includes(option)
          ? old.filter((v) => v !== option)
          : old.length < q.required
            ? [...old, option]
            : old;
    const next = { ...answers, [q.id]: selected };
    pending.current = next;
    setDirty(true);
    setAnswers(next);
    // The interval retries interrupted saves; no new deadline is created locally.
    setTimeout(() => void sync(), 200);
  }
  function leave() {
    if (
      dirty &&
      !confirm(t("Masih ada jawaban belum tersimpan. Keluar dari sesi?"))
    )
      return;
    saveClassroomAccess(null);
    accessRef.current = null;
    setAccess(null);
    stateRef.current = null;
    setRoom(null);
    pending.current = null;
    setAnswers({});
    setDirty(false);
    setIndex(0);
    setError("");
    createToken.current = crypto.randomUUID();
    joinToken.current = crypto.randomUUID();
    setHistory(readClassroomHistory());
  }
  function exportResults() {
    if (!room?.participants || room.status !== "closed") return;
    const cell = (s: string | number) =>
      '"' +
      String(s)
        .replaceAll('"', '""')
        .replace(/^(?:\s*[=+@-]|[\t\r\n])/, "'$&") +
      '"';
    const rows = [
      [
        t("Peringkat"),
        t("Nama peserta"),
        t("Benar"),
        t("Total soal"),
        t("Akurasi"),
      ],
      ...rankParticipants(room.participants).map((p) => [
        p.rank,
        p.name,
        p.score ?? 0,
        room.total,
        `${Math.round(((p.score || 0) / room.total) * 100)}%`,
      ]),
    ];
    const url = URL.createObjectURL(
      new Blob(
        ["\uFEFF" + rows.map((r) => r.map(cell).join(",")).join("\r\n")],
        { type: "text/csv;charset=utf-8" },
      ),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `kelas-${room.code}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const displayedIndex =
    room?.revealed && room.reviewSync && followHost
      ? room.reviewIndex || 0
      : index;
  const question =
    room?.questions[
      Math.min(displayedIndex, Math.max(0, (room?.questions.length || 1) - 1))
    ];
  const selected = question ? answers[question.id] || [] : [];
  const completed =
    room?.questions.filter(
      (q) =>
        (answers[q.id]?.length || 0) ===
        (q.required || q.correctAnswers?.length || 1),
    ).length || 0;
  const share = room ? `${location.origin}/#live/${room.code}` : "";
  const countdown =
    room?.startsAt && now < room.startsAt
      ? Math.ceil((room.startsAt - now) / 1000)
      : null;
  const wrong: Question[] = room?.revealed
    ? room.questions.flatMap((q) =>
        isQuestion(q) && !matches(room.member?.answers[q.id], q.correctAnswers)
          ? [q]
          : [],
      )
    : [];
  return (
    <div className="live-class">
      <header className="app-header">
        <a className="brand" href="#lobby">
          <strong>Exam Studio</strong>
        </a>
        <span>{t("Ujian bersama")}</span>
        <LanguageSelector />
      </header>
      <main className="page live-page" id="main-content" tabIndex={-1}>
        {error && (
          <div className="notice" role="alert">
            <p>{t(error)}</p>
            <button
              disabled={busy}
              onClick={() => {
                if (access?.code) void sync();
                else
                  void classroomCall("health")
                    .then(() => {
                      setReady(true);
                      setError("");
                    })
                    .catch((e) => setError(e.message));
              }}
            >
              {t("Coba sinkronkan")}
            </button>
          </div>
        )}
        {!room ? (
          <>
            <div className="page-heading">
              <div>
                <h1 ref={heading} tabIndex={-1}>
                  {t("Ujian bersama")}
                </h1>
                <p>{t("Soal sama, waktu bersama, jawaban masing-masing.")}</p>
              </div>
            </div>
            {access?.code ? (
              <section className="panel">
                <p>
                  {t("Menghubungkan kembali ke sesi {code}…", {
                    code: access.code,
                  })}
                </p>
                <button disabled={busy} onClick={leave}>
                  {t("Keluar dari sesi")}
                </button>
              </section>
            ) : (
              <div className="stack">
                <ClassroomHistory
                  items={history}
                  onSelect={(credential) => {
                    saveClassroomAccess(credential);
                    accessRef.current = credential;
                    setAccess(credential);
                  }}
                  onForget={(credential) => {
                    try {
                      forgetClassroom(credential.code, credential.role);
                      setHistory(readClassroomHistory());
                    } catch {
                      setError("Akses lokal belum dihapus.");
                    }
                  }}
                />
                {serverVersion >= 2 && (
                  <details className="panel">
                    <summary>{t("Pulihkan akses atau pindah host")}</summary>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const f = new FormData(e.currentTarget);
                        const host = f.get("role") === "host";
                        void run(host ? "claim_host" : "recover", {
                          code: String(f.get("code")).trim().toUpperCase(),
                          token: host ? createToken.current : joinToken.current,
                          [host ? "transferToken" : "recoveryToken"]: String(
                            f.get("secret"),
                          ).trim(),
                        });
                      }}
                    >
                      <label>
                        {t("Kode sesi")}
                        <input
                          name="code"
                          required
                          minLength={8}
                          maxLength={8}
                          defaultValue={location.hash.split("/")[1] || ""}
                        />
                      </label>
                      <label>
                        {t("Peran")}
                          <select name="role" aria-label={t('Peran')}>
                          <option value="member">{t("Peserta")}</option>
                          <option value="host">{t("Instruktur")}</option>
                        </select>
                      </label>
                      <label>
                        {t("Kode pemulihan dari host")}
                        <input
                          name="secret"
                          required
                          minLength={36}
                          maxLength={36}
                          autoComplete="off"
                        />
                      </label>
                      <button disabled={busy}>{t("Pulihkan akses")}</button>
                    </form>
                  </details>
                )}
                <div className="two-columns">
                  <section className="panel">
                    <h2>{t("Gabung sebagai peserta")}</h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const f = new FormData(e.currentTarget);
                        try {
                          saveClassroomAccess({
                            code: "",
                            token: joinToken.current,
                            role: "member",
                          });
                          void run("join", {
                            code: String(f.get("code")).trim().toUpperCase(),
                            token: joinToken.current,
                            name: String(f.get("name")).trim(),
                          });
                        } catch (e) {
                          setError((e as Error).message);
                        }
                      }}
                    >
                      <label>
                        {t("Nama peserta")}
                        <input
                          name="name"
                          required
                          maxLength={80}
                          autoComplete="name"
                        />
                      </label>
                      <label>
                        {t("Kode sesi")}
                        <input
                          name="code"
                          required
                          minLength={8}
                          maxLength={8}
                          defaultValue={location.hash.split("/")[1] || ""}
                          autoCapitalize="characters"
                          spellCheck={false}
                        />
                      </label>
                      <button
                        className="primary"
                        disabled={busy || ready !== true}
                      >
                        {busy ? t("Menghubungkan…") : t("Gabung sesi")}
                      </button>
                      <small>
                        {t("Tanpa akun. Nama Anda terlihat oleh instruktur.")}
                      </small>
                    </form>
                  </section>
                  <section className="panel">
                    <h2>{t("Buat sesi sebagai instruktur")}</h2>
                    <form
                      onSubmit={(e) => void create(e)}
                      onChange={() => setPacket(null)}
                    >
                      <label>
                        {t("Judul sesi")}
                        <input
                          name="title"
                          required
                          maxLength={120}
                          defaultValue="AWS re/Start"
                        />
                      </label>
                      <div className="two-columns">
                        <label>
                          {t("Sertifikasi")}
                          <select
                            aria-label={t('Sertifikasi')}
                            value={type}
                            onChange={(e) => {
                              const next = e.target.value as Config["examType"];
                              setType(next);
                              if (
                                !CERTIFICATIONS[next].languages.includes(lang)
                              )
                                setLang("id");
                            }}
                          >
                            {EXAM_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {CERTIFICATIONS[type].name}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          {t("Bahasa soal")}
                          <select
                            aria-label={t('Bahasa soal')}
                            value={lang}
                            onChange={(e) =>
                              setLang(e.target.value as Config["lang"])
                            }
                          >
                            <option value="id">Bahasa Indonesia</option>
                            <option
                              value="en"
                              disabled={
                                !CERTIFICATIONS[type].languages.includes("en")
                              }
                            >
                              English
                            </option>
                          </select>
                        </label>
                      </div>
                      <div className="two-columns">
                        <label>
                          {t("Jumlah soal")}
                          <input
                            name="count"
                            type="number"
                            min={1}
                            max={100}
                            step={1}
                            required
                            defaultValue={10}
                          />
                        </label>
                        <label>
                          {t("Durasi (menit)")}
                          <input
                            name="minutes"
                            type="number"
                            min={1}
                            max={180}
                            step={1}
                            required
                            defaultValue={15}
                          />
                        </label>
                      </div>
                      <ClassroomPacket
                        key={type + "-" + lang}
                        type={type}
                        lang={lang}
                        packet={packet}
                        onPacket={setPacket}
                      />
                      {serverVersion >= 2 && (
                        <label className="inline-control">
                          <input type="checkbox" name="allowLate" />
                          {t(
                            "Izinkan peserta terlambat dengan batas waktu yang sama",
                          )}
                        </label>
                      )}
                      <button disabled={busy || ready !== true}>
                        {busy ? t("Menyiapkan sesi…") : t("Buat sesi")}
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="page-heading">
              <div>
                <h1 ref={heading} tabIndex={-1}>
                  {room.title}
                </h1>
                <p>
                  {t("Kode sesi")}:{" "}
                  <strong className="room-code">{room.code}</strong> ·{" "}
                  {t("{count} peserta", { count: room.participantCount })}
                </p>
              </div>
              <div className="actions">
                <button disabled={busy} onClick={leave}>
                  {t("Keluar dari sesi")}
                </button>
              </div>
            </div>
            {room.host ? (
              <>
                <section className="panel">
                  <h2>
                    {t(
                      room.status === "waiting"
                        ? "Ruang tunggu"
                        : room.status === "closed"
                          ? "Sesi berakhir"
                          : "Sesi berlangsung",
                    )}
                  </h2>
                  <p>
                    {t(
                      "{count} soal · {minutes} menit · urutan soal dan opsi sama.",
                      { count: room.total, minutes: room.minutes },
                    )}
                  </p>
                  {room.status === "waiting" && (
                    <>
                      <ClassroomShare link={share} />
                      {(room.version || 1) >= 2 && (
                        <label className="inline-control">
                          <input
                            type="checkbox"
                            checked={!!room.allowLate}
                            disabled={busy}
                            onChange={(e) =>
                              void run("settings", {
                                allowLate: e.target.checked,
                              })
                            }
                          />
                          {t(
                            "Izinkan peserta terlambat dengan batas waktu yang sama",
                          )}
                        </label>
                      )}
                      <button
                        className="primary"
                        disabled={busy || !room.participantCount}
                        onClick={() => void run("start")}
                      >
                        {t("Mulai untuk semua peserta")}
                      </button>
                    </>
                  )}
                  {room.status === "running" && (
                    <>
                      <p role="status">
                        {t(
                          "{submitted}/{total} peserta sudah mengumpulkan. Peringkat otomatis muncul setelah semuanya terkumpul.",
                          {
                            submitted:
                              room.participants?.filter((p) => p.submitted)
                                .length || 0,
                            total: room.participantCount,
                          },
                        )}
                      </p>
                      <div className="actions">
                        <span className="live-timer" role="timer">
                          {countdown
                            ? t("Mulai dalam {seconds} detik", {
                                seconds: countdown,
                              })
                            : formatTime(
                                Math.max(
                                  0,
                                  Math.ceil(
                                    ((room.endsAt || now) - now) / 1000,
                                  ),
                                ),
                              )}
                        </span>
                        <button
                          disabled={busy}
                          onClick={() => {
                            if (
                              confirm(
                                t("Akhiri ujian untuk semua peserta sekarang?"),
                              )
                            )
                              void run("finish");
                          }}
                        >
                          {t("Akhiri sesi")}
                        </button>
                      </div>
                    </>
                  )}
                  {room.status === "closed" && (
                    <div className="actions">
                      <button
                        className="primary"
                        disabled={busy || room.revealed}
                        onClick={() => void run("reveal")}
                      >
                        {t(
                          room.revealed
                            ? "Pembahasan sudah dibuka"
                            : "Buka hasil & pembahasan",
                        )}
                      </button>
                      <button onClick={exportResults}>
                        {t("Unduh rekap CSV")}
                      </button>
                    </div>
                  )}
                </section>
                <ClassroomHostDashboard
                  key={room.code + "-" + room.status}
                  room={room}
                  busy={busy}
                  onAction={run}
                />
              </>
            ) : (
              <>
                <p className="live-save" role="status">
                  {t(
                    dirty
                      ? "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron."
                      : "Jawaban tersimpan di server.",
                  )}
                </p>
                {room.status === "waiting" || countdown ? (
                  <section className="panel">
                    <h2>{t("Ruang tunggu")}</h2>
                    <p>
                      {countdown
                        ? t("Mulai dalam {seconds} detik", {
                            seconds: countdown,
                          })
                        : t(
                            "Anda sudah bergabung. Tunggu instruktur memulai sesi.",
                          )}
                    </p>
                    {room.status === "waiting" && (room.version || 1) >= 2 && (
                      <button
                        className="primary"
                        disabled={busy}
                        onClick={() =>
                          void run("ready", { ready: !room.member?.ready })
                        }
                      >
                        {t(
                          room.member?.ready ? "Saya belum siap" : "Saya siap",
                        )}
                      </button>
                    )}
                  </section>
                ) : room.member?.submitted && room.status !== "closed" ? (
                  <section className="panel">
                    <h2>{t("Jawaban sudah dikumpulkan")}</h2>
                    <p>
                      {t(
                        "Tunggu sesi berakhir dan instruktur membuka pembahasan.",
                      )}
                    </p>
                  </section>
                ) : room.status === "closed" && !room.revealed ? (
                  <section className="panel">
                    <h2>{t("Sesi berakhir")}</h2>
                    <p>
                      {t("Tunggu instruktur membuka hasil dan pembahasan.")}
                    </p>
                  </section>
                ) : (
                  <>
                    <div className="section-header">
                      <span>
                        {room.member?.name} ·{" "}
                        {t("{count} lengkap", { count: completed })}/
                        {room.total}
                      </span>
                      {room.status !== "closed" ? (
                        <strong className="live-timer" role="timer">
                          {formatTime(
                            Math.max(
                              0,
                              Math.ceil(((room.endsAt || now) - now) / 1000),
                            ),
                          )}
                        </strong>
                      ) : (
                        <strong>
                          {t("Hasil")}: {room.member?.score}/{room.total} ·{" "}
                          {Math.round(
                            ((room.member?.score || 0) / room.total) * 100,
                          )}
                          %
                        </strong>
                      )}
                    </div>
                    {room.revealed && (
                      <label className="inline-control">
                        <input
                          type="checkbox"
                          checked={followHost}
                          onChange={(e) => follow(e.target.checked)}
                        />
                        {t("Ikuti pembahasan host")}
                      </label>
                    )}
                    <nav
                      className="live-numbers"
                      aria-label={t("Navigator soal")}
                    >
                      {room.questions.map((q, i) => (
                        <button
                          key={q.id}
                          aria-current={
                            displayedIndex === i ? "step" : undefined
                          }
                          className={
                            (answers[q.id]?.length || 0) === q.required
                              ? "answered"
                              : ""
                          }
                          onClick={() => {
                            follow(false);
                            setIndex(i);
                          }}
                          aria-label={t("Soal {index}, {status}{flag}", {
                            index: i + 1,
                            status: t(
                              (answers[q.id]?.length || 0) === q.required
                                ? "jawaban lengkap"
                                : "belum lengkap",
                            ),
                            flag: "",
                          })}
                        >
                          {i + 1}
                          {(answers[q.id]?.length || 0) === q.required && (
                            <span className="live-complete" aria-hidden="true">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </nav>
                    {question && (
                      <article className="panel">
                        <span className="eyebrow">
                          {t("Soal")} {displayedIndex + 1}/{room.total}
                        </span>
                        <h2 ref={heading} tabIndex={-1} lang={question.lang}>
                          {question.prompt}
                        </h2>
                        <fieldset disabled={locked}>
                          <legend>
                            {question.type === "single"
                              ? t("Pilih satu jawaban.")
                              : t("Pilih {count} jawaban.", {
                                  count: question.required,
                                })}
                          </legend>
                          <div className="choice-list">
                            {question.options.map((o) => (
                              <label
                                key={o.id}
                                className={`choice ${selected.includes(o.id) ? "selected" : ""}`}
                              >
                                <input
                                  type={
                                    question.type === "single"
                                      ? "radio"
                                      : "checkbox"
                                  }
                                  name={question.id}
                                  checked={selected.includes(o.id)}
                                  onChange={() => choose(o.id)}
                                  disabled={
                                    !selected.includes(o.id) &&
                                    question.type === "multiple" &&
                                    selected.length >= question.required
                                  }
                                />
                                <strong>{o.id}.</strong>
                                <span lang={question.lang}>{o.text}</span>
                              </label>
                            ))}
                          </div>
                        </fieldset>
                        {room.revealed && (
                          <div className="rationale" lang={question.lang}>
                            <strong>
                              {t("Jawaban benar")}:{" "}
                              {question.correctAnswers?.join(", ")}
                            </strong>
                            <p>{question.explanation}</p>
                          </div>
                        )}
                      </article>
                    )}
                    <div className="actions live-actions">
                      {room.revealed && (
                        <button
                          disabled={!wrong.length || busy}
                          onClick={() => void onPractice(wrong)}
                        >
                          {t("Latih soal salah")}
                        </button>
                      )}
                      <button
                        disabled={displayedIndex === 0}
                        onClick={() => {
                          follow(false);
                          setIndex(displayedIndex - 1);
                        }}
                      >
                        {t("Sebelumnya")}
                      </button>
                      <button
                        disabled={displayedIndex >= room.questions.length - 1}
                        onClick={() => {
                          follow(false);
                          setIndex(displayedIndex + 1);
                        }}
                      >
                        {t("Berikutnya")}
                      </button>
                      {room.status === "running" && (
                        <button
                          className="primary"
                          disabled={locked}
                          onClick={() => {
                            if (
                              confirm(
                                t(
                                  "Kumpulkan jawaban sekarang? Jawaban tidak dapat diubah setelah dikumpulkan.",
                                ),
                              )
                            )
                              void run("submit");
                          }}
                        >
                          {t("Kumpulkan jawaban")}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
