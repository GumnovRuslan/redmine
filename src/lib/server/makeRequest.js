import { error } from '@sveltejs/kit';

export const makeRequest = async (url, apiKey, username, password, params, body, type = 'json') => {
	if (username && password) {
		const headers = new Headers({
			Authorization: `Basic ${Buffer.from(username + ':' + password, 'binary').toString('base64')}`
		});
		return await fetch(url, { headers })
			.then((response) => response.json())
			.catch((e) => {
				throw error(500, e.message);
			});
	} else {
		return await fetch(`${url}${apiKey && `?key=${apiKey}${params ?? ''}`}`, body ? body : {})
			.then((response) => (type == 'json' ? response.json() : response))
			.catch((e) => {
				throw error(500, e.message);
			});
	}
};
