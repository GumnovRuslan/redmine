import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey, xmlData } = await request.json();

	const response = await makeRequest(
		`https://redmine.codedot.io/time_entries.xml`,
		apiKey,
		null,
		null,
		null,
		{
			method: 'POST',
			body: xmlData,
			headers: {
				'content-type': 'application/xml'
			}
		},
		'xml'
	);

	return json(response);
}
