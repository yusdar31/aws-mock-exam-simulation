import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../i18n/context";
import { CERTIFICATIONS, EXAM_TYPES } from "../lib/catalog";
import { loadAvailableBank } from "../lib/availableBank";
import { quotas, simulationReady } from "../lib/exam";
import QuestionReview from "../components/QuestionReview";
import type { ExamType, Language, Mode, Question } from "../types";

const banks = EXAM_TYPES.flatMap((examType) =>
  CERTIFICATIONS[examType].languages.map((lang) => ({
    id: `${examType}-${lang}`,
    examType,
    lang: lang as Language,
  })),
);
type Bank = (typeof banks)[number];
type Entry = { questions: Question[]; notice: string; error?: boolean };
const selectedBank = () => location.hash.split("/")[1] || "";
const pageSize = 20;

export default function QuestionBanks({
  onChoose,
}: {
  onChoose: (
    examType: ExamType,
    lang: Language,
    mode: Mode,
    count: number,
  ) => void;
}) {
  const { t, locale } = useLanguage();
  const [entries, setEntries] = useState<Record<string, Entry>>({});
  const [revision, setRevision] = useState(0);
  const [selected, setSelected] = useState(selectedBank);
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState("all");
  const [questionLanguage, setQuestionLanguage] = useState("all");
  const [questionSearch, setQuestionSearch] = useState("");
  const [domain, setDomain] = useState("all");
  const [limit, setLimit] = useState(pageSize);
  const heading = useRef<HTMLHeadingElement>(null);
  const languageName = (lang: Language) =>
    lang === "id" ? t("Bahasa Indonesia") : t("Bahasa Inggris");
  const count = (n: number) => new Intl.NumberFormat(locale).format(n);

  useEffect(() => {
    const change = () => {
      setSelected(selectedBank());
      setQuestionSearch("");
      setDomain("all");
      setLimit(pageSize);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [selected]);
  useEffect(() => {
    let cancelled = false;
    void Promise.all(
      banks.map(async (bank) => {
        let entry: Entry;
        try {
          entry = await loadAvailableBank(bank.examType, bank.lang);
        } catch {
          entry = {
            questions: [],
            notice: "Bank soal belum dapat dimuat. Coba muat ulang.",
            error: true,
          };
        }
        if (!cancelled) setEntries((old) => ({ ...old, [bank.id]: entry }));
      }),
    );
    return () => {
      cancelled = true;
    };
  }, [revision]);

  const visibleBanks = banks.filter((bank) => {
    const certification = CERTIFICATIONS[bank.examType];
    const text = [
      certification.name,
      certification.code,
      certification.provider,
      t(certification.description),
      languageName(bank.lang),
      ...Object.keys(certification.blueprint).map((value) => t(value)),
    ]
      .join(" ")
      .toLocaleLowerCase();
    return (
      (provider === "all" || certification.provider === provider) &&
      (questionLanguage === "all" || bank.lang === questionLanguage) &&
      text.includes(search.trim().toLocaleLowerCase())
    );
  });
  const bank = banks.find((item) => item.id === selected);
  const entry = bank ? entries[bank.id] : undefined;
  const questions = entry?.questions;
  const filteredQuestions = useMemo(
    () =>
      (questions || []).filter(
        (q) =>
          (domain === "all" || q.domain === domain) &&
          `${q.id} ${q.prompt} ${q.options.map((o) => o.text).join(" ")}`
            .toLocaleLowerCase()
            .includes(questionSearch.trim().toLocaleLowerCase()),
      ),
    [questions, domain, questionSearch],
  );
  function retry() {
    setEntries({});
    setRevision((n) => n + 1);
  }
  function actions(item: Bank, value: Entry) {
    const missing = Object.entries(quotas(item.examType)).some(
      ([name, required]) =>
        value.questions.filter((q) => q.domain === name && simulationReady(q))
          .length < required,
    );
    return (
      <div className="bank-actions">
        <button
          className="primary"
          disabled={!!value.error || !value.questions.length}
          onClick={() =>
            onChoose(
              item.examType,
              item.lang,
              "practice",
              value.questions.length,
            )
          }
        >
          {t("Siapkan latihan")}
        </button>
        <button
          disabled={!!value.error || missing}
          onClick={() =>
            onChoose(
              item.examType,
              item.lang,
              "simulation",
              value.questions.length,
            )
          }
        >
          {t("Siapkan simulasi")}
        </button>
        {missing && !value.error && (
          <small>{t("Cakupan soal siap simulasi belum mencukupi.")}</small>
        )}
      </div>
    );
  }

  return (
    <main className="page banks-page">
      <div className="page-heading">
        <div>
          {selected && (
            <a className="bank-back" href="#banks">
              {t("Kembali ke daftar bank")}
            </a>
          )}
          <h1 ref={heading} tabIndex={-1}>
            {bank
              ? `${CERTIFICATIONS[bank.examType].name} · ${languageName(bank.lang)}`
              : selected
                ? t("Bank tidak ditemukan")
                : t("Bank soal")}
          </h1>
          <p>
            {selected
              ? t("Telusuri soal dan cakupan materi sebelum menyiapkan sesi.")
              : t(
                  "Temukan bank soal, lihat cakupan materi, lalu pilih latihan Anda.",
                )}
          </p>
        </div>
        <button onClick={retry}>{t("Muat ulang bank")}</button>
      </div>
      {!selected ? (
        <>
          <section
            className="bank-filters panel"
            aria-label={t("Filter bank soal")}
          >
            <label>
              {t("Cari bank soal")}
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("Nama sertifikasi, kode, atau domain")}
              />
            </label>
            <label>
              {t("Penyedia sertifikasi")}
              <select
                aria-label={t("Penyedia sertifikasi")}
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
              >
                <option value="all">{t("Semua penyedia")}</option>
                <option value="AWS">AWS</option>
                <option value="Google Cloud">Google Cloud</option>
              </select>
            </label>
            <label>
              {t("Bahasa soal")}
              <select
                aria-label={t("Bahasa soal")}
                value={questionLanguage}
                onChange={(e) => setQuestionLanguage(e.target.value)}
              >
                <option value="all">{t("Semua bahasa")}</option>
                <option value="id">{languageName("id")}</option>
                <option value="en">{languageName("en")}</option>
              </select>
            </label>
          </section>
          <p className="bank-result-count" role="status">
            {t("{count} bank ditampilkan", { count: visibleBanks.length })}
          </p>
          <div className="bank-list">
            {visibleBanks.map((item) => {
              const cert = CERTIFICATIONS[item.examType];
              const value = entries[item.id];
              return (
                <article
                  className="bank-card panel"
                  key={item.id}
                  aria-busy={!value}
                >
                  <div className="bank-card-heading">
                    <div>
                      <p className="eyebrow">
                        {cert.provider} · {cert.code}
                      </p>
                      <h2>
                        <a href={`#banks/${item.id}`}>{cert.name}</a>
                      </h2>
                      <p>{t(cert.description)}</p>
                    </div>
                    <span className="context-chip">
                      {languageName(item.lang)}
                    </span>
                  </div>
                  <dl className="bank-stats">
                    <div>
                      <dt>{t("Soal tersedia")}</dt>
                      <dd>{value ? count(value.questions.length) : "…"}</dd>
                    </div>
                    <div>
                      <dt>{t("Domain materi")}</dt>
                      <dd>
                        {value
                          ? new Set(value.questions.map((q) => q.domain)).size
                          : "…"}
                      </dd>
                    </div>
                    <div>
                      <dt>{t("Dilengkapi referensi & pembahasan opsi")}</dt>
                      <dd>
                        {value
                          ? count(
                              value.questions.filter(simulationReady).length,
                            )
                          : "…"}
                      </dd>
                    </div>
                  </dl>
                  {!value ? (
                    <p role="status">{t("Memuat bank soal…")}</p>
                  ) : (
                    <>
                      {value.notice && (
                        <p
                          className="bank-source"
                          role={value.error ? "alert" : undefined}
                        >
                          {t(value.notice)}
                        </p>
                      )}
                      <div className="bank-card-footer">
                        <a href={`#banks/${item.id}`}>
                          {t("Lihat daftar soal")}
                        </a>
                        {actions(item, value)}
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
          {!visibleBanks.length && (
            <section className="panel bank-empty">
              <h2>{t("Tidak ada bank yang cocok")}</h2>
              <p>{t("Coba kata kunci lain atau hapus filter.")}</p>
              <button
                onClick={() => {
                  setSearch("");
                  setProvider("all");
                  setQuestionLanguage("all");
                }}
              >
                {t("Hapus filter")}
              </button>
            </section>
          )}
        </>
      ) : !bank ? (
        <p role="status">{t("Pilih bank dari daftar yang tersedia.")}</p>
      ) : !entry ? (
        <p role="status">{t("Memuat bank soal…")}</p>
      ) : entry.error ? (
        <p role="alert">{t(entry.notice)}</p>
      ) : (
        <>
          <section className="panel bank-detail-overview">
            <p className="eyebrow">
              {CERTIFICATIONS[bank.examType].code} · {languageName(bank.lang)}
            </p>
            <p>{t(entry.notice || "Bank soal tersedia.")}</p>
            <ul className="bank-domains" aria-label={t("Cakupan domain")}>
              {Object.keys(CERTIFICATIONS[bank.examType].blueprint).map(
                (name) => (
                  <li key={name}>
                    <span>{t(name)}</span>
                    <strong>
                      {t("{count} soal", {
                        count: count(
                          entry.questions.filter((q) => q.domain === name)
                            .length,
                        ),
                      })}
                    </strong>
                  </li>
                ),
              )}
            </ul>
            {actions(bank, entry)}
          </section>
          <section
            className="panel bank-filters"
            aria-label={t("Filter daftar soal")}
          >
            <label>
              {t("Cari soal")}
              <input
                type="search"
                value={questionSearch}
                onChange={(e) => {
                  setQuestionSearch(e.target.value);
                  setLimit(pageSize);
                }}
                placeholder={t("Kata kunci atau ID soal")}
              />
            </label>
            <label>
              {t("Domain materi")}
              <select
                aria-label={t("Domain materi")}
                value={domain}
                onChange={(e) => {
                  setDomain(e.target.value);
                  setLimit(pageSize);
                }}
              >
                <option value="all">{t("Semua domain")}</option>
                {[...new Set(entry.questions.map((q) => q.domain))].map(
                  (name) => (
                    <option key={name} value={name}>
                      {t(name)}
                    </option>
                  ),
                )}
              </select>
            </label>
          </section>
          <p role="status" className="bank-result-count">
            {t("{shown} dari {total} soal ditampilkan", {
              shown: count(Math.min(limit, filteredQuestions.length)),
              total: count(filteredQuestions.length),
            })}
          </p>
          <div className="bank-question-list">
            {filteredQuestions.slice(0, limit).map((q, index) => (
              <article key={q.id} className="panel bank-question">
                <p className="bank-question-meta">
                  {t(q.domain)} · {q.id} ·{" "}
                  {q.type === "single"
                    ? t("Satu jawaban")
                    : t("Beberapa jawaban")}
                </p>
                <h2 lang={q.lang}>
                  {index + 1}. {q.prompt}
                </h2>
                <details>
                  <summary>{t("Lihat jawaban & pembahasan")}</summary>
                  <QuestionReview question={q} selected={[]} />
                </details>
              </article>
            ))}
          </div>
          {!filteredQuestions.length && (
            <p className="panel bank-empty">
              {t(
                "Tidak ada soal yang cocok. Coba kata kunci atau domain lain.",
              )}
            </p>
          )}
          {filteredQuestions.length > limit && (
            <button
              className="bank-load-more"
              onClick={() => setLimit((n) => n + pageSize)}
            >
              {t("Tampilkan soal berikutnya")}
            </button>
          )}
        </>
      )}
    </main>
  );
}
