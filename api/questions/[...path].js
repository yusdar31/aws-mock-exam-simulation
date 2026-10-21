import ccpId from "../../src/data/banks/ccp-id.json" with { type: "json" };
import ccpEn from "../../src/data/banks/ccp-en.json" with { type: "json" };
import saaId from "../../src/data/banks/saa-id.json" with { type: "json" };
import saaEn from "../../src/data/banks/saa-en.json" with { type: "json" };
import aceId from "../../src/data/banks/gcp-ace-id.json" with { type: "json" };
import catalog from "../../src/data/certifications.json" with { type: "json" };
import {handleReports} from '../../server/reportGateway.js';
const published = [...ccpId, ...ccpEn, ...saaId, ...saaEn, ...aceId].filter(
  (question) => question.status === "approved",
);
export default async function handler(request, response) {
  const url = new URL(request.url, "https://exam.invalid");
  if(url.pathname==='/api/questions/reports'||url.pathname.startsWith('/api/questions/reports/'))return handleReports(request,response,url);
  const upstream = process.env.QUESTION_API_ORIGIN;
  if (upstream) {
    try {
      const target = new URL(url.pathname + url.search, upstream);
      const result = await fetch(target, {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          ...(request.headers.authorization
            ? { Authorization: request.headers.authorization }
            : {}),
        },
        ...(["GET", "HEAD"].includes(request.method)
          ? {}
          : { body: JSON.stringify(request.body) }),
        signal: AbortSignal.timeout(12000),
        redirect: "error",
      });
      response.setHeader("Cache-Control", "no-store");
      return response.status(result.status).send(await result.text());
    } catch {
      return response
        .status(503)
        .json({ error: "Layanan pusat belum dapat dihubungi." });
    }
  }
  if (request.method !== "GET" || url.pathname !== "/api/questions/approved")
    return response.status(503).json({
      error:
        "Layanan editorial belum terhubung. Perubahan tetap tersimpan lokal untuk dikirim ulang.",
    });
  const type = url.searchParams.get("examType"),
    lang = url.searchParams.get("lang");
  if (
    !Object.hasOwn(catalog, type || "") ||
    !catalog[type].languages.includes(lang)
  )
    return response
      .status(400)
      .json({ error: "Sertifikasi atau bahasa belum tersedia." });
  const page = Math.max(
    1,
    Math.min(100, Number.parseInt(url.searchParams.get("page")) || 1),
  );
  const limit = Math.max(
    1,
    Math.min(200, Number.parseInt(url.searchParams.get("limit")) || 200),
  );
  const items = published.filter(
    (q) => q.examType === type && q.lang === lang && q.status === "approved",
  );
  response.setHeader("Cache-Control", "public, max-age=60, s-maxage=300");
  return response.status(200).json({
    items: items.slice((page - 1) * limit, page * limit),
    total: items.length,
    page,
    limit,
    excludedIds: [],
    source: "release",
  });
}
