import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, xmlData } = await request.json();
  const response = await makeRequest(
    `https://redmine.codedot.io/time_entries.xml`,
    apiKey,
    null,
    null,
    null,
    {
      method: "POST",
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
