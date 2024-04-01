import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, xmlData, issue_id } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/issues/${issue_id ?? ""}.xml`,
    apiKey,
    null,
    null,
    null,
    {
      method: "PUT",
      body: xmlData,
      headers: {
        "content-type": "application/xml"
      }
    },
    "xml"
  );
  return json(response);
}
export {
  POST
};
