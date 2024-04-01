import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/enumerations/time_entry_activities.json`,
    apiKey,
    null,
    null
  );
  return json(response);
}
export {
  POST
};
