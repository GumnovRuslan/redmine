import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
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
