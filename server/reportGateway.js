export async function handleReports(request, response, url) {
  const endpoint = process.env.VITE_SUPABASE_URL,
    key = process.env.VITE_SUPABASE_ANON_KEY;
  response.setHeader("Cache-Control", "no-store");
  if (!endpoint || !key)
    return response
      .status(503)
      .json({ error: "Layanan laporan belum diaktifkan." });
  const id = url.pathname.split("/")[4];
  const action =
    request.method === "GET"
      ? id === "health"
        ? "health"
        : "list"
      : request.method === "POST"
        ? id === "status"
          ? "status"
          : "submit"
        : request.method === "PATCH" && id
          ? "resolve"
          : null;
  if (!action)
    return response.status(405).json({ error: "Metode tidak didukung." });
  let body = request.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return response.status(400).json({ error: "Data laporan tidak valid." });
    }
  }
  if (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body) ||
    JSON.stringify(body).length > 100000
  )
    return response.status(400).json({ error: "Data laporan tidak valid." });
  const payload = action === "resolve" ? { ...body, id } : body;
  try {
    const upstream = await fetch(`${endpoint}/rest/v1/rpc/report_rpc`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: request.headers.authorization || `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, payload }),
      signal: AbortSignal.timeout(12000),
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      const unavailable = ["PGRST202", "42883", "42P01"].includes(data.code);
      const forbidden =
        data.message?.includes("admin") || data.message?.includes("ditolak");
      return response
        .status(unavailable ? 503 : forbidden ? 403 : 400)
        .json({
          error: unavailable
            ? "Layanan laporan belum diaktifkan."
            : data.message || "Laporan belum diterima.",
        });
    }
    return response.status(action === "submit" ? 201 : 200).json(data);
  } catch {
    return response
      .status(503)
      .json({
        error:
          "Layanan laporan belum dapat dihubungi. Laporan tetap disimpan lokal.",
      });
  }
}
