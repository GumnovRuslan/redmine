export const getUserCred = async (username, password, apiKey) =>
	await fetch('/api/get-account', {
		method: 'POST',
		body: JSON.stringify({ username, password, apiKey }),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());

export const getIssues = async (apiKey, offset, limit, filterId) =>
	await fetch('/api/get-issues', {
		method: 'POST',
		body: JSON.stringify({
			apiKey,
			offset,
			limit,
			filterId
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then(({ issues, total_count }) => {
			return { issues, total_count };
		});

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
	const { issue_id, spent_on, hours, activity_id, comments, billable_id } = timeEntry;

	const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
	<time_entry>
	  <issue_id>${issue_id}</issue_id>
	  <spent_on>${spent_on}</spent_on>
	  <hours>${hours}</hours>
	  <activity_id>${activity_id}</activity_id>
	  <comments>${comments}</comments>
	  <custom_fields type="array">
		<custom_field id="2" name="Billable">
		<value>${billable_id}</value>
		</custom_field>
	  </custom_fields>
	</time_entry>`;

	return await fetch('/api/set-time-entries', {
		method: 'POST',
		body: JSON.stringify({ apiKey, xmlData }),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => {
		return res.ok === true
			? { status: true, responseMessage: 'Entry added' }
			: { status: false, responseMessage: 'Entry not was added' };
	});
};

export const setStatusIssue = async (apiKey, issue_id, status_id, user_id) => {
	const xmlData = `?xml version="1.0" encoding="UTF-8"?
	<issue>
		<status_id>${status_id}</status_id>
		<assigned_to_id>${user_id}</assigned_to_id>
	</issue>
	`
	return await fetch(`/api/set-issue`, {
		method: 'POST',
		body: JSON.stringify({apiKey, xmlData, issue_id}),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => {
		return res.ok === true
			? { status: true, responseMessage: 'Status changed' }
			: { status: false, responseMessage: 'Status not was changed' };
	});
}
