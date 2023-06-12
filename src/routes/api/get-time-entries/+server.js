import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
    const { apiKey, issueId, userId } = await request.json()
    const response = await makeRequest(`http://redmine.codedot.io/time_entries.json`, apiKey, null, null, `&issue_id=${issueId}&user_id=${userId}`)
    return json(response)
}
