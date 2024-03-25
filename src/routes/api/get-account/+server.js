import { json } from '@sveltejs/kit';

import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey, username, password } = await request.json();
	let response = await makeRequest(
		'https://redmine.codedot.io/my/account.json',
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
