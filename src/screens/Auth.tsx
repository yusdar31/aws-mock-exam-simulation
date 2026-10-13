import { useLanguage } from "../i18n/context";
import { useState } from "react";
import { authConfigured, supabase } from "../lib/supabase";
export default function Auth({ onGuest }: { onGuest: () => void }) {
  const { t } = useLanguage();
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");
  const [busy, setBusy] = useState(false),
    [message, setMessage] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const data = new FormData(event.currentTarget),
      email = String(data.get("email")),
      password = String(data.get("password") || "");
    try {
      if (!authConfigured)
        throw new Error(
          "Login belum dikonfigurasi. Anda tetap dapat mencoba latihan sebagai tamu.",
        );
      if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${location.origin}/#auth`,
        });
        if (error) throw error;
        setMessage(
          "Jika akun tersedia, tautan pemulihan akan dikirim ke email Anda.",
        );
      } else if (mode === "register") {
        if (password !== data.get("confirm"))
          throw new Error("Konfirmasi password tidak sama.");
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name: String(data.get("name")) } },
        });
        if (error) throw error;
        setMessage(
          "Pendaftaran berhasil. Periksa email untuk verifikasi akun.",
        );
        setMode("login");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error)
          throw new Error(
            error.message === "Invalid login credentials"
              ? "Email atau password salah."
              : error.message,
          );
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Permintaan gagal.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="auth-shell">
      <div className="auth-intro">
        <span className="eyebrow">{t("AWS CERTIFICATION PRACTICE")}</span>
        <h1>
          {" "}
          {t("Latihan terarah.")} <br /> {t("Ujian lebih siap.")}{" "}
        </h1>
        <p>
          {" "}
          {t(
            "Latih konsep, evaluasi keputusan, dan ulangi materi yang perlu Anda kuasai.",
          )}{" "}
        </p>
        <div className="auth-facts">
          <span>CLF-C02 & SAA-C03</span>
          <span>{t("Bahasa Indonesia & English")}</span>
          <span>{t("Progres tersimpan otomatis")}</span>
        </div>
      </div>
      <section className="panel auth-panel">
        <h2>
          {mode === "register"
            ? t("Buat akun")
            : mode === "reset"
              ? t("Pulihkan akun")
              : t("Selamat datang kembali")}
        </h2>
        <p>{t("Gunakan akun untuk menyinkronkan progres antarperangkat.")}</p>
        <form onSubmit={submit}>
          {mode === "register" && (
            <label>
              {" "}
              {t("Nama lengkap")}{" "}
              <input name="name" autoComplete="name" required minLength={2} />
            </label>
          )}
          <label>
            {" "}
            {t("Email")}{" "}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          {mode !== "reset" && (
            <label>
              {" "}
              {t("Password")}{" "}
              <input
                name="password"
                type="password"
                minLength={mode === "register" ? 8 : 1}
                autoComplete={
                  mode === "register" ? "new-password" : "current-password"
                }
                required
              />
            </label>
          )}
          {mode === "register" && (
            <label>
              {" "}
              {t("Konfirmasi password")}{" "}
              <input
                name="confirm"
                type="password"
                autoComplete="new-password"
                required
              />
            </label>
          )}
          {message && (
            <p role="status" className="notice">
              {t(message)}
            </p>
          )}
          <button className="primary" disabled={busy}>
            {busy
              ? t("Memproses…")
              : mode === "register"
                ? t("Daftar")
                : mode === "reset"
                  ? t("Kirim tautan")
                  : t("Masuk")}
          </button>
        </form>
        <div className="auth-links">
          <button
            className="text-button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setMessage("");
            }}
          >
            {mode === "login" ? t("Buat akun baru") : t("Kembali ke login")}
          </button>
          {mode === "login" && (
            <button className="text-button" onClick={() => setMode("reset")}>
              {" "}
              {t("Lupa password?")}{" "}
            </button>
          )}
        </div>
        <hr />
        <button onClick={onGuest} className="secondary full-width">
          {" "}
          {t("Coba latihan sebagai tamu")}{" "}
        </button>
        <small>{t("Progres tamu tersimpan di browser ini.")}</small>
      </section>
      <p className="independent-note">
        {" "}
        {t(
          "Platform latihan independen. Hasil latihan bukan skor sertifikasi resmi AWS.",
        )}{" "}
      </p>
    </main>
  );
}
