import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey, issue_id } = await request.json();
	const response = await makeRequest(
		`http://redmine.codedot.io/issues/${issue_id}.json`,
		apiKey,
		null,
		null,
		'&include=attachments'
	);
	return json(response);
}
