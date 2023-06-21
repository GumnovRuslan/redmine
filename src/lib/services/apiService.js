export const getUserCred = async (username, password, apiKey) =>
	await fetch('/api/get-account', {
		method: 'POST',
		body: JSON.stringify({ username, password, apiKey }),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());

export const getIssues = async (apiKey) =>
	await fetch('/api/get-issues', {
		method: 'POST',
		body: JSON.stringify({
			apiKey
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((res) => res.issues);

export const getIssue = async (apiKey, issue_id) =>
	await fetch('/api/get-issue', {
		method: 'POST',
		body: JSON.stringify({
			apiKey,
			issue_id
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((res) => res);

export const getTimeEntries = async (apiKey, issueId, userId, offset, limit) =>
	await fetch('/api/get-time-entries', {
		method: 'POST',
		body: JSON.stringify({
			apiKey,
			issueId,
			userId,
			offset,
			limit
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then(({ time_entries, total_count }) => {
			return { time_entries, total_count };
		});

export const getEntryActivities = async (apiKey) =>
	await fetch('/api/get-entry-activities', {
		method: 'POST',
		body: JSON.stringify({
			apiKey
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((res) => res.time_entry_activities);

export const setTimeEntries = async (apiKey, timeEntry) => {
	const { issue_id, spent_on, hours, activity_id, comments } = timeEntry;

	const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
	<time_entry>
	  <issue_id>${issue_id}</issue_id>
	  <spent_on>${spent_on}</spent_on>
	  <hours>${hours}</hours>
	  <activity_id>${activity_id}</activity_id>
	  <comments>${comments}</comments>
	</time_entry>`;

	return await fetch('/api/set-time-entries', {
		method: 'POST',
		body: JSON.stringify({ apiKey, xmlData }),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) =>
		res.statusText === 'OK'
			? { status: true, responseMessage: 'Entry added' }
			: { status: false, responseMessage: 'Entry not was added' }
	);
};
