import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, issueId, userId, offset, limit } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/time_entries.json`,
    apiKey,
    null,
    null,
    `&issue_id=${issueId}&user_id=${userId}&offset=${offset}&limit=${limit}`
  );
  return json(response);
}
export {
  POST
};
