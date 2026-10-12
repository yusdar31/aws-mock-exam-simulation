const windows = new Map();
export function rateLimit(limit = 60, windowMs = 60000) {
  return (request, response, next) => {
    const now = Date.now(),
      key = `${limit}:${request.user?.id || request.ip}`;
    if (windows.size > 10000)
      for (const [key, value] of windows)
        if (now > value.until) windows.delete(key);
    const entry = windows.get(key);
    if (!entry || now > entry.until) {
      windows.set(key, { count: 1, until: now + windowMs });
      return next();
    }
    if (++entry.count > limit) {
      response.set(
        "Retry-After",
        String(Math.ceil((entry.until - now) / 1000)),
      );
      return response
        .status(429)
        .json({ error: "Terlalu banyak permintaan. Coba lagi sebentar." });
    }
    next();
  };
}
export async function resolveIdentity(token) {
  const url = process.env.SUPABASE_URL,
    key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key)
    throw Object.assign(
      new Error("Konfigurasi autentikasi server belum tersedia."),
      { status: 503 },
    );
  const response = await fetch(`${url}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: key },
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok)
    throw Object.assign(new Error("Sesi tidak valid. Silakan masuk kembali."), {
      status: 401,
    });
  const user = await response.json();
  if (!user.id)
    throw Object.assign(new Error("Sesi tidak valid."), { status: 401 });
  const admins = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const coaches = (process.env.COACH_EMAILS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  let databaseRole;
  try {
    const r = await fetch(
      `${url}/rest/v1/app_roles?user_id=eq.${encodeURIComponent(user.id)}&select=role&limit=1`,
      {
        headers: { Authorization: `Bearer ${token}`, apikey: key },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (r.ok) databaseRole = (await r.json())[0]?.role;
  } catch {
    /* Fall back to verified app metadata or server configuration. */
  }
  const role =
    admins.includes(user.email?.toLowerCase()) ||
    user.app_metadata?.role === "admin" ||
    databaseRole === "admin"
      ? "admin"
      : coaches.includes(user.email?.toLowerCase()) ||
          user.app_metadata?.role === "coach" ||
          databaseRole === "coach"
        ? "coach"
        : "student";
  return {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.name || "Peserta",
    role,
  };
}
export function requireUser(resolver = resolveIdentity) {
  return async (request, response, next) => {
    const header = request.headers.authorization || "";
    if (!header.startsWith("Bearer "))
      return response
        .status(401)
        .json({ error: "Silakan masuk terlebih dahulu." });
    try {
      request.user = await resolver(header.slice(7));
      next();
    } catch (error) {
      next(error);
    }
  };
}
export function requireAdmin(request, response, next) {
  if (request.user?.role !== "admin")
    return response
      .status(403)
      .json({ error: "Hanya administrator dapat mengubah bank soal." });
  next();
}
