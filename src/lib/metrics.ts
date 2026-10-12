import type { Metric } from "web-vitals";
export async function startMetrics() {
  const { onCLS, onINP, onLCP } = await import("web-vitals");
  const send = (metric: Metric) => {
    const payload = {
      name: metric.name,
      value: metric.value,
      device: innerWidth < 768 ? "mobile" : "desktop",
      id: metric.id,
    };
    // Keep local diagnostics even when an analytics endpoint is not configured.
    try {
      const records = JSON.parse(sessionStorage.getItem("exam-vitals") || "[]");
      records.push(payload);
      sessionStorage.setItem("exam-vitals", JSON.stringify(records.slice(-50)));
    } catch {
      /* Storage may be disabled. */
    }
    const endpoint = import.meta.env.VITE_METRICS_URL;
    if (endpoint)
      navigator.sendBeacon(
        endpoint,
        new Blob([JSON.stringify(payload)], { type: "application/json" }),
      );
  };
  onCLS(send);
  onINP(send);
  onLCP(send);
}
