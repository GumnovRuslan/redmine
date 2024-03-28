import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey } = await request.json();
	const response = await makeRequest(
		`https://redmine.codedot.io/roles.json`,
		apiKey,
		null,
		null,
		null
	);
	return json(response);
}
