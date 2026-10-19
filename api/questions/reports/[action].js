import { handleReports } from "../../../server/reportGateway.js";

// Standalone Vercel functions need a route at this depth for health/status/id.
export default function handler(request, response) {
  return handleReports(request, response, new URL(request.url, "https://exam.invalid"));
}
