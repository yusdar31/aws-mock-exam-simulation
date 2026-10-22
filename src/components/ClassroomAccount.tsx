import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useLanguage } from "../i18n/context";
type AccountRoom = {
  code: string;
  title: string;
  status: string;
  createdAt: number;
};
export default function ClassroomAccount({
  enabled,
  active,
  linked,
  onAccount,
  onResume,
  onLink,
}: {
  enabled: boolean;
  active: boolean;
  linked: boolean;
  onAccount: (id: string | null) => void;
  onResume: (code: string) => void;
  onLink: () => void;
}) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<AccountRoom[]>([]);
  const [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  useEffect(() => {
    let live = true;
    const apply = (user: { id: string; email?: string } | null) => {
      if (!live) return;
      setEmail(user?.email || "");
      onAccount(user?.id || null);
    };
    void supabase.auth
      .getSession()
      .then(({ data }) => apply(data.session?.user || null));
    const { data } = supabase.auth.onAuthStateChange((_event, session) =>
      apply(session?.user || null),
    );
    return () => {
      live = false;
      data.subscription.unsubscribe();
    };
  }, [onAccount]);
  useEffect(() => {
    let live = true;
    if (!email || !enabled) return;
    void supabase
      .rpc("classroom_rpc", { action: "account_history", payload: {} })
      .then(({ data, error }) => {
        if (!live) return;
        if (error)
          setNotice(t("Riwayat akun belum dapat dimuat. Coba lagi nanti."));
        else setItems(data?.items || []);
      });
    return () => {
      live = false;
    };
  }, [email, enabled, linked, t]);
  return (
    <section className="panel classroom-account">
      <h2>{t("Simpan sesi ke akun")}</h2>
      {!email ? (
        <>
          <p>
            {t(
              "Masuk agar hasil dan pembahasan kelas dapat dibuka dari browser lain. Bergabung sebagai tamu tetap tersedia.",
            )}
          </p>
          <details>
            <summary>{t("Masuk atau daftar akun")}</summary>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                setBusy(true);
                setNotice("");
                const form = new FormData(event.currentTarget);
                try {
                  const credentials = {
                    email: String(form.get("email")),
                    password: String(form.get("password")),
                  };
                  const register = form.get("mode") === "register";
                  const { error } = register
                    ? await supabase.auth.signUp(credentials)
                    : await supabase.auth.signInWithPassword(credentials);
                  if (error) throw error;
                  if (register)
                    setNotice(
                      t(
                        "Pendaftaran berhasil. Periksa email untuk verifikasi akun.",
                      ),
                    );
                } catch (error) {
                  setNotice(
                    error instanceof Error
                      ? error.message
                      : t("Login belum berhasil."),
                  );
                } finally {
                  setBusy(false);
                }
              }}
            >
              <label>
                {t("Email")}
                <input
                  type="email"
                  name="email"
                  autoComplete="username"
                  required
                />
              </label>
              <label>
                {t("Password")}
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                  required
                />
              </label>
              <label>
                {t("Peran akun")}
                <select name="mode">
                  <option value="login">{t("Masuk")}</option>
                  <option value="register">{t("Daftar akun baru")}</option>
                </select>
              </label>
              <button disabled={busy}>{t("Lanjutkan dengan akun")}</button>
            </form>
          </details>
        </>
      ) : (
        <>
          <p>{t("Masuk sebagai {email}", { email })}</p>
          {!enabled ? (
            <p>{t("Penyimpanan akun kelas belum tersedia di server.")}</p>
          ) : active ? (
            linked ? (
              <p role="status">{t("Sesi ini tersimpan ke akun Anda.")}</p>
            ) : (
              <button onClick={onLink}>
                {t("Hubungkan sesi ini ke akun")}
              </button>
            )
          ) : (
            <>
              <p>
                {t(
                  "Sesi yang diikuti setelah masuk otomatis terhubung ke akun. Membuka sesi di perangkat lain memindahkan akses pengerjaan ke perangkat tersebut.",
                )}
              </p>
              <h3>{t("Sesi akun Anda")}</h3>
              {!items.length && <p>{t("Belum ada sesi yang terhubung.")}</p>}
              <ul className="classroom-history">
                {items.map((item) => (
                  <li key={item.code}>
                    <span>
                      <strong>{item.title}</strong>
                      <br />
                      {item.code}
                    </span>
                    <button onClick={() => onResume(item.code)}>
                      {t("Buka sesi {code}", { code: item.code })}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
      {notice && <p role="status">{notice}</p>}
    </section>
  );
}
