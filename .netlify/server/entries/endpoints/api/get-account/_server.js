import { j as json } from "../../../../chunks/index.js";
import { m as makeRequest } from "../../../../chunks/makeRequest.js";
async function POST({ request }) {
  const { apiKey, username, password } = await request.json();
  let response = await makeRequest(
    "https://redmine.codedot.io/my/account.json",
    apiKey,
    username,
    password
  );
  return json({
    id: response.user.id,
    login: response.user.login,
    firstname: response.user.firstname,
    lastname: response.user.lastname,
    localApiKey: response.user.api_key,
    mail: response.user.mail
  });
}
export {
  POST
};
