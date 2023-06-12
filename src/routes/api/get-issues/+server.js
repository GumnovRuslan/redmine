import { json } from '@sveltejs/kit';
import { makeRequest } from '$lib/server/makeRequest';

export async function POST({ request }) {
    const { apiKey, username, password } = await request.json()
    const response = await makeRequest("http://redmine.codedot.io/issues.json", apiKey, username, password, "&assigned_to_id=me")
    return json(response)
}
