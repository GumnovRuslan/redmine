import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
	const { apiKey, xmlData, issue_id} = await request.json();

	const response = await makeRequest(
		`https://redmine.codedot.io/issues/${issue_id ?? ''}.xml`,
		apiKey,
		null,
		null,
		null,
		{
			method: 'PUT',
			body: xmlData,
			headers: {
				'content-type': 'application/xml'
			}
		},
		'xml'
	);

	return json(response);
}
