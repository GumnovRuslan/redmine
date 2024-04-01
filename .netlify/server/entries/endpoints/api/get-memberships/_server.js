import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, project_id } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/projects/${project_id}/memberships.json`,
    apiKey,
    null,
    null,
    null
  );
  return json(response);
}
export {
  POST
};
