export const getUserCred = async (username, password, apiKey) => await fetch('/api/get-account', {
    method: 'POST',
    body: JSON.stringify({ username, password, apiKey }),
    headers: {
        'content-type': 'application/json'
    }
}).then((res) => res.json())

export const getIssues = async (apiKey) => await fetch('/api/get-issues', {
    method: 'POST',
    body: JSON.stringify({
        apiKey
    }),
    headers: {
        'content-type': 'application/json'
    }
}).then((res) => res.json()).then((res) => res.issues);

export const getTimeEntries = async (apiKey, issueId, userId) => await fetch('/api/get-time-entries', {
    method: 'POST',
    body: JSON.stringify({
        apiKey, issueId, userId
    }),
    headers: {
        'content-type': 'application/json'
    }
}).then((res) => res.json()).then(res => res.time_entries)
