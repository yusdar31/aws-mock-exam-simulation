import { useLanguage } from "./i18n/context";
import StudioIcon from "./components/StudioIcon";
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import type { Attempt, Config, Phase, Question, Session, User } from "./types";
import {
  EXAM_MINUTES,
  makeAttempt,
  remaining,
  selectQuestions,
  isSession,
  canonicalDomain,
} from "./lib/exam";
import { loadBank } from "./lib/banks";
import { loadAvailableBank } from "./lib/availableBank";
import { CERTIFICATIONS, availableLanguage } from "./lib/catalog";
import { readConfig, writeConfig } from "./lib/preferences";
import { LearningProvider } from "./learning/LearningProvider";
import ReadingSettings from "./components/ReadingSettings";
import {
  clearCloudSession,
  cloudSession,
  identity,
  loadHistory,
  syncAttempt,
  syncPending,
  syncSession,
} from "./lib/api";
import {
  getAttempts,
  getSession,
  removeSession,
  saveAttempt,
  saveSession,
} from "./lib/storage";
import { supabase, authConfigured } from "./lib/supabase";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
const Auth = lazy(() => import("./screens/Auth"));
const Lobby = lazy(() => import("./screens/Lobby"));
const Exam = lazy(() => import("./screens/Exam"));
const Result = lazy(() => import("./screens/Result"));
const History = lazy(() => import("./screens/History"));
const Admin = lazy(() => import("./screens/Admin"));
const Study = lazy(() => import("./screens/Study"));
const QuestionBanks = lazy(() => import("./screens/QuestionBanks"));
const Coach = lazy(() => import("./screens/Coach"));
const LiveClass = lazy(() => import("./screens/LiveClass"));
const allowed: Phase[] = [
  "auth",
  "lobby",
  "exam",
  "review",
  "result",
  "history",
  "admin",
  "coach",
  "live",
  "study",
  "banks",
];
function route(): Phase {
  const part = location.hash.slice(1).split("/")[0] as Phase;
  return allowed.includes(part) ? part : "lobby";
}
function accrue(s: Session, now = Date.now()): Session {
  const delta =
    s.state === "active"
      ? Math.max(0, (Math.min(now, s.deadline ?? now) - s.savedAt) / 1000)
      : 0;
  const id = s.questions[s.index]?.id;
  return {
    ...s,
    savedAt: now,
    elapsed: s.elapsed + delta,
    remaining: remaining(s, now),
    questionTimes: id
      ? { ...s.questionTimes, [id]: (s.questionTimes[id] || 0) + delta }
      : s.questionTimes,
  };
}
export default function App() {
  const { t } = useLanguage();
  const [user, setUser] = useState<User | null>(null),
    [boot, setBoot] = useState(true),
    [phase, setPhase] = useState<Phase>(route);
  const [config, setConfig] = useState<Config>(readConfig);
  const [bankRevision, setBankRevision] = useState(0);
  const [pool, setPool] = useState<Question[]>([]),
    [loading, setLoading] = useState(true),
    [bankNotice, setBankNotice] = useState("");
  const [session, setSession] = useState<Session | null>(null),
    [saved, setSaved] = useState<Session | null>(null),
    [attempts, setAttempts] = useState<Attempt[]>([]),
    [result, setResult] = useState<Attempt | null>(null);
  const [notice, setNotice] = useState(""),
    [syncStatus, setSyncStatus] = useState("Progres disimpan di perangkat"),
    [busy, setBusy] = useState(false),
    [recovery, setRecovery] = useState(false);
  const sessionRef = useRef<Session | null>(null),
    userRef = useRef<User | null>(null),
    finalizing = useRef(false),
    completed = useRef(new Set<string>()),
    cloudTimer = useRef<ReturnType<typeof setTimeout> | null>(null),
    historyPage = useRef(0);
  const authEpoch = useRef(0);
  const saveGeneration = useRef(0);
  const starting = useRef(false);
  const releaseLock = useRef<(() => void) | null>(null);
  async function claimSession() {
    const account = userRef.current;
    if (releaseLock.current || !navigator.locks || !account) return true;
    return new Promise<boolean>((resolve) => {
      void navigator.locks
        .request(
          `exam-session-${account.id}`,
          { ifAvailable: true },
          async (lock) => {
            if (!lock) {
              resolve(false);
              return;
            }
            await new Promise<void>((release) => {
              releaseLock.current = release;
              resolve(true);
            });
          },
        )
        .catch(() => resolve(false));
    });
  }
  useEffect(() => () => releaseLock.current?.(), []);
  useEffect(() => {
    writeConfig(config);
  }, [config]);
  useEffect(() => {
    const titles: Record<Phase, string> = {
      lobby: "Ruang belajar",
      history: "Riwayat & perkembangan",
      result: "Evaluasi percobaan Anda",
      study: "Rencana & catatan",
      auth: "Masuk",
      exam: "Latihan",
      review: "Review sebelum submit",
      admin: "Admin",
      coach: "Ruang kelas",
      live: "Ujian bersama",
      banks: "Bank soal",
    };
    document.title =
      phase === "banks"
        ? `${t(titles[phase])} · Exam Studio`
        : `${t(titles[phase])} \u00b7 ${CERTIFICATIONS[config.examType].code} \u00b7 Exam Studio`;
  }, [phase, config.examType, t]);
  useEffect(() => {
    const focus = () => {
      const heading = [
        ...document.querySelectorAll<HTMLElement>("#main-content h1"),
      ].find((node) => node.getClientRects().length > 0);
      if (!heading) return false;
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      return true;
    };
    window.scrollTo(0, 0);
    const observer = new MutationObserver(() => {
      if (focus()) observer.disconnect();
    });
    if (!focus())
      observer.observe(document.getElementById("root")!, {
        childList: true,
        subtree: true,
      });
    return () => observer.disconnect();
  }, [phase]);
  const navigate = useCallback((next: Phase, id?: string) => {
    location.hash = next + (id ? `/${id}` : "");
    setPhase(next);
  }, []);
  const enter = useCallback(
    async (account: SupabaseUser) => {
      if (userRef.current?.id === account.id) {
        setBoot(false);
        return;
      }
      const epoch = ++authEpoch.current;
      const value = await identity({
        id: account.id,
        email: account.email || "",
        name: account.user_metadata?.name || "",
        role: "student",
      });
      if (epoch !== authEpoch.current) return;
      userRef.current = value;
      setUser(value);
      try {
        const { migrateLegacy } = await import("./lib/legacy");
        await migrateLegacy(value.id);
        const history = await loadHistory(value.id);
        if (epoch !== authEpoch.current) return;
        setAttempts(history);
        const [local, cloud] = await Promise.all([
          getSession(value.id),
          cloudSession(value.id),
        ]);
        if (epoch !== authEpoch.current) return;
        const next =
          !local || (cloud && cloud.savedAt > local.savedAt) ? cloud : local;
        if (isSession(next) && !history.some((a) => a.id === next.id)) {
          setSaved(next);
          if (!local || local.id === next.id) await saveSession(next);
        } else {
          setSaved(null);
          if (next) await removeSession(value.id);
        }
        const requested = route(),
          requestedId = location.hash.split("/")[1];
        if (requested === "live") {
          setPhase("live");
        } else if (requested === "result" && requestedId) {
          const found = history.find((a) => a.id === requestedId);
          if (found) {
            setResult(found);
            navigate("result", found.id);
          } else navigate("history");
        } else
          navigate(
            ["history", "admin", "coach", "study", "live", "banks"].includes(
              requested,
            )
              ? requested
              : "lobby",
            requested === "banks" ? requestedId : undefined,
          );
        void syncPending(value.id);
      } catch (error) {
        setNotice(
          error instanceof Error
            ? error.message
            : "Progres belum dapat dimuat.",
        );
        navigate("lobby");
      }
      setBoot(false);
    },
    [navigate],
  );
  useEffect(() => {
    let live = true;
    if (authConfigured) {
      void supabase.auth.getSession().then(({ data }) => {
        if (!live) return;
        if (data.session?.user) void enter(data.session.user);
        else setBoot(false);
      });
    } else setBoot(false);
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, data) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      if (data?.user && live)
        setTimeout(() => {
          if (live) void enter(data.user);
        }, 0);
      if (event === "SIGNED_OUT" && live) {
        authEpoch.current++;
        userRef.current = null;
        setUser(null);
        sessionRef.current = null;
        setSession(null);
        setSaved(null);
        setAttempts([]);
        setResult(null);
        navigate("auth");
      }
    });
    return () => {
      live = false;
      subscription.unsubscribe();
    };
  }, [enter, navigate]);
  useEffect(() => {
    const change = () => {
      const next = route();
      if (sessionRef.current && !["exam", "review"].includes(next)) {
        const paused = accrue(sessionRef.current);
        paused.state = "paused";
        if (paused.config.mode === "practice") paused.deadline = null;
        // Keep the in-memory snapshot available even if device storage fails.
        sessionRef.current = null;
        setSession(null);
        setSaved(paused);
        setBusy(true);
        ++saveGeneration.current;
        if (cloudTimer.current) clearTimeout(cloudTimer.current);
        void saveSession(paused)
          .then(() => {
            void syncSession(paused);
          })
          .catch((e) => setNotice(e.message))
          .finally(() => {
            releaseLock.current?.();
            releaseLock.current = null;
            setBusy(false);
          });
      }
      if ((next === "exam" || next === "review") && !sessionRef.current) {
        navigate("lobby");
        return;
      }
      if (next === "result") {
        const id = location.hash.split("/")[1];
        if (id && userRef.current)
          void getAttempts(userRef.current.id).then((list) => {
            const found = list.find((a) => a.id === id);
            if (route() === "result") {
              if (found) setResult(found);
              else navigate("history");
            }
          });
      }
      setPhase(next);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, [navigate]);
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      await Promise.resolve();
      setLoading(true);
      setBankNotice("");
      try {
        const bank = await loadAvailableBank(
          config.examType,
          config.lang,
          !!user,
        );
        if (!cancelled) {
          setPool(bank.questions);
          setBankNotice(bank.notice);
        }
      } catch {
        if (!cancelled) {
          setPool([]);
          setBankNotice("Bank soal belum dapat dimuat. Coba muat ulang.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [config.examType, config.lang, user, bankRevision]);
  const persist = useCallback(async (s: Session, cloud = true) => {
    const generation = ++saveGeneration.current;
    setSyncStatus("Menyimpan progres…");
    try {
      await saveSession(s);
      if (generation === saveGeneration.current)
        setSyncStatus("Progres tersimpan di perangkat");
      if (cloud && s.userId !== "guest") {
        if (cloudTimer.current) clearTimeout(cloudTimer.current);
        cloudTimer.current = setTimeout(() => {
          void syncSession(s).then((ok) => {
            if (
              generation !== saveGeneration.current ||
              userRef.current?.id !== s.userId
            )
              return;
            setSyncStatus(
              ok
                ? "Progres tersinkron"
                : "Progres lokal · cloud belum tersedia",
            );
          });
        }, 2000);
      }
    } catch (error) {
      setNotice(
        error instanceof Error ? error.message : "Progres belum tersimpan.",
      );
      return false;
    }
    return true;
  }, []);
  function update(updater: (s: Session) => Session) {
    if (!sessionRef.current || finalizing.current) return;
    const next = updater(accrue(sessionRef.current));
    sessionRef.current = next;
    setSession(next);
    void persist(next);
  }
  useEffect(() => {
    if (!sessionRef.current || !["exam", "review"].includes(phase)) return;
    const save = () => {
      if (sessionRef.current && !finalizing.current) {
        const next = accrue(sessionRef.current);
        sessionRef.current = next;
        void persist(next);
      }
    };
    const interval = setInterval(save, 15000);
    window.addEventListener("pagehide", save);
    const before = (e: BeforeUnloadEvent) => {
      save();
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", before);
    return () => {
      clearInterval(interval);
      window.removeEventListener("pagehide", save);
      window.removeEventListener("beforeunload", before);
    };
    // Save cadence depends on the attempt and phase, not answers or timer ticks.
  }, [session?.id, phase, persist]);
  useEffect(() => {
    const online = () => {
      if (userRef.current)
        void syncPending(userRef.current.id)
          .then(() => loadHistory(userRef.current!.id))
          .then(setAttempts);
    };
    window.addEventListener("online", online);
    return () => {
      window.removeEventListener("online", online);
      if (cloudTimer.current) clearTimeout(cloudTimer.current);
    };
  }, []);
  async function start(
    questions?: Question[],
    override?: Config,
    assignmentId?: string,
  ) {
    const account = userRef.current;
    if (!account || (loading && !questions) || busy || starting.current) return;
    starting.current = true;
    try {
      const nextConfig = override || config;
      if (!(await claimSession())) {
        setNotice(
          "Ujian sedang dibuka di tab lain. Jeda sesi di tab tersebut terlebih dahulu.",
        );
        return;
      }
      const stored = await getSession(account.id);
      const existing = sessionRef.current || stored || saved;
      if (
        existing &&
        !confirm(
          t(
            "Memulai percobaan baru akan menggantikan sesi yang belum selesai. Lanjutkan?",
          ),
        )
      ) {
        releaseLock.current?.();
        releaseLock.current = null;
        return;
      }
      const chosen =
        questions ||
        selectQuestions(
          pool,
          nextConfig,
          (nextConfig.content === "new"
            ? attempts
            : attempts.slice(0, 3)
          ).flatMap((a) => a.session?.questions.map((q) => q.id) || []),
        );
      if (!chosen.length) throw new Error("Tidak ada soal yang tersedia.");
      const now = Date.now(),
        duration =
          nextConfig.mode === "simulation"
            ? EXAM_MINUTES[nextConfig.examType]
            : nextConfig.duration;
      const next: Session = {
        id: crypto.randomUUID(),
        userId: account.id,
        config: nextConfig,
        questions: chosen,
        index: 0,
        answers: {},
        flags: [],
        deadline: duration ? now + duration * 60000 : null,
        remaining: duration ? duration * 60 : null,
        elapsed: 0,
        questionTimes: {},
        savedAt: now,
        state: "active",
        assignmentId,
      };
      await saveSession(next, existing?.id);
      sessionRef.current = next;
      setSession(next);
      setSaved(null);
      setNotice("");
      setConfig(nextConfig);
      navigate("exam");
      void persist(next);
    } catch (error) {
      releaseLock.current?.();
      releaseLock.current = null;
      setNotice(
        error instanceof Error ? error.message : "Ujian belum dapat dimulai.",
      );
    } finally {
      starting.current = false;
    }
  }
  async function finish() {
    const current = sessionRef.current;
    if (!current || finalizing.current || completed.current.has(current.id))
      return;
    finalizing.current = true;
    setBusy(true);
    try {
      const final = accrue(current);
      const attempt = makeAttempt(final);
      await saveAttempt(attempt);
      completed.current.add(current.id);
      if (cloudTimer.current) {
        clearTimeout(cloudTimer.current);
        cloudTimer.current = null;
      }
      await removeSession(current.userId, current.id).catch(() =>
        setNotice("Hasil tersimpan; sesi lokal belum dibersihkan."),
      );
      void clearCloudSession(current.userId).catch(() => {});
      sessionRef.current = null;
      releaseLock.current?.();
      releaseLock.current = null;
      setSession(null);
      setSaved(null);
      setResult(attempt);
      setAttempts((old) => [
        attempt,
        ...old.filter((a) => a.id !== attempt.id),
      ]);
      navigate("result", attempt.id);
      void syncAttempt(attempt).then((ok) => {
        if (ok) {
          setResult((old) =>
            old?.id === attempt.id ? { ...old, synced: true } : old,
          );
          setAttempts((old) =>
            old.map((a) => (a.id === attempt.id ? { ...a, synced: true } : a)),
          );
        }
      });
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Hasil belum tersimpan. Coba submit kembali.",
      );
    } finally {
      finalizing.current = false;
      setBusy(false);
    }
  }
  async function pause() {
    if (!sessionRef.current) return;
    const next = accrue(sessionRef.current);
    next.state = "paused";
    if (next.config.mode === "practice") next.deadline = null;
    if (!(await persist(next))) return;
    sessionRef.current = null;
    setSession(null);
    setSaved(next);
    releaseLock.current?.();
    releaseLock.current = null;
    navigate("lobby");
  }
  async function resume() {
    if (!saved || !saved.questions.length || busy || starting.current) return;
    starting.current = true;
    try {
      if (!(await claimSession())) {
        setNotice(
          "Ujian sedang dibuka di tab lain. Jeda sesi di tab tersebut terlebih dahulu.",
        );
        return;
      }
      const stored = await getSession(saved.userId);
      const restore =
        isSession(stored) && stored.savedAt > saved.savedAt ? stored : saved;
      if (stored && stored.id !== saved.id) {
        setSaved(stored);
        releaseLock.current?.();
        releaseLock.current = null;
        setNotice("Sesi berubah di tab lain. Lanjutkan sesi terbaru.");
        return;
      }
      const next = {
        ...restore,
        index: Math.min(restore.index, restore.questions.length - 1),
        state: "active" as const,
        savedAt: Date.now(),
      };
      if (next.config.mode === "practice")
        next.deadline =
          next.remaining === null ? null : Date.now() + next.remaining * 1000;
      if (!(await persist(next))) {
        releaseLock.current?.();
        releaseLock.current = null;
        return;
      }
      sessionRef.current = next;
      setSession(next);
      setSaved(null);
      setConfig({
        ...next.config,
        lang: availableLanguage(next.config.examType, next.config.lang),
      });
      navigate("exam");
    } catch (error) {
      setNotice(
        error instanceof Error ? error.message : "Progres belum dapat dimuat.",
      );
      releaseLock.current?.();
      releaseLock.current = null;
    } finally {
      starting.current = false;
    }
  }
  async function logout() {
    if (sessionRef.current) await pause();
    await supabase.auth.signOut();
    if (user?.role === "guest") {
      userRef.current = null;
      setUser(null);
      setAttempts([]);
      setSaved(null);
      navigate("auth");
    }
  }
  async function guest(quick = false) {
    authEpoch.current++;
    try {
      const account: User = {
        id: "guest",
        name: "Tamu",
        email: "",
        role: "guest",
      };
      userRef.current = account;
      setUser(account);
      const history = await loadHistory("guest");
      setAttempts(history);
      const restored = await getSession("guest");
      setSaved(isSession(restored) ? restored : null);
      if (quick)
        setConfig((old) => ({
          ...old,
          mode: "practice",
          limit: 10,
          duration: 0,
          content: "reviewed",
        }));
      const requested = route(),
        requestedId = location.hash.split("/")[1];
      const found =
        requested === "result"
          ? history.find((a) => a.id === requestedId)
          : undefined;
      if (found && !quick) {
        setResult(found);
        navigate("result", found.id);
      } else
        navigate(
          !quick && ["history", "study", "banks"].includes(requested)
            ? requested
            : "lobby",
          !quick && requested === "banks" ? requestedId : undefined,
        );
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Penyimpanan browser tidak tersedia.",
      );
    }
  }
  const practice = (questions: Question[]) =>
    void start(questions, {
      ...config,
      examType: questions[0]?.examType || config.examType,
      lang: questions[0]?.lang || config.lang,
      domains: [...new Set(questions.map((q) => q.domain))],
      mode: "practice",
      duration: 0,
      limit: questions.length,
    });
  async function assignment(value: { id: string; config: Config }) {
    try {
      setLoading(true);
      const bank = await loadBank(value.config.examType, value.config.lang);
      const questions = selectQuestions(bank, value.config);
      setLoading(false);
      await start(questions, value.config, value.id);
    } catch (e) {
      setNotice(
        e instanceof Error ? e.message : "Penugasan belum dapat dimulai.",
      );
      setLoading(false);
    }
  }
  const active = user && session && ["exam", "review"].includes(phase);
  if (phase === "live")
    return (
      <Suspense
        fallback={
          <main className="loading" role="status">
            {t("Memuat sesi…")}
          </main>
        }
      >
        <LiveClass
          onPractice={async (questions) => {
            if (!userRef.current) await guest();
            await start(questions, {
              ...config,
              examType: questions[0].examType,
              lang: questions[0].lang,
              mode: "practice",
              duration: 0,
              limit: questions.length,
              domains: [...new Set(questions.map((q) => q.domain))],
            });
          }}
        />
      </Suspense>
    );
  if (boot)
    return (
      <main className="loading" role="status">
        {" "}
        {t("Memuat sesi…")}{" "}
      </main>
    );
  return (
    <LearningProvider
      key={user?.id || "visitor"}
      userId={user?.id || "visitor"}
    >
      <>
        {!user && (
          <div className="auth-language-bar">
            <LanguageSelector />
          </div>
        )}
        <a
          className="skip-link"
          href="#main-content"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("main-content")?.focus();
          }}
        >
          {" "}
          {t("Lewati ke konten")}{" "}
        </a>
        {user && !active && (
          <header className="app-header">
            <a className="brand" href="#lobby">
              <span className="brand-mark">
                <StudioIcon name="layers" />
              </span>
              <strong>Exam Studio</strong>
            </a>
            <nav aria-label={t("Navigasi utama")}>
              <a
                href="#lobby"
                aria-current={phase === "lobby" ? "page" : undefined}
              >
                {" "}
                {t("Ruang belajar")}{" "}
              </a>
              <a
                href="#banks"
                aria-current={phase === "banks" ? "page" : undefined}
              >
                {t("Bank soal")}
              </a>
              <a
                href="#history"
                aria-current={phase === "history" ? "page" : undefined}
              >
                {" "}
                {t("Riwayat")}{" "}
              </a>
              <a
                href="#study"
                aria-current={phase === "study" ? "page" : undefined}
              >
                {t("Rencana & catatan")}
              </a>
              {
                <a
                  href={user.role === "guest" ? "#live" : "#coach"}
                  aria-current={phase === "coach" ? "page" : undefined}
                >
                  {t("Kelas")}
                </a>
              }
              {user.role === "admin" && (
                <a
                  href="#admin"
                  aria-current={phase === "admin" ? "page" : undefined}
                >
                  Admin
                </a>
              )}
            </nav>
            <div className="header-tools">
              <LanguageSelector />
              <div className="account">
                <span>
                  {user.role === "guest"
                    ? t("Tamu")
                    : user.name || t("Peserta")}
                </span>
                <button onClick={logout}>{t("Keluar")}</button>
              </div>
            </div>
          </header>
        )}
        {notice && (
          <div className="global-notice" role="alert">
            {t(notice)}
            <button
              aria-label={t("Tutup pemberitahuan")}
              onClick={() => setNotice("")}
            >
              ×
            </button>
          </div>
        )}
        {recovery && (
          <section className="panel recovery">
            <h1>{t("Atur password baru")}</h1>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const { error } = await supabase.auth.updateUser({
                  password: String(f.get("password")),
                });
                if (error) setNotice(error.message);
                else {
                  setRecovery(false);
                  setNotice("Password berhasil diperbarui.");
                }
              }}
            >
              <label>
                {" "}
                {t("Password baru")}{" "}
                <input
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>
              <button className="primary">{t("Simpan password")}</button>
            </form>
          </section>
        )}
        <div id="main-content" tabIndex={-1}>
          <Suspense
            fallback={
              <main className="loading" role="status">
                {" "}
                {t("Menyiapkan halaman…")}{" "}
              </main>
            }
          >
            {!user ? (
              <Auth
                onGuest={() => void guest()}
                onQuick={() => void guest(true)}
                onBanks={() => {
                  if (route() !== "banks") location.hash = "banks";
                  void guest();
                }}
              />
            ) : active ? (
              <Exam
                key={`${session.id}-${session.index}-${phase}`}
                session={session}
                storageStatus={syncStatus}
                onConfidence={(value) =>
                  update((s) => ({
                    ...s,
                    confidence: {
                      ...s.confidence,
                      [s.questions[s.index].id]: value,
                    },
                  }))
                }
                reviewing={phase === "review"}
                busy={busy}
                onAnswer={(option) =>
                  update((s) => {
                    const q = s.questions[s.index],
                      old = s.answers[q.id] || [];
                    const answer =
                      q.type === "single"
                        ? [option]
                        : old.includes(option)
                          ? old.filter((v) => v !== option)
                          : old.length < q.correctAnswers.length
                            ? [...old, option]
                            : old;
                    return { ...s, answers: { ...s.answers, [q.id]: answer } };
                  })
                }
                onNavigate={(index) => update((s) => ({ ...s, index }))}
                onFlag={() =>
                  update((s) => {
                    const id = s.questions[s.index].id;
                    return {
                      ...s,
                      flags: s.flags.includes(id)
                        ? s.flags.filter((v) => v !== id)
                        : [...s.flags, id],
                    };
                  })
                }
                onClear={() =>
                  update((s) => ({
                    ...s,
                    answers: { ...s.answers, [s.questions[s.index].id]: [] },
                  }))
                }
                onPause={() => void pause()}
                onReview={(value) => navigate(value ? "review" : "exam")}
                onFinish={() => void finish()}
              />
            ) : phase === "result" && result ? (
              <Result
                key={result.id}
                attempt={result}
                onBack={() => navigate("lobby")}
                onPractice={practice}
                onRepeat={() => {
                  setConfig({
                    ...result.session!.config,
                    domains: [
                      ...new Set(
                        result.session!.config.domains.map((domain) =>
                          canonicalDomain(result.examType, domain),
                        ),
                      ),
                    ],
                    lang: availableLanguage(result.examType, result.lang),
                  });
                  navigate("lobby");
                }}
              />
            ) : phase === "history" ? (
              <History
                initialType={config.examType}
                initialLang={config.lang}
                onPractice={practice}
                attempts={attempts}
                onOpen={(a) => {
                  setResult(a);
                  navigate("result", a.id);
                }}
                onLoadMore={async () => {
                  historyPage.current++;
                  setAttempts(await loadHistory(user.id, historyPage.current));
                }}
              />
            ) : phase === "banks" ? (
              <QuestionBanks
                onChoose={(examType, lang, mode, count) => {
                  setLoading(true);
                  setConfig({
                    ...config,
                    examType,
                    lang,
                    mode,
                    limit: Math.min(10, count),
                    duration: 0,
                    content: "all",
                    domains: Object.keys(CERTIFICATIONS[examType].blueprint),
                  });
                  setBankRevision((n) => n + 1);
                  navigate("lobby");
                }}
              />
            ) : phase === "study" ? (
              <Study
                user={user}
                attempts={attempts}
                config={config}
                pool={pool}
                onPractice={practice}
                onRefresh={async () => setAttempts(await loadHistory(user.id))}
              />
            ) : phase === "admin" && user.role === "admin" ? (
              <Admin user={user} />
            ) : phase === "coach" && user.role !== "guest" ? (
              <Coach user={user} onAssignment={(a) => void assignment(a)} />
            ) : (
              <Lobby
                onRetryBank={() => setBankRevision((n) => n + 1)}
                config={config}
                onConfig={(value) => {
                  if (
                    value.examType !== config.examType ||
                    value.lang !== config.lang
                  )
                    setLoading(true);
                  setConfig({
                    ...value,
                    lang: availableLanguage(value.examType, value.lang),
                  });
                }}
                pool={pool}
                loading={loading}
                busy={busy}
                bankNotice={t(bankNotice)}
                attempts={attempts}
                saved={saved || session}
                onResume={() => void resume()}
                onDiscard={() =>
                  void (async () => {
                    if (busy) return;
                    if (!(await claimSession())) {
                      setNotice(
                        "Ujian sedang dibuka di tab lain. Jeda sesi di tab tersebut terlebih dahulu.",
                      );
                      return;
                    }
                    try {
                      if (confirm(t("Hapus sesi yang belum selesai?"))) {
                        await removeSession(user.id, saved?.id);
                        setSaved(await getSession(user.id));
                        void clearCloudSession(user.id);
                      }
                    } catch (e) {
                      setNotice(
                        e instanceof Error
                          ? e.message
                          : "Sesi belum dapat dihapus.",
                      );
                    } finally {
                      releaseLock.current?.();
                      releaseLock.current = null;
                    }
                  })()
                }
                onStart={() => void start()}
                onPractice={practice}
              />
            )}
          </Suspense>
        </div>
        {user && !active && (
          <footer className="app-footer">
            <span>{t(syncStatus)}</span>
            <span>
              {t("Latihan independen · Bukan hasil sertifikasi resmi")}
            </span>
          </footer>
        )}
        {!active && <ReadingSettings />}
      </>
    </LearningProvider>
  );
}
