import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey } = await request.json();
	const response = await makeRequest(
		`http://redmine.codedot.io/enumerations/time_entry_activities.json`,
		apiKey,
		null,
		null
	);
	return json(response);
}
