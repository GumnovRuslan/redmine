import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, issue_id } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/issues/${issue_id}.json`,
    apiKey,
    null,
    null,
    "&include=attachments"
  );
  return json(response);
}
export {
  POST
};
