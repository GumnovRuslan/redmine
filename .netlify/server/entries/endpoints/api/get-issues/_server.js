import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, offset, limit, filterId, username, password, parent_id } = await request.json();
  const response = await makeRequest(
    "https://redmine.codedot.io/issues.json",
    apiKey,
    username,
    password,
    `&assigned_to_id=me&offset=${offset}&limit=${limit}&status_id=${filterId || "*"}${parent_id ? `&parent_id=${parent_id}` : ""}`
  );
  return json(response);
}
export {
  POST
};
